const seeDetails = document.querySelector(".pots__header > span");
const pots = document.querySelector(".pots");

seeDetails.addEventListener("click", () => {
  pots.classList.toggle("non-expanded");
});

const viewAll = document.querySelector(".transactions__header > span");
const transactions = document.querySelector(".transactions");

viewAll.addEventListener("click", () => {
  transactions.classList.toggle("non-expanded");
});

const seeDetails2 = document.querySelector(".recurring-bills__header > span");
const recurringBills = document.querySelector(".recurring-bills");

seeDetails2.addEventListener("click", () => {
  recurringBills.classList.toggle("non-expanded");
});
