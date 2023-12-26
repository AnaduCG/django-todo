from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import TodoSerializer
from todo_app.models import Todo
# Create your views here.

class TodoView(ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
