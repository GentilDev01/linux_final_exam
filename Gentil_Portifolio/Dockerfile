FROM httpd:2.4

# Ensure we have the necessary tools to copy and modify files
RUN apt-get update && apt-get install -y \
    # Add any necessary tools like wget, curl, etc. if needed
    && rm -rf /var/lib/apt/lists/*

# Clear the default Apache document root
RUN rm -rf /usr/local/apache2/htdocs/*

# Copy your project files
COPY . /usr/local/apache2/htdocs/

# Set correct permissions
RUN chmod -R 755 /usr/local/apache2/htdocs/

# Expose the default HTTP port
EXPOSE 80