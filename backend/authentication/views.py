from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.views.decorators.csrf import csrf_exempt

from .models import CustomUser
from .serializers import CustomUserSerializer, CustomUserRegistrationSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    Check the user data from request, if they are correct,
    save them into the cookies and send those cookies in the response to the client
    """

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        data = response.data

        access_token = data.get('access')
        refresh_token = data.get('refresh')

        if access_token and refresh_token:
            response.set_cookies(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'  # make available for the entire domain
            )
            response.set_cookies(
                key='refesh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

        return response


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
@permission_classes([IsAuthenticated])
def logout(request):
    ...
