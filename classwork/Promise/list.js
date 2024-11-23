people =[
    {name: "Kenny", image:"https://img.freepik.com/free-photo/portrait-confident-young-latin-man-smiling-looking-while-standing-outdoors-street-urban-concept_58466-15004.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Designer"},
    {name: "Kunle", image:"https://img.freepik.com/free-photo/african-american-man-denim-wear-outside-park_1303-10363.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Sales"},
    {name: "Jude", image:"https://img.freepik.com/free-photo/vertical-shot-attractive-african-american-man-posing-smiling_181624-15027.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Sales"},
    {name: "James", image:"https://img.freepik.com/premium-photo/african-american-man-stylish-new-clothes-street_255667-8437.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Designer"},
    {name: "Jide", image:"https://img.freepik.com/free-photo/african-american-student-sitting-stairs-park_1303-11984.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Sales"},
    {name: "John", image:"https://img.freepik.com/premium-photo/african-american-man-street_255667-7465.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Banker"},
    {name: "Ade", image:"https://img.freepik.com/premium-photo/portrait-young-handsome-african-bearded-man-with-afro-hair-exploring-city-streets-outdoors_251136-77207.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Designer"},
    {name: "Gabriel", image:"https://img.freepik.com/free-photo/medium-shot-man-outdoors_23-2149028793.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Designer"},
    {name: "Lade", image:"https://img.freepik.com/premium-photo/portrait-black-man-with-dreadlocks-concept-lifestyle_442650-144.jpg?ga=GA1.1.1993588008.1720594330&semt=ais_hybrid", occupation:"Designer"}
]
let body=document.getElementById("body")

people.forEach(person => {
    let card=document.createElement("div")
    card.classList.add("card")
    body.appendChild(card)

    let image=document.createElement("img")
    image.src=person.image
    card.appendChild(image)

    let name=document.createElement("h2")
     name.textContent=person.name
    card.appendChild(name)

    let occupation=document.createElement("p")
    occupation.textContent=person.occupation
    card.appendChild(occupation)
});


