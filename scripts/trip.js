//console.log("script connected");
//-----------------------------------------
// variables
//-----------------------------------------

// user info
const driver_name = "Noah"

// vehicle info
const mpg = 18;
const fuel_capacity = 26;

// trip info
const distance_miles = 2400;
const gas_price = 3.99;
let is_round_trip = true;
let total_distance;
let total_traveled = 0;
let total_spent = 0;
let total_stops = 0;

//-----------------------------------------
// derived / calculated values
//-----------------------------------------

if(is_round_trip) {
    total_distance = distance_miles * 2;
} else {
    total_distance = distance_miles;
}
console.log("Round trip Missoula, MT ---> Great Falls, MT")
console.log(`Total distance (in miles): ${total_distance}`);

const gallons_needed = calculateGallonsNeeded (total_distance, mpg);
//console.log(`gallons needed: ${gallons_needed}`);

const total_fuel_cost = calculateFuelCost(gallons_needed, gas_price);
//console.log(`estimated total fuel cost: ${total_fuel_cost}`);

const miles_per_tank = calculateMilesPerTank(fuel_capacity, mpg);
//console.log(`total alloted miles per tank of gas: ${miles_per_tank}`);

const tank_cost = calculateFuelCost(fuel_capacity, gas_price);
//console.log(`cost per tank: ${tank_cost}`)

//-----------------------------------------
// functions
//-----------------------------------------

function calculateGallonsNeeded(trip_distance, gas_mileage) {
    return trip_distance / gas_mileage;
}

function calculateFuelCost(gallons, price) {
    return gallons * price;
}

function calculateMilesPerTank(capacity, gas_mileage) {
    return capacity * gas_mileage
}

//-----------------------------------------
// main program
//-----------------------------------------

while(total_traveled < total_distance) {
    total_traveled += miles_per_tank;
    total_stops ++;
    total_spent += tank_cost;
    console.log(`Stop #: ${total_stops}`)
    console.log(`Miles traveled: ${total_traveled}`)
    console.log(`Total $ spent so far: ${total_spent.toFixed(2)}`)
}

console.log("---------Final road trip summary---------")
console.log(`Driver: ${driver_name}`)
console.log(`Total distance: ${total_distance}`)
console.log(`Estimated gallons needed: ${gallons_needed.toFixed(2)}`)
console.log(`Estimated total cost: ${total_spent.toFixed(2)}`)