<template>
	<div class='details'>
		<!-- banner S-->
		<div class="swiper-container">
       		<div class="swiper-wrapper">
       			<div v-for='item in bannerPic' class="swiper-slide"><img :src="item"></div>
       		</div>
       		<div class='now_index'>
       			{{nowidx}}/{{bannerPic.length}}
       		</div>
       	</div>
		<!-- banner E-->
		<div class='wp_details'>
			<h2>CF最新枪战模型X战1</h2>
			<p>CF最新最潮的枪支，没有一直比这个还要厉害，这是最新出版的最厉害的了，快来买吧。</p>
		</div>
		<div class='price_xl'>
			<div class='price'>
				<span class='nowPrice'>$229</span>
				<span class='deletePrice'>$259</span>
			</div>	
			<div class='jqxl'>
				<span class='zkc'>总库存：500</span>
				<span class='xl'>近期销量：200</span>
			</div>
		</div>
		<div class='nav' id='nav'>
			<a class='select' href="javascript:;" title='商品介绍'>商品介绍</a>
			<a href="javascript:;" title='规格参数'>规格参数</a>
			<a href="javascript:;" title='买家评论'>买家评论</a>
		</div>
		<div class='wpdetails' id='wpdetails' style='display:nones;'>
			<img src="../assets/pic5.jpg">
		</div>
		<div class='aboutwp' id='aboutwp' style='display:none;'>
			<table border='1' cellspacing='0' cellpadding='0'>
				<tr>
					<td colspan='2'>综合评价</td>
				</tr>
				<tr>
					<td>品牌</td>
					<td>SN</td>
				</tr>
				<tr>
					<td>产地</td>
					<td>中国</td>
				</tr>
				<tr>
					<td colspan='2'>属性</td>
				</tr>
				<tr>
					<td>重量</td>
					<td>16g</td>
				</tr>
				<tr>
					<td>材质</td>
					<td>尼龙</td>
				</tr>
				<tr>
					<td colspan='2'>其他</td>
				</tr>
				<tr>
					<td>材质</td>
					<td>尼龙</td>
				</tr>
			</table>
		</div>
		<div class='pinlun' id='pinlun' style='display:none;'>
			<div class='toppl'>
				<div class='pinlun_val'>
					评论（900条）
				</div>
				<div class='zhpj'>
					<h2>综合评价</h2>
					<ul class='star'>
						<li><img src="../assets/star_c.png"></li>
						<li><img src="../assets/star_c.png"></li>
						<li><img src="../assets/star_c.png"></li>
						<li><img src="../assets/star_h.png"></li>
						<li><img src="../assets/star_h.png"></li>
					</ul>
				</div>
			</div>
			<div class='userpinlun'>
				<div class='userpl'>
					<dl>
						<dt><span><img src="../assets/sb.png"></span></dt>
						<dd>
							<span class='username'>刘德华</span>
							<span class='pltime'>2016-09-15</span>
						</dd>
					</dl>
				</div>
				<ul class='star'>
					<li><img src="../assets/star_c.png"></li>
					<li><img src="../assets/star_c.png"></li>
					<li><img src="../assets/star_c.png"></li>
					<li><img src="../assets/star_h.png"></li>
					<li><img src="../assets/star_h.png"></li>
				</ul>
				<p class='user_text'>CF最新最潮的枪支，没有一直比这个还要厉害，这是最新出版的最厉害的了，快来买吧。</p>
				<div class='user_pic'>
					<ul>
						<li><img src="../assets/pic6.jpg"></li>
						<li><img src="../assets/pic6.jpg"></li>
						<li><img src="../assets/pic6.jpg"></li>
						<li><img src="../assets/pic6.jpg"></li>
						<li><img src="../assets/pic6.jpg"></li>
					</ul>
				</div>
				<div class='buyTime'>
					<ul>
						<li>类别：黑色</li>
						<li>购买日期：2016-09-15</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	
	.details .now_index{width: 0.5rem; height: 0.5rem; background: rgba(85,84,80, 0.5); border-radius: 50%; font-size: 0.24rem; color: #fff; text-align: center; line-height: 0.5rem; position: absolute; bottom: 0.3rem; right: 0.3rem; z-index: 9990; }

	.details .wp_details,.details .price_xl{width: 7.1rem; margin: 0 auto; overflow: hidden;}
	.details .wp_details h2{font-size: 0.28rem; font-weight: normal; margin: 0.34rem 0;}
	.details .wp_details p{font-size: 0.24rem; color: #a6a6a6; line-height: 0.35rem;}
	.details .price_xl{font-size: 0.24rem; color: #6e6e6e; padding-top: 0.3rem;}
	.details .jqxl{float: right; padding-top: 0.22rem;}
	.details .price{float: left;}
	.details .price span,.details .jqxl .zkc{margin-right: 0.3rem;}
	
	.details .nav{padding-top: 0.8rem; overflow: hidden;}
	.details .nav a{height: 0.9rem; width: 2.5rem; display:block; float: left; text-align: center; line-height: 0.9rem; font-size: 0.28rem; color: #000; border-bottom: 0.01rem solid #dddddd;}
	.details .nav .select{border-color: red;}
	
	.details .pinlun{padding: 0 0.2rem;}
	.details .aboutwp{font-size: 0.26rem; text-align: center; margin-top: 0.2rem;}
	.details .aboutwp table{border-color: #e2e2e2; margin: 0 auto;}
	.details .aboutwp table td{height: 0.48rem;}
	.details .aboutwp tr :nth-child(odd){width: 1.96rem;}
	.details .aboutwp tr :nth-child(even){width: 5.11rem;}
	
	.details .toppl{height: 0.88rem; line-height: 0.88rem;}
	.details .pinlun{font-size: 0.24rem;}
	.details .pinlun_val{float: left; color: #a6a6a6;}
	.details .zhpj{float: right; }
	.details .zhpj h2{font-size: 0.26rem; font-weight: normal;}
	.details .zhpj h2, .details .zhpj ul{float: left;}
	.details .star{height: 0.88rem; line-height: 0.88rem;}
	.details .star li{width: 0.24rem; display: inline-block; margin-left: 0.1rem;}
	.details .userpl dl{overflow: hidden; height: 0.94rem; line-height: 0.94rem; border-bottom: 0.01rem solid #dddddd;}
	.details .userpl dt,.details  .userpl dd{float: left;}
	.details .userpl dt span{display: block; width:0.54rem; margin-top: 0.2rem;}
	.details .userpl dt img{border-radius: 50%;}
	.details .userpl dt{ width: 0.7rem;}
	.details .userpl dd{width: 6.4rem;}
	.details .userpl .username{float: left;}
	.details .userpl .pltime{float: right;}
	.details .user_pic ul{text-align: center; padding-top: 0.1rem;}
	.details .user_pic li{border: 0.01rem solid #dddddd; display: block; float: left; width: 2.18rem; margin: 0.1rem 0.1rem 0 0;}
	.details .buyTime li{float: left;}
	.details .buyTime{overflow: hidden; padding-top: 0.3rem; clear: both;} 
	.details .buyTime ul :nth-child(2){float: right;}
	.details .userpinlun{overflow: hidden; margin-bottom: 0.6rem;}
	.details .user_text{text-align: justify;}

</style>
<script>
	
	import Swiper from '../js/app/swiper-3.4.2.min.js'
	import Tab from '../js/app/tab.js'

	/*pic4*/
	import pic4 from '../assets/pic4.jpg'

	export default{
		data(){
			return {
				nowidx : 1,
				bannerPic : [
					pic4,
					pic4,
					pic4
				]	
			}
		},
		mounted : function(){
			var self = this;
			new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        onSlideChangeEnd:function(swiper){
		        	self.nowidx = swiper.activeIndex+1;
		        }
		    });

		    //tab
		    new Tab().init({  
		        'parent' : 'nav',  
		        'action' : 'a',   
		        'bnt1' : 'select,noselect,wpdetails',  
		        'bnt2' : 'select,noselect,aboutwp',  
		        'bnt3' : 'select,noselect,pinlun',  
		        'event' : 'onclick'  
		    });  
		}

	}
</script>