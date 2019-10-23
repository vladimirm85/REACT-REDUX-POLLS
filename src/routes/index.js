import Home from '../pages/pollsPage.js';
import Leaderboard from '../pages/LeaderboardPage.js';
import AddPoll from '../pages/addPollPage.js';
import Poll from '../pages/pollPage.js';
import E404 from '../pages/error404Page.js';

const routes = [
    {
        name: 'home',
        url: '/',
        component: Home,
        exact: true
    },
    {
        name: 'leaderboard',
        url: '/leaderboard',
        component: Leaderboard,
        exact: true
    },
    {
        name: 'addPoll',
        url: '/addpoll',
        component: AddPoll,
        exact: true
    },
    {
        name: 'poll',
        url: '/poll/:id',
        component: Poll,
        exact: true
    },
    {
        url: '*',
        component: E404,
    }
];

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

const RoutesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')) {
        RoutesMap[route.name] = route.url;
    };
});

export default routes;
export { RoutesMap, UrlBuild };