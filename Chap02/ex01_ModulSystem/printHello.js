function print(count){
    for(var i = 0; i < count; i++)
        console.log('Hello World');
}

console.log(module.exports)
module.exports = print;
console.log(module.exports)