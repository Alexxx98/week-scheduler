from django.urls import path
from . import views


urlpatterns = [
    path('tasks', views.get_tasks, name='get-tasks'),
    path('tasks/<int:pk>', views.get_task, name='get-task'),
    path('tasks/create', views.create_task, name='create-task'),
    path('tasks/update/<int:pk>', views.update_task, name='update-task'),
    path('task/delete/<int:pk>', views.delete_task, name='delete-task'),
]
