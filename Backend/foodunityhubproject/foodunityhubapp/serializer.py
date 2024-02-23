from rest_framework import serializers
from .models import  restlogin,ngoregist, ngologin, restdonte, restauregister ,donatorlogins ,donatorregis , donationdetailss , restuserdata , restmenu , ngodeata , restdonte


class restauregisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = restauregister
        fields = ('restaurid','restname', 'ownername', 'email', 'phone', 'address', 'city', 'state', 'country', 'pincode', 'branch', 'howmuch', 'password', 'query')

class ngoregistSerializer(serializers.ModelSerializer):
    class Meta:
        model = ngoregist
        fields = ['ngosid','ngoname', 'foundername', 'email', 'phone', 'address', 'city', 'state', 'country', 'pincode', 'howmuch','password', 'query']


class ngologinSerializer(serializers.ModelSerializer):
    class Meta:
        model = ngologin
        fields = ['ngosid', 'password', 'datetime']


class RestloginSerializer(serializers.ModelSerializer):
   # restaurid = restauregisterSerializer()  # Use the RestauregisterSerializer for the foreign key field


    class Meta:
        model = restlogin
        fields = ['restaurid', 'password', 'datetime']


class donatorregisSerializer(serializers.ModelSerializer):
    class Meta:
        model = donatorregis
        fields = ['donatorid', 'first', 'last', 'email', 'phone', 'address', 'city', 'state', 'country', 'pincode', 'password']

class donatorloginsSerializer(serializers.ModelSerializer):
    class Meta:
        model = donatorlogins
        fields = ['username', 'password', 'datetime']


class donationdetailssSerializer(serializers.ModelSerializer):
    class Meta:
        model = donationdetailss
        fields = ['donatorid', 'ngosid', 'restname', 'ngoname', 'donatorname','email','rphone','ngophone','city','state','country','pincode','amount','pickupaddress','datetime']
class restuserdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = restuserdata
        fields = ['restaurid','restname', 'ownername', 'email', 'phone', 'address', 'city', 'state', 'country', 'pincode', 'branch', 'howmuch', 'password', 'restdonttotal','restdonday','restdonweek','restdonmonth','restdonyear','restdonall','datetime']

class restmenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = restmenu
        fields = ['restaurid','restname','itemname','itemprice','itemtype','itemimage','datetime'] 


class ngodeataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ngodeata
        fields = ['ngosid', 'ngoname', 'foundername', 'email', 'phone', 'address', 'city', 'state', 'country', 'pincode', 'howmuch', 'password', 'datetime','ngodonaddr','ngotododay','ngotonweek','ngotonmonth','ngotonyear','ngotonall','fb','ig','x','li','imgurl','cuorngday','cuorngweek','cuorngmonth','cuorngyear','cuorngall','foundermail','founderphone','foundercity','founderstate','foundercountry']

class restdonteSerializer(serializers.ModelSerializer):
    class Meta:
        model = restdonte
        fields = ['donationid', 'restaurid','ngosid', 'foodname', 'foodquantity', 'foodtype', 'phone', 'pickupaddress', 'pickupcity']

        