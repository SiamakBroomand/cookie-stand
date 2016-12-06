'use strict';

// var myFranch = ['First and Pike', 'SeaTac Airport', 'Seatle Center', 'Capitol Hill', 'Alki'];

// var franchList = document.getElementById(myFranch);


// var clockHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'];
//
// var firstAndPike = {
//   // locationName: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesperCust: 6.3,
//   randomCustPerHour: [],
//   totalCookiesSoldEachHour: [],
//   totalDailyCookiesSales: 0,
//   calcRandomCustPerHour: function() {
//     for (var i = 0; i < clockHours.length ; i++){
//       this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       console.log(this.randomCustPerHour[i]);
//     }
//   },
var clockHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//1st and Pike Store Sales
var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('firstAndPike');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('firstAndPike');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.sumCookiesPerDay();
    this.listCookiesPerHour();
  }
}
firstAndPike.initialize();

//   calcTotalCookiesSoldEachHour: function() {
//     for (var i = 0; i < clockHour.length ; i++){
//       this.totalCookiesSoldEachHour.push(Math.round(this.avgCookiesSoldEachHour * this.randomCustPerHour[i]));
//       console.log(this.cookiesSoldEachHour[i]);
//       this.totalCookies += this.cookiesSoldEachHour[i];
//     }
//   },
//
//   // totalCookiesSoldEachHourf: function(){
//   //   for (var l = 0; l < clockHour.length; l++);{
//   //     this.totalfirstAndPikeCookies += this.cookiesSoldEachHour[l];
//   //   }
//   // },
//   sumCookiesEachDay: function(){
//     var totalCookiesEachDay = this.cookiesSoldEachHour.reduce(function (a,b){
//       return a + b;
//     }
//   },
//
//   render: function(){
//     var list = document.getElementById('firstAndPike');
//     for (var i = 0; i < clockHour.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = this.totalCookiesSoldEachHour[i] + ':' + this.totalCookiesEachDay;
//       list.appendChild(liEl);
//       console.log('franch name');
//     }
//     // liEl.textContent = document.createElement ('li');
//     // var sum = function() {
//     }
//   }
// }
//
// firstAndPike.render();
var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('alki');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('alki');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.sumCookiesPerDay();
    this.listCookiesPerHour();
  }
}
alki.initialize();
//Capitol Hill Store Sales
var capitolHill = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('capitolHill');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('capitolHill');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.sumCookiesPerDay();
    this.listCookiesPerHour();
  }
}
capitolHill.initialize();
//SeaTac Airport Store Sales
var seaTac = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('seaTac');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('seaTac');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.sumCookiesPerDay();
    this.listCookiesPerHour();
  }
}
seaTac.initialize();
//Seattle Center Store Sales
var seaCenter = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('seaCenter');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('seaCenter');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.sumCookiesPerDay();
    this.listCookiesPerHour();
  }
}
seaCenter.initialize();
