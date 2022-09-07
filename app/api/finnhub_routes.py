from flask import Blueprint, jsonify

import os
import requests

finnhub_routes = Blueprint('finnhub', __name__)

FINNHUB_API_KEY = os.environ.get('FINNHUB_API_KEY')

# API route to get all current market news
# Example output: https://finnhub.io/api/v1/news?category=general&token=cbu2r6iad3i96b4mbifg
@finnhub_routes.route('/market-news')
def fetch_market_news():
    res = requests.get(f'https://finnhub.io/api/v1/news?category=general&token={FINNHUB_API_KEY}')
    data = res.json()
    return jsonify(data)
