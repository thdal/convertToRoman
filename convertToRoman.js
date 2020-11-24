var whatCase;
var units = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var final = "";

function convertToRoman(val){

    switch (val.toString().length)
    {
        case 1:
            console.log("units");
            whatCase = 1;
            break;
        case 2:
            console.log("tens");
            whatCase = 2;
            break;

        case 3:
            console.log("hundreds");
            whatCase = 3;
            break;

        case 4:
            console.log("thousands");
            whatCase =  4;
            break;

    }

    if(whatCase == 2){
        var i = 1;
        var chiffre = Array.from(String(val), Number);
        chiffre.forEach(function(el) {
            switch(i){
                case 1:
                    final += tens[el-1];
                    break;
                case 2:
                    if(el != 0) {
                        final += units[el - 1];
                    }
                    break;
            }
            i++;
        });
    }
    console.log(final);
    final = "";
}
