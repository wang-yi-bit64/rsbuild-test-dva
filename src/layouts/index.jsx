import React, {PureComponent} from "react"
import {connect, router} from "dva"
import Helmet from "react-helmet"
import styles from "../components/layouts/index.less"
import NotFound from "../routes/404.jsx"
import Unauthorized from "../routes/505.jsx"
import "../themes/index.less"
import "./index.less"

const {Redirect, Route, Switch} = router

class App extends PureComponent {
	render() {
		const {navData} = this.props
	
		return (
			<div>
				<Helmet>
					<title>{name}</title>
				</Helmet>
				<div>
						<div className={styles.container}>
							<div className={styles.content}>
								<Switch>
									{
										navData.map((item) => {
											const value = item.redirect !== undefined ?
												(<Route
													exact
													key={item.path}
													path={item.path}
													render={() => <Redirect to={item.redirect}/>}
												/>) :
												(<Route
													exact
													key={item.path}
													path={item.path}
													component={item.component}
												/>)
											return value
										})
									}
									<Route component={NotFound}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
		)
	}
}

const mapStateToProps = ({app, resource, loading}) => ({app, resource, loading})

export default connect(mapStateToProps)(App)
