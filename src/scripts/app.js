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
var talkKindController = require('./controllers/talkKindController.js');
var relationShipController = require('./controllers/relationShipController.js');

//服务
var modalService = require('./services/modalService.js');
app.factory('modalService',modalService);

//组件
var pageNumber = require('./directives/pageNumber.js');
var editModal = require('./directives/editModal.js');
app.directive('pageNumber', pageNumber);
app.directive('editModal',editModal);


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
	.when('/fenlei',{//话题类型
		templateUrl:'/src/scripts/tpls/route/fenlei.html',
		controller:talkKindController
	})
	.when('/relation',{ //关系
		templateUrl:'/src/scripts/tpls/route/relation.html',
		controller:relationShipController
	})
	.otherwise('/home');
}]);
