
let newConsole = document.getElementById('prompt');
const log = (log) => {
  let allLogs = ``;
  allLogs += `<h4> > ${log}</h4>`;
  newConsole.innerHTML += allLogs
}




function Car(numberOfWheels) {
  this.numberOfWheels = numberOfWheels;
}

const car1 = new Car(4);
log(`Car 1 has ${car1.numberOfWheels} wheels`); // Output: "Car 1 has 4 wheels"

const car2 = new Car(4);
log(`Car 2 has ${car2.numberOfWheels} wheels`); // Output: "Car 2 has 4 wheels"

car1.numberOfWheels = 10;
log(`Car 1 now has ${car1.numberOfWheels} wheels`); // Output: "Car 1 now has 10 wheels"
log(`Car 2 now has ${car2.numberOfWheels} wheels`); // Output: "Car 2 now has 4 wheels"

// Car.prototype.numberOfWheels = numberOfWheels * 10; // This can't be Done






function Truck() { }
Truck.prototype.numberOfWheels = 4;

const truck1 = new Truck();
log(`Truck 1 has ${truck1.numberOfWheels} wheels`);

Truck.prototype.numberOfWheels = 10;

const truck2 = new Truck();

log(`Truck 2 has ${truck2.numberOfWheels} wheels`);

truck1.numberOfWheels = 15;
truck2.numberOfWheels = 30;

Truck.prototype.numberOfWheels = [20, 30];

log(`Truck 1 now has ${truck1.numberOfWheels} wheels`);
log(`Truck 2 now has ${truck2.numberOfWheels} wheels`);

const truck3 = new Truck();
log(`Truck 3 now has ${truck3.numberOfWheels} wheels`);