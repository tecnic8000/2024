from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'hello1/index.html')
def harri(request):
    return HttpResponse('h3ll0 hArri')
def greet(request, name1):
    return render(request, 'hello1/greet.html', {
        'name9': name1.capitalize()
    })