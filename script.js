const windowbg = document.getElementById('windowback');
const openbtn = document.getElementById('novo-emp');
const cancelbtn = document.getElementById('cancelb');
const form = document.getElementById('newempwindow');
const tbody = document.getElementById('tabemp');

openbtn.addEventListener("click", function() {
    windowbg.classList.add('active');
});

cancelbtn.addEventListener("click", function() {
    windowbg.classList.remove('active');
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = new FormData(form);
    const newline = document.createElement('tr');

    newline.innerHTML = `
        <td>${data.get('ferramenta')}</td>
        <td>${data.get('usuario')}</td>
        <td>${data.get('setor')}</td>
        <td>${data.get('saida')}</td>
        <td>${data.get('devolucao')}</td>
    `;

    tbody.appendChild(newline);
    form.reset();
    windowbg.classList.remove('active');
});