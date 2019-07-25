const calculation = ( ) => {
    var a1 = document.getElementById("varA").value;
    var m1 = document.getElementById("varM").value;
    var b1 = document.getElementById("varB").value;
    var a = Math.sqrt(a1);
    var b = Math.sqrt(b1);
    var m = m1 / 2;
    var x = x;
    // var exp = <sup>2</sup>;  doc.gebid?
    // var answ = ("(" + a + "x" + " + "+ b + ")" + exp;
    var answ = ("(" + a + "x" + " + "+ b + ")" + "(" + a + "x" + " + "+ b + ")");
    var finalAnswer = answ;
        return (finalAnswer);
}  
const answer = ( ) => {
    document.getElementById("demo1").innerHTML = calculation( );
};



// CHECK TO SEE IF THE INPUTS ARE PERFECT SQUARES AND TO VERIFY THAT 
// THE MIDDLE TERM IS = 2*A*B. OTHERWISE, THIS IS NOT RIGHT MODULE 
    // if (a % 1 != 0 && b % 1 != 0) {
    //     return "Invalid Entry";
    // } else 
// CHECK THE SQUARE ROOT OF EACH VALUE A1 AND B1 TO SEE IF THEY
// ARE WHOLE NUMBERS. IF THEY AREN'T, THE PROGRAM WILL REFER THEM
// T0 A DIFFERENT FACTORING TECHNIQUE BECAUSE THE PROBLEM DOESN'T
// FIT INTO THIS FACTORING METHOD
//     if (a > 0 && b > 0 && a * b == m) {   
// }
// return "Please visit the Factoring ax<sup>2<sup> + bx + c module";  


    // "(" + a + " x " + " + " + b + " ) <sup>2<sup>";


