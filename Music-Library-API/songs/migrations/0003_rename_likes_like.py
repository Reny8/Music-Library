# Generated by Django 4.0.4 on 2022-04-25 18:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('songs', '0002_likes'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Likes',
            new_name='Like',
        ),
    ]
