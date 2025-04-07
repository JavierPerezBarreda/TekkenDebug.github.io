// Función que se ejecuta cuando se hace clic en una opción del quiz
function checkAnswer(isCorrect, gifUrl) {
    // Cambiar el GIF de error por otro GIF (según la opción seleccionada)
    const gifImage = document.getElementById("gifImage");
    gifImage.src = gifUrl;  // Cambia el GIF

    // Mostrar el mensaje de respuesta
    const resultElement = document.getElementById("result");
    if (isCorrect) {
        resultElement.innerHTML = "¡Correcto! El código está bien.";
        resultElement.className = "result correct";  // Cambia el estilo a correcto
    } else {
        resultElement.innerHTML = "¡Incorrecto! Intenta nuevamente.";
        resultElement.className = "result incorrect";  // Cambia el estilo a incorrecto
    }
}




