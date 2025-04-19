# Tracking Link Generator

This is a simple Node.js Express application that generates a tracking link which requests visitor GPS location access before redirecting to an external URL.

## Features

- Generates a tracking link that requests GPS access immediately on load.
- Stores visitor IP addresses and geolocation data.
- Displays visitor IPs and locations on the main page.
- Uses browser Geolocation API and IP-based geolocation.

## Running the Project Offline in VSCode

1. Clone the repository or download the project files.

2. Open the project folder in VSCode.

3. Open a terminal in VSCode and run:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:8000
   ```

6. Use the interface to generate tracking links and view visitor data.

## Deploying to Vercel

1. Ensure you have a Vercel account and the Vercel CLI installed.

2. The project is configured for Vercel deployment with the following:

   - `api/index.js` contains the Express app adapted for Vercel serverless functions.
   - `vercel.json` configures the build and routing.

3. To deploy:

   ```bash
   vercel login
   vercel
   ```

4. After deployment, your app will be accessible online via the Vercel URL.

## Notes

- Ensure you have Node.js installed on your system for local development.
- The project uses the `geolocation` npm package for IP-based geolocation.
- The tracking link redirects to an external URL after requesting GPS access.

## GitHub Repository

To publish this project to GitHub:

1. Initialize git in the project folder (if not already):

   ```bash
   git init
   ```

2. Add all files:

   ```bash
   git add .
   ```

3. Commit the files:

   ```bash
   git commit -m "Initial commit"
   ```

4. Create a new repository on GitHub.

5. Add the remote repository URL:

   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```

6. Push the code:

   ```bash
   git push -u origin main
   ```

Replace `yourusername` and `your-repo-name` with your GitHub username and repository name.
