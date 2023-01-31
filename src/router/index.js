import Vue from 'vue';
import Router from 'vue-router';
import Resume from '@/resumes/resume';
// import Home from '@/pages/home';

Vue.use(Router);

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        {
            path: '/',
            name: 'resume',
            component: Resume
        }
    ]
});
