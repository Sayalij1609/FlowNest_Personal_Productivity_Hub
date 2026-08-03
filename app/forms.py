from flask_wtf import FlaskForm
from flask_wtf.file import FileField

from wtforms import (
    StringField,
    TextAreaField,
    SelectField,
    DateField,
    DateTimeLocalField,
    FileField,
    SubmitField,
    BooleanField,
    PasswordField
)

from wtforms.validators import (
    DataRequired,
    Email,
    Length,
    EqualTo
)

# Registration Form
class RegisterForm(FlaskForm):

    username = StringField(
        "Username",
        validators=[
            DataRequired(),
            Length(min=3, max=100)
        ]
    )

    email = StringField(
        "Email",
        validators=[
            DataRequired(),
            Email()
        ]
    )

    password = PasswordField(
        "Password",
        validators=[
            DataRequired(),
            Length(min=6)
        ]
    )

    confirm_password = PasswordField(
        "Confirm Password",
        validators=[
            DataRequired(),
            EqualTo("password")
        ]
    )

    submit = SubmitField("Register")

# Login Form
class LoginForm(FlaskForm):

    email = StringField(
        "Email",
        validators=[
            DataRequired(),
            Email()
        ]
    )

    password = PasswordField(
        "Password",
        validators=[
            DataRequired()
        ]
    )

    remember = BooleanField("Remember Me")

    submit = SubmitField("Login")

# Task Form
class TaskForm(FlaskForm):

    title = StringField(
        "Title",
        validators=[
            DataRequired(),
            Length(max=200)
        ]
    )

    description = TextAreaField(
        "Description"
    )

    priority = SelectField(
        "Priority",
        choices=[
            ("Low", "Low"),
            ("Medium", "Medium"),
            ("High", "High")
        ],
        default="Medium"
    )

    category = SelectField(
        "Category",
        coerce=int
    )

    deadline = DateField(
        "Deadline",
        format="%Y-%m-%d"
    )

    reminder = DateTimeLocalField(
        "Reminder",
        format="%Y-%m-%dT%H:%M"
    )

    attachment = FileField(
        "Attachment"
    )

    submit = SubmitField(
        "Save Task"
    )


# Category Form
class CategoryForm(FlaskForm):

    name = StringField(
        "Category Name",
        validators=[
            DataRequired(),
            Length(min=2, max=100)
        ]
    )

    color = StringField(
        "Color",
        default="#007bff"
    )

    submit = SubmitField(
        "Save Category"
    )

# Searching Tasks
class SearchForm(FlaskForm):

    search = StringField(
        "Search"
    )

    category = SelectField(
        "Category",
        coerce=int,
        choices=[(0, "All Categories")]
    )

    priority = SelectField(
        "Priority",
        choices=[
            ("", "All Priorities"),
            ("High", "High"),
            ("Medium", "Medium"),
            ("Low", "Low")
        ]
    )

    status = SelectField(
        "Status",
        choices=[
            ("", "All Status"),
            ("Pending", "Pending"),
            ("Completed", "Completed"),
            ("Archived", "Archived")
        ]
    )

    submit = SubmitField("Search")



