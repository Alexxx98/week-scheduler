from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import CustomUser
from .serializers import CustomUserSerializer, CustomUserRegistrationSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def regiter(request):
    user_data = request.data
    serializer = CustomUserRegistrationSerializer(user_data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.error)
