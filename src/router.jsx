import React from "react"
// import dynamic from "dva/dynamic"
// import {dynamic, router} from "dva"
import {router} from "dva"
// import {Route, Router, Switch} from "dav"
import {ConfigProvider, Spin} from "antd"
import zhCN from "antd/lib/locale-provider/zh_CN"
import {getNavData} from "./constants/nav"
import styles from "./layouts/index.module.less"
console.log("🚀 ~ styles:", styles)

const dynamic = require("dva").dynamic
console.log("🚀 ~ dynamic:", dynamic)
const {Route, Router, Switch} = router
console.log("🚀 ~ router:", router)


dynamic.setDefaultLoadingComponent(() => <Spin size="large" className={styles.globalSpin}/>)

const getLayout = (navData, layoutName) => {
	console.log("🚀 ~ getLayout ~ getLayout:", getLayout)
	if (!navData.some(item => item.layoutName === layoutName) ||
		!(navData.filter(item => item.layoutName === layoutName)[0].children)) {
		return null
	}
	const route = navData.filter(item => item.layoutName === layoutName)[0]
	return {
		layout: route.layout,
		children: route.children
	}
}


const Routers = ({history, app}) => {
	const navData = getNavData(app)
	console.log("🚀 ~ Routers ~ navData:", navData)
	const appContainer = getLayout(navData, "AppLayout")
	console.log("🚀 ~ Routers ~ appContainer:", appContainer)
	const AppLayout = appContainer.layout
	return (
		<ConfigProvider locale={zhCN}>
			<Router history={history}>
				<Switch>
					<Route
						path="/"
						render={props =>
							(<AppLayout
								{...props}
								{...{navData: appContainer.children}}
							/>)
						}
					/>
				</Switch>
			</Router>
		</ConfigProvider>
	)
}

export default Routers
