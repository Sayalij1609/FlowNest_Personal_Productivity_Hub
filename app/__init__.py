from flask import Flask
from app.routes.main import main
from config import Config
from app.extensions import db #,login_manager, migrate



def create_app():
    """
    Application Factory
    Creates and configures the Flask application.
    """

    app = Flask(__name__)

    # Load configuration
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)

    # login_manager.init_app(app)
    # migrate.init_app(app, db)

    # Register blueprints
    app.register_blueprint(main)

    return app