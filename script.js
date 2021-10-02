let text = document.querySelector("textarea");
let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let saveTextFile = document.getElementById("save-text-file");

function download(filename, content) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
    element.setAttribute('download', 'text.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


upperCase.addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});

lowerCase.addEventListener("click", function () {
    text.value
        = text.value.toLowerCase();
});

properCase.addEventListener("click", function () {
    text.value
        = text.value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
});

sentenceCase.addEventListener("click", function () {
    text.value
        = text.value.toLowerCase().replace(/\.\s*([a-z])|^[a-z]/gm, s => s.toUpperCase());
});


saveTextFile.addEventListener("click", download)
