const fibonacci = function(n) {
   n = +n;
   if(n<0)return 'OOPS';
   if(n==1 || n==2)
   return 1;
   else return fibonacci(n-2) + fibonacci(n-1);
}

module.exports = fibonacci
