//组件
//翻页器
//
module.exports = function(){
  return {
    restrict: 'EA',
    templateUrl: '/src/scripts/directives/pageNumber.html',
    scope: true,
    replace:true,
    link: function(scope, elem, attrs) {

      if(attrs.isadd == "true") {
        scope.isAdd = true;
      }
      if(attrs.isdelete=="true"){
      	scope.isDelete = true;
      }
      if(attrs.isedit == "true") {
        scope.isEdit = true;
      }
      if(attrs.issearch=='true'){
      	scope.isSearch = true;
      }
    },
    controller: function($scope) {
    	$scope.list = {'isAdd':'添加','isEdit':'编辑','isDelete':'删除','isSearch':'搜索'};
      $scope.buttonBg = ["btn btn-primary","btn btn-success","btn btn-info","btn btn-warning"];
      $scope.isAdd = false;
      $scope.isDelete = false;
      $scope.isEdit = false;
      $scope.isSearch = false;
    }
  }
}
