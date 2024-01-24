function changeTab(tabId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        if (content.id === tabId + 'Content') {
            content.style.display = 'flex';
        } else {
            content.style.display = 'none';
        }
    });
}
