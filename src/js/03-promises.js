import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('form');

function createPromise(e) {
  e.preventDefault()
  const delay = Number(form.querySelector('input[name="delay"]').value);
  const step = Number(form.querySelector('input[name="step"]').value);
  const amount = Number(form.querySelector('input[name="amount"]').value);

  let nextStep = delay;
  
  for (let num = 1; num <= amount; num += 1) {
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      
      setTimeout(() => {
        if (shouldResolve) {
          resolve()
        } else {
          reject()
        }
      }, nextStep)

      console.log(nextStep);
      
    });
      promise.then(() =>  Notify.success(`✅ Fulfilled promise ${num} in ${nextStep}ms`) ).catch(() => { return Notify.failure(`❌ Rejected promise ${num} in ${nextStep}ms`) });
       console.log(nextStep);
    nextStep += step;
  }

};
form.addEventListener('submit', createPromise);



