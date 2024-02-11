import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor (popupSelector, cardDelete) {
  super(popupSelector);
  this._popupButton = this._popup.querySelector(".popup__save");
  this._cardDelete = cardDelete;
}

open(cardEl) {
super.open();
this.cardEl = cardEl;
this.cardId = cardEl.cardId;
}

setEventListeners() {
  super.setEventListeners();
  this._popupButton.addEventListener("click", () => {
    this._cardDelete(this.cardEl, this.cardId);
  })
}
renderLoading(isLoading) {
  if (isLoading) {
    this._popupButton.innerText = "Удаление...";
  } else {
  this._popupButton.innerText = "Да";
  }
}
}
