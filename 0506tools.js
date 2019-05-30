//获取cookie 并转为数组
function getAll(){
	var str=cookieObj.get("datas");
	var arr=JSON.parse(str);
	return arr;
}
//检测商品是否存在方法
function CheckCookie(pid){
	var arr=getAll();//获取所有cookie
	for(var i=0;i<arr.length;i++){
		if(pid==arr[i].pid){
			return true;
		}	
	}
	
	return false;
}
//更新数量函数
function updateNum(pid,num){
	var arr=getAll();//cookie数组
	for(var i=0;i<arr.length;i++){
		if(pid==arr[i].pid){
			console.log(arr[i].pcount)
			arr[i].pcount+=num;//改变当前商品的数量
		}		
	}
	//把数量改变后的数组从新设置回cookie
	cookieObj.set({
		name:"datas",
		value:JSON.stringify(arr)
	})
	
}
//求和
function getTotal(){
	var cks=document.querySelectorAll(".ck");
	var total=0;
	for(var i=0;i<cks.length;i++){
		if(cks[i].checked==true){
			var tr=cks[i].parentNode.parentNode;
							//价格                                                 数量
			total+=  Number(tr.children[4].innerHTML) * tr.children[5].innerHTML;
		}
	}
		return total;
	
}
//删除方法
	function del(pid){
		var arr=getAll();//获取cookie数组
		for(var i=0;i<arr.length;i++){
			if(arr[i].pid==pid){
				//从当前找到数据的下标i 从下标位置 删除数据
				arr.splice(i,1);
			}
		}
		//把删除后的arr设置会cookie
		cookieObj.set({
			name:"datas",
			value:JSON.stringify(arr)
		})

	}
