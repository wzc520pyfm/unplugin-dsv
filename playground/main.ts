import fruits from './fruits.csv'

document.getElementById('app')!.innerHTML = JSON.stringify(fruits)

// eslint-disable-next-line no-console
console.log('fruits', fruits)
