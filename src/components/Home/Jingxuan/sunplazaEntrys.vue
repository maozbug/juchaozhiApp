<template>
	<div id="spe">
		<div class="cloumn">
			<ul>
				<li v-for="(item,index) in sunEs" v-if="index<2">
					<img :src=item.icon alt="">
				</li>
			</ul>
		</div>
		<div class="cloumn">
			<ul>
				<li v-for="(item,index) in sunEs" v-if="index>=2">
					<img :src=item.icon alt="">
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	props:['sunEs']
}
</script>
<style>
	#spe{
		display: flex;
		flex-direction: column;
		margin-top: 10px;
	}
	#spe ul{
		display: flex;
		justify-content: space-between;
	}
	#spe ul li{
		padding: 2px;
	}
</style>