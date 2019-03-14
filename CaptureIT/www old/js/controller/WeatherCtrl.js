function WeatherCtrl($scope, $http){
	
	//$scope.panel=0;
	$scope.search= function(){
		/*var url= "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ $scope.city + "&mode=json&units=metric&cnt=10";
		$scope.loader= true;
		$http.get(url).success(httpSuccess).error(function(){*/
			//$scope.loader= false;
			//alert('impossible de récupérer les infos');
		//});
	}
	$scope.geolocate=function(response){
		navigator.geolocation.getCurrentPosition(function(position){
			console.log(position);
		})
	}

	httpSuccess = function(response){
		$scope.panel=1;
		$scope.loader= false;
		$scope.weather = response;
	}
	$scope.city = "Monastir";
	$scope.Math=Math;

	

}