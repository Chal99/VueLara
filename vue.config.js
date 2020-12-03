module.exports = {
    pwa: {
        workboxOptions: {
            runtimeCaching: [
                {
                    urlPattern: /^http:\/\/localhost:8080*/,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'apiResponse',
                        expiration: {
                            // Keep at most 50 entries.
                            maxEntries: 50,
                            // Don't keep any entries for more than 30 days.
                            maxAgeSeconds: 30 * 24 * 60 * 60,
                            // Automatically cleanup if quota is exceeded.
                            purgeOnQuotaError: true
                        }
                    }
                }
            ]
        }
    },
    devServer: {
        proxy: 'https://fcm.googleapis.com/'
    },
    transpileDependencies: ["vuetify"]
}
