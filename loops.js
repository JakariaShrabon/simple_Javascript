// there are many kinds of loop in javascripts
//for,for..in,for..of
//for each 


//........for loop....//

for(let i=1;i<11;i++)
{
  console.log(i);

}


//........for..in....//

const info = {
    name: "Jakaria",
    age: 23,
    city: "Dhaka",
  };
  
  for (let key in info) {
    console.log(key + ": " + info[key]);
  }
  
//........for..of....//


const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number); // Output: 1, 2, 3, 4, 5
}

//........for-each....//

const myArray = ['apple', 'banana', 'cherry'];

myArray.forEach(function(element, index, array) {
  console.log('Element:', element, 'Index:', index, 'Array:', array);
});