.PHONY: install-yarn build-tea build-site clean

install-yarn:
	npm i yarn

build-tea: install-yarn
	cd design-system/; \
	yarn; \
	yarn build

build-site: build-tea
	cd site/; \
	yarn; \
	yarn build

clean:
	rm -rf design-system/node_modules

