from django.db import models
from django.utils.timezone import now
from uuid import  uuid4


# Create your models here.
class Todo(models.Model):
    """Model definition for Todo."""
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=200, null=True, blank=True, unique=True)
    body = models.TextField(null=True, blank=True)
    created = models.DateTimeField(editable=False, default=now)
    updated = models.DateTimeField(auto_now=now)
    done = models.BooleanField(default=False)

    class Meta:
        """Meta definition for Todo."""

        verbose_name = "Todo"
        verbose_name_plural = "Todos"

    def __str__(self):
        """Unicode representation of Todo."""
        return str(self.title)
