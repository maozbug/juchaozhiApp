<template>
	<div id="faxian">
		<ul>
			<li v-for="item in dataList">
				<img :src='item.cover' alt="">
				<span class="title">{{item.title}}</span>
				<span style="color:red">{{item.price}}</span>
				<span>{{item.mallName}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			dataList:[]
		}
	},
	created(){
		console.log("发现");
		this.$http.get('/api/FaXian').then((response)=>{
			response=response.data;
			if(response.errno==0){
				console.log(response);
				this.dataList=response.data.data;
			}
		})
	}
}
</script>
<style >
	#faxian ul{
		display: flex;
		flex-wrap: wrap;
		margin-top: 5px;
	}
	#faxian ul li{
		width: 50%;
		color: gray;
		display: flex;
		flex-direction: column;
		padding: 5px;
	}
	#faxian ul li span.title{
		word-break: break-all;
		display: -webkit-box;
		-webkit-line-clamp:2 ;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>