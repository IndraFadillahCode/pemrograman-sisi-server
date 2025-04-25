FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Update package list and install necessary packages
RUN apt-get update && \
    apt-get install -y libpng-dev && \
    docker-php-ext-install pdo pdo_mysql gd && \
    docker-php-ext-install mysqli && \
    docker-php-ext-enable mysqli

# Install Redis extension
RUN pecl install redis && docker-php-ext-enable redis

# Expose port 80
EXPOSE 80

# Command to run Apache
CMD ["apache2-foreground"]