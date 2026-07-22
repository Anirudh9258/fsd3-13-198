//write a function to take number 1 to 10 and return in words and (0-9)
//const numberToWords = (num) => {
    //const words = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    //return num >= 0 && num <=9 ? words[num] : 'Invalid number';

//};
//console.log(numberToWords(0));
//console.log(numberToWords(5));  
//console.log(numberToWords(7));
//console.log(numberToWords(9));
 
const numberToWords = (num) => {
  switch (num) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
    default: return 'Invalid';
  }
};
console.log(numberToWords(0)); 
console.log(numberToWords(5)); 
console.log(numberToWords(9)); 
console.log(numberToWords(12));


//create another fxn that takes a number show in words with the hlp of towards fxn


 