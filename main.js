const user2 = {
  gender: "Male",
  age: "24",
  firstName: "Aquila",
  surname: "Wafula",
  lastName: "Jedidiah",
  occupation: "Software developer",
  isHumorous: false,
  netWorth: 13,
  status: "single",
  height: "5 7",
  Nationality: "Kenyan",
  phoneNumber: 7050503614,
  hobbes: [
    "watching movies",
    "Reading books",
    "Twitter fanatic",
    "playing basketball",
  ],
  school: {
    name: "Moringa School",
    course: "software engineering",
  },
};

console.log(user2.surname);
console.log(user2.school.name);

const books = {
  scienceFiction: "",
  fantasy: "",
  erotic: "",
  crime: "",
  political: "",
  spiritual: "",
  nonFictional: "",
  selfHelp: "",
};

books.scienceFiction = "Three body problem";
books.fantasy = "Harry Potter";
books.erotic = "It ends with us";
books.crime = "The silent patient";
books.political = "Inheritance";
books.spiritual = "90 minutes in heaven";
books.nonFictional = "In cold blood";
books.selfHelp = "Atomic habits";

books.romance = "It ends with us";
console.log(books);

const extraBooks = {
  ...books,
  cultural: "The river and the source",
};
console.log(extraBooks);
