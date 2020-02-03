// Check off specific Todos by clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//Click on X to delete To Do
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(250, function() {
		$(this).remove();
	}); // fades out the parent that 'this' is contained in and then removes it

	event.stopPropagation(); // prevents method from bubbling up through all parent elements
});

$('input[type="text"]').keypress(function(event) {
	if (event.which === 13) {
		//grabs text from user input
		let todoText = $(this).val();
		$(this).val('');
		$('ul').append(`<li><span><i class='fas fa-trash-alt'></i></span> ${todoText}</li>`);
	}
});

$('.fa-plus').click(function() {
	$('input[type="text"]').fadeToggle(250);
});
