from rest_framework.decorators import api_view, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Task
from .serializers import TaskSerializer


@api_view(['POST'])
@authentication_classes([IsAuthenticated])
def create_task(request):
    task = request.data
    serializer = TaskSerializer(task)
