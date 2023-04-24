let task_s_60 = [
    {
        "title": "قراءة كتاب",
        "date": "15/10/2030",
        "isDone": true
    },
    {
        "title": "انهاء المشروع",
        "date": "15/10/2030",
        "isDone": false
    },
    {
        "title": "انهاء كورس جافا سكريبت",
        "date": "15/10/2030",
        "isDone": false
    },
    {
        "title": "حل التحدي",
        "date": "15/10/2040",
        "isDone": true
    }
]

function Get__Storage__Task__60() {
    let retrieved__Task__60 = JSON.parse(localStorage.getItem("Kay_tasks_60"))
    task_s_60 = retrieved__Task__60 ?? []
}
Get__Storage__Task__60()

function fill_Task_60() {
    document.getElementById("tasks").innerHTML = ""
    let index_60 = 0
    for(task_60 of task_s_60) {
        let content = ` 
            <div class="task_child ${task_60.isDone ? "done" : ""} ">
                <div class="task__info">
                    <h2> ${task_60.title} </h2>
                    <div class="task__info__Date">
                        <span class="material-symbols-outlined"> calendar_month </span>
                        ${task_60.date}
                    </div>
                </div>
                <div class="task__actions">
                    <button onclick="Delete_Task__60(${index_60})" class="circular">
                        <span class="material-symbols-outlined"> delete </span>
                    </button>
                    ${task_60.isDone ? `
                        <button onclick="Done_Task__60(${index_60})" class="circular" style="background-color: rgb(118, 0, 101);">
                            <span class="material-symbols-outlined"> cancel </span>
                        </button>
                    ` : `
                        <button onclick="Done_Task__60(${index_60})" class="circular">
                            <span class="material-symbols-outlined"> done </span>
                        </button>
                    `}
                    <button onclick="Edit_Task__60(${index_60})" class="circular">
                        <span class="material-symbols-outlined"> edit </span>
                    </button>
                </div>
            </div>
            `
        document.getElementById("tasks").innerHTML += content
        index_60++
    }
}
fill_Task_60()

document.getElementById("add_button").addEventListener("click", function () {
    let now_60 = new Date()
    let date_60 = now_60.getDate() + "/" + (now_60.getMonth()+1) + "/" + now_60.getFullYear() 
    + " | " + now_60.getHours() + ":" + now_60.getMinutes()
    let task_Name_60 = prompt("الرجاء ادخال عنوان المهمة")
    let task_Object_60 = {
        "title": task_Name_60,
        "date": date_60,
        "isDone": false
    }
    task_s_60.push(task_Object_60)
    Storage__Task__60()
    fill_Task_60()
})

function Delete_Task__60(index_60) {
    let fff_60 = task_s_60[index_60]
    let is_Confirm_60 = confirm("هل انت متاكد من حذف : " + fff_60.title)
    if (is_Confirm_60) {
        task_s_60.splice(index_60, 1)
        Storage__Task__60()
        fill_Task_60()
    }
}

function Edit_Task__60(index_60) {
    let fff_60 = task_s_60[index_60]
    let New_Task_title_60 = prompt("الرجاء تحديد عنوان المهمة الجديدة", fff_60.title)
    fff_60.title = New_Task_title_60
    Storage__Task__60()
    fill_Task_60()
}

function Done_Task__60(index_60) {
    let fff_60 = task_s_60[index_60]
    fff_60.isDone = !fff_60.isDone
    Storage__Task__60()
    fill_Task_60()
}

function Storage__Task__60() {
    let task_string = JSON.stringify(task_s_60)
    localStorage.setItem("Kay_tasks_60", task_string)
}
