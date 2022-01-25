// sums two numbers
function sum(a: number, b: number) {
  return a + b;
}

// greets a user with "Hello, {name}!"
function greeting(name: string) {
  return "Hello, " + name + "!";
}

// checks whether two variables are equal
function isEqual(a: any, b: any) {
  return a === b;
}

// checks whether a text is all upper case
function isUpper(text: string) {
  return text === text.toUpperCase();
}

// returns the length of a text (total number of characters)
function textLength(text: string) {
  return text.length;
}

// returns a new text, where we replace an old text with new text (case insensitive)
function replaceText(text: string, oldText: string, newText: string) {
  return text.replace(new RegExp(oldText, "gi"), newText);
}

// returns the initials of a name taking into account the first and last name, e.g. "John Smith" -> "JS"
function initials(name: string) {
  var arr = name.split(" ");
  return arr[0].split("")[0] + arr[arr.length - 1].split("")[0];
}

// returns a text repeated n amount of times, separated by lines, each one starting with the line number, e.g. "#1 hi" for the first line, and so on
function repeat(text: string, n: number) {
  var s = "";
  for (let i = 1; i <= n; i++) {
    s += "#" + i + " " + text + "\n";
  }
  return s.trim();
}

// returns the sum of all elements in an array
function sumOfArray(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0);
}

// returns the average of all numbers of an array, rounded up
function averageUp(arr: number[]) {
  return Math.ceil(arr.reduce((a, b) => a + b, 0) / arr.length);
}

// returns an array [min, max] with the minimum and maximum numbers of an array
function minMax(arr: number[]) {
  var sorted = arr.sort((a, b) => a - b);
  return [sorted[0], sorted[arr.length - 1]];
}

// returns all even numbers from a range (start and end, inclusive), separated by commas and spaces, e.g. 1, 6 => "2, 4, 6"
function evenInRange(start: number, end: number) {
  var arr = [];
  var s = start;
  var e = end;
  if (start > end) {
    s = end;
    e = start;
  }
  for (let i = s; i <= e; i++) {
    if (!(i % 2)) {
      arr.push(i);
    }
  }
  return arr.join(", ");
}

// returns a description separated by lines for each object in an array, e.g. [{ name: "John", age: 30 }, { name: "Pedro", age: 41}] -> "Hi, my name is John and I'm 30 years old." for the first line, and so on
function describePeople(arr: Person[]) {
  // var s = "";
  // for (let i = 0; i < arr.length; i++) {
  //   s +=
  //     "Hi, my name is " +
  //     arr[i]["name"] +
  //     " and I'm " +
  //     arr[i]["age"] +
  //     " years old.\n";
  // }
  //return s.trim();
  return arr
    .map((v) => `Hi, my name is ${v.name} and I'm ${v.age} years old.`)
    .join("\n");
}

// returns a new text, where we use a dictionary to replace old terms with new ones (case insensitive)
function dictionary(dict: Dictionary, text: string) {
  var s = text;
  Object.keys(dict).forEach((key) => {
    s = s.replace(key, dict[key]);
  });
  return s;
}

// returns the total price to pay, given a products object and an array representing a cart of products
function totalPrice(products: Products, cart: CartItem[]) {
  var t = 0;
  cart.forEach((v) => {
    t += products[v.product] * v.quantity;
  });
  return t;
}

export {
  sum,
  greeting,
  isEqual,
  isUpper,
  textLength,
  replaceText,
  initials,
  repeat,
  sumOfArray,
  averageUp,
  minMax,
  evenInRange,
  describePeople,
  dictionary,
  totalPrice,
};
