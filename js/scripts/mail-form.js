$(document).ready(function()
{
	$("#submit-contact").click(function(event)
	{
		event.preventDefault();
		
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		
		if($.trim(name) == "")
		{
			$("#name").focus();
		}
		else if($.trim(email) == "")
		{
			$("#email").focus();
		}
		else if($.trim(message) == "")
		{
			$("#message").focus();
		}
		else
		{
			var l = Ladda.create(this);
			l.start();
			
			$.ajax({
				type: "POST",
				url: "http://www.kaiwa-projects.com/mail.php",
				data: { name: name, email: email, message: message },
				success: function(result)
				{
					console.debug(result);
					Ladda.stopAll();
						
					setTimeout(function()
					{
						$('#form-contact-container').fadeOut('slow', function()
						{
							$("#form-contact-container").html("").append("<h3>" + $("#thank_you").val() + "</h3>").fadeIn("fast");
						});
					}, 200);
				},
				dataType: "json"
			});
		}
	});
});