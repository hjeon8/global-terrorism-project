Plotly.d3.csv(
    "../../Resource/globalterrorism.csv", function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
  });
}


var trace1 = {
  type: "bar",
  name: 'Border Crossing Count',
  x: unpack(rows, 'region_txt'),
  y: unpack(rows, 'count'),
}

var data = [trace1];

var layout = {
  title: 'Border Cross Count by Month and Year',
};

Plotly.newPlot('region-bar', data, layout);
})