'use strict';
(function(){
	var YoutubeRuntime = function(){
		this.recordingID = null;
		
		
	}

	YoutubeRuntime.prototype.handle = function(Storage){
		var isFlashPlayer = false;
		var isHTMLPlayer = false;
		var isPlaying = false;
		
		if (jQuery("video").length > 0){
			isHTMLPlayer = true;
			alert("true");
		} else if (jQuery("embed").length > 0){
			isFlashPlayer = true;
		}

	}

	YoutubeRuntime.prototype.isPlaying = function(){

	}

	YoutubeRuntime.prototype.getCurrentState = function(){

	}



	/**
	 * Fetch media playstate every second and store it in Storage
	 * This method calls: saveCurrentState as an interval
	 * To stop the recording, call @stopRecording.
	 * The following things are stored in the storage adapter:
	 * 	* elapsed seconds
	 * 	* total seconds
	 * 	* youtube_video_id
	 * 	* url
	 * 	* date
	 * 	* state: [paused, playing]
	 * 	* fullscreen
	 * @return {[type]} [description]
	 */
	YoutubeRuntime.prototype.startRecording = function(){

	}

	YoutubeRuntime.prototype.stopRecording = function(){

	}

	document.addEventListener("resumetube:ready", function(event, resumeTube, Storage){
		var supportFunction = resumeTube.domainHelper.generic([/youtube\.(.*)/ig]);
		var youtubePlugin = {
				name: "Youtube API",
				runtime: new YoutubeRuntime(),
				supports: supportFunction
		};

		resumeTube.videoHelper.addPlugin(youtubePlugin);

		if (supportFunction(resumeTube.domainHelper.getDomain())){
			youtubePlugin.handle(Storage);
		}
	}, false);

})();