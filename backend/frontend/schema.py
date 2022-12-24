import graphene
import graphql_jwt
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from django.contrib.auth import get_user_model

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


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(self, info, username, password):
        user = get_user_model()(username=username)
        user.set_password(password)
        user.save()
        return CreateUser(user=user)


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
    create_user = CreateUser.Field()
    create_project = CreateProject.Field()
    update_project = UpdateProject.Field()
    delete_project = DeleteProject.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
