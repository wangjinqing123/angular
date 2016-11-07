module.exports = function userController($scope){
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
  //
  // $scope.$watch('afterList',function(newValue,oldValue){
  //   //获取页
  //   $scope.pageArr = [];
	 //  var pageNum = Math.ceil(newValue.length / 8);
	 //  $scope.pageArr = [];
	 //  for (var i = 0; i < pageNum; i++) {
	 //      $scope.pageArr[i] = i + 1;
	 //  }
	 //  //单页获取
	 //  var q = 8 * ($scope.currpage - 1);
	 //  var h = 8 * $scope.currpage - 1;
	 //  if (newValue.length > 8) {
	 //      $scope.arr = newValue.slice(q, h);
	 //  } else {
	 //      $scope.arr = newValue;
	 //  }

  // });

}