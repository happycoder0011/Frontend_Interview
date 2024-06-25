function animal(eats,drinks) {
     
    return console.log(`My ${this.type} named ${this.name} eats ${eats} and drinks ${drinks}`)
}

let aloo = {
    type: "cat",
    name:'aloo'
}


Function.prototype.myBind = function (thisContext,...args) {
    if(typeof this !== "function") {
        throw new Error("TypeError: Not called on a function")
    }

    thisContext.fn = this;
    
    return function (...laterArgs) {
        return thisContext.fn(...args,...laterArgs);
    }
}


const animalWithContext = animal.myBind(aloo,"cat food","milk");
animalWithContext();