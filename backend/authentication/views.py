from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

from .models import CustomUser
from .serializers import CustomUserSerializer, CustomUserRegistrationSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def register(request):
    user_data = request.data
    serializer = CustomUserRegistrationSerializer(data=user_data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def login(request):
    ...
