// create html output from file
// then, show sidebar
function show_side_bar_sort_box_pallete() {
    let widget = HtmlService.createHtmlOutputFromFile("index");
    SpreadsheetApp.getUi().showSidebar(widget);
}

function htmlCallFunc(data) {
    Logger.log(data);
}
