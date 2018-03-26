const ToDoApp = angular.module('ToDoApp', []);

ToDoApp.controller('ToDoController', ['$http', function($http){
    let self = this;
    self.display = {
        tasks: []
    };

    self.getAllTasks = function(){
        $http({
            method: "GET",
            url: "/tasks"
        }).then(function(response){
            console.log(response);
            self.display.tasks = response.data;
        }).catch(function(response){
            console.log('Error getting tasks', error);
        });
    }

    self.getAllTasks();
}]);