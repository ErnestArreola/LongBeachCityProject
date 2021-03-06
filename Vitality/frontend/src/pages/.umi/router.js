import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import('../../layouts/UserLayout'),
  LoadingComponent: require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "component": _dvaDynamic({
  
  component: () => import('../Welcome'),
  LoadingComponent: require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import('../../layouts/BasicLayout'),
  LoadingComponent: require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard/analysis",
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "Dashboard",
        "icon": "home",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "name": "Analysis",
            "component": _dvaDynamic({
  
  component: () => import('../Dashboard/Analysis'),
  LoadingComponent: require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/dashboard/advancedprofile",
            "component": _dvaDynamic({
  
  component: () => import('../Dashboard/AdvancedProfile'),
  LoadingComponent: require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/AppleSauce/Documents/GitHub/LongBeachCityProject/Vitality/frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
