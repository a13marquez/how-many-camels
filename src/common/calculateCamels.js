const points = {
  eyeColor: {
    blue: 5,
    green: 4,
    grey: 3,
    brown: 2
  },
  age: {
    30: 5,
    40: 4,
    60: 3,
    100: 1
  },
  height:{
    190: 5,
    180: 4,
    170: 3,
    160: 2,
    150: 1
  },
  hairColor: {
    blonde: 5,
    red: 4,
    brown: 3,
    black: 2,
    grey: 1,
  },
  hairLength: {
    long: 5,
    middle: 4,
    short: 3,
    bald: 2,
  },
  beardType: {
    full: 5,
    goatee: 4,
    moustache: 3,
    shaved: 2,
  },
  bodyType: {
    strong: 5,
    skinny: 4,
    fat: 3,
  },

}

export const calculatePoints = (boyfriend)  => {
  let camels = 0;
  for (let trait in boyfriend) {
    if(trait !== 'height' && trait !== 'age') {
      camels += points[trait][boyfriend[trait]]
    } else if(trait === 'age') {
      const agePoints = points.age;
      if (boyfriend.trait <= 30) {
        camels += agePoints[30];
      } else if (boyfriend.trait > 30 && boyfriend.trait <= 40 ) {
        camels += agePoints[40];
      } else if (boyfriend.trait > 40 && boyfriend.trait <= 60 ) {
        camels += agePoints[60];
      } else {
        camels += agePoints[100];
      }
    }  else if(trait === 'height') {
      const heightPoints = points.height;
      if (boyfriend.trait <= 150) {
        camels += heightPoints[150];
      } else if (boyfriend.trait > 150 && boyfriend.trait <= 160 ) {
        camels += heightPoints[160];
      } else if (boyfriend.trait > 160 && boyfriend.trait <= 170 ) {
        camels += heightPoints[170];
      } else if (boyfriend.trait > 170 && boyfriend.trait <= 180 ) {
        camels += heightPoints[180];
      } else {
        camels += heightPoints[190];
      }
    }
  }
  return camels;
}