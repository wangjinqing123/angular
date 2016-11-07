var demoTpl = require('./tpls/index.string');
var commonUtil = require('./utils/common.util.js');
commonUtil.render(demoTpl);

require('./js/index.js');

//
var app = angular.module('angular-back', ['ngRoute']);



var homeController = require('./controllers/homeController.js');
var userController = require('./controllers/userController.js');
var saysayController = require('./controllers/saysayController.js');
var pictureController = require('./controllers/pictureController.js');
var messageController = require('./controllers/messageController.js');
var hotController = require('./controllers/hotController.js');
var talkController = require('./controllers/talkController.js');
var fenleiController = require('./controllers/fenleiController.js');
var relationShipController = require('./controllers/relationShipController.js');

//组件
//翻页器
app.directive('pageNumber', function(){
  return {
    restrict: 'EA',
    templateUrl: '/src/scripts/directives/pageNumber.html',
    scope: true,
    replace:true,
    link: function(scope, elem, attrs) {
    	
      if(attrs.isadd == "true") {
      	console.log("asdfa");
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
      $scope.isAdd = false;
      $scope.isDelete = false;
      $scope.isEdit = false;
      $scope.isSearch = false;
    }
  }
})


//路由配置
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{//主页
		templateUrl:'/src/scripts/tpls/route/home.html',
		controller:homeController
	})
	.when('/user',{//用户
		templateUrl:'/src/scripts/tpls/route/user.html',
		controller:userController
	})
	.when('/saysay',{//说说
		templateUrl:'/src/scripts/tpls/route/saysay.html',
		controller:saysayController
	})
	.when('/picture',{//图片库
		templateUrl:'/src/scripts/tpls/route/picture.html',
		controller:pictureController
	})
	.when('/message',{//消息
		templateUrl:'/src/scripts/tpls/route/message.html',
		controller:messageController
	})
	.when('/hot',{ //热门话题
		templateUrl:'/src/scripts/tpls/route/hot.html',
		controller:hotController
	})
	.when('/talk',{ //详细话题
		templateUrl:'/src/scripts/tpls/route/talk.html',
		controller:talkController
	})
	.when('/fenlei',{//分类
		templateUrl:'/src/scripts/tpls/route/fenlei.html',
		controller:fenleiController
	})
	.when('/relation',{ //关系
		templateUrl:'/src/scripts/tpls/route/relation.html',
		controller:relationShipController
	})
	.otherwise('/home');
}]);





























// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: '/src/scripts/tpls/route/home.html',
//       controller: 'homeController'
//     })
//     .when('/course', {
//       templateUrl: '/src/scripts/tpls/route/courses.html',
//       controller: 'courseController'
//     })
//     .when('/employee', {
//       templateUrl: '/src/scripts/tpls/route/employees.html',
//       controller: 'employeeController'
//     })
//     .when('/employee/:abc', {
//       templateUrl: '/src/scripts/tpls/route/employeedetail.html',
//       controller: 'employeeDetailController'
//     })
//     .otherwise({
//       redirectTo: '/home'
//     })
// }]);

// app.controller('homeController', ['$scope', function($scope){
//   $scope.message = 'home page';
// }]);

// app.controller('courseController', ['$scope', function($scope){
//   $scope.courses = ['html5', 'java', 'android', 'iOS'];
// }]);

// app.controller('employeeController', ['$scope', '$http', function($scope, $http){
//   $http({
//     url: '/mock/employee.json'
//   })
//   .then(function(res){
//     $scope.employees = res.data.data;
//   }, function(){

//   })
// }]);

// app.controller('employeeDetailController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
//   $http({
//     url: '/mock/employeedetail.json',
//     params: {
//       id: $routeParams.abc
//     },
//     method: 'get'
//   })
//   .then(function(res){
//     $scope.employee = res.data.data[0];
//   })
// }]);
