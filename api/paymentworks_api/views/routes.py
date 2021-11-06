import requests
from flask_restful import reqparse, abort, Resource

from paymentworks_api import exceptions
from paymentworks_api.views.utils.status import CODES
from paymentworks_api.views.utils.mbta import ENDPOINTS


class SubwayRoutes(Resource):
    """ Endpoint /api/mbta/routes/fetch to fetch all subway routes """

    def get(self):
        try:
            try:
                routes = requests.get(ENDPOINTS["routes"]).json()
                resp = dict(routes=routes["data"])
                return resp, CODES["OK"]
            except:
                raise exceptions.AppError(
                    "Routes Request Failed. Please try again.")
        except exceptions.AppError as exc:
            abort(exc.status, description=exc.message)


class SubwayStops(Resource):
    """ Endpoint /api/mbta/stops/fetch to fetch all stops for a route """

    def get(self):
        try:
            try:
                parser = reqparse.RequestParser()
                parser.add_argument('route_id')
                args = parser.parse_args()
                stops = requests.get(
                    ENDPOINTS["stops"](args.get("route_id"))).json()
                resp = dict(stops=stops["data"])
                return resp, CODES["OK"]
            except:
                raise exceptions.AppError(
                    "Stops Request Failed. Please try again.")
        except exceptions.AppError as exc:
            abort(exc.status, description=exc.message)
