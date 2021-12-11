// Integer 1

let a, b, result, r, n, x1, y1, x2, y2, x3, y3, c, p, P, S, x, m, resultPlus,resultMultiply;
a=8;
b=5;

result = Math.sqrt(Math.sqrt((a**3+b**3)+(a**3-b**3)));

console.log(result);

// Integer 2

a = 4;
b = 9;

result = (a**2)/b;

console.log(result);

// Integer 3

a = 765;

result = Math.floor(a/100)+Math.floor(a/10)*10-Math.floor(a/100)*100+(a-Math.floor(a/10)*10)*100;

console.log(result);

// Integer 4

a =345;

result = Math.floor(a/100)*10+Math.floor((a-Math.floor(a/100)*100)/10)*100+(a-Math.floor(a/10)*10);

console.log(result);
// Integer 5
a = 4.5;
b = 9.6;

result = Math.round((9*(a**2)*b-27*(a**2)*(b**2)+15*(b**2))*100)/100;

console.log(result);

// Integer 6

r = 3;
n = 2;
a = 4;
b = 5;

result = (Math.pow((1+r/100), n))/(Math.sqrt(a**2+b**2));

console.log(result);

// Integer 7

x1 = -1.4;
y1 = 7.9;
x2 = 6.1;
y2 = 9.9;

result = Math.round(Math.sqrt((x2-x1)**2+(y2-y1)**2)*100)/100;

console.log(result);

// Integer 8

x1 = -9.7;
y1 = -9.9;
x2 = 0.0;
y2 = 2.9;
x3 = -0.1;
y3 = 5.2; 

a = Math.sqrt((x2-x1)**2+(y2-y1)**2);
b = Math.sqrt((x3-x2)**2+(y3-y2)**2);
c = Math.sqrt((x1-x3)**2+(y1-y3)**2);

p =(a+b+c)/2;
P = Math.round((p*2)*100)/100;
S = Math.round(Math.sqrt(p*(p-a)*(p-b)*(p-c))*100)/100;

console.log(P, S);

// Integer 9

a= -0.5;

x = Math.sin(a);

console.log(x);

// Integer 10

a= 0.5;

x = Math.cos(a);

console.log(x);

// Integer 11

a =81;

resultPlus = Math.floor(a/10)+(a-Math.floor(a/10)*10);
resultMultiply = Math.floor(a/10)*(a-Math.floor(a/10)*10);

console.log(resultPlus, resultMultiply);

// Integer 12

n =12;

result = 2*Math.pow((n+3), 2);

console.log(result);

// Integer 13

n =5;

result = Math.pow((n+3)/2, 2);

console.log(result);

// Integer 14

n = 4;
x = 2;

result = Math.pow(n, x)+Math.pow(6, x);

console.log(result);

// Integer 15

a = -8;

result = Math.abs(a);

console.log(result);

// Integer 16

m = 7.5;

result = Math.round(m*100)/100;

console.log(result);

// Integer 17

x = 2;
y = 3;

result = Math.pow(x, 4)+5*Math.pow(x, 2)+Math.pow(x, 3)*y;

console.log(result);

// Integer 18

x = 2;
y = 3;

result = 6*Math.pow(x, 3)*Math.pow(y, 5)+4*Math.pow(x, 4)*Math.pow(y, 3)-24*x*y;

console.log(result);

// Integer 19

a = 241

resultPlus = Math.floor(a/100)+Math.floor((a-Math.floor(a/100)*100)/10)+(a-Math.floor(a/10)*10);
resultMultiply = Math.floor(a/100)*Math.floor((a-Math.floor(a/100)*100)/10)*(a-Math.floor(a/10)*10);

console.log(resultPlus, resultMultiply);

// Integer 20

result = Math.abs(5/3-13/4);

console.log(result);