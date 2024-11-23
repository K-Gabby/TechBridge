let page = document.getElementsByClassName("body");

newName = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("kenny");
  }, 3000);
});

const greeting = async () => {
  try {
    page[0].textContent = "...loading";
    page[0].style = "text-align:center"; "color:red";
    name = await newName;
    page[0].textContent = `welcome ${name}!`;
  } catch (error) {
    page[0].textContent = "Error loading name.";
    console.error(error);
  }
};

greeting();

// const greeting = async () => {
//   page[0].textContent = "...loading";
//   page[0].style = "text-align:center";
//   name = await newName;
//   page[0].textContent = "welcome" + name;
// };

// greeting();
