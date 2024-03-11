//a. Object Properties
function printObjectProperties(obj) {
    for (let key in obj) {
      console.log(key);
    }
  }
  
  let person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  printObjectProperties(person); // Output: name, age, city

  //b. Object Values
  function printObjectValues(obj) {
    for (let key in obj) {
      console.log(obj[key]);
    }
  }
  
  printObjectValues(person); // Output: John, 30, New York

  //Object Manipulation
  function modifyObject(obj) {
    if (obj.age >= 18) {
      obj.isAdult = true;
    } else {
      obj.isAdult = false;
    }
  }
  
  modifyObject(person);
  console.log(person); // Output: { name: "John", age: 30, isAdult: true }

  
//e. Object Filtering
function filterObject(obj, condition) {
    const filtered = {};
    for (let key in obj) {
      if (condition(obj[key])) {
        filtered[key] = obj[key];
      }
    }
    return filtered;
  }
  
  const girl = {
    name: "Naima",
    age: 22,
    city: "Kigali"
  };
  
  const filteredPerson = filterObject(person, value => typeof value === 'string');
  console.log(filteredPerson); // Output: { name: "Naima", city: "Kigali" }

  //f. Object Merging
  const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

//g. Object Size
function getObjectSize(obj) {
    return Object.keys(obj).length;
  }
  
  
  console.log(getObjectSize(person)); // Output: 3

  
  //h. Nested Object
  const data = {
    person: {
      name: "John",
      age: 30
    }
  };
  
  console.log(data.person.name); // Output: John

  //i. Object Sorting
  function sortObjectKeys(obj) {
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
      sorted[key] = obj[key];
    });
    return sorted;
  }
  
  console.log(sortObjectKeys(person)); // Output: { age: 22, city: "Kigali", name: "Naima" }

  //j. Object Transformation
  function transformObjectValues(obj, transformation) {
    const transformed = {};
    for (let key in obj) {
      transformed[key] = transformation(obj[key]);
    }
    return transformed;
  }
  
  const uppercasePerson = transformObjectValues(person, value => value.toUpperCase());
  console.log(uppercasePerson); // Output: { name: "NAIMA", age: "22", city: "KIGALI" }
  

