const modalOverlay = document.getElementById('modal-overlay');
const openBtn = document.getElementById('btn-nova-ferramenta');
const cancelBtn = document.getElementById('btn-cancelar');
const form = document.getElementById('form-nova-ferramenta');
const tbody = document.getElementById('lista-estoque');
const supplierModalOverlay = document.getElementById('modal-fornecedor-overlay');
const supplierOpenBtn = document.getElementById('btn-novo-fornecedor');
const supplierCancelBtn = document.getElementById('btn-cancelar-fornecedor');
const supplierForm = document.getElementById('form-novo-fornecedor');
const supplierStorageKey = 'fornecedores';
const supplierInput = document.getElementById('fornecedor');
let suppliers = JSON.parse(localStorage.getItem(supplierStorageKey) || '[]');

function renderSuppliers() {
    supplierInput.replaceChildren(
        new Option('Selecione um fornecedor...', '')
    );

    suppliers.forEach(function (supplier) {
        supplierInput.add(new Option(supplier.nome, supplier.cnpj));
    });
}

renderSuppliers();



openBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
});

cancelBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});

supplierOpenBtn.addEventListener('click', function () {
    supplierModalOverlay.classList.add('active');
});

supplierCancelBtn.addEventListener('click', function () {
    supplierForm.reset();
    supplierModalOverlay.classList.remove('active');
});

supplierForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = new FormData(supplierForm);
    const cnpj = String(data.get('cnpj')).replace(/\D/g, '');

    if (cnpj.length !== 14) {
        alert('O CNPJ precisa ter 14 números.');
        return;
    }

    if (suppliers.some(function (supplier) {
        return supplier.cnpj === cnpj;
    })) {
        alert('Esse CNPJ já está cadastrado.');
        return;
    }

    const supplier = {
        nome: String(data.get('nome')).trim(),
        cnpj: cnpj,
        telefone: String(data.get('telefone')).replace(/\D/g, ''),
        email: String(data.get('email')).trim()
    };

    suppliers.push(supplier);
    localStorage.setItem(supplierStorageKey, JSON.stringify(suppliers));

    renderSuppliers();
    supplierInput.value = cnpj;
    supplierForm.reset();
    supplierModalOverlay.classList.remove('active');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const newLine = document.createElement('tr');
    const fornecedor = data.get('fornecedor');
    newLine.dataset.fornecedor = fornecedor;

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

