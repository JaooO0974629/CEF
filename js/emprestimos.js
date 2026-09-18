const modalOverlay = document.getElementById('modal-overlay');
const openBtn = document.getElementById('btn-novo-emprestimo');
const cancelBtn = document.getElementById('btn-cancelar');
const form = document.getElementById('form-novo-emprestimo');
const tbody = document.getElementById('lista-emprestimos');

openBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
});

cancelBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const newLine = document.createElement('tr');

    newLine.innerHTML = `
        <td>${data.get('ferramenta')}</td>
        <td>${data.get('usuario')}</td>
        <td>${data.get('setor')}</td>
        <td>${data.get('saida')}</td>
        <td>${data.get('devolucao')}</td>
    `;

    tbody.appendChild(newLine);
    form.reset();
    modalOverlay.classList.remove('active');
});
