
export interface Mountain {
    name: string,
    height: number
}

const mountains: Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];

export const findNameOfTallestMountain = (mountains: Mountain[]) => {
    // Dummy values for the initialized object for comparison , this also acts as a
    // mechanism to return the empty string for name per the requirements because it
    // will never be reassigned
    let tallestMt: Mountain = {height: 0, name: ""};

    // Loop over your mountains array and reassign tallestMt if the current
    // iteration's mountain height is taller than what is currently being stored
    // in the tallestMt variable
    // It is of type mountain because it is the singular version of what is in your array
    mountains.forEach((mountain: Mountain) => {
        if(mountain.height > tallestMt.height){
            tallestMt = mountain;
        }
    })
    
    console.log(tallestMt);
    // Return only the name property from the mountain object
    return tallestMt.name;
}

findNameOfTallestMountain(mountains);
