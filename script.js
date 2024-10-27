console.log("====================prolem 3 alab308-3-1=================");
let data =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// Loop through characters in string
// Loop through characters in string
let cell = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cellNum = 1;
// For each character
for (let i = 0; i < data.length; i++) {
  let char = data[i];

  if (char == "," || char == "\n") {
    switch (cellNum) {
      case 1:
        cell1 = cell;
        break;
      case 2:
        cell2 = cell;
        break;
      case 3:
        cell3 = cell;
        break;
      case 4:
        cell4 = cell;
        break;
    }
    if (cellNum == 4) {
      cellNum = 1;
    } else {
      cellNum += 1;
    }
    cell = "";
  } else {
    cell += char;
  }
  if (char == "\n") {
    console.log(cell1, cell2, cell3, cell4);
    cell = "";
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  }
}

console.log("================alab-308-4-1===================");
const CSV =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// split the file into rows each time we encoutes \n and then split the rows into cells each time we encounter a comma
const rows = CSV.split("\n");
const header = rows[0].split(","); //creates the header / obj keys
// console.log(rows);
// const cells = [];
// let row = [];
//the array
const array = [];
let rowIndex = 1;

//===================part 3/4 ===================
let d = 0;
while (d < header.length) {
  header[d] = header[d].toLowerCase();
  d++;
}

// row spliter
while (rowIndex < rows.length) {
  const currentRow = rows[rowIndex].split(",");
  // console.log(currentRow);
  const spot = {}; //create an object for my rox
  let headerIndex = 0; // counter, to assign correct info to each header
  while (headerIndex < header.length) {
    spot[header[headerIndex]] = currentRow[headerIndex]; // adds each item to appropriate header(key) for a row
    headerIndex++;
  }
  array.push(spot); // adds the object to the array
  rowIndex++;
}
console.log(array);
console.log('======================part 4====================');

const removeEnd = array.pop();
// console.log(array);
const insertIndex1={ id:'48', name: 'Barry', occupation: 'Runner', age: '25'};
array.splice(1, 0, insertIndex1);
const insertLast = { id: '7', name: 'bilbo', occupation: 'none', age: '111'};
array.push(insertLast)

console.log('=================calculating the age====================');

let totalAge = 0;
let ageCount = 0;

for (let i = 0; i < array.length; i++){
  totalAge += Number(array[i].age); // converts the string into a number and adds the value to totalAge
  ageCount++
} 
let avg = totalAge/ageCount;
console.log(Math.floor(avg)); // calculates the average age without the decimal 50

console.log('=================part 5====================');

// Extract the headers dand joing them (',') delimeter
const cracker = Object.keys(array[0]).join(',');
console.log(cracker);

// create rows arrays by turning all the data into strings
const phone = array.map(spot => Object.values(spot).join(','));
console.log(phone);

const mojodojo = [cracker, ...phone].join('\\n');
console.log(mojodojo);



// simplest join but does not add '\n'
// const string = rows.join(',')
// console.log(string);


// Yoon example using foreach
// let bigArray = [];
// let arr = data.split('\n');

// arr.forEach ((string) => {
//   bigArray.push(string.split(','))// add to array
// })
// console.log(bigArray);
//using while
// let index = 0;
// while(index < arr.length){
//   bigArray.push(arr[index].split(',')) // add to array
//   index++
// }
// console.log(bigArray);

// for (const row of rows) {
//   // console.log(row);
//   const rowIndex = row.split(",");
//   console.log(rowIndex);
// }
// for (w = 0; w <= row.length; w++) {
//   console.log(row[w], ":");
//   w++;
//   const obj = {};
//   let headerIndex = 0;
//   while (headerIndex < rowTndex) {
//     odj[headers];
//     // for (r=1; r=<rows.length; r++){
//   }
// }

// let words = cells
// console.log(cells);

// const testObj = {};

// testObj.property1 = "hello1";

// let myString = "property2";
// console.log(myString);
// testObj[`${myString}`] = "hello2";
// console.log(testObj[`${myString}`]);

// for (i=0; i<rows.length; i++) {
//   break;

// }
// console.log(CSV);


 /* Part 1: Refactoring Old Code */

/*
For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs.
 Now that you have knowledge of arrays and objects, how would you change your approach to this problem? 
 */

//  const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26"
//  // split the file into rows each time we encoutes \n and then split the rows into cells each time we encounter a comma
//  const rows = CSV.split("\n");
//  let cellCount = 0;
//  for (const  row of rows) {
//      const cells = row.split(","); 
//      console.log(cells);
//      cellCount = cells.length;
//  } 
 
 // Part 2: Expanding Functionality
 
 /* Begin with the following task:
 Declare a variable that stores the number of columns in each row of data within the CSV.
 Instead of hard-coding four columns per row, expand your code to accept any number of columns.
 This should be calculated dynamically based on the first row of data.
 For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row.
 You can safely assume that all rows that follow will contain the same number of entries per row. */
 
//  console.log(cellCount);
 
 /* Store your results in a two-dimensional array.
 Each row should be its own array, with individual entries for each column.
 Each row should be stored in a parent array, with the heading row located at index 0.
 Cache this two-dimensional array in a variable for later use. */
 
//  const dimArray = [];
//  for (const row of rows) {
//      const cells = row.split(",");
//      dimArray.push(cells);
//  }
//  console.log(dimArray);
 
 //Part 3: Transforming Data
 
 /* Implement the following:
 For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
 Convert these keys to all lowercase letters for consistency.
 Store these objects in an array, in the order that they were originally listed.
 Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself. */
 
//  const objectsArray = [];   // this is the array that will store the objects
//  const headings = dimArray[0];
//  for (let i = 1; i < dimArray.length; i++) {
//      const obj = {};
//      for (let j = 0; j < dimArray[i].length; j++) {
//          const key = headings[j].toLowerCase();
//          obj[key] = dimArray[i][j];
//      }
//      objectsArray.push(obj);
//  }console.log(objectsArray);
 
 //  Part 4: Sorting and Manipulatiog Data
 
 /* Using array methods, accomplish the following tasks, in order upon the result of Part 3:
 
 
 Add the following object to the end of the array:
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  */
 
 //Remove the last element from the sorted array.
//  objectsArray.pop();
//  console.log(objectsArray);
 //Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }
//  objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
//  console.log(objectsArray);
 //Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }
//  objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
//  console.log(objectsArray);
 
 /* Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
 This calculation should be accomplished using a loop. */
 // Calculate the average age of the group
//  let avgAge = 0;
//  let total = 0;
//  for (const objAge of objectsArray){
//       total += parseInt(objAge.age);   // parseInt converts the age (which is string) to a number
//       console.log(total);
//  }
//  avgAge = total / objectsArray.length;
//  console.log(`The average age of the group is: ${avgAge}`);
 
 
 //    Part 5: Full Circle
 //As a final task, transform the final set of data back into CSV format.
 
//  let newCSVfile = "";
//  for (const heading of headings){
//      newCSVfile += heading + ",";
//  }
//  newCSVfile = newCSVfile.slice(0, -1) + "\\n";
//  for (const obj of objectsArray){
//      for (const heading of headings){
//          newCSVfile += obj[heading.toLowerCase()] + ",";
//      }
//      newCSVfile = newCSVfile.slice(0, -1) +"\\n";
//  }
//  console.log(newCSVfile);