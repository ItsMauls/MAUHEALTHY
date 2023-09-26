function generateUrl() {
  let listNews = [
    `https://www.liputan6.com/citizen6/read/5399016/6-manfaat-telur-yang-dapat-kamu-peroleh-bila-rutin-mengonsumsinya`,
    `https://www.liputan6.com/lifestyle/read/5352873/8-perubahan-gaya-hidup-yang-dapat-membantu-umur-lebih-panjang`,
    `https://www.liputan6.com/hot/read/5310304/14-makanan-yang-dapat-tingkatkan-daya-tahan-tubuh-anak-tetap-sehat-saat-pandemi`,
    `https://www.liputan6.com/hot/read/5309233/cara-membuat-singkong-keju-yang-renyah-dan-merekah-perhatikan-tips-mudahnya`,
    `https://www.liputan6.com/hot/read/5309053/10-menu-makanan-sehat-dan-nikmat-intip-resep-membuatnya`
  ]

  const element = document.getElementById('article')

  const newsRandom = Math.floor(Math.random() * listNews.length)

  element.setAttribute("href", listNews[newsRandom])
}