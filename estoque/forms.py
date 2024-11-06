from django import forms
from .models import Produto, MovimentacaoEstoque, AtualizacaoEstoque

class ProdutoForm(forms.ModelForm):
    class Meta:
        model = Produto
        fields = ['nome', 'descricao', 'preco', 'categoria', 'imagem']

class MovimentacaoEstoqueForm(forms.ModelForm):
    class Meta:
        model = MovimentacaoEstoque
        fields = ['produto', 'tipo', 'quantidade', 'data']
        
class AtualizacaoEstoqueForm(forms.ModelForm):
    class Meta:
        model = AtualizacaoEstoque
        fields = ['produto', 'quantidade', 'motivo']
        widgets = {
            'produto': forms.Select(attrs={'class': 'form-control'}),
            'quantidade': forms.NumberInput(attrs={'class': 'form-control'}),
            'motivo': forms.Textarea(attrs={'class': 'form-control'}),
        }