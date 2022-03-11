"""
WSGI config for NP project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os
from whitenoise import WhiteNoise
from NP.settings import BASE_DIR, STATIC_ROOT
from datetime import datetime
os.environ.setdefault('last_modified', str(datetime.now()))
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'NP.settings')

application = get_wsgi_application()
application = WhiteNoise(application, root=os.path.join(BASE_DIR, STATIC_ROOT))
