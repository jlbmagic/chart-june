import c3 from "c3";

var chart = c3.generate({
  bindto: "#chart",
  size: { width: 1000, height: 700 },
  data: {
    colors: {
      Apples: "red",
      Peaches: "green",
    },
    type: "bar",
    columns: [
      ["Apples", 300, 200, 100, 400, 350, 250],
      ["Peaches", 10, 60, 210, 340, 415, 225],
    ],
  },
});
