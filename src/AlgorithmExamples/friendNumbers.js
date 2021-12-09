let friendNumbers = (number1, number2) => {
  let totalOfPositiveDivisors = 0;
  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      totalOfPositiveDivisors += i;
    }
  }
  if (totalOfPositiveDivisors == number2) {
    console.log(number1 + ' ve ' + number2 + ' Arkadaş Sayılardır.');
  } else {
    console.log(number1 + ' ve ' + number2 + ' Arkadaş Sayılar Değildir.');
  }
};

friendNumbers(220, 284);
