/*angular.module('multipartFormService',['menuService'])
.factory('multipartForm', function($http, Menu){
	var multipartFormFactory = {};

	multipartFormFactory.uploadFileToUrl  = function(file, uploadUrl){
	
			var fd = new FormData();
			fd.append('file', file);
			$http.post(uploadUrl, fd, {
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined }
			}).success(function(){
        	})
        	.error(function(){
        	});
      	
	};

	return multipartFormFactory;
});*/