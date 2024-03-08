/*

Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/


// Gioco dei dadi:

    // genero un numero randomico da 1 a 6 e assegno il numero generato al computer
    let computerNumber = Math.floor(Math.random() * 6) + 1; 
    console.log('computer' + '-' + computerNumber)

    // genero un numero randomico da 1 a 6 e assegno il numero generato al giocatore
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    console.log('player' + '-' + playerNumber)

    // confronto i due numeri generati e dichiaro il numero più grande vincitore
    const winner = 'wins';
    const draw = 'draw';

    if (computerNumber > playerNumber) {
        console.log('computer ' + winner)

    }else if (playerNumber > computerNumber) {
        console.log('player ' + winner)
        
    }else if (computerNumber === playerNumber) {
        console.log(draw)
        
    }