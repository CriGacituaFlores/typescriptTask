const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Pepito",
  age: 30,
  hobbies: ["Sport", "Cooking"]
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
