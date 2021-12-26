let test = 0;
let t = 0;

function cem() {
    t++;
    if (t < 500 && t % 9 != 0 || t % 6 == 0) {
        test = test + 1;
        cem()

    } else if (t<500){
        cem();
    }
}
cem();
console.log(test)