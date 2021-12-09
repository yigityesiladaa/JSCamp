let isPrime = (...numbers) => {
  let flag = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 2) {
      console.log(numbers[i] + ' Asal Olmayan Bir Sayıdır!');
    } else if (numbers[i] == 2) {
      console.log('2 Asal Bir Sayıdır');
    } else {
      for (let j = 2; j < numbers[i]; j++) {
        flag = numbers[i] % j;
        if (flag == 0) {
          break;
        }
      }
      if (flag > 0) {
        console.log(numbers[i] + ' Asal Bir Sayıdır');
      } else {
        console.log(numbers[i] + ' Asal Olmayan Bir Sayıdır!');
      }
    }
  }
};

isPrime(9971);
