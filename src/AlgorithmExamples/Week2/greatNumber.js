let greatNumber = () => {
  for (let i = 1; i <= 1000; i++) {
    let totalOfPositiveDivisors = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        totalOfPositiveDivisors += j;
      }
    }
    if (totalOfPositiveDivisors == i) {
      console.log(i);
    }
  }
};

greatNumber();
