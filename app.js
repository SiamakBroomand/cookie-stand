'use strict';

// var myFranch = ['First and Pike', 'SeaTac Airport', 'Seatle Center', 'Capitol Hill', 'Alki'];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesperCust: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookiesSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length ; i++){
      this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
    }
  },


  calcTotalCookiesSoldEachHour: function() {
    for (var i = 0; i < hours.length ; i++){
      this.totalCookiesSoldEachHour.push(Math.round(this.avgCookiesSoldEachHour * this.randomCustPerHour[i]));
      console.log(this.cookiesSoldEachHour[i]);
      this.totalCookies += this.cookiesSoldEachHour[i];
    }
  },

  totalCookiesSoldEachHourf: function(){
    for (var i = 0; i < hours.length; i++);{
      this.totalfirstAndPikeCookies += this.cookiesSoldEachHour[i];
    }
  },


  render: function(){
    var list = document.getElementById('firstAndPike');
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.totalCookiesSoldEachHour[i] + ':' + this.totalCookiesEachDay;
      list.appendChild(liEl);
      // console.log('franch name');
    }
    liEl.textContent = document.createElement ('li');
  }
}

firstAndPike.render();
