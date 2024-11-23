const justFood = (people) => `Catering od Just Food pro ${people} lidí za ${people * 300} Kč.`;

const yourMama = (people) => `Catering od Your Mama pro ${people} lidí za ${people * 500} Kč.`;

const flavorHaven = (people) => `Catering od Flavour Haven pro ${people} lidí za ${people * 1000} Kč.`;

const createEvent = (eventName, people, cateringFunction) => {
    const cateringMessage = cateringFunction(people);
    return `Událost ${eventName} s ${cateringMessage}`;
};

console.log(justFood(50)); 
console.log(yourMama(75));
console.log(flavorHaven(100));

console.log(createEvent("Inaugurace prezidenta", 300, flavorHaven));
