let arry = [['A',.1],['B',.6],['C',.3]];
let answ = [];

for(let weight of arry){
  answ.push(...Array(weight[1]*10).fill(weight[0]))
    
}


console.log( answ[ Math.floor( Math.random()*answ.length ) ] )