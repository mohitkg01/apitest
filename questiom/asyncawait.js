console.log('person1< shows ticket');
console.log('person2< shows ticket');

const preMovie=async()=>{
    const wifebringing=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" ticket");
        },3000);
    });
const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const addButter=new Promise((resolve,reject)=>resolve(`butter`));
const getColdDrinks=new Promise((resolve,reject)=>resolve(`Thumps up`));

let ticket=await wifebringing;

console.log("wife< here is the ticket");
console.log('husband< lets go in');
console.log('wife< NO, I am hungry');

let popcorn=await getPopcorn;

console.log(`husband< I got some ${popcorn}`);
console.log('husband< lets go in');
console.log('wife< No, I need butter on my popcorn');

let butter=await addButter;

console.log(`husband< I got some ${butter} on popcorn`);
console.log('husband< anything else baby');
console.log('wife< Yes I need a ColdDrink');

let colddrink=await getColdDrinks;
console.log(`husband< I got ${colddrink}`);
console.log('husband< anything else baby');
console.log('wife< No we are getting late lets watch movie');

return ticket;
}

preMovie().then((m)=>console.log(`person3< shows ${m}`));

console.log('person4< shows ticket');
console.log('person5< shows ticket');