Sets the initial variables
var applePrice = 200;
var ojPrice = 200;
var banPrice = 300;
var pearPrice = 600;
var bankMoney = 100;
var averagePrice = 0;


//changes the prices of the fruits every 15 seconds
//var timer = setInterval(fruitPriceChange(), 15000);

// // Sets our empty arrays

var appleArray = [];
var ojArray = [];
var banArray = [];
var pearArray = [];

$(document).ready(function(){
  //Activates when the user clicks a button
  $('.apple-button').on('click', apple);
  $('.banana-button').on('click', banana);
  $('.orange-button').on('click', orange);
  $('.pear-button').on('click', pear);
  priceToDom();
  setInterval(fruitPriceChange, 500)

  $('.apple-button-sell').on('click', appleSell);
  $('.banana-button-sell').on('click', bananaSell);
  $('.orange-button-sell').on('click', orangeSell);
  $('.pear-button-sell').on('click', pearSell);

});
