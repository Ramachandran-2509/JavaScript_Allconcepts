// console.log("String Manipulation Methods");

// charAt() method
// The charAt() method returns the character at a specified index in a string.
// const str = "Hello, World!";
// console.log(str.charAt(0)); // Output: H
// console.log(str.charAt(7)); // Output: W

//charCodeAt() method
// The charCodeAt() method returns the Unicode of the character at a specified index in a string.
// console.log(str.charCodeAt(0)); // Output: 72 (Unicode for 'H')
// console.log(str.charCodeAt(7)); // Output: 87 (Unicode for 'W')

// concat() method
// The concat() method joins two or more strings and returns a new string.
// const str1 = "Hello, ";
// const str2 = "World!";
// const str3 = str1.concat(str2);
// console.log(str3); // Output: Hello, World!

// includes() method
// The includes() method checks if a string contains a specified substring and returns true or false.
// const str4 = "Hello, World!";  
// console.log(str4.includes("World")); // Output: true
// console.log(str4.includes("JavaScript")); // Output: false
// console.log(str4.includes("Hello")); // Output: true

// indexOf() method
// The indexOf() method returns the index of the first occurrence of a specified substring in a string.
//  const str5 = "Hello, World!";
// console.log(str5.indexOf("World")); // Output: 7
// console.log(str5.indexOf("JavaScript")); // Output: -1 (not found)
// console.log(str5.indexOf("Hello")); // Output: 0

// lastIndexOf() method
// The lastIndexOf() method returns the index of the last occurrence of a specified substring in a string.
//  const str6 = "Hello, World! Hello again!";
// console.log(str6.lastIndexOf("Hello")); // Output: 13

//repeat() method
// The repeat() method returns a new string with a specified number of copies of the original string.
// const str7 = "Hello! ";
// console.log(str7.repeat(3)); // Output: Hello! Hello! Hello!

// replace()& replaceAll() methods
// The replace() method replaces the first occurrence of a specified substring with another substring.
// The replaceAll() method replaces all occurrences of a specified substring with another substring.
//  const str8 = "Hello, Developer Hello!";
//  console.log(str8.replace("Hello", "Ram"))
//  console.log(str8.replaceAll("Hello", "Ram"))

// slice() method
// The slice() method extracts a section of a string and returns it as a new string.
// const str9 = "Hello, World!";
// console.log(str9.slice(0, 5)); // Output: Hello
// console.log(str9.slice(7)); // Output: World!

//substring() method
// The substring() method extracts characters from a string between two specified indices.
// const str10 = "Hello, World!";
// console.log(str10.substring(0, 5)); // Output: Hello 
// console.log(str10.substring(7)); // Output: World!

// split() method
// The split() method splits a string into an array of substrings based on a specified separator.
// const str11 = "Hello, World!, Ram, Developer";
// console.log(str11.split(", ")); // Output: ["Hello", "World!"] 
// console.log(str11.split(", ",3)); // Output: ["Hello", "World!", "Ram"] 

// startsWith() method
// The startsWith() method checks if a string starts with a specified substring and returns true or false.
// const str12 = "Hello, World!";
// console.log(str12.startsWith("Hello")); // Output: true
// console.log(str12.startsWith("World")); // Output: false

// endsWith() method
// The endsWith() method checks if a string ends with a specified substring and returns true or false.
// const str13 = "Hello, World!";
// console.log(str13.endsWith("World!")); // Output: true
// console.log(str13.endsWith("Hello")); // Output: false
    
// toLowerCase() method
// The toLowerCase() method converts a string to lowercase.
// const str14 = "Hello, World!";
// console.log(str14.toLowerCase()); // Output: hello, world!

// toUpperCase() method
// The toUpperCase() method converts a string to uppercase.
// const str15 = "Hello, World!";
// console.log(str15.toUpperCase()); // Output: HELLO, WORLD!

// trim() method
// The trim() method removes whitespace from both ends of a string.
// const str16 = "   Hello, World!   ";
// console.log(str16.trim()); // Output: Hello, World!
