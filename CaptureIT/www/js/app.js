document.addEventListener('deviceready',function(){
//Ici du code au lacement de l'appli (appel de modules directement liés à Cordova)
}, false);

var app=angular.module('app',[]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home',{templateUrl:'partials/home.html'})
		.when('/history', {templateUrl:'partials/history.html'})
		.otherwise({redirectTo: '/home'})
})
