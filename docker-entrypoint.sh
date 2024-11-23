#!/bin/bash

# # Start MongoDB
# if command -v mongod &> /dev/null; then
#     mongod --fork --logpath /var/log/mongod.log
# else
#     echo "MongoDB is not installed or not available in the PATH."
#     exit 1
# fi

# Start the React app
cd /app/frontend
npm install
npm run build

# Serve the React app (dist directory)
npx serve -s dist -l 3000 &

# Start the Node.js backend
cd /app/backend
npm install
node src/server.js &

# Keep the container running
tail -f /dev/null
