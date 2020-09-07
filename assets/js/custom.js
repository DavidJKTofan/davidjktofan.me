<!-- TESTING -->

<!--Load the AJAX API-->
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    // Load the Visualization API and the controls package.
    google.charts.load("current", {"packages": ["corechart", "controls"]});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawDashboard);

    // Callback that creates and populates a data table,
    // instantiates a dashboard, passes in the data and draws it
    function drawDashboard() {

      var cssClassNames = {
        headerRow: "headerRow",
        tableRow: "tableRow",
        oddTableRow: "oddTableRow",
        selectedTableRow: "selectedTableRow",
        hoverTableRow: "hoverTableRow",
        headerCell: "headerCell",
        tableCell: "tableCell",
        rowNumberCell: "rowNumberCell"
      };

      // Create our data table
      var data = google.visualization.arrayToDataTable([
        ["Peer Group", "Provider", "Rank", "Overall Score"],
        ["Americas", "Company 1", 1, 7.63],
        ["Americas", "Company 2", 2, 7.61],
        ["Americas", "Company 3", 3, 7.58],
        ["Americas", "Company 4", 4, 6.48],

        ["EMEA", "Company 1", 1, 9.6],
        ["EMEA", "Company 2", 2, 8.2],
        ["EMEA", "Company 3", 3, 7.4],
        ["EMEA", "Company 4", 4, 5.3],

        ["DACH", "Company 1", 1, 7.8],
        ["DACH", "Company 2", 2, 7.6],
        ["DACH", "Company 3", 3, 7.3],
        ["DACH", "Company 4", 5, 4.5],

        ["FR", "Company 1", 1, 7.9],
        ["FR", "Company 2", 2, 7.5],
        ["FR", "Company 3", 3, 7.4],
        ["FR", "Company 4", 4, 5.3],

        ["UK", "Company 1", 2, 7.6],
        ["UK", "Company 2", 3, 7.3],
        ["UK", "Company 3", 4, 7.],
        ["UK", "Company 4", 5, 6.0]
      ]);

      // Create a dashboard
      var dashboard = new google.visualization.Dashboard(
        document.getElementById("dashboard_div"));

      // Create a filter, passing some options
      var peergroupFilter = new google.visualization.ControlWrapper({
        controlType: "CategoryFilter",
        containerId: "filter_div",
        options: {
          filterColumnLabel: "Peer Group",
          ui: {
            labelStacking: "vertical",
            allowTyping: false,
            allowMultiple: false,
            caption: "Choose Peer Group",
            sortValues: true,
            allowNone: false,
          }
        }
      });

      // Create a Table, passing some options
      var Table = new google.visualization.ChartWrapper({
        chartType: "Table",
        containerId: "chart_div",
        options: {
          width: "100%",
          height: "50vh",
          legend: "right",
          showRowNumber: false,
          allowHtml: true,
          cssClassNames: cssClassNames,
          sortColumn: 1,
          sortAscending: true
        },
        "view": {
          "columns": [1, 2, 3]
        }
      });

      // Apply number formatter
      var length = data.getNumberOfColumns();
      var row = 3;  // starting with the third column
      while (row < length) {
        var formatter2 = new google.visualization.NumberFormat({
          fractionDigits: 1
        });
        formatter2.format(data, row);
        row++;
      }

      // Apply bars formatter to all columns
      var length = data.getNumberOfColumns();
      var row = 3;  // starting with the third column
      while (row < length) {
        var formatter = new google.visualization.BarFormat({
          base: 0,
          min: 0,
          max: 10,
          width: 200
        });
        formatter.format(data, row);
        row++;
      }

      // Loop through all first column rows, adding properties for their styling
      var length = data.getNumberOfRows();
      var row = 0;
      while (row < length) {
        data.setProperties(row, 1, {
          style: "color: #003E7D; font-weight: bold; font-family: Montserrat, sans-serif;"
        });
        row++;
      }

      // Establish dependencies, declaring that the "Filter" drives the "Table"
      dashboard.bind(peergroupFilter, Table);

      // Draw the dashboard
      dashboard.draw(data);
    }
  </script>
