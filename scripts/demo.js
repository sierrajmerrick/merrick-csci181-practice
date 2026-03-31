//-----------------------------------------
// variables
//-----------------------------------------

//user info
const person_name = "Sierra";
const coffee_price = 5.75;
const coffee_per_week = 7;
const current_age = 26;
const avg_lifespan = 76;

// home info
const avg_home_price = 450000;
const down_payment_percent = 0.20;

//goal info
let years_to_goal = 0;
let total_saved = 0;


//-----------------------------------------
// derived / calculated values
//-----------------------------------------

const down_payment_goal = calculateDownPaymentGoal(avg_home_price, down_payment_percent);
const yearly_coffee_cost = calculateWeeklyCoffeeCost(coffee_price, coffee_per_week) * 52;
const years_remaining = avg_lifespan - current_age;


//-----------------------------------------
// functions
//-----------------------------------------

function calculateWeeklyCoffeeCost(price_per_coffee, num_per_week) {
    return price_per_coffee * num_per_week;
}

function calculateDownPaymentGoal(home_price, down_payment_rate) {
    return home_price * down_payment_rate;
}

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

//-----------------------------------------
// main program
//-----------------------------------------

console.log("----- Coffee vs Down Payment -----");
console.log(`Down payment goal: ${formatCurrency(down_payment_goal)}`);
console.log(`Coffee spend per year: ${formatCurrency(yearly_coffee_cost)}`);

// loop through coffee costs til goal met

while(total_saved < down_payment_goal) {
    total_saved += yearly_coffee_cost;
    years_to_goal++;
}

console.log(`If ${person_name} saved their coffee money, they'd reach the goal in about ${years_to_goal} years.`);
console.log(`That would make them about ${current_age + years_to_goal} years old.`);

if(years_to_goal <= years_remaining) {
    console.log(`Good news, you are likely to reach your goal based on the average lifespan of ${avg_lifespan}`);
} else {
    console.log(`Unfortunately, based on the average lifespan of ${avg_lifespan}, coffee savings alone probably won't get you to your goal.`)
}