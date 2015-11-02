function Person (first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.name = function(){return this.firstName + " " + this.lastName;}
  this.height = function(){return Math.floor(Math.random()*80) + ' inches tall.';}
}

function Car (make, model, year, mileage, person) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  this.owner = person.name();
}

function House (type, sqft, floors, cost, owner, garageVehicle) {
  this.type = type;
  this.sqft = sqft;
  this.floors = floors;
  this.cost = cost;
  this.owner = owner;
  this.garageContents = garageVehicle;
}



var me = new Person('Chris', 'Hutchinson', 44);
console.log(me.name(), me.height());

var myCar = new Car('Jeep', "Wrangler", 2007, 30100, me);
console.log (myCar.owner);

var myHouse = new House('ranch', 2200, 2, 150000, me, myCar);
console.log (myHouse.garageContents.owner);
