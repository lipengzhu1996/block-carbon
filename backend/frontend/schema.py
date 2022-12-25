import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from django.contrib.auth import get_user_model
from graphql_auth import mutations

from frontend.models import Project


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.ObjectType):
    projects = graphene.List(ProjectType, id=graphene.Int())
    user = graphene.Field(UserType)

    def resolve_projects(self, info, id=None):
        user = info.context.user
        if id:
            return Project.objects.filter(id=id)
        return Project.objects.all()

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
