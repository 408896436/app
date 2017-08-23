<template>
	<div>
		<!-- banner S-->
		<div class="swiper-container">
       		<div class="swiper-wrapper">
       			<div v-for='item in bannerPic' class="swiper-slide"><img :src=item></div>
       		</div>
       		<div class="swiper-pagination"></div>
       	</div>
		<!-- banner E-->

		<div class='nav'>
			<ul>
				<li><span><img src="../assets/ic1.png"></span><em>衣服</em></li>
				<li><span><img src="../assets/ic2.png"></span><em>手办</em></li>
				<li><span><img src="../assets/ic3.png"></span><em>皮具</em></li>
				<li><span><img src="../assets/ic4.png"></span><em>抱枕</em></li>
			</ul>
		</div>

		<div class='wplist cloth'>
			<h2 class='tit'>衣服<a href="javascript:;">更多></a></h2>
			<div class='wpbox'>
				<dl v-for='item in wplist'>
					<dt><a href="javascript:;"><img :src=item.pic></a></dt>
					<dd>
						<p>{{item.name}}</p>
						<p><span>{{item.nowPrice | price}}</span><del>{{item.delPrice | price}}</del></p>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<style>
	.nav{height: 2.2rem; text-align: center; }
	.nav li{display: inline-block;  width: 0.8rem; text-align: center; margin: 0.3rem 0.3rem 0; }
	.nav span{display: block; }
	.nav em{font-size: 0.24rem; display: block; padding-top: 0.2rem; font-style: normal;  }

	.wplist .tit{height: 0.7rem; font-size: 0.3rem; position: relative; padding-left: 0.34rem; color: #1a1a1a;}
	.wplist .tit a{color: #1a1a1a; float: right; text-decoration: none; margin-right: 0.2rem;}
	.wplist .tit:after{content: ''; display: block; width: 0.05rem; height: 0.28rem; background: #fb4c45; position: absolute; top: 0.05rem; left: 0.2rem;}

	.wpbox dl{float: left; width: 3.7rem; margin-bottom: 0.4rem;}
	.wpbox dl:nth-child(even){float: right;}
	.wpbox dd{font-size: 0.3rem;}
	.wpbox dd p{margin-top: 0.1rem; padding-left:0.2rem;}
	.wpbox dd span{color: red;}
	.wpbox dd del{color: #a6a6a6; padding-left: 0.2rem; font-size: 0.2rem;}
</style>

<script>
	
	import Swiper from '../js/app/swiper-3.4.2.min.js'

	/*pic*/
	import banner from '../assets/banner.jpg'
	import pic from '../assets/pic.jpg'

	export default{
		data(){
			return {
				val : banner,
				bannerPic : [
					banner,
					banner,
					banner
				],
				wplist : [
					{
						pic : pic,
						name : 'CF最新枪战模型X战1',
						nowPrice : 229,
						delPrice : 259
					},
					{
						pic : pic,
						name : 'CF最新枪战模型X战1',
						nowPrice : 229,
						delPrice : 259
					},
					{
						pic : pic,
						name : 'CF最新枪战模型X战1',
						nowPrice : 229,
						delPrice : 259
					},
					{
						pic : pic,
						name : 'CF最新枪战模型X战1',
						nowPrice : 229,
						delPrice : 259
					}
				]
			}
		},
		mounted : function(){
			new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true
		    });
		}

	}


</script>
