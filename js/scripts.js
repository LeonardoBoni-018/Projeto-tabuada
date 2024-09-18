// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplicacao-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator"); 
const multiplicationTable = document.querySelector("#multiplicate-table")
const multiplicationTitle = document.querySelector("#multiplication-title span")


// Funções

const createTable = (number,multiplicatorNumber) => {
    multiplicationTable.innerHTML = "" //Limpar a area

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i
        console.log(result)
        const templeate = `<div class = "row">
            <div class = "operation">${number} X ${i} = </div>
            <div class "result">${result}</div>
        </div>`

        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(templeate, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerHTML = number
}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const multiplicationNumber = numberInput.value;
    const multiplicatorNumber = multiplicationInput.value;
    if(!multiplicationNumber || !multiplicatorNumber){
        console.log("Insira todos os valores!")
        return
    }

    createTable(multiplicationNumber, multiplicatorNumber);
});