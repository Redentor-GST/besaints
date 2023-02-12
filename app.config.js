export default {
  expo: {
    name: 'Be Saints',
    slug: 'besaints',
    version: '0.0.3.1',
    orientation: 'portrait',
    icon: './assets/applogo.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      infoPlist: {},
      bundleIdentifier: 'be.saints.client',
    },
    notification: {
      icon: './assets/notiflogo.png',
    },
    android: {
      googleServicesFile: process.env.GOOGLE_SERVICES_FILE,
      package: 'be.saints.client',
      versionCode: 19,
      adaptiveIcon: {
        backgroundImage: './assets/applogo.png',
        foregroundImage: './assets/applogo.png',
        backgroundColor: '#ffffff00',
      },
      permissions: ['NOTIFICATIONS'],
    },
    extra: {
      eas: {
        projectId: '60078d31-0462-4957-90c7-33c2afdc19c7',
      },
    },
  },
}
