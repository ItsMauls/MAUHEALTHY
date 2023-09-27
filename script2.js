// const { document } = require("postcss")

function displayData() {
    const nama = document.getElementById("namaUser")
    const tinggi = document.getElementById("tinggiBadan")
    const umur = document.getElementById('umur')
    const kaloriHarian = document.getElementById('kaloriHarian')
    const angkaBMI = document.getElementById('angkaBMI')
    const status = document.getElementById('status')
    const berat = document.getElementById('beratBadan')

    const gender = localStorage.getItem('gender').toLowerCase()
    const dataUmur = localStorage.getItem("age")
    const dataTinggi = localStorage.getItem("height")
    const dataBerat = localStorage.getItem("weight")
    
    const bmi = dataBerat / (dataTinggi / 100) 

    if(bmi < 18.5) {
        status.innerText = 'Kamu Kekurangan Berat Badan'
    } else if(bmi >=18.5 && bmi <= 24.9) {
        status.innerText = 'Berat Badan Kamu Ideal Nih'
    } else if(bmi >=25 && bmi <= 29.9) {
        status.innerText = 'Kamu Kelebihan Berat Badan'
    } else {
        status.innerHTML = 'Kamu Kegemukan <br><span class = "text-lg"> Jika kamu ingin menaikkan berat badan! kamu membutuhkan 1755 kkal/hari.Jika hari ini kamu hanya rebahan, maka kebutuhan kalori kamu adalah 1064 kkal/hari</span>'
    }

//  BMR untuk Pria: 66.5 + (13,7 x berat badan) + (5 x tinggi badan) – (6,8 x usia)
// BMR untuk Wanita: 655 + (9,6 x berat badan) + (1,8 x tinggi badan) – (4,7 x usia)
    if(gender === 'pria' || gender === 'cowok' || gender === 'cowo' || gender === 'laki') {
    const rumus = 66.5 + (13.7 * dataBerat) + (5 * dataTinggi) - (6.8 * dataUmur)
    
    kaloriHarian.innerText = Number(rumus).toFixed()
    } else if(gender === 'cewek' || gender === 'wanita' || gender === 'cewe' || gender === 'perempuan') {
        const rumus = 655 + (9.6 * dataBerat) + (1.8 * dataTinggi) - (4.7 * dataUmur)
        kaloriHarian.innerText = Number(rumus)
    } else {
        kaloriHarian.innerText = 'Kelamin kamu apa sih'
    }

    nama.innerText = localStorage.getItem("username")
    umur.innerText = dataUmur
    tinggi.innerText = dataTinggi + 'cm'
    angkaBMI.innerText = bmi.toFixed(1)
    berat.innerText = dataBerat + 'kg'
}

displayData()