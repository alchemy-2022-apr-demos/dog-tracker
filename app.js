import { renderDog } from './utils.js';

const dogForm = document.getElementById('dog-form');
const dogList = document.getElementById('dog-list');

const userInput = document.getElementById('user-name');
const save = document.getElementById('save');

let dogs = [];
let users = [];

dogForm.addEventListener('submit', (e) => {
    // what is e??
    // e is what gets passed to your callback
    // function by the browswer
    // contains a whole bunch of info
    // about the event
    // e is a booger or banana -- i.e. its just a variable name
    // generally we call it e or event
    // console.log(e);
    e.preventDefault();
    // console.log('submitting the form');

    const dogData = new FormData(dogForm);
    // console.log(dogData.get('dog-name'));
    // console.log(dogData.get('age'));

    let dog = {
        name: dogData.get('dog-name'),
        age: dogData.get('age'),
    };

    dogs.push(dog);
    console.log('list of dogs', dogs);

    renderDogs();

    // resets all the inputs in the form
    dogForm.reset();
});

function renderDogs() {
    // clear out the existing list
    dogList.textContent = '';
    // loop through each dog in dogs
    for (let dog of dogs) {
        //   create an li with the dog's name and age
        const li = renderDog(dog);
        //   append the li to the ul
        dogList.append(li);
    }
}

save.addEventListener('click', () => {
    // create a new user object
    // {name: Julie, dogCount: 2}
    //   name: nameInput.value
    //   dogCount: length of dogs array
    const user = {
        name: userInput.value,
        dogCount: dogs.length,
    };
    // push the user onto the users array
    users.push(user);
    // render the users (renderUsers and renderUser)
    renderUsers();
    // reset the dogs array
    dogs = [];
    renderDogs();
});

function renderUsers() {
    // loop through the list of users
    // call renderUser for each user
    console.log(users);
}
