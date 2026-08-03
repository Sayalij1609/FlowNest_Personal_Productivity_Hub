from flask import Flask
from config import Config
from app.extensions import db, login_manager, migrate
from app.routes.dashboard import dashboard
from app.routes.main import main
from app.routes.auth import auth
from app.routes.tasks import tasks
from app.routes.categories import categories

def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)

    login_manager.init_app(app)      # <-- REQUIRED

    login_manager.login_view = "auth.login"

    migrate.init_app(app, db)

    # Import models
    from app import models

    # Register blueprints
    app.register_blueprint(main)
    app.register_blueprint(auth)
    app.register_blueprint(dashboard)
    app.register_blueprint(tasks)
    app.register_blueprint(categories)
    
    return app