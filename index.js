// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); //returns the number of blocks given a value
  }
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue); 
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(someValue) * 264; // 1 block = 264 feet
  }
  function distanceTravelledInFeet(start, destination) {
    
    return Math.abs(destination - start) * 264; //returns the number of feet traveled
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free sample for distances less than or equal to 400 feet
      } else if (distance > 400 && distance <= 2000) {
        return  (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
      } else if (distance > 2000 && distance <=2500) {
        return 25; // Flat fare for distances between 2000 and 2500 feet
      } else if (distance => 2500) {
        return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
      }
    
  }
  