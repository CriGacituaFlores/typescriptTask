const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: "Pepito",
  age: 30,
  hobbies: ["Sport", "Cooking"],
  role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
