# estoque/tests.py
from django.test import TestCase
from .models import Produto, Categoria

class ProdutoTests(TestCase):
    def setUp(self):
        self.categoria = Categoria.objects.create(nome='Eletrônicos')
        self.produto = Produto.objects.create(
            nome='Teste Produto',
            descricao='Descrição do teste',
            preco_venda=100.00,
            preco_custo=50.00,
            quantidade=10,
            unidade_medida='unidade',
            codigo_barras='1234567890123',
            categoria=self.categoria
        )

    def test_produto_creation(self):
        self.assertEqual(self.produto.nome, 'Teste Produto')
        self.assertEqual(self.produto.categoria.nome, 'Eletrônicos')
