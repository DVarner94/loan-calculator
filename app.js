// listen for submit
document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

// calculating results
function calculateResults(e) {
    
    // ui vars
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const MonthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value) * 12;


    // calculate monthly payments
    const x = Math.pow(1 +)


    e.preventDefault();
}
