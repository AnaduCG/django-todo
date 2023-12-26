from django.forms import ModelForm
from django import forms
from .models import Todo


class TodoForm(ModelForm):
    """Form definition for Todo."""

    class Meta:
        """Meta definition for Todoform."""

        model = Todo
        fields = ("title", "body")

        widgets = {
            "title": forms.TextInput(
                attrs={"class": "form-control"}
            ),
            "body": forms.Textarea(
                attrs={"class": "form-control"}
            ),
        }
