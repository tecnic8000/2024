from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('harri', views.harri, name='harri'),
    path('<str:name1>', views.greet, name='greet')
]