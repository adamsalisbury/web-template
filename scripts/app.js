var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
        url: '/home',
        templateUrl: '/templates/partial-home.html',
        controller: Home.HomeController
    })
        .state('about', {
        url: '/about',
        templateUrl: '/templates/partial-about.html'
    });
});
var Home;
(function (Home) {
    class HomeController {
        constructor($scope) {
            this.setGreeting = () => {
                this.scope.greeting = 'hello2';
            };
            this.scope = $scope;
            this.setGreeting();
        }
    }
    HomeController.$inject = [
        '$scope'
    ];
    Home.HomeController = HomeController;
})(Home || (Home = {}));
//# sourceMappingURL=app.js.map