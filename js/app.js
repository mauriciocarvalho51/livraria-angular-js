var livrariaApp = angular.module('livrariaApp', ['ngRoute', 'pascalprecht.translate', 'livrariaApp.services']);

livrariaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/partials/livros.html',
			controller: 'LivrosCtrl'
		})
		.when('/livros', {
			templateUrl: '/partials/livros.html',
			controller: "LivrosCtrl"
		})
		.when('/autores', {
			templateUrl: '/partials/autores.html',
			controller: 'AutoresCtrl'
		})		
		.otherwise({
			redirectTo: '/'
		});
		
	$locationProvider.html5Mode(true);
	
	//$translateProvider.translations('en', {
	//	'livros': 'Books'
	//}).translations('pt', {
	//	'livros': 'Livros'
	//});
	
	//$translateProvider,preferredLanguage('pt');
	
}]);


livrariaApp.controller("HomeCtrl", ["$scope", function($scope) {
	
	
}]);

//livrariaApp.controller("LivrosCtrl", ["$scope", "livrariaAppFactory", function($scope, livrariaAppFactory) {
//	var livrariaAppCollection = new livrariaAppFactory();
//	livrariaAppCollection.getLivros().then(function(response) {
//		$scope.livros = livrariaAppCollection.livros;		
//	})	
//}]);

livrariaApp.controller("LivrosCtrl", ["$scope", "$translate", function($scope, $translate) { 
	$scope.listLivros = [
		{titulo:'Fausto', autor:'Goethe', editora:'Editora 34'},
		{titulo:'Assim falou Zaratustra', autor:'Nietzsche', editora:'L&PM Pocket'},
		{titulo:'Ilhíada', autor:'Homero', editora:'Compania de bolso'},
		{titulo:'Irmãos Karamazóv', autor:'Dostoiésvski', editora:'L&PM Pocket'}
	];
	
	$scope.addZadig = function() {
		$scope.listLivros.push({"titulo":"Zadig ou O destino", "autor":"Voltaire", "editora":"L&PM Pocket"});
	};
	
	$scope.add = function(livro) {		
		$scope.listLivros.push(livro);	
		$scope.current = {};		
	};
				
	$scope.selectEdit = function(livro) {
		$scope.current = livro;
	};
	
	$scope.save = function(livro) {
		$scope.current = {};
	};
	
	$scope.del = function(livro) {
			var result = confirm("Você tem certeza?");
			if (result==true) {
				var index = $scope.listLivros.indexOf(livro);
				$scope.listLivros.splice(index, 1);
			}					
	};	

	//$scope.changeLang = function() {
	//	$translate.use('pt');
	//};
	
	//$translate('livros').then(function(translatedValue) {
	//	$scope.livrosValue = translatedValue;
	//});
		
}]);

livrariaApp.controller("AutoresCtrl", ["$scope", "livrariaAppFactory", function($scope, livrariaAppFactory) {
	var livrariaAppCollection = new livrariaAppFactory();
	livrariaAppCollection.getAutores().then(function(response) {
		$scope.autores = livrariaAppCollection.autores;		
	})	
}]);

livrariaApp.controller("MenuBarController", ["$scope", function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
}]);