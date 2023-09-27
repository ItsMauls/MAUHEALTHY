// console.log("hello worlds");
let data = [
  { nama: "tahu", kal: 20 },
  { nama: "tempe", kal: 50 },
  { nama: "pandu", kal: 100 },
];

const isi = document.getElementById("coba");
for (const key of data) {
  let nama = key.nama;
  let val = key.kal;
  //   console.log(nama, val);

  // pake  "+=" bukan "="
  isi.innerHTML += `
      <div class="box"><input type="checkbox" class="cek" value="${val}" onclick="checkFunc()" />${nama}</div>
      `;
}

function checkFunc() {
  let angka = 203;
  const cek = document.getElementsByClassName("cek");
  //   console.log("hh");
  //   let hasil = [];
  for (const coba of cek) {
    if (coba.checked === true) {
      let kal = coba.value;
      angka -= kal;
      console.log(kal, angka);
      //   hasil.push(coba.value);
    }
  }
  //   let koma = hasil.join(",");
  //   let test = document.getElementsByClassName("hasil");
  //   test[0].innerHTML = `<span>${koma}</span>`;
  //   return koma;
  //   console.log(angka);
  return angka;
}

// btn submit
const btn = document.getElementById("submit");
btn.addEventListener("click", show);
function show() {
  let hasil = checkFunc();
  //   console.log(hasil);
  const display = document.getElementById("hasil");
  display.innerHTML = `<h1>${hasil}<h1>`;
}
