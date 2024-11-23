from django.urls import path
from . import views


urlpatterns = [
    path('tasks', views.get_tasks, name='get-tasks'),
    path('tasks/<int:pk>', views.get_task, name='get-task'),
    path('tasks/create', views.create_task, name='create-task'),
]
