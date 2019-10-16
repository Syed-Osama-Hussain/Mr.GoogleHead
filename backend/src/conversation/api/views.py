from django.shortcuts import render
from .serializer import ChatSerializer
from conversation.models import Chat
from rest_framework.generics import (
    ListAPIView, CreateAPIView)


class ChatListView(ListAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class ChatCreateView(CreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
