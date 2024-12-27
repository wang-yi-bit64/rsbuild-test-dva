/**
 * @type {import('@farmfe/core').UserConfig}
 */

import farmJsPluginLess from '@farmfe/js-plugin-less';

export default {
  plugins: [
    farmJsPluginLess({
        lessOptions: {
            javascriptEnabled: true,
        },
        // implementation: require("less"),
    }),
    '@farmfe/plugin-react',
    '@farmfe/plugin-react-components', { 
        local: true,
        resolvers: [
            {
                module: "antd",
                prefix: "Ant",
                import_style: "less",
            },
        ]
    }
],
  compilation: {
    input: {
        index: './index.html'
    },
    // sourcemap: "all"
  }
}