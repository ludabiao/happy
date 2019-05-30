// 地址  三联动
var province=["请选择","黑龙江","广东","河北"];
		
		var citys=[
					["请选择"],
					["哈尔滨","牡丹江","大庆"],
					["广州","深圳","佛山"],
					["石家庄","廊坊","秦皇岛"]
				];
		var areas=[
					[
						["请选择"]
					],
					[
						["南岗区","道理区","道外区"],["牡丹江1","牡丹江2","牡丹江3"],["龙凤区","大庆1","大庆2"]
					],
					[
						["天河区","海珠区","白云区"],["南山区","福田区","罗湖区"],["禅城区","南海区","三水区"]
					],
					[
						["石家庄1","石家庄2","石家庄3"],["廊坊1","廊坊2","廊坊3"],["秦皇岛1","秦皇岛2","秦皇岛3"]
					]
				];
var proEle=document.getElementById("pro");
var opts="";
for (var i=0;i<province.length;i++) {
	opts+='<option value="'+i+'">'+province[i]+'</option>';
}
proEle.innerHTML=opts;
var proIndex=null;
var cityEle=document.getElementById("city");
proEle.onchange=function(){
	proIndex=this.value;
	var optc="";
	for(var i=0;i<citys[proIndex].length;i++){
			optc+='<option value="'+i+'">'+citys[proIndex][i]+'</option>';	
		}	
		cityEle.innerHTML=optc;
		LoadArea(proIndex,0)//加载区
}
var areaEle=document.getElementById("area");
cityEle.onchange=function(){
	var cityIndex=this.value;//市改变 获取市的下标
			LoadArea(proIndex,cityIndex);
}
function LoadArea(shengIndex,shiIndex){
	var opta="";
	for (var i=0;i<areas[shengIndex][shiIndex].length;i++) {
		opta+='<option value="'+i+'">'+areas[shengIndex][shiIndex][i]+'</option>';	
	}
	areaEle.innerHTML=opta;
}





// 数据渲染    
function jiazhai(){
var arrcar=JSON.parse(localStorage.shopcart);
console.log(arrcar)

var prostr="";
for (var i=0;i<arrcar.length;i++) {
	
	prostr+='<li pid=" '+arrcar[i].pid+' ">'
				+'<input type="checkbox" class="car_gouxuan" />'
				+'<div class="car_list_prod">'
					
					+'<a>'
						+'<img src=" '+arrcar[i].pimage+' " width="75px"height="75px"/>'
					+'</a>'
					+'<a class="car_list_itemOnline">'
						   +arrcar[i].pname
					+'</a>'
					+'<div class="car_list_conprice">'
						+'<p>'+arrcar[i].price+'</p>'
					+'</div>'
					+'<div class="car_list_connum">'
						+'<div class="car_list_connumact">'
							+'<a class="car_countreduce">-</a>'
							+'<input type="text"  value=" '+arrcar[i].pcount+' " class="car_countinput" />'
							+'<a class="car_countadd">+</a>'
						+'</div>'
					+'</div>'
					+'<div class="car_priceamount">'
						+'<div class="car_money">'+(arrcar[i].pcount)*(arrcar[i].price)+'</div>'
					+'</div>'
					+'<div class="car_caozuo">'
						+'<a>收藏&nbsp;</a>'
						+'<a  class="car_caozuoDel">&nbsp;删除</a>'
					+'</div>'
					
				+'</div>'
			+'</li>'
	
}
var ul_menu=document.querySelector(".car_list_item");
ul_menu.lastElementChild.innerHTML=prostr;
Shanchu();
}
jiazhai();
// 加减点击
var countj=document.querySelectorAll(".car_countreduce");
var count=document.querySelectorAll(".car_countinput");
var countji=document.querySelectorAll(".car_countadd");
//console.log(countj)
//console.log(count)
//console.log(countji)
for (var i=0;i<countj.length;i++) {
	countj[i].index=i;
	countj[i].onclick=function(){
		var countVal=this.nextElementSibling.value;
//		console.log(countVal)
		countVal=Number(countVal)-1;
		if (countVal<=0) {
			countVal=1
		}
		this.nextElementSibling.value=countVal;
//		console.log(countVal)
		
		
		var djia=this.parentNode.parentNode.previousElementSibling.firstElementChild;
		var dheji=Number( djia.innerHTML )*Number( countVal )
		this.parentNode.parentNode.nextElementSibling.firstElementChild.innerHTML=dheji;
		 
		 Heji()
	}
	
}
for (var i=0;i<countji.length;i++) {
	countji[i].onclick=function(){
		var countVal=this.previousElementSibling.value;
//		console.log(countVal)
		countVal=Number(countVal)+1;
        this.previousElementSibling.value=countVal;
//		console.log(countVal)
         
         var djia=this.parentNode.parentNode.previousElementSibling.firstElementChild;
		var dheji=Number( djia.innerHTML )*Number( countVal )
		this.parentNode.parentNode.nextElementSibling.firstElementChild.innerHTML=dheji;
		 
		 Heji()
	}
}

// 全选框   按钮
function Quanx(){
var quanx=document.querySelector(".checkedallbox").firstElementChild;
var danx=document.querySelectorAll(".car_gouxuan");

quanx.onchange=function(){
	for (var k=0;k<danx.length;k++) {
		danx[k].checked=this.checked;
		if (this.checked) {
			 Heji();
		} else{
			var total=document.querySelector(".car_shoppsummoney");
			total.innerHTML= '¥' +0;
		}
		
	}
}
}
Quanx();
//  单个  按钮框   单选
function danx(){
	var danx=document.querySelectorAll(".car_gouxuan");
	for (var z=0;z<danx.length;z++) {
		
		danx[z].index=z;
		danx[z].onchange=function(){
			
			 var total=document.querySelector(".car_shoppsummoney");
		     var total_d=document.getElementsByClassName("car_money");
			
				
			   
				var sum=0;
				for (var q=0;q<total_d.length;q++) {
					if (this.checked==true) {
						
						var xheji=total_d[this.index].innerHTML;
						
						sum=Number( xheji );
						
					}
				}		
				total.innerHTML= '¥' +sum;
				
				
				
			
			
		}
	}
}
danx();





// 合计
function Heji(){
	var total=document.querySelector(".car_shoppsummoney");
	var total_d=document.getElementsByClassName("car_money");
	console.log(total_d);
	var sum=0;
	for (var q=0;q<total_d.length;q++) {
		sum+=Number( total_d[q].innerHTML );
	}
	total.innerHTML= '¥' +sum;

}

//  删除
function Shanchu(){
	var dels=document.querySelectorAll(".car_caozuoDel");
	console.log(dels)
	for (var i=0;i<dels.length;i++) {
		dels[i].index=i;
		dels[i].onclick=function(){
			
			var li_del=this.parentNode.parentNode.parentNode.getAttribute("pid");
			console.log(li_del)
			var arrcar=JSON.parse(localStorage.shopcart);
			for (var k=0;k<arrcar.length;k++) {
				console.log(arrcar[k].pid)
				if (arrcar[k].pid==Number(li_del)) {
					arrcar.splice(k,1);
				}
				
			}
			localStorage.shopcart=JSON.stringify(arrcar);
			jiazhai();
		}
	}
	
}
Shanchu();






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
