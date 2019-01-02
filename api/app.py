import json

from flask import Flask, request
from flask_cors import CORS
from recipe import recipe_query, random_recipe, get_recipe

app = Flask(__name__)
CORS(app)

@app.route("/")
def recipe():
    return "Hello World!"


@app.route("/query")
def query():
    print('Query: %s' % request.args)
    query = json.dumps(request.args)
    response = recipe_query(query)
    print (response)
    return response

@app.route("/random")
def random():
    response = random_recipe()
    return response

@app.route("/id")
def id():
    recipeId = json.dumps(request.args)
    response = get_recipe(recipeId)
    return response


if __name__ == "__main__":
    app.run(debug=True)
