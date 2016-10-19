var app = angular.module('starWarsApp', []);

app.controller('MainController', MainController);

var API = 'http://swapi.co/api';

function MainController($http) {
  var main = this;
  console.log('MainController loaded');

  main.films = [];
  main.lines = [];
  main.getFilmData = function() {
    main.lines = [];
    main.class = 'no-scroll';
    $http.get(main.selected)
         .then(function(response) {
           main.lines = response.data.opening_crawl.split('\n');
           main.class = 'scroll';
         });
  };

  $http.get(API + '/films')
       .then(function(response){
         console.log('response', response);
         main.films = response.data.results;
       });
}
