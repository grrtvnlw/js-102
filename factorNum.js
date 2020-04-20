function factorNum(a) {
    let counter = 1
    if (a === 0) {
        return 0;
    } 
    while (counter <= a) {
        if (a % counter === 0) {
            console.log(counter);
        }
        counter++
    } 
}

factorNum(120);
factorNum(15);
factorNum(90);