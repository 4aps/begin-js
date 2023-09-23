const accountId = 33744
const accountName = "Alpha Den"
let accountEmail = "abcalpha@ad.com"

//var is not currently used as it has scope issue
var accountPassword = "12334" 

accountCity = "Kannauj" //using let or kind of datatype b4 initiation is good practice 
let accountState; //using ; in end is good habit

console.log(accountId);

//change the data
//const are not allowed to change
//accountName = "Jiva"


accountEmail = "abc@bc.com";
accountPassword = "73643";
accountCity = "Ghaziabad";

//console.table([accountId, accountName, accountEmail, accountPassword, accountCity]);

console.table([accountPassword, accountCity, accountEmail, accountName, accountId, accountState]);