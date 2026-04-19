from django import forms
from .models import cart  # or Customer, depending on what your model is named

class CustomerForm(forms.ModelForm):
    class Meta:
        model = cart
        fields = '__all__'
    ({'class': 'custom-input'})
