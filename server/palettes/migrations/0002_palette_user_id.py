<<<<<<< HEAD:server/palettes/migrations/0002_palettes_user_id.py
# Generated by Django 3.1.1 on 2020-09-14 08:57
=======
# Generated by Django 3.1.1 on 2020-09-16 09:49
>>>>>>> a64c2a17b908a9358a07c7424cf9a60a1be38392:server/palettes/migrations/0002_palette_user_id.py

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('palettes', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='palette',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]