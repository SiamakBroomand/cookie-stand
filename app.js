'use strict';

var myFranch = ['First and Pike', 'SeaTac Airport', 'Seatle Center', 'Capitol Hill', 'Alki'];

var franchList = document.getElementById('franchises');


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
      console.log(this.randomCustPerHour[i]);
    }
  },

  calcTotalCookiesSoldEachHour: function() {
    for (var j = 0; j < hours.length ; j++){
      this.totalCookiesSoldEachHour.push(Math.round(this.avgCookiesSoldEachHour * this.randomCustPerHour[j]));
      console.log(this.cookiesSoldEachHour[j]);
      this.totalCookies += this.cookiesSoldEachHour[j];
    }
  },
  render: function(){
    for (var k = 0; k < myFranch.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = myFranch[k];
      franchList.appendChild(liEl);
      console.log('franch name');
    }

  }
}
firstAndPike.render();
