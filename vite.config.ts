import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // グローバルなテスト関数を有効化
    environment: 'jsdom', // DOM環境のシミュレート
    setupFiles: './src/test/setup.ts', // セットアップファイル
  },
})
