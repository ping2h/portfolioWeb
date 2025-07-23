const tableBody = document.querySelector("#portfolio-table tbody");
const totalValueDisplay = document.getElementById("total-value");
let totalValue = 0;
const assetData = [];

const ctx = document.getElementById('portfolioChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#9b59b6'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  }
});

window.addAsset = function addAsset() {
  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  if (!name || isNaN(amount) || amount <= 0) {
    alert("Please enter valid asset name and amount.");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${type}</td>
    <td>${name}</td>
    <td>$${amount.toFixed(2)}</td>
    <td><button onclick="removeAsset(this, '${name}', ${amount})">🗑️</button></td>
  `;
  tableBody.appendChild(row);

  assetData.push({ name, amount });
  totalValue += amount;
  updateTotal();
  updateChart();

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

window.removeAsset = function removeAsset(button, name, amount) {
  const row = button.closest("tr");
  tableBody.removeChild(row);
  totalValue -= amount;

  const index = assetData.findIndex(a => a.name === name && a.amount === amount);
  if (index !== -1) assetData.splice(index, 1);

  updateTotal();
  updateChart();
}

function updateTotal() {
  totalValueDisplay.textContent = `Total Portfolio Value: $${totalValue.toFixed(2)}`;
}

function updateChart() {
  chart.data.labels = assetData.map(a => a.name);
  chart.data.datasets[0].data = assetData.map(a => a.amount);
  chart.update();
}