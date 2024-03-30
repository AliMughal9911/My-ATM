#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Please Enter Your Pin Number: ",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log(`Your balance is ${myBalance}`);
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            message: "Please Select the Option",
            type: "list",
            choices: ["withdraw", "balance inquiry"],
        }]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt({
            name: "amount",
            message: "Please Enter Your Amount: ",
            type: "number"
        });
        myBalance -= amountAnswer.amount;
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
    else {
        console.log(`Your Current balance is ${myBalance}`);
    }
}
else {
    console.log("Invalid Pin.Please Try Again");
}
