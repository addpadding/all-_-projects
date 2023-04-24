

let students_45_2 = [
    //*

    //*
    {
        fristName: "Khalid",
        lastName: "Omar",
        age: 15,
        year: "2000",

        //*
        printFulName_45_2: function () {
            //*

            //*
            console.log(this.fristName + " " + this.lastName);
        }
    },

    //*
    {
        fristName: "Ahmed",
        lastName: "Omar",
        age: 15,
        year: "2002",

        //*
        printFulName_45_2: function () {
            //*

            //*
            console.log(this.fristName + " " + this.lastName);
        }
    },

    //*
    {
        fristName: "Sami",
        lastName: "Omar",
        age: 15,
        year: "2010",

        //*
        printFulName_45_2: function () {
            //*

            //*
            console.log(this.fristName + " " + this.lastName);
        }
    },

    //*
    {
        fristName: "Yarob",
        lastName: "Omar",
        age: 15,
        year: "2010",

        //*
        printFulName_45_2: function () {
            //*

            //*
            console.log(this.fristName + " " + this.lastName);
        }
    },
]

for (st of students_45_2) {
    //*

    //*
    // console.log(st.fristName, st.lastName, st.age, st.year);

    //*
    // document.getElementById("students_table").innerHTML += ` <tr> <td> ${st.fristName} </td> </td> `

    //*
    let content =  ` <tr> 
                            <td> ${st.fristName} </td> 
                            <td> ${st.age} </td> 
                            <td> ${st.year} </td> 
                    </tr> `

    //*
    document.getElementById("students_table").innerHTML += content
}