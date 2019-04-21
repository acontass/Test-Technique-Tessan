const countPossibilities = (len, idx) => {
  let total = 0;
  for (var i = 0 ; i < len ; i++) {
      const d = idx % 2;
      total += d + 1;
      if (total > 26) break;
      idx = (idx - d) / 2;
  }
  return (total == 26) ? 1 : 0;
}

const main = () => {
  let possibilities = 0;
  for (let len = 13 ; len <= 26 ; ++len) {
    const size = Math.pow(2, len);
    let index = 0;
    let toAdd;
    while ((toAdd = countPossibilities(len, index)) >= 0) {
      possibilities += toAdd;
      if (++index >= size) break;
    }
  }
  console.log(possibilities);
};

main();
