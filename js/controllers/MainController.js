app.controller('MainController', ['$scope', function($scope){
  $scope.questions=[
    {
      text: "What to do?",
      votes: 6,
      answered: false
    },
    {
      text: "Oh my?",
      votes: 3,
      answered: false
    },
    {
      text: "Tralala",
      votes: 1,
      answered: false
    },
    {
      text: "Answered question?",
      votes: 8,
      answered: true
    },
    {
      text: "What to do?",
      votes: 10,
      answered: false
    }
  ];
  $scope.vote= function(index){
    $scope.questions[index].votes+=1;
  };
  $scope.answered= function(index){
    $scope.questions[index].answered=true;
  };
  $scope.newQuestionText='';
  $scope.addQuestion=function(){
    $scope.questions.push({
      text: $scope.newQuestionText,
      votes: 0,
      answered: false
    });
  };
}])
