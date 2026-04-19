from django.db import models

class cart(models.Model):
    name = models.CharField(max_length=40)
    address = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    contact = models.CharField(max_length=10)

    def __str__(self):
        return self.name
