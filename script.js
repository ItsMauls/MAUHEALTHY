

function submit (){
    let username = document.getElementById("username")
    let height = document.getElementById("height")
    let weight = document.getElementById("weight")
    let age = document.getElementById("age")
    let gender = document.getElementById("gender")
    

    localStorage.setItem("username", username.value)
    localStorage.setItem("height", height.value)
    localStorage.setItem("weight", weight.value)
    localStorage.setItem("age", age.value)
    localStorage.setItem("gender", gender.value)

    window.location.href = "result.html"
}
