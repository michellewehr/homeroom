const table = document.querySelector('.gradeBook');
const gradeBookThead = document.querySelector('.gradeBookThead');
const tableBody = document.querySelector('.tableBody');

fetch('/api/students/grades/1')
    .then(res => {
        return res.json();
    })
    .then(res => {
        const gradeBookLast = document.createElement('th');
        gradeBookLast.textContent = 'Last Name';
        gradeBookLast.classList = 'subjGradeBookCol col-name';
        gradeBookThead.appendChild(gradeBookLast);
        const gradeBookFirst = document.createElement('th');
        gradeBookFirst.textContent = 'First Name';
        gradeBookFirst.classList = 'subjGradeBookCol col-name';
        gradeBookThead.appendChild(gradeBookFirst);


        let assignmentNames = [];
        for (let i = 0; i < res.length; i++) {
            let arrayOfAssign = res[i].grades;
            if (arrayOfAssign) {
                for (let i = 0; i < arrayOfAssign.length; i++) {
                    let assignment = arrayOfAssign[i].assignment.assignment_name;
                    assignmentNames.push(assignment);
                }
            }
        }
        let uniqueAssignNames = [...new Set(assignmentNames)];

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




        for (let i = 0; i < res.length; i++) {
            const studRow = document.createElement('tr');
            tableBody.appendChild(studRow);
            const studLastName = res[i].last_name;
            const studFirstName = res[i].first_name;
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
            let student = res[i];
            for (let i = 0; i < student.grades.length; i++) {
                let number_grade = student.grades[i].number_grade;
                gradeArr.push(number_grade);
                let assignmentHeaders = document.getElementsByTagName('td');
                let studAssignName = student.grades[i].assignment.assignment_name;

                for (let i = 0; i < assignmentHeaders.length; i++) {
                    if (studAssignName === assignmentHeaders[i].textContent) {
                        const assignHeaderIndex = assignmentHeaders[i].cellIndex;
                        studRow.cells[assignHeaderIndex].textContent = number_grade;
                    }



                }
            }
            let sumOfGrades = gradeArr.reduce((a, b) => a + b, 0);
            let numberOfFinalGrade = sumOfGrades / uniqueAssignNames.length;
            let finalGradeTwoDecimals = parseFloat(numberOfFinalGrade).toFixed(2);
            let finalGradeIndex = studentFinalGrade.cellIndex;
            if (isNaN(finalGradeTwoDecimals)) {
                studRow.cells[finalGradeIndex].textContent = ' ';
            } else {
                studRow.cells[finalGradeIndex].textContent = finalGradeTwoDecimals;
            }
        }
    })

    document.querySelector('.backBtn').addEventListener('click', () => {
        window.history.back();
    })