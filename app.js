<<<<<<< HEAD

  const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
=======
var message = 'Hello Node!';

var sum = 5 + 3;

console.log(message);
console.log(sum);
>>>>>>> 6ff97069f724d479ac524fd4ff875c29df9b2878
