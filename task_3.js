// create in function 

function user() {
    const fullname = "   kachhot vivek   ";
    const score = "1818";
    
    // Remove any leading or trailing spaces from the full name.
    const trimmedName = fullname.trim();

    // Convert the name to all uppercase letters.
    const uppername = trimmedName.toUpperCase();

    // Convert the score into a string with two decimal places.
    const newscour =  Number(score);
    const formetedscor = newscour.toFixed(2);

        console.log(`Hello ${uppername},  your score is ${formetedscor}  `);

}
user();
