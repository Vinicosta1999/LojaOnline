from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from datetime import datetime


class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

    
class Produto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    quantidade = models.IntegerField(default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='produtos')
    imagem = models.ImageField(upload_to='produtos/imagens/')

    def __str__(self):
        return self.nome


class Pedido(models.Model):
    cliente = models.CharField(max_length=100)
    produtos = models.ManyToManyField(Produto, through='ItemPedido')

    def __str__(self):
        return self.nome


class ItemPedido(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    quantidade = models.IntegerField()

    def __str__(self):
        return self.nome

    
class Venda(models.Model):
    produto = models.ForeignKey('Produto', on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField()
    preco_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    data_venda = models.DateTimeField(auto_now_add=True)
    vendedor = models.ForeignKey(User, on_delete=models.CASCADE)
    cliente = models.CharField(max_length=100, blank=True, null=True)
    metodo_pagamento = models.CharField(max_length=50, blank=True, null=True)
    preco_total = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def save(self, *args, **kwargs):

        self.subtotal = self.quantidade * self.preco_unitario
        
        if not self.preco_total:
            self.preco_total = self.subtotal
        
        super().save(*args, **kwargs)
        
        self.produto.estoque -= self.quantidade
        self.produto.save()

    def __str__(self):
        return f"Venda de {self.quantidade} unidades de {self.produto.nome} em {self.data_venda}"
    

class MovimentacaoEstoque(models.Model):
    TIPO_CHOICES = [
        ('entrada', 'Entrada'),
        ('saida', 'Saída'),
    ]

    produto = models.ForeignKey(Produto, on_delete=models.CASCADE, related_name='movimentacoes')
    tipo = models.CharField(max_length=7, choices=TIPO_CHOICES)
    quantidade = models.PositiveIntegerField()
    data = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        if self.tipo == 'entrada':
            self.produto.quantidade += self.quantidade
        elif self.tipo == 'saida':
            self.produto.quantidade -= self.quantidade
        self.produto.save()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.tipo} - {self.produto.nome} ({self.quantidade})"


class Oferta(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    descricao = models.TextField()
    imagem = models.ImageField(upload_to='ofertas/')

    def __str__(self):
        return self.nome    

class AtualizacaoEstoque(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField()
    data = models.DateTimeField(auto_now_add=True)
    motivo = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.produto.nome} - {self.quantidade}"    

# Create your models here.
