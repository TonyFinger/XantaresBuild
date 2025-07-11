const apiKeyInput = document.getElementById('apiKeyInput')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('metaForm')

const validarFormulario = async (event) =>{
    event.preventDefault()
    const apiKey = apiKeyInput.value
    const game = gameSelect.value
    const question = questionInput.value

    console.log({apiKey, game, question})

    if(apiKey.trim() == '' || game.trim() == '' || question.trim() == ''){
        askButton.disabled = true
        (askButton.disabled = false)
        alert('Por favor, preencha todos os campos')
        return
    }
}
if (form) {
  form.addEventListener('submit', validarFormulario)
}

if (askButton) {
  askButton.addEventListener("click", () => {
    console.log("AOBA")
  })
}


