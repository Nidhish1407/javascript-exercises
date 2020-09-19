const palindromes = function(s) {
   let str = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{1,}/g,"").toLowerCase();
              
   let reverse= str.split("").reverse().join("");
//    console.log(str);
//    console.log(reverse);
   return reverse==str;
}

module.exports = palindromes
