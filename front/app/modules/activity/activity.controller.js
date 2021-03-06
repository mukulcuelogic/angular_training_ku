angular.module('activity.controller',['services','paginator'])
      .controller('activityCtrl',['$scope','activityService','$location','DEFAULT_VAL','paginatorService',activityController])

function activityController($scope,activityService,$location,DEFAULT_VAL,paginatorService ) {
    try{
        paginatorService.page = 0;  
        $scope.rowsPerPage = DEFAULT_VAL.RECORDS_PER_PAGE;;
        $scope.activities = [];

        $scope.sortOptions = [
            {id: '+id', name: 'ID ( Low to High )'},
            {id: '-id', name: 'ID ( High to low )'},
            {id: '+action', name: 'Action Performed  ( A to Z )'},
            {id: '-action', name: 'Action Performed  ( Z to A )'},
            {id: '+employee_name', name: 'Employee Name  ( A to Z )'},
            {id: '-employee_name', name: 'Employee Name  ( Z to A )'},
          
        ];
        $scope.sortorder = $scope.sortOptions[0];  // set default sort order
        
        /*
        * get all activity 
        */
        $scope.getActivity = function(){
                activityService.get(function(data){
                $scope.activities = data;
            });
        };
        $scope.getActivity(); // get activity data

        /*
         * delete activity
         */
        $scope.deleteActivity = function(activityId) {
                $scope.activities = activityService.deleteActivity($scope.activities , activityId);
                $location.path('/activity');
        };
    } catch(e) {
        
        /// push error to log
        console.log( "Got an error: " + e);
        
    }
};