const numbers = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
    'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
    'seventeen': 17, 'eighteen': 18, 'ninteen': 19,

    'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
    'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90

    }
const mag = {'hundred': 100, 'thousand': 1000, 'million': 1000000, 'billion': 1000000000, 
}

const misc = {'and': '&', 'by': ''}

const operators = { 'plus': '+', 'minus': '-', 'divided': '/', 'times': '*' }

result = []
const calc = (x) => x.split(' ')
                     .reduce((acc,cur) => {
                     return  acc.push(cur)  
                    //   switch (true) {
                    //       case (Object.keys(numbers).includes(cur)): acc.push(cur);
                    //       break;
                    //       case Object.keys(mag).includes(cur) : return 'mag';
                    //       break;
                    //       case Object.keys(operators).includes(cur) : return 'oper';
                    //       break;
                    //       default : return 'misc';
                    //   }  
                         
                     },result)


calc('eighteen times one thousand divided by and fifteen plus five')//?