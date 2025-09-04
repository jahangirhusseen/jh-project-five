let historyData = [];

// Heat Count
let heartCountValue = 0;
const heartCount = document.querySelector("#heartCount");
const heartBtns = document.querySelectorAll(".heartBtn");

//Heat Count Feature
const getHeartCount = function () {
  heartCountValue += 1;
  heartCount.innerText = heartCountValue;
};
heartBtns.forEach((btn) => {
  btn.addEventListener("click", getHeartCount);
});
// ===========End Heat Counter =======================

// ===================
// Coin Count
let coinCountValue = 100;
const coinCount = document.querySelector("#coinCount");
const coinBtns = document.querySelectorAll(".coinBtn");

//Coin Count Feature
const getCoinBtns = function (CardElement) {
  let title = CardElement.querySelector(".card-body-title").innerText;
  let subtitle = CardElement.querySelector(".subtitle").innerText;
  let infoNumber = CardElement.querySelector(".info-number").innerText;
  const time = new Date().toLocaleTimeString();

  if (coinCountValue <= 0) {
    alert("আপনার পর্যাপ্ত কয়েন নাই! কল করতে কমপক্ষে ২০ কয়েন লাগবে");
    return;
  }

  coinCountValue -= 20;
  coinCount.textContent = coinCountValue;

  alert(`Calling ${subtitle} ${infoNumber}...`);

  const data = {
    title: title,
    subtitle: subtitle,
    infoNumber: infoNumber,
    time: time,
  };
  historyData.push(data);
  getHistoryData(data);
};

coinBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let CardElement = btn.parentElement.parentElement;

    getCoinBtns(CardElement);
  });
});

// Clear Btn
const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", function () {
  historyData.length = 0;
  console.log(historyData);

  document.querySelector(".history-container").innerHTML = "";
});

// ========= Copy Counter ==========

let totalCopy = 0;
let copyCounter = document.querySelector(".copyCounter");

function getCopyValue() {
  totalCopy += 1;
  copyCounter.innerText = totalCopy;
}
let buttons = document.querySelectorAll(".copyBtn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let infoNumbers = button.parentElement.parentElement;
    let data = infoNumbers.querySelectorAll(".info-number");

    data.forEach((data) => {
      let text = data.innerText;
      alert(`নাম্বার কপি হয়েছে: ${text} `);
      navigator.clipboard.writeText(text);
    });

    getCopyValue();
  });
});
