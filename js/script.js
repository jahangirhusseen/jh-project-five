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
