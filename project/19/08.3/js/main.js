
// ================= حل من عندي + قناة حمزه

//*
var txt = "Hello Hamza"


//*
var Upper = document.querySelector(".h11").innerHTML = txt.toUpperCase()

// //*
var replace = document.querySelector(".h22").innerHTML = txt.replace("o" , "YYYYYYYY");

// //*
var reverse = document.querySelector(".h33").innerHTML = txt.split("").reverse().join("")



// ===================== حل تحدي قناة ترميز

//*
var myStr = document.getElementById("title").innerHTML

//*
var Upper = myStr.toUpperCase();
// console.log(Upper);

//*
var replace  = Upper.replace("O" , "YYYYYYYY");
// console.log(replace);

//*
var reverse  = myStr.split("").reverse().join("")
// console.log(reverse);

//*
document.getElementById("result").innerHTML = ` ${Upper} === ${replace} === ${reverse}=== `
