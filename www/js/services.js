angular
    .module('comicsApp')
    .factory('Comics', function($http) {
        var dataSource = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=b8d2fb8a8ff841284c45cd7250fb6f57&hash=ac363a25ffcfd5aadd4bb929ae99aaba&callback=JSON_CALLBACK';

        return {

            getComic: function(comicId) {
                return $http.jsonp(dataSource, {
                    params: {
                        id: comicId
                    }
                });
            },
            getComics: function(comicParams) {
                return $http.jsonp(dataSource, {
                    params: comicParams
                });
            },

        }
    })
