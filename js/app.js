// console.log('yo');
console.log(chooseDifficulty())
// const rigaCelle = chooseDifficulty();
// console.log(rigaCelle)
// stabilisco numero di celle che deve avere una riga

// calcolo totalità delle celle che avrò nella mia griglia
// const celleTotali = 10 ** 2;
// vado a prendere l'elemento nel dom dove dovrò mettere le mie celle
const container = document.querySelector('.container');
// console.log(celleTotali, container);
// vad o a prendere il bottone dove si genererà la griglia
const playButton = document.querySelector('.play');
// console.log(playButton);
// a questo punto mi creo una funzione che mi crea un div di classe celle
function createGrid (celle) {
    container.classList.remove('grid_template_hard', 'grid_template_medium', 'grid_template_easy')
    // container.classList.remove('grid_template_medium')
    // container.classList.remove('grid_template_easy')
    container.innerHTML = ''
    numeroCelle = celle ** 2
    // Qui cambierò la classe in base alla mia griglia
    if (numeroCelle === 100) {
        container.classList.add('grid_template_hard')
        
    } else if (numeroCelle === 81) {
        container.classList.add('grid_template_medium')
    } else {
        container.classList.add('grid_template_easy')
    }
    for (let i = 0; i < numeroCelle; i++) {
        // Evoco la mia funzione per creare le celle
        const cella = createCell ();
        // metto il numero corrispondente alla casella nel mio div creato
        cella.innerHTML= i + 1
        // a questo punto appendo ogni cella sul mio container
        container.append(cella);
    }
}

//invoco la mia funzione per creare celle
// createGrid(rigaCelle)

// creo la mia funzione che va a prelevare il dive cella
function createCell () {
    const divElement = document.createElement('div');
    divElement.classList.add('celle');
    // aggiongo l'event listener
    divElement.addEventListener('click', clickCheck);

    return divElement;
}
// creo la mia funziona che va a evidenziare le caselle e stampare nella console il numero relativo alla casella
function clickCheck(event) {
    // console.log(this);
    cell = this;
    // metto un colore alla mia cella se viene cliccata
    cell.classList.toggle('clicked');
    // metto un messaggio in console della cella clickata
    // console.log(this.innerHTML);
}

// voglio che la mia griglia appaia solo quando l'utente clicca il tasto gioca
// console.log(playButton);
// playButton.addEventListener('click', chooseDifficulty)
// playButton.addEventListener('click', createGrid)
playButton.addEventListener('click', function(){
    createGrid(chooseDifficulty());
});
    
// const easy = document.querySelector('option[value="easy"]');
// console.log(easy);

// const medium = document.querySelector('option[value="medium"]');
// console.log(medium);

// const hard = document.querySelector('option[value="hard"]');
// console.log(hard);

function chooseDifficulty() {
    // prendo l'elemento nel dom della selection
    const difficulty = document.getElementById('difficulty');
    // trasformo il dato della value trovata in Intero
    difficultyInt = parseInt(difficulty.value);
    // console.log(difficultyInt, typeof difficultyInt);
    // In base alla difficoltà scelta cambio il numero di caselle
    if (difficultyInt === 1) {
        console.log('difficoltà 1');
        num = 7;
    } else if (difficultyInt === 2) {
        console.log('difficoltà 2');
        num = 9;
    } else {
        console.log ('difficoltà 3');
        num = 10;
    }
    return num
}
   
    

    


    
   

