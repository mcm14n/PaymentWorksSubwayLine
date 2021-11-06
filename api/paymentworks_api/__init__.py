from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from paymentworks_api.views import routes

# create flask app
app = Flask(__name__)

# enable an open CORS Policy
cors = CORS(app, resources={r"*": {"origins": "*"}})
# create flask rest api
api = Api(app)

# add restful endpoint
api.add_resource(routes.SubwayRoutes, "/api/mbta/routes/fetch")
api.add_resource(routes.SubwayStops, "/api/mbta/stops/fetch")
