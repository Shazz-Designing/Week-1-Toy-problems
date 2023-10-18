function calculateGrade() {
    const marks = parseFloat(prompt("Enter student marks:"));
  
    if (marks > 79) {
      return "A";
    } else if (marks >= 60 && marks <= 79) {
      return "B";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 40 && marks <= 49) {
      return "D";
    } else {
      return "E";
    }
  }
  
  const grade = calculateGrade();
  console.log(`Grade: ${grade}`);
  