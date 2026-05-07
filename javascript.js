// Máscara de CPF e Validação
const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica a máscara 000.000.000-00
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    e.target.value = value;
});

// Máscara de Telefone (11) 99999-9999
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value.slice(0, 15); // Limita o tamanho
});


// Feedback no Botão de Login (Simulação de Carregamento)
const loginForm = document.querySelector('form');
const btnLogin = document.querySelector('.btn-primary');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    
    btnLogin.innerText = "Acessando conta...";
    btnLogin.style.opacity = "0.7";
    btnLogin.disabled = true;

    // Simula uma espera de rede de 2 segundos
    setTimeout(() => {
        alert("Simulação de login concluída!");
        btnLogin.innerText = "Continuar";
        btnLogin.style.opacity = "1";
        btnLogin.disabled = false;
    }, 2000);
});