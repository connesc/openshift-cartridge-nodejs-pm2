.PHONY: clean install deploy

deploy: install
	git add -A node_modules
	git commit -m "Deployment for Node.js $(shell node --version)"

install: clean
	npm install --production

clean:
	rm -rf node_modules
