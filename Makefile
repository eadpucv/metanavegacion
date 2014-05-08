
.PHONY: less
	
less:
	lessc meta.less javascript/ead-bar/css/meta.css --clean-css -x

css: less

