
Built by https://www.blackbox.ai

---

# Geolocation Tracker

## Project Overview
The Geolocation Tracker is a Node.js application that uses Express to serve a simple web application for tracking visitor IP addresses and their geolocations. The application stores visitor IPs and their corresponding geographical locations in memory, allowing users to access and visualize this data via API endpoints.

## Installation
To get started with the Geolocation Tracker, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/geolocation-tracker.git
   cd geolocation-tracker
   ```

2. Install the dependencies using npm:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Access the application by navigating to `http://localhost:8000` in your web browser.

## Usage
After you start the server, you can use the following endpoints:

- **Access Tracking Page**: Navigate to `/trackpage` to see the tracking page that requests geolocation.
- **Track Visitors**: When a visitor accesses the main tracking endpoint (`/track`), their IP address will be tracked, and they will be redirected to the specified TikTok URL.
- **Get Visitor IPs**: Access `/ips` to fetch a list of unique visitor IP addresses.
- **Get Visitor Locations**: Access `/locations` to retrieve a list of stored visitor locations.
- **Submit Location Data**: Send a POST request to `/location` with a JSON body containing latitude and longitude to store visitor locations:
  ```json
  {
    "latitude": 12.34,
    "longitude": 56.78
  }
  ```

## Features
- Track visitor IP addresses and geographic locations.
- Redirect users to a specified URL while logging their IPs.
- API endpoints to retrieve tracked IPs and locations.
- Simple web interface for geolocation tracking.

## Dependencies
The following major dependencies are included in the project:

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Geolocation**: A library to look up geolocations based on IP addresses.

You can check additional dependencies in `package.json` and `package-lock.json` files.

```json
{
  "dependencies": {
    "express": "^5.1.0",
    "geolocation": "^0.2.0"
  }
}
```

## Project Structure
The directory structure of the project is simple:

```
geolocation-tracker/
├── package.json
├── package-lock.json
└── server.js
└── public/
    └── trackpage.html  # The HTML file for the tracking page
```

- `server.js` - The main server file that sets up routes and middleware.
- `public/` - Contains static files such as the HTML tracking page.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to reach out for any questions or contributions! Happy coding!