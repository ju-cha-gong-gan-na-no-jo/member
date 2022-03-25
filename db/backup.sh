#!/bin/bash
name=$(date '+%Y-%m-%d')
docker exec -it mysql_db ./backup.sh
docker cp mysql_db:/"$name-member-backup.tar.gz" .
docker exec -it mysql_db rm -rf "$name-member-backup.tar.gz"
ls -al | find "$name-member-backup.tar.gz"