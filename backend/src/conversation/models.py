from django.db import models


class Chat(models.Model):
    query = models.TextField()
    reply = models.TextField()

    def __str__(self):
        return self.query
