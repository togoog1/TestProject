var testapp;
(function (testapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($http) {
                var _this = this;
                this.$http = $http;
                this.$http.get('/api/movies')
                    .then(function (response) {
                    _this.movies = response.data;
                })
                    .catch(function (response) {
                    console.error('Could not retrieve movies.');
                });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = testapp.Controllers || (testapp.Controllers = {}));
})(testapp || (testapp = {}));
