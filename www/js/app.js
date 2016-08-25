// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('2hApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider){
 $stateProvider
 .state('home', {
        url:'/home',
        templateUrl: 'views/home/home.html'
  })

 $stateProvider
 .state('terms', {
        url:'/terms',
        templateUrl: 'views/terms/terms.html'
  })

 $stateProvider
 .state('forgotpwd', {
        url:'/forgotpwd',
        templateUrl: 'views/forgotpwd/forgotpwd.html'
  })

 .state('login',{
        url:'/login',
        templateUrl: 'views/login/login.html'
  })


   .state('signup',{
          url:'/signup',
          templateUrl: 'views/signup/signup.html'
    })

 .state('dashboard',{
        url:'/dashboard',
        templateUrl: 'views/dashboard/dashboard.html'
  })

 .state('dashboard.listreport',{
	url:'/listreport',

	views: {
		'listreport-tab': {
			templateUrl: 'views/listreport/listreport.html',
			 controller: 'listreportController'
			}
		}
	})

 .state('dashboard.reportafact',{
        url:'/reportafact',
        views: {
                'reportafact-tab': {
                        templateUrl: 'views/reportafact/reportafact.html',
			controller: 'reportafactController'
                        }
                }
        })

 .state('dashboard.signout',{
        url:'/signout',
        views: {
                'signout-tab': {
                        templateUrl: 'views/signout/signout.html'
                        }
                }
        });


$urlRouterProvider.otherwise('/home');

})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
