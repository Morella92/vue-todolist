// Questa volta però lavorerete con un array di oggeti, 
// quindi ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, 
// il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
// che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue

let list = [

    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Comprare fiori per la casa',
        done: false
    },
    {
        text: 'Preparare torta di compleanno',
        done: true
    },
    {
        text: 'Allestire la tavola per gli invitati',
        done: false
    },
    {
        text: 'Comprare piatti e bicchieri a tema',
        done: true
    },
]

createApp({
    data() {
        return {

            // MILESTONE 1
            // Stampare all’interno di una lista HTML un item per ogni todo. 
            // Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
            listItem: list
        }
    },

    methods: {

        isTrue: function(){

            // if(this.done === true){

            //     this.text =
            // }
        }
    }
}).mount('#app')