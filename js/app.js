console.log('yo')
// stabilisco numero di celle che deve avere una riga
const rigaCelle = 10
// calcolo totalità delle celle che avrò nella mia griglia
const celleTotali = 10 ** 2
// vado a prendere l'elemento nel dom dove dovrò mettere le mie celle
const container = document.querySelector('.container')
console.log(celleTotali, container)
// a questo punto mi creo una funzione che mi crea un div di classe celle
function createCells (celle) {
    for (let i = 0; i < celle; i++) {
        // creo il mio elemento div
        const divElement = document.createElement('div')
        // aggiungo la mia classe cella
        divElement.classList.add('celle')
        // a questo punto appendo ogni cella sul mio container
        container.append(divElement)
    }
}
 //invoco la mia funzione per creare celle

createCells(celleTotali)
