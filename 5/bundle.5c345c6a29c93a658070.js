(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",$={};$[g]=f;var y=function(e){return e instanceof D},b=function e(t,n,i){var s;if(!t)return g;if("string"==typeof t){var r=t.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,s=o}return!i&&s&&(g=s),s||!i&&g},S=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},M=m;M.l=b,M.i=y,M.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function f(e){this.$L=b(e.locale,null,!0),this.parse(e)}var _=f.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return M},_.isValid=function(){return!(this.$d.toString()===h)},_.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return S(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<S(e)},_.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,c=!!M.u(t)||t,h=M.p(e),p=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},v=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,_=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case u:return c?p(1,0):p(31,11);case l:return c?p(1,_):p(0,_+1);case o:var $=this.$locale().weekStart||0,y=(f<$?f+7:f)-$;return p(c?m-y:m+(6-y),_);case a:case d:return v(g+"Hours",0);case r:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var o,c=M.p(e),h="set"+(this.$u?"UTC":""),p=(o={},o[a]=h+"Date",o[d]=h+"Date",o[l]=h+"Month",o[u]=h+"FullYear",o[r]=h+"Hours",o[s]=h+"Minutes",o[i]=h+"Seconds",o[n]=h+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var f=this.clone().set(d,1);f.$d[p](v),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](v);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[M.p(e)]()},_.add=function(n,c){var d,h=this;n=Number(n);var p=M.p(c),v=function(e){var t=S(h);return M.w(t.date(t.date()+Math.round(e*n)),h)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===a)return v(1);if(p===o)return v(7);var f=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[p]||1,_=this.$d.getTime()+n*f;return M.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return M.s(r%12||12,e,"0")},p=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(e,t){return t||f[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,h){var p,v=M.p(d),f=S(n),_=(f.utcOffset()-this.utcOffset())*e,m=this-f,g=M.m(this,f);return g=(p={},p[u]=g/12,p[l]=g,p[c]=g/3,p[o]=(m-_)/6048e5,p[a]=(m-_)/864e5,p[r]=m/t,p[s]=m/e,p[i]=m/1e3,p)[v]||m,h?g:M.a(g)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return $[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=b(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return M.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},f}(),w=D.prototype;return S.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=b,S.isDayjs=y,S.unix=function(e){return S(1e3*e)},S.en=$[g],S.Ls=$,S.p={},S}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="beforeend";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(t,n,i=e){n.insertAdjacentElement(i,t.getElement())}var s=n(484),r=n.n(s);const a=["Amsterdam","Geneva","Chamonix","Paris","Barcelona"],o=["The capital of the Netherlands","Very expensive city it Switzerland","The first capital of winter olympic games","The world's most famous city for travel","The city with a excellent architecture"],l=["https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1693302262270-c3cec799e1ad?q=80&w=3009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1693302262270-c3cec799e1ad?q=80&w=3009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],c=["Amsterdam view","Geneva view","Chamonix view","Paris view","Barcelona view"],u=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train"],d={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECKIN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"},{MILLISECONDS_TO_SECONDS:h,SECONDS_TO_MINUTES:p,MINUTES_TO_HOURS:v,HOURS_TO_DAYS:f,MILLISECONDS_TO_HOURS:_,MILLISECONDS_TO_DAYS:m,DAYS_TO_MONTHS:g}={MILLISECONDS_TO_SECONDS:1e3,SECONDS_TO_MINUTES:60,MINUTES_TO_HOURS:60,HOURS_TO_DAYS:24,MILLISECONDS_TO_HOURS:36e5,MILLISECONDS_TO_DAYS:864e5,DAYS_TO_MONTHS:30},{MINUTES:$,HOURS:y,DAYS:b}={MINUTES:"M",HOURS:"H",DAYS:"D"};function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}function M(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))}function D(e){return e?r()(e).format("YYYY-MM-DDThh:mm"):""}const w=["everything","future","present","past"].map((function(e){return`\n  <div class="trip-filters__filter">\n    <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}">\n      <label class="trip-filters__filter-label" for="filter-${e}">${S(e)}</label>\n  </div>`})).join("");const O=["day","event","time","price","offer"].map((function(e){return"offer"===e?`\n    <div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}">\n      <label class="trip-sort__btn" for="sort-${e}">Offers</label>\n  </div>`:`\n  <div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}">\n      <label class="trip-sort__btn" for="sort-${e}">${S(e)}</label>\n  </div>\n  `})).join(""),x=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];function T(){return`\n    <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n               ${x.map((e=>{return`\n\n    <div class="event__type-item">\n      <input id="event-type-${t=e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${S(t)}</label>\n    </div>\n  `;var t})).join("")}\n           </fieldset>\n          </div>\n      </div>\n  `}const E=function(){const e=[];for(let t=0;t<u.length;t++)e.push(t**3+739*t+7356);return e}(),A=E.map((e=>Math.floor(e/100))),H=function(){const e=[];for(let t=0;t<E.length;t++)e.push({id:E[t],title:u[t],price:A[t]});return e}(),I=function(){const e=[];for(let t=0;t<a.length;t++)e.push(t**3+739*t+117);return e}(),L=function(){const e=[];for(let t=0;t<I.length;t++)e.push({id:String(I[t]),description:o[t],name:a[t],pictures:[{src:l[t],description:c[t]}]});return e}(),Y=function(){const e=[];for(let t=0;t<I.length;t++)e.push(t**3+7133*t**2+314);return e}(),C=function(){const e=[];for(let t=0;t<Y.length;t++)e.push({id:String(Y[t]),basePrice:100*A[t],date_from:M(new Date(2024,10,1),new Date(2024,10,31)),date_to:M(new Date(2024,11,1),new Date(2024,11,30)),destination:String(I[t]),is_favorite:!0,offers:[H[t]],type:Object.values(d)[Math.floor(Math.random()*Object.values(d).length)]});return e}(),j=["Amsterdam","Geneva","Chamonix"];function N(){return`\n      <div class="event__field-group  event__field-group--destination">\n         <label class="event__label  event__type-output" for="event-destination-1">\n            Flight\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n            <datalist id="destination-list-1">\n               ${j.map((e=>function(e){return`\n    <option value=${e}></option>\n  `}(e)))}\n            </datalist>\n        </div>\n  `}const U=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train"],G={luggage:30,comfort:100,meal:15,seats:5,train:40};function B(){return U.map(((e,t)=>{return`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n=Object.keys(G)[t]}-1" type="checkbox" name="event-offer-${n}" checked>\n      <label class="event__offer-label" for="event-offer-${n}-1">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${Object.values(G)[t]}</span>\n      </label>\n    </div>`;var n}))}const k=T(),W=N(),R=B();class P{getTemplate(){return`\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        ${k}\n        ${W}\n        \n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-1">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n      </div>\n        \n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-1">\n      <span class="visually-hidden">Price</span>\n      &euro;\n    </label>\n    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n  </div>\n        \n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  \n        \n    <button class="event__reset-btn" type="reset">Cancel</button>\n  \n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">\n              ${R}\n            </div>\n        </section>\n        <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n            </div>\n          </div>\n        </section>\n      </section>\n              </form>\n  `}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const V=T(),q=N(),F=B();class z{getTemplate(){return`\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        ${V}\n        ${q}\n        \n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-1">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n      </div>\n        \n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-1">\n      <span class="visually-hidden">Price</span>\n      &euro;\n    </label>\n    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n  </div>\n        \n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  \n        \n    <button class="event__reset-btn" type="reset">Delete</button>\n  \n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">\n              ${F}\n            </div>\n        </section>\n        <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n            </div>\n          </div>\n        </section>\n      </section>\n              </form>\n  `}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}function J(e){const{type:t,basePrice:n,date_from:i,date_to:s}=e,r=S(t),a=(o=H)[Math.floor(Math.random()*o.length)];var o;const l=function({difference:e,days:t,hours:n,minutes:i}){switch(!0){case e<_:return`${i}${$}`;case e>=_&&e<m:return`${n}${y} ${i}${$}`;case e>=m:return`${t}${b} ${n}${y} ${i}${$}`;default:return""}}(function(e,t){const n=t-e,i=Math.floor(n/h),s=Math.floor(i/p),r=Math.floor(s/v);return{difference:n,days:Math.floor(r/f)%g,hours:r%f,minutes:s%v}}(i,s));return`\n  <li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="2019-03-18">MAR 18</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${r} ${c=e,L.find((e=>e.id===c.destination)).name}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${D(i)}">10:30</time>\n          &mdash;\n          <time class="event__end-time" datetime="${D(s)}">11:00</time>\n        </p>\n        <p class="event__duration">${l}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${n}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        <li class="event__offer">\n          <span class="event__offer-title">${a.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${a.price}</span>\n        </li>\n      </ul>\n      <button class="event__favorite-btn event__favorite-btn--active" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>\n  `;var c}console.log(J(C[0]));class Z{constructor({point:e}){this.point=e}getTemplate(){return J(this.point)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const K=document.querySelector(".trip-controls__filters"),Q=document.querySelector(".trip-events"),X=new class{points=C;getPoints(){return this.points}},ee=new class{constructor({container:e,pointsModel:t}){this.container=e,this.pointsModel=t}init(){this.points=[...this.pointsModel.getPoints()],i(new z,this.container,e),i(new P,this.container,e);for(let e=0;e<this.points.length;e++)i(new Z({point:this.points[e]}),this.container.getElement())}}({container:Q,pointsModel:X});i(new class{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n                ${w}\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},K,e),i(new class{getTemplate(){return` <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            ${O}\n          </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},Q,e),ee.init()})()})();
//# sourceMappingURL=bundle.5c345c6a29c93a658070.js.map