let re;
re = /hello/;
re = /hello/i; // i = case insensitive;
re = /hello/g; // g = global search;
// let result = re.exec('hello world')
let result = re.test('hello world')
// console.log(re.source)

console.log(result);