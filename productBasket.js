const product = [
    {
        id: '1',
        name: 'галстук',
        description: 'в ассортименте',
        sizes: [],
        price: 500,
        available: true,
    },
    {
        id: '2',
        name: 'пиджак',
        description: 'мужской',
        sizes: [40, 42, 46, 48, 50],
        price: 5500,
        available: true,
    },
    {
        id: '3',
        name: 'брюки',
        description: 'классические со стрелками',
        sizes: [42, 44, 48, 50],
        price: 3500,
        available: true,
    },
    {
        id: '4',
        name: 'брюки',
        description: 'джинсы, зауженные',
        sizes: [40, 42, 44, 46, 48],
        price: 3000,
        available: true,
    },
    {
        id: '5',
        name: 'майка',
        description: 'с надписью "Музыка - жизнь"',
        sizes: [40, 42, 48, 50],
        price: 1500,
        available: true,
    },
]

let basket = [
    {
        good: product[0],
        amount: 3,
    },
    {
        good: product[3],
        amount: 1,
    }
]

function addBasket(i, n) {
    const newItem = {
        good: product[i],
        amount: +n,
    }
    basket.push(newItem) 
    return basket
}

function cleanBasket() {
    basket = []
    return basket
}

function deleteItem(i) {
    basket.splice(i, 1)
    return basket
}

function resultBasket () {
    var totalAmount = 0;
    var totalSumm = 0;
    var index, len;
    for (index = 0, len = basket.length; index < len; ++index) {
        totalAmount = totalAmount + basket[index].amount;
        totalSumm = totalSumm + basket[index].good.price * basket[index].amount
    }
    let resultBasket = {
        totalAmount: totalAmount,
        totalSumm: totalSumm,
    }
    return resultBasket
}

// для возможности вводить свои аргументы из терминала
// console.log(cleanBasket())
// console.log(deleteItem(process.argv[2]))
// console.log(addBasket(process.argv[2], process.argv[3]))

console.log(addBasket(4, 2))
console.log(deleteItem(0))
console.log(resultBasket())

console.log(cleanBasket())
console.log(resultBasket())