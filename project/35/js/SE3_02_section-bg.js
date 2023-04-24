/* ====================================== 05
section BG تغير لون الخلفية 
#01 - 11 == 10 == 400 == 1.000
*/

// {const sectionbg = document.getElementById("sectionbg");

// const arrColors = ["#A0E7E5", "#FBE76C", "#ffafcc"];
// let i = 0;

// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection = document.querySelectorAll("section");
//     // .
//     allSection.forEach((item) => {
//         // .
//         console.log(i);
//         item.style.backgroundColor = arrColors[i];
//     });
//     // ===
//     if (i < arrColors.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }

//     // طريقة مختصرة
//     // i < arrColors.length - 1 ? i++ : i = 0
// });
// }

/* ====================================== 06
section BG = عند الضغط على زرار 
>>>>> يحدث >>>>> 
تغير الوان الخلفية بشكل عشوائي
#الطريقة الثانية#
#01 - 11 == 10 == 400 == 1.000
*/

// {const arrColors = ["#A0E7E5", "#FBE76C", "#ffafcc"];

// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection = document.querySelectorAll("section");
//     // .
//     const random = Math.floor(Math.random() * arrColors.length)
//     // .
//     allSection.forEach((item) => {
//         // .
//         item.style.backgroundColor = arrColors[random];
//     });
//     console.log(random);

// });
// }

/* ====================================== 07
section BG = عند الضغط على زرار 
>>>>> يحدث >>>>> 
تغير الوان الخلفية بشكل عشوائي
#الطريقة الثانية#
#01 - 11 == 10 == 400 == 1.000
*/

// {const random255 = () => {
//     // #الطريقة 333#
//     return Math.round(Math.random() * 255)
    
// }

// const arrColors = ["#A0E7E5", "#FBE76C", "#ffafcc"];

// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection = document.querySelectorAll("section");
//     // .
//     const rgb1 = random255()
//     const rgb2 = random255()
//     const rgb3 = random255()
//     // .
//     // #الطريقة 222#
//     // const rgb1 = Math.round(Math.random() * 255)
//     // const rgb2 = Math.round(Math.random() * 255)
//     // const rgb3 = Math.round(Math.random() * 255)
//     // .
//     allSection.forEach((item) => {
//         // .
//         item.style.backgroundColor =`rgb(  ${rgb1},${rgb2},${rgb3}) `
//         // .
//         // #الطريقة 111#
//         // `rgb(  ${Math.round(Math.random() * 255)},
//         //         ${Math.round(Math.random() * 255)},
//         //         ${Math.round(Math.random() * 255)}) `
//     });

// });
// }

/* ====================================== lesson 08
section BG = عند الضغط على زرار 
>>>>> يحدث >>>>> 
تغير الوان الخلفية بشكل عشوائي
#01 - 11 == 10 == 400 == 1.000
*/


// {sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection = document.querySelectorAll("section");
//     // .
//     const randomHEX_888 = ` #${ Math.random().toString(16).slice(2, 8) } `
//     // .
//     allSection.forEach((item) => {
//         // .
//         item.style.backgroundColor = randomHEX_888
//     });

// });

// // 222222222 return
// const randomHEX_888_222 = () => {
//     return ` #${ Math.random().toString(16).slice(2, 8) } `
// }
// // .
// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection = document.querySelectorAll("section");
//     // .
//     const hex_8_2 = randomHEX_888_222()
//     // .
//     allSection.forEach((item) => {
//         // .
//         item.style.backgroundColor = hex_8_2
//     });
// // .
// });
// }


/* ====================================== lesson-02 video-08 / 03:54:52
*/

// {const randomHEX_888_111 = () => {
//     return ` #${ Math.random().toString(16).slice(2, 8) } `
// }
// // .
// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection = document.querySelectorAll("section");
//     // .
//     const hex_8_1 = randomHEX_888_111()
//     // .
//     for (let i = 0; i < allSection.length; i++) {
//         //-
//         const item = allSection[i];
//         //-
//         item.style.backgroundColor = hex_8_1
//     }
// // .
// });
// }

/* ====================================== lesson-02 video-09 / 04:08:10
*/

// 09_1
// const randomHEX_09 = () => {
//     return ` #${ Math.random().toString(16).slice(2, 8) } `
// }
// // .
// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection_09 = document.querySelectorAll("section");
//     // .
//     const hex_09 = randomHEX_09()
//     // .
//     for (const i in allSection_09) {
//         //-
//         const item = allSection_09[i]
//         //-
//         item.style.backgroundColor = hex_09
//         //-
//     }
// // .
// });

// 09_2
// const randomHEX_09_2 = () => {
//     return ` #${ Math.random().toString(16).slice(2, 8) } `
// }
// // .
// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection_09_2 = document.querySelectorAll("section");
//     // .
//     const hex_09_2 = randomHEX_09_2()
//     // .
//     for (const i of allSection_09_2) {
//         //-
//         const item = i
//         //-
//         item.style.backgroundColor = hex_09_2
//         //-
//     }
// // .
// });

// 09_3
// const randomHEX_09_3 = () => {
//     return ` #${ Math.random().toString(16).slice(2, 8) } `
// }
// // .
// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection_09_3 = document.querySelectorAll("section");
//     // .
//     const hex_09_3 = randomHEX_09_3()
//     // -
//     let i = 0
//     //-
//     while (i < allSection_09_3.length) {
//         //-
//         const item = allSection_09_3[i]
//         //-
//         item.style.backgroundColor = hex_09_3
//         //-
//         i++
//     }
// // .
// });

// 09_4
// const randomHEX_09_4 = () => {
//     return ` #${ Math.random().toString(16).slice(2, 8) } `
// }
// // .
// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection_09_4 = document.querySelectorAll("section");
//     // .
//     const hex_09_4 = randomHEX_09_4()
//     // -
//     let i = 0
//     //-
//     do {
//         //-
//         const item = allSection_09_4[i]
//         //-
//         item.style.backgroundColor = hex_09_4
//         //-
//         i++
//         //-
//     } while (i < allSection_09_4.length);
//     //-
// // .
// });

// 09_5
// const randomHEX_09_5 = () => {
//     return ` #${ Math.random().toString(16).slice(2, 8) } `
// }
// // .
// sectionbg.addEventListener("click", (eo) => {
//     // .
//     const allSection_09_5 = document.querySelectorAll("section");
//     // .
//     const hex_09_5 = randomHEX_09_5()
//     // -
//     let i = 0
//     //-
//     for (;;) {
//         //-
//         if (i < allSection_09_5.length) {
//             //-
//             const item = allSection_09_5[i]
//             //-
//             item.style.backgroundColor = hex_09_5
//             //-
//             i++
//             //-
//         } else {break}
//         //-
//     }
// // .
// });
