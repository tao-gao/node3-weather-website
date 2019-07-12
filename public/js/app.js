console.log('client side javascript is loaded.')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherform.addEventListener('submit', (e) => {
  const location = search.value;
  console.log(location);

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';



  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = data.error;
      }
      else {
        console.log(data);
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });

  e.preventDefault();
});