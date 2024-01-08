console.log('JS OK');

/*
Scompongo il problema
- 1 Recupero gli elementi dal DOM
- 2 Creo una lista della spesa
- 3 Creo la variabile per inserire la lista in pagina
- 4 Creo il ciclo for
- 5 Creo la chiusura della lista
- 6 Stampo la lista in pagina
- 7 Creo il ciclo while e commento il ciclo for
- 8 Devo inizializzare la variabile i
- 9 Incremento la variabile i
*/

// - 1 Recupero gli elementi dal DOM
const element = document.getElementById('section-list');
console.log(element);

// - 2 Creo una lista della spesa
const userList = ['uova', 'latte', 'mela', 'pomodoro', 'acqua', 'farina', 'carne', 'succo'];
console.log(userList);

// - 3 Creo la variabile per l'apertura la lista in pagina
let list = `<ul>`;

// - 4 Creo il ciclo for
// for (let i = 0; i < userList.length; i++) {
//     list += `<li>${userList[i]}</li>`;
//     console.log(list);
// }

// - 8 Devo inizializzare la variabile i
let i = 0;

// - 7 Creo il ciclo while e commento il ciclo for
while (i < userList.length) {
    list += `<li>${userList[i]}</li>`;

    // - 9 Incremento la variabile i
    i++;
}



// - 5 Creo la chiusura della lista
list += `</ul>`;

// - 6 Stampo la lista in pagina
element.innerHTML = list;