//  array in function use

function counter(arr) {
    const counts = {};
    
    arr.forEach( (car) => {
      counts[car] = (counts[car] || 0) + 1;
    });
  
    return counts;
    // console.log(counts);
    
}

const cars = ["odi", "BMW", "Rangerover", "Suzuki", "odi", "Suzuki"];
console.log(counter(cars));

  