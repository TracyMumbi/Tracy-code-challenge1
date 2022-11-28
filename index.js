// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.



// function studentMarks() { //Declaring studentMarks as a function
//     let marks = prompt('Type here');
//         if (marks > 79 && marks <= 100) { //
//             return 'Grade A';
//         } else if (marks >= 60 && marks <= 79) {
//             return 'Grade B';
//         } else if (marks > 49 && marks <= 59) {
//             return 'Grade C';
//         } else if (marks >=40 && marks <= 49) {
//             return 'Grade D';
//         } else if (marks >= 0 && marks < 40) {
//             return 'Grade E';
//         } else {
//             return 'Invalid';
//         }
//     }






// function calculateNetSalary () {
//     let salary = prompt("Type Here");
//     if (salary > 0 && salary <= 24000) {
//         return salary - 0.1 *salary;
//     } else if (salary >= 24001 && salary <= 32333) {
//         return salary - 0.25 * salary;
//     } else {
//         return salary - 0.3 * salary;
//     }
// }





// let  salary_prompt = prompt("Enter salary amount")

// let mySal = parseInt(salary_prompt)

// let Paye;
// let NHIF;

function calculateTax(salary){
    if(salary > 0 && salary <= 24000){
        Paye = salary*0.1;
        return Paye;
    } else if (salary >= 24001 && salary <= 32333) {
        Paye = 24000 * 0.1 + salary * 0.25 ;
        return Paye;
    } else {
        Paye = 24000 * 0.1 + salary * 0.25 + salary * 0.3;
        return Paye;
    }
}
// function calculateNHIF(salary){
//     if (salary <= 5999) {
//         NHIF = 150;
//         return NHIF
//     } else if (salary >= 6000 && salary <= 7999) {
//         NHIF = 300;
//         return NHIF
//     } else if (salary >= 8000 && salary <= 11999) {
//         NHIF = 400;
//         return NHIF
//     } else if (salary >= 12000 && salary <= 14999) {
//         NHIF = 500;
//         return NHIF
//     } else if (salary >= 15000 && salary <= 19999) {
//         NHIF = 600;
//         return NHIF
//     } else if (salary >= 20000 && salary <= 24999) {
//         NHIF = 750;
//         return NHIF
//     } else if (salary >= 25000 && salary <= 29999) {
//         NHIF = 850;
//         return NHIF
//     } else if (salary >= 30000 && salary <= 34999) {
//         NHIF = 900;
//         return NHIF
//     } else if (salary >= 35000 && salary <= 39999) {
//         NHIF = 950;
//         return NHIF
//     } else if (salary >= 40000 && salary <= 44999) {
//         NHIF = 1000;
//         return NHIF;
//     } else if (salary >= 45000 && salary <= 49999) {
//         NHIF = 1100;
//         return NHIF;
//     } else if (salary >= 50000 && salary <= 59999) {
//         NHIF = 1200;
//         return NHIF;
//     } else if (salary >= 60000 && salary <= 69999) {
//         NHIF = 1300;
//         return NHIF;
//     } else if (salary >= 70000 && salary <= 79999) {
//         NHIF = 1400;
//         return NHIF;
//     } else if (salary >= 80000 && salary <= 89999) {
//         NHIF = 1500;
//         return NHIF;
//     } else if (salary >= 90000 && salary <= 99999) {
//         NHIF = 1600;
//         return NHIF;
//     } else {
//         NHIF = 1700;
//         return NHIF;
//     }
// }


// function calculateNSSF() {
//     if (salary > 0 && salary <= 6000) {
//         NSSF = 
//         return NSSF;
//     } else {
//         NSSF = 
//         return NSSF;
//     }
// }

// calculateNHIF(mySal)
// calculateTax(mySal)

// console.log(Paye);
// console.log(NHIF);

console 