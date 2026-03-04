import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
            tailwindcss(),
            VitePWA({ devOptions: {
        enabled: true, // 개발 모드에서 PWA 활성화
        type: 'module',
      },registerType: "autoUpdate", manifest: {
        name: 'One Stock',
        short_name: 'ONESTOCK',
        description: '주식 관련 정보 제공 어플',
        theme_color: '#1B3C53',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // 안드로이드 기기용 마스킹 아이콘
          }
        ]
      }})],
  // 서브모듈 env 파일 인식
  envDir: path.resolve(__dirname, './FE-one-stock-config')
})