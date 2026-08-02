from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate

# Database object
db = SQLAlchemy()

# Login manager
login_manager = LoginManager()

# Database migration manager
migrate = Migrate()