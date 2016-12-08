'use strict';

var storeList = document.getElementById('store-list');
var storeForm = document.getElementById('store-form');
var clearStoreList = document.getElementById('clear-store-list');
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
  Store.prototype.render = function(){
    var trElStore = document.createElement('tr');
    trElStore.innerHTML = this.locationName + this.minCustPerHour + this.maxCustPerHour + this.avgCookiesperCust;
    return trElStore;
  }
  function renderAllStores(){
    storeList.innerHTML = ' ';
    for (var i = 0; i < allStores.length; i++){
      storeList.appendChild(allStores[i].render());
    }
  }
  function handleCommentSubmit(event){

    event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event
    if (!event.target.store.value || !event.target.minCustomer.value || !event.target.maxCustomer.value || !event.target.averageCookies.value){
      return alert('All fields must be filled!');
    }

    var storeName = event.target.store.value;
    var minCust = event.target.minCustomer.value;
    var maxCust = event.target.maxCustomer.value;
    var avgCookie = event.target.averageCookies.value;

    var newStore = new Store (storeName, minCust, maxCust, avgCookie);

    event.target.store.value = null;
    event.target.minCustomer.value = null;
    event.target.maxCustomer.value = null;
    event.target.averageCookies.value = null;
    allStores.push(newStore);
    renderAllStores();
  }
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Event listener for comment submission form
  storeForm.addEventListener('submit', handleCommentSubmit);
//
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Event listener for the 'Clear all stores' button
  clearStoreList.addEventListener('click', function() {
    storeList.innerHTML = '';
    // console.log('You just cleared the store list!');
    allStores = [];
  });

  storeForm.addEventListener('submit', handleCommentSubmit);

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
