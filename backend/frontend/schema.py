import graphene
# import graphql_geojson
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from django.contrib.auth import get_user_model
from graphql_auth import mutations
import stripe
import logging


from frontend.models import Project

logger = logging.getLogger('django')
# logger.info('here goes your message')

stripe.api_key = "sk_test_51NJq0TIMKbmsdl3YvIYGnOozMAhMHnhPx8GOG5gMYMQ9P2hQGIL7jfYLR7ms28ABeqJKZuhCAP6uTMDfARrKl2I300U4ZzAwVO"


def calculate_order_amount(id):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    return 100


class ProjectsType(DjangoObjectType):
    class Meta:
        model = Project
        fields = (["id", "title"])


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.ObjectType):
    projects = graphene.List(ProjectsType)
    project = graphene.Field(
        ProjectType, id=graphene.String())
    user = graphene.Field(UserType)
    payment_intent = graphene.String(id=graphene.String())

    def resolve_projects(self, info):
        return Project.objects.all()

    def resolve_project(self, info, id):
        return Project.objects.get(id=id)

    @login_required
    def resolve_payment_intent(self, info, id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Login Required")
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount(id=id),
            currency='usd',
            automatic_payment_methods={
                'enabled': True,
            },
        )

        return intent['client_secret']

    @login_required
    def resolve_user(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Login Required")
        return user


class CreateProject(graphene.Mutation):
    project = graphene.Field(ProjectType)

    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)

    @login_required
    def mutate(self, info, title, description):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Login Required")

        project = Project(user=user, title=title, description=description)
        project.save()

        return CreateProject(
            project=project
        )


class UpdateProject(graphene.Mutation):
    project = graphene.Field(ProjectType)

    class Arguments:
        id = graphene.Int(required=True)
        title = graphene.String(required=True)
        description = graphene.String(required=True)

    @login_required
    def mutate(self, info, id, title, description):
        user = info.context.user
        project = Project.objects.get(id=id)
        if user != project.user:
            raise Exception("Project owner not matched")

        project.title = title
        project.description = description
        project.save()

        return UpdateProject(
            project=project
        )


class DeleteProject(graphene.Mutation):
    message = graphene.String()

    class Arguments:
        id = graphene.Int(required=True)

    @login_required
    def mutate(self, info, id):
        user = info.context.user
        project = Project.objects.get(id=id)
        if user != project.user:
            raise Exception("Project owner not matched")

        project.delete()

        return DeleteProject(
            message=f"Project {id} Deleted"
        )


class Mutation(graphene.ObjectType):
    create_project = CreateProject.Field()
    update_project = UpdateProject.Field()
    delete_project = DeleteProject.Field()

    # graphql_auth
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()
    send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    password_reset = mutations.PasswordReset.Field()
    password_change = mutations.PasswordChange.Field()
    archive_account = mutations.ArchiveAccount.Field()
    delete_account = mutations.DeleteAccount.Field()
    update_account = mutations.UpdateAccount.Field()
    send_secondary_email_activation = mutations.SendSecondaryEmailActivation.Field()
    verify_secondary_email = mutations.VerifySecondaryEmail.Field()
    swap_emails = mutations.SwapEmails.Field()

    # django-graphql-jwt inheritances
    token_auth = mutations.ObtainJSONWebToken.Field()
    verify_token = mutations.VerifyToken.Field()
    refresh_token = mutations.RefreshToken.Field()
    revoke_token = mutations.RevokeToken.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
