// let result  = arr.filter(function(item,index,array) {
// // if true item is pushed to results and iteration continues
// // returns an array 
// });



//Polyfill
Array.prototype.myFilter = function (cb) {
    let res = [];
    for(var i=0;i<this.length;i++)
    {
        if(cb(this[i],i,this))
            res.push(this[i]);
    }

    return res;
}
let arr = [1,2,3,4,5];

let result = arr.myFilter((item,index) => item > 3);
