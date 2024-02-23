from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver

""" restname: value.restname,
      ownername: value.ownername,
      email : value.email,
      phone : value.phone,
      address : value.address,
      city : value.city,
      state : value.state,
      country : value.country,
      pincode : value.pincode,
      resttype : value.resttype,
      branch : value.branch,
      howmuch : value.howmuch,
      query : value.query """


class donatorregis(models.Model):
    first = models.CharField(max_length=50)
    last =  models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.username    



class ngoregist(models.Model):
    ngosid = models.IntegerField(primary_key=True, unique=True)
    ngoname = models.CharField(max_length=50)
    foundername = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.IntegerField(max_length=10)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    howmuch = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    query = models.TextField()
   # datetime = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.ngoname



class restauregister(models.Model):
    #restaurid = models.IntegerField(primary_key=True, unique=True)
    restaurid = models.IntegerField(primary_key=True, serialize=False, unique=True)
    restname = models.CharField(max_length=50)
    ownername = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.IntegerField(max_length=10)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    branch = models.CharField(max_length=50)
    howmuch = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    query = models.TextField()
    #datetime = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.restname
        
class restlogin(models.Model):

    restaurid = models.IntegerField(primary_key=True, unique=True)
    password = models.CharField(max_length=50)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.restauid)

class ngologin(models.Model):
    ngosid = models.IntegerField(primary_key=True, unique=True)
    password = models.CharField(max_length=50)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.ngosid

class donatorlogins(models.Model):
    username = models.CharField(donatorregis,max_length=50)
    password = models.CharField(max_length=50)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

class donationdetailss(models.Model):
    donatorid = models.IntegerField(unique=True)
    ngosid = models.IntegerField()
    restaurid = models.IntegerField()
    restname = models.CharField(max_length=50)
    ngoname = models.CharField(max_length=50)
    donatorname = models.CharField(max_length=50)
    email = models.EmailField()
    rphone = models.IntegerField(max_length=12)
    ngophone = models.IntegerField(max_length=12)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    amount = models.IntegerField()
    pickupaddress = models.CharField(max_length=200)
    datetime = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.donatorname

class restmenu(models.Model):
    restaurid = models.IntegerField()
    restname = models.CharField(max_length=50)
    itemname = models.CharField(max_length=50)
    itemprice = models.IntegerField()
    itemtype = models.CharField(max_length=50)
    itmgurl = models.URLField(max_length=200)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.itemname

"""donationid : number;
    restaurid : number ;
    foodname: string;
    foodquantity: number;
    foodtype: string;
    phone :number;
    pickupaddress : string;
    pickupcity : string;
    time : Date;"""

class restdonte(models.Model):
    donationid = models.IntegerField(primary_key=True, unique=True)
    restaurid = models.IntegerField()
    ngosid = models.IntegerField()
    foodname = models.CharField(max_length=50)
    foodquantity = models.IntegerField()
    foodtype = models.CharField(max_length=50)
    phone = models.IntegerField(max_length=12)
    pickupaddress = models.CharField(max_length=100)
    pickupcity = models.CharField(max_length=50)
   # datetime = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.donationid)  


class restuserdata(models.Model):
    restaurid = models.IntegerField(primary_key=True, unique=True)
    restname = models.CharField(max_length=50)
    ownername = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.IntegerField(max_length=12)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    branch = models.CharField(max_length=50)
    howmuch = models.IntegerField()
    password = models.CharField(max_length=20)
    restdonttotal = models.IntegerField(max_length=50)    
    restdonday = models.IntegerField(max_length=50)
    restdonweek = models.IntegerField(max_length=50)
    restdonmonth = models.IntegerField(max_length=50)
    restdonyear = models.IntegerField(max_length=50)
    restdonall = models.IntegerField(max_length=50)
    founderaddres = models.CharField(max_length=100)
    foundermail = models.EmailField()
    founderphone = models.IntegerField(max_length=12)
    foundercity = models.CharField(max_length=50)
    founderstate = models.CharField(max_length=50)
    foundercountry = models.CharField(max_length=50)
    fb = models.URLField(max_length=200)
    ig = models.URLField(max_length=200)
    x = models.URLField(max_length=200)
    li = models.URLField(max_length=200)
    #profimg = models.ImageField(upload_to='restuserdata/images/')
    imgurl= models.URLField(max_length=200)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.restname

@receiver(post_save, sender=donationdetailss)
def update_restuserdata(sender, instance, created, **kwargs):
    if created:
        try:
            # Fetch the corresponding restuserdata instance
            restuserdata_instance = restuserdata.objects.get(restaurid=instance.restaurid)
            # Calculate the time difference
            time_difference = timezone.now() - restuserdata_instance.datetime
            # If more than 24 hours have passed, reset restdonday to 0
            if time_difference.total_seconds() > 24 * 60 * 60:
                restuserdata_instance.restdonday = 0
            # Update restdontotal, restdonweek, and restdonmonth fields
            restuserdata_instance.restdonday += int(instance.amount)
            restuserdata_instance.restdonttotal += int(instance.amount)
            restuserdata_instance.restdonweek += int(instance.amount)
            restuserdata_instance.restdonmonth += int(instance.amount)
            restuserdata_instance.restdonyear += int(instance.amount)
            # If more than 7 days have passed, reset restdonweek to 0
            if time_difference.total_seconds() > 7 * 24 * 60 * 60:
                restuserdata_instance.restdonweek = int(instance.amount)
            # If the month has changed, reset restdonmonth to 0
            if restuserdata_instance.datetime.month != timezone.now().month:
                restuserdata_instance.restdonmonth = int(instance.amount)
            # Save the changes
            restuserdata_instance.save()
        except restuserdata.DoesNotExist:
            pass  # Handle the case if restuserdata instance does not exist

@receiver(post_save, sender=restauregister)
def create_restuserdata(sender, instance, created, **kwargs):
    if created:
        try:
            restregidata_instance = restuserdata.objects.create(
                restaurid=instance.restaurid,
                restname=instance.restname,
                ownername=instance.ownername,
                email=instance.email,
                phone=instance.phone,
                address=instance.address,
                city=instance.city,
                state=instance.state,
                country=instance.country,
                pincode=instance.pincode,
                branch=instance.branch,
                howmuch=instance.howmuch,
                password=instance.password,
                restdonttotal=0,
                restdonday=0,
                restdonweek=0,
                restdonmonth=0,
                restdonyear=0,
                restdonall=0,
            )
        except restuserdata.DoesNotExist:
            pass


@receiver(post_save, sender=ngoregist)
def create_ngodeata(sender, instance, created, **kwargs):
    if created:
        try:
            ngoregdata_instance = ngodeata.objects.create(
                ngosid=instance.ngosid,
                ngoname=instance.ngoname,
                foundername=instance.foundername,
                email=instance.email,
                phone=instance.phone,
                address=instance.address,
                city=instance.city,
                state=instance.state,
                country=instance.country,
                pincode=instance.pincode,
                howmuch=instance.howmuch,
                password=instance.password,
                ngodonaddr=instance.address,
                ngotododay=0,
                ngotonweek=0,
                ngotonmonth=0,
                ngotonyear=0,
                ngotonall=0,
                cuorngday=0,
                cuorngweek=0,
                cuorngmonth=0,
                cuorngyear=0,
                cuorngall=0,
                foundermail="email",
                founderphone='0',
                foundercity="city",
                founderstate="state",
                foundercountry="country",
            )
        except ngodeata.DoesNotExist:
            pass

@receiver(post_save, sender=donationdetailss)
def update_ngodeata(sender, instance, created, **kwargs):
    if created:
        try:
            # Fetch the corresponding ngodeata instance
            ngodeata_instance = ngodeata.objects.get(ngosid=instance.ngosid)
            # Calculate the time difference
            time_difference = timezone.now() - ngodeata_instance.datetime
            # If more than 24 hours have passed, reset cuorngday to 0
            if time_difference.total_seconds() > 24 * 60 * 60:
                ngodeata_instance.cuorngday = 0
            # Update cuorngweek, and cuorngmonth fields
            ngodeata_instance.ngotododay += int(instance.amount)
            ngodeata_instance.ngotonweek += int(instance.amount)
            ngodeata_instance.ngotonmonth += int(instance.amount)
            ngodeata_instance.ngotonyear += int(instance.amount)
            ngodeata_instance.ngotonall += int(instance.amount)
            # If more than 7 days have passed, reset cuorngweek to 0
            if time_difference.total_seconds() > 7 * 24 * 60 * 60:
                ngodeata_instance.ngotonweek = int(instance.amount)
            # If the month has changed, reset cuorngmonth to 0
            if ngodeata_instance.datetime.month != timezone.now().month:
                ngodeata_instance.ngotonmonth = int(instance.amount)
            # Save the changes
            ngodeata_instance.save()
        except ngodeata.DoesNotExist:
            pass

class ngodeata(models.Model):
    ngosid = models.IntegerField(primary_key=True, unique=True)
    ngoname = models.CharField(max_length=50)
    foundername = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.IntegerField(max_length=12)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    howmuch = models.IntegerField()
    password = models.CharField(max_length=20)
    ngodonaddr = models.CharField(max_length=100)
    ngotododay = models.IntegerField(max_length=50)
    ngotonweek = models.IntegerField(max_length=50)
    ngotonmonth = models.IntegerField(max_length=50)
    ngotonyear = models.IntegerField(max_length=50)
    ngotonall = models.IntegerField(max_length=50)
    fb = models.URLField(max_length=200)
    ig = models.URLField(max_length=200)
    x = models.URLField(max_length=200)
    li = models.URLField(max_length=200)
    imgurl= models.URLField(max_length=200)
    cuorngday = models.IntegerField(max_length=50)
    cuorngweek = models.IntegerField(max_length=50)
    cuorngmonth = models.IntegerField(max_length=50)
    cuorngyear = models.IntegerField(max_length=50)
    cuorngall = models.IntegerField(max_length=50)
    foundername = models.CharField(max_length=50)
    foundermail = models.EmailField()
    founderphone = models.IntegerField(max_length=12)
    foundercity = models.CharField(max_length=50)
    founderstate = models.CharField(max_length=50)
    foundercountry = models.CharField(max_length=50)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.ngoname

