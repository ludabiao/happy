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

//  轮播图
var imgs_lbt=document.querySelectorAll(".full_move img");
var ul_lbt=document.querySelector(".full_small ul");
var lis_lbt=ul_lbt.children;
console.log(imgs_lbt);
console.log(lis_lbt);

var x_lbt=0;
function banner(){
	x_lbt++;
	if (x_lbt==imgs_lbt.length) {
		x_lbt=0;
	}
	for (var i=0;i<imgs_lbt.length;i++) {
		imgs_lbt[i].style.display="none";
		lis_lbt[i].style.background="#000";
	}
	imgs_lbt[x_lbt].style.display="block";
	lis_lbt[x_lbt].style.background="#fff";
	
}
var time_lb=setInterval(banner,2000);
for (var i=0;i<lis_lbt.length;i++) {
	lis_lbt[i].index=i;
	lis_lbt[i].onmouseover=function(){
		for (var j=0;j<lis_lbt.length;j++) {
			lis_lbt[j].style.background="#000";
		}
		this.style.background="#fff";
		x_lbt=this.index-1;
		banner();
		clearInterval(time_lb);
		
	}
	lis_lbt.onmouseout=function(){
		for (var j=0;j<lis_lbt.length;j++) {
			lis_lbt[j].style.background="#000";
		}
		this.style.background="#fff";
		time_lb=setInterval(banner,2000);
		
	}
	
}

// TV 直播 秒杀 倒计时
function GetTime(){
	var kill_hour=document.getElementsByClassName("kill_hour")[0];
    var kill_minute=document.getElementsByClassName("kill_minute")[0];
    var kill_second=document.getElementsByClassName("kill_second")[0];

	var mydate=new Date();
	var nowyear=mydate.getFullYear();//年
    var nowmonth=mydate.getMonth(); //月0-11表示
    var nowdate=mydate.getDate(); //日
    var nowhour=mydate.getHours(); //时
    var nowminutes=mydate.getMinutes();//分
//  var nowsecond=mydate.getSeconds();  //秒
//  var nowmillisecond=mydate.getMilliseconds();//毫秒
	
	var killtime=new Date();
	killtime.setFullYear(Number(nowyear));
	killtime.setMonth(Number(nowmonth));
	killtime.setDate(Number(nowdate));
	killtime.setHours(Number(nowhour));
	killtime.setMinutes(Number(nowminutes)+40);
//	killtime.setSeconds(0);
//	killtime.setMilliseconds(0);
	function Diff(){
		var mydate=new Date();
		var diff=parseInt((killtime.getTime()-mydate.getTime())/1000);
		
		var second=diff%60;
		var  minutes=parseInt(diff/60%60);
		var hours=parseInt(diff/60/60);
		kill_hour.innerHTML=hours<10? "0"+hours : hours ;
		kill_minute.innerHTML=minutes<10 ? "0"+minutes : minutes;
		kill_second.innerHTML=second<10? "0"+second : second;
	}
	setInterval(Diff,1000);
}
GetTime();

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

//  <!--   优选好物        数据渲染  -->

$.ajax({
			type:"get",
			url:"copyshuju.json",
			dataType:"json",
			success:function(res){
				console.log(res);
				
			var arr=res.ECHomeGoodsResult;
            console.log(arr);
			var str="";
			for (var i=0;i<arr.length;i++) {
				
				str+='<li pid="'+arr[i].goods_common_id+'" style="margin-right:10px;">'
					  +'<div class="new_contentImg">'
							+'<img src=" '+arr[i].goodsListImage +'" width="262px" height="262px"/>'
						+'</div>'
						+'<div class="new_contentText">'
							+'<p>'+arr[i].goods_short_desc2+'</p>'
							+'<p>'
								+arr[i].goods_name
							+'</p>'
						+'</div>'
						+'<div class="new_contentPrice">'
							+'<span>'
								 +'<span>¥</span>'
								 +'<span style="font-size: 22px;">'+arr[i].sale_price+'</span>'
							+'</span>'
							+'<span>'
								+'<del>'+arr[i].market_price+'</del>'
							+'</span>'
						+'</div>'
						+'<div class="new_content_hover"></div>'
					+'</li>'
			}
			var ul_y=document.querySelector("#goodthingsSelect").children[0];
			ul_y.innerHTML=str;
			var lis=document.querySelector("#goodthingsSelect").children[0].children;
			console.log(lis)
			for (var i=0;i<lis.length;i++) {
				lis[i].onclick=function(){
					var pid=this.getAttribute("pid");
					location.href="xiangqingye.html?pid="+pid;
				}
			}	
				
				
			},
			async:true
			
		});








