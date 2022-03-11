##################################################################################################
# NOTE
# 1. We have three environments
#   i) production
#   ii) development
#   iii) local
# 2. Use settings_local file only for local testing
#    Create your own settings_local from settings_local.py.sample file by duplicating it
#    If any addition in settings exists and that is dynamic follow point 3.
# 3. Use settings_env for development and production
#    if new dynamic settings
#       add that in settings_env.py file and set the corresponding key value in environment variables
#       also add in settings_local.py.sample with an example so that in future other developers can test locally
#    if new static settings exists i.e never changes or never seems to change add that in sNP.ettings file
##################################################################################################
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = os.environ['PROJECT_SECRET_KEY']

# for getting email to reset password using gmail
# use environ instead of getenv to throw the error

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = os.environ['EMAIL_HOST_USER']
EMAIL_HOST_PASSWORD = os.environ['EMAIL_HOST_PASSWORD']

# PAYMENT GATEWAY
PAYMENT_MERCHANT_ID = os.environ['PAYMENT_MERCHANT_ID']
PAYMENT_MERCHANT_KEY = os.environ['PAYMENT_MERCHANT_KEY']

# Change the value(true) of environment variables if ssl
SECURE_SSL_REDIRECT = os.getenv('SECURE_SSL_REDIRECT', 'false') == 'true'
