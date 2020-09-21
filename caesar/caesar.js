const caesar = function(str,n){
   
   let s = str.split("");
   var ch,shift;
   for(let i=0;i<s.length;i++)
   {
      ch = s[i].charCodeAt(0);
      if((ch>=65 && ch<=90) || (ch>=97 && ch<=122))
      {  
         if((ch>=65 && ch<=90))
        {
           shift = (ch-65 + n)%26;
           shift<0?
           s[i]=String.fromCharCode( shift + 26 + 65)
           :s[i]=String.fromCharCode( shift + 65);
        }
         else 
         {
            shift = (ch-97 + n)%26;
            shift<0?
            s[i]=String.fromCharCode(shift + 26 + 97)
            :s[i]=String.fromCharCode(shift + 97)
         }
      } 
   }
   
    // s.forEach(i => i = String.fromCharCode(i.charCodeAt(0)+(n%26)));
    s=s.join("");
    console.log(s);
    return s;
}
  


module.exports = caesar
