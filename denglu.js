var phone=document.querySelector(".register_phone");
var phonereg=/^1[3|5|7|8|9|4|6]\d{9}$/;
phone.onblur=function(){
	var phoneVal=this.value;
	if (!phonereg.test(phoneVal)) {
		phone.nextElementSibling.firstElementChild.style.display="block";
	} else{
		phone.nextElementSibling.firstElementChild.style.display="none";
	}
}
var yzm=document.querySelector(".register_yzm");
var yzm_hq=document.querySelector(".register_yzm_hq");
var yzmStr="";
function MakeCode(ele,num){
		var arr=["a","v","c","h","f","g","j","k","l","z","x",1,2,3,4,5,6,7,"A","B","C","D"];
			yzmStr="";
			for(var i=0;i<num;i++){
				//生成一个随机下标
				var index=Math.floor(Math.random()*arr.length);
				yzmStr+=arr[index];
			}
			console.log(yzmStr)
			ele.innerHTML=yzmStr;
}	
MakeCode(yzm_hq,4);
yzm_hq.onclick=function(){
	yzm_hq.innerHTML="";
	MakeCode(this,4);
}
yzm.onblur=function(){
	var yzmVal=yzm.value;
	if (!(yzm.value.toLowerCase()==yzmStr.toLowerCase())) {
		yzm_hq.nextElementSibling.firstElementChild.style.display="block";
		MakeCode(yzm_hq,4);
	}else{
		yzm_hq.nextElementSibling.firstElementChild.style.display="none";
	}
}
var mima=document.querySelector(".register_mima");
var mimareg=/^\w{6,12}$/;
mima.onblur=function(){
	var mimaVal=mima.value;
	if (mimareg.test(mimaVal)) {
		mima.nextElementSibling.firstElementChild.style.display="none";
	} else{
		mima.nextElementSibling.firstElementChild.style.display="block";
	}
}
var denglu=document.querySelector(".register_formbtn");
denglu.onclick=function(){
	var phoneVal=phone.value;
	var mimaVal=mima.value;
	var arr=JSON.parse(localStorage.register);
	console.log(arr)
	console.log(arr[0].password);
	for (var i=0;i<arr.length;i++) {
		if (arr[i].phone==phoneVal&&arr[i].password==mimaVal) {
			alert("登录成功，正在跳转主页。。。")
			location.href="happy.html";
	   }
	}
}







