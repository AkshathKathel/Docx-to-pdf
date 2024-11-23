# Use an official Node.js image as a base
FROM node:18

# Install necessary tools for document conversion (LibreOffice and qpdf)
RUN apt-get update && apt-get install -y \
    libreoffice-common \
    qpdf \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the backend code
COPY backend ./backend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Copy the frontend code
WORKDIR /app
COPY frontend ./frontend

# Install frontend dependencies and build the React app
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Move the built frontend app to the backend's public directory

# Expose ports for MongoDB, Backend, and Frontend
EXPOSE 27017 5000 3000

# Copy MongoDB entrypoint script and data directories
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Start MongoDB, Backend, and Frontend using the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
