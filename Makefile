start:
	docker-compose up -d
	@echo 'dashboard started in http://localhost:3005'
stop:
	docker kill $$(docker ps -q)
run-test:
	docker-compose run --rm k6 run /scripts/script.js
