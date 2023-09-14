const shoppingList =[
    'Latte',
    'Cetrioli',
    'Cereali',
    'Vino',
    'Pasta',
    'Uova',
    'Fagioli',
    'Shampoo',
]
let i = 0
console.log(shoppingList);

while (i < shoppingList.length){
    const article = shoppingList[i];
    document.querySelector('ol').innerHTML = `<li>${article}</li>`
    i++
    console.log(article)
}
console.log('---------FINE CICLO----------')
