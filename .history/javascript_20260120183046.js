// Seleciona o botão e o corpo da página
const btn = document.querySelector('.theme-switch');
const body = document.body;

// Verifica se o usuário já tinha uma preferência salva
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    btn.textContent = '☀️ Modo Claro';
}

btn.addEventListener('click', () => {
    // Alterna a classe dark-mode
    body.classList.toggle('dark-mode');
    
    // Define o tema para salvar no navegador
    let theme = 'light';
    
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        btn.textContent = '☀️ Modo Claro';
    } else {
        btn.textContent = '🌙 Modo Escuro';
    }
    
    // Salva a escolha no LocalStorage
    localStorage.setItem('theme', theme);
});