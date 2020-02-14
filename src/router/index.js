import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//routes

// session components


export default new VueRouter({
mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/',
			component: () => import ( '../views/Home'),		
		},
		{
            name: 'posts',
            path: '/posts',
            component: () => import ( '../views/post/Index'),        
            meta: {
                title: 'Post List'
            }
        },
        {
            name: 'create',
            path: '/posts/create',
            component: () => import ( '../views/post/Create'),        
            meta: {
                title: 'Post Create'
            }
        },
        {
            name: 'edit',
            path: '/posts/edit',
            component: () => import ( '../views/post/Edit'),
            meta: {
                title: 'Post Edit'
            }
        }
	]		
})
