(()=>{"use strict";const e="beforeend";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function n(t,n,s=e){n.insertAdjacentElement(s,t.getElement())}const s=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];class i{getTemplate(){return`\n    <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n               ${s.map((e=>{return`\n\n    <div class="event__type-item">\n      <input id="event-type-${t=e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${n=t,n.charAt(0).toUpperCase()+n.slice(1)}</label>\n    </div>\n  `;var t,n})).join("")}\n           </fieldset>\n          </div>\n      </div>\n  `}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const l=["Amsterdam","Geneva","Chamonix"];class a{getTemplate(){return`\n      <div class="event__field-group  event__field-group--destination">\n         <label class="event__label  event__type-output" for="event-destination-1">\n            Flight\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n            <datalist id="destination-list-1">\n               ${l.map((e=>function(e){return`\n    <option value=${e}></option>\n  `}(e)))}\n            </datalist>\n        </div>\n  `}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{getTemplate(){return'\n    <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n                  </div>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{getTemplate(){return'\n    <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n                  </div>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{getTemplate(){return'\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const v=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train"],c={luggage:30,comfort:100,meal:15,seats:5,train:40};class _{getTemplate(){return v.map(((e,t)=>{return`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n=Object.keys(c)[t]}-1" type="checkbox" name="event-offer-${n}" checked>\n      <label class="event__offer-label" for="event-offer-${n}-1">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${Object.values(c)[t]}</span>\n      </label>\n    </div>`;var n})).join("")}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const m=(new i).getTemplate(),d=(new a).getTemplate(),h=(new r).getTemplate(),u=(new o).getTemplate(),f=(new p).getTemplate(),g=(new class{getTemplate(){return'\n    <button class="event__reset-btn" type="reset">Cancel</button>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}).getTemplate(),b=(new _).getTemplate();class y{getTemplate(){return`\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        ${m}\n        ${d}\n        ${h}\n        ${u}\n        ${f}\n        ${g}\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">\n              ${b}\n            </div>\n        </section>\n        <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n            </div>\n          </div>\n        </section>\n      </section>\n              </form>\n  `}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const T=(new i).getTemplate(),E=(new a).getTemplate(),w=(new r).getTemplate(),$=(new o).getTemplate(),j=(new p).getTemplate(),x=(new class{getTemplate(){return'\n    <button class="event__reset-btn" type="reset">Delete</button>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}).getTemplate(),A=(new _).getTemplate();class k{getTemplate(){return`\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        ${T}\n        ${E}\n        ${w}\n        ${$}\n        ${j}\n        ${x}\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">\n              ${A}\n            </div>\n        </section>\n        <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n            </div>\n          </div>\n        </section>\n      </section>\n              </form>\n  `}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class L{getTemplate(){return'\n<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">Taxi Amsterdam</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">20</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">Order Uber</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">20</span>\n                  </li>\n                </ul>\n                <button class="event__favorite-btn event__favorite-btn--active" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const O=document.querySelector(".trip-controls__filters"),S=document.querySelector(".trip-events"),C=new class{constructor({container:e}){this.container=e}init(){n(new k,this.container,e),n(new y,this.container,e);for(let t=0;t<3;t++)n(new L,this.container,e)}}({container:S});n(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},O,e),n(new class{getTemplate(){return' <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},S,e),C.init()})();
//# sourceMappingURL=bundle.a3d5176321d02b35d770.js.map