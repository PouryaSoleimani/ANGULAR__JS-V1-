// function MyController($scope) {
//   $scope.name = "Pourya";
//   $scope.family = "Soleimani";
// }

function MyController($scope) {
  $scope.people = [
    { id: 1, firstname: "pourya", lastname: "soleimani", age: 32 },
    { id: 2, firstname: "mamad", lastname: "boland", age: 33 },
    { id: 3, firstname: "majid", lastname: "kalhor", age: 31 },
    { id: 4, firstname: "ehsan", lastname: "gholipoor", age: 31 },
  ];
}
