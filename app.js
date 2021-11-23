const output = document.querySelector('.output');
const one = document.querySelector('.one');
const numbers = document.querySelectorAll('.number')
const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach(x => {
   x.addEventListener('click',(e) => {
      switch (e.target.innerText) {
         case 'AC':
            output.innerText = '';
            break;
         case 'DEL':
            if (output.innerText) {
               output.innerText = output.innerText.slice(0, -1);
            }
            break;
         case '=':
            try {
               output.innerText = eval(output.innerText);
            } catch {
               output.innerText = 'Error!'
            }
            output.innerText = eval(output.innerText);
            break;
         default:
            output.innerText += e.target.innerText
      }
   }) 
})