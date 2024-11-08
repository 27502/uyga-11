
{
// While1
let A = 27;
let B = 5;
let count = 0;

while (A >= B) {
    A -= B;
    count++;
}
console.log(`B ning maksimal joylashgan soni: ${count}`);
console.log(`A kesmada qolgan qism: ${A}`);    
}


{
 // While2
let A = 27;
let B = 5;
let count = 0;

while (A >= B) {
    A -= B;
    count++;
}
console.log(`Nechta joylashtirish mumkin: ${count}`);   
}

{
 
// While3
let N = 23;
let K = 4;
let quotient = 0;

while (N >= K) {
    N -= K;
    quotient++;
}
console.log(`Butun qism: ${quotient}`);
console.log(`Qoldiq: ${N}`);   
}

{
  // While4
let n = 27;
let isPowerOfThree = true;

while (n > 1) {
    if (n % 3 !== 0) {
        isPowerOfThree = false;
        break;
    }
    n /= 3;
}
console.log(isPowerOfThree ? "3 ning darajasi" : "3 ning darajasi emas");  
}
{
// While5
let n = 16;
let k = 0;

while (2 ** k < n) {
    k++;
}
console.log(`k ning qiymati: ${k}`);    
}


{
    // While6
let n = 5;
let result = 1;
let i = n;

while (i > 0) {
    result *= i;
    i -= 2;
}
console.log(`Ikkilangan faktorial: ${result}`);
}



{
  // While7
let n = 30;
let k = 1;

while (k ** 2 <= n) {
    k++;
}
k--; // ortiqcha qadamni chiqarib tashlaymiz
console.log(`k ning qiymati: ${k}`);  
}


{// While8
let n = 30;
let k = 1;

while (k ** 2 <= n) {
    k++;
}
console.log(`k ning qiymati: ${k}`);
}
{
 // While9
let n = 100;
let k = 0;

while (3 ** k <= n) {
    k++;
}
console.log(`k ning qiymati: ${k}`);   
}
{
 // While10
let n = 100;
let k = 0;

while (3 ** (k + 1) <= n) {
    k++;
}
console.log(`k ning qiymati: ${k}`);
   
}

