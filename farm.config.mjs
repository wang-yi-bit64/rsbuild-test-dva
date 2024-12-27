/**
 * @type {import('@farmfe/core').UserConfig}
 */

import farmJsPluginLess from '@farmfe/js-plugin-less';
import react from "@farmfe/plugin-react"
export default {
  plugins: [
    farmJsPluginLess({
        lessOptions: {
            javascriptEnabled: true,
        },
        // implementation: require("less"),
    }),
    react(),
    ['@farmfe/plugin-react-components', { 
        local: false,
        dts: false,
        resolvers: [
            {
                module: "antd",
                prefix: "Ant",
                import_style: "less",
            },
        ]
    }]
],
  compilation: {
    input: {
        index: './index.html'
    },
    lazyCompilation: false,
    // sourcemap: "all"
  }
}