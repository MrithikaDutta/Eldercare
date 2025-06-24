from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponse
from .models import User, ElderProfile, Provider
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from .serializers import UserSerializer, ElderProfileSerializer, ProviderSerializer, ElderRegistrationSerializer, ProviderRegistrationSerializer, CustomerLoginSerializer, ProviderLoginSerializer

# List all users
def users_list(request):
    users = User.objects.all().values()
    return JsonResponse(list(users), safe=False)

# Get user by ID
def user_detail(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    return JsonResponse({
        "user_id": user.user_id,
        "name": user.name,
        "email": user.email,
        "phone": user.phone,
        "user_type": user.user_type,
        "created_at": user.created_at,
    })

# List all elder profiles
def elders_list(request):
    elders = ElderProfile.objects.all().values()
    return JsonResponse(list(elders), safe=False)

# List all providers
def providers_list(request):
    providers = Provider.objects.all().values()
    return JsonResponse(list(providers), safe=False)

# Create user (example, POST only)
@csrf_exempt
def create_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user = User.objects.create(
            name=data.get("name"),
            email=data.get("email"),
            password_hash=data.get("password_hash"),
            phone=data.get("phone"),
            user_type=data.get("user_type"),
        )
        return JsonResponse({"user_id": user.user_id, "status": "created"})
    return JsonResponse({"error": "POST required"}, status=400)

class UserList(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class CustomerList(APIView):
    def get(self, request):
        customers = User.objects.filter(user_type='customer')
        serializer = UserSerializer(customers, many=True)
        return Response(serializer.data)

class ProviderList(APIView):
    def get(self, request):
        providers = User.objects.filter(user_type='provider')
        serializer = UserSerializer(providers, many=True)
        return Response(serializer.data)

class ProviderProfileList(APIView):
    def get(self, request):
        providers = Provider.objects.all()
        serializer = ProviderSerializer(providers, many=True)
        return Response(serializer.data)

class UserDetail(APIView):
    def get(self, request, user_id):
        try:
            user = User.objects.get(pk=user_id)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

class ElderRegisterView(APIView):
    def post(self, request):
        serializer = ElderRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id,  # <-- use 'id' instead of 'user_id'
                'email': user.email,
                'user_type': user.user_type,
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProviderRegisterView(APIView):
    def post(self, request):
        serializer = ProviderRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id,  # <-- use 'id' instead of 'user_id'
                'email': user.email,
                'user_type': user.user_type,
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomerLoginView(APIView):
    def post(self, request):
        serializer = CustomerLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id, 
                'email': user.email,
                'user_type': user.user_type,
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProviderLoginView(APIView):
    def post(self, request):
        serializer = ProviderLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id,  
                'email': user.email,
                'user_type': user.user_type,
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"detail": "Logout successful."}, status=status.HTTP_205_RESET_CONTENT)
        except KeyError:
            return Response({"error": "Refresh token required."}, status=status.HTTP_400_BAD_REQUEST)
        except TokenError:
            return Response({"error": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)

class CustomerLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.user.user_type != 'customer':
            return Response({"error": "Only customers can logout here."}, status=status.HTTP_403_FORBIDDEN)
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"detail": "Customer logout successful."}, status=status.HTTP_205_RESET_CONTENT)
        except KeyError:
            return Response({"error": "Refresh token required."}, status=status.HTTP_400_BAD_REQUEST)
        except TokenError:
            return Response({"error": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)

class ProviderLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.user.user_type != 'provider':
            return Response({"error": "Only providers can logout here."}, status=status.HTTP_403_FORBIDDEN)
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"detail": "Provider logout successful."}, status=status.HTTP_205_RESET_CONTENT)
        except KeyError:
            return Response({"error": "Refresh token required."}, status=status.HTTP_400_BAD_REQUEST)
        except TokenError:
            return Response({"error": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)

def home(request):
    return HttpResponse("Welcome to the Eldercare API!")
