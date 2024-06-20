document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNavigation = document.querySelector('.main-navigation');

  navToggle.addEventListener('click', () => {
    mainNavigation.classList.toggle('active');
  });

  const transbankButton = document.querySelector('.transbank');
  const mercadopagoButton = document.querySelector('.mercadopago');

  transbankButton.addEventListener('click', () => {
    // Transbank
    window.location.href = 'confirm.html';
  });

  mercadopagoButton.addEventListener('click', () => {
    // Mercadopago
    window.location.href = 'confirm.html';
  });

  const form = document.getElementById('user-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      user_name: formData.get('user_name'),
      user_direction: formData.get('user_direction'),
      user_mail: formData.get('user_mail'),
      user_instagram: formData.get('user_instagram')
    };

    fetch('/API para form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        alert('Formulario enviado con éxito!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario.');
      });
  });

  //table
  const data = [
    {
      "id": 1,
      "image": "https://storage.googleapis.com/chile-travel-cdn/2021/08/glaciares-shutterstock-ATR393.jpg",
      "title": "Awards 1",
      "price": 3000
    },
    {
      "id": 2,
      "image": "https://storage.googleapis.com/chile-travel-cdn/2021/08/glaciares-shutterstock-ATR393.jpg",
      "title": "Awards 2",
      "price": 6000
    },
    {
      "id": 3,
      "image": "https://storage.googleapis.com/chile-travel-cdn/2021/08/glaciares-shutterstock-ATR393.jpg",
      "title": "Awards 3",
      "price": 10000
    }
  ];

  const tableBody = document.getElementById('awards-table-body');

  const row = document.createElement('tr');

  data.forEach(item => {

    const cell = document.createElement('td');
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = `Award Image ${item.id}`;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const price = document.createElement('p');
    price.textContent = `$ ${item.price}`;

    const buttonTd = document.createElement('button');
    buttonTd.textContent = 'Comprar';
    buttonTd.classList.add('buy-button');

    buttonTd.addEventListener('click', () => {
      alert(`Has comprado ${item.title} por $${item.price}`);
    });


    cell.appendChild(img);
    cell.appendChild(title);
    cell.appendChild(price);
    cell.appendChild(buttonTd);
    row.appendChild(cell);
    tableBody.appendChild(row);
  });

  //cards
  const data2 = [
    {
      "id": 1,
      "image": "https://storage.googleapis.com/chile-travel-cdn/2021/08/glaciares-shutterstock-ATR393.jpg",
      "title": "Ticket 1",
      "price": 5000
    },
    {
      "id": 2,
      "image": "https://storage.googleapis.com/chile-travel-cdn/2021/08/glaciares-shutterstock-ATR393.jpg",
      "title": "Ticket 2",
      "price": 10000
    },
  ];


  const cardsContainer = document.querySelector('.cards-sales');

  data2.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = `Award Image ${item.id}`;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;

    const button = document.createElement('button');
    button.textContent = 'Comprar';
    button.classList.add('buy-button');

    button.addEventListener('click', () => {
      alert(`Has comprado ${item.title} por $${item.price}`);
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);
    cardsContainer.appendChild(card);
  });
});

function goBack() {
  window.history.back();
}
