from rest_framework import serializers
from conversation.models import Chat


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'query', 'reply')
