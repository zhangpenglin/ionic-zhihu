angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
})

.controller('guideCtrl', function($scope, $ionicScrollDelegate, $ionicSlideBoxDelegate, $ionicModal) {
	$ionicModal.fromTemplateUrl('templates/user_modal.html', {
		scope: $scope,
		animation: 'zoom-in',
		backdropClickToClose: "true"
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	//当我们用到模型时，清除它！
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	// 当隐藏的模型时执行动作
	$scope.$on('modal.hide', function() {
		// 执行动作
	});
	// 当移动模型时执行动作
	$scope.$on('modal.removed', function() {
		// 执行动作
	});
	$scope.init = function() {
		$ionicSlideBoxDelegate.slide(1, 1);
	}
	$scope.index = 0;
	$scope.slideHasChanged = function(index) {

		$scope.index = index;
		switch (index) {
			case 0:
				setAnimate("#082a5a", index);
				break;
			case 1:
				setAnimate("#023c7b", index);
				break;
			case 2:
				setAnimate("#005193", index)
				break;
			case 3:
				setAnimate("#0060a7", index)
				break;
			case 4:
				setAnimate("#0072b1", index);
				break;
			case 5:
				setAnimate("#0095fc", index);
				break;
			default:
				break;
		}
	}

	function setAnimate(color, index) {
		document.querySelector(".slidebox").style.background = color;
		$ionicScrollDelegate.scrollTo(0, index * 30, true);
		document.querySelector(".act").style.webkitTransform = "translate3d(" + index * 10 + "px,0,0)"
	}
})


.controller('menuCtrl', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('templates/modal.html', {
		scope: $scope,
		animation: 'slide-in-left'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	//当我们用到模型时，清除它！
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	// 当隐藏的模型时执行动作
	$scope.$on('modal.hide', function() {
		// 执行动作
	});
	// 当移动模型时执行动作
	$scope.$on('modal.removed', function() {
		// 执行动作
	});
})

.controller('menusideCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate) {
	$ionicModal.fromTemplateUrl('templates/user_modal.html', {
		scope: $scope,
		animation: 'slide-in-left'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() {
		$ionicSideMenuDelegate.toggleLeft();
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	//当我们用到模型时，清除它！
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	// 当隐藏的模型时执行动作
	$scope.$on('modal.hide', function() {
		// 执行动作
	});
	// 当移动模型时执行动作
	$scope.$on('modal.removed', function() {
		// 执行动作
	});
})

.controller('homeCtrl', function($scope, $ionicSlideBoxDelegate, $ionicModal, $timeout,dataService) {
	var border = document.querySelector(".border")
	$scope.index = 0;
	$scope.doRefresh = function() {

		if ($ionicSlideBoxDelegate.$getByHandle("pager").currentIndex() === 1) {
			$scope.marks.unshift(dataService.newmarks);
			$scope.$broadcast('scroll.refreshComplete');
		} else {
			$scope.datas.unshift(dataService.newdatas);
			$scope.$broadcast('scroll.refreshComplete');
		}
	};
	$scope.marks = dataService.marks
	$scope.datas = dataService.datas
	$scope.changeslide = function(index) {
		$scope.index = index;
		$ionicSlideBoxDelegate.$getByHandle("pager").slide(index);
		border.style.webkitTransform = "translate3d(" + index * 100 + "%,0,0)"
	}
	$scope.slideHasChanged = function(index) {
		$scope.index = index;
		border.style.webkitTransform = "translate3d(" + index * 100 + "%,0,0)"
	}
	$ionicModal.fromTemplateUrl('templates/detail_modal.html', {
		scope: $scope,
		animation: 'slide-in-left'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.detail = {};
	$scope.openModal = function(data) {
		$scope.detail = data;
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	$scope.isgood = false;
	$scope.good = function(data) {
		if (!$scope.isgood) {
			data.good = parseInt(data.good) + 1;
			$scope.isgood = true
		}

	};
	//当我们用到模型时，清除它！
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	// 当隐藏的模型时执行动作
	$scope.$on('modal.hide', function() {
		// 执行动作
	});
	// 当移动模型时执行动作
	$scope.$on('modal.removed', function() {
		// 执行动作
	});
	$timeout(function() {
		$ionicSlideBoxDelegate.$getByHandle("banner").update();
	}, 1000);
})

.filter(
	'to_trusted', ['$sce',
		function($sce) {
			return function(text) {
				return $sce.trustAsHtml(text);
			}
		}
	]
)

.filter(
	'to_text', function() {
		return function(text) {
			return text.replace(/<[^>].*?>/g, '');
		}
	}
)