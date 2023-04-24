// lesson-55
// ======================================

// 55_01
// const id_button_harts_55_01 = document.getElementById("button_harts")
// const id_Container_harts_55_01 = document.getElementById("Container_harts")

// id_button_harts_55_01.addEventListener("click", (eo) => {
//     //-
//     const parent_Hart_55_01 = document.createElement("div")
//     //-
//     id_Container_harts_55_01.append(parent_Hart_55_01)
//     //-
//     const createHart_55_01 = setInterval(() => {
//         //-
//         const hart_Array_55_01 = document.createElement("div")
//         //-
//         hart_Array_55_01.classList.add("hart_Css")
//         //-
//         hart_Array_55_01.innerHTML = "&#129505;"
//         //-
//         hart_Array_55_01.style.left = ` ${Math.random() * 100}% `
//         //-
//         hart_Array_55_01.style.animationDuration = ` ${ (Math.random() + 0.5) * 1.5}s `
//         //-
//         // ===================================================
//         //-
//         const hart_Array_55_02 = document.createElement("div")
//         //-
//         hart_Array_55_02.classList.add("hart_Css")
//         //-
//         hart_Array_55_02.innerHTML = "&#128156;"
//         //-
//         hart_Array_55_02.style.left = ` ${Math.random() * 100}% `
//         //-
//         hart_Array_55_02.style.animationDuration = ` ${ (Math.random() + 0.5) * 1.5}s `
//         //-
//         // ===================================================
//         //-
//         parent_Hart_55_01.append(hart_Array_55_01)
//         parent_Hart_55_01.append(hart_Array_55_02)
//         //-
//     }, 50);
//     //-
//     setTimeout(() => {
//         //*
//         clearInterval(createHart_55_01)
//         //-
//     }, 2000);
//     //-
//     setTimeout(() => {
//         parent_Hart_55_01.remove()
//     }, 5000);
// })

// 55_02
const id_button_harts_55_01 = document.getElementById("button_harts")

const Fun_Random_Hart_55_02 = () => {
    //*
    const id_Container_harts_55_01 = document.getElementById("Container_harts")
    //-
    const parent_Hart_55_01 = document.createElement("div")
    //-
    id_Container_harts_55_01.append(parent_Hart_55_01)
    //-
    const createHart_55_01 = setInterval(() => {
        //-
        const hart_Array_55_01 = document.createElement("div")
        //-
        hart_Array_55_01.classList.add("hart_Css")
        //-
        hart_Array_55_01.innerHTML = "&#129505;"
        //-
        hart_Array_55_01.style.left = ` ${Math.random() * 100}% `
        //-
        hart_Array_55_01.style.animationDuration = ` ${ (Math.random() + 0.5) * 1.5}s `
        //-
        // ===================================================
        //-
        const hart_Array_55_02 = document.createElement("div")
        //-
        hart_Array_55_02.classList.add("hart_Css")
        //-
        hart_Array_55_02.innerHTML = "&#128156;"
        //-
        hart_Array_55_02.style.left = ` ${Math.random() * 100}% `
        //-
        hart_Array_55_02.style.animationDuration = ` ${ (Math.random() + 0.5) * 1.5}s `
        //-
        // ===================================================
        //-
        parent_Hart_55_01.append(hart_Array_55_01)
        parent_Hart_55_01.append(hart_Array_55_02)
        //-
    }, 50);
    //-
    setTimeout(() => {
        //*
        clearInterval(createHart_55_01)
        //-
    }, 2000);
    //-
    setTimeout(() => {
        parent_Hart_55_01.remove()
    }, 5000);
}


id_button_harts_55_01.addEventListener("click", (eo) => {
    //*
    Fun_Random_Hart_55_02()
})
