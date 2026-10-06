const modalOverlay = document.getElementById('modal-overlay-perfil');
const openBtn = document.getElementById('btn-novo-perfil');
const cancelBtn = document.getElementById('btn-cancelar-perfil');
const form = document.getElementById('form-novo-perfil');
const editModalOverlay = document.getElementById('modal-overlay-editar-perfil');
const editBtn = document.getElementById('btn-editar-perfil');
const editCancelBtn = document.getElementById('btn-cancelar-editar');
const editForm = document.getElementById('form-editar-perfil');
const viewModalOverlay = document.getElementById('modal-overlay-visualizar-perfil');
const viewBtn = document.getElementById('btn-visualizar-perfil');
const viewCloseBtn = document.getElementById('btn-fechar-visualizar');
const deleteModalOverlay = document.getElementById('modal-overlay-excluir-perfil');
const deleteBtn = document.getElementById('btn-excluir-perfil');
const deleteCancelBtn = document.getElementById('btn-cancelar-excluir');
const deleteForm = document.getElementById('form-excluir-perfil');

let perfilAtual = null;

openBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
});

cancelBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    perfilAtual = Object.fromEntries(new FormData(form));
    form.reset();
    modalOverlay.classList.remove('active');
});

editBtn.addEventListener('click', function () {
    if (perfilAtual) {
        editForm.elements.nome.value = perfilAtual.nome;
        editForm.elements.cpf.value = perfilAtual.cpf;
        editForm.elements.registro.value = perfilAtual.registro;
        editForm.elements.senha.value = perfilAtual.senha;
    }

    editModalOverlay.classList.add('active');
});

editCancelBtn.addEventListener('click', function () {
    editModalOverlay.classList.remove('active');
});

editForm.addEventListener('submit', function (event) {
    event.preventDefault();

    perfilAtual = Object.fromEntries(new FormData(editForm));
    editModalOverlay.classList.remove('active');
});

viewBtn.addEventListener('click', function () {
    const perfil = perfilAtual || { nome: '', cpf: '', registro: '' };

    document.getElementById('visualizar-nome').value = perfil.nome;
    document.getElementById('visualizar-cpf').value = perfil.cpf;
    document.getElementById('visualizar-registro').value = perfil.registro;
    viewModalOverlay.classList.add('active');
});

viewCloseBtn.addEventListener('click', function () {
    viewModalOverlay.classList.remove('active');
});

deleteBtn.addEventListener('click', function () {
    deleteModalOverlay.classList.add('active');
});

deleteCancelBtn.addEventListener('click', function () {
    deleteModalOverlay.classList.remove('active');
});

deleteForm.addEventListener('submit', function (event) {
    event.preventDefault();

    perfilAtual = null;
    deleteForm.reset();
    deleteModalOverlay.classList.remove('active');
});
