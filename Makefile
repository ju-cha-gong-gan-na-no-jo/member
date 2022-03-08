main:
	docker exec -it wordpressdb bash

create:
	docker exec -i wordpressdb mysql -uroot -pmember member_db < db/sql/create.sql

drop:
	docker exec -i wordpressdb mysql -uroot -pmember member_db < db/sql/drop.sql

show:
	docker exec -i wordpressdb mysql -uroot -pmember member_db < db/sql/show.sql