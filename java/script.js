function checkAnswer1(isCorrect) {
    const result = document.getElementById("result");
    const codeSnippet = document.getElementById("code-snippet");

    if (isCorrect) {
        result.textContent = "¡Correcto! Aquí está el código corregido:";
        result.className = "result correct";

        // Mostrar el código corregido
        codeSnippet.textContent = 'function saludo() { console.log("Hola, Mundo!"); }';  // Código corregido
    } else {
        result.textContent = "Incorrecto, intenta nuevamente.";
        result.className = "result incorrect";
    }
}

