// Check off Specific Todos By Clicking
$("li").click((e) => {
    $(e.target).toggleClass('completed');
});

// Click on X to delete Todo
$("span").click((e) => {
    $(e.target).parent().fadeOut(function() {
        $(this).remove();
    });
    e.stopPropagation();
});