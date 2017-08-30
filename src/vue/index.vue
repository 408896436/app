<template>
	<div class='index'>
		<!-- banner S-->
		<div class="swiper-container">
       		<div class="swiper-wrapper">
       			<div v-for='item in bannerPic' class="swiper-slide"><router-link to="/details"><img :src="item"></router-link></div>
       		</div>
       		<div class="swiper-pagination"></div>
       	</div>
		<!-- banner E-->

		<div class='nav'>
			<ul>
				<li><router-link to="/category/clothes"><span><img src="../assets/ic1.png"></span><em>衣服</em></router-link></li>
				<li><router-link to="/category/garage_kit"><span><img src="../assets/ic2.png"></span><em>手办</em></router-link></li>
				<li><router-link to="/category/leather"><span><img src="../assets/ic3.png"></span><em>皮具</em></router-link></li>
				<li><router-link to="/category/pillow"><span><img src="../assets/ic4.png"></span><em>抱枕</em></router-link></li>
			</ul>
		</div>

		<div class='wplist'>
			<h2 class='tit'>衣服<router-link to="/category/clothes">更多></router-link></h2>
			<div class='wpbox'>
				<dl v-for='item in wplist.clothes'>
					<dt><router-link to="/details"><img :src="item.pic"></router-link></dt>
					<dd>
						<p>{{item.name}}</p>
						<p><span>{{item.nowPrice | price}}</span><del>{{item.delPrice | price}}</del></p>
					</dd>
				</dl>
			</div>
		</div>
		<div class='wplist'>
			<h2 class='tit'>手办<router-link to="/category/garage_kit">更多></router-link></h2>
			<div class='wpbox'>
				<dl v-for='item in wplist.garageKit'>
					<dt><router-link to="/details"><img :src="item.pic"></router-link></dt>
					<dd>
						<p>{{item.name}}</p>
						<p><span>{{item.nowPrice | price}}</span><del>{{item.delPrice | price}}</del></p>
					</dd>
				</dl>
			</div>
		</div>
		<bot-nav></bot-nav>
	</div>
</template>

<style>
	.index{overflow: hidden; padding-bottom: 0.7rem;}
	.index .nav{height: 2.2rem; text-align: center; }
	.index .nav li a{color:#000;}
	.index .nav li{display: inline-block;  width: 0.8rem; text-align: center; margin: 0.3rem 0.3rem 0; }
	.index .nav span{display: block; }
	.index .nav em{font-size: 0.24rem; display: block; padding-top: 0.2rem; font-style: normal;  }

	.index .wplist .tit{height: 0.7rem; font-size: 0.3rem; position: relative; padding-left: 0.34rem; color: #1a1a1a; overflow:hidden; font-weight:normal;}
	.index .wplist .tit a{color: #1a1a1a; float: right; text-decoration: none; margin-right: 0.2rem;}
	.index .wplist .tit:after{content: ''; display: block; width: 0.05rem; height: 0.28rem; background: #fb4c45; position: absolute; top: 0.08rem; left: 0.2rem;}
	
	.index .wpbox dl{float: left; width: 3.7rem; margin-bottom: 0.4rem;}
	.index .wpbox dl:nth-child(even){float: right;}
	.index .wpbox dd{font-size: 0.3rem; background:#fff; padding-bottom:0.2rem;}
	.index .wpbox dd p{margin-top: 0.1rem; padding-left:0.2rem;}
	.index .wpbox dd span{color: red;}
	.index .wpbox dd del{color: #a6a6a6; padding-left: 0.2rem; font-size: 0.2rem;}

</style>

<script>
	
	import Swiper from '../js/app/swiper-3.4.2.min.js'

	/*pic*/
	import banner from '../assets/banner.jpg'
	import pic from '../assets/pic.jpg'
	import pic2 from '../assets/pic2.jpg'

	export default{
		data(){
			return {
				val : banner,
				bannerPic : [
					banner,
					banner,
					banner
				],
				wplist : {
					clothes : [
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
					],
					garageKit : [
						{
							pic : pic2,
							name : '索尼子',
							nowPrice : 229,
							delPrice : 259
						},
						{
							pic : pic2,
							name : '索尼子',
							nowPrice : 229,
							delPrice : 259
						},
						{
							pic : pic2,
							name : '索尼子',
							nowPrice : 229,
							delPrice : 259
						},
						{
							pic : pic2,
							name : '索尼子',
							nowPrice : 229,
							delPrice : 259
						}
					]
					
				}
				
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
