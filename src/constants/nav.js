import dynamic from "dva/dynamic"

export const getNavData = app => [
    {
        layoutName: "AppLayout",
		layout: dynamic({
			app,
			models: () => [],
			component: () => import("../layouts")
		}),
        children: [
            {
                name: "Dashboard",
                path: '/',
                redirect: "/list",
            },
            {
                name: "列表",
                path: '/list',
                component: dynamic({
					app,
					models: () => [],
					component: () => import("../routes/list")
				})
            },
            {
                name: "详情",
                path: '/detail',
                component: dynamic({
                    app,
                    models: () => [],
                    component: () => import("../routes/detail")
                })
            },
            {
                name: "表单",
                path: '/form',
                component: dynamic({
                    app,
                    models: () => [],
                    component: () => import("../routes/form")
                })
            }
        ]
    }
]