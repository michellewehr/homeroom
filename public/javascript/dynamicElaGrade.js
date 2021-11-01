const table = document.querySelector('.gradeBook');
const gradeBookThead = document.querySelector('.gradeBookThead');
const tableBody = document.querySelector('.tableBody');

fetch('/api/students/grades/1')
.then(response => {
    return response.json();
})
.then(function(response) {
    // console.log(response)
    const gradeBookLast = document.createElement('th');
    gradeBookLast.textContent = 'Last Name';
    gradeBookLast.classList = 'subjGradeBookCol col-name';
    gradeBookThead.appendChild(gradeBookLast);
    const gradeBookFirst = document.createElement('th');
    gradeBookFirst.textContent = 'First Name';
    gradeBookFirst.classList = 'subjGradeBookCol col-name';
    gradeBookThead.appendChild(gradeBookFirst);
   

    let assNames = [];
    for (let i = 0; i < response.length; i++) {
        let arrayOfAssign = response[i].grades;
        if(arrayOfAssign){
        for (let i = 0; i < arrayOfAssign.length; i++ ){
            let assignment = arrayOfAssign[i].assignment.assignment_name;
            assNames.push(assignment);
        }
    }
    }
    let uniqueAssignNames = [...new Set(assNames)];
    
    uniqueAssignNames.forEach(uniqueAssignName => {
        const assignTH = document.createElement('td');
        assignTH.classList = 'assignmentheader'
        gradeBookThead.appendChild(assignTH);
        assignTH.classList = 'assessGradeBookCol col-name'
        assignTH.textContent = uniqueAssignName;
    })

        const finalGradeCol = document.createElement('th');
        finalGradeCol.textContent = 'Final Grade';
        finalGradeCol.classList = 'col-name finalGradeCol';
        gradeBookThead.appendChild(finalGradeCol);
        
    


        for (let i = 0; i < response.length; i++) {
            const studRow = document.createElement('tr');
            tableBody.appendChild(studRow);
            const studLastName = response[i].last_name;
            const studFirstName = response[i].first_name;
            const firstTD = document.createElement('td');
            firstTD.textContent = studFirstName;
            const lastTD = document.createElement('td');
            lastTD.textContent = studLastName;
            studRow.appendChild(lastTD);
            studRow.appendChild(firstTD);

            uniqueAssignNames.forEach(name => {
                const cellBlock = document.createElement('td');
                studRow.appendChild(cellBlock);
            })

            const studentFinalGrade = document.createElement('td');
            studRow.appendChild(studentFinalGrade);

            let gradeArr = [];
            let student = response[i];
            for(let i =0; i < student.grades.length; i++) {
                console.log(student.grades[i].assignment.assignment_name);
                let number_grade = student.grades[i].number_grade;
                gradeArr.push(number_grade);
                let assignmentHeaders = document.getElementsByTagName('td');
                let studAssignName = student.grades[i].assignment.assignment_name;

                for(let i = 0; i < assignmentHeaders.length; i++) {
                    // console.log(assignmentHeaders[i].textContent);
                    if(studAssignName === assignmentHeaders[i].textContent) {
                        console.log(assignmentHeaders[i].textContent);
                        const assignHeaderIndex = assignmentHeaders[i].cellIndex;
                        console.log(assignHeaderIndex);
                        // console.log(studRow.cells.length);
                        studRow.cells[assignHeaderIndex].textContent = number_grade;
                    }
                    
                    

            }
        }
        console.log(gradeArr);
        let sumOfGrades = gradeArr.reduce((a, b) => a + b, 0);
        console.log(sumOfGrades);
        let numberOfFinalGrade = sumOfGrades / uniqueAssignNames.length;
        console.log(numberOfFinalGrade);
        let finalGradeTwoDecimals = parseFloat(numberOfFinalGrade).toFixed(2);
        let finalGradeIndex = studentFinalGrade.cellIndex;
        console.log(finalGradeIndex);
        if(isNaN(finalGradeTwoDecimals)){
            studRow.cells[finalGradeIndex].textContent = ' ';
        } else{
            studRow.cells[finalGradeIndex].textContent = finalGradeTwoDecimals;
        }
    }
    })






//works
// alert(table.rows.length);
// alert(table.rows[0].cells.length);
// alert(table.rows[0].cells[3].textContent);
// .then(() => {
//  
//     }
//     })
