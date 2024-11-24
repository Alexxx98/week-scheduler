from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Task
from .serializers import TaskSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_task(request):
    serializer = TaskSerializer(request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_tasks(request):
    tasks = Task.objects.filter(owner=request.user)
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_task(request, id):
    task = Task.objects.get(pk=id)
    serializer = TaskSerializer(task)
    return Response(serializer.data)


@api_view(['PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
def update_task(request, id):
    task = Task.objects.get(pk=id)
    serializer = TaskSerializer(task, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.error_messages)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_task(request, id):
    task = Task.objects.get(pk=id)
    task.delete()
    return Response({'success': True})
