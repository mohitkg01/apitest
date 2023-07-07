console.log('person1< shows ticket');
console.log('person2< shows ticket');

const wifebringing=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" tickets");
    },3000);
});

const getPopcorn=wifebringing.then((t)=>{
    console.log("wife< here is the ticket");
    console.log('husband< lets go in');
    console.log('wife< No,I am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    }) 
})

const getButter=getPopcorn.then((t)=>{
    console.log(' husband< I got some popcorn');
    console.log('husband< lets go in');
    console.log('wife< No, I need butter on my popcorn');
    console.log('husband< Anything else darling');
    console.log('wife< Need some colddrinks');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
});
});

const getColdDrinks =getPopcorn.then((t)=>{
    console.log('husband< I got the colddrink');
    return new Promise((resolve,reject)=>resolve(`I got${t} and Colddrink`));
})


getColdDrinks.then((t)=>console.log(t));

//  const shows=wifebringing.then((msg)=>{
//     console.log(`person3<shows ${msg}`);
// })
// shows.then((t)=>{
//     console.log(t);
// })

console.log('person4< shows ticket');
console.log('person5< shows ticket');
