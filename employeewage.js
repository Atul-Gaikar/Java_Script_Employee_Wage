const Is_Absent = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == Is_Absent) {
    console.log("Employee Is Absent");
    return;
}
else {
    console.log("Employee Is Present");
}