from django import urls
from django.urls import path
from . import views
from .views import hello as helloworld ,restdonte,donatorregis ,ngoregister, restdontes , restrister , restristers , restlogin , restuserdata , restuserdatad , restmenudetail , restmenudetails , ngodeata , ngoregiste ,ngologin
urlpatterns = [
    path('restaurant/', restrister.as_view(),name='restaurant-list'),
    path('restaurant/<int:pk>/', restristers.as_view(),name='restaurant-details'),
    path('ngosregister/', ngoregiste.as_view(), name='ngosregister'),
    path('ngosregister/<int:pk>/', ngoregister.as_view(), name='ngosregister'),
    path('restlogin/', restlogin.as_view()  , name='restlogin'),
    path('restuserdata/', restuserdatad.as_view()  , name='restuserdata'),
    path('restuserdata/<int:pk>/', restuserdata.as_view()  , name='restuserdata'),
    path('restmenu/', restmenudetails.as_view()  , name='restmenu'),
    path('restmenu/<int:pk>/', restmenudetail.as_view()  , name='restmenu'),
    path('ngodeata/', ngodeata.as_view()  , name='ngodeata'),
    path('ngodeata/<int:pk>/', ngodeata.as_view()  , name='ngodeata'),
    path('ngologin/', ngologin.as_view()  , name='ngologin'),
    path('ngologin/<int:pk>/', ngologin.as_view()  , name='ngologin'),
    path('ngodeata/', ngodeata.as_view()  , name='ngodeata'),
    path('ngodeata/<int:pk>/', ngodeata.as_view()  , name='ngodeata'),
    path('restdonte/', restdonte.as_view()  , name='restdonte'),
    path('restdonte/<int:pk>/', restdontes.as_view()  , name='restdonte'),
    path('donatorregis/', donatorregis.as_view()  , name='donatorregis'),
    #path('ngosregister/', ngosregister.as_view(), name='ngosregister'),
   # path('restaurants/', restrister.as_view(), name='restaurant-register'),
    path('hello/', helloworld, name='hello'),
]  # + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)