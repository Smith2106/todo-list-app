// Check off Specific Todos By Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass('completed');
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(function() {
        console.log($(this));
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        // Grab new todo text from intput
        const todoText = $(this).val();
        $(this).val("");
        // Create a new li and append to ul
        $('ul').append(`<li><span><i class="fas fa-trash"></i></span> ${todoText}</li>`);
    }
});

$('.fa-plus').click(function() {
    $("input[type='text']").fadeToggle();
});