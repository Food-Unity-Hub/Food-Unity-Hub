from django.shortcuts import render
from rest_framework import authentication, permissions
from . import models
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .models import restauregister  , restlogin , ngologin  , donatorregis, donatorlogins , donationdetailss , restuserdata , ngodeata
from .serializer import *
from django.http import JsonResponse , HttpResponse
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
import random


"""
class ngosregister(generics.ListCreateAPIView):
    queryset = ngosregister.objects.all()
    serializer_class = ngosregisterSerializer
"""

#restaurant registration
class restrister(generics.ListCreateAPIView):
    queryset = restauregister.objects.all()
    serializer_class = restauregisterSerializer

class restristers(generics.RetrieveUpdateDestroyAPIView):
    queryset = restauregister.objects.all()
    serializer_class = restauregisterSerializer

#ngo registration 


class restdonte(generics.ListCreateAPIView):
    queryset = restdonte.objects.all()
    serializer_class = restdonteSerializer

class restdontes(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = restdonteSerializer
    def get_queryset(self):
        return restdonte.objects.all()
    

class restmenudetails(generics.ListCreateAPIView):
    queryset = restmenu.objects.all()
    serializer_class = restmenuSerializer

class restmenudetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = restmenu.objects.all()
    serializer_class = restmenuSerializer

class ngodeata(generics.ListCreateAPIView):
    queryset = ngodeata.objects.all()
    serializer_class = ngodeataSerializer

"""class ngodeata(generics.RetrieveUpdateDestroyAPIView):
    queryset = ngodeata.objects.all()
    serializer_class = ngodeataSerializer"""


class ngoregiste(generics.ListCreateAPIView):
    queryset = ngoregist.objects.all()
    serializer_class = ngoregistSerializer

class ngoregister(generics.RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        return ngoregist.objects.all()
    queryset = ngoregist.objects.all()
    serializer_class = ngoregistSerializer
class DonatorRegis(generics.ListCreateAPIView):
    queryset = donatorregis.objects.all()
    serializer_class = donatorregisSerializer

    def get(self, request, *args, **kwargs):
        # Handle GET request to list all instances
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        # Handle POST request to create a new instance
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class donatorregis(generics.ListCreateAPIView):
    queryset = donatorregis.objects.all()
    serializer_class = donatorregisSerializer

class donatorlogins(generics.ListCreateAPIView):
    queryset = donatorlogins.objects.all()
    serializer_class = donatorloginsSerializer



class restuserdatad(generics.ListCreateAPIView):
    queryset = restuserdata.objects.all()
    serializer_class = restuserdataSerializer

class restuserdata(generics.RetrieveUpdateDestroyAPIView):
    #request.session['restaurid']= restaurid
    queryset = restuserdata.objects.all()
    serializer_class = restuserdataSerializer

#authenitcation 
class restlogin(APIView):
    def post(self , request, *args,**kwargs):
        json_data = request.data
        print(json_data)
        restaurid = json_data['restaurid']
        password = json_data['password']
        print(restaurid)
        print(password)
        veri = restauregister.objects.filter(restaurid=restaurid,password=password)
        restname = restauregister.objects.filter(restaurid=restaurid).values('restname')
        #print(restname[0]['restname'])  
        request.session['restaurid']= restaurid
        if veri:
           
            return Response({'message': 'Successfully Login'})
        else:
            return Response({'message': 'Invalid credentials'})
        #print(restauid)
        #print(password)

class ngologin(APIView):
    def post(self , request, *args,**kwargs):
        json_data = request.data
        print(json_data)
        ngosid = json_data['ngosid']
        password = json_data['password']
        print(ngosid)
        print(password)
        veri = ngoregist.objects.filter(ngosid=ngosid,password=password)
        ngoname = ngoregist.objects.filter(ngosid=ngosid).values('ngoname')
        #print(restname[0]['restname'])  
        request.session['ngosid']= ngosid
        if veri:
           
            return Response({'message': 'Successfully Login'})
        else:
            return Response({'message': 'Invalid credentials'})


"""class ngologin(APIView):
    def post(self, request, *args, **kwargs):
        json_data = request.data
        ngosid = json_data.get('ngosid')
        password = json_data.get('password')

        try:
            # Filter the ngosregister queryset based on ngosid and password
            veri = ngosregister.objects.filter(ngosid=ngosid, password=password)
            
            if veri.exists():  # Check if any records were found
                ngoname = veri.values('ngoname').first()  # Get the value of 'ngoname' from the first record
                request.session['ngosid'] = ngosid
                return Response({'message': 'Successfully Login', 'ngoname': ngoname})
            else:
                return Response({'message': 'Invalid credentials'})
        except Exception as e:
            print(e)
            return Response({'message': 'An error occurred'})"""
        #return Response({'message': 'User authenticated'},restauid,password)"""




"""
class restuserdata(generics.RetrieveUpdateDestroyAPIView):
    queryset = restuserdata.objects.all()
    serializer_class = donationdetailssSerializer

    def get_object(self):
        # Get the restaurid from the request or any other source
        restaurid = self.request.data.get('restaurid')

        # Retrieve data from both models based on restaurid
        restauregister_data = restauregister.objects.get(restaurid=restaurid)
        restuserdata_data, created = restuserdata.objects.get_or_create(restaurid=restaurid)

        # Update fields in restuserdata based on restauregister data
        restuserdata_data.restname = restauregister_data.restname
        restuserdata_data.ownername = restauregister_data.ownername
        restuserdata_data.email = restauregister_data.email
        restuserdata_data.phone = restauregister_data.phone
        restuserdata_data.address = restauregister_data.address
        restuserdata_data.city = restauregister_data.city
        restuserdata_data.state = restauregister_data.state
        restuserdata_data.country = restauregister_data.country
        restuserdata_data.pincode = restauregister_data.pincode
        restuserdata_data.branch = restauregister_data.branch
        restuserdata_data.howmuch = restauregister_data.howmuch
        restuserdata_data.password = restauregister_data.password

        # Save the updated restuserdata instance
        restuserdata_data.save()

        return restuserdata_data

"""


"""
class ddata(APIView):
    print("pass 0")
    def pass_data(self , request, *args , **kwargs):
        print("pass 0")
        restid = request.session['restaurid']
        if restid:
            restid = restid.get('restaurid')
            restid = donationdetailss.objects.get(restaurid=rid)
            serializer = donationdetailssSerializer(restid, many=True)
            return Response(serializer.data)
        else:
            return Response({'message': 'Invalid credentials'})

"""
"""

class restlogin(generics.GenericAPIView):
    print("pass 0")
    serializer_class = RestloginSerializer
    
    print("pass")

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
       # print(serializer)
        if serializer.is_valid():
            restauid = serializer.validated_data.get('restauid')
            password = serializer.validated_data.get('password')
           # restname = serializer.validated_data.get('restname')
            print(restauid)
            print(1)
            user = authenticate(request,restauid=restauid, password=password)
            print(restauid)
            print(password)
            if user:    
                print(2)    
                # User is authenticated, perform additional actions if neededI =                   
                                                                                                                                                                                         
                return Response({'message': 'User authenticated'},restauid,restauregister.restname)
            else:
                print(3)
                return Response({'message': 'Invalid credentials'})
        



def restlogin(request):
    if request.method == 'POST':
        print("POST DONE")
        try:
            restauid = request.POST['restauid']
            email = request.POST['email']
            #data = models.restlogin(restauid=restauid, email=email)
            data = models.restauregister(restauid=restauid, email=email)
            if (models.restauregister(restauid)== restauid) and (models.restauregister(email)== email):
                return JsonResponse({'message': 'Data received successfully'})
            data.save()
        except Exception as e:
            print("POST NOT DONE in exec")
            return JsonResponse({'message': 'Data not received'})
"""
    

def hello(HttpRequest):
    return HttpResponse("Hello world")

"""
def ngosregister(request):
    if request.method == 'POST':
        print("POST DONE")
        try:
            restname = request.POST['restname']
            ownername = request.POST['ownername']
            email = request.POST['email']
            phone = request.POST['phone']
            address = request.POST['address']
            city = request.POST['city']
            state = request.POST['state']
            country = request.POST['country']
            pincode = request.POST['pincode']
        #resttype = request.POST['resttype']
            branch = request.POST['branch']
            howmuch = request.POST['howmuch']
            query = request.POST['query']
            print("POST IN PROCESS")
            data = models.ngosregister(restname=restname, ownername=ownername, email=email, phone=phone, address=address, city=city, state=state, country=country, pincode=pincode,  branch=branch, howmuch=howmuch, query=query)
            data.save()
            return JsonResponse({'message': 'Data received successfully'})
        except Exception as e:
            print("POST NOT DONE in exec")
            return JsonResponse({'message': 'Data not received'})

    else:
        print("POST NOT DONE")
        return HttpResponse('Only POST request is allowed')
"""
        


def index(request):
    return JsonResponse({'message': 'Welcome to Food Unity Hub'}) 
