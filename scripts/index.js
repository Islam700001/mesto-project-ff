const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

function handleDeleteCard(cardElement) {
  cardElement.remove();
}

function createCard({ name, link }, handleDelete) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  deleteButton.addEventListener('click', () => handleDelete(cardElement));

  return cardElement;
}

initialCards.forEach((cardData) => {
  const newCard = createCard(cardData, handleDeleteCard);
  cardsContainer.append(newCard);
});