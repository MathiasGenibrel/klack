FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
