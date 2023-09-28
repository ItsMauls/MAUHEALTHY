const capcay = document.querySelector('#capcay')
const targetCapcay = document.querySelector('#targetCapcay')

const chocolatePeanut = document.querySelector('#choco_peanut')
const targetPeanut = document.querySelector('#targetChocoPeanut')

const seafoodSalad = document.querySelector('#seafood_salad')
const targetSeaSalad = document.querySelector('#targetSeaSalad')

const burrito = document.querySelector('#chicken_burrito')
const targetChickenBurrito = document.querySelector('#targetChickenBurrito')

const saladBuah = document.querySelector('#salad_buah')
const targetSaladBuah = document.querySelector('#targetSaladBuah')

const oatmeal = document.querySelector('#oatmeal')
const targetOatmeal = document.querySelector('#targetOatmeal')

capcay.addEventListener('click', () => {
    targetCapcay.scrollIntoView({behavior : "smooth"})
})

chocolatePeanut.addEventListener('click', () => {
    targetPeanut.scrollIntoView({behavior : "smooth"})
})
burrito.addEventListener('click', () => {
    targetChickenBurrito.scrollIntoView({behavior : "smooth"})
})
saladBuah.addEventListener('click', () => {
    targetSaladBuah.scrollIntoView({behavior : "smooth"})
})
oatmeal.addEventListener('click', () => {
    targetOatmeal.scrollIntoView({behavior : "smooth"})
})
seafoodSalad.addEventListener('click', () => {
    targetSeaSalad.scrollIntoView({behavior : "smooth"})
})