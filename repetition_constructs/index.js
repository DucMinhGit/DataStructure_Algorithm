var number = 1;
var sum = 0;
while (number < 11) {
  sum += number;
  ++number;
}

number = 1;
sum = 0;
for(number; number < 11; number++) {
  sum += number;
}

var numbers = [3, 7, 12, 22, 100];
sum = 0;

for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);