import os, django, requests, json
from datetime import datetime
from dateutil.parser import parse

from pprint import pprint

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')
django.setup()

from projects.models import Project, Language

# creates a requests session
def connect_github():
    try:
        with open('github.key') as f:
            github_token = f.read().strip()
    except:
        print("github.key not found")
        exit(0)

    session = requests.session()
    session.auth = ('AmazonPriime', github_token)
    return session

# gathers a dictionary containing all the repos
def get_repositories(session):
    return json.loads(session.get("https://api.github.com/user/repos").content)

# gathers all the projects and returns a dictionary
def get_projects(repos, session):
    projects = {}
    for repo in repos:
        if not repo['private'] and repo['owner']['id'] == 12765128:
            projects[repo['id']] = {
                'name' : repo['name'],
                'desc' : repo['description'],
                'url' : repo['html_url'],
                'date_c' : parse(repo['created_at']),
                'date_u' : parse(repo['updated_at']),
                'main_lang' : repo['language'],
                'langs' : json.loads(session.get(repo['languages_url']).content), # language:size(bytes)
                'stars' : int(repo['stargazers_count']),
                'watchers' : int(repo['watchers_count'])
            }
    return projects

# cleans DB of projects which have been removed from the repoistory
def clean_projects(projects):
    db_projects = Project.objects.all()
    for project in db_projects:
        if not int(project.project_id) in projects:
            print(project)
            project.delete()

# gathers all languages used and returns a set
def get_languages(projects):
    languages = set()
    for project in projects:
        for lang in projects[project]['langs']:
            languages.add(lang)
    return languages

# adds langauges to the database
def add_languages(languages):
    for language in languages:
        Language.objects.get_or_create(name = language)[0].save()
        print(f"-- Added {language}")

# adds projects to the database (edits them if they already exist)
def add_projects(projects):
    for project in projects:
        if projects[project]['main_lang'].lower() in ('css'):
            projects[project]['main_lang'] = "HTML"

        if not projects[project]['desc']:
            projects[project]['desc'] = "No description."

        language = Language.objects.get_or_create(name = projects[project]['main_lang'])[0]

        project_obj = Project.objects.get_or_create(project_id = str(project))[0]
        project_obj.name = projects[project]['name']
        project_obj.description = projects[project]['desc']
        project_obj.url = projects[project]['url']
        project_obj.date_created = projects[project]['date_c']
        project_obj.date_updated = projects[project]['date_u']
        project_obj.language = language
        project_obj.language_str = str(projects[project]['langs'])
        project_obj.stars = projects[project]['stars']
        project_obj.watchers = projects[project]['watchers']
        project_obj.save()

        print(f"-- Added {projects[project]['name']}")

# populates the database by running the two methods above
def populate(languages, projects):
    print("- Adding Languages to DB")
    add_languages(languages)
    print("- Finished Adding Languages")
    print("- Adding Projects to DB")
    add_projects(projects)
    print("- Finished Adding Projects")

# main method running all the code
def main():
    print("Starting script...")
    session = connect_github()
    repos = get_repositories(session)
    projects = get_projects(repos, session)
    print("- Removing Deleted Projects")
    clean_projects(projects)
    print("- Finsihed Removing Deleted Projects")
    languages = get_languages(projects)
    populate(languages, projects)
    print("Script finished.")

if __name__ == '__main__':
   main()
