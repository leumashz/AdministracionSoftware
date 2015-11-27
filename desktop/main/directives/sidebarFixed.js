angular.module('sidebarFixedDirective',['authService','menuService'])

.directive('sidebarFixed', function(authService,menuService) {
  return {
    restrict: 'EA',
    require: '^ngModel'
    template: '<div class="side-nav fixed  white z-depth-4" ng-if="place!=='login'">
	        <ul class="collection">
	        	<!-- Usuario admin  o cajero -->
	        		<li class="collection-item avatar">
				      <img src="img/avatar/persona.jpg" alt="" class="circle">
				      
				      <p>Hola, <br>
				        	{{usuario.nombre}}
				      </p>
				      <a href="#" class="secondary-content"><i class="material-icons">grade</i></a>
				    </li>
	        	<!-- Inician elementos de la barra de navegacion -->
	        	<li class="collection-item avatar">
			    	<a href="/home"><i class="material-icons circle red">store</i>
			      		<span class="title">Inicio</span>
			      	</a>
			    </li>
			    <li class="collection-item avatar">
			    	<a href="/verMenu"><i class="material-icons circle red">receipt</i>
			      	Menu
			      	</a>
			    </li>
			    <li class="collection-item avatar">
			    	<a href="/vOrdenes"><i class="material-icons circle red">view_list</i>
			      	Ordenes	
			      	</a>
			    </li>
			    <li class="collection-item avatar">
			    	<a href="/verUsuarios"><i class="material-icons circle red">perm_identity</i>
			      	Usuarios
			      	</a>
			    </li>
			    <div class="divider"></div>
			    <li class="collection-item avatar">
			    	<a href="/info"><i class="material-icons circle red">assignment_ind</i>
			      	Info	
			      	</a>
			    </li>  
			    <li class="collection-item avatar">
			    	<a href="#" ng-click="doLogout()"><i class="material-icons circle red">power_settings_new</i>
			      	Salir	
			      	</a>
			    </li> 
	        </ul>
	    </div>'
  }
});



/*angular.module('filedMdl',[])

.directive('fileModel', function($parse){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function(){
				scope.$apply(function(){
					modelSetter(scope,element[0].files[0]);
					//console.log(scope.element[0].files);
				});
			});
		}
	};
});*/