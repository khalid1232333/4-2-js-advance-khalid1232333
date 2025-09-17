/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const student = {
  firstName: "Ada",
  lastName: "Lovelace",
  gpa: 3.8,

  // Getter: fullName
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  // Setter method (not property) for updating GPA
  updateGpa(newGpa) {
    if (newGpa >= 0 && newGpa <= 4) {
      this.gpa = newGpa;
      console.log("GPA updated successfully!");
    } else {
      console.log("Invalid GPA! Must be between 0.0 and 4.0.");
    }
  }
};

// ====================
// Testing the object
// ====================

console.log("Full Name:", student.fullName); // Ada Lovelace
console.log("Current GPA:", student.gpa);    // 3.8

student.updateGpa(3.9);  // valid update
console.log("Updated GPA:", student.gpa);  

student.updateGpa(5.0);  // invalid update
console.log("After invalid update GPA:", student.gpa); 







// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/const courses = { CS101: "Intro to Computer Science", MATH201: "Calculus II", PHY110: "Physics Lab" };
for (const code in courses) if (Object.prototype.hasOwnProperty.call(courses, code)) console.log(code, "→", courses[code]);

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const str = "JavaScriptt";
console.log(str.charAt(0), str.charAt(4), str.length);
// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/const now = new Date();
console.log(now.getDate(), now.getMonth(), now.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
