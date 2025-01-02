import React, { PureComponent } from "react";
import { connect, router } from "dva";
import Helmet from "react-helmet";
import NotFound from "../routes/404.jsx";
// import Unauthorized from "../routes/505.jsx"
// import "../themes/index.less"
import styles from "./index.module.less";
console.log("🚀 ~ styles:", styles);

const { Redirect, Route, Switch } = router;

class App extends PureComponent {
  render() {
    const { navData } = this.props;

    return (
      <div>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <div className={styles.layout}>
          <div className={styles.header}>测试</div>
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.content}>
                <Switch>
                  {navData.map((item) => {
                    const value =
                      item.redirect !== undefined ? (
                        <Route
                          exact
                          key={item.path}
                          path={item.path}
                          render={() => <Redirect to={item.redirect} />}
                        />
                      ) : (
                        <Route
                          exact
                          key={item.path}
                          path={item.path}
                          component={item.component}
                        />
                      );
                    return value;
                  })}
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ app, resource, loading }) => ({
  app,
  resource,
  loading,
});

export default connect(mapStateToProps)(App);
