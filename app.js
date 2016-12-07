'use strict';
//
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
// var allStore = [];
var allStores = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storeTable = document.getElementById('storejs');

//constructor
var Store = function(locationName, minCustPerHour, maxCustPerHour, avgCookiesperCust){
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesperCust = avgCookiesperCust;
  this.randomCustPerHour = [];
  this.totalCookiesSoldEachHour = [];
  this.totalDailyCookiesSales = 0;
  this.calcRandomCustPerHour = function(){
    for (var i = 0; i < hours.length ; i++){
      this.randomCustPerHour.push(Math.floor(Math.random() *( this.maxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour );
      console.log(this.randomCustPerHour);
    }
  }
  this.calcTotalCookiesSoldEachHour = function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length ; i++){
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesperCust));
        // this.totalCookies += this.cookiesSoldEachHour[i];
      this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
        // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
    }
  }
  this.calcTotalCookiesSoldEachHour();
  allStores.push(this);
  // console.log(this);
//   render = function(){
//
//   }
}

//instances
new Store('First and Pike', 23,65,6.3);
new Store('SeaTac Airpot', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//create  function to create html
//
// function storeTablesJS(){


  // console.log('storeTable is', storejs);
// }
function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var blank = document.createElement ('th');
  storeTable.appendChild(blank);
  for (var i = 0 ; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}
//storerows
function storeRows(){
  var trEl = document.createElement('tr');
  for (var i = 0; i < allStores.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = allStores[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}
  // this might be good for render
  // for (var i = 0; i < hours.length; i++){
  //   var boxRowTwo = document.createElement ('th');
  //   thEl.textContent = this.totalCookiesSoldEachHour[i];
  //   trEl.appendChild(boxRowTwo);
  // }






makeHeaderRow();
storeRows();
// makeFooterRow();




// var firstAndPike = {
//   locationName: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesperCust: 6.3,
//   randomCustPerHour: [],
//   totalCookiesSoldEachHour: [],
//   totalDailyCookiesSales: 0,
  // calcRandomCustPerHour: function() {
  //   for (var i = 0; i < hours.length ; i++){
  //     // this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  //     this.randomCustPerHour.push(Math.floor(Math.random() *( this.maxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour );
//       // console.log(this.randomCustPerHour);
//     }
//   },
//
//
//   calcTotalCookiesSoldEachHour: function() {
//
//     this.calcRandomCustPerHour();
//     for (var i = 0; i < hours.length ; i++){
//       this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesperCust));
//       // this.totalCookies += this.cookiesSoldEachHour[i];
//       this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
//       // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
//     }
//     // console.log(this.cookiesSoldEachHour[i]), ' random numbers of cookies sold each hour';
//   },
//   render: function(){
//     this.calcTotalCookiesSoldEachHour();
//     var emptyUl = document.getElementById('firstAndPike');
//     for (var i = 0; i < hours.length ; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
//       emptyUl.appendChild (liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.totalDailyCookiesSales + ' cookies ';
//     emptyUl.appendChild (liEl);
//   }
// }
//
// firstAndPike.render();
// // seaTac Airport
// var seaTacAirport = {
//   locationName: 'seaTac',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesperCust: 63.7,
//   randomCustPerHour: [],
//   totalCookiesSoldEachHour: [],
//   totalDailyCookiesSales: 0,
//   calcRandomCustPerHour: function() {
//     for (var i = 0; i < hours.length ; i++){
//       // this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.randomCustPerHour.push(Math.floor(Math.random() *( this.maxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour );
//       // console.log(this.randomCustPerHour);
//     }
//   },
//
//
//   calcTotalCookiesSoldEachHour: function() {
//     //callcalcrandomcustperhour()
//     this.calcRandomCustPerHour();
//     for (var i = 0; i < hours.length ; i++){
//       this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesperCust));
//       // this.totalCookies += this.cookiesSoldEachHour[i];
//       this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
//       // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
//     }
//     // console.log(this.cookiesSoldEachHour[i]), ' random numbers of cookies sold each hour';
//   },
//   render: function(){
//     this.calcTotalCookiesSoldEachHour();
//     var emptyUl = document.getElementById('seaTac');
//     for (var i = 0; i < hours.length ; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
//       emptyUl.appendChild (liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.totalDailyCookiesSales + ' cookies ';
//     emptyUl.appendChild (liEl);
//   }
// }
//
// seaTacAirport.render();
//
// //seattle Center
// var seattleCenter = {
//   locationName: 'seaCenter',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesperCust: 63.7,
//   randomCustPerHour: [],
//   totalCookiesSoldEachHour: [],
//   totalDailyCookiesSales: 0,
//   calcRandomCustPerHour: function() {
//     for (var i = 0; i < hours.length ; i++){
//       // this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.randomCustPerHour.push(Math.floor(Math.random() *( this.maxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour );
//       // console.log(this.randomCustPerHour);
//     }
//   },
//
//
//   calcTotalCookiesSoldEachHour: function() {
//     //callcalcrandomcustperhour()
//     this.calcRandomCustPerHour();
//     for (var i = 0; i < hours.length ; i++){
//       this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesperCust));
//       // this.totalCookies += this.cookiesSoldEachHour[i];
//       this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
//       // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
//     }
//     // console.log(this.cookiesSoldEachHour[i]), ' random numbers of cookies sold each hour';
//   },
//   render: function(){
//     this.calcTotalCookiesSoldEachHour();
//     var emptyUl = document.getElementById('seaCenter');
//     for (var i = 0; i < hours.length ; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
//       emptyUl.appendChild (liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.totalDailyCookiesSales + ' cookies ';
//     emptyUl.appendChild (liEl);
//   }
// }
//
// seattleCenter.render();
//
// //capitol Hill
// var capitolHill = {
//   locationName: 'capitolHill',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesperCust: 63.7,
//   randomCustPerHour: [],
//   totalCookiesSoldEachHour: [],
//   totalDailyCookiesSales: 0,
//   calcRandomCustPerHour: function() {
//     for (var i = 0; i < hours.length ; i++){
//       // this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.randomCustPerHour.push(Math.floor(Math.random() *( this.maxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour );
//       // console.log(this.randomCustPerHour);
//     }
//   },
//
//
//   calcTotalCookiesSoldEachHour: function() {
//     //callcalcrandomcustperhour()
//     this.calcRandomCustPerHour();
//     for (var i = 0; i < hours.length ; i++){
//       this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesperCust));
//       // this.totalCookies += this.cookiesSoldEachHour[i];
//       this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
//       // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
//     }
//     // console.log(this.cookiesSoldEachHour[i]), ' random numbers of cookies sold each hour';
//   },
//   render: function(){
//     this.calcTotalCookiesSoldEachHour();
//     var emptyUl = document.getElementById('capitolHill');
//     for (var i = 0; i < hours.length ; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
//       emptyUl.appendChild (liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.totalDailyCookiesSales + ' cookies ';
//     emptyUl.appendChild (liEl);
//   }
// }
//
// capitolHill.render();
//
// //alki
// var alki = {
//   locationName: 'alki',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesperCust: 63.7,
//   randomCustPerHour: [],
//   totalCookiesSoldEachHour: [],
//   totalDailyCookiesSales: 0,
//   calcRandomCustPerHour: function() {
//     for (var i = 0; i < hours.length ; i++){
//       // this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.randomCustPerHour.push(Math.floor(Math.random() *( this.maxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour );
//       // console.log(this.randomCustPerHour);
//     }
//   },
//
//
//   calcTotalCookiesSoldEachHour: function() {
//     //callcalcrandomcustperhour()
//     this.calcRandomCustPerHour();
//     for (var i = 0; i < hours.length ; i++){
//       this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesperCust));
//       // this.totalCookies += this.cookiesSoldEachHour[i];
//       this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
//       // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
//     }
//     // console.log(this.cookiesSoldEachHour[i]), ' random numbers of cookies sold each hour';
//   },
//   render: function(){
//     this.calcTotalCookiesSoldEachHour();
//     var emptyUl = document.getElementById('alki');
//     for (var i = 0; i < hours.length ; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
//       emptyUl.appendChild (liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.totalDailyCookiesSales + ' cookies ';
//     emptyUl.appendChild (liEl);
//   }
// }
// alki.render();//eslint-disable-line
