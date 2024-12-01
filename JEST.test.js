import { analyzeArray, caesarCipher, calculator, capitalize, reverseString, sum } from "./functions";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('should be H', () => {
    const string = "hamza"; 
    expect(capitalize(string)).toMatch(/H/);
  });
test('should be reversed', () => {
    const string = "hamza"; 
    expect(reverseString(string)).toMatch(/azmah/);
  });
test('should calculator', () => {
let result = 
  expect(calculator(2,5,"+")).toBe(7)
})
test('should analyze', () => {
   const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
     };
let arr = [1,8,3,4,2,6]
  expect(analyzeArray(arr)).toEqual(object)
})
test('should cipher', () => {
    let result = 'Khoor, Zruog!'
  expect(caesarCipher('Hello, World!', 3)).toMatch(result)
})
