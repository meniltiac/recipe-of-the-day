import json
import re
import unirest

from pprint import pprint, pformat

from key import key


def recipe_query(query_terms):
    if json.loads(query_terms)['query']:
        query = json.loads(query_terms)['query']
    else:
        query = 'burger'
    try:
        response = unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=paleo&e&intolerances=gluten&number=48&offset=0&type=main+course&query=" + query,
          headers={
            "X-RapidAPI-Key": key
          }
        )
        pprint(response.body)
        return json.dumps(response.body)
    except():
        print(e)
        return false


def random_recipe():
    response = unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",
      headers={
        "X-RapidAPI-Key": key
      }
    )
    pprint(response.body)
    return json.dumps(response.body)

def get_recipe(id):
    id = json.loads(id)['id']
    try:
        response = unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/information",
          headers={
            "X-RapidAPI-Key": key
          }
        )
        # clean the instructions -- crowdsourced api is not the most beautiful
        if response.body['instructions'] != "":
            instructions = response.body['instructions']
            instructions = re.sub(r'\.(\S)', r'. \1', instructions)
            instructions = re.sub(r'([a-z])([A-Z])', r'\1. \2', instructions)
            htmlTags = re.compile('<.*?>')
            instructions = re.sub(htmlTags, '', instructions)
            response.body['instructions'] = instructions
        return json.dumps(response.body)
    except():
        return false
