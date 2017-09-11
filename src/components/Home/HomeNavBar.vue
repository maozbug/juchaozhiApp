<template>
	<div id="homeNavBar">
		<ul>
			<!-- <router-link v-for="(url,item) in navTitleList" :to="url"> -->
				<li v-for="(url,item) in navTitleList" @click="pushto(url,item)" :class="{active:selectedIndex==item,'lastSelected':lastSelected==url}">
				{{item}}
				</li>
			<!-- </router-link> -->
			
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			navTitleList:{
				"精选":'/home/JingXuan',
				"优惠":'/home/YouHui',
				"海淘":'/home/HaiTao',
				"发现":'/home/FaXian',
				"原创":'/home/YuanChuang'
			},
			selectedIndex:{
				selectedIndex:''
			}
		}
	},
	methods:{
		pushto(url,item){
				this.$router.push(url);
				this.selectedIndex=item;
				this.$store.dispatch('select_Index',url)
			}
	},
	computed:{
		lastSelected(){
			return this.$store.getters.GET_SELECTED_INDEX;
		}
	}
}
</script>
<style scoped>
	#homeNavBar{
		background-color:#DBDBDB;
	}
	#homeNavBar ul{
		display: flex;
		color: gray;
	}
	#homeNavBar ul>li{
		flex-grow: 1;
		display: flex;
		justify-content: center;
		height: 45px;
		line-height: 45px;
	}
	.active,.lastSelected{
		border-bottom: 2px solid red;
		color: red;
	}
</style>