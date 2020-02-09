Plotly.d3.csv(
    "https://raw.githubusercontent.com/RHaile/final_project/master/data/CleanedBorderdata_2008-2018.csv",
    function (rows) {
        var b = [],
            v = [],
            c = [];

        for (var i = 0; i < rows.length; i++) {
            row = rows[i];
            b.push(row["Border"]);
            v.push(row["Value"]);
            c.push(row["State"]);
        }
        var data = [{
            values: v,
            labels: b,
            domain: {
                column: 0
            },
            hoverinfo: 'label+percent',
            hole: .4,
            type: 'pie'
        }, {
            values: v,
            labels: c,
            textposition: 'inside',
            domain: {
                column: 1
            },
            hoverinfo: 'label+percent',
            hole: .4,
            type: 'pie'
        }];

        var layout = {
            title: 'US Border Crosssing 2008-2018',
            annotations: [{
                    font: {
                        size: 17
                    },
                    showarrow: false,
                    text: 'Country',
                    x: 0.15,
                    y: 0.5
                },
                {
                    font: {
                        size: 17
                    },
                    showarrow: false,
                    text: 'State',
                    x: 0.81,
                    y: 0.5
                }
            ],
            height: 400,
            width: 600,
            showlegend: false,
            grid: {
                rows: 1,
                columns: 2
            }
        };

        Plotly.newPlot('myDiv2', data, layout);
    }
    );