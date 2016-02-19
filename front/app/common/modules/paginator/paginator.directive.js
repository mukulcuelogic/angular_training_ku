angular.module('paginator.directive',[])

       
.directive('paginator', function factory() {
        return {
            restrict:'E',
            controller: function ($scope, paginatorService) {
                $scope.pages = paginatorService;
            },
            templateUrl: 'app/common/modules/paginator/view/paginator.html'
        };
    });
    

