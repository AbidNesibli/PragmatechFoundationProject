let toplam = 0;
let i = 0;

function cem() {
    i++;
    if (i < 3000 && i % 7 != 0 && i%3==0) {
        toplam = toplam + i;
        cem();
    } else if(i < 3000) {
        cem();
    }
}

cem();
console.log(toplam)

