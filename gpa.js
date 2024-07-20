let courses = [];

        function addCourse() {
            const courseName = document.getElementById('courseName').value;
            const creditUnit = parseInt(document.getElementById('creditUnit').value);
            const grade = parseInt(document.getElementById('grade').value);

            if (courseName && !isNaN(creditUnit) && !isNaN(grade)) {
                courses.push({ name: courseName, credit: creditUnit, grade: grade });
                updateCourseList();
                clearInputs();
            } else {
                alert('Please fill all fields correctly make your steeze no reduce');
            }
        }

        function updateCourseList() {
            const courseList = document.getElementById('courses');
            courseList.innerHTML = '';
            courses.forEach((course, index) => {
                courseList.innerHTML += `
                    <div class="course">
                        ${course.name} - ${course.credit} credit(s) - Grade: ${getGradeLetter(course.grade)}
                        <button onclick="removeCourse(${index})">Remove</button>
                    </div>
                `;
            });
        }

        function removeCourse(index) {
            courses.splice(index, 1);
            updateCourseList();
        }

        function clearInputs() {
            document.getElementById('courseName').value = '';
            document.getElementById('creditUnit').value = '';
            document.getElementById('grade').value = '';
        }

        function calculateGPA() {
            if (courses.length === 0) {
                alert('Add at least one course make ogun no kee you.');
                return;
            }

            let totalQualityPoints = 0;
            let totalCredits = 0;

            courses.forEach(course => {
                totalQualityPoints += course.credit * course.grade;
                totalCredits += course.credit;
            });

            const gpa = totalQualityPoints / totalCredits;
            document.getElementById('result').innerText = `Your GPA is: ${gpa.toFixed(2)}`;
        }
    

        function getGradeLetter(grade) {
            switch(grade) {
                case 5: return 'A';
                case 4: return 'B';
                case 3: return 'C';
                case 2: return 'D';
                case 1: return 'E';
                case 0: return 'F';
                default: return 'Unknown';
            }
        }
        