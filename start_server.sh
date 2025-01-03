#!/bin/bash

# Export environment variables
export USER="user nginx;"
export SERVER_NAME="localhost"
export WEB_ROOT="/path/to/website/root"
export PORT="8080"
export SSL="" #for https

# Substitute environment variables in the template
envsubst '$SERVER_NAME $WEB_ROOT $PORT $USER $SSL' < nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Check if Nginx is already running
if pgrep -x "nginx" > /dev/null
then
    echo "Nginx is already running, reloading configuration..."
    sudo nginx -s reload
else
    echo "Starting Nginx..."
    sudo nginx -g 'daemon on;'
fi
