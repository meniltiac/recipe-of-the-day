# Recipe of the Day

Created with React and Flask

To run locally, you will need to run two different servers from your terminal.
In the first terminal window, run:

`cd frontend`
`yarn add package.json`
`yarn start` to start the server

In the second terminal window, use a virtualenv like pyenv to create a python
2.7.* environment, then run:
`cd api`
`pip install -r requirements.txt`
`python app.py`

The python server should start on http://127.0.0.1:5000/. If you chose a
different port to run your server on, you'll need to update the fetch url
code in `recipe-of-the-day/frontend/src/components/RecipeList` so that the
React app interfaces with the flask app.

**Before the app will work**, you'll need to add a `key.py` file in your
`recipe-of-the-day/api/` directory with your RapidApi key. To do this, go to the
[RapidAPI Spoonacular docs](https://rapidapi.com/spoonacular/api/recipe-food-nutrition)
and sign up for free for that service. In the API Test Endpoint section of the
api browser, you can see your API key in the 'Request Snippet' section when you
switch the request language to 'Python'. Copy the key from "X-RapidAPI-Key" and
create a new file at `recipe-of-the-day/api/key.py`. There, you can enter
the following code:

`key = "<PASTE YOUR X-RAPID API KEY HERE>"`

Save this file. You will need to go to your terminal and re-start your python
server at this point.

You should now be able to navigate to http://127.0.0.1:3000/ and see the
recipes app.
