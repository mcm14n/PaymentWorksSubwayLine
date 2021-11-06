import axios from "axios";
import api from "./api";

export async function fetchRoutes() {
  return axios.get(api.routes);
}

export async function fetchStops(routeId) {
  return axios.get(api.stops, { params: { route_id: routeId } });
}
