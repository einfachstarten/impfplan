class HealthCheck {
  static getStatus() {
    const checks = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      version: '1.0.0',
      checks: {
        localStorage: this.checkLocalStorage(),
        notifications: this.checkNotifications(),
        manifest: this.checkManifest()
      }
    };

    const allHealthy = Object.values(checks.checks).every(c => c.status === 'ok');
    checks.status = allHealthy ? 'healthy' : 'degraded';

    return checks;
  }

  static checkLocalStorage() {
    try {
      localStorage.setItem('health-test', 'test');
      localStorage.removeItem('health-test');
      return { status: 'ok', message: 'localStorage available' };
    } catch (e) {
      return { status: 'error', message: 'localStorage not available' };
    }
  }

  static checkNotifications() {
    return {
      status: 'Notification' in window ? 'ok' : 'warning',
      message: 'Notification' in window ? 'API available' : 'API not supported'
    };
  }

  static checkManifest() {
    const manifestLink = document.querySelector('link[rel="manifest"]');
    return {
      status: manifestLink ? 'ok' : 'warning',
      message: manifestLink ? 'Manifest loaded' : 'No manifest found'
    };
  }
}

if (window.location.pathname === '/health') {
  document.body.innerHTML = `<pre>${JSON.stringify(HealthCheck.getStatus(), null, 2)}</pre>`;
}
