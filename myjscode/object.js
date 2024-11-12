person = {
  name: "",
  age: "",
  height: "",
};

 names = ["kenny", "kachi", "razaq", "ono"];
 // for loop
 for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
 }
 objects = [
  {
    name: "kenny",
    age: "",
    height: "",
  },
  {
    name: "razaq",
    age: "",
    height: "",
  },
  {
    name: "ono",
    age: "",
    height: "",
  },
 ];
 test = objects.map((Object) => objects.name);

 kenny = objects.filter((object) => objects.name == "kenny");

 console.log(test, kenny);

 console.log(numbers.map((number) => number * 2));
 console.log(numbers.filter((number) => number < 7));
