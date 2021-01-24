function oneTillDoneWhileLoop(number) {
    let done = ''
    let i = 1;
    while (i <= number) {
      done += i;
      i++;
    }
    return done.split('');
  }
  console.log(oneTillDoneWhileLoop(20))