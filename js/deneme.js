let deneme=0;
let d=0;
function topla(){
    d++;
    if(d<4000 && d*2!=0 || d%3==0){
    deneme = deneme+1;
    topla()
    }
    else if(d<4000){
        topla();
    }
}
topla()
console.log(deneme)