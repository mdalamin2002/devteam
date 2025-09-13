const greet = (callBack, name) => {
    callBack(name);
    alert("Hello from index.js!");
}


const sayWelcome = (name) => {
    alert("Welcome _" + name);
}

greet(sayWelcome, "lamiya");