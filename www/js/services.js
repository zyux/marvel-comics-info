angular
    .module('comicsApp')
    .factory('Comics', function($http) {
        var dataSource = 'https://gateway.marvel.com:443/v1/public/comics?apikey=b8d2fb8a8ff841284c45cd7250fb6f57&callback=JSON_CALLBACK';

        return {
            getComics: function() {
                return $http.jsonp(dataSource);
            },
            getComic: function(comicId) {
                return $http.jsonp(dataSource, {
                    params: {
                        id: comicId
                    }
                });
            }
        }
    });
