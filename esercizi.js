//TRIANGOLO DI ***

var row = "",
x,
y,
z,
s = "*";


var base = 8,
center = base/2;

for(x=0; x<=base;x++) {
    if(x != center) {
        row+=" ";
    } else {
        row+=s;
    }   
}
row+="\n";

for(y=0;y<=base;y++) {
    var index = row.indexOf(s);
    if(y==index-1||y==index+1) {
        row+=s;
    } else {
        row+=" "
    }
}

row+="\n";

for(z=0;z<=base;z++) {
    var index = row.indexOf(s);
    if(z==index-2||z==index+2||z==index) {
        row+=s;
    } else {
        row+=" "
    }
}
console.log(row);

/* Vogliamo sapere quanti di questi elementi soddisfano questo requisito:
la somma degli '0' è divisible per 3 OPPURE la somma degli '1' è divisible per 5 */

//Array di X elementi:
 
var array = [
    '1001010011010',
    '1010010100101',
    '1101001010100',
    '1101001010010',
    '1001010010100',
    '1010010010010',
    '1001001111001',
    '0100100010010',
    '0110101010001',
    '1011110011001',
    '1001101001011'
]

var zero = "0",
uno = "1",
num,
zeroCount = 0,
unoCount = 0,
tot = 0;


for(var i = 0; i < array.length; i++) {
    var el = array[i];
    console.log(el);
    for(n = 0; n < el.length; n++) {
        num = el[n];
        if(num === zero) {
            zeroCount++;
        }
        if(num === uno) {
            unoCount++;
        }          
    }
    console.log("zeri= " + zeroCount, "uno= " + unoCount);
    var divisibilePerTre = zeroCount%3 == 0,
        divisibilePerCinque = unoCount%5 == 0;
    if(divisibilePerTre == true || divisibilePerCinque == true) {
        tot++;
        console.log("divisibile")      
    } else {
        console.log("NON divisibile")
    }
    //AZZERO TUTTO
    zeroCount = 0;
    unoCount = 0;    
    console.log("------------------------")
    
}
console.log("n° elementi divisibili per 3 o per 5 ----> " + tot);
