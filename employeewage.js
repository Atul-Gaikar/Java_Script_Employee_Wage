//UC1-CheckEmployeeIsPresentOrAbsent
const Is_Absent = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == Is_Absent) {
    console.log("Employee Is Absent");
    
}
else {
    console.log("Employee Is Present");
}
//UC2-CalculateDailyEmployeeWage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOURS;
console.log("Emp Wage: " + empWage);

//UC3-RefactorTheCode

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;

    }
}
empHrs = getWorkingHours(empCheck);
console.log("Emp Wage: " + empWage);
