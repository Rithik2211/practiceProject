const SHA256 = require('crypto-js/sha256');
const MAX_TRANSACTIONS = 10;
const TARGET_DIFFICULTY = BigInt(0x0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);

const mempool = [];
const blocks = [];
let id = 0;
let nonce = 0;

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const transactions = [];
    id++ 
    mempool.forEach((data)=>{
        if(transactions.length <= MAX_TRANSACTIONS){
            transactions.push(data);
        }
    })
    for (const data of transactions) {
        const index = mempool.indexOf(data);
        if (index > -1) {
            mempool.splice(index, 1);
        }
    }
    let hash
    while(true){
        const obj = { id, transactions, nonce };
        hash = SHA256(JSON.stringify(obj));
        if(BigInt(`0x${hash}`) < TARGET_DIFFICULTY){
            break;
        }
        nonce++
    }
    blocks.push({ id, hash, transactions, nonce });
}

for(let i = 0; i < 5; i++) {
    addTransaction({ sender: 'bob', to: 'alice' });
}
mine();
const actual = blocks[blocks.length - 1].hash.toString();
const isLess = BigInt(`0x${actual}`) < TARGET_DIFFICULTY;
console.log(isLess? "Hash is Correct" : "expected the hash to be less than the target difficulty")

blocks.forEach((data)=>{
    console.log("Block",data)
})
