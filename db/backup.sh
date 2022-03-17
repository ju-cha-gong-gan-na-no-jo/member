#!/bin/bash
 
docker exec -it mysql_db ./backup.sh
docker cp mysql_db:/member_backup.tar.gz .
docker exec -it mysql_db rm -rf member_backup.tar.gz
ls -al | find member_backup.tar.gz