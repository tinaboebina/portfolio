
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear

document.getElementById('btn-alert').onclick = () => {
    alert("Have a great day :)");
  }


const btnAlert = document.getElementById('btn-alert');

  btnAlert.onmouseover = () => {
      btnAlert.innerText = 'Not a virus';
  };
  
  btnAlert.onmouseleave = () => {
      btnAlert.innerText = 'Click Here';
  };


  const btnCounter = document.getElementById('btn-counter');
  const txtCounter = document.getElementById('txt-counter');

  let count = 1;

  btnCounter.onclick = () => {
      count = count + 1;
      txtCounter.innerHTML = 'Number: ' + count;

      if (count % 2 === 0) {
          txtCounter.classList.remove('odd');
          txtCounter.classList.add('even');
      } else {
          txtCounter.classList.remove('even');
          txtCounter.classList.add('odd');
      }
  };

  const numbersList = document.getElementById('numbers');

  for (let i = 1; i <= 100; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
  }