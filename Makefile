main:
	docker exec -it memberdb bash

create:
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/create.sql

drop:
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/drop.sql

show:
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/show.sql

add:
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/add.sql

select:
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/select.sql

auto:
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/drop.sql
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/create.sql
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/add.sql
	docker exec -i memberdb mysql --login-path=root member_db < db/sql/select.sql
