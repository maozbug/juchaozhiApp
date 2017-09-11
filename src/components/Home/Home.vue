<template>
	<div>
		<ScrollAD></ScrollAD>
		<HomeNavBar></HomeNavBar>
		<JingXuan v-if="showJX"></JingXuan>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
	</div>
</template>
<script>
import ScrollAD from '@/components/commons/ScrollAD'
import HomeNavBar from './HomeNavBar'
import JingXuan from './JingXuan/jingxuan'
export default{
	components:{ScrollAD,HomeNavBar,JingXuan},
	created(){
		console.log(this.$store)
		this.$router.push(this.$store.getters.GET_SELECTED_INDEX);
	},
	data(){
		return{
			showJX:true
		}
	},
	watch:{
		'$route'(to,from){
			if(to.path !='/home'){
				this.showJX=false;
			}else{
				this.showJX=true;
			}
		}
	}
}
</script>
<style>
	#home{
		display:flex;
		flex-direction:column;
		margin-bottom:64px;
	}
</style>