'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  allStores.push(this);
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
      this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
        // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
    }
  }

  this.render = function(){
    this.calcTotalCookiesSoldEachHour();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++){
      var tdElTwo = document.createElement('td');
      tdElTwo.textContent = this.totalCookiesSoldEachHour[i];
      trEl.appendChild(tdElTwo);
    }

    var tdElTotDayCookies = document.createElement('td');
    tdElTotDayCookies.textContent = this.totalDailyCookiesSales;
    trEl.appendChild(tdElTotDayCookies);
    storeTable.appendChild(trEl);
  }
  this.render();
}


function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var blank = document.createElement ('th');
  trEl.appendChild(blank);
  for (var i = 0 ; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var dayTotal = document.createElement('th');
  dayTotal.textContent = 'Total Daily Sales';
  trEl.appendChild(dayTotal);
  storeTable.appendChild(trEl);
}



makeHeaderRow();

new Store('First and Pike', 23,65,6.3);
new Store('SeaTac Airpot', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
