import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginLess } from "@rsbuild/plugin-less"
import {pluginStyledComponents} from "@rsbuild/plugin-styled-components"

export default defineConfig({
	plugin: [
		pluginStyledComponents({
			displayName: true,
			fileName: true,
			meaninglessFileNames: ["index", "styles"],
			pure: true
		}),
		pluginLess({
			lessLoaderOptions: {
				lessOptions: {
					javascriptEnabled: true,
					paths: ["./src", "./node_modules"], // 添加 less 文件的解析路径
				  },
				  include: /node_modules/,
				  implementation: require("less"),
			},
		}),
		pluginReact({
			swcReactOptions: {
				runtime: 'automatic',
			}
		}),
	],
	source: {
		assetPrefix: "/",
		copy: [
			{ from: "./public", to: "./" },
			{ from: "./src/assets", to: "./" },
		],
		distPath: {
			js: "js/",
			css: "css/",
		},
		entry: {
			index: "./src/index.js",
		},
		transformImport: [
			{
				libraryName: "antd",
				libraryDirectory: "es",
				// 设置 `style: 'css'` 来加载 `.css` 样式
				// 设置 `style: true` 来加载 `.less` 样式
				style: "true",
			},
			{
				libraryName: "lodash",
				customName: "lodash/{{ member }}",
			},
		],
	},
	resolve: {
		alias: {
			"@": "./src",
		},
	},
	html: {
		favicon: "./public/logo.png",
	},
})
