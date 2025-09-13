const greet = (callBack, name) => {
    callBack(name);
}


const sayWelcome = (name) => {
    console.log("Welcome", name);
}

greet(sayWelcome, "lamiya");