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

function getRandomInt(minvalue, maxvalue) {
  var randomNum = Math.random();
  return Math.floor(randomNum * (maxvalue - minvalue + 1)) + minvalue;
}
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
    },
  };