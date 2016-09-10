(function () {
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController)

	LunchCheckController.$inject = ['$scope']
	function LunchCheckController ($scope) {
		$scope.lunch = ""
		$scope.check_result = ""
		$scope.input_style = ""
		$scope.output_style = ""
		$scope.checkLunch = function () {
			var menu = $scope.lunch.trim();
			if (menu.length == 0){
				$scope.check_result = "Please enter data first";
				$scope.output_style = "wrong-output"
				$scope.input_style = "wrong-input"
			}
			else {
				if (menu.split(',').length > 3) {
					$scope.check_result = "Too much!";
				}
				else {
					$scope.check_result = "Enjoy!";
				}
				$scope.output_style = "right-output"
				$scope.input_style = "right-input"
			}
		}
	}

})()