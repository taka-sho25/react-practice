import {
  RouteProps,
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Hls } from '@/pages/Hls'
import { ShakaPlayer } from '@/pages/Shaka'

type IRoute = RouteProps & {
  path: string
  name: string
  component: React.ComponentType<any>
  props?: any
}

export const routes: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    exact: true,
    path: '/hls',
    component: Hls,
    name: 'HLS',
  },
  {
    exact: true,
    path: '/shaka',
    component: ShakaPlayer,
    name: 'ShakaPlayer',
  },
]

export const RouterComponent = () => (
  <Router>
    <Switch>
      {routes.map(({ name, path, exact, component: Component, props: routeProps }) => (
        <Route
          key={name}
          path={path}
          exact={exact}
          render={(props: RouteComponentProps<any>) => <Component {...props} {...routeProps} />}
        />
      ))}
    </Switch>
  </Router>
)
