// 所有分类
$(function(){
	$(".header_nav_ul li:gt(1)").hover(function(){
		$(this).css("color","#DF0010")	
	},function(){
		$(this).css("color","#333")	
	})
})
// 所有分类  下拉二级菜单栏
var fenlei=document.querySelector(".li_allType");
var div_fen=document.getElementById("productSecond");
var ul_fen=document.getElementsByClassName("allProduct")[0];
var lis=document.querySelectorAll(".allProduct li");
var divs=document.querySelectorAll("#productSecond div");


fenlei.onmouseenter=function(){
	ul_fen.style.display="block";
}
fenlei.onmouseleave=function(){
	ul_fen.style.display="none";
}

ul_fen.onmouseenter=function(){
	this.style.display="block";
}

for (var i=0;i<lis.length;i++) {
	lis[i].index=i;
	divs[i].index=i;
	lis[i].onmouseover=function(){
		ul_fen.style.display="block";
		for (var j=0;j<lis.length;j++) {
			lis[j].style.cssText="color: #fff;background-color: #F01921;";
			divs[j].style.display="none";
		}
		this.style.cssText="color: salmon;background-color: #fff;";
		divs[this.index].style.display="block";
		
	}
	lis[i].onmouseout=function(){
		ul_fen.style.display="none";
		for (var i=0;i<divs.length;i++) {
			divs[i].style.display="none";
		}
	}
	divs[i].onmouseover=function(){
		ul_fen.style.display="block";
		for (var j=0;j<lis.length;j++) {
			lis[j].style.cssText="color: #fff;background-color: #F01921;";
			divs[j].style.display="none";
		}
		lis[this.index].style.cssText="color: salmon;background-color: #fff;";
		this.style.display="block";
		
		
	}
	divs[i].onmouseout=function(){
		ul_fen.style.display="none";
		for (var i=0;i<divs.length;i++) {
			divs[i].style.display="none";
		}
	}
}

//	<!--  content   内容    -->
//  放大镜图
$(function(){
	$(".content_imgWrap").mouseenter(function(){
		$(".content_zhezhao,.content_imgright").show();
	}).mouseleave(function(){
		$(".content_zhezhao,.content_imgright").hide();
	})
	$(".content_imgWrap").mousemove(function(e){
	    var x=e.pageX-$(".content_imgWrap").offset().left-$(".content_zhezhao").width()/2;
		var y=e.pageY-$(".content_imgWrap").offset().top-$(".content_zhezhao").height()/2;	
		//限制
		x<0 ? x=0 :x;
		y<0 ? y=0 :y;		
		x>$(".content_imgWrap").width()-$(".content_zhezhao").width() ? x=$(".content_imgWrap").width()-$(".content_zhezhao").width() :x;
		y>$(".content_imgWrap").height()-$(".content_zhezhao").height()? y=$(".content_imgWrap").height()-$(".content_zhezhao").height():y;	
		$(".content_zhezhao").css({
			left:x+"px",
			top:y+"px"
		})
		//算出比例
		var bilix=$(".contentBig").width()/$(".content_imgWrap").width();
		var biliy=$(".contentBig").height()/$(".content_imgWrap").height();
		//
		$(".content_imgright").scrollLeft(bilix*x);
		$(".content_imgright").scrollTop(biliy*y);
	})
})

// 下方的小图   商品小图
var lis_x=document.querySelectorAll(".content_smallimg li");

for (var i=0;i<lis_x.length;i++) {
	lis_x[i].index=i;
	lis_x[i].onmouseenter=function(){
		for (var j=0;j<lis_x.length;j++) {
			lis_x[j].firstElementChild.style.border="1px solid transparent"
		}
		this.firstElementChild.style.border="2px solid #c41f3a"
		
	}
	lis_x[i].onmouseleave=function(){
		for (var j=0;j<lis_x.length;j++) {
			lis_x[j].firstElementChild.style.border="1px solid transparent"
		}
	}
	lis_x[i].onmousemove=function(){
		for (var j=0;j<lis_x.length;j++) {
			lis_x[j].firstElementChild.style.border="1px solid transparent"
		}
		this.firstElementChild.style.border="2px solid #c41f3a"
		
		var imgVal_s=this.firstElementChild.firstElementChild;
	
		var imgVal_d=document.querySelector(".content_imgWrap").firstElementChild;
		
		imgVal_d.src = imgVal_s.src;
		
		var imgVal_z=document.querySelector(".contentBig");
		imgVal_z.src=imgVal_d.src;
	}
	
	
}

//  数据渲染    主页跳转过来
window.onload=function(){
	//正则获取参数
		function getQueryString(name) {
	       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	       var r = window.location.search.substr(1).match(reg);
	       if(r != null) {
	             return decodeURIComponent(r[2]);
	       }
	       return '';
		}
			//获取search值中的pid(商品id)
			var goods_common_id=getQueryString("pid");
			console.log(goods_common_id)//商品id
			
			//发送商品id请求数据
					var infodata="";										
			ajax("get","copyshuju.json","gid="+goods_common_id,true,function(res){
					var arr=JSON.parse(res);
					var infoData=arr.ECHomeGoodsResult;
					console.log(infoData)
					console.log(infoData[0].goods_common_id)
					for (var i=0;i<infoData.length;i++) {
						if (infoData[i].goods_common_id==goods_common_id) {
							console.log(infoData[i])
							
							
							
							// 遮罩图
							var img_z=document.querySelector(".content_imgWrap").firstElementChild;
							img_z.src=infoData[i].goodsListImage;
							var img_d=document.querySelector(".contentBig");
							img_d.src=infoData[i].goodsListImage;
							
							// 中间文字
							var h1_1=document.querySelector(".content_boxMiddleH1").firstElementChild.firstElementChild.nextElementSibling;
							h1_1.innerHTML=infoData[i].goods_short_desc2;
							var h1_2=document.querySelector(".content_boxMiddleH1").lastElementChild;
							h1_2.innerHTML=infoData[i].goods_name;
							var top_txt=document.querySelector(".location_shouyeWrap").lastElementChild;
							top_txt.innerHTML=infoData[i].goods_name;
							var h2=document.querySelector(".content_boxMiddleH2");
							h2.innerHTML=infoData[i].goods_short_desc;
							var price_x=document.querySelector(".content_pricenow");
							price_x.innerHTML='<em>¥</em>'+infoData[i].sale_price;
							var price_l=document.querySelector(".content_priceold").firstElementChild;
							price_l.innerHTML='¥'+infoData[i].market_price;
							
							// 小图，没有
							var lis_s=document.querySelector(".content_smallimg").children;
							for (var j=0;j<lis_s.length;j++) {
								lis_s[j].index=j;
								lis_s[j].firstElementChild.firstElementChild.src=infoData[i].goods_img[j];
									
							}
							// 大图
							var Imgs=document.querySelector(".goods_info_con").firstElementChild.children;
							for (var j=0;j<Imgs.length;j++) {
								Imgs[j].index=j;
								Imgs[j].src=infoData[i].goods_image[j];
							}
							// 推荐图
							var images=document.getElementsByClassName("g_b_li");
							for (var j=0;j<images.length;j++) {
								images[j].index=j;
								images[j].firstElementChild.src=infoData[i].goods_imagetj[j];
							}
							
							var shpin=document.querySelector(".details_l_conl").firstElementChild.firstElementChild.lastElementChild;
							shpin.innerHTML=infoData[i].goods_name;
							var shpin_1=document.querySelector(".details_l_conl").firstElementChild.lastElementChild.lastElementChild;
							shpin_1.innerHTML=infoData[i].goods_short_desc2;
							
							
							infodata=infoData[i];
		                    //  添加购物车操作
		                    var addcar=document.querySelector(".details_addcar");
		                 
		                    addcar.onclick=function(){
		                    	console.log(infodata)
		                    	var arrcar = localStorage.shopcart;
		                    	if(!arrcar){
		                    		localStorage.shopcart = "[]";
		                    	}
		                    	
		                    	arrcar = JSON.parse(localStorage.shopcart);
		                    	var obj = {
		                    		"pid":infodata.goods_common_id,
		                    		"pimage":infodata.goodsListImage,
		                    		"pname":infodata.goods_name,
		                    		"price":infodata.sale_price,
		                    		"pcount":$(".details_counttxt").val()
		                    		
		                    	}
		                    	console.log(arrcar.length)
		                    	var flag=true;
		                    	var x=0;
		                		if(arrcar.length==0){
		                			arrcar.push(obj);
			                    	localStorage.shopcart = JSON.stringify(arrcar);
			                    	return;
		                		}else{
			                    	for(var i=0;i<arrcar.length;i++){
			                    		if(arrcar[i].pid==infodata.goods_common_id){
			                    			flag=false;
			                    			x=i;
			                    		}
			                    	}
			                    	
		                    	}
		                		if(flag){
		                			arrcar.push(obj);
			                    	localStorage.shopcart = JSON.stringify(arrcar);
			                    	return;
		                		}else{
		                			var nums=Number(arrcar[x].pcount)+Number($(".details_counttxt").val());
		                			console.log(nums)
		                			arrcar[x].pcount = nums;
			                    	localStorage.shopcart = JSON.stringify(arrcar);
		                		}
		                    	
//		                    	for(var i=0;i<arrcar.length;i++){
//			                    		if(arrcar[i].pid==infodata.goods_common_id){
//			                    			arrcar[i].pcount = Number(arrcar[i].pcount)+Number($(".details_counttxt").val());
//			                    			localStorage.shopcart = JSON.stringify(arrcar);
//			                    			return;
//			                    		}else{
//			                    			arrcar.push(obj);
//			                    			localStorage.shopcart = JSON.stringify(arrcar);
//			                    			return;
//			                    		}
//			                    	}
		                    	
		                    	
		                    	
		                    	
		                    	
		                    	
		                    	
		                    	
		                    	
		                    	
		                    	
		                    	
		                    }
							
							
						}
					}
					
					
					//数量    加点击    减点击
					var btn_red=document.getElementsByClassName("btn_reduce")[0];
					var count=document.getElementsByClassName("details_counttxt")[0];
                    var btn_add=document.getElementsByClassName("btn_add")[0];
                    btn_add.onclick=function(){
                    	count.value=Number(count.value)+1;
                    }
                    btn_red.onclick=function(){
                    	count.value=Number(count.value)-1;
                    	if (count.value<=0) {
                    		count.value=1
                    	} 
                    }
                    
                     
            })

}














//<!--  页面往下滚动, 顶部浮出的搜索框    -->
$(function(){
var searchFixed=document.getElementById("searchFixed");
$(window).scroll(function(){
	if ($(window).scrollTop()>=650) {
				$("#searchFixed").slideDown();
			} else{
				$("#searchFixed").slideUp();
			}
})
})
//<!--  右侧导航栏    -->
// 最下面的回到顶部按钮
$(function(){
	$(".rightNav_account").mouseenter(function(){
		$(this).css("background-color","#DF0010")
	}).mouseleave(function(){
		$(this).css("background-color","#262626")
	})
	$(".rightNav_shoppcar").mouseenter(function(){
		$(this).css("background-color","#DF0010")
	}).mouseleave(function(){
		$(this).css("background-color","#262626")
	})
	$(".rightNav_account").mouseenter(function(){
		$(this).css("background-color","#DF0010")
	}).mouseleave(function(){
		$(this).css("background-color","#262626")
	})
	
	$(".rightNav_centerbottom_top").mouseenter(function(){
		$(this).css("background-color","#DF0010")
	}).mouseleave(function(){
		$(this).css("background-color","#262626")
	})
	$(".rightNav_centerbottom_midd").mouseenter(function(){
		$(this).css("background-color","#DF0010")
	}).mouseleave(function(){
		$(this).css("background-color","#262626")
	})
	$(".rightNav_centerbottom_bott").mouseenter(function(){
		$(this).css("background-color","#DF0010")
	}).mouseleave(function(){
		$(this).css("background-color","#262626")
	})
	
	$(document).scroll(function(){
		var objT=document.documentElement.scrollTop||document.body.scrollTop;
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		$(".rightNav_centerbottom_bott>i").click(function(){
			animate(obj,{scrollTop:0},500);
		})
	})
})
