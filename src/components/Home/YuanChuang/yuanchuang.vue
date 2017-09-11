<template>
	<div>
		<Cell :dataList="dataList"></Cell>
	</div>
</template>
<script>
import Cell from './yuanchuangCell'
export default{
	components:{Cell},
	data(){
		return{
			dataList:[]
		}
	},
	created(){
		this.$http.get('/api/YuanChuang').then((response)=>{
			response=response.data;
			if(response.errno==0){
				console.log(response);
				this.dataList=response.data.data;
			}
		})
	}
}
</script>
<style>
	
</style>