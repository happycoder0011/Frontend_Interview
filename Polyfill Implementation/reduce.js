// arr.reduce((acc,curr,i,arr) => {},initialValue)

Array.prototype.myReduce = function (cb,initialValue) {
    var accumulator = initialValue;

    for(var i=0;i<this.length;i++)
    {
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i];
    }

    return accumulator;
}


var arr = [1,2,3,4,5];
const sum = arr.myReduce((acc,curr,i,arr) => {
    return acc+ Math.pow(curr,2);
})
console.log(sum)