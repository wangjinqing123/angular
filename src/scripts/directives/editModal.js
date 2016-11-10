//组件
//翻页器
//
module.exports = function(){
  return {
    restrict: 'EA',
    templateUrl: '/src/scripts/directives/editModal.html',
    scope: true,
    replace:true,
    link: function(scope, elem, attrs) {
      if(attrs.id){
        scope.id = attrs.id;
        scope.idMark = scope.id;
        scope.$emit('modal-id',scope.id);
      }
    },
    controller: function($scope) {
      $scope.inputContent = "";
      $scope.id = "";
      $scope.isShow = false;
    	$scope.editContent = {
        title:'编辑',
        close:'关闭',
        cancel:'取消',
        save:'保存',
        content:{
            "ID":"请输入ID",
            "姓名":"请输入姓名",
            "年龄":"请输入年龄",
            "性别":"请输入性别",
            "城市":"请输入城市",
            "签名":"请输入签名"
        },
        inputModel:[]
      }
      //关闭窗口
      $scope.closeEditWindow = function(){
        $scope.isShow = false;
      }
      //接收广播事件, 编辑，添加
      $scope.$on('edit-click',function(event,param,id){
        $scope.isShow = param;
        $scope.id = id;
      });
      //点击保存
      $scope.saveEdit = function(id){
        if(id=="edit"){
          var data = $scope.editContent.inputModel;
          $scope.$emit('edit-data',data);
          $scope.editContent.inputModel =[];

        }
        if(id=="add"){
          console.log($scope.inputContent);
          var data = $scope.editContent.inputModel;
          $scope.$emit('add-data',data);
          $scope.editContent.inputModel =[];

        }
      }

      $scope.$on('complete-add',function(event,param){
        $scope.isShow = param;
      });
      $scope.$on('complete-edit',function(event,param){
        $scope.isShow = param;
      });
    }
  }
}
