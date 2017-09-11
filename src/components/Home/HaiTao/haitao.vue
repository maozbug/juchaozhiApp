<template>
	<div>
		<ul>
			<li v-for="item in dataList">
				<Cell :cellItem='item'></Cell>
			</li>
		</ul>
	</div>
</template>
<script>
import Cell from '@/components/commons/Cell'
export default{
	components:{Cell},
	data(){
		return{
			dataList:[]
		}
	},
	created(){
		console.log("海淘");
		
	},
	activated(){
		console.log("海淘页面激活");
		this.$http.get('/api/HaiTao').then((response)=>{
			response=response.data;
			if(response.errno==0){
				console.log(response);
				this.dataList=response.data.data;
			}
		})
	},
	deactivated(){
		console.log("海淘页面切换");
	}
}
</script>
<style>
	
</style>