(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),l=t.n(c),i=t(33),s=t(71),o=t(41),u=t(50),m=t(27),d=t(29),g=t(31),E=(t(86),function(e){var a=e.loading,t=e.loadImages;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(d.a,{variant:"outline-primary",disabled:!0},r.a.createElement(g.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(d.a,{onClick:t,variant:"outline-primary"},"Load more"))}),b=t(15),p=t(49),f=t(35),_=t(56),O=t.n(_),y=function(e){return r.a.createElement("div",e,r.a.createElement(g.a,{animation:"border"}))},j=function(e){var a=e.image,t=Object(p.a)(e,["image"]),c=Object(n.useState)(!0),l=Object(b.a)(c,2),i=l[0],s=l[1];return r.a.createElement(f.a,Object.assign({},t,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},a.tags)),r.a.createElement(f.a.Body,null,r.a.createElement("img",{className:O.a.image,src:a.largeImageURL,alt:a.tags,onLoad:function(e){s(!1)},style:i?{display:"none"}:{display:"block"}}),r.a.createElement(y,{className:O.a.spinner,style:i?{display:"flex"}:{display:"none"}})),r.a.createElement(f.a.Footer,null,r.a.createElement(d.a,{onClick:t.onHide},"Close")))},v=function(){var e=Object(n.useState)([0,0]),a=Object(b.a)(e,2),t=a[0],r=a[1];return Object(n.useLayoutEffect)(function(){var e=function(){r([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),t},h=t(30),S=t.n(h),w=r.a.forwardRef(function(e,a){return r.a.createElement("div",Object.assign({ref:a},e),r.a.createElement(g.a,{animation:"border"}))}),I=function(e){var a=e.image,t=(e.style,Object(p.a)(e,["image","style"])),c=Object(n.useRef)(null),l=Object(n.useRef)(null),i=Object(n.useState)(0),s=Object(b.a)(i,2),o=s[0],u=s[1],m=v(),d=Object(b.a)(m,2),g=d[0],E=d[1],f=Object(n.useState)(!0),_=Object(b.a)(f,2),O=_[0],y=_[1],h=r.a.useState(!1),I=Object(b.a)(h,2),x=I[0],N=I[1];Object(n.useEffect)(function(){c.current&&!O&&L(c)},[c,O,g,E]),Object(n.useEffect)(function(){l.current&&O&&L(l)},[l,O]);var L=function(e){var a=e.current.clientHeight,t=Math.ceil(a/10+1);u(t)},A=a.webformatURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({},t,{className:S.a.gallery__item,style:{gridRowEnd:"span ".concat(o)}}),r.a.createElement("div",{className:S.a.item__card,ref:c,style:O?{display:"none"}:{display:"block"}},r.a.createElement("div",{style:O?{}:{backgroundImage:"url(".concat(A,")")},className:S.a.gallery__img_div,onClick:function(){return N(!0)}},r.a.createElement("img",{src:A,className:S.a.gallery__img,alt:a.tags,onLoad:function(e){y(!1)},style:{visibility:"hidden"}})),r.a.createElement("div",{className:S.a.item__details},a.tags)),r.a.createElement(w,{ref:l,className:S.a.spinner,style:O?{display:"flex"}:{display:"none"}})),r.a.createElement(j,{image:a,show:x,onHide:function(){return N(!1)}}))},x={LOAD:"IMAGES_LOAD",SUCCESS:"IMAGES_SUCCESS",FAIL:"IMAGES_FAIL"},N=function(e){return{type:x.LOAD,payload:{term:e}}},L=function(e){return{type:x.SUCCESS,payload:{images:e}}},A=function(e){return{type:x.FAIL,payload:e}},k=t(70),R=t.n(k),C=Object(i.b)(function(e){return{images:e.images}},{loadImages:N})(function(e){var a=e.loadImages,t=e.images,n=t.images,c=t.loading;t.error;return r.a.createElement(r.a.Fragment,null,n.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{className:Object(o.a)(R.a.gallery)},n.map(function(e,a){return r.a.createElement(I,{image:e,key:a})}))),r.a.createElement(u.a,null,r.a.createElement(m.a,{className:Object(o.a)("text-center","py-3")},r.a.createElement(E,{loadImages:a,loading:c})))):r.a.createElement(u.a,null,r.a.createElement(m.a,{className:"text-center"},r.a.createElement("h2",null,"Search for something"))))}),T=t(38),q=t(74),F=t(57),G=t(47),U=function(){return{type:"INCREMENT_PAGE"}},D=Object(i.b)(function(e){return{query:e.search.query}},{loadImages:N,setQuery:function(e){return{type:"SET_QUERY",payload:{query:e}}},resetPage:function(){return{type:"RESET_PAGE"}}})(function(e){var a=e.loadImages,t=e.setQuery,c=e.resetPage,l=Object(n.useState)(""),i=Object(b.a)(l,2),s=i[0],o=i[1];return r.a.createElement(T.a,{bg:"light",variant:"light",expand:"lg"},r.a.createElement(T.a.Brand,{href:"#home"},"Grid Gallery"),r.a.createElement(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(T.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(q.a,{className:"mr-auto"}),r.a.createElement(F.a,{inline:!0,onSubmit:function(e){e.preventDefault(),/^[a-zA-Z]{3,}$/.test(s)?(c(),t(s),a()):alert("Invalid query.")}},r.a.createElement(F.a.Group,{as:m.a,controlId:"validationFormik02"},r.a.createElement(G.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:s,onChange:function(e){return o(e.target.value)}}),r.a.createElement(d.a,{type:"submit",variant:"outline-primary"},"Search")))))}),M=(t(88),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(s.a,{fluid:!0,className:"pt-3"},r.a.createElement(C,null)))}),z=t(14),P=t(75),H=t(17),Q=t.n(H),X=t(18),B=t(72),Y=t(73),J=t.n(Y),V=function(){var e=Object(B.a)(Q.a.mark(function e(a,t){var n;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("https://pixabay.com/api/","?key=").concat("13692591-7dae44556281be3888ed946cc","&q=").concat(a,"&page=").concat(t,"&per_page=15"));case 3:return n=e.sent,e.abrupt("return",n.data.hits);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),K=Q.a.mark(ee),W=Q.a.mark(ae),Z=function(e){return e.search.page},$=function(e){return e.search.query};function ee(){var e,a,t;return Q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(X.e)($);case 3:return e=n.sent,n.next=6,Object(X.e)(Z);case 6:return a=n.sent,n.next=9,Object(X.b)(V,e,a);case 9:return t=n.sent,n.next=12,Object(X.d)(L(t));case 12:return n.next=14,Object(X.d)(U());case 14:n.next=20;break;case 16:return n.prev=16,n.t0=n.catch(0),n.next=20,Object(X.d)(A(n.t0.toString()));case 20:case"end":return n.stop()}},K,null,[[0,16]])}function ae(){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(X.f)(x.LOAD);case 3:return e.next=5,Object(X.c)(ee);case 5:e.next=0;break;case 7:case"end":return e.stop()}},W)}var te=Q.a.mark(ne);function ne(){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([ae()]);case 2:case"end":return e.stop()}},te)}var re=t(58),ce=t(10),le={images:[],loading:!1,error:null},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case x.LOAD:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0,error:null});case x.SUCCESS:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!1,images:[].concat(Object(re.a)(e.images),Object(re.a)(n.images))});case x.FAIL:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!1,images:[],error:n});case"SET_QUERY":return Object(ce.a)(Object(ce.a)({},e),{},{images:[]});default:return e}},se={query:null,page:1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SET_QUERY":return Object(ce.a)(Object(ce.a)({},e),{},{query:n.query});case"INCREMENT_PAGE":return Object(ce.a)(Object(ce.a)({},e),{},{page:e.page+1});case"RESET_PAGE":return Object(ce.a)(Object(ce.a)({},e),{},{page:1});default:return e}},ue=Object(z.c)({images:ie,search:oe}),me=function(){var e=Object(P.a)(),a=Object(z.e)(ue,window.__REDUX_DEVTOOLS_EXTENSION__?Object(z.d)(Object(z.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(z.a)(e));return e.run(ne),a},de=(t(107),me()),ge=function(){return r.a.createElement(i.a,{store:de},r.a.createElement(M,null))},Ee=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),Ee)},30:function(e,a,t){e.exports={gallery__img:"ImageItem_gallery__img__7NvYu",gallery__img_div:"ImageItem_gallery__img_div__1XK_s",item__card:"ImageItem_item__card__2Ajzq",item__details:"ImageItem_item__details__1RR2z",spinner:"ImageItem_spinner__1QqP7"}},56:function(e,a,t){e.exports={image:"ImageModal_image__wHonM",spinner:"ImageModal_spinner__3hhij"}},70:function(e,a,t){e.exports={gallery:"ImageGrid_gallery__3dE5N"}},76:function(e,a,t){e.exports=t(108)},86:function(e,a,t){},88:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.63a0c9eb.chunk.js.map