// how does call works ?
// A call function basically envokes a function while setting the this context

function animal(eats,drinks) {
     
    return console.log(`My ${this.type} named ${this.name} eats ${eats} and drinks ${drinks}`)
}

let aloo = {
    type: "cat",
    name:'aloo'
}



Function.prototype.myApply = function (thisContext = {}, args) {

    if(typeof this !== 'function')
    {
        throw new Error(`TypeError: ${this} is not callable as it is not function`)
    }

    if(!Array.isArray(args))
    {
        throw new Error(`TypeError: ${args} is non-object`)
    }

    thisContext.fn = this;
    thisContext.fn(...args);
}

animal.myApply(aloo,["cat food","milk"])


