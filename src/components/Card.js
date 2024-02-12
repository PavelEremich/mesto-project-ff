export default class Card {
  constructor(
    data,
    templateSelector,
    userId,
    handleCardClick,
    {
      handleToggleLikes
    },
    {
      handleDeleteCardClick
    }

  ) {
    this._name = data.name;
    this._link = data.link;
    this.likes = data.likes;
    this.cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likesLength = data.likes.length;
    this._handleToggleLikes = handleToggleLikes;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._alt = data.name;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    return cardTemplate;

  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardsPhoto = this._element.querySelector(".elements__photo");
    this._elementLike = this._element.querySelector(".elements__button-like");
    this._buttonDelete = this._element.querySelector(".elements__button-delete");
    this._elementName = this._element.querySelector(".elements__name");
    this._counter = this._element.querySelector(".elements__like-counter");
    this._cardsPhoto.src = this._link;
    this._cardsPhoto.alt = this._alt;
    this._counter.textContent = this._likesLength;
    this._elementName.textContent = this._name;

  if (this._ownerId !== this._userId) {
    this._buttonDelete.remove();
 };

 if (this.isLiked(this.likes)) {
  this._elementLike.classList.add('elements__button-like-active');
}

    this._setEventListeners();
    return this._element;

  };

  isLiked (likes) {
    return likes.some((obj) => {
      return obj._id === this._userId;
    })
  }

  deleteCardButton() {
    this._element.remove();
  };

  toggleLike(likes) {
    this._elementLike.classList.toggle('elements__button-like-active');
    this._counter.textContent = likes.length;
    console.log(likes.length);
  };

  _setEventListeners() {
    this._buttonDelete.addEventListener("click", () => {
      this._handleDeleteCardClick();
    });
   this._elementLike.addEventListener("click",() => {
    this._handleToggleLikes();
    });
    this._cardsPhoto.addEventListener("click",  () => {
      this._handleCardClick(this._name, this._link);
    });
  }

}

