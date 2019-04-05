const a = 'there was 1 goat. 1 goat was ill. Other was a Lion. Lion was king. King ate goat';

const b = a.split('.');

const d = b.filter(c=>{
   return !/goat/.test(c);
});

console.log(d.join('.'));