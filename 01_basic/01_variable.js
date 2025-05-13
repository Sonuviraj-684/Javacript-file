const accountId =144553
let accountEmail ="Sonu@gmail.com" 
var accountPassword ="12345"
accountCity ="Bangalore" //Not to efficiant way

let accountState;
/*
Prefer not to use Var
because of issue in block scope and functional scope
*/ 
//accountId = 2 //not allowed

accountEmail= "sv@gmail.com"
accountPassword="34563"
accountCity="Pune"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
