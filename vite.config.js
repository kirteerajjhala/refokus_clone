

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

   theme: {
    extend: {
      fontFamily: {
        myfont: ["./src/assets/Satoshi-Variable.ttf"],
      },
    },
  },
  plugins: [
    tailwindcss(),
    react(),
  ],
})