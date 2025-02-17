export function isEven(){
    let result;
    let num = +prompt("Enter an integer number");
    if(isNaN(num)){
        result = "Invalid number";
    } else if (num % 1 != 0){
        result = `${num} - not integer number`;
    } else if (num == ""){
       result ="You didn't enter a number.";
    } 
    else {
        result = num % 2 == 0 ? `${num} - even number` : `${num} - odd number`;
    }
    return result;
}