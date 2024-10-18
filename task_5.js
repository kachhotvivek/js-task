function getTopStudentsByCity() {
    // Filter students who scored more than 75 marks
    console.log(filteredStudents = students.filter(student => student.marks > 75));
   
    
    // Sort the filtered students by their names in alphabetical order
    console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
    

    // Extract the names of students from the specified city
    console.log( students
        .filter(student => student.city.toLowerCase() === city.toLowerCase())
        .map(student => student.name));
    
    
}

// Example usage
const students = [
    { name: 'vivek', marks: 85, city: 'Gir somnath' },
    { name: 'devansh', marks: 92, city: 'Dwarka' },
    { name: 'ritik', marks: 78, city: 'veravl' },
    { name: 'manthan', marks: 88, city: 'gadhinagar' },
    { name: 'kuldeep', marks: 95, city: 'rajkot' },
    { name: 'vasu', marks: 65, city: 'ahemdabd' },
    { name: 'daxesh', marks: 74, city: 'vijapur' }
];

const city = 'Gir somnath';
const topStudentsInCity = getTopStudentsByCity();
console.log(topStudentsInCity);
