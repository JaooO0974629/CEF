const modalOverlay = document.getElementById('modal-overlay');
const openBtn = document.getElementById('btn-nova-ferramenta');
const cancelBtn = document.getElementById('btn-cancelar');
const form = document.getElementById('form-nova-ferramenta');
const tbody = document.getElementById('lista-estoque');

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
        <td>${data.get('id')}</td>
        <td>${data.get('estoque')}</td>
        <td>${data.get('total')}</td>
        <td>${data.get('manutencao')}</td>
    `;

    tbody.appendChild(newLine);
    form.reset();
    modalOverlay.classList.remove('active');
});
