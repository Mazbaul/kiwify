import baseLayouts from "../views/layouts/baseLayouts";
import pageNotFound from "../views/pageNotFound";
import dashboardPage from "../views/dashboardPage";


const routes = [
    {
        path: '/admin/',
        component: baseLayouts,
        children: [
            {path: '404', name: '404', component:pageNotFound},
            {path: 'dashboard', name: 'dashboard', component: dashboardPage},
            {
                path: 'users', name: 'users', component: userList,
                meta:{dataUrl:'api/users', pageTitle:'Users'}
            },

        ]
    },
    {path: '*', redirect: '/admin/404'},

];

export default routes;
