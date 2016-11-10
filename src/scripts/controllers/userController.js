//用户信息

module.exports = function userController($scope,modalService){

	$scope.pageSize = 10;
	$scope.title = "用户信息";
  $scope.tableHead = {
  	'id'   : "ID",
  	"name" : "姓名",
  	"age"  : "年龄",
    "sex"  : "性别",
    "city" : "城市",
    "sign" : "签名"
  };
  $scope.tableContent=[];
  $.ajax({
  	url:'/mock/userInfo.json',
  	type:'get',
  	success:function(res){
  		$scope.tableContent = res;
  	}
  });

	var idMark = {};
	$scope.$on('modal-id',function(event,id){
		idMark[id]=id;
	})
	//编辑，添加，删除，搜索
	$scope.actionTable = function(eventKind){
		switch (eventKind) {
			case "isAdd":
				//点击添加时，向子元素发送广播事件
				$scope.$broadcast('edit-click',true,idMark["add"]);
				break;
			case "isEdit":
			//点击编辑时，向子元素发送广播事件
				$scope.$broadcast('edit-click',true,idMark["edit"]);
				break;
			case "isDelete":

				break;
			case "isSearch":

			break;
			default:

		}
	}
	//
	$scope.$on('edit-data',function(event,data){
		var obj = getObj(data);
		//保存添加的信息
		if(isComplete(obj)){
			
			$scope.$broadcast("complete-edit",false);

			for(var i = 0;i<$scope.tableContent.length;i++){
				var id = $scope.tableContent[i].id;
				if(id && id === obj.id){
					$scope.tableContent[i] = obj;
					break;
				}
			}

			alert("修改成功");
		}else{
			alert("信息不完整,请重新填写");
		}
	});
	//
	$scope.$on('add-data',function(event,data){
		var obj = getObj(data);
		//保存添加的信息
		if(isComplete(obj)){
			$scope.$broadcast("complete-add",false);
			$scope.tableContent.push(obj);
			alert("添加成功");
		}else{
			alert("信息不完整,请重新填写");
		}
	});
	//判断信息是否完整
	function isComplete(data){
		var flag = true;
		for(var item in $scope.tableHead){
			if(!(item in data)){
				flag = false;
			}
		}
		return flag;
	}
}

//数据
function getObj(data){
	var obj = {};
	data.forEach(function(item,index,data){
		if(item){
			switch(index){
				case 0: obj.id = item; break;
				case 1: obj.name = item; break;
				case 2: obj.age = item; break;
				case 3: obj.sex = item; break;
				case 4: obj.city = item; break;
				case 5: obj.sign = item; break;
				default: break;
			}
		}
	});
	return obj;
}
