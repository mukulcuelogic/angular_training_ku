angular.module('webservice.service',[])
       .service('webService',['$http' , webserviceService]);


/*
 * all ajax's call in app goes from here, currently we are using only get method to get data from server 
 */
function webserviceService($http) {

//    var webServiceUrl = "http://localhost:90/angular_test/back/";   // server URL
    var webServiceUrl = "../back/"; 
    var service = {};
    service.get = get;
    return service;

    
    function get(url , callback) {
        
        try {
            
            $http({
                method: 'get',
                url: webServiceUrl + url,
            }).
            then(function(data) {
                if(data.data.status == 'ok')  
                {
                    callback(data.data.data);
                }
                else
                {
                    throw "invalid server error";
                }
            }, function(status) {
                
                 throw "invalid server error";
            });  
        } catch (e) {
            
            console.log("Got an error!",e);
        }
         
  }
  
};