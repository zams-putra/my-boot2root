FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Install packages
RUN apt update && apt install -y \
    apache2 \
    vsftpd \
    sudo \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy frontend
COPY frontend/ /var/www/html/

# Copy backend
RUN mkdir -p /opt/app
COPY backend/go_server /opt/app/go_server
RUN chmod +x /opt/app/go_server

# Apache reverse proxy modules
RUN a2enmod proxy proxy_http rewrite

# Apache config
RUN rm /etc/apache2/sites-enabled/000-default.conf
COPY apache.conf /etc/apache2/sites-available/000-default.conf
RUN a2ensite 000-default.conf

# Create users
RUN useradd -m mr_nasgor && echo "mr_nasgor:nasgor_is_real" | chpasswd
RUN useradd -m nasgor_ftp && echo "nasgor_ftp:onion_ring" | chpasswd

# FTP config
COPY vsftpd.conf /etc/vsftpd.conf

# FTP files
COPY ftp_files/.for_you.txt /home/nasgor_ftp/.for_you.txt
COPY ftp_files/dev.txt /home/nasgor_ftp/dev.txt
RUN chown nasgor_ftp:nasgor_ftp /home/nasgor_ftp/*

# Flags
RUN echo "FLAG{ef24b324f3de13c6fc62cacfe2ba6fe5}" > /home/mr_nasgor/user.txt

# Secret web content
RUN mkdir -p /var/www/html/secret
COPY secret/recipes.txt /var/www/html/secret/recipes.txt

# Nasgor page
RUN mkdir -p /var/www/html/nasgor
COPY nasgor/index.html /var/www/html/nasgor/index.html

# Robots
COPY robots.txt /var/www/html/robots.txt

# Entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80 21 8080

CMD ["/entrypoint.sh"]
