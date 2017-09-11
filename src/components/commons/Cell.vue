<template>
	<div id="cell">
		<div class="cellLeft">
			<img :src=cellItem.cover alt="">
		</div>
		<div class="cellRight">
			<span>{{cellItem.title}}</span>
			<span style="color:red">{{cellItem.price}}</span>
			<div>
				<span>{{cellItem.malName}}</span>
				<span>{{cellItem.pubDate}}</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	props:["cellItem"],
	created(){
		
	}
}
</script>
<style>
	#cell{
		display:flex;
		flex-direction: rows;
		border-bottom: 1px solid #6A6D6F;
	}
	#cell .cellLeft{
		width: 45%;
		padding: 10px;
	}
	#cell .cellRight{
		width: 55%;
		display: flex;
		flex-direction: column;
		padding-top: 10px;
		padding-bottom: 10px;
		color: gray;
	}
	#cell .cellRight span{
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
