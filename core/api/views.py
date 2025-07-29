from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from accounts.models import CustomUser
from .models import Bookings
from .serializers import ServiceProviderSerializer, BookingSerializer






class ServiceProviderView(APIView):

    def get(self, request):
        try:
            service_providers = CustomUser.objects.filter(user_type='service_provider', is_available=True)
            serializer = ServiceProviderSerializer(service_providers, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class BookingView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        bookings = Bookings.objects.filter(customer=request.user)
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = BookingSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomerBookingView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        bookings = Bookings.objects.filter(customer=request.user)
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BookingSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProviderBookingView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        bookings = Bookings.objects.filter(service_provider=request.user)
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)


