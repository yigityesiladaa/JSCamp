function findPrimeThousand() {
  for (let i = 2; i < 1000; i++) {
    let total = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        total++;
      }
    }
    if (total == 0) {
      console.log(i);
    }
  }
}
findPrimeThousand();
