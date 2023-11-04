// 1 - Header elementini querySelector ile yakalayın ve stil özelliklerini ekleyin.
const header = document.querySelector('.header');
header.style.backgroundColor = 'lightblue';
header.style.color = 'white';
header.style.padding = '10px';
header.style.textAlign = 'center';

// 2 - title id'ye sahip elementi getElementById ile yakalayın ve içeriğini değiştirin.
const title = document.getElementById('title');
title.textContent = 'Javascript Dom Assignment 1'

// 3 - nav-item class'ına sahip elementi querySelector ile yakalayın ve flexbox stilini ekleyin.
const navItem = document.querySelector('.nav-item');
navItem.style.display = 'flex';
navItem.style.justifyContent = 'center';
navItem.style.gap = '10px';
navItem.style.listStyle = 'none';

// 4 - username ve password inputlarını querySelector ile yakalayın ve değerlerini ayarlayın.
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
usernameInput.value = 'Anthony';
passwordInput.value = '123456';
passwordInput.type = 'text'; // Parolanın görünmesini sağlamak için input türünü değiştirin.
usernameInput.disabled = true;
passwordInput.disabled = true;

// 5 - btn class'ına sahip elementi querySelector ile yakalayın ve stil özelliklerini ekleyin.
const btn = document.querySelector('.btn');
btn.style.backgroundColor = 'green';
btn.style.color = 'white';
btn.style.padding = '10px 20px';
btn.style.borderRadius = '5px';
btn.style.cursor = 'pointer';
btn.style.border = 'none';
btn.textContent = 'Giriş Yap';

// 6 - projects id'ye sahip elementi getElementById ile yakalayın ve içeriği değiştirin.

// const projects = document.getElementById('projects');
// const h3 = projects.querySelector('h3');
// h3.textContent = 'Js Dom Projects'

const projectsElement = document.getElementById("projects");
const h3Element = projectsElement.firstElementChild;
h3Element.textContent = "Js Dom Projects"


// myProjects array'ini döngü kullanarak ul içine ekleyin.

const myProjects = ["Hello World!", "Guess Number", "Checkout Page", "Gelir-Gider Projesi", "Api Projects"];

// const ul = projects.querySelector('ul');
// myProjects.forEach((project) => {
//   const li = document.createElement('li');
//   li.textContent = project;
//   ul.appendChild(li);
// });

const ulElement = projectsElement.lastElementChild;

myProjects.forEach(project => {
    const liElement = document.createElement("li");
    liElement.textContent = project;
    ulElement.appendChild(liElement);
});