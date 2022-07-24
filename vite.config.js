import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        configure(proxy, options) {
          proxy.on('proxyReq', () => {
            console.log('onProxyReq')
          })
        }
      }
    }
  }
})
