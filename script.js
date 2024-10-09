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

const seeDetails2 = document.querySelector(".budgets__header > span");
const budgets = document.querySelector(".budgets");

seeDetails2.addEventListener("click", () => {
  budgets.classList.toggle("non-expanded");
});

const seeDetails3 = document.querySelector(".recurring-bills__header > span");
const recurringBills = document.querySelector(".recurring-bills");

seeDetails3.addEventListener("click", () => {
  recurringBills.classList.toggle("non-expanded");
});

const listItems = document.querySelectorAll(".nav-bar ul li");

listItems.forEach((item) =>
  item.addEventListener("click", () => {
    listItems.forEach((li) => li.classList.remove("active"));

    item.classList.add("active");
  })
);
