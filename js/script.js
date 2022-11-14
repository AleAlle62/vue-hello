/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue ({
    //qui inserisco il collegamento all'ID
    el: '#root',
    //qui inserisco i dati
    data: {
        primaClasse: 'questa è la prima scritta in vue', //questa è la creazione della classe assegnata al css
        secondaClasse: 'https://static.fanpage.it/wp-content/uploads/sites/6/2021/07/coughing-cat-b.jpg' //questa è l'immagine
    }
    
})