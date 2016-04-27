var services = angular.module("livrariaApp.services", []);

services.factory("livrariaAppFactory", ["$http", function($http) {
	var minhaColecao = function() {
		var autores = [];
		var livros = [];
	};
	
	minhaColecao.prototype.getAutores = function() {
		var self = this;
		
		return $http.get("autores.json").then(
			function(response) {
				self.autores = response.data.autores;
				return response;
				
			}, function(response) {
				console.log("problema");
				return response;
			}		
		);		
	};
	
	minhaColecao.prototype.getLivros = function() {
		var self = this;
		
		return $http.get("livros.json").then(
			function(response) {
				self.livros = response.data.livros;
				return response;
				
			}, function(response) {
				console.log("problema");
				return response;
			}		
		);		
	};

	return minhaColecao;
}]);

/*
 - criar array tanto em livros.html quanto em autores.html -aula # filtros-, 
 para imprimir os atributos do arquivo livros.json e autoes.json -aula #7 factory-.
 
 
 
 
*/