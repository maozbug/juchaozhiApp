<template>
	<div id="tabbar">
		<ul>
			<li v-for="item in tablist" @click="pushto(item)">
				{{item.title}}
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
			return{
				tablist:[
					{
						name:'home',
						path:'/home',
						title:'首页'
					},
					{
						name:'home',
						path:'/category',
						title:'分类'
					},
					{
						name:'home',
						path:'/profile',
						title:'我的'
					},
				]
			}
		},
		methods:{
			pushto(item){
				this.$router.push(item.path)
			}
		}

}
</script>
<style>
	#tabbar{
		height:64px;
		width:100%;
		background-color:#DBDBDB;
		position:fixed;
		bottom:0;
		left:0;
		right:0;	
	}
	#tabbar ul{
		display: flex;
		flex-direction: row;
	}
	#tabbar ul li{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 64px;
			color: gray;
			}
</style>