var actors = [
	"Jack Nicholson",
	"Arnold Schwarzenegger",
];

var gifs = {
	displayButtons: function() {
		for (a in actors) {
			$("<button>", {
				class: "unclicked",
				id: `button_${a}`,
				text: actors[a]
			})
			.appendTo("#app_buttons");
		}
	}
}

$().ready(function() {
	// DO IT.
	gifs.displayButtons();
})