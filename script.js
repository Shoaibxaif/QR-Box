let qrcode = select("img");
let qrtext = select("textarea");
let qrbtn = select("button");


qrbtn.addEventListener("click",generateQR);


function generateQR() {
    let size = "1000*1000"
    let data = qrtext.value;
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

    let url = '${baseURL}?data=${data}&size=${size}';

    qrcode.src = url; 

}



function select(el) {
    return document.querySelector(el);
}