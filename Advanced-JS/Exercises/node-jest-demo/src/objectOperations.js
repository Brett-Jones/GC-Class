
function getProperty(obj, key){
    return obj[key];
}

const starWars = {jedi: "Count Dooku", allegiance: "jedi", likes: "curved lightsabers"}
updateProperty(starWars, "allegiance", "sith");

console.log(updateProperty(starWars, "allegiance", "sith"));

//code above updates the value of allegiance

function updateProperty(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteProperty(obj, key){
    delete obj[key];
    return obj;
}


module.export = {getProperty, updateProperty, deleteProperty};




