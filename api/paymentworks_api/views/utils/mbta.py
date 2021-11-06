ENDPOINTS = {
    "routes": "https://api-v3.mbta.com/routes?filter[type]=0,1",
    "stops": lambda id: f"https://api-v3.mbta.com/stops?filter[route]={id}"
}
