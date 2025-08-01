from rest_framework import serializers
from accounts.models import CustomUser
from .models import Bookings
class ServiceProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'phone', 'address', 'city', 'profile_picture', 'is_available')


class BookingSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
    service_provider = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())
    
    class Meta:
        model = Bookings
        fields = ('customer', 'service_provider', 'date', 'time', 'message')
        extra_kwargs = {
            'customer': {'read_only': True},
        }
    def create(self, validated_data):
        validated_data['customer'] = self.context['request'].user
        return super().create(validated_data)
    


class ViewBookingSerializer(serializers.ModelSerializer):
    customer = ServiceProviderSerializer(read_only=True)
    service_provider = ServiceProviderSerializer(read_only=True)
    service_provider_id = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all(), write_only=True, source='service_provider')

    class Meta:
        model = Bookings
        fields = ('id','customer', 'service_provider', 'service_provider_id', 'date', 'time', 'message')
        extra_kwargs = {
            'customer': {'read_only': True},
            'service_provider': {'read_only': True},
        }

    def create(self, validated_data):
        validated_data['customer'] = self.context['request'].user
        return super().create(validated_data)


