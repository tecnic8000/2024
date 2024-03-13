from django.shortcuts import render

tasks = ['food', 'bar', 'baz']
# Create your views here.
def index(request):
    return render(request, 'tasks/index.html', {
        'tasks': tasks
    })