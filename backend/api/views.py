from django.shortcuts import render
from django.http import HttpResponse


def home(reqest):
    return render(HttpResponse('<h1>Week Scheduler</h1>'))
