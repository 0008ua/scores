(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports={btn:"Btn_btn__3Cyd5",btn_primary:"Btn_btn_primary__3b6JO",btn_secondary:"Btn_btn_secondary__1XGyw",btn_danger:"Btn_btn_danger__30-2E",btn_background:"Btn_btn_background__1YUme","btn_route-main":"Btn_btn_route-main__lJlGE","btn_route-local":"Btn_btn_route-local__1wgzS",btn_red:"Btn_btn_red__1EZJu",btn_green:"Btn_btn_green__p4D2-",btn_blue:"Btn_btn_blue__egw18",btn_black:"Btn_btn_black__1kiHn",btn_yellow:"Btn_btn_yellow__13DLY",btn_icon:"Btn_btn_icon__2kPzS",btn_narrow:"Btn_btn_narrow__1gCHf",btn_sticky:"Btn_btn_sticky__20v_3","btn_sticky-left":"Btn_btn_sticky-left__1UCxE","btn_sticky-right":"Btn_btn_sticky-right__2V8IC"}},59:function(e,t,n){e.exports={inp:"Inp_inp__1zQsD"}},60:function(e,t,n){e.exports={sel:"Sel_sel__1H_Lr"}},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(41),i=n.n(r),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},o=n(7),l=n(2),u=n(16),d=n(63),j=n(89),m="auth/storeToken",b="auth/storeTokenSuccess",h="auth/storeUserFromToken",p="auth/storeUserFromTokenSuccess",O="auth/signin",_="auth/signup",f="auth/signup",y="auth/authError",g=function(e){return{type:m,payload:e}},x=function(e){return{type:b,payload:e}},v=function(){return{type:h}},N=function(e){return{type:p,payload:e}},k=function(e){return{type:y,payload:e}},C=n(36),S={auth:{token:null,user:null,error:null}},P=Object(C.a)((function(e){return e}),(function(e){return e.auth.user})),w=n(28),E=n(20),T=n(21),A=n(92),R=n(65),D=n(84),L=n(88),B=n(87),G=n(66),q=n(18),I=function(){function e(t,n){Object(E.a)(this,e),this.helpersService=n,this.httpClientService=t}return Object(T.a)(e,[{key:"_headers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Content-Type"]="application/json",e.Authorization=this.helpersService.getToken(),e}},{key:"_body",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e&&(e=JSON.stringify(e)),e}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.headers,c=void 0===n?{}:n,a=t.queryParams;return c=this._headers(c),this.httpClientService.fetch(e,{method:"get",headers:c,queryParams:a})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.headers,c=void 0===n?{}:n,a=t.body,r=void 0===a?{}:a,i=t.queryParams;return c=this._headers(c),r=this._body(r),this.httpClientService.fetch(e,{method:"post",headers:c,body:r,queryParams:i})}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.headers,c=void 0===n?{}:n,a=t.body,r=void 0===a?{}:a,i=t.queryParams;return c=this._headers(c),r=this._body(r),this.httpClientService.fetch(e,{method:"put",headers:c,body:r,queryParams:i})}},{key:"patch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.headers,c=void 0===n?{}:n,a=t.body,r=void 0===a?{}:a,i=t.queryParams;return c=this._headers(c),r=this._body(r),this.httpClientService.fetch(e,{method:"patch",headers:c,body:r,queryParams:i})}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.headers,c=void 0===n?{}:n,a=t.body,r=void 0===a?{}:a,i=t.queryParams;return c=this._headers(c),r=this._body(r),this.httpClientService.fetch(e,{method:"delete",headers:c,body:r,queryParams:i})}}]),e}(),z=function(){function e(t){Object(E.a)(this,e),this.httpService=t}return Object(T.a)(e,[{key:"signin",value:function(e){return console.log("user",e),this.httpService.post("/api/auth/signin",{body:e})}},{key:"signup",value:function(e){return this.httpService.post("/api/auth/signup",{body:e})}}]),e}(),U=n(54),F=n(85),M=n(86),J=function(){function e(t){Object(E.a)(this,e),this.interceptors=t}return Object(T.a)(e,[{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){var n,c=!1;t.queryParams&&(e="".concat(e,"?").concat(new URLSearchParams(t.queryParams))),delete t.queryParams;var a=Object(U.a)(fetch(e,t)).pipe(Object(D.a)((function(a){return a.ok||(c=!0,n={url:e,options:t}),Object(U.a)(a.json())})),Object(D.a)((function(e){if(c){var t=Object.assign(new Error,e,{badRequest:n});return Object(F.a)((function(){return t}))}return Object(M.a)(e)})));return this.interceptors.reduce((function(e,t){return t(e)}),a)}))}]),e}(),Q=0;var Y=function(){function e(t){Object(E.a)(this,e),this.jwtDecode=t}return Object(T.a)(e,[{key:"storeToken",value:function(e){localStorage.setItem("token",e)}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"decodeToken",value:function(){return this.jwtDecode(this.getToken())}}]),e}(),H=n(64),W=function(){function e(){Object(E.a)(this,e)}return Object(T.a)(e,null,[{key:"inject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.storage.get(e);return n||(n=Object(G.a)(e,Object(q.a)(t)),this.storage.set(e,n),n)}}]),e}();W.storage=new Map;var V=W.inject(Y,[H.a]),X=W.inject(J,[[function(e){return e.pipe(Object(B.a)((function(e){return 401===e.status&&"/api/auth/signin"!==e.badRequest.url?Q>0?(Q=0,Object(F.a)((function(){return e}))):X.fetch("/api/auth/signup",{method:"post",headers:{"Content-Type":"application/json"}}).pipe(Object(B.a)((function(e){return Object(F.a)((function(){return e}))})),Object(D.a)((function(t){pe.dispatch(g(t)),Q++;var n=e.badRequest,c=n.url,a=n.options;return a.headers.Authorization=t,X.fetch(c,a)}))):(Q=0,Object(F.a)((function(){return e})))})))}]]),Z=W.inject(I,[X,V]),K=W.inject(z,[Z]),$=function(){function e(t,n){Object(E.a)(this,e),this.httpService=t,this.entitiesConfig=n}return Object(T.a)(e,[{key:"use",value:function(e){return this.entitiesConfig[e]?(this.entityName=e,this.apiRootPath=this.entitiesConfig[e].apiRootPath,this.entityPluralName=this.entitiesConfig[e].entityPluralName,this):null}},{key:"add",value:function(e){return this.httpService.post("".concat(this.apiRootPath).concat(this.entityName),{body:e})}},{key:"remove",value:function(e){return this.httpService.delete("".concat(this.apiRootPath).concat(this.entityName,"/").concat(e))}},{key:"getAll",value:function(){return this.httpService.get("".concat(this.apiRootPath).concat(this.entityPluralName))}},{key:"getById",value:function(e){return this.httpService.get("".concat(this.apiRootPath).concat(this.entityName,"/").concat(e))}},{key:"getWithQuery",value:function(e){return this.httpService.get("".concat(this.apiRootPath).concat(this.entityPluralName),e)}},{key:"update",value:function(e){return this.httpService.put("".concat(this.apiRootPath).concat(this.entityName,"/").concat(e._id),{body:e})}}]),e}(),ee=function(e){var t=e.entityName,n=function(e,t){return function(t){return{type:e,payload:t}}},c={ADD:"".concat(t,"/dataService add"),REMOVE:"".concat(t,"/dataService remove"),GET_ALL:"".concat(t,"/dataService getAll"),GET_BY_ID:"".concat(t,"/dataService getById"),GET_WITH_QUERY:"".concat(t,"/dataService getWithQuery"),UPDATE:"".concat(t,"/dataService update"),ERROR:"".concat(t,"/dataService error")};return{actionTypes:c,actions:{add:n(c.ADD),remove:n(c.REMOVE),getAll:n(c.GET_ALL),getById:n(c.GET_BY_ID),getWithQuery:n(c.GET_WITH_QUERY),update:n(c.UPDATE),error:n(c.ERROR)}}};var te=function(e){var t=function(e){var t={};for(var n in e){var c=e[n].entityPluralName||n+"s";t[n]={entityActions:e[n].entityActions,entitySelectors:e[n].entitySelectors,entityName:n,apiRootPath:e[n].apiRootPath||"/api/store/",entityPluralName:c,entityUppercaseName:n.toUpperCase(),entityUppercasePluralName:c.toUpperCase(),entityCapitalizeName:n.charAt(0).toUpperCase()+n.slice(1),entityCapitalizePluralName:c.charAt(0).toUpperCase()+c.slice(1),sortComparer:e[n].sortComparer||function(e,t){return e.name.localeCompare(t.name)}}}return t}(e),n=new $(Z,t),c={},a={},r={},i={},s={},o=function(e){a[e]=ee(t[e]).actions,c[e]=ee(t[e]).actionTypes;var o=Object(C.b)({selectId:function(e){return e._id},sortComparer:t[e].sortComparer}),u=Object(C.c)({name:t[e].entityName,initialState:o.getInitialState(),reducers:Object(l.a)({},o)}),d=u.reducer,j=u.actions,m=o.getSelectors((function(n){return n[t[e].entityName]}));a[e]=Object(l.a)(Object(l.a)({},j),a[e]),s[e]=m,r[e]=d,i=Object(l.a)(Object(l.a)({},i),function(e,t,n,c){var a,r=e.entityName;return a={},Object(w.a)(a,"".concat(r,"/getById"),(function(e){return e.pipe(Object(A.a)(t.GET_BY_ID),Object(R.a)((function(e){return e.payload})),Object(D.a)((function(e){return c.use(r).getById(e).pipe(Object(L.a)((function(e){return console.log("got one ",e)})),Object(D.a)((function(e){return[n.setOne(e)]})),Object(B.a)((function(e){return[se(e)]})))})))})),Object(w.a)(a,"".concat(r,"/getAll"),(function(e){return e.pipe(Object(A.a)(t.GET_ALL),Object(L.a)((function(e){return console.log("x",e)})),Object(D.a)((function(){return c.use(r).getAll().pipe(Object(D.a)((function(e){return[n.setAll(e)]})),Object(B.a)((function(e){return[se(e)]})))})))})),Object(w.a)(a,"".concat(r,"/add"),(function(e){return e.pipe(Object(A.a)(t.ADD),Object(R.a)((function(e){return e.payload})),Object(D.a)((function(e){return c.use(r).add(e).pipe(Object(D.a)((function(e){return[n.addOne(e)]})),Object(B.a)((function(e){return[se(e)]})))})))})),Object(w.a)(a,"".concat(r,"/update"),(function(e){return e.pipe(Object(A.a)(t.UPDATE),Object(R.a)((function(e){return e.payload})),Object(D.a)((function(e){return c.use(r).update(e).pipe(Object(D.a)((function(e){return[n.updateOne(e)]})),Object(B.a)((function(e){return[se(e)]})))})))})),a}(t[e],c[e],a[e],n))};for(var u in t)o(u);return{storeDataActions:a,storeDataActionsTypes:c,storeDataEpics:i,storeDataSelectors:s,storeDataReducers:r}}({gamer:{entityPluralName:"gamers",apiRootPath:"/api/store/",sortComparer:function(e,t){return e.name.localeCompare(t.name)}},recentPlayer:{entityPluralName:"recentPlayers",apiRootPath:"/api/store/",sortComparer:function(e,t){return e._id.localeCompare(t._id)}},clientPlayer:{entityPluralName:"clientPlayers",apiRootPath:"/api/store/",sortComparer:function(e,t){return e._id.localeCompare(t._id)}},game:{entityPluralName:"games",apiRootPath:"/api/store/",sortComparer:function(e,t){return e.type.localeCompare(t.type)}},clientGame:{entityPluralName:"clientGames",apiRootPath:"/api/store/",sortComparer:function(e,t){return e.type.localeCompare(t.type)}},clientRound:{entityPluralName:"currentRounds",apiRootPath:"/api/store/",sortComparer:function(e,t){return e._id.localeCompare(t._id)}}}),ne=te.storeDataActions,ce=te.storeDataReducers,ae=(te.storeDataActionsTypes,te.storeDataEpics),re=te.storeDataSelectors,ie="application/error",se=function(e){return{type:ie,payload:e}},oe=Object(u.combineReducers)(Object(l.a)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.auth,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{token:t.payload});case p:return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case y:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});default:return e}},appError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:null},t=arguments.length>1?arguments[1]:void 0;return t.type===ie?Object(l.a)(Object(l.a)({},e),{},{error:t.payload}):e}},ce)),le=n(91),ue=ne.recentPlayer,de={signinEpic:function(e){return e.pipe(Object(A.a)(O),Object(R.a)((function(e){return e.payload})),Object(D.a)((function(e){return K.signin(e).pipe(Object(D.a)((function(e){return[g(e),ue.removeAll()]})),Object(B.a)((function(e){return[k(e)]})))})))},signupEpic:function(e){return e.pipe(Object(A.a)(_,f),Object(R.a)((function(e){return e.payload})),Object(D.a)((function(e){return K.signup(e).pipe(Object(D.a)((function(e){return[g(e),ue.removeAll()]})),Object(B.a)((function(e){return[k(e)]})))})))},storeTokenEpic:function(e){return e.pipe(Object(A.a)(m),Object(R.a)((function(e){return e.payload})),Object(D.a)((function(e){return Object(M.a)(e).pipe(Object(D.a)((function(e){return V.storeToken(e),[x(e),v()]})),Object(B.a)((function(e){return[k(e)]})))})))},storeUserFromTokenEpic:function(e){return e.pipe(Object(A.a)(h),Object(D.a)((function(){return Object(M.a)("_").pipe(Object(D.a)((function(){var e;try{e=V.decodeToken()}catch(t){return Object(F.a)((function(){return t}))}return[N(e)]})),Object(B.a)((function(e){return[k(e)]})))})))}},je=Object.keys(ae).map((function(e){return ae[e]})),me=Object.keys(de).map((function(e){return de[e]})),be=le.a.apply(void 0,Object(q.a)(me).concat(Object(q.a)(je))),he=Object(j.a)(),pe=Object(u.createStore)(oe,function(){if(null!==localStorage.getItem("persistStorage"))return Object(l.a)({},JSON.parse(localStorage.getItem("persistStorage")))}(),Object(d.composeWithDevTools)(Object(u.applyMiddleware)(he,(function(e){var t=e.getState;return function(e){return function(n){var c=e(n);return localStorage.setItem("persistStorage",JSON.stringify({game:t().game,recentPlayer:t().recentPlayer,clientPlayer:t().clientPlayer,clientGame:t().clientGame,clientRound:t().clientRound})),c}}}))));he.run(be);var Oe=n(11),_e=n(10),fe=n(32),ye=n(39),ge=n.n(ye),xe=n(0),ve=["children","color","customType"],Ne=function(e){var t=e.children,n=e.color,c=e.customType,a=Object(fe.a)(e,ve),r=ge.a.btn;return n&&(r="".concat(r," ").concat(ge.a["btn_"+n])),c&&(Array.isArray(c)?c.forEach((function(e){r="".concat(r," ").concat(ge.a["btn_"+e])})):r="".concat(r," ").concat(ge.a["btn_"+c])),a.className&&(r="".concat(r," ").concat(a.className)),Object(xe.jsx)("button",Object(l.a)(Object(l.a)({},a),{},{className:r,children:t}))},ke=n(6),Ce=n(8);function Se(){var e=Object(c.useState)(!1),t=Object(_e.a)(e,2),n=t[0],a=t[1],r=Object(o.c)(P),i=Object(o.b)(),s=function(){var e=Object(c.useState)(null),t=Object(_e.a)(e,2),n=t[0],a=t[1],r=function(e,t){return e&&!t?"(min-width: ".concat(e,"px)"):e&&t?"(min-width: ".concat(e,"px) and (max-width: ").concat(t,"px)"):!e&&t?"(max-width: ".concat(t,"px)"):void 0},i=function(e){var t={};for(var n in e)t[n]=r.apply(void 0,Object(q.a)(e[n]));return t}({xs:[null,599],sm:[600,959],md:[960,1279],lg:[1280,1919],xl:[1920,null]}),s=Object(c.useCallback)((function(){for(var e in i)window.matchMedia(i[e]).matches&&a(e)}),[i]);return Object(c.useEffect)((function(){s()}),[s]),Object(c.useEffect)((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[s]),{size:n}}(),l=s.size;Object(c.useEffect)((function(){i(v())}),[i]);var u=function(e){e.preventDefault(),i({type:f})},d=function(e){e.preventDefault(),a((function(e){return!e}))};return Object(xe.jsxs)("header",{className:"container header",children:[Object(xe.jsx)("div",{className:"header__logo",children:Object(xe.jsx)(Oe.c,{className:"menu__item menu-item",end:!0,to:"/",children:Object(xe.jsx)("span",{children:"Scores"})})}),("md"===l||"lg"===l||"xl"===l)&&Object(xe.jsxs)("div",{className:"header__menu top-menu",children:[Object(xe.jsxs)("div",{className:"top-menu__links",children:[Object(xe.jsxs)(Oe.c,{className:"top-menu__item menu-item",end:!0,to:"/games/train",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.n}),Object(xe.jsx)("span",{children:"Train"})]}),Object(xe.jsxs)(Oe.c,{className:"top-menu__item menu-item",end:!0,to:"/games/thousand",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.f}),Object(xe.jsx)("span",{children:"Card Game"})]})]}),Object(xe.jsx)("div",{className:"top-menu__divider"}),Object(xe.jsxs)("div",{className:"top-menu__dashboard",children:[r&&r.role&&"member"===r.role&&Object(xe.jsxs)("span",{className:"top-menu__item menu-item",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.o}),r.name]}),Object(xe.jsxs)(Oe.c,{className:"top-menu__item menu-item",end:!0,to:"/dashboard",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.e}),Object(xe.jsx)("span",{children:"Dashboard"})]}),r&&"member"!==r.role&&Object(xe.jsxs)(Oe.c,{className:"top-menu__item menu-item",end:!0,to:"/auth",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.d}),Object(xe.jsx)("span",{children:"Signin"})]}),r&&"member"===r.role&&Object(xe.jsxs)(Ne,{className:"anchor top-menu__item menu-item",type:"button",onClick:u,children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.j}),Object(xe.jsx)("span",{children:"Logout"})]})]})]}),("xs"===l||"sm"===l)&&Object(xe.jsxs)("div",{className:"header__menu top-menu",children:[Object(xe.jsx)("div",{className:"top-menu__divider"}),Object(xe.jsx)("div",{className:"top-menu__btn",children:Object(xe.jsxs)(Ne,{className:"menu__item",type:"button",onClick:d,children:[("xs"===l||"sm"===l)&&!n&&Object(xe.jsx)(Ce.a,{icon:ke.a}),("xs"===l||"sm"===l)&&n&&Object(xe.jsx)(Ce.a,{icon:ke.b})]})}),n&&Object(xe.jsx)("div",{className:"menu__btn"})]}),("xs"===l||"sm"===l)&&n&&Object(xe.jsxs)("div",{className:"side-menu",onClick:d,children:[Object(xe.jsxs)("div",{className:"side-menu__links",children:[Object(xe.jsxs)(Oe.c,{className:"side-menu__item menu-item",end:!0,to:"/games/train",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.n}),Object(xe.jsx)("span",{children:"Train"})]}),Object(xe.jsxs)(Oe.c,{className:"side-menu__item menu-item",end:!0,to:"/games/thousand",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.f}),Object(xe.jsx)("span",{children:"Card Game"})]})]}),Object(xe.jsx)("div",{className:"side-menu__divider"}),Object(xe.jsxs)("div",{className:"side-menu__dashboard",children:[r&&r.role&&"member"===r.role&&Object(xe.jsxs)("span",{className:"side-menu__item menu-item",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.o}),r.name]}),Object(xe.jsxs)(Oe.c,{className:"side-menu__item menu-item",end:!0,to:"/dashboard",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.e}),Object(xe.jsx)("span",{children:"Dashboard"})]}),r&&"member"!==r.role&&Object(xe.jsxs)(Oe.c,{className:"side-menu__item menu-item",end:!0,to:"/auth",children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.d}),Object(xe.jsx)("span",{children:"Signin"})]}),r&&"member"===r.role&&Object(xe.jsxs)(Ne,{className:"anchor side-menu__item menu-item",type:"button",onClick:u,children:[Object(xe.jsx)(Ce.a,{className:"menu-item__icon",icon:ke.j}),Object(xe.jsx)("span",{children:"Logout"})]})]})]})]})}var Pe=n(5),we=n(59),Ee=n.n(we),Te=["children"],Ae=function(e){e.children;var t=Object(fe.a)(e,Te);return Object(xe.jsx)("input",Object(l.a)(Object(l.a)({},t),{},{className:t.className?Ee.a.inp+" "+t.className:Ee.a.inp}))};function Re(){var e=Object(c.useState)(""),t=Object(_e.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(_e.a)(r,2),s=i[0],l=i[1],u=Object(o.b)();return Object(xe.jsxs)("div",{className:"container auth",children:[Object(xe.jsxs)("div",{className:"row auth-header",children:[Object(xe.jsx)("h2",{className:"cell auth-header__head",children:"Signin"}),Object(xe.jsx)("span",{className:"cell auth-header__link",children:Object(xe.jsx)(Oe.b,{to:"/auth/signup",children:"or signup"})})]}),Object(xe.jsxs)("form",{className:"row auth-form",children:[Object(xe.jsxs)("div",{className:"auth-form__input",children:[Object(xe.jsx)("label",{htmlFor:"name",className:"input-label",children:"Name"}),Object(xe.jsx)(Ae,{id:"name",placeholder:"Name",type:"text",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(xe.jsxs)("div",{className:"auth-form__input",children:[Object(xe.jsx)("label",{htmlFor:"password",className:"input-label",children:"Password"}),Object(xe.jsx)(Ae,{id:"password",placeholder:"Password",type:"password",value:s,onChange:function(e){return l(e.target.value)}})]}),Object(xe.jsx)("div",{className:"auth-form__button",children:Object(xe.jsx)(Ne,{color:"primary",type:"button",onClick:function(e){e.preventDefault(),u({type:O,payload:{name:n,password:s}})},children:" Signin"})})]})]})}function De(){var e=Object(c.useState)(""),t=Object(_e.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(_e.a)(r,2),s=i[0],l=i[1],u=Object(c.useState)(""),d=Object(_e.a)(u,2),j=d[0],m=d[1],b=Object(o.b)();return Object(xe.jsxs)("div",{className:"container auth",children:[Object(xe.jsxs)("div",{className:"row auth-header",children:[Object(xe.jsx)("h2",{className:"cell auth-header__head",children:"Signup"}),Object(xe.jsx)("span",{className:"cell auth-header__link",children:Object(xe.jsx)(Oe.b,{to:"/auth",children:"or signin"})})]}),Object(xe.jsxs)("form",{className:"row auth-form",children:[Object(xe.jsxs)("div",{className:"auth-form__input",children:[Object(xe.jsx)("label",{htmlFor:"name",className:"input-label",children:"Name"}),Object(xe.jsx)(Ae,{id:"name",placeholder:"Name",type:"text",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(xe.jsxs)("div",{className:"auth-form__input",children:[Object(xe.jsx)("label",{htmlFor:"password",className:"input-label",children:"Password"}),Object(xe.jsx)(Ae,{id:"password",placeholder:"Password",type:"password",value:s,onChange:function(e){return l(e.target.value)}})]}),Object(xe.jsxs)("div",{className:"auth-form__input",children:[Object(xe.jsx)("label",{htmlFor:"passwordConfirm",className:"input-label",children:"Confirm password"}),Object(xe.jsx)(Ae,{id:"passwordConfirm",placeholder:"Confirm password",type:"password",value:j,onChange:function(e){return m(e.target.value)}})]}),Object(xe.jsx)("div",{className:"auth-form__button",children:Object(xe.jsx)(Ne,{color:"primary",type:"button",onClick:function(e){e.preventDefault(),b({type:_,payload:{name:n,password:s}}),console.log("auth")},disabled:j!==s,children:" Signup"})})]})]})}function Le(){return Object(xe.jsx)("div",{children:Object(xe.jsx)("h1",{children:"Home works"})})}function Be(){return Object(xe.jsx)("h1",{children:"Coming soon.."})}var Ge={games:{train:{maxPlayersQty:5,playersColors:["red","green","blue","black","yellow"],routeMainScores:[20,21],routeLocalScores:[5,6,7,8,9,10,11,12,13],cars:[{qty:1,score:1},{qty:2,score:2},{qty:3,score:4},{qty:4,score:7},{qty:6,score:15},{qty:8,score:21}],rounds:[{path:"start",icon:ke.p},{path:"routes",icon:ke.g},{path:"length",icon:ke.k},{path:"stations",icon:ke.l},{path:"cars",icon:ke.n}]}}};function qe(e){var t=e.gameType,n=Object(Pe.h)().round,a=re.clientGame,r=Object(o.c)(a.selectAll).filter((function(e){return e.type===t})),i=Object(c.useMemo)((function(){return Ge.games[t].rounds.filter((function(e){return e.path===n})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{idx:Ge.games[t].rounds.indexOf(e)})}))[0]}),[n,t]);return Object(xe.jsx)(xe.Fragment,{children:i&&t&&Ge.games[t].rounds&&Ge.games[t].rounds.map((function(e,t){return Object(xe.jsx)(Oe.c,{disabled:"start"===e.path&&r&&r.length||"start"!==e.path&&r&&!r.length,className:"rounds-menu__item\n          ".concat(t<i.idx?"rounds-menu__item_passed":"","\n          ").concat(t>i.idx?"rounds-menu__item_upcomming":"","\n          "),end:!0,to:"../"+e.path,children:Object(xe.jsx)(Ce.a,{icon:e.icon})},e.path)}))})}var Ie=n(60),ze=n.n(Ie),Ue=["children"],Fe=function(e){var t=e.children,n=Object(fe.a)(e,Ue);return Object(xe.jsx)("select",Object(l.a)(Object(l.a)({},n),{},{className:n.className?ze.a.sel+" "+n.className:ze.a.sel,children:t}))},Me=n(90),Je=["red","green","blue","black","yellow"],Qe=Je[0];function Ye(e){var t=e.color,n=void 0===t?Qe:t,a=e.idx,r=void 0===a?0:a,i=e.filtredColors,s=void 0===i?Je:i,o=e.selectColor,l=e.getDefaultColor,u=void 0===l?function(){}:l,d=Object(c.useState)(!1),j=Object(_e.a)(d,2),m=j[0],b=j[1];Object(c.useEffect)((function(){u(n,r)}),[n,u,r]);return Object(xe.jsx)("div",{className:"select-color",style:{backgroundColor:n},onClick:function(){return b((function(e){return!e}))},children:m&&Object(xe.jsxs)("div",{className:"select-color__popup select-color-popup",children:[Object(xe.jsx)(Ce.a,{className:"select-color-popup__close-icon",icon:ke.c}),s.map((function(e){return Object(xe.jsx)("div",{className:"select-color-popup__item",style:{backgroundColor:e},onClick:function(){return function(e){return o(e,r)}(e)}},e)}))]})})}function He(e){var t=e.createGamer,n=Object(c.useState)(""),a=Object(_e.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(void 0),o=Object(_e.a)(s,2),l=o[0],u=o[1];return Object(xe.jsxs)("div",{className:"create-gamer",children:[Object(xe.jsx)("div",{className:"create-gamer__background"}),Object(xe.jsx)("div",{className:"create-gamer__modal",children:Object(xe.jsxs)("form",{className:"create-gamer-form",children:[Object(xe.jsx)("div",{className:"create-gamer-form__item",children:Object(xe.jsx)("h3",{className:"heading-text",children:"Create gamer"})}),Object(xe.jsxs)("div",{className:"create-gamer-form__item",children:[Object(xe.jsx)("div",{className:"create-gamer-form__select-color",children:Object(xe.jsx)(Ye,{color:l,getDefaultColor:function(e){u(e)},selectColor:function(e){u(e)}})}),Object(xe.jsx)("div",{className:"create-gamer-form__input",children:Object(xe.jsx)(Ae,{id:"name",placeholder:"Name",type:"text",value:r,onChange:function(e){return i(e.target.value)}})})]}),Object(xe.jsx)("div",{className:"create-gamer-form__item",children:Object(xe.jsxs)("div",{className:"create-gamer-form__btns",children:[Object(xe.jsx)(Ne,{color:"primary",type:"button",disabled:!r,onClick:function(){t({name:r,color:l})},children:"Create"}),Object(xe.jsx)(Ne,{color:"secondary",type:"button",onClick:function(){t(null)},children:"Close"})]})})]})})]})}function We(){var e=Object(o.b)(),t=re.gamer,n=re.recentPlayer,a=re.clientPlayer,r=Object(o.c)(t.selectAll),i=Object(o.c)(n.selectAll),s=Object(o.c)(a.selectAll),u=Object(c.useMemo)((function(){return Ge.games.train.maxPlayersQty}),[]),d=Object(c.useMemo)((function(){return Ge.games.train.playersColors}),[]),j=Object(c.useState)([]),m=Object(_e.a)(j,2),b=m[0],h=m[1],p=Object(c.useState)(d),O=Object(_e.a)(p,2),_=O[0],f=O[1],y=Object(c.useState)(!1),g=Object(_e.a)(y,2),x=g[0],v=g[1],N=ne.gamer,k=ne.recentPlayer,C=ne.clientPlayer,S=ne.clientGame,P=ne.clientRound,w=Object(c.useCallback)((function(t){e(C.setAll(t))}),[e,C]);Object(c.useEffect)((function(){w(i)}),[i,w]),Object(c.useEffect)((function(){e(N.getAll())}),[e,N,k]);Object(c.useEffect)((function(){var e=r.filter((function(e){for(var t=0;t<s.length;t++)if(s[t]._id===e._id)return!1;return!0}));h(e)}),[s,r]),Object(c.useEffect)((function(){var e=d.filter((function(e){for(var t=0;t<s.length;t++)if(s[t].color===e)return!1;return!0}));f(e)}),[s,d]);var E=function(e){return function(t){return w(s.map((function(n,c){if(e===c){var a=b.filter((function(e){return e._id===t.target.value}))[0],r=a.color;return _.includes(r)?a:Object(l.a)(Object(l.a)({},a),{},{color:_[0]})}return n})))}},T=function(e,t){return w(s.map((function(n,c){return t===c?Object(l.a)(Object(l.a)({},n),{},{color:e}):n})))};return Object(xe.jsxs)("div",{className:"container choose-gamers",children:[Object(xe.jsx)("div",{className:"row choose-gamers__header",children:Object(xe.jsx)("h2",{className:"heading-text",children:"Choose gamers"})}),s.map((function(e,t){return Object(xe.jsxs)("div",{className:"row row_nowrap choose-gamers__form choose-gamers-form",children:[Object(xe.jsx)("div",{className:"choose-gamers-form__select-color",children:Object(xe.jsx)(Ye,{color:e.color,idx:t,filtredColors:_,selectColor:T})}),Object(xe.jsxs)(Fe,{className:"choose-gamers-form__select-name",onChange:E(t),value:s[t]._id,children:[Object(xe.jsx)("option",{value:e._id,children:e.name},e._id),b.map((function(e){return Object(xe.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),Object(xe.jsx)(Ne,{className:"choose-gamers-form__remove-gamer",customType:"icon",color:"danger",type:"button",onClick:function(){return function(e){return w(s.filter((function(t,n){return n!==e})))}(t)},children:Object(xe.jsx)(Ce.a,{icon:ke.h})})]},e._id)})),Object(xe.jsxs)("div",{className:"row choose-gamers__btns",children:[Object(xe.jsx)(Ne,{color:"danger",className:"choose-gamers-btns__item",type:"button",disabled:!b.length||s.length>=u,onClick:function(){var e=b[0].color;if(_.includes(e))return w([].concat(Object(q.a)(s),[b[0]]));w([].concat(Object(q.a)(s),[Object(l.a)(Object(l.a)({},b[0]),{},{color:_[0]})]))},children:"Add"}),Object(xe.jsx)(Ne,{color:"secondary",className:"choose-gamers-btns__item",type:"button",onClick:function(){v(!0)},children:"Create"}),Object(xe.jsx)(Ne,{color:"danger",className:"choose-gamers-btns__item",type:"button",disabled:!s.length,onClick:function(e){return w([])},children:"Remove All"})]}),s&&s.length>1&&Object(xe.jsx)("div",{className:"row choose-gamers__submit",children:Object(xe.jsx)(Ne,{color:"primary",type:"button",onClick:function(){var t=s.map((function(e){return{_id:e._id,scoresLine:[]}})),n=[{_id:"start",players:t},{_id:"routes",players:t},{_id:"length",players:t},{_id:"stations",players:s.map((function(e){return{_id:e._id,scoresLine:[12]}}))},{_id:"cars",players:t}],c={_id:Object(Me.a)(),type:"train"};console.log("clientGame",c),e(S.setAll([c])),e(k.setAll(s)),e(P.setAll(n))},children:"Start game"})}),x&&Object(xe.jsx)(He,{createGamer:function(t){v(!1),t&&e(N.add(t))}})]})}var Ve=Ge.games.train.routeMainScores,Xe=Ge.games.train.routeLocalScores,Ze=Ge.games.train.cars;function Ke(){var e=Object(o.b)(),t=Object(Pe.h)().round,n=ne.clientRound,c=re.clientRound,a=re.clientPlayer,r=(Object(o.c)(c.selectAll),Object(o.c)((function(e){return c.selectById(e,t)}))),i=Object(o.c)(a.selectAll),s=function(e){return i.find((function(t){return t._id===e})).color},u=function(e,t){var n=0;return r.players.forEach((function(c){c._id===e&&c.scoresLine.forEach((function(e){e===t&&n++}))})),n},d=function(c){var a=c.score,i=c.player_id,s=r.players.map((function(e){return e._id===i?Object(l.a)(Object(l.a)({},e),{},{scoresLine:[].concat(Object(q.a)(e.scoresLine),[a])}):e}));e(n.updateOne({id:t,changes:{players:s}}))},j=function(c){var a=c.score,i=c.player_id,s=r.players.map((function(e){if(e._id===i){var t=Object(q.a)(e.scoresLine),n=t.indexOf(a);if(t.splice(n,1),-1!==n)return Object(l.a)(Object(l.a)({},e),{},{scoresLine:t})}return e}));e(n.updateOne({id:t,changes:{players:s}}))};return Object(xe.jsx)(xe.Fragment,{children:r&&r.players.map((function(c){return Object(xe.jsxs)("div",{className:"round",children:[Object(xe.jsxs)("div",{className:"round__summary",style:{borderBottom:"2px solid "+s(c._id)},children:[Object(xe.jsx)("h4",{className:"round__summary-name",children:(o=c._id,i.find((function(e){return e._id===o})).name)}),Object(xe.jsxs)("h5",{className:"round__summary-scores",children:["Scores: ",(a=c.scoresLine,a.reduce((function(e,t){return e+t}),0))]})]}),"routes"===r._id&&Object(xe.jsxs)("div",{className:"round__gameplay gameplay",children:[Object(xe.jsx)("div",{className:"gameplay__visualization gameplay__visualization_routes",children:c.scoresLine.map((function(e){return Object(xe.jsx)(Ne,{customType:"narrow",color:e>19?"route-main":"route-local",onClick:function(){return j({score:e,player_id:c._id})},children:e},Object(Me.a)())}))}),Object(xe.jsxs)("div",{className:"gameplay__tools",children:[Ve&&Ve.map((function(e){return Object(xe.jsx)(Ne,{color:"route-main",customType:"narrow",onClick:function(){return d({score:e,player_id:c._id})},children:e},e)})),Xe&&Xe.map((function(e){return Object(xe.jsx)(Ne,{color:"route-local",customType:"narrow",onClick:function(){return d({score:e,player_id:c._id})},children:e},e)}))]})]}),"length"===r._id&&Object(xe.jsx)("div",{className:"round-item__gameplay gameplay",children:Object(xe.jsx)("div",{className:"gameplay__visualization gameplay__visualization_length",onClick:function(){return function(c){var a=c.score,i=c.player_id,s=r.players.map((function(e){return e._id===i?Object(l.a)(Object(l.a)({},e),{},{scoresLine:[a]}):Object(l.a)(Object(l.a)({},e),{},{scoresLine:[]})}));e(n.updateOne({id:t,changes:{players:s}}))}({player_id:c._id,score:10})},children:c.scoresLine.length?Object(xe.jsxs)(Ne,{color:"primary",className:"length length_longest",children:[Object(xe.jsx)(Ce.a,{className:"gameplay__car-btn_icon",icon:ke.m}),Object(xe.jsx)("span",{className:"dbl-icon-btn__text",children:"Longest route"}),Object(xe.jsx)(Ce.a,{className:"gameplay__car-btn_icon",icon:ke.m})]}):Object(xe.jsx)(Ne,{className:"length length_short",children:"Mark as longest route"})})}),"stations"===r._id&&Object(xe.jsx)("div",{className:"round-item__gameplay gameplay",children:Object(xe.jsxs)("div",{className:"gameplay__visualization gameplay__visualization_stations",children:[Object(xe.jsx)(Ne,{color:"primary",customType:"sticky-left",disabled:c.scoresLine.length>3,onClick:function(){return d({score:-4,player_id:c._id})},children:Object(xe.jsx)(Ce.a,{className:"gameplay__car-btn_icon",icon:ke.i})}),Object(xe.jsxs)(Ne,{color:"primary",customType:"sticky",children:[Object(xe.jsxs)("span",{className:"dbl-icon-btn__text",children:["Used: ",c.scoresLine.length-1]}),Object(xe.jsx)(Ce.a,{className:"gameplay__car-btn_icon",icon:ke.m})]}),Object(xe.jsx)(Ne,{color:"primary",customType:"sticky-right",disabled:c.scoresLine.length<2,onClick:function(){return j({score:-4,player_id:c._id})},children:Object(xe.jsx)(Ce.a,{className:"gameplay__car-btn_icon",icon:ke.h})})]})}),"cars"===r._id&&Object(xe.jsx)("div",{className:"round-item__gameplay gameplay",children:Object(xe.jsx)("div",{className:"gameplay__visualization gameplay__visualization_cars",children:Ze.map((function(e){return Object(xe.jsxs)("div",{className:"car",children:[Object(xe.jsx)(Ne,{color:s(c._id),customType:["sticky-left","narrow"],onClick:function(){return d({score:e.score,player_id:c._id})},children:Object(xe.jsx)(Ce.a,{icon:ke.i})}),Object(xe.jsxs)(Ne,{color:s(c._id),customType:["sticky","narrow"],children:[Object(xe.jsx)(Ce.a,{className:"dbl-icon-btn__icon",icon:ke.m}),Object(xe.jsx)("span",{className:"dbl-icon-btn__text",children:e.qty})]}),Object(xe.jsx)(Ne,{color:s(c._id),customType:["sticky-right","narrow"],onClick:function(){return j({score:e.score,player_id:c._id})},children:Object(xe.jsx)(Ce.a,{icon:ke.h})}),Object(xe.jsx)("span",{className:"dbl-icon-btn__text",children:u(c._id,e.score)})]},Object(Me.a)())}))})})]},c._id);var a,o}))})}function $e(e){var t=e.children,n=e.redirect;return e.canActivate?t:Object(xe.jsx)(Pe.a,{to:n})}function et(){var e=Object(o.b)(),t=Object(Pe.h)()["*"],n=Object(Pe.g)(),a=Object(c.useMemo)((function(){return Ge.games.train.rounds.map((function(e){return e.path}))}),[]);Object(c.useEffect)((function(){t&&a.includes(t)||n(a[1],{replace:!0})}),[n,t,a]);var r=ne.clientGame,i=ne.game,s=re.clientGame,u=re.clientRound,d=re.clientPlayer,j=Object(o.c)(d.selectAll),m=Object(o.c)(s.selectAll).filter((function(e){return"train"===e.type})),b=Object(o.c)(u.selectAll),h=[{path:"start",element:Object(xe.jsx)($e,{redirect:"../"+a[1],canActivate:m&&!m.length,children:Object(xe.jsx)(We,{})}),exact:"true"},{path:":round",element:Object(xe.jsx)($e,{redirect:"../start",canActivate:m&&m.length,children:Object(xe.jsx)(Ke,{})}),exact:"true"},{index:!0,element:Object(xe.jsx)($e,{redirect:"../start",canActivate:m&&m.length,children:Object(xe.jsx)(Ke,{})}),exact:"true"}],p=function(e){var t=0;return b.forEach((function(n){n.players.forEach((function(n){n._id===e&&(t+=n.scoresLine.reduce((function(e,t){return e+t}),0))}))})),t},O=function(e){return j.find((function(t){return t._id===e})).color},_=function(t){var n=b.map((function(e){var t=e.players.map((function(e){return{_id:e._id,score:e.scoresLine.reduce((function(e,t){return e+t}),0)}}));return Object(l.a)(Object(l.a)({},e),{},{players:t})})),c={type:m[0].type,rounds:n};t&&e(i.add(c)),e(r.removeAll())};return Object(xe.jsxs)("div",{className:"game",children:[Object(xe.jsx)("div",{className:"game__rounds-menu rounds-menu",children:Object(xe.jsx)(Pe.d,{children:Object(xe.jsx)(Pe.b,{path:":round",element:Object(xe.jsx)(qe,{gameType:"train"}),exact:"true"})})}),Object(xe.jsxs)("div",{className:"game__content game-content",children:[Object(xe.jsxs)("div",{className:"game-content__header",children:[Object(xe.jsx)("h1",{className:"game-content__header-text heading-text",children:"Train"}),Object(xe.jsxs)("div",{className:"game-content__header-buttons",children:[m&&m.length>0&&Object(xe.jsx)(Ne,{color:"danger",type:"button",onClick:function(){return _(!1)},children:"Cancel game"}),m&&m.length>0&&Object(xe.jsx)(Ne,{color:"danger",type:"button",onClick:function(){return _(!0)},children:"Finish game"})]})]}),Object(xe.jsx)("div",{className:"game-content__summary game-summary",children:j&&(console.log("rtwr"),Object(q.a)(j).sort((function(e,t){return console.log("calcTotalScores(a._id)",p(e._id)),console.log("calcTotalScores(b._id)",p(t._id)),p(t._id)-p(e._id)}))).map((function(e){return Object(xe.jsxs)("div",{className:"game-summary__item",style:{borderLeft:"4px solid ".concat(O(e._id))},children:[Object(xe.jsx)("span",{className:"game-summary__item-name",children:(t=e._id,j.find((function(e){return e._id===t})).name)}),Object(xe.jsx)("span",{className:"game-summary__item-score",style:{borderRight:"3px solid ".concat(O(e._id))},children:Object(xe.jsx)("strong",{children:p(e._id)})})]},Object(Me.a)());var t}))}),Object(xe.jsx)("div",{className:"game-content__rounds",children:Object(xe.jsx)(Pe.d,{children:h.map((function(e){return Object(c.createElement)(Pe.b,Object(l.a)(Object(l.a)({},e),{},{key:Object(Me.a)()}))}))})})]})]})}function tt(){var e=ne.gamer,t=re.gamer,n=ne.trainGame,a=re.trainGame,r=Object(o.b)(),i=Object(o.c)(P),s=Object(o.c)(t.selectAll),l=Object(o.c)(a.selectAll);return Object(c.useEffect)((function(){r(e.getAll())}),[r,e]),Object(c.useEffect)((function(){r(n.getAll())}),[r,n]),Object(xe.jsxs)("div",{children:[Object(xe.jsxs)("h1",{children:["User ",i&&i.role]}),Object(xe.jsxs)("ul",{children:[Object(xe.jsx)("li",{children:"Gamers"}),s&&s.map((function(e){return Object(xe.jsx)("li",{children:e.name},e._id)}))]}),Object(xe.jsxs)("ul",{children:[Object(xe.jsx)("li",{children:"Train Games"}),l&&l.map((function(e){return Object(xe.jsx)("li",{children:e.type},e._id)}))]})]})}function nt(){var e=Object(o.c)((function(e){return e.auth.user})),t=[{path:"/",element:Object(xe.jsx)(Le,{}),exact:"true"},{path:"/games/thousand",element:Object(xe.jsx)(Be,{}),exact:"true"},{path:"/games/train/*",element:Object(xe.jsx)(et,{}),exact:"true"},{path:"/dashboard",element:Object(xe.jsx)(tt,{}),exact:"true"},{path:"*",element:Object(xe.jsx)(Pe.a,{to:"/"}),exact:"true"}],n=[{path:"/",element:Object(xe.jsx)(Le,{}),exact:"true"},{path:"/games/thousand",element:Object(xe.jsx)(Be,{}),exact:"true"},{path:"/games/train/*",element:Object(xe.jsx)(et,{}),exact:"true"},{path:"/dashboard",element:Object(xe.jsx)(tt,{}),exact:"true"},{path:"/auth/",element:Object(xe.jsx)(Re,{}),exact:"true"},{path:"/auth/signup",element:Object(xe.jsx)(De,{}),exact:"true"},{path:"*",element:Object(xe.jsx)(Pe.a,{to:"/"}),exact:"true"}];return Object(xe.jsx)(Pe.d,{children:e&&"member"===e.role?t.map((function(e){return Object(c.createElement)(Pe.b,Object(l.a)(Object(l.a)({},e),{},{key:e.path}))})):n.map((function(e){return Object(c.createElement)(Pe.b,Object(l.a)(Object(l.a)({},e),{},{key:e.path}))}))})}var ct=function(){return Object(c.useEffect)((function(){Z.get("/api/auth/protected").subscribe((function(e){return console.log("protected",e)}),(function(e){return console.log("subs",e)}))}),[]),Object(xe.jsxs)(Oe.a,{children:[Object(xe.jsx)(Se,{}),Object(xe.jsx)("main",{className:"main",children:Object(xe.jsx)(nt,{})})]})};n(82);i.a.render(Object(xe.jsx)(a.a.StrictMode,{children:Object(xe.jsx)(o.a,{store:pe,children:Object(xe.jsx)(ct,{})})}),document.getElementById("root")),s()}},[[83,1,2]]]);
//# sourceMappingURL=main.3a3cce59.chunk.js.map