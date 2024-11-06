from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from estoque.views import detalhes_oferta, remover_oferta, salvar_movimentacao, salvar_produto, lista_produtos, detalhes_produto, remover_produto, relatorio_estoque, historico_vendas, lista_categorias, detalhes_categoria, lista_movimentacoes, detalhes_movimentacao, adicionar_produto, adicionar_movimentacao, pagina_inicial, atualizar_estoque
from estoque import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.pagina_inicial, name='pagina_inicial'),
    path('categorias/', views.lista_categorias, name='lista_categorias'),
    path('categorias/<int:categoria_id>/',
         views.detalhes_categoria, name='detalhes_categoria'),
    path('movimentacoes/', views.lista_movimentacoes, name='lista_movimentacoes'),
    path('movimentacoes/<int:movimentacao_id>/',
         views.detalhes_movimentacao, name='detalhes_movimentacao'),
    path('adicionar_produto/', views.adicionar_produto, name='adicionar_produto'),
    path('adicionar_movimentacao/', views.adicionar_movimentacao,
         name='adicionar_movimentacao'),
    path('produtos/', views.lista_produtos, name='lista_produtos'),
    path('produto/<int:produto_id>/',
         views.detalhes_produto, name='detalhes_produto'),
    path('produto/<int:produto_id>/remover/',
         views.remover_produto, name='remover_produto'),
    path('relatorio-estoque/', views.relatorio_estoque, name='relatorio_estoque'),
    path('historico-vendas/', views.historico_vendas, name='historico_vendas'),
    path('salvar_produto/', views.salvar_produto, name='salvar_produto'),
    path('salvar_movimentacao/', views.salvar_movimentacao,
         name='salvar_movimentacao'),
    path('oferta/<int:oferta_id>/',
         views.detalhes_oferta, name='detalhes_oferta'),
    path('oferta/remover/<int:oferta_id>/',
         views.remover_oferta, name='remover_oferta'),
    path('atualizar-estoque/', views.atualizar_estoque, name='atualizar_estoque'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
