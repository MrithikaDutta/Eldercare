from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='users-list'),
    path('customers/', views.CustomerList.as_view(), name='customers-list'),
    path('providers/', views.ProviderList.as_view(), name='providers-list'),
    path('provider_profiles/', views.ProviderProfileList.as_view(), name='provider-profiles-list'),
    path('user/<int:user_id>/', views.UserDetail.as_view(), name='user-detail'),
    path('register/elder/', views.ElderRegisterView.as_view(), name='register-elder'),
    path('register/provider/', views.ProviderRegisterView.as_view(), name='register-provider'),
    path('login/customer/', views.CustomerLoginView.as_view(), name='customer-login'),
    path('login/provider/', views.ProviderLoginView.as_view(), name='provider-login'),
    path('logout/customer/', views.CustomerLogoutView.as_view(), name='customer-logout'),
    path('logout/provider/', views.ProviderLogoutView.as_view(), name='provider-logout'),
]