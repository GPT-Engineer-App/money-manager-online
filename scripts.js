document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("gastosChart").getContext("2d");
  const gastosChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      datasets: [
        {
          label: "Gastos",
          data: [120, 150, 180, 200, 170, 190],
          borderColor: "rgba(231, 76, 60, 1)",
          backgroundColor: "rgba(231, 76, 60, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
