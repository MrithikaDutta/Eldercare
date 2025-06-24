from django.contrib import admin
from .models import User, ElderProfile, Provider

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'user_type', 'date_joined')
    list_filter = ('user_type',)
    search_fields = ('username', 'email')

admin.site.register(User, UserAdmin)
admin.site.register(ElderProfile)
admin.site.register(Provider)

