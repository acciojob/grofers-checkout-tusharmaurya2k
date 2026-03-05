const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  const table = document.querySelector("table");

  // remove old total row if it exists
  const oldRow = document.querySelector("#total-row");
  if (oldRow) oldRow.remove();

  // create new row
  const tr = document.createElement("tr");
  tr.id = "total-row";

  const td1 = document.createElement("td");
  td1.textContent = "Total";

  const td2 = document.createElement("td");
  td2.textContent = total;

  tr.appendChild(td1);
  tr.appendChild(td2);

  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);