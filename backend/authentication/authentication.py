"""

By defualt the JWTAuthentication class expects a token to be passed in the Authorization header.
My goal is to store tokens in cookies, so the purpose of this file is to overwrite the authenticate method
of the JWTAuthentication class, to extract a token from cookies.

"""


from rest_framework_simplejwt.authentication import JWTAuthentication


class CookiesJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Get the access token from cookies
        raw_access_token = request.COOKIES.get('access_token')

        if not raw_access_token:
            return None

        validated_token = self.get_validated_token(raw_access_token)

        user = self.get_user(validated_token)

        # Return AuthUser and rest_framework_simplejwt.tokens.Token
        return (user, validated_token)
