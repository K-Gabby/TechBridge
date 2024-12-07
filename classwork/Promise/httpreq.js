// req.open("GET", "https://catfact.ninja/facts?limit=156max_length=60");
// req.send();
// console.log(req.response);
// req.responseType = "json";
// req.onload = () => console.log(req.response.fact);

const fact = document.getElementById("Get-Fact");
const displayResult = document.getElementById("result");
const cat = new XMLHttpRequest();

fact.addEventListener("click", () => {
  cat.open("GET", "https://catfact.ninja/fact");
  cat.responseType = "json";
  cat.onload = () => {
    if (cat.status === 200) {
      displayResult.textContent = cat.response.fact;
    } else {
      displayResult.textContent = "Failed";
    }
  };
  cat.send();
});

// fact.addEventListener("click", () => {
//   const getFacts = new Promise((resolve, reject) => {
//     req.open("GET", "https://catfact.ninja/facts?limit=15&max_length=60");
//     req.send();
//     req.responseType = "json";
//     req.onload = () => resolve(req, "response");
//     req.onerror = () => reject(req, "statusText");
//   });

//   getFacts
//     .then((result) => (displayResult.textContent = result.response.data))
//     .catch((error) => console.log(error));
// });


