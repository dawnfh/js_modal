
// References & Inspirations: NYCDA, W3School

$(document).ready(function(){
		// on button click
		$("#mybut").on("click",function(){
			// returns attributes and values
			$(".content").attr("p", $(this).attr("p"));
			// modal box show
			$(".lightbox").show();
			// option to click on modal box to close
			$(".lightbox").on('click', function(){
				$(".lightbox").hide();

				var text = "Hello 2016!";
				document.write("<h1> <center>" + text.fontcolor("green").fontsize(35) + "</h1>"
					);
			});
		});
});