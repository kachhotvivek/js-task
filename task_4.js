// create a date name function
function date() {
    // The current time in the format HH:MM:SS.
    const newDate = new Date();
    const hours = String(newDate.getHours());
    const minutes = String(newDate.getMinutes());
    const seconds = String(newDate.getSeconds());
    
        console.log(`${hours}:${minutes}:${seconds}`);

    // The current date in the format DD-MM-YYYY.
    const date  = String(newDate.getDate());
    const month  = String(newDate.getMonth() + 1);
    const year  = String(newDate.getFullYear());

    console.log(`${date}-${month}-${year}`);

    // The full current date in a customized format using toLocaleDateString() with the options
    // { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } for your locale.
    console.log(newDate.toLocaleDateString('default', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }));
}

date();