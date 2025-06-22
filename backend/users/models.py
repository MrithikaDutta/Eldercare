from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils import timezone
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.

class User(models.Model):
    USER_TYPE_CHOICES = [
        ('customer', 'Customer'),
        ('provider', 'Provider'),
    ]
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password_hash = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.user_type})"

class ElderProfile(models.Model):
    elder_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='elders')
    name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=20)
    medical_notes = models.TextField(blank=True)
    preferences = models.TextField(blank=True)
    guardian_contact = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Provider(models.Model):
    provider_id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='provider_profile')
    address = models.CharField(max_length=255)
    services_offered = models.TextField()
    rate_per_hour = models.DecimalField(max_digits=8, decimal_places=2)
    images = models.TextField(blank=True)  # Can store comma-separated URLs or filenames
    staff_info = models.TextField(blank=True)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return f"Provider: {self.user.name}"
