<template>
	<div id="cell">
		<ul>
			<li v-for="item in dataList">
				<div class="img">
					<img :src=item.hdCover alt="">
				</div>
				<div class="intro">
					<div class="introLeft">
						{{item.pubDate |getDate}}
					</div>
					<div class="introRight">
						<span>{{item.title}}</span>
						<span style="color:gray">{{item.synopsis | getSynopsis}}</span>
						<span style="font-size:10px">
							<span>{{item.createName}}</span>
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	props:['dataList'],
	filters:{
		getDate(val){
			var pubDate=new Date(val).toString(); 
			var pubDateArr=pubDate.split(' ');
			if(parseInt(pubDateArr[2])<10){
				return pubDateArr[2].slice(1,2);
			}else{
				return pubDateArr[2];
			}
			//console.log(pubDate);
		},
		getSynopsis(val){
			return val.slice(0,36)+".."; 
		}
	}
}
</script>
<style scoped>
	#cell{
		margin-top: 10px;
	}
	li{
		margin-bottom: 10px;
	}
	.img{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.img img{
		width: 100%;
	}
	.intro{
		display: flex;
		min-height: 120px;
		padding: 5px;
	}
	.introLeft{
		width: 15%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.introRight{
		width: 85%;
		display: flex;
		flex-direction: column;
	}
	.introRight span{
		display: flex;
		flex: 1;
	}
	.introRight span>span{
		flex: 1;
		align-items: center;
	}
</style>