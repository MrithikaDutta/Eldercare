

from django.urls import path
from .views import ServiceProviderView, CustomerBookingView, ProviderBookingView

urlpatterns = [
    path('service-providers/', ServiceProviderView.as_view(), name='service-providers'),
    path('bookings/customer/', CustomerBookingView.as_view(), name='customer-bookings'),
    path('bookings/provider/', ProviderBookingView.as_view(), name='provider-bookings'),
]