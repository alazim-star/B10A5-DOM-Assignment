// scroll blur function

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('nav-bar');
  if (window.scrollY > 100) { 
    navbar.classList.add('backdrop-blur-md', 'bg-opacity-10');
  } else {
    navbar.classList.remove('backdrop-blur-md', 'bg-opacity-100');
  }
});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('second-nav');
  if (window.scrollY > 100) { 
    navbar.classList.add('backdrop-blur-md', 'bg-opacity-70');
  } else {
    navbar.classList.remove('backdrop-blur-md', 'bg-opacity-100');
  }
});




function yourMainBalance(id) {
  return parseFloat(document.getElementById(id).innerText); 
}

// blog link
document.getElementById('blog-id').addEventListener('click',function (event) {
  event.preventDefault()
    window.location.href='./Blog.html'
  
})

// if (isNaN(noakaliInput) || noakaliInput <= 0) {
//   alert('Please enter a valid number greater than 0');
//   return;
// }

// if (initialAmountBalance < noakaliInput) {
//   alert('Insufficient balance');
//   return;
// }




// Noakhali Donate
document.getElementById('nDonetBtn').addEventListener('click', function (event) {
  event.preventDefault();

  const noakaliInput = parseFloat(document.getElementById('noakhali-input').value);
  
  const initialAmountBalance = yourMainBalance('initialAmount'); 

  if (isNaN(noakaliInput) || noakaliInput <= 0) {
      alert('Please enter a valid number');
      return;
  }

  if (initialAmountBalance < noakaliInput) {
    alert('Insufficient balance');
    return;
  }

  document.getElementById('noakhaliModal').checked = true;

  const noakhaliAmountShow = document.getElementById('noakhaliAmount');
  noakhaliAmountShow.innerText = noakaliInput;

  const noakhaliBalanceAmount = initialAmountBalance - noakaliInput;
  document.getElementById('initialAmount').innerText = noakhaliBalanceAmount;

  historyHandle(noakaliInput); 

  document.getElementById('noakhali-input').value = "";
});



// history item
function historyHandle(value) {

  let currentDate = new Date();
  const historyItem = document.createElement('div');
  historyItem.className = "bg-white p-5 w-full mb-3 rounded-lg border-l-2 border-indigo-500";
  historyItem.innerHTML = `
      <p class="text-sm text-black font-extrabold mb-3">${value.toFixed(2)} Taka is Donated for flood relief in Noakhali, Bangladesh</p>
      <p class="text-sm text-gray-500">Date: ${currentDate.toDateString()} ${currentDate.toLocaleTimeString()} GMT +06:00 (Bangladesh Standard Time)</p>
  `;
  const historyContainer = document.getElementById('history-list');  
  historyContainer.appendChild(historyItem, historyContainer.firstChild);
  
}







//  Feni Donate
document.getElementById('fDonetBtn').addEventListener('click', function (event) {
  event.preventDefault();
  const feniInput = parseFloat(document.getElementById('feni-input').value);
  const initialAmountBalance = yourMainBalance('initialAmount'); // Make sure this function exists

  if (isNaN(feniInput) || feniInput <= 0) {
    alert('Please enter a valid number');
    return;
  }

  if (initialAmountBalance < feniInput) {
    alert('Insufficient balance');
    return;
  }

  document.getElementById('feniModal').checked = true;
  const feniAmountShow = document.getElementById('feniAmount');
  feniAmountShow.innerText = feniInput;
  const feniBalanceAmount = initialAmountBalance - feniInput;
  document.getElementById('initialAmount').innerText = feniBalanceAmount;

  historyHandle(feniInput, 'Donation made to Feni relief fund.');
  document.getElementById('feni-input').value = "";
});

// Create the history item to show the donation details
function history(value) {

  let currentDate = new Date();
  const historyItem = document.createElement('div');
  historyItem.className = "bg-white p-5 w-full mb-3 rounded-lg border-l-2 border-indigo-500";
  historyItem.innerHTML = `
       <p class="text-sm text-black font-extrabold mb-3">${value.toFixed(2)} Taka is Donated for flood relief in feni, Bangladesh</p>
      <p class="text-sm text-gray-500">Date: ${currentDate.toDateString()} ${currentDate.toLocaleTimeString()} GMT +06:00 (Bangladesh Standard Time)</p>
  `;

  const historyContainer = document.getElementById('history-list');
  historyContainer.appendChild(historyItem, historyContainer.firstChild);
  
}



//  Aid for injured Donate
document.getElementById('injuredDonetBtn').addEventListener('click', function (event) {
  event.preventDefault();
  const injuredInput = parseFloat(document.getElementById('injured-input').value);
  const initialAmountBalance = yourMainBalance('initialAmount'); // Make sure this function exists

  if (isNaN(injuredInput) || injuredInput <= 0) {
    alert('Please enter a valid number');
    return;
  }

  if (initialAmountBalance < injuredInput) {
    alert('Insufficient balance');
    return;
  }

  document.getElementById('injuredModal').checked = true;

  const injuredAmountShow = document.getElementById('injured-amount');
  injuredAmountShow.innerText = injuredInput;
  const injuredBalanceAmount = initialAmountBalance - injuredInput;
  document.getElementById('initialAmount').innerText = injuredBalanceAmount;
  historyHandle(injuredInput, 'Donation made to Aid for Injured.');

  document.getElementById('injured-input').value = "";
});


 // Create the history item to show the donation details
function Container(value) {

  let currentDate = new Date();
  const historyItem = document.createElement('div');
  historyItem.className = "bg-white p-5 w-full mb-3 rounded-lg border-l-2 border-indigo-500";
  historyItem.innerHTML = `
        <p class="text-sm text-black font-extrabold mb-3">${value.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
      <p class="text-sm text-gray-500">Date: ${currentDate.toDateString()} ${currentDate.toLocaleTimeString()} GMT +06:00 (Bangladesh Standard Time)</p>
  `;

  const historyContainer = document.getElementById('history-list');
  historyContainer.appendChild(historyItem, historyContainer.firstChild);
  
}
  // Hide the main page content

document.getElementById('btn-history').addEventListener('click', function (event) {
 event.preventDefault()

  document.getElementById('mainPage').classList.add('hidden');

  // Show the history list
  document.getElementById('history-list').classList.remove('hidden');
})

//  history button functionality 
 const historyBtn = document.getElementById('btn-history');
 const btnDonation = document.getElementById('btn-donation');

document.getElementById('btn-history').addEventListener('click', function () {
  document.getElementById('footer-id').classList.add('mt-80')
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('history-list').classList.remove('hidden');
  historyBtn.classList.add(
    "bg-btnColor",
     "w-24",
     "text-black",
     "text-gray-400",

   );
    btnDonation.classList.remove("bg-btnColor","text-black")
});

document.getElementById('btn-donation').addEventListener('click', function (event) {
  event.preventDefault()
  document.getElementById('footer-id').classList.remove('mt-80')
  document.getElementById('mainPage').classList.remove('hidden');
  document.getElementById('history-list').classList.add('hidden');
  btnDonation.classList.add("bg-btnColor","text-black",)
  historyBtn.classList.remove("bg-btnColor","text-black")


});













