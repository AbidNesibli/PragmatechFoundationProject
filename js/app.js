let toplam = 0;
let i = 0;

function cem() {
    i++;
    toplam = toplam + i;
    if (i < 3000) {

        cem();
    }
}
cem();
console.log(toplam)