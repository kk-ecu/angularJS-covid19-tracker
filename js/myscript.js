const URL = 'https://covid2019-api.herokuapp.com/v2';

let app = angular.module('MyApp', []);

app.controller('MyCtrl', ($scope, $http) => {
    //This is controller
    $scope.title = "Stay Home Stay Safe";

    $scope.changeValue = () => {
        $scope.title = "This is home time"
    }

    //Calling api
    $http.get(`${URL}/total`).then((response) => {
        //Success
        console.log(response.data);
        $scope.all_data = response.data;
    }, (error) => {
        //Error
        console.log(error);
    })

    // Get Country data
    $scope.get_country_data =()=>{
        let country = $scope.c;
        console.log($scope.c)
        if(country ==""){
            $scope.country = undefined;
            return;
        }

        $http.get(`${URL}/country/${country}`).then((response)=>{
            //Success
            console.log(response.data);
            $scope.country_data = response.data;

        },(error)=>{
            //Error
            console.log(error);

        })
    }

});