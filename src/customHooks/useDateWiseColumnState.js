function useDateWiseColumnState(transactionDate, incomeData, expenseData) {
  let columnState = {
    series: [
      {
        name: "Income",
        data: incomeData,
      },
      {
        name: "Expense",
        data: expenseData,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: transactionDate,
      },
      yaxis: {
        title: {
          text: "Rupees",
        },
      },
      fill: {
        opacity: 1,
      },
      title: {
        text: "Transactions this month",
        align: "left",
        floating: true,
        margin: 40,
        style: {
          fontSize: "1rem",
          fontWeight: "500",
          fontFamily: "poppins",
          color: "#212121",
          lineHeight: "1.2",
          marginBottom: "50px !important",
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "Rupees " + val;
          },
        },
      },
    },
  };
  return columnState;
}

export default useDateWiseColumnState;
