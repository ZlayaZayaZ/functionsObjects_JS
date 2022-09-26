function simpleNumber(n) {
    listnumber = [1, 2, 3, 5]
    if (listnumber.length > n) {
    let slicedListNumber = listnumber.slice(0, n);
    return slicedListNumber
    } else {
        for (let i = 6; listnumber.length < n; i++) {  
            // console.log(i);
            if ((i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0)) {
                // console.log('И все таки оно делится!') 
            } else {
                listnumber.push(i) 
            }
        }
        return listnumber
    }
}

console.time('simpleNumber')
console.log(simpleNumber(process.argv[2]))
console.timeEnd('simpleNumber')