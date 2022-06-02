import { RouteProps, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Hls } from '@/pages/Hls'
import { ShakaPlayer } from '@/pages/Shaka'

type IRoute = RouteProps & {
  path: string
  name: string
}

export const routes: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: () => <Home />,
    name: 'Home',
  },
  {
    exact: true,
    path: '/hls',
    component: () => <Hls />,
    name: 'HLS',
  },
  {
    exact: true,
    path: '/shaka',
    component: () => <ShakaPlayer />,
    name: 'ShakaPlayer',
  },
]

export const RouterComponent = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          children={<route.component />}
        />
      ))}
    </Switch>
  </Router>
)
