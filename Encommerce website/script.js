// Get the container element
const container = document.querySelector('.container');

// Create an array of card elements
const cards = [
  {
    id: 'card1',
    img: 'hnkcover2.jpg',
    title: 'Houseki no Kuni',
    vol: 'Vol. 11',
    price: '$10.99'
  },
  {
    id: 'card2',
    img: 'hnkcover3.jpg',
    title: 'Houseki no Kuni',
    vol: 'Vol. 3',
    price: '$9.99'
  },
  {
    id: 'card3',
    img: 'hnkcover4.jpg',
    title: 'Houseki no Kuni',
    vol: 'Vol. 12',
    price: '$10.99'
  },
  {
    id: 'card4',
    img: 'hnkcover5.jpg',
    title: 'Houseki no Kuni',
    vol: 'Vol. 6',
    price: '$11.99'
  },
  {
    id: 'card5',
    img: 'hnkcover6.jpg',
    title: 'Housekino Kuni',
    vol: 'Vol. 5',
    price: '$10.99'
  },
  {
    id: 'card6',
    img: 'knkcover1.jpg',
    title: 'Houseki no Kuni',
    vol: 'Vol. 1',
    price: '$8.99'
  }
];

// Set the number of cards to show at a time
const cardsToShow = 4;

// Set the current index of the cards
let currentIndex = 0;

// Render the initial set of cards
renderCards();

// Add event listeners to the left and right arrow buttons
document.querySelector('.leftrow1').addEventListener('click', () => {
  currentIndex -= cardsToShow;
  if (currentIndex < 0) {
    currentIndex = cards.length - cardsToShow;
  }
  renderCards();
});

document.querySelector('.rightrow1').addEventListener('click', () => {
  currentIndex += cardsToShow;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  renderCards();
});

// Render the cards
function renderCards() {
  container.innerHTML = '';
  for (let i = currentIndex; i < currentIndex + cardsToShow; i++) {
    const card = cards[i];
    const cardHTML = `
      <div class="card" id="${card.id}">
        <img src="${card.img}" alt="${card.title}">
        <div class="text">
          <h2>${card.title}</h2>
          <p>${card.vol}</p>
          <div class="Price">
            <p>${card.price}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  }
}



//for famous


const famouscont = document.querySelector('.famourpro');

const books = [
    {
      id: 'book1',
      img: 'jujutsucover.png',
      title: 'Jujutsu Kaisen',
      vol: 'Vol. 14',
      price: '$15.99'
    },
    {
      id: 'book2',
      img: 'mhacover.jpg',
      title: 'Boku no Hero',
      vol: 'Vol. 37',
      price: '$20.99'
    },
    {
      id: 'book3',
      img: 'chainsawcover2.jpg',
      title: 'Chainsaw Man',
      vol: 'Vol. 10',
      price: '$8.99'
    },
    {
      id: 'book4',
      img: 'onepiececover1.jpg',
      title: 'One Piece',
      vol: 'Vol. 62',
      price: '$25.99'
    },
    {
      id: 'book5',
      img: 'jujutsu cover2.jpg',
      title: 'Jujutsu Kaisen',
      vol: 'Vol. 22',
      price: '$11.99'
    },
    {
      id: 'book6',
      img: 'onepiececover2.jpg',
      title: 'One Piece',
      vol: 'Vol. 69',
      price: '$21.99'
    },
    {
      id: 'book7',
      img: 'mhacover2.jpeg',
      title: 'Boku no Hero',
      vol: 'Vol. 25',
      price: '$11.99'
    }
  ];

  const booksToShow = 4;
  let currentIndexbk = 0;


renderBooks();


document.querySelector('.leftrow2').addEventListener('click', () => {
  currentIndexbk -= booksToShow;
  if (currentIndexbk < 0) {
    currentIndexbk = books.length - booksToShow;
  }
  renderBooks();
});

document.querySelector('.rightrow2').addEventListener('click', () => {
  currentIndexbk += booksToShow;
  if (currentIndexbk >= books.length) {
    currentIndexbk = 0;
  }
  renderBooks();
});

// Render the cards
function renderBooks() {
    famouscont.innerHTML = '';
  for (let i = currentIndexbk; i < currentIndexbk + booksToShow; i++) {
    const book = books[i];
    const bookHTML = `
      <div class="card" id="${book.id}">
        <img src="${book.img}" alt="${book.title}">
        <div class="text">
          <h2>${book.title}</h2>
          <p>${book.vol}</p>
          <div class="Price">
            <p>${book.price}</p>
          </div>
        </div>
      </div>
    `;
    famouscont.innerHTML += bookHTML;
  }
}



//works now

const worskours = document.querySelector('.oursworks');

const works = [
    {
      id: 'construction1',
      img: 'housekicapa.jpg',
      title: 'Houseki no Kuni',
      author: 'Haruko Ichikawa',
    },
    {
      id: 'construction2',
      img: 'chainsawmancapa.jpg',
      title: 'Chainsaw Man',
      author: 'Tatsuki Fujimoto',
    },
    {
      id: 'construction3',
      img: 'myherocapa.jpg',
      title: 'My Hero Academia',
      author: 'Kōhei Horikoshi',
    },
    {
      id: 'construction4',
      img: 'jujutsukaisencapa.jpg',
      title: 'Jujutsu Kaisen',
      author: 'Gege Akutami',
    },
    {
      id: 'construction5',
      img: 'Onepiececapa.jpg',
      title: 'One Piece',
      author: 'Eiichirô Oda',
    }
  ];

  const worksToShow = 3;
  let currentIndexwk = 0;


  renderWorks();


document.querySelector('.leftrow3').addEventListener('click', () => {
  currentIndexwk -= worksToShow;
  if (currentIndexwk < 0) {
    currentIndexwk = works.length - worksToShow;
  }
  renderWorks();
});

document.querySelector('.rightrow3').addEventListener('click', () => {
  currentIndexwk += worksToShow;
  if (currentIndexwk >= works.length) {
    currentIndexwk = 0;
  }
  renderWorks();
});

// Render the cards
function renderWorks() {
    worskours.innerHTML = '';
  for (let i = currentIndexwk; i < currentIndexwk + worksToShow; i++) {
    const work = works[i];
    const workHTML = `
       <div class="${work.id}">
                <img src="${work.img}">
                <div class="info">
                    <h5>${work.title}</h5>
                    <p>${work.author}</p>
                </div>
            </div>
    `;
    worskours.innerHTML += workHTML;
  }
}