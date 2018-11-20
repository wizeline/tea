.PHONY: build-tea build-site clean

build-tea:
	cd design-system/; \
	yarn; \
	yarn build

build-site: build-tea
	cd site/; \
	yarn; \
	yarn build

clean:
	rm -rf design-system/node_modules

