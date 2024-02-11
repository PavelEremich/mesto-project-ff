import Card from "../components/Card.js";
import { setting } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";
import "./index.css";

const buttonEd = document.querySelector(".profile__button-edit");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const formEd = document.querySelector(".popup__form_type_profile");
const buttonAdd = document.querySelector(".profile__button-add");
const formAdd = document.querySelector(".popup__form_type_cards");
const buttonAvatar = document.querySelector(".profile__button-avatar");
const formAvatar = document.querySelector(".popup__form_type_avatar");
const baseUrl = 'https://mesto.nomoreparties.co/v1/wff-cohort-5';
const headers = '7f26e8c6-3247-4192-8196-7411fb01c000';
let userId;

const api = new Api(baseUrl, headers);

buttonAdd.addEventListener("click", () => {
  formCreateValidator.disableSubmitButtonAdd();
  addPopupWithForm.open();
});

const formCreateValidator = new FormValidator(setting, formAdd);
formCreateValidator.enableValidation();

const formEditValidator = new FormValidator(setting, formEd);
formEditValidator.enableValidation();

const formAvatarValidator = new FormValidator(setting, formAvatar);
formAvatarValidator.enableValidation();

const imageOpen = new PopupWithImage(".popup_type_image");

const createCard = (data) => {
  const newCard = new Card(
     data,
    "#card-template",
    userId,
    handleCardClick,
  {
    handleToggleLikes: () => {
      api.toggleLike(newCard.isLiked(newCard.likes), newCard.cardId)
      .then((res) => {
        newCard.toggleLike(res);
      })
      .catch((error => console.log(`Ошибка ${error}`)))
    }
  },
  {
    handleDeleteCardClick: () => {
      deletePopupWithForm.open(newCard);
    }
  }
  );
  //console.log(userId);
  return newCard.generateCard();
};

const deletePopupWithForm = new PopupDeleteCard(".popup_type_confirm", (cardEl, cardId) => {
  console.log(cardEl);
  deletePopupWithForm.renderLoading(true);
  api.deleteCard(cardId)
      .then(() => {
        cardEl.deleteCardButton();
        deletePopupWithForm.close();
      })
      .catch((error => console.log(`Ошибка ${error}`)))
      .finally(() => deletePopupWithForm.renderLoading(false));
  });

  deletePopupWithForm.setEventListeners();


imageOpen.setEventListeners();

const userInfo = new UserInfo ({
  nameSelector: ".profile__name-edit",
  infoSelector: ".profile__profession",
  avatarSelector: ".profile__avatar"
});

buttonEd.addEventListener("click", function() {
  const information = userInfo.getUserInfo();
  popupName.value = information.name;
  popupJob.value = information.about;
  editPopupWithForm.open();
  formEditValidator.resetValidityForm();
});

buttonAvatar.addEventListener("click", function() {
  avatarPopupWithForm.open();
  formAvatarValidator.resetValidityForm();
  formAvatarValidator.disableSubmitButtonAdd();
});

const editPopupWithForm = new PopupWithForm(".popup_type_profile", (evt, element) => {
evt.preventDefault();
editPopupWithForm.renderLoading(true, "Сохранить...");
api.setUserInfo(element['profile-name'], element['profile-job'])
    .then(res => {
      userInfo.setUserInfo(res);
      editPopupWithForm.close();
    })
    .catch((error => console.log(`Ошибка ${error}`)))
    .finally(() => editPopupWithForm.renderLoading(false, "Сохранить"));
});

editPopupWithForm.setEventListeners();

const addPopupWithForm = new PopupWithForm(".popup_type_cards", (evt, element) => {
evt.preventDefault();
addPopupWithForm.renderLoading(true, "Сохранить...");
api.addCard(element['cards'], element['cards-link'])
    .then(res => {
      section.prependItem(createCard(res));
      addPopupWithForm.close();
    })
    .catch((error => console.log(`Ошибка ${error}`)))
    .finally(() => addPopupWithForm.renderLoading(false, "Сохранить"));
});

addPopupWithForm.setEventListeners();

const section = new Section({
  //items: initialCards,
  renderer: items => section.appendItem(createCard(items))
  },

  ".elements__items"
  );


function handleCardClick(name, link) {
  imageOpen.open(name, link);
};

const avatarPopupWithForm = new PopupWithForm(".popup_type_avatar", (evt, element) => {
  evt.preventDefault();
  avatarPopupWithForm.renderLoading(true, "Сохранить...");
  api.setAvatar(element['avatar-link'])
    .then(res => {
      userInfo.setUserAvatar(res);
      avatarPopupWithForm.close();
    })
    .catch((error => console.log(`Ошибка ${error}`)))
    .finally(() => avatarPopupWithForm.renderLoading(false, "Сохранить"));
});

avatarPopupWithForm.setEventListeners();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([dataUser, dataCard]) => {
    userId = dataUser._id;
    userInfo.setUserInfo(dataUser);
    userInfo.setUserAvatar(dataUser);
    section.renderItems(dataCard);
    console.log(userId);
 })
 .catch((error => console.log(`Ошибка ${error}`)));


