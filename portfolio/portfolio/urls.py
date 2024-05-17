"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from portfolio.views import index as main_index
from projects.views import index as project_index
from projects.views import views as project_views
from blog.views import index as blog_index
from blog.views import post as blog_post
from blog.views import add as blog_add

urlpatterns = [
    path('', main_index, name = 'index'),
    path('projects/', project_index, name = 'projects'),
    re_path(r'^projects/(?P<language>.*)/$', project_index, name = 'projects_lang'),
    re_path(r'^project/(?P<name>.*)/$', project_views, name = 'project_views'),
    path('blog/', blog_index, name = 'blog'),
    path('blog/add/', blog_add, name = 'add_blog_post'),
    re_path(r'^blog/(?P<id>.*)/$', blog_post, name = 'blog_post'),
    path('admin/', admin.site.urls),
]
