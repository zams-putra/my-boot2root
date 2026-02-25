#!/bin/bash

# Start FTP
service vsftpd start

# Start Apache
service apache2 start

# Start Go backend
/opt/app/go_server &

# Keep container alive
tail -f /dev/null
