
// uncompress
const uncompress = (s) => {
    const numbers = '0123456789'
    let i =  0;
    let j = 0;
    let result = '';
    
    while(j < s.length){
      if(numbers.includes(s[j])){
        j += 1;
      }else{
        const num = Number(s.slice(i,j));
        for(let count = 0; count < num; count++){
          result += s[j];
        }
        j += 1;
        i = j;
      }
    }
  
    return result;
  };
  
  module.exports = {
    uncompress,
  };

  // uncompress
  const uncompress2 = (s) => {
    let result = [];
    const numbers = '0123456789';
    let i = 0;
    let j = 0;
    while (j < s.length) {
      if (numbers.includes(s[j])) {
        j += 1;
      } else {
        const num = Number(s.slice(i, j));
        for (let count = 0; count < num; count += 1) {
          result.push(s[j]);
        }
        j += 1;
        i = j;
      }
    }
    return result.join('');
  };
  

  // this operation is the most efficient way
  const compress = (s) => {
    let result = [];
    let i = 0;
    let j = 0;
    
    while (j <= s.length) {
      if (s[i] === s[j]) {
        j += 1;
      } else {
        const num = j - i;
        if (num === 1) {
          result.push(s[i]);
        } else {
            //for a linear operation
          result.push(String(num), s[i]);
        }
        i = j;
      }
    }
    // and also a linear operation too
    return result.join('');
  }; 