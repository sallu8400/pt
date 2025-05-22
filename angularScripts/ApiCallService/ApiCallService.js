
PrintoApp.service("ApiCall", ["$http", function ($http) {
    this.PostApiCall = function (controller, method, jdata) {
        return $http.post(`https://localhost:44344/${controller}/${method}`, jdata, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               
            }
        })
            .then(res => res.data)
            .catch(error => {
                console.log(error);
                throw error;
            });
    };
}]);