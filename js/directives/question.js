app.directive('question', function(){
	return{
  	restrict: 'E',
    $scope: {
    	info: '='
    },
    templateUrl: 'js/directives/question.html'
  };
});
