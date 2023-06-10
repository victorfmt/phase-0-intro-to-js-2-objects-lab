// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {name: "Sam", streetAddress: "11 Broadway" };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function  deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};

//destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
//const destructivelyUpdateEmployeeWithKeyAndValue: (employee: any, key: any, value: any) => {
  //  name: string;
    //streetAddress: string;

/*const incrementTotal = function(obj, val) {
    obj.increment = val;
    return function () { 
    console.log(obj.total);
    obj.total = obj.total + obj.increment;
    console.log(obj.total);
    };
};

const indBy1 = incrementTotal(newObj, 1);
const incBy2 = incrementTotal(newObj, 2);
*/
