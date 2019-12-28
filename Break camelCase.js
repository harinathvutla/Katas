/*
6yku Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'
*/


// complete the function
function solution(string) {
   let res=[];
   string.split('').forEach(x=> {
   if(x>='A' && x<='Z')
   res.push(' ');
   res.push(x);
   }) ;
   return res.join('');
}