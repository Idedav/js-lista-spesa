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
let counter = 0

console.log(shoppingList);

while (counter < shoppingList.length){
    const article = shoppingList[counter];
    counter++
    console.log(article)
}