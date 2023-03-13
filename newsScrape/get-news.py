import json
import requests
import os



# Set up the API endpoint
url = "https://newsapi.org/v2/top-headlines"
params = {
    "country": "us",
    "category": "",
    "apiKey": "",
}

# Fetch the articles
response = requests.get(url, params=params)
articles = response.json()["articles"]

# Extract the relevant fields from each article
extracted_articles = []
for article in articles:
    extracted_article = {
        "title": article["title"],
        "description": article["description"],
        "url": article["url"],
        "urlToImage": article["urlToImage"],
    }
    extracted_articles.append(extracted_article)

# Save the articles to a file
with open("articles.json", "w") as f:
    f.write(json.dumps(extracted_articles))
