function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  if (this.isRunning) {
    return "BEEP!";
  }
}

var myCar = new Vehicle("Ford", "Mondeo", 2012);

// To turn on myCar
Vehicle.prototype.turnOn.call(myCar);

//Honk the horn
myCar.honk();

// Turn off the car
Vehicle.prototype.turnOff.call(myCar);

// Try honking (should not do anything)
myCar.honk();
