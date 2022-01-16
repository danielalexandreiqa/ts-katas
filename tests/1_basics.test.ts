import {
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
} from '../src/1_basics'

describe('sum', () => {
  test('sums two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(5, 6)).toBe(11)
    expect(sum(0, 0)).toBe(0)
    expect(sum(1, -1)).toBe(0)
  })
})

describe('greeting', () => {
  test('greets a user with "Hello, {name}!"', () => {
    expect(greeting('John')).toBe('Hello, John!')
    expect(greeting('Jane')).toBe('Hello, Jane!')
  })
})

describe('isEqual', () => {
  test('checks whether two variables are equal', () => {
    expect(isEqual('Hello', 'Hello')).toBe(true)
    expect(isEqual(17, 17)).toBe(true)
    expect(isEqual(-1, 1)).toBe(false)
    expect(isEqual(1, '1')).toBe(false)
    expect(isEqual(1, true)).toBe(false)
    expect(isEqual(true, false)).toBe(false)
    expect(isEqual(true, true)).toBe(true)
    expect(isEqual(null, null)).toBe(true)
    expect(isEqual(undefined, undefined)).toBe(true)
  })
})

describe('isUpper', () => {
  test('checks whether a text is all upper case', () => {
    expect(isUpper('I like trains')).toBe(false)
    expect(isUpper('OMG')).toBe(true)
    expect(isUpper('How are you?')).toBe(false)
    expect(isUpper('COOL')).toBe(true)
  })
})

describe('textLength', () => {
  test('returns the length of a text (total number of characters)', () => {
    expect(textLength('I like trains')).toBe(13)
    expect(textLength('')).toBe(0)
    expect(textLength('OMG')).toBe(3)
    expect(textLength('How are you?')).toBe(12)
    expect(textLength('COOL')).toBe(4)
  })
})

describe('replaceText', () => {
  test('returns a new text, where we replace an old text with new text (case insensitive)', () => {
    expect(replaceText('The original text.', 'original', 'new')).toBe(
      'The new text.'
    )
    expect(replaceText('My name is John.', 'My name is', "He's called")).toBe(
      "He's called John."
    )
    expect(replaceText('Cool. Cool, cool, cool, cool.', 'cool', 'nice')).toBe(
      'Nice. Nice, nice, nice, nice.'
    )
  })
})

describe('initials', () => {
  test('returns the initials of a name taking into account the first and last name, e.g. "John Smith" -> "JS"', () => {
    expect(initials('John Smith')).toBe('JS')
    expect(initials('Timothy Geralt Stuart')).toBe('TS')
    expect(initials('Charles Optimus Oval Lewis')).toBe('CL')
  })
})

describe('repeat', () => {
  test('returns a text repeated n amount of times, separated by lines, each one starting with the line number, e.g. "#1 hi" for the first line, and so on', () => {
    expect(repeat('Repeat stuff.', 3)).toBe(
      '#1 Repeat stuff.\n#2 Repeat stuff.\n#3 Repeat stuff.'
    )
    expect(repeat('Nice', 1)).toBe('#1 Nice')
    expect(repeat('cool', 5)).toBe(
      '#1 cool\n#2 cool\n#3 cool\n#4 cool\n#5 cool'
    )
  })
})

describe('sumOfArray', () => {
  test('returns the sum of all elements in an array', () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10)
    expect(sumOfArray([1, 2])).toBe(3)
    expect(sumOfArray([0, 0, 0, 1, 0])).toBe(1)
    expect(sumOfArray([1, 0, 1, 0, 7, 5, 4, 19])).toBe(36)
  })
})

describe('averageUp', () => {
  test('returns the average of the numbers of an array, rounded up', () => {
    expect(averageUp([1, 2, 3, 4])).toBe(3)
    expect(averageUp([0, 1, 1, 0])).toBe(1)
    expect(averageUp([20, 5, 100, 17, 34, 89, 25, 12])).toBe(76)
  })
})

describe('minMax', () => {
  test('returns an array [min, max] with the minimum and maximum numbers of an array', () => {
    expect(minMax([1, 2, 3, 4])).toBe([1, 4])
    expect(minMax([1, 2, 4, 3])).toBe([1, 4])
    expect(minMax([5, 3, 0, 9, 3])).toBe([0, 9])
    expect(minMax([1, -4, -5, 10])).toBe([-5, 10])
  })
})

describe('evenInRange', () => {
  test('returns all even numbers from a range (start and end, inclusive), sorted and separated by commas and spaces, e.g. 1, 6 => "2, 4, 6"', () => {
    expect(evenInRange(1, 6)).toBe('2, 4, 6')
    expect(evenInRange(2, 4)).toBe('2, 4')
    expect(evenInRange(2, 9)).toBe('2, 4, 6, 8')
    expect(evenInRange(-4, 10)).toBe('-4, -2, 0, 2, 4, 6, 8, 10')
    expect(evenInRange(19, 9)).toBe('10, 12, 14, 16, 18')
  })
})

describe('describePeople', () => {
  test('returns a description separated by lines for each object in an array, e.g. [{ name: "John", age: 30 }, { name: "Pedro", age: 41}] -> "Hi, my name is John and I\'m 30 years old." for the first line, and so on', () => {
    expect(
      describePeople([
        { name: 'John', age: 30 },
        { name: 'Pedro', age: 41 }
      ])
    ).toBe(
      "Hi, my name is John and I'm 30 years old.\nHi, my name is Pedro and I'm 41 years old."
    )
    expect(describePeople([{ name: 'Nuno', age: 32 }])).toBe(
      "Hi, my name is Nuno and I'm 32 years old."
    )
    expect(
      describePeople([
        { name: 'Geralt', age: 94 },
        { name: 'Ciri', age: 22 },
        { name: 'Yennefer', age: 98 }
      ])
    ).toBe(
      "Hi, my name is Geralt and I'm 94 years old.\nHi, my name is Ciri and I'm 22 years old.\nHi, my name is Yennefer and I'm 98 years old."
    )
  })
})

describe('dictionary', () => {
  test('returns a new text, where we use a dictionary to replace old terms with new ones (case insensitive)', () => {
    expect(dictionary({ old: 'new' }, 'This is old.')).toBe('This is new.')
    expect(
      dictionary(
        { user_name: 'John', user_age: 30 },
        "My name is user_name and I'm user_age years old."
      )
    ).toBe("My name is John and I'm 30 years old.")
    expect(
      dictionary(
        { soccer: 'football', watch: 'play' },
        'I like to watch soccer.'
      )
    ).toBe('I like to play football.')
  })
})

describe('totalPrice', () => {
  test('returns the total price to pay, given a products object and an array representing a cart of products', () => {
    const products1 = {
      Chair: 10,
      Table: 50,
      Painting: 20
    }
    const products2 = {
      Phone: 500,
      Laptop: 1500,
      TV: 1000
    }
    expect(totalPrice(products1, [{ product: 'Table', total: 1 }])).toBe(50)
    expect(
      totalPrice(products1, [
        { product: 'Painting', total: 4 },
        { product: 'Chair', total: 1 }
      ])
    ).toBe(90)
    expect(
      totalPrice(products1, [
        { product: 'Chair', total: 4 },
        { product: 'Table', total: 1 },
        { product: 'Painting', total: 3 }
      ])
    ).toBe(140)
    expect(
      totalPrice(products2, [
        { product: 'Phone', total: 2 },
        { product: 'Laptop', total: 1 }
      ])
    ).toBe(2500)
    expect(
      totalPrice(products2, [
        { product: 'Laptop', total: 5 },
        { product: 'Phone', total: 5 },
        { product: 'TV', total: 2 }
      ])
    ).toBe(12000)
  })
})
