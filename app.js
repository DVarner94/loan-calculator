// listen for submit
document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

// calculating results
function calculateResults(e) {
  // ui vars
  const amount = document.getElementById(
    "amount",
  );
  const interest = document.getElementById(
    "interest",
  );
  const years = document.getElementById("years");
  const MonthlyPayment = document.getElementById(
    "monthly-payment",
  );
  const totalPayment = document.getElementById(
    "total-payment",
  );
  const totalInterest = document.getElementById(
    "total-interest",
  );

  const principal = parseFloat(amount.value);
  const calculatedInterest =
    parseFloat(interest.value) / 100 / 12;
  const calculatedPayments =
    parseFloat(years.value) * 12;

  // calculate monthly payments
  const x = Math.pow(
    1 + calculatedInterest,
    calculatedPayments,
  );
  const monthly =
    (principal * x * calculatedInterest) /
    (x - 1);

  if (isFinite(monthly)) {
    MonthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (
      monthly * calculatedPayments
    ).toFixed(2);
    totalInterest.value = (
      monthly * calculatedPayments -
      principal
    ).toFixed(2);
  } else {
    showError("Please check your numbers");
  }

  e.preventDefault();
}

// show error fct
function showError(error) {
  // create div
  const errorDiv = document.createElement("div");

  // get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(
    ".heading",
  );

  // add class to div
  errorDiv.className = "alert alert-danger";

  // make text node/append to div
  errorDiv.appendChild(
    document.createTextNode(error),
  );

  // insert about heading
  card.insertBefore(errorDiv, heading);

  // clear error after 2 seconds
  setTimeout(clearError, 3000);
}

// clear error
function clearError() {
  document.querySelector(".alert").remove();
}
