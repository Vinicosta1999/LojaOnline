// main.js

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#e8491d";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "#ffffff";
        });
    });
    var paginaAtual = document.body.id;

    // Adicionar funcionalidades comuns a várias páginas aqui
    switch (paginaAtual) {
        case 'lista_produtos':
            validarFormularioListaProdutos();
            break;
        case 'detalhes_produto':
            validarFormularioDetalhesProduto();
            break;
        case 'remover_produto':
            validarFormularioRemoverProduto();
            break;
        case 'relatorio_estoque':
            validarFormularioRelatorioEstoque();
            break;
        case 'historico_vendas':
            validarFormularioHistoricoVendas();
            break;
        case 'lista_categorias':
            validarFormularioListaCategorias();
            break;
        case 'detalhes_categoria':
            validarFormularioDetalhesCategoria();
            break;
        case 'lista_movimentacoes':
            validarFormularioListaMovimentacoes();
            break;
        case 'detalhes_movimentacao':
            validarFormularioDetalhesMovimentacao();
            break;
        case 'adicionar_produto':
            validarFormularioProduto();
            break;
        case 'adicionar_movimentacao':
            validarFormularioMovimentacao();
            break;
        case 'pagina_inicial':
            validarFormularioPaginaInicial();
            break;
        default:
            break;
    }
});

// Funções para configurar funcionalidades específicas de cada página

function validarFormularioListaProdutos() {
    var filtro = document.getElementById('filtro').value.trim();

    if (filtro === '') {
        alert('Por favor, preencha o campo de filtro.');
        return false;
    }

    return true;
}

function validarFormularioDetalhesProduto() {
    var quantidade = document.getElementById('quantidade').value.trim();

    if (quantidade === '' || isNaN(quantidade) || parseInt(quantidade) <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return false;
    }

    return true;
}

function validarFormularioRemoverProduto() {
    var confirmacao = document.getElementById('confirmacao').checked;

    if (!confirmacao) {
        alert('Por favor, confirme a remoção do produto.');
        return false;
    }

    return true;
}
// Event listener para validar o formulário de lista de produtos antes do envio
var formListaProdutos = document.getElementById('form-lista-produtos');
if (formListaProdutos) {
    formListaProdutos.addEventListener('submit', function (event) {
        if (!validarFormularioListaProdutos()) {
            event.preventDefault();
        }
    });
}

// Event listener para validar o formulário de detalhes do produto antes do envio
var formDetalhesProduto = document.getElementById('form-detalhes-produto');
if (formDetalhesProduto) {
    formDetalhesProduto.addEventListener('submit', function (event) {
        if (!validarFormularioDetalhesProduto()) {
            event.preventDefault();
        }
    });
}

// Event listener para validar o formulário de remover produto antes do envio
var formRemoverProduto = document.getElementById('form-remover-produto');
if (formRemoverProduto) {
    formRemoverProduto.addEventListener('submit', function (event) {
        if (!validarFormularioRemoverProduto()) {
            event.preventDefault();
        }
    });
}

function validarFormularioRelatorioEstoque() {
    var categoria = document.getElementById('categoria').value;

    if (categoria === '') {
        alert('Por favor, selecione uma categoria.');
        return false;
    }

    return true;
}

function validarFormularioHistoricoVendas() {
    var dataInicial = document.getElementById('data-inicial').value.trim();
    var dataFinal = document.getElementById('data-final').value.trim();

    if (dataInicial === '' || dataFinal === '') {
        alert('Por favor, preencha ambas as datas.');
        return false;
    }

    // Validar se a data final é posterior à data inicial
    if (new Date(dataFinal) < new Date(dataInicial)) {
        alert('A data final deve ser posterior à data inicial.');
        return false;
    }

    return true;
}

function validarFormularioListaCategorias() {
    var nomeCategoria = document.getElementById('nome-categoria').value.trim();

    if (nomeCategoria === '') {
        alert('Por favor, preencha o campo de nome de categoria.');
        return false;
    }

    return true;
}
// Event listener para validar o formulário de relatório de estoque antes do envio
var formRelatorioEstoque = document.getElementById('form-relatorio-estoque');
if (formRelatorioEstoque) {
    formRelatorioEstoque.addEventListener('submit', function (event) {
        if (!validarFormularioRelatorioEstoque()) {
            event.preventDefault();
        }
    });
}

// Event listener para validar o formulário de histórico de vendas antes do envio
var formHistoricoVendas = document.getElementById('form-historico-vendas');
if (formHistoricoVendas) {
    formHistoricoVendas.addEventListener('submit', function (event) {
        if (!validarFormularioHistoricoVendas()) {
            event.preventDefault();
        }
    });
}

// Event listener para validar o formulário de lista de categorias antes do envio
var formListaCategorias = document.getElementById('form-lista-categorias');
if (formListaCategorias) {
    formListaCategorias.addEventListener('submit', function (event) {
        if (!validarFormularioListaCategorias()) {
            event.preventDefault();
        }
    });
}

function validarFormularioDetalhesCategoria() {
    var nome = document.getElementById('nome').value.trim();

    if (nome === '') {
        alert('Por favor, preencha o campo de nome de categoria.');
        return false;
    }

    return true;
}

function validarFormularioListaMovimentacoes() {
    var dataInicial = document.getElementById('data-inicial').value.trim();
    var dataFinal = document.getElementById('data-final').value.trim();

    if (dataInicial === '' || dataFinal === '') {
        alert('Por favor, preencha ambas as datas.');
        return false;
    }

    // Validar se a data final é posterior à data inicial
    if (new Date(dataFinal) < new Date(dataInicial)) {
        alert('A data final deve ser posterior à data inicial.');
        return false;
    }

    return true;
}

function validarFormularioDetalhesMovimentacao() {
    var quantidade = document.getElementById('quantidade').value.trim();

    if (quantidade === '' || isNaN(quantidade) || parseInt(quantidade) <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return false;
    }

    return true;
}
// Event listener para validar o formulário de detalhes de categoria antes do envio
var formDetalhesCategoria = document.getElementById('form-detalhes-categoria');
if (formDetalhesCategoria) {
    formDetalhesCategoria.addEventListener('submit', function (event) {
        if (!validarFormularioDetalhesCategoria()) {
            event.preventDefault();
        }
    });
}

// Event listener para validar o formulário de lista de movimentações antes do envio
var formListaMovimentacoes = document.getElementById('form-lista-movimentacoes');
if (formListaMovimentacoes) {
    formListaMovimentacoes.addEventListener('submit', function (event) {
        if (!validarFormularioListaMovimentacoes()) {
            event.preventDefault();
        }
    });
}

// Event listener para validar o formulário de detalhes de movimentação antes do envio
var formDetalhesMovimentacao = document.getElementById('form-detalhes-movimentacao');
if (formDetalhesMovimentacao) {
    formDetalhesMovimentacao.addEventListener('submit', function (event) {
        if (!validarFormularioDetalhesMovimentacao()) {
            event.preventDefault();
        }
    });
}

function validarFormularioProduto() {
    var nome = document.getElementById('nome').value.trim();
    var descricao = document.getElementById('descricao').value.trim();
    var preco = document.getElementById('preco').value.trim();

    if (nome === '' || descricao === '' || preco === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Validar preço como um número
    if (isNaN(preco)) {
        alert('Por favor, insira um preço válido.');
        return false;
    }

    // Validar preço como um valor positivo
    if (parseFloat(preco) <= 0) {
        alert('O preço deve ser maior que zero.');
        return false;
    }

    return true;
}

function validarFormularioMovimentacao() {
    var tipo = document.getElementById('tipo').value;
    var quantidade = document.getElementById('quantidade').value.trim();

    if (tipo === '' || quantidade === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Validar quantidade como um número inteiro positivo
    if (isNaN(quantidade) || parseInt(quantidade) < 1) {
        alert('Por favor, insira uma quantidade válida.');
        return false;
    }

    return true;
}

// Event listener para validar o formulário de adicionar produto antes do envio
var formProduto = document.getElementById('form-produto');
if (formProduto) {
    formProduto.addEventListener('submit', function (event) {
        if (!validarFormularioProduto()) {
            event.preventDefault();
        }
    });
}

// Event listener para validar o formulário de adicionar movimentação antes do envio
var formMovimentacao = document.getElementById('form-movimentacao');
if (formMovimentacao) {
    formMovimentacao.addEventListener('submit', function (event) {
        if (!validarFormularioMovimentacao()) {
            event.preventDefault();
        }
    });
}

function validarFormularioPaginaInicial() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Aqui você pode adicionar outras validações, como comprimento mínimo de senha, etc.

    return true;
}
// Event listener para validar o formulário da página inicial antes do envio
var formPaginaInicial = document.getElementById('form-pagina-inicial');
if (formPaginaInicial) {
    formPaginaInicial.addEventListener('submit', function (event) {
        if (!validarFormularioPaginaInicial()) {
            event.preventDefault();
        }
    });
    $(document).ready(function () {
        $('.offers-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Example: Alert when removing an offer
        const removeButton = document.querySelector('.btn-danger');
        if (removeButton) {
            removeButton.addEventListener('click', function () {
                return confirm('Tem certeza de que deseja remover esta oferta?');
            });
        }
    });
}
