var a = document.getElementById('shape')

function circle(){
    console.log(a)
    a.style.borderRadius = "50%"
    a.style.width = "100px"
    a.style.clipPath = "none"
}

function square(){
    console.log(a)
    a.style.borderRadius = "0%"
    a.style.width = "100px"
    a.style.clipPath = "none"
}

function rectangle(){
    console.log(a)
    a.style.width = "300px"
    a.style.borderRadius = "0%"
    a.style.clipPath = "none"
}

function triangle(){
    console.log(a)
    a.style.borderRadius = "0%"
    a.style.width = "100px"
    a.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"
}