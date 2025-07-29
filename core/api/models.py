from django.db import models
from accounts.models import CustomUser
# Create your models here.

class Bookings(models.Model):
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='customer_bookings')
    service_provider = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='provider_bookings')
    date = models.DateField()
    time = models.TimeField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

