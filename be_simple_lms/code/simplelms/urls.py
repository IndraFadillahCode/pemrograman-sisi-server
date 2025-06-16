
from django.contrib import admin
from django.urls import path
from lms_core.views import index, testing, addData, editData, deleteData, course_list
from lms_core.api import apiv1

urlpatterns = [
    path('api/v1/', apiv1.urls),
    path('admin/', admin.site.urls),
    path('testing/', testing, name='testing'),
    path('tambah/', addData, name='addData'),
    path('ubah/', editData, name='editData'),
    path('hapus/', deleteData, name='deleteData'),
    path('courses/', course_list, name='course_list'),
    path('', index, name='index'),
]

