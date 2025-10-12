
function ip(input) {
    const result = input
 .split('.')
 .map(Number)
 .reduce((acc, spot) => (acc << 8) + spot);

return result >>> 0;
}

console.log(ip('127.0.0.1'));
console.log(ip('10.0.0.1'));
console.log(ip('192.168.0.1'));

