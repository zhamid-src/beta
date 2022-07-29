var donation = 100;
var frequency = "one-time";

window.addEventListener("load", function () {
  addListener("movement-form", "movement-button", "movement-message");
  addListener("movement-form-sm", "movement-button-sm", "movement-message-sm");
});


function addListener(formName, buttonName, messageName) {
  const form = document.getElementById(formName);
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = document.getElementById(buttonName);
    button.classList.add("is-loading");
    button.disabled = true;

    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => resetFormWithSuccess(messageName, form, button));
  });
}

function resetFormWithSuccess(messageName, form, button) {
  
  const message = document.getElementById(messageName);
  
  hideForm(form, message);
  setTimeout(() => resetForm(form, message, button), 2000);
}

function resetForm(form, message, button) {
  form.classList.remove("is-hidden");
  message.classList.add("is-hidden");

  button.classList.remove("is-loading");
  button.disabled = false;

  form.reset();
}

function hideForm(form, message) {
  form.classList.add("is-hidden");
  message.classList.remove("is-hidden");
}

function setFrequency(fr) {
  frequency = fr;
  donation = 100;
}

function resetDonationButtons(e) {
  const donationButtons = document.getElementsByClassName("donation-button");  
  for(let i = 0; i < donationButtons.length; i++) {
    const button = donationButtons.item(i);
    button.classList.add("is-outlined");
  }
}

function setDonation(amount, e) {  
  resetDonationButtons(e);
  e?.classList.remove("is-outlined");
  donation = amount;
}

function onetime() {
  switch (donation) {
    case 1200:
      window.open("https://buy.stripe.com/14k0067B4b7yd8Y4gp");
      break;

    case 1000:
      window.open("https://buy.stripe.com/00g6ouaNg0sUed2dQY");
      break;

    case 750:
      window.open("https://buy.stripe.com/cN26ou2gKa3u8SI8wD");
      break;

    case 500:
      window.open("https://buy.stripe.com/aEU3ci9Jcb7y4Cs28e");
      break;

    case 250:
      window.open("https://buy.stripe.com/9AQ8wC08C2B27OE6ot");
      break;

    case 150:
      window.open("https://buy.stripe.com/9AQcMS5sW4Ja1qg148");
      break;

    case 100:
      window.open("https://buy.stripe.com/3csaEK6x04Ja3yocMP");
      break;

    case 50:
      window.open("https://buy.stripe.com/fZe0063kOgrSglaeUW");
      break;

    case 25:
    default:
      window.open("https://buy.stripe.com/dR6dQWbRkgrS6KAeUU");
      break;
  }
}

function recurring() {
  switch (donation) {
    case 250:
      window.open("https://buy.stripe.com/9AQ14abRka3u1qg14l");
      break;

    case 200:
      window.open("https://buy.stripe.com/14k7syg7AcbC2uk5kA");
      break;

    case 175:
      window.open("https://buy.stripe.com/00g5kq6x03F61qg14j");
      break;

    case 150:
      window.open("https://buy.stripe.com/4gwfZ41cG3F62uk4gu");
      break;

    case 100:
      window.open("https://buy.stripe.com/7sI6ou6x03F62uk28l");
      break;

    case 75:
      window.open("https://buy.stripe.com/bIY3ci9Jc8Zq3yo3co");
      break;

    case 40:
      window.open("https://buy.stripe.com/4gw28e8F8dfGd8Y7sD");
      break;

    case 25:
      window.open("https://buy.stripe.com/eVa4gm3kOdfG4CsfZ8");
      break;

    case 15:
    default:
      window.open("https://buy.stripe.com/cN228ecVocbC6KAcMN");
      break;
  }
}

function donate() {
  if (frequency === "monthly") {
    recurring();
  } else {
    onetime();
  }
}
