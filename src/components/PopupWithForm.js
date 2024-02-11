import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm){
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector("form");
    this._popupInput = Array.from(this._popupForm.querySelectorAll("input"));
    this._popupButton = this._popupForm.querySelector(".popup__save");
  }

  _getInputValues() {
    this._formValue = {};
    this._popupInput.forEach(input => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", evt =>{
      //evt.preventDefault();
      this._handleSubmitForm(evt, this._getInputValues());
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  renderLoading(isLoading, text) {
    if (isLoading) {
      this._popupButton.innerText = text;
    } else {
    this._popupButton.innerText = text;
    }
  }
}

