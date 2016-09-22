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

	var verbs = [
		{todo: "Learn", done: "Learned"},
		{todo: "Play", done: "Played"},
		{todo: "Register", done: "Registered"},
		{todo: "Watch", done: "Watched"}
	]
	var itemsToBuy = [
		{verb: verbs[0], name: "rules", quantity: 7},		
		{verb: verbs[1], name: "games with bot", quantity: 3}, 
		{verb: verbs[2], name: "time", quantity: 1},
		{verb: verbs[3], name: "series of 'Hikaru no Go'", quantity:72}
	];
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