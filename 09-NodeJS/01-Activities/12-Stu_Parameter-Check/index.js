const a = process.argv[2];
const b = process.argv[3];

if (process.argv.length < 4) {
    console.log('Please put in atleast 4 commands');
    return;
}

if (a == b ) {
    console.log(a);
    console.log(b);
    console.log(true);
} else {
    console.log(false);
}