modify();
function change() {
    var el1 = document.getElementById("div1");
    var el2 = document.getElementById("text");
    el1.innerHTML = el2.value;
}
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'f5xxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// ====================== demo ======================
function modify() {
    document.getElementById('register').innerText = generateUUID().toUpperCase();
}

function myFunction()
{

var x = document.getElementById("inputId");
var div = document.getElementById('divID');
div.innerHTML = x.value;    

}