var spreadsheet_id = "", // 填入試算表 ID
    tab_name = "", // 填入工作表名稱
    api_key = "", // 填入 API 金鑰
    url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheet_id + "/values/" + tab_name + "?key=" + api_key;
var stu_id = [];
$.getJSON(url, function (json) {
    var values = json.values; // 所有試算表資料
    values.forEach(function (rows) {
        rows.forEach(function (item) {
            stu_id.push(item);
        });
    });
});
function search(data, target) {
    //宣告變日數都是 索引值 index
    let start = 0
    for (start = 0; start < data.length; start++) {
        if (target == data[start].toUpperCase() || target == data[start].toLowerCase())
            return 1
    }
    return -1  //未找到回傳 -1
}
function check() {
    var inputdata = document.getElementById("stu_id").value;
    if (search(stu_id, inputdata) != -1)
        alert('已繳費。')
    else
        alert('未繳費或輸入錯誤。')
}
$(document).ready(function () {
    $("#stu_id").keyup(function (event) {
        if (event.which === 13) {
            $("#sub").click();
        }
    });

    $("#sub").click(function () {
        check();
    })
});