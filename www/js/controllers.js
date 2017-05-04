angular
    .module('comicsApp')
    .controller('ComicsController', function(Comics, $stateParams, $scope, $ionicLoading,$ionicScrollDelegate) {
        var _this = this;

        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();
	    Comics.getComics($stateParams).then(function(response){
		_this.comics = response.data;
	    }).catch(function(response){
		//request was not successful
		//handle the error
	    }).finally(function(){
		$ionicLoading.hide();
	    });

	  $scope.checkScroll = function () {

		var currentTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollPosition().top;
		var maxTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollView().__maxScrollTop;

		if (currentTop >= maxTop)
		{
		    // hit the bottom
		  alert('bottom of scroll!');
		}
	    };

        });

	$scope.comicSearch=function(title,startYear){	
            $ionicLoading.show();
	    Comics.getComics({ title: title, startYear: startYear }).then(function(response){
		_this.comics = response.data;
	    }).catch(function(response){
		//request was not successful
		//handle the error
	    }).finally(function(){
		$ionicLoading.hide();
	    });		
	};
    })


    .controller('ComicDetailController', function(Comics, $stateParams, $scope, $ionicLoading) {
        var _this = this;
        
        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Comics.getComic($stateParams.comicId).then(function(response){
                _this.comic = response.data;
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });
    })
    .controller('ComicSearchController', function($scope){
        $scope.comicSearch = function() {
            alert('hello');
        }
    })
    .controller('ComicByNameController', function(Comics, $stateParams, $scope, $ionicLoading) {
        var _this = this;
        
        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Comics.getComicsByName($stateParams.comicId).then(function(response){
                _this.comics = response.data;
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });
    })
    .controller('ComicByYearController', function(Comics, $stateParams, $scope, $ionicLoading) {
        var _this = this;
        
        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Comics.getComicsByYear($stateParams.comicId).then(function(response){
                _this.comics = response.data;
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });
    })
