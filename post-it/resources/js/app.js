

require('./bootstrap');
import VueRouter from 'vue-router';
import Home from './components/HomeComponent.vue';
import Task from './components/TaskComponent.vue';
window.Vue = require('vue');
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('add-task',require('./components/AddTaskComponent.vue').default)

Vue.use(VueRouter);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const routes = [
{
    path:'/home',
    component: Home
},
{
    path:'/task',
    component: Task
}
]
const router = new VueRouter({routes});
const app = new Vue({
    el: '#app',
    router: router
});

