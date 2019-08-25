var logos = document.querySelectorAll('#logo path');
console.log(logos);
for(let i = 0; i<logos.length; i++){
    console.log(`letter ${i} is ${logos[i].getTotalLength()}`);
} 
