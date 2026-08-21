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
    { id: 5, firstname: "hamed", lastname: "mousavi", age: 26 },
    { id: 6, firstname: "ali", lastname: "ghazanfari", age: 25 },
    { id: 7, firstname: "ali", lastname: "mohammad", age: 25 },
    { id: 8, firstname: "mohammad", lastname: "yousefi", age: 24 },
    { id: 9, firstname: "ashkan", lastname: "hoseinpour", age: 26 },
    { id: 10, firstname: "shahriyar", lastname: "reyhani", age: 33 },
    { id: 11, firstname: "iman", lastname: "allahyari", age: 30 },
  ];
}

function MyCrtl($scope) {
  $scope.name = "Pourya";
  $scope.family = "Soleimani";
  $scope.fullName = function () {
    return $scope.name.toUpperCase() + " " + $scope.family.toUpperCase();
  };
}
