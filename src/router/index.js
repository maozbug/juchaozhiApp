import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/Home/Home'
import JingXuan from '@/components/Home/JingXuan/jingxuan'
import YouHui from '@/components/Home/YouHui/youhui'
import HaiTao from '@/components/Home/HaiTao/haitao'
import FaXian from '@/components/Home/FaXian/faxian'
import YuanChuang from '@/components/Home/YuanChuang/yuanchuang'

import Category from '@/components/Category/Category'
import Profile from '@/components/Profile/Profile'
export default new Router({
  routes: [
	  	{
	  		path:'/',
	    	component:Home
	  	},
	  	{
	  		path:'/home',
	    	component:Home,
	    	children:[
	    		{
	    			path:'jingxuan',
	    			component:JingXuan
	    		},
	    		{
	    			path:'youhui',
	    			component:YouHui
	    		},
	    		{
	    			path:'haitao',
	    			component:HaiTao
	    		},
	    		{
	    			path:'faxian',
	    			component:FaXian
	    		},
	    		{
	    			path:'yuanchuang',
	    			component:YuanChuang
	    		}

	    	]
	  	},
	  	{
	  		path:'/category',
	    	component:Category
	  	},
	  	{
	  		path:'/profile',
	    	component:Profile
	  	}
  ]
})
