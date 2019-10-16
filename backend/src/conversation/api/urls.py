from django.urls import path
from .views import ChatListView, ChatCreateView

urlpatterns = [
    path('', ChatListView.as_view()),
    path('create/', ChatCreateView.as_view()),

]
