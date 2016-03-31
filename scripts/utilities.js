// needs the array, and needs to know what to do with each item in the array

function forEach(array, callback) {
    // get the array 
    
    // loop through the array, and call the callback on each item in the array
    for (i = 0; i < array.length; i++){
        callback(array[i]);
    };
};