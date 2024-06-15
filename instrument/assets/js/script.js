let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.card__article');

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    listPage();
}

function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
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
