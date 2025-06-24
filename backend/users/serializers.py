from rest_framework import serializers
from .models import User, ElderProfile, Provider
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ElderProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElderProfile
        fields = '__all__'

class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'

class ElderRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password']

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['email'],  # Use email as username for elders
            user_type='customer'
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class ProviderRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'phone']

    def validate_email(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['email'],  # Use email as username for providers
            phone=validated_data['phone'],
            user_type='provider'
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class CustomerLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        if not user or user.user_type != 'customer':
            raise serializers.ValidationError("Invalid email or password.")
        data['user'] = user
        return data

class ProviderLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        if not user or user.user_type != 'provider':
            raise serializers.ValidationError("Invalid email or password.")
        data['user'] = user
        return data