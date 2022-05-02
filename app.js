const dogForm = document.getElementById('dog-form');
const dogList = document.getElementById('dog-list');

let dogs = [];
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
        const dogLI = document.createElement('li');
        dogLI.textContent = `${dog.name}: ${dog.age} years`;
        //   append the li to the ul
        dogList.append(dogLI);
    }
}
