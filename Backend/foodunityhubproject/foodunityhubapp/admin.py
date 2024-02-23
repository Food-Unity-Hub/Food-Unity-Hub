from django.contrib import admin
from .models import  *

admin.site.register(restlogin) # Enable searching by name in the admin interface
admin.site.register(ngologin) # Enable searching by name in the admin interface
admin.site.register(ngoregist) # Enable searching by name in the admin interface

admin.site.register(restauregister)
class restauregister(admin.ModelAdmin):
    list_display = ('restaurid', 'restname') 
    Search_fields = ('restaurid', 'restname') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface

admin.site.register(donatorregis)
class donatorregis(admin.ModelAdmin):
    list_display = ('donatorid', 'first') 
    Search_fields = ('donatorid', 'first') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface
admin.site.register(donatorlogins)
class donatorlogins(admin.ModelAdmin):
    list_display = ('donatorid', 'password') 
    Search_fields = ('donatorid', 'password') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface


admin.site.register(donationdetailss)
class donationdetailss(admin.ModelAdmin):
    list_display = ('donatorid', 'donationid') 
    Search_fields = ('donatorid', 'donationid') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface

admin.site.register(restuserdata)
class restuserdata(admin.ModelAdmin):
    list_display = ('restaurid', 'restname') 
    Search_fields = ('restaurid', 'restname') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface
admin.site.register(restmenu)
class restmenu(admin.ModelAdmin):
    list_display = ('restaurid', 'restname') 
    Search_fields = ('restaurid', 'restname') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface

admin.site.register(ngodeata)
class ngodeata(admin.ModelAdmin):
    list_display = ('ngosid', 'ngoname') 
    Search_fields = ('ngosid', 'ngoname') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface

admin.site.register(restdonte)
class restdonte(admin.ModelAdmin):
    list_display = ('restaurid', 'restname') 
    Search_fields = ('restaurid', 'restname') # Enable searching by name in the admin interface
    # Enable searching by name in the admin interface
            # Enable searching by name in the admin interface