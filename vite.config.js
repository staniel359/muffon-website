import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
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
      )
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
