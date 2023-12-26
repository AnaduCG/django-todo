from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .models import Todo
from .forms import TodoForm

# Create your views here.


def index(request):
    """index view function"""
    try:
        todos = Todo.objects.all().order_by("created")
    except Exception:
        todos = []
    context = {
        "todos": todos,
    }
    return render(request, "index.html", context)


def create(request):
    """index view function"""
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            todo_instance = form.save(commit=False)
            todo_instance.save()
            return redirect("create-task")
    else:
        form = TodoForm()
    context = {"form": form}
    return render(request, "create-task.html", context)
