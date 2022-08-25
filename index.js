const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const newArray = [];
const titleCased = () => {
  tutorials.map((tutorial) => {
    const splitString = tutorial.split(" ")
    const joinedString = []
    splitString.map ((string) => {
      const newTutorial = string.charAt(0).toUpperCase() + string.slice(1);
      joinedString.push(newTutorial)
    } )
    
    const upperCasedString = joinedString.join (" ")
    
    newArray.push(upperCasedString);
  });
  return newArray;
};

titleCased();
