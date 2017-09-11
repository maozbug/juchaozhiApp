<template>
      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="item in adArray">
          <img :src="item.imageUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        },
        adArray:[]
      }
    },
    created(){
      this.$http.get('api/GuangGao').then ((response)=>{
          response=response.data;
          if(response.errno==0){
              this.adArray=response.data.focus;
          }
      })
    }
  }
</script>
<style>
  .swiper{
    height:180px;
    background:cyan;
    overflow:hidden;
      
  }
  .swiper img{
        height:180px;
        width:100%;
      }
</style>