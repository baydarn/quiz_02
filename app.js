console.log(typeof null);         ///"object"
console.log(!null);               ///true
console.log(null*5-1+"test"-1);   ////NaN
console.log(null*5-1+"test"+1);   ////"-1test1"
console.log(2+null/2+5+"null");   ///"7null"
console.log(null/0+"null"+1);     ////"NaNnull1"
console.log(typeof undefined);    ////"undefined"
console.log(3>undefined);         ////// false
console.log(3<undefined);         /////false
console.log(3*undefined+"test"+1);  /////"NaNtest1"
console.log(!undefined == true);    ////true
console.log(undefined == null);    ////true
console.log(!undefined === !null); /////true
console.log(typeof NaN);           ////"number"
console.log("test" + NaN + 12 /"test"); ///"testNaNNaN"
console.log(2 + true + false -"1");     ////2
console.log(2 - true - false - 1 +"2");  ///"02"
console.log(true + "false" + 2 + "true" + 2 + 2);  ///"truefalse2true22"
console.log(2 + 2 + "true" + 2 + "false" + true);  //// "4true2falsetrue"
console.log(2 + 3 +"true" + 3 + 2);                ///// "5true32" (mülakatda sorulabilir bir soru)

