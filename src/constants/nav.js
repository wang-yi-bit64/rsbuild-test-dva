const dynamic = require("dva").dynamic
export const getNavData = app => [
    {
        layoutName: "AppLayout",
		layout: dynamic({
			app,
			models: () => [],
			component: () => import("../layouts/index.jsx")
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
					component: () => import("../routes/list.jsx")
				})
            },
            {
                name: "详情",
                path: '/detail',
                component: dynamic({
                    app,
                    models: () => [],
                    component: () => import("../routes/detail.jsx")
                })
            },
        ]
    }
]