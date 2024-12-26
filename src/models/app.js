export default {
	namespace: "app",
	state: {
		user: null,
		isSiderFold: false,
		isNavBar: document.body.clientWidth < 769
	},
	reducers: {
		switchSider(state) {
			return {
				...state,
				isSiderFold: !state.isSiderFold
			}
		},
		saveNavBarState(state, {payload}) {
			return {
				...state,
				isNavBar: payload
			}
		},
		saveUser(state, {payload}) {
			return {
				...state,
				user: payload
			}
		}
	},
	effects: {
		* onResize(_, {put, select}) {
			const {app} = yield select(state => state)
			const isNavBar = document.body.clientWidth < 769
			if (isNavBar !== app.isNavBar) {
				yield put({type: "saveNavBarState", payload: isNavBar})
			}
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			history.listen((location) => {
				console.log("🚀 ~ setup ~ history:", location)
				
			})
		}
	}
}
