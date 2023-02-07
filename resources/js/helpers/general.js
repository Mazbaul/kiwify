import axios from 'axios';

export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        window.document.title = to.meta.pageTitle !== undefined ? to.meta.pageTitle : '';
        store.state.dataList = [];
        store.state.formObject = {};
        store.state.formType = 1;
        store.state.updateId = '';

        store.formFilter = {
            keyword : '',
            perPage : 10,
            status : '',
        };

        next();
    });


    if (localStorage.getItem('software')){
        store.state.software = localStorage.getItem('software');
        axios.defaults.headers.common['Software'] = localStorage.getItem('software');
    }


    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (parseInt(error.response.status) === 401){
            // store.commit('logout');
        }
        return Promise.reject(error);
    });

}
