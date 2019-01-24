import * as React from 'react';
import 'sprotty-component/lib/wrapper';
import { Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import {EPackage, ENamedElement} from "./types";
import DocPage from "./components/DocPage";
import {getTypes} from "./util";
import IndexPage from "./components/Index";
import {UnregisterCallback} from "history";

interface AppState {
  ePackage?: EPackage;
}

export const PackageContentContext = React.createContext(new Set<string>());

const GenerateRoutes = ({ ePackage }: { ePackage: EPackage }) => {
  const allFeatures = (ePackage.classes || []).concat(ePackage.dataTypes || []).concat(ePackage.enums || []);
  return (
    <PackageContentContext.Provider value={getTypes(ePackage)}>
      <Switch>
        <Route path="/" exact render={() => (<IndexPage ePackage={ePackage}/>)} />
        {
          allFeatures.map((el: ENamedElement) => (
            <Route
              key={el.name}
              path={"/" + el.name + "/"}
              render={() => (
                <DocPage
                  ePackage={ePackage}
                  eClassifier={el}
                />
              )}
            />
            )
          )
        }
        <Route path={"*"} component={() => <h1>Sorry, but the requested page does not exist!</h1>} />
      </Switch>
    </PackageContentContext.Provider>
  )
}

export interface DocuAppWindow extends Window {
  __docu_app_model__: any;
  __docu_app_graph__: any;
}

class App extends React.Component<RouteComponentProps<any>, AppState> {

  private readonly unregisterListener: UnregisterCallback;

  constructor(props: any) {
    super(props);
    this.state = {
      ePackage: undefined,
    };

    this.unregisterListener = this.props.history.listen((location) => {
      if (this.state.ePackage) {
        const pathname = location.pathname;
        document.title = this.state.ePackage.name + (pathname.length > 1 ? "- " + pathname.substring(1) : '')
      }
    });
  }


  componentWillUnmount() {
    this.unregisterListener();
  }


  componentDidMount() {
    const ePackage = (window as DocuAppWindow).__docu_app_model__;
    this.setState({ ePackage  }, () => {
      document.title = ePackage.name || document.title;
    });
  }

  public render() {
    if (this.state.ePackage === undefined) {
      return <div>No package loaded</div>
    }

    return (
        <GenerateRoutes ePackage={this.state.ePackage} />
    );
  }
}

export default withRouter(App);
