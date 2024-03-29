# Generated by Django 5.0.2 on 2024-02-21 06:50

import foodunityhubapp.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='donationdetailss',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('donatorid', models.IntegerField(unique=True)),
                ('ngosid', models.IntegerField()),
                ('restaurid', models.IntegerField()),
                ('restname', models.CharField(max_length=50)),
                ('ngoname', models.CharField(max_length=50)),
                ('donatorname', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('rphone', models.IntegerField(max_length=12)),
                ('ngophone', models.IntegerField(max_length=12)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('pincode', models.CharField(max_length=6)),
                ('amount', models.IntegerField()),
                ('pickupaddress', models.CharField(max_length=200)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='donatorlogins',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, verbose_name=foodunityhubapp.models.donatorregis)),
                ('password', models.CharField(max_length=50)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='donatorregis',
            fields=[
                ('donatorid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('first', models.CharField(max_length=50)),
                ('last', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('pincode', models.CharField(max_length=6)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='ngodeata',
            fields=[
                ('ngosid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('ngoname', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.IntegerField(max_length=12)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('pincode', models.CharField(max_length=6)),
                ('howmuch', models.IntegerField()),
                ('password', models.CharField(max_length=20)),
                ('ngodonaddr', models.CharField(max_length=100)),
                ('ngotododay', models.IntegerField(max_length=50)),
                ('ngotonweek', models.IntegerField(max_length=50)),
                ('ngotonmonth', models.IntegerField(max_length=50)),
                ('ngotonyear', models.IntegerField(max_length=50)),
                ('ngotonall', models.IntegerField(max_length=50)),
                ('fb', models.URLField()),
                ('ig', models.URLField()),
                ('x', models.URLField()),
                ('li', models.URLField()),
                ('imgurl', models.URLField()),
                ('cuorngday', models.IntegerField(max_length=50)),
                ('cuorngweek', models.IntegerField(max_length=50)),
                ('cuorngmonth', models.IntegerField(max_length=50)),
                ('cuorngyear', models.IntegerField(max_length=50)),
                ('cuorngall', models.IntegerField(max_length=50)),
                ('foundername', models.CharField(max_length=50)),
                ('foundermail', models.EmailField(max_length=254)),
                ('founderphone', models.IntegerField(max_length=12)),
                ('foundercity', models.CharField(max_length=50)),
                ('founderstate', models.CharField(max_length=50)),
                ('foundercountry', models.CharField(max_length=50)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ngologin',
            fields=[
                ('ngosid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('password', models.CharField(max_length=50)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ngoregist',
            fields=[
                ('ngosid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('ngoname', models.CharField(max_length=50)),
                ('foundername', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.IntegerField(max_length=10)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('pincode', models.CharField(max_length=6)),
                ('howmuch', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=20)),
                ('query', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='restauregister',
            fields=[
                ('restaurid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('restname', models.CharField(max_length=50)),
                ('ownername', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.IntegerField(max_length=10)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('pincode', models.CharField(max_length=6)),
                ('branch', models.CharField(max_length=50)),
                ('howmuch', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=20)),
                ('query', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='restdonte',
            fields=[
                ('donationid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('restaurid', models.IntegerField()),
                ('ngosid', models.IntegerField()),
                ('foodname', models.CharField(max_length=50)),
                ('foodquantity', models.IntegerField()),
                ('foodtype', models.CharField(max_length=50)),
                ('phone', models.IntegerField(max_length=12)),
                ('pickupaddress', models.CharField(max_length=100)),
                ('pickupcity', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='restlogin',
            fields=[
                ('restaurid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('password', models.CharField(max_length=50)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='restmenu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('restaurid', models.IntegerField()),
                ('restname', models.CharField(max_length=50)),
                ('itemname', models.CharField(max_length=50)),
                ('itemprice', models.IntegerField()),
                ('itemtype', models.CharField(max_length=50)),
                ('itmgurl', models.URLField()),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='restuserdata',
            fields=[
                ('restaurid', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('restname', models.CharField(max_length=50)),
                ('ownername', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.IntegerField(max_length=12)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('pincode', models.CharField(max_length=6)),
                ('branch', models.CharField(max_length=50)),
                ('howmuch', models.IntegerField()),
                ('password', models.CharField(max_length=20)),
                ('restdonttotal', models.IntegerField(max_length=50)),
                ('restdonday', models.IntegerField(max_length=50)),
                ('restdonweek', models.IntegerField(max_length=50)),
                ('restdonmonth', models.IntegerField(max_length=50)),
                ('restdonyear', models.IntegerField(max_length=50)),
                ('restdonall', models.IntegerField(max_length=50)),
                ('founderaddres', models.CharField(max_length=100)),
                ('foundermail', models.EmailField(max_length=254)),
                ('founderphone', models.IntegerField(max_length=12)),
                ('foundercity', models.CharField(max_length=50)),
                ('founderstate', models.CharField(max_length=50)),
                ('foundercountry', models.CharField(max_length=50)),
                ('fb', models.URLField()),
                ('ig', models.URLField()),
                ('x', models.URLField()),
                ('li', models.URLField()),
                ('imgurl', models.URLField()),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
