.PHONY: build-tea build-site clean

build-tea:
	cd design-system/; \
	npm i; \
	npm run build

build-site: build-tea
	cd site/; \
	npm i; \
	npm run build

clean:
	rm -rf design-system/node_modules

