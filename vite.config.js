import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
import eslint from 'vite-plugin-eslint'
import {
  resolve as resolvePath
} from 'path'

export default defineConfig(
  {
    plugins: [
      vue(),
      inject(
        {
          $: 'jquery',
          jQuery: 'jquery'
        }
      ),
      eslint()
    ],
    resolve: {
      alias: {
        '@': resolvePath(
          __dirname,
          './src'
        )
      }
    }
  }
)
