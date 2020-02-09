
function initializeViz() {
    var placeholderDiv = document.getElementById("vizContainer");
    var url = "https://public.tableau.com/views/Border_Heatmap";
    var options = {
      width: placeholderDiv.offsetWidth,
      height: placeholderDiv.offsetHeight,
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      }
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }    