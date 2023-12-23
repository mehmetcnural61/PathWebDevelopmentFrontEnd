const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://i.imgur.com/4IsvnvN.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://i.imgur.com/3VFMnpR.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://i.imgur.com/KngnwZT.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://i.imgur.com/ngLgG8p.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://i.imgur.com/iUk1XE5.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://i.imgur.com/lledkBl.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://i.imgur.com/1pqe8Zx.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://i.imgur.com/ZqEiJ6l.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://i.imgur.com/Uenetzr.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];
let btnContainer = document.querySelector(".btn-container");
let foodMenu = document.querySelector(".section-center");
btnContainer.innerHTML = `<button id="All">All</button> <button id= "Korea">Korea</button> <button id="Japan">Japan</button> <button id ="China">China</button>`;

let buttons = document.querySelectorAll("button")


menu.forEach((element) => {
    foodMenu.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
    <img src=${element.img} class="photo">
    <div class="menu-info">
        <div class="menu-title">
        <h4>${element.title}</h4>
        <h4 class="price">${element.price}</h4>
        </div>
        <div class="menu-text">
        ${element.desc}
        </div>
    </div>
    </div>`;
});
function displayMenu(obj) {
    id = obj.target.id

    let result = menu.filter((element) => element.category == id);
    if(id=="All"){
        result = menu
    }
    foodMenu.innerHTML = " "
    result.forEach((element) => {
        foodMenu.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
        <img src=${element.img} class="photo">
        <div class="menu-info">
            <div class="menu-title">
            <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
            </div>
            <div class="menu-text">
            ${element.desc}
            </div>
        </div>
        </div>`;
    });
}
buttons.forEach(element => element.addEventListener("click", test))

displayMenu();

