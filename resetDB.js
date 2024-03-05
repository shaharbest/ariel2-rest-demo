const db = require('./db');
const Product = require('./models/Product');

const sampleProducts = [
    { name: 'mango', price: 42 },
    { name: 'banana', price: 13 },
    { name: 'melon', price: 666 },
];

main();

async function main() {
    db.connect();

    console.log('deleting all products...');
    await Product.deleteMany({});
    console.log('done');

    console.log('inserting products sample...');
    await Product.insertMany(sampleProducts);
    console.log('done');

    db.disconnect();
}