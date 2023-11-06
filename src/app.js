const endDate = "06 November 2023 08:20:00 PM";

const date = document.querySelector(".date");
date.innerHTML = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate); // obj bna dega date ka
  const newDate = new Date();
  const diff = (end - newDate) / 1000;
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};
clock();

setInterval(() => {
  clock();
}, 1000);
