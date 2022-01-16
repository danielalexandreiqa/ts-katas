// sums two numbers
function sum(a: number, b: number) {}

// greets a user with "Hello, {name}!"
function greeting(name: string) {}

// checks whether two variables are equal
function isEqual(a: any, b: any) {}

// checks whether a text is all upper case
function isUpper(text: string) {}

// returns the length of a text (total number of characters)
function textLength(text: string) {}

// returns a new text, where we replace an old text with new text (case insensitive)
function replaceText(text: string, oldText: string, newText: string) {}

// returns the initials of a name taking into account the first and last name, e.g. "John Smith" -> "JS"
function initials(name: string) {}

// returns a text repeated n amount of times, separated by lines, each one starting with the line number, e.g. "#1 hi" for the first line, and so on
function repeat(text: string, n: number) {}

// returns the sum of all elements in an array
function sumOfArray(arr: number[]) {}

// returns the average of all numbers of an array, rounded up
function averageUp(arr: number[]) {}

// returns an array [min, max] with the minimum and maximum numbers of an array
function minMax(arr: number[]) {}

// returns all even numbers from a range (start and end, inclusive), separated by commas and spaces, e.g. 1, 6 => "2, 4, 6"
function evenInRange(start: number, end: number) {}

// returns a description separated by lines for each object in an array, e.g. [{ name: "John", age: 30 }, { name: "Pedro", age: 41}] -> "Hi, my name is John and I'm 30 years old." for the first line, and so on
function describePeople(arr: Person[]) {}

// returns a new text, where we use a dictionary to replace old terms with new ones (case insensitive)
function dictionary(dict: Dictionary, text: string) {}

// returns the total price to pay, given a products object and an array representing a cart of products
function totalPrice(products: Products, cart: CartItem[]) {}

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
  totalPrice
}
