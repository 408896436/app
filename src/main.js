import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './vue/index.vue'
import Category from './vue/category.vue'
import Details from './vue/details.vue'

/*自定义组件*/
import BotNav from './vue/bot-nav.vue'
const botNav = {
	install : function(Vue){
		Vue.component('bot-nav', BotNav);
	}
}
Vue.use(botNav);

/*过滤器*/
Vue.filter('price', function(val){
	return '$' + val;
});

Vue.use(VueRouter);

//配置路由
var routes = [
    {path:'/index', component:Index},
    {path:'/category/:name', component:Category},
    {path:'/details', component:Details},
    {path:'*', redirect:'/index'}	
];

//生成路由
var router = new VueRouter({
    routes
});

//最后挂到vue上
new Vue({
    router,
    el:'#app'
});

