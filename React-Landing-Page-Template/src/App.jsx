import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import StoreService from "../src/services/StoreService";
import RenderOnAnonymous from "./components/authentication/RenderOnAnonymous";
import "./App.css";
import RenderOnAuthenticated from "./components/authentication/RenderOnAuthenticated";
import GAListener from './components/dashboard/components/GAListener';
import { MainLayout } from './components/dashboard/components/Layout';
import PageSpinner from './components/dashboard/components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/landing-page/LandingPage";




const AlertPage = React.lazy(() => import('../src/components/dashboard/pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('../src/components/dashboard/pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('../src/components/dashboard/pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('../src/components/dashboard/pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('../src/components/dashboard/pages/ButtonPage'));
const CardPage = React.lazy(() => import('../src/components/dashboard/pages/CardPage'));
const ChartPage = React.lazy(() => import('../src/components/dashboard/pages/ChartPage'));
const DashboardPage = React.lazy(() => import('../src/components/dashboard/pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('../src/components/dashboard/pages/DropdownPage'));
const FormPage = React.lazy(() => import('../src/components/dashboard/pages/FormPage'));
const InputGroupPage = React.lazy(() => import('../src/components/dashboard/pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('../src/components/dashboard/pages/ModalPage'));
const ProgressPage = React.lazy(() => import('../src/components/dashboard/pages/ProgressPage'));
const TablePage = React.lazy(() => import('../src/components/dashboard/pages/TablePage'));
const TypographyPage = React.lazy(() => import('../src/components/dashboard/pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('../src/components/dashboard/pages/WidgetPage'));



const store = StoreService.setup();

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter basename={getBasename()}>
          <RenderOnAnonymous>
            <LandingPage></LandingPage>
          </RenderOnAnonymous>
          <RenderOnAuthenticated>
            <GAListener>
              <Switch>
                <MainLayout breakpoint={this.props.breakpoint} >
                  <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/login-modal" component={AuthModalPage} />
                    <Route exact path="/buttons" component={ButtonPage} />
                    <Route exact path="/cards" component={CardPage} />
                    <Route exact path="/widgets" component={WidgetPage} />
                    <Route exact path="/typography" component={TypographyPage} />
                    <Route exact path="/alerts" component={AlertPage} />
                    <Route exact path="/tables" component={TablePage} />
                    <Route exact path="/badges" component={BadgePage} />
                    <Route
                      exact
                      path="/button-groups"
                      component={ButtonGroupPage}
                    />
                    <Route exact path="/dropdowns" component={DropdownPage} />
                    <Route exact path="/progress" component={ProgressPage} />
                    <Route exact path="/modals" component={ModalPage} />
                    <Route exact path="/forms" component={FormPage} />
                    <Route exact path="/input-groups" component={InputGroupPage} />
                    <Route exact path="/charts" component={ChartPage} />
                  </React.Suspense>
                </MainLayout>
                <Redirect to="/" />
              </Switch>
            </GAListener>
          </RenderOnAuthenticated>
        </BrowserRouter>
      </Provider>
    );
  };
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
