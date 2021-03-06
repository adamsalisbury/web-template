var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/templates/partial-home.html',
        controller: Home.HomeController
    })
    .state('aboutr', {
        url: '/about',
        templateUrl: '/templates/partial-about.html'
    })
 });


// Cool