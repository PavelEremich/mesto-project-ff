(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){var a=i.handleToggleLikes,c=u.handleDeleteCardClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this.likes=e.likes,this.cardId=e._id,this._userId=r,this._ownerId=e.owner._id,this._templateSelector=n,this._handleCardClick=o,this._likesLength=e.likes.length,this._handleToggleLikes=a,this._handleDeleteCardClick=c,this._alt=e.name}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardsPhoto=this._element.querySelector(".elements__photo"),this._elementLike=this._element.querySelector(".elements__button-like"),this._buttonDelete=this._element.querySelector(".elements__button-delete"),this._elementName=this._element.querySelector(".elements__name"),this._counter=this._element.querySelector(".elements__like-counter"),this._cardsPhoto.src=this._link,this._cardsPhoto.alt=this._alt,this._counter.textContent=this._likesLength,this._elementName.textContent=this._name,this._ownerId!==this._userId&&this._buttonDelete.remove(),this.isLiked(this.likes)&&this._elementLike.classList.add("elements__button-like-active"),this._setEventListeners(),this._element}},{key:"isLiked",value:function(t){var e=this;return t.some((function(t){return t._id===e._userId}))}},{key:"deleteCardButton",value:function(){this._element.remove()}},{key:"toggleLike",value:function(t){var e=t.likes;this._elementLike.classList.toggle("elements__button-like-active"),this._counter.textContent=e.length}},{key:"_setEventListeners",value:function(){var t=this;this._buttonDelete.addEventListener("click",(function(){t._handleDeleteCardClick()})),this._elementLike.addEventListener("click",(function(){t._handleToggleLikes()})),this._cardsPhoto.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible"};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function u(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._inputErrorClass),n.textContent=e,n.classList.add(r._errorClass)})),u(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),e.classList.remove(r._errorClass),e.textContent=""})),u(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),u(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState(t)}))}))})),u(this,"enableValidation",(function(){r._setEventListeners()})),this._formElement=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._buttonElement=n.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"disableSubmitButtonAdd",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"resetValidityForm",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"appendItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var d=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=h(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._poppupCloseCards=this._popup.querySelector(".popup__close-cards")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mouseup",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-cards"))&&t.close()}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function g(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(r){var o=S(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=m(n=o.call(this,t)),a=function(t,r){n._popupPhoto.src=r,n._popupPhoto.alt=t,n._popupTitle.textContent=t,_((e=m(n),S(i.prototype)),"open",e).call(e)},(u=g(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupPhoto=n._popup.querySelector(".popup__card-image"),n._popupTitle=n._popup.querySelector(".popup__title-image"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(d);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n._popupForm=n._popup.querySelector("form"),n._popupInput=Array.from(n._popupForm.querySelectorAll("input")),n._popupButton=n._popupForm.querySelector(".popup__save"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValue={},this._popupInput.forEach((function(e){t._formValue[e.name]=e.value})),this._formValue}},{key:"setEventListeners",value:function(){var t=this;j(P(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){t._handleSubmitForm(e,t._getInputValues())}))}},{key:"close",value:function(){j(P(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(t,e){this._popupButton.innerText=e}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var I=function(){function t(e){var n=e.nameSelector,r=e.infoSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=document.querySelector(n),this._infoSelector=document.querySelector(r),this._avatarSelector=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._infoSelector.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._nameSelector.textContent=e,this._infoSelector.textContent=n}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatarSelector.src=e}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var R=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._headers=n}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._headers}}).then((function(e){return t._checkError(e)}))}},{key:"_checkError",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._headers}}).then((function(e){return t._checkError(e)}))}},{key:"setUserInfo",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then((function(t){return n._checkError(t)}))}},{key:"addCard",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then((function(t){return n._checkError(t)}))}},{key:"deleteCard",value:function(t){var e=this;return console.log(t),fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._headers}}).then((function(t){return e._checkError(t)}))}},{key:"toggleLike",value:function(t,e){var n=this;return t?fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._headers}}).then((function(t){return n._checkError(t)})):fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._headers}}).then((function(t){return n._checkError(t)}))}},{key:"setAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return e._checkError(t)}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._popupButton=n._popup.querySelector(".popup__save"),n._cardDelete=e,n}return e=u,(n=[{key:"open",value:function(t){D(V(u.prototype),"open",this).call(this),this.cardEl=t,this.cardId=t.cardId}},{key:"setEventListeners",value:function(){var t=this;D(V(u.prototype),"setEventListeners",this).call(this),this._popupButton.addEventListener("click",(function(){t._cardDelete(t.cardEl,t.cardId)}))}},{key:"renderLoading",value:function(t){this._popupButton.innerText=t?"Удаление...":"Да"}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N,J=document.querySelector(".profile__button-edit"),G=document.querySelector(".popup__input_type_name"),H=document.querySelector(".popup__input_type_job"),M=document.querySelector(".popup__form_type_profile"),$=document.querySelector(".profile__button-add"),K=document.querySelector(".popup__form_type_cards"),Q=document.querySelector(".profile__button-avatar"),W=document.querySelector(".popup__form_type_avatar"),X=new R("https://mesto.nomoreparties.co/v1/wff-cohort-5","7f26e8c6-3247-4192-8196-7411fb01c000");$.addEventListener("click",(function(){Y.disableSubmitButtonAdd(),ut.open()}));var Y=new c(r,K);Y.enableValidation();var Z=new c(r,M);Z.enableValidation();var tt=new c(r,W);tt.enableValidation();var et=new w(".popup_type_image"),nt=function(t){var e=new n(t,"#card-template",N,ct,{handleToggleLikes:function(){X.toggleLike(e.isLiked(e.likes),e.cardId).then((function(t){e.toggleLike(t)})).catch((function(t){return console.log("Ошибка ".concat(t))}))}},{handleDeleteCardClick:function(){rt.open(e)}});return e.generateCard()},rt=new F(".popup_type_confirm",(function(t,e){console.log(t),rt.renderLoading(!0),X.deleteCard(e).then((function(){t.deleteCardButton(),rt.close()})).catch((function(t){return console.log("Ошибка ".concat(t))})).finally((function(){return rt.renderLoading(!1)}))}));rt.setEventListeners(),et.setEventListeners();var ot=new I({nameSelector:".profile__name-edit",infoSelector:".profile__profession",avatarSelector:".profile__avatar"});J.addEventListener("click",(function(){var t=ot.getUserInfo();G.value=t.name,H.value=t.about,it.open(),Z.resetValidityForm()})),Q.addEventListener("click",(function(){lt.open(),tt.resetValidityForm(),tt.disableSubmitButtonAdd()}));var it=new L(".popup_type_profile",(function(t,e){t.preventDefault(),it.renderLoading(!0,"Сохранить..."),X.setUserInfo(e["profile-name"],e["profile-job"]).then((function(t){ot.setUserInfo(t),it.close()})).catch((function(t){return console.log("Ошибка ".concat(t))})).finally((function(){return it.renderLoading(!1,"Сохранить")}))}));it.setEventListeners();var ut=new L(".popup_type_cards",(function(t,e){t.preventDefault(),ut.renderLoading(!0,"Сохранить..."),X.addCard(e.cards,e["cards-link"]).then((function(t){at.prependItem(nt(t)),ut.close()})).catch((function(t){return console.log("Ошибка ".concat(t))})).finally((function(){return ut.renderLoading(!1,"Сохранить")}))}));ut.setEventListeners();var at=new f({renderer:function(t){return at.appendItem(nt(t))}},".elements__items");function ct(t,e){et.open(t,e)}var lt=new L(".popup_type_avatar",(function(t,e){t.preventDefault(),lt.renderLoading(!0,"Сохранить..."),X.setAvatar(e["avatar-link"]).then((function(t){ot.setUserAvatar(t),lt.close()})).catch((function(t){return console.log("Ошибка ".concat(t))})).finally((function(){return lt.renderLoading(!1,"Сохранить")}))}));lt.setEventListeners(),Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];N=o._id,ot.setUserInfo(o),ot.setUserAvatar(o),at.renderItems(i),console.log(N)})).catch((function(t){return console.log("Ошибка ".concat(t))}))})();