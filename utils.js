export function renderDog(dog) {
    console.log('hello from utils.js');
    console.log(dog);
    const dogLI = document.createElement('li');
    dogLI.textContent = `${dog.name}: ${dog.age} years`;
    return dogLI;
}

export function renderUser(user) {
    // create an LI for each user
    console.log(user);
    const userLI = document.createElement('li');
    userLI.textContent = `${user.name}: ${user.dogCount} dogs`;
    return userLI;
}
