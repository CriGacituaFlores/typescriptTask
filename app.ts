const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 1;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: "Pepito",
  age: 30,
  hobbies: ["Sport", "Cooking"],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
