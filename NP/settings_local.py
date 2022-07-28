import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = 'hahahahh'

# for getting email to reset password using gmail

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'use@youremail.com'
EMAIL_HOST_PASSWORD = 'useyourpassword'

# PAYMENT GATEWAY
PAYMENT_MERCHANT_ID = 'use your merchant id'
PAYMENT_MERCHANT_KEY = 'use your merchant key'

# Change the value(true) of environment variables if ssl
SECURE_SSL_REDIRECT = False
