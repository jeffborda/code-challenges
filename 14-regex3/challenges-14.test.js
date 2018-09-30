'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named toTitleCase that takes in an array of strings and returns an array
// of strings with the first character in upper case and the rest as is.
//
// For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
// ------------------------------------------------------------------------------------------------

const toTitleCase = (strs) => {
  return strs.map(word => word.replace(/^\D/, x => x.toUpperCase()));
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named biggerThanLuke that, given the Star Wars data, below,
returns the names of the characters whose mass is greater than Luke's.
The names should be combined into a single string with each character name separated by a dash.
For example, "Lando Calrisian - Boba Fett - Princess Amygdala".
------------------------------------------------------------------------------------------------*/

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
},
{
  name: 'Pex Kylar',
  height: '180',
  mass: '190',
  hair_color: 'orange',
  skin_color: 'brown',
  eye_color: 'none',
  birth_year: '27BBY',
  gender: 'n/a'
}];

let biggerThanLuke = (data) => {
  let result = [];
  //let lukeMass = data[0].mass; //why won't this work??
  data.forEach(obj => {

    if(obj.mass > 77) {
      result.push(obj.name);
    }
  });

  return result.join(' - ');
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named sortBy that takes in an array of objects, each of which has a particular property, 
and sorts those objects by that property, lowest to highest, returning the same array.
Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
Which could be sorted by name or price.
------------------------------------------------------------------------------------------------*/

const sortBy = (property, objs) => {
  return objs.sort((a, b) => {
    if(a[property] < b[property]) return -1;
    if(a[property] > b[property]) return 1;
  });
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named detectTicTacToeWin that accepts a 2D array of strings. Each string is
// guaranteed to be either "X", "O" or an empty string. Your function should check to see if
// any row, column, or either diagonal has three matching "X" or "O" symbols (non-empty strings)
// three-in-a-line. Your function should return either true or false to indicate if
// someone won the game.
//
// Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals
// consider writing one helper function that accepts three coordinate pairs and checks the values
// of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).
// Writing that helpCheck function to check evey possible win line is way easier than writing for loops!
//
// Here is a sample board:
// [
//   ['X', '', 'O'],
//   ['X', 'O', ''],
//   ['X', 'O', 'X'],
// ];
// ------------------------------------------------------------------------------------------------

const detectTicTacToeWin = (board) => {


  function helpCheck(r1, c1, r2, c2, r3, c3) {
    if(board[r1][c1] === board[r2][c2] === board[r3][c3] /*&& (board[r1][c1] === 'X' || board[r1][c1] === 'O')*/) {
      return true;
    }
    return false;
  };


  let r1 = 0;
  let c1 = 0;

  let r2 = 0;
  let c2 = 1;

  let r3 = 0;
  let c3 = 2;


  //Checks if 3 in one row

  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  r1++;
  r2++;
  r3++;

  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  r1++;
  r2++;
  r3++;

  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  // Checks if 3 in one column
  r1 = 0;
  r2 = 1;
  r3 = 2;
  c1 = 0;
  c2 = 0;
  c3 = 0;

  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  c1++;
  c2++;
  c3++;

  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  c1++;
  c2++;
  c3++;

  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  //diagnols
  r1 = 0;
  c1 = 0;
  r2 = 1;
  c2 = 1;
  r3 = 2;
  c3 = 2;


  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  r1 = 2;
  c1 = 2;
  r2 = 1;
  c2 = 1;
  r3 = 0;
  c3 = 0;

  if(helpCheck(r1, c1, r2, c2, r3, c3)) {
    return true;
  }

  return false;



};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function that determines if a given url is secure, aka it begins with https://
// Guard against malformed urls e.g. https:missing-slashes.bad
// E.g. 
// http://www.insecure.com is not secure
// https://secure.com is secure
// https:/missingslash.org returns false because url malformed
// ------------------------------------------------------------------------------------------------
const isSecure = (url) => {

  return /^(https:\/\/)/.test(url);
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenge-14.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should convert each word to title case', () => {
    const words = ['apple', 'banana', 'MacGyver'];
    expect(toTitleCase(words)).toStrictEqual(['Apple','Banana','MacGyver']);
    
    expect(toTitleCase([])).toStrictEqual([]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return only characters that are bigger than Luke', () => {
    expect(biggerThanLuke(starWarsData)).toStrictEqual('Darth Vader - Pex Kylar');
    expect(biggerThanLuke([])).toStrictEqual('');
  });
});

describe('Testing challenge 3', () => {
  test('It should sort items by a price', () => {

    expect(sortBy('price', [
      {name: 'Sweatshirt', price: 45},
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15}
    ])).toStrictEqual([
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15},
      {name: 'Sweatshirt', price: 45},
    ]);
    
  });

  test('It should sort items by name', () => {
    
    expect(sortBy('name', [
      {name: 'Sweatshirt', price: 45},
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15}
    ])).toStrictEqual([
      {name: 'Bookmark', price: 2.50},
      {name: 'Sweatshirt', price: 45},
      {name: 'Tote bag', price: 15},
    ]);
    
  });

});

describe('Testing challenge 4', () => {
  test('It should return true if there are three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(true);
    expect(detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(true);
  });

  test('It should return false if there are not three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(false);
  });

  test('It should not treat empty 3 in row as winner', () => {
    expect(detectTicTacToeWin([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']])).toEqual(false);
  });
});

describe('Testing challenge 5', () => {
  test('It should check if url is https', () => {

    expect(isSecure('http://www.insecure.com')).toBe(false); 
    expect(isSecure('https://secure.com')).toBe(true); 
    expect(isSecure('https:/missingslash.org')).toBe(false); 
  });
});

