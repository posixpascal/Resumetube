'use strict';

(function(){
	if (typeof console === "undefined"){
		window.console = {
			error: function(e){},
			log: function(e){}
		}
	}
	if (typeof jQuery === "undefined"){
		console.error("ResumeTube: Could not load jQuery. Try re-installing the plugin");
		return;
	}


	var VideoHelper = function(){
		this.plugins = [];


		return this;
	}

	VideoHelper.prototype.pluginsForDomain = function(domain){
		var plugins = this.plugins.filter(function(plugin){
			return (plugin.supports(domain));
		});

		return plugins;
	}

	VideoHelper.prototype.addPlugin = function(plugin){
		this.plugins.push(plugin);
	}


	var DomainHelper = function(){
		return this;
	}

	DomainHelper.generic = function(domains){
		return function(domain){
			var supports = false;
			for (var i = 0, len = domains.length; i < len; i++){
				var regex = domains[i];
				if (regex.test(domain)){
					supports = true;
					break;
				}
			}
			return supports;
		}
	}

	DomainHelper.prototype.getDomain = function(url){
		if (typeof url === "undefined") return window.location.hostname;

	}

	var Storage = function(scope){
		Storage.store = typeof Storage.store === "undefined" ? {} : Storage.store;
		Storage.store[scope] = {};
		return this;
	}

	Storage.withScope = function(domain){
		Storage.store = typeof Storage.store === "undefined" ? {} : Storage.store;
		
		if (typeof Storage.store[domain] !== "undefined"){
			return Storage.store[domain];
		} else {
			return new Storage(domain);
		}
	}

	var ResumeTube = function(){
		this.domainHelper = new DomainHelper();
		this.videoHelper = new VideoHelper();
		
	
		(document).dispatchEvent(new Event("resumetube:ready"), [this, Storage]);
		return this;
	};

	ResumeTube.prototype.getVideos = function(){

	}




	jQuery(document).ready(function(){
		window.resumeTube = new ResumeTube();
	});

})();