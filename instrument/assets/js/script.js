document.addEventListener("DOMContentLoaded", function() {
    let list = document.querySelectorAll('.card__article');

    function loadItem() {
        list.forEach((item) => {
            item.style.display = 'block';
        });
    }

    loadItem();

    document.getElementById('search-button').addEventListener('click', function() {
        var query = document.getElementById('search-input').value.toLowerCase();
        var cards = document.getElementsByClassName('card__article');

        for (var i = 0; i < cards.length; i++) {
            var cardTitle = cards[i].getElementsByClassName('card__title')[0].textContent.toLowerCase();
            if (cardTitle.includes(query)) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none';
            }
        }
    });
});
