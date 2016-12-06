'use strict';

// var myFranch = ['First and Pike', 'SeaTac Airport', 'Seatle Center', 'Capitol Hill', 'Alki'];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
      // this.randomCustPerHour[i] = Math.floor(Math.random() * ( this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.randomCustPerHour.push(Math.floor(Math.random() *( this.maxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour );
      console.log(this.randomCustPerHour);
    }
  },


  calcTotalCookiesSoldEachHour: function() {
    //callcalcrandomcustperhour()
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length ; i++){
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesperCust));
      // this.totalCookies += this.cookiesSoldEachHour[i];
      this.totalDailyCookiesSales += this.totalCookiesSoldEachHour[i];
      // console.log(this.totalDailycookiesales, 'running total of daily cookie sales');
    }
    // console.log(this.cookiesSoldEachHour[i]), ' random numbers of cookies sold each hour';
  },

  // totalCookiesSoldEachHourf: function(){
  //   for (var i = 0; i < hours.length; i++);{
  //     this.totalfirstAndPikeCookies += this.cookiesSoldEachHour[i];
  //   }
  // },

// firstAndPike.calcRandomCustPerHour();
// firstAndPike.calcTotalCookiesSoldEachHour();
// // this.list();
// sum totalDailycookiesales: function (){
//   var totalDailyCookiesSales = this.totalCookiesSoldEachHour[i];
//   totalDailyCookiesSales += [i];
// }
  render: function(){
    this.calcTotalCookiesSoldEachHour();
    var emptyUl = document.getElementById('firstAndPike');
    for (var i = 0; i < hours.length ; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
      emptyUl.appendChild (liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'total: ' + this.totalDailyCookiesSales + ' cookies ';
    emptyUl.appendChild (liEl);
    // var list = document.getElementById('firstAndPike');
    // for (var i = 0; i < hours.length; i++){
    //   var liEl = document.createElement('li');
    //   liEl.textContent = hours[i] + ':' + this.totalDailyCookiesSales;
    //   list.appendChild(liEl);
    //   // console.log('franch name');
    // }
    // liEl.textContent = document.createElement ('li');
  }
}

firstAndPike.render();
