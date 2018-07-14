// store topic names
var topics = [
	"Jack Nicholson"
];

// store gif data for each topic
var topic_data = {};

// store gif logic
var gifs = {

	// load any topics from localStorage
	loadTopics: function() {
		for (var i = 0; i < localStorage.length; i++) {
			var new_topic = localStorage.getItem(`stored_${i}`);
			if (topics.indexOf(new_topic) == -1) {
				topics.push(new_topic);
				console.log(`loaded: ${new_topic}`);
			}
		}
	},

	allowAdd: function() {
		$("#add_topic_button").on("click", function() {
			event.preventDefault();
			var new_topic = $("#add_topic_text").val().trim();
			if (topics.indexOf(new_topic) == -1 && new_topic != "") {
				topics.push(new_topic);
				console.log(`added topic: ${new_topic}`);
			}
			$("#add_topic_text").val("");
			gifs.displayButtons();
		});
	},

	// save topics to localStorage
	allowSave: function() {
		$("#save_topics").on("click", function() {
			localStorage.clear();
			for (a in topics) {
				localStorage.setItem(`stored_${a}`, topics[a]);
			}
			console.log("topics saved.")
		});
	},

	allowReset: function() {
		$("#reset_topics").on("click", function() {
			topics = ["Jack Nicholson"];
			gifs.displayButtons();
			$("#app_gifs").empty();
			console.log("cleared.")
		});
	},

	setMouseover: function() {
		$(".topic_gif").hover(function() {
			var topic = $(this).data("topic");
			var num = $(this).data("num");
			$(this).attr("src", topic_data[topic][num].gif_animated);
		}, function() {
			var topic = $(this).data("topic");
			var num = $(this).data("num");
			$(this).attr("src", topic_data[topic][num].gif_still);
		});
	},

	// add button to app_buttons for each name in topics[]
	displayButtons: function() {
		$("#app_buttons").empty();
		for (a in topics) {
			$("<button>", {
				class: "topic_button",
				"data-topic": topics[a],
				text: topics[a]
			}).appendTo("#app_buttons");
		}

		// set click listener on buttons
		$(".topic_button").on("click", function() {
			// change clicked button color
			$(".topic_button").removeAttr("id");
			$(this).attr("id", "button_selected");

			var topic = $(this).data("topic");
			gifs.getGifs(topic); // calls displayGifs()
		});
	},

	// add ratings, gifs to #app_gifs
	displayGifs: function(topic) {
		$("#app_gifs").empty();
		for (g in topic_data[topic]) {
			var upper_rating = topic_data[topic][g].gif_rating.toUpperCase();

			$("<div/>", {
				class: "topic_div",
				id: `topic_div_${g}`
			}).appendTo("#app_gifs");

			$("<p/>", {
				class: "topic_rating",
				text: `RATED ${upper_rating}`
			}).appendTo(`#topic_div_${g}`);
			
			$("<img/>", {
				class: "topic_gif",
				src: topic_data[topic][g].gif_still,
				alt: topic,
				"data-topic": topic,
				"data-num": g
			}).appendTo(`#topic_div_${g}`);
		}
		gifs.setMouseover();
	},

	// grab gifs from giphy, add data to topic_data
	getGifs: function(topic) {
		var api_key = "vc71KHRBkcPMlX6JHoZDvXjiQe5Y2jqw";
		var query_url = `https://api.giphy.com/v1/gifs/search
			?q=${topic}&api_key=${api_key}&limit=10`;

		$.ajax({
			url: query_url,
			method: "GET"
		}).then(function(response) {

			// initialize topic_data
			topic_data[topic] = [];

			// get info from giphy
			for (var i = 0; i < response.data.length; i++) {
				var gif_rating = response.data[i].rating;
				var gif_still = response.data[i].images.fixed_height_still.url;
				var gif_animated = response.data[i].images.fixed_height.url;

				// add to topic_data
				topic_data[topic][i] = {};
				topic_data[topic][i].gif_rating = gif_rating;
				topic_data[topic][i].gif_still = gif_still;
				topic_data[topic][i].gif_animated = gif_animated;
			}

			// display retrieved gifs
			gifs.displayGifs(topic);
		});
	}
};

$().ready(function() {
	gifs.loadTopics();
	gifs.displayButtons();
	gifs.allowAdd();
	gifs.allowSave();
	gifs.allowReset();
})