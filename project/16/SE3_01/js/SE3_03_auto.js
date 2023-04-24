
// level-03 lesson-33 video 01
// ====================================== 3-01

// 33_01
// ==============
// const website_33_01 = document.getElementById("website")
// //-
// const testFun_33_01 = () => {
//     //-
//     website_33_01.style.color = "red"
//     //-
// }
// testFun_33_01()

// 33_02
// ==============
// const website_33_02 = document.getElementById("website")
// //-
// const testFun_33_02 = () => {
//     //-
//     website_33_02.style.color = "red"
//     //-
// }

// setTimeout( testFun_33_02, 3000);

// 33_03
// ==============
// const website_33_03 = document.getElementById("website")
// //-
// let i = 1
// //-
// const testFun_33_03 = () => {
//     //-
//     website_33_03.innerText = i
//     //-
//     i++
//     //-
// }
// testFun_33_03()

// 33_04
// ==============
// const website_33_04 = document.getElementById("website")
// const section_33_04 = document.getElementById("sec")
// //-
// let i = 1
// //-
// const testFun_33_04 = () => {
//     //-
//     website_33_04.innerText = i
//     //-
//     i++
//     //-
// }
// testFun_33_04()

// const stopFun = setInterval(testFun_33_04  , 1000);


// section_33_04.addEventListener("click", (eo) => {
//     //-
//     clearInterval(stopFun)
    
// })

// level-03 lesson-3 video 02
// ====================================== 3-22

// 3_22_01
// const id_website_3_22_01 = document.getElementById("website")

// let i = 1

// const Fun_autoWrite_3_22_01 = () => {
//     //-
//     const title_3_22_01 = "Courses4Arab"
//     //-
//     id_website_3_22_01.innerText = title_3_22_01.slice(0, i)
//     //-
//     i++
//     //- 
//     if (title_3_22_01.length < i) {
//         //-
//         i = 1
//         // clearInterval(stopAuto_3_22_01)
//     }
// }
// const stopAuto_3_22_01 = setInterval( Fun_autoWrite_3_22_01, 300);

// 3_22_02
// const id_website_3_22_02 = document.getElementById("website")

// let i = 1

// const stopAuto_3_22_02 = setInterval( 
    
//     () => {
//         //-
//         const title_3_22_02 = "Courses4Arab"
//         //-
//         id_website_3_22_02.innerText = title_3_22_02.slice(0, i)
//         //-
//         i++
//         //- 
//         if (title_3_22_02.length < i) {
//             //-
//             // i = 1
//             //-
//             clearInterval(stopAuto_3_22_02)
//             //-
//         }
//         //-
//     }
//     //-
//     , 300);
