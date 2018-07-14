// Check off Specific Todos By Clicking
$("ul").on("click", "li", (e) => {
    $(e.target).toggleClass('completed');
});

// Click on X to delete Todo
$("ul").on("click", "span", (e) => {
    $(e.target).parent().fadeOut(function() {
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
        $('ul').append(`<li><span>X</span> ${todoText}</li>`);
    }
});