# Menggunakan Ubuntu sebagai base image
FROM ubuntu:latest

# Update repository dan install Nginx
RUN apt-get update && apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Salin file index.html ke dalam folder default Nginx
COPY index.html /var/www/html/index.html

# Expose port 80 agar Nginx bisa menerima request
EXPOSE 80

# Jalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]
