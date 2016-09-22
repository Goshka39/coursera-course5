(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
})()

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService']
function ToBuyShoppingController(ShoppingListCheckOffService){
	var shoppingList = this;

	shoppingList.items = ShoppingListCheckOffService.getItemsToBuy();

	shoppingList.buyItem = function (itemIndex) {
		ShoppingListCheckOffService.buyItem(itemIndex);
	}
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
	var boughtList = this;

	boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
	var service = this;

	var itemsToBuy = [
		'Read the rules of weiqi',
		'Download a bot - for example GnuGo', 
		'Register on a server - http://gokgs.com', 
		'(optional)Watch "Hikaru no Go"',
		'Enjoy playing!'];
	var boughtItems = [];

	service.getItemsToBuy = function(){
		return itemsToBuy;
	}

	service.getBoughtItems = function(){
		return boughtItems;
	}
	service.buyItem = function(itemIndex){
		boughtItems.push(itemsToBuy[itemIndex]);
		itemsToBuy.splice(itemIndex, 1);
	}
}