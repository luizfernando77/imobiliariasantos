function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    

    
    if (nome === "" || email === "" ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }

    
    return true;
}