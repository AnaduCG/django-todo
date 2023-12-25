from django.shortcuts import render

# Create your views here.


def index(request):
    """index view function"""
    context = {}
    return render(request, "index.html", context)


def create(request):
    """index view function"""
    context = {}
    return render(request, "create-task.html", context)
