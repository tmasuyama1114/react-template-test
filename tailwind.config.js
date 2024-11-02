/** @type {import('tailwindcss').Config} */
export default {
  // どのファイルでTailwindを使うか
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}, // テーマの拡張設定（カラーや余白のオリジナル定義を追加できる）
  },
  plugins: [], // 追加のプラグイン
}
