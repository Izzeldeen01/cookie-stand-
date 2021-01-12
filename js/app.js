"use strict";
let hours = [
  "6:00am",
  "7:00am",
  "8:00am",
  "9:00am",
  "10:00am",
  "11:00am",
  "12:00pm",
  "1:00pm",
  "2:00pm",
  "3:00pm",
  "4:00pm",
  "5:00pm",
  "6:00pm",
  "7:00pm",
  "8:00pm",
];

var table = document.createElement("table");
var div = document.getElementById("our-store");


function getRandomInt(minvalue, maxvalue) {
  var randomNum = Math.random();
  return Math.floor(randomNum * (maxvalue - minvalue + 1)) + minvalue;

var Shops = [];
function Shop(name, min, max, avg) {
  //constructer
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.CustomerPerHour = [];
  this.CookiesPerHour = [];
  Shops.push(this);
}

Shop.prototype.getCustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    var customer = getRandomInt(this.min, this.max);
    this.CustomerPerHour.push(customer);
  }
};

Shop.prototype.getCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.CookiesPerHour.push(Math.floor(this.CustomerPerHour[i] * this.avg));
  }
};

Shop.prototype.render = function () {
  for (let i = 0; i < Shops.length; i++) {
    var tr = document.createElement("tr");
    var total = 0;
    for (let j = 0; j <= hours.length; j++) {
      var td = document.createElement("td");
      if (j === 0) {
        td.textContent = Shops[i].name;
      } else {
        td.textContent = Shops[i].CookiesPerHour[j - 1];
        total = total + Shops[i].CookiesPerHour[j - 1];
      }

      tr.appendChild(td);
    }
    var td = document.createElement("td");
    td.textContent = total;
    tr.appendChild(td);
    table.appendChild(tr);
  }
};

function Header() {
  var tr = document.createElement("tr");
  for (let i = 0; i <= hours.length; i++) {
    var td = document.createElement("th");
    if (i === 0) {
      td.textContent = "Cities";
    } else {
      td.textContent = hours[i - 1];
    }

    tr.appendChild(td);
  }
  var td = document.createElement("th");
  td.textContent = "Daily Location Total";
  tr.appendChild(td);
  table.appendChild(tr);
  div.appendChild(table);
}

function Footer() {
  var tr = document.createElement("tr");
  var totalGrand = 0;
  for (let i = 0; i <= hours.length; i++) {
    var td = document.createElement("th");
    var total = 0;
    if (i === 0) {
      td.textContent = "Totals";
    } else {
     
        for (let j = 0; j < Shops.length; j++) {
          total += Shops[j].CookiesPerHour[i-1];
         
        }
       
        td.textContent = total;
        totalGrand+=total;
    }

    tr.appendChild(td);
    table.appendChild(tr);
  }
  var td = document.createElement("td");
  td.textContent = totalGrand;
  tr.appendChild(td);
  table.appendChild(tr);
  div.appendChild(table);
}
Header();
var Seattle = new Shop("Seattle", 23, 65, 6.3);
Seattle.getCustomer();
Seattle.getCookies();
Seattle.render();
var Tokyo = new Shop("Tokyo", 3, 24, 1.2);
Tokyo.getCustomer();
Tokyo.getCookies();
Tokyo.render();
var Dubai = new Shop("Dubai", 11, 38, 3.7);
Dubai.getCustomer();
Dubai.getCookies();
Dubai.render();
var Paris = new Shop("Paris", 20, 38, 2.3);
Paris.getCustomer();
Paris.getCookies();
Paris.render();
var Lima = new Shop("Lima", 2, 16, 4.6);
Lima.getCustomer();
Lima.getCookies();
Lima.render();
console.log("Shops : ", Shops);
Footer();
=======
function getCookies(customers,avg) {
    var Cookies = [];
   // console.log(avg)
    // var ArrayCustomers = this.customerPerHour();
    // console.log("ArrayCustomers : ", ArrayCustomers);
    for (let i = 0; i < hours.length; i++) {
      Cookies.push(Math.floor(customers[i] * avg));
    }
    return Cookies;
  }

var Seattle = {
  name: "Seattle",
  min: 23,
  max: 65,
  avg: 6.3,
  customerPerHour: function () {
    var customers = [];
    for (let i = 0; i < hours.length; i++) {
      customers.push(getRandomInt(this.min, this.max));
    }
    return customers;
  },
  cookiesPerHour:function(){
    return getCookies(this.customerPerHour(),this.avg) ;
  },
  render: function () {
    var div = document.getElementById("our-store");
    var h1 = document.createElement("h1");
    h1.textContent = this.name;
    var total = 0;
    var cooikes = this.cookiesPerHour();
    div.appendChild(h1);
    var ul = document.createElement("ul");
    for (let i = 0; i < hours.length; i++) {
      var li = document.createElement("li");
      li.textContent = `${hours[i]} : ${cooikes[i]}`;
      total += cooikes[i];
      ul.appendChild(li);
    }
    var li = document.createElement("li");
    li.textContent = `Total : ${total}`;
    ul.appendChild(li);
    div.appendChild(ul);
  },
};

var Tokyo = {
    name: "Tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    customerPerHour: function () {
      var customers = [];
      for (let i = 0; i < hours.length; i++) {
        customers.push(getRandomInt(this.min, this.max));
      }
      return customers;
    },
    cookiesPerHour:function(){
        return getCookies(this.customerPerHour(),this.avg) ;
      },
    render: function () {
      var div = document.getElementById("our-store");
      var h1 = document.createElement("h1");
      h1.textContent = this.name;
      var total = 0;
      var cooikes = this.cookiesPerHour();
      div.appendChild(h1);
      var ul = document.createElement("ul");
      for (let i = 0; i < hours.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${hours[i]} : ${cooikes[i]}`;
        total += cooikes[i];
        ul.appendChild(li);
      }
      var li = document.createElement("li");
      li.textContent = `Total : ${total}`;
      ul.appendChild(li);
      div.appendChild(ul);
    },
  };
//console.log(Seattle.cookiesPerHour());
Seattle.render();
Tokyo.render();

var Dubai = {
    name: "Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    customerPerHour: function () {
      var customers = [];
      for (let i = 0; i < hours.length; i++) {
        customers.push(getRandomInt(this.min, this.max));
      }
      return customers;
    },
    cookiesPerHour:function(){
      return getCookies(this.customerPerHour(),this.avg) ;
    },
    render: function () {
      var div = document.getElementById("our-store");
      var h1 = document.createElement("h1");
      h1.textContent = this.name;
      var total = 0;
      var cooikes = this.cookiesPerHour();
      div.appendChild(h1);
      var ul = document.createElement("ul");
      for (let i = 0; i < hours.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${hours[i]} : ${cooikes[i]}`;
        total += cooikes[i];
        ul.appendChild(li);
      }
      var li = document.createElement("li");
      li.textContent = `Total : ${total}`;
      ul.appendChild(li);
      div.appendChild(ul);
    },
  };
  
var paris = {
    name: "paris",
    min: 20,
    max: 38,
    avg: 2.3,
    customerPerHour: function () {
      var customers = [];
      for (let i = 0; i < hours.length; i++) {
        customers.push(getRandomInt(this.min, this.max));
      }
      return customers;
    },
    cookiesPerHour:function(){
      return getCookies(this.customerPerHour(),this.avg) ;
    },
    render: function () {
      var div = document.getElementById("our-store");
      var h1 = document.createElement("h1");
      h1.textContent = this.name;
      var total = 0;
      var cooikes = this.cookiesPerHour();
      div.appendChild(h1);
      var ul = document.createElement("ul");
      for (let i = 0; i < hours.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${hours[i]} : ${cooikes[i]}`;
        total += cooikes[i];
        ul.appendChild(li);
      }
      var li = document.createElement("li");
      li.textContent = `Total : ${total}`;
      ul.appendChild(li);
      div.appendChild(ul);
    },
  };
  
var lima = {
    name: "lima",
    min: 2,
    max: 16,
    avg: 4.6,
    customerPerHour: function () {
      var customers = [];
      for (let i = 0; i < hours.length; i++) {
        customers.push(getRandomInt(this.min, this.max));
      }
      return customers;
    },
    cookiesPerHour:function(){
      return getCookies(this.customerPerHour(),this.avg) ;
    },
    render: function () {
      var div = document.getElementById("our-store");
      var h1 = document.createElement("h1");
      h1.textContent = this.name;
      var total = 0;
      var cooikes = this.cookiesPerHour();
      div.appendChild(h1);
      var ul = document.createElement("ul");
      for (let i = 0; i < hours.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${hours[i]} : ${cooikes[i]}`;
        total += cooikes[i];
        ul.appendChild(li);
      }
      var li = document.createElement("li");
      li.textContent = `Total : ${total}`;
      ul.appendChild(li);
      div.appendChild(ul);
  
