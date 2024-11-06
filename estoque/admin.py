from django.contrib import admin
from .models import Categoria, Produto, Pedido, ItemPedido, Venda, MovimentacaoEstoque, Oferta

admin.site.register(Categoria)
admin.site.register(Produto) 
admin.site.register(Pedido)
admin.site.register(ItemPedido)
admin.site.register(Venda)
admin.site.register(MovimentacaoEstoque)
admin.site.register(Oferta)

class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'preco_venda', 'quantidade', 'categoria')
    list_filter = ('categoria', 'preco_venda')
    search_fields = ('nome', 'descricao', 'codigo_barras')

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nome',)
    search_fields = ('nome',)