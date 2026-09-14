document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email && senha) {
        // Redireciona para o Dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});const cadastroForm = document.getElementById('cadastroForm');

if (cadastroForm) {
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        
        alert(`Participante ${nome} cadastrado com sucesso!`);
        cadastroForm.reset();
    });
}