// lesson-77
// ======================================

const Fun_Digital_Clock_77 = () => {
    //*
    const now_77 = new Date()

    //*
    let sec_77 = now_77.getSeconds()
    let min_77 = now_77.getMinutes()
    let hours_77 = now_77.getHours()
    let date_77 = now_77.toDateString()
    let pm_77 = "pm"

    //*
    if (hours_77 > 12) {
        //*
        hours_77 = hours_77-12
        //*
        pm_77 = "am"
    }

    //*
    if (sec_77 < 10) {
        //*
        sec_77 = `0${sec_77}`
    }

    //*
    if (min_77 < 10) {
        //*
        min_77 = `0${min_77}`
    }

    //*
    if (hours_77 < 10) {
        //*
        hours_77 = `0${hours_77}`
    }

    //*
    if (hours_77 == 0) {
        //*
        hours_77 = `12`
    }

    //*
    const clock_77 = `
        <div class="date">
            ${date_77}
        </div>

        <div class="time">
            ${hours_77} : ${min_77} : ${sec_77} ${pm_77}
        </div>
`
    //*
    const clock_container_77 = document.getElementById("clock_container_7")

    //*
    clock_container_77.innerHTML = clock_77
}

//*
setInterval( Fun_Digital_Clock_77, 1000);