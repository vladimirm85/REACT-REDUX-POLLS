import Polls from '../pages/pollsPage.js';
import E404 from '../pages/error404Page.js';
import Test from '../pages/testPage.js'

const routes = [
    {
        name: 'polls',
        url: '/',
        component: Polls,
        exact: true
    },
    {
        name: 'test',
        url: '/test',
        component: Test,
        exact: true
    },
    {
        url: '*',
        component: E404,
    }
];
/*
const UrlBuild = function (name, params) {
    
    if(!RoutesMap.hasOwnProperty(name)) {
        return null;
    };
    
    let url = RoutesMap[name];

    for (let key in params) {
        url = url.replace(':' + key, params[key]);
    }
    
    return url;
};
*/
const RoutesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')) {
        RoutesMap[route.name] = route.url;
    };
});

export default routes;
export { RoutesMap };