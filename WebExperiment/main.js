var oBtn_log = document.querySelector(".btn-log");
var oBtn_res = document.querySelector(".btn-reg")
var oForm_log = document.querySelector(".form-log")
var oForm_res = document.querySelector(".form-register")
var flag_log = 1;
var flag_res = 1;
oBtn_log.onclick = function () {

    if (flag_log == 1) {

        oForm_log.style.display = 'block';
        oForm_res.style.display = 'none';
        oIns.style.display = 'none'
        flag_log = 0;
    }
    else {
        oForm_log.style.display = 'none';
        flag_log = 1;

    }
}
oBtn_res.onclick = function () {
    if (flag_res == 1) {

        oForm_res.style.display = 'block';
        oForm_log.style.display = 'none'
        oIns.style.display = 'none'
        flag_res = 0;
    }
    else {
        oForm_res.style.display = 'none';
        flag_res = 1;

    }
}
var oA = document.querySelector(".about-me");
var oIns = document.querySelector(".introduction")
var f = 1;
oA.onclick = function () {
    if (f == 1) {

        oForm_res.style.display = 'none';
        oForm_log.style.display = 'none';
        oIns.style.display = 'block'
        f = 0;
    }
    else {
        oIns.style.display = 'none';
        f = 1;

    }
}
