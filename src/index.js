import c3 from "c3";

window.loadChart = function (param) {
  const obj = JSON.parse(param);
  const json = obj.data;
  // const type = obj.type;
  // const height = obj.height || 900;
  // const angle = obj.angle || 0;

  const { type, height, angle } = obj;

  var chart = c3.generate({
    bindto: "#chart",
    size: { height: height },
    axis: { x: { type: "category" } },
    pie: { padAngle: angle },
    data: {
      onclick: function (d) {
        console.log(d);

        FileMaker.PerformScript("Get Data from JS", JSON.stringify(d));
      },
      colors: {
        apples: "#F2C48D",
        peaches: "#8C521F",
        bananas: "#73604F"
      },
      type: type,
      keys: { x: "month", value: ["apples", "peaches", "bananas"] },
      json: json
    }
  });
};
