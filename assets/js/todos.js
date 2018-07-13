// Check off Specific Todos By Clicking
$("li").click((e) => {
    $(e.target).toggleClass('completed');
});