import datetime
from django.shortcuts import render

# Create your views here.
def index(request):
    now1 = datetime.datetime.now()
    return render(request, 'newyear/index.html', {
        'newyear': now1.month == 3 and now1.year == 2024
    })