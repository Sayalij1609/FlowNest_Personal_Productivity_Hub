import os
from dotenv import load_dotenv

# Load variables from the .env file
load_dotenv()


class Config:
    """
    Application configuration class.
    All project settings are stored here.
    """

    # Secret key used by Flask
    SECRET_KEY = os.getenv("SECRET_KEY")

    # Database URI
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

    # Disable unnecessary tracking
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Folder for uploaded files
    UPLOAD_FOLDER = "app/static/uploads"

    # Maximum upload size (16 MB)
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024