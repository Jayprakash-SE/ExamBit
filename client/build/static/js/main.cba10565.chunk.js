(this.webpackJsonpbit=this.webpackJsonpbit||[]).push([[0],{166:function(e,a,t){e.exports=t(313)},312:function(e,a,t){},313:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=t(152),i=t(12),u=t(374),m=t(315),s=t(24),d=t(94),p=t(359),f=t(366),E=t(367),h=t(364),b=t(365),g=t(380),v=t(155),y=t(141),O=t.n(y),j=t(97),w=t.n(j),k=t(95),C=t.n(k),N=t(96),S=t.n(N),x=t(142),R=t.n(x),B=Object(p.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{display:"block"},sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var I=function(){var e=B(),a=r.a.useState(null),t=Object(s.a)(a,2),n=t[0],l=t[1],o=r.a.useState(null),c=Object(s.a)(o,2),i=c[0],u=c[1],d=Boolean(n),p=Boolean(i),y=function(e){l(e.currentTarget)},j=function(){u(null)},k=function(){l(null),j()},N="primary-search-account-menu",x=r.a.createElement(v.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:N,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:k},r.a.createElement(g.a,{onClick:k},"Profile"),r.a.createElement(g.a,{onClick:k},"My account")),I=r.a.createElement(v.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:j},r.a.createElement(g.a,null,r.a.createElement(h.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(b.a,{badgeContent:4,color:"secondary"},r.a.createElement(C.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(g.a,null,r.a.createElement(h.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(b.a,{badgeContent:11,color:"secondary"},r.a.createElement(S.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(g.a,{onClick:y},r.a.createElement(h.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(w.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(f.a,{position:"static",color:"primary"},r.a.createElement(E.a,null,r.a.createElement(h.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(O.a,null)),r.a.createElement(m.a,{className:e.title,variant:"h6",noWrap:!0},"Bharat Institute of Technology"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(h.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(b.a,{badgeContent:4,color:"secondary"},r.a.createElement(C.a,null))),r.a.createElement(h.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(b.a,{badgeContent:17,color:"secondary"},r.a.createElement(S.a,null))),r.a.createElement(h.a,{edge:"end","aria-label":"account of current user","aria-controls":N,"aria-haspopup":"true",onClick:y,color:"inherit"},r.a.createElement(w.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(h.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(R.a,null))))),I,x)},M=t(74),U=t(75),F=t(78),T=t(79),P=t(372),q=t(371),z=t(77),W=t.n(z),D=t(379),J=t(368),L=t(369),_=t(377),G=t(370),H=t(143),Q=t.n(H),V=t(81),Y=(t(196),Object(n.forwardRef)((function(e,a){var t=Object(n.useState)(!1),l=Object(s.a)(t,2),o=l[0],c=l[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),d=u[0],p=u[1],f=Object(n.useState)(""),E=Object(s.a)(f,2),h=E[0],b=E[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),y=v[0],O=v[1],j=function(){fetch("/upload/getId",{method:"post"}).then((function(e){return e.json()})).then((function(e){p(e.url),b(e.id)})),c(!0)},w=function(){c(!1)};return Object(n.useImperativeHandle)(a,(function(){return{handleUploadBtn:j}})),r.a.createElement("div",null,r.a.createElement(V.NotificationContainer,null),r.a.createElement(D.a,{open:o,onClose:w,"aria-labelledby":"form-dialog"},r.a.createElement(J.a,{id:"form-dialog"},"Upload"),r.a.createElement(L.a,{dividers:!0},""===d?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{value:d}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,null,"Scan QR code or goto ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:d},d)," URL."),r.a.createElement(_.a,{autoFocus:!0,margin:"dense",variant:"outlined",label:"Verification Code",type:"number",color:"secondary",value:y,onChange:function(e){O(e.target.value)},fullWidth:!0,InputProps:{inputProps:{max:9999,min:1e3}}}))),r.a.createElement(G.a,null,r.a.createElement(q.a,{onClick:function(){fetch("/upload/verfiyUpload",{method:"post",headers:{"Content-type":"application/json"},cache:"no-cache",body:JSON.stringify({uuid:h,vcode:y})}).then((function(e){return e.json()})).then((function(a){"suceess"===a.status?(V.NotificationManager.success(a.msg,"Upload"),e.editor.current.addImage(a.fileurl),c(!1)):"error"===a.status&&V.NotificationManager.error("Entered wrong verification code!","Error",5e3)}))},color:"secondary",variant:"contained"},"Sumit"),r.a.createElement(q.a,{onClick:w,variant:"contained"},"Cancel"))))}))),$=t(144),A=t.n($),K=(t(300),function(e){Object(T.a)(t,e);var a=Object(F.a)(t);function t(e){var n;return Object(M.a)(this,t),(n=a.call(this,e)).addImage=function(e){var a=n.quil.getEditor(),t=a.getLength();a.insertEmbed(t,"image",e,"user"),a.formatText(t,t+1,"width","200"),a.setSelection(t+1)},n.quil=r.a.createRef(),n}return Object(U.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(A.a,{ref:function(a){e.quil=a},theme:"snow"})}}]),t}(r.a.Component)),X=function(e){Object(T.a)(t,e);var a=Object(F.a)(t);function t(e){var n;return Object(M.a)(this,t),(n=a.call(this,e)).editor=r.a.createRef(),n.uploadRef=r.a.createRef(),n}return Object(U.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(P.a,{fixed:!0},r.a.createElement(Y,{ref:this.uploadRef,editor:this.editor}),r.a.createElement("br",null),r.a.createElement(q.a,{variant:"contained",color:"default",startIcon:r.a.createElement(W.a,null),onClick:function(){return e.uploadRef.current.handleUploadBtn()}}," Upload Image "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K,{ref:this.editor}))}}]),t}(r.a.Component),Z=t(373),ee=t(154);var ae=function(e){var a=e.match,t=Object(n.useState)(""),l=Object(s.a)(t,2),o=l[0],c=l[1];return r.a.createElement(P.a,{fixed:!0},r.a.createElement("br",null),""===o?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{item:!0,xs:4},r.a.createElement(ee.a,{acceptedFiles:["image/*"],filesLimit:1,inputProps:{name:"file",id:"image_file",capture:!0}})),r.a.createElement("br",null),r.a.createElement(q.a,{color:"secondary",onClick:function(){var e=new FormData;e.append("file",document.querySelector("#image_file").files[0]),e.append("fileN",a.params.uuid),fetch("/upload/img/"+a.params.uuid,{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){"suceess"===e.status&&c(e.verficationcode)})).catch((function(e){c("Error :( ")}))},variant:"contained",type:"submit"},"Upload")):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,"Your verfication code is: ",o)))};var te=function(e){return r.a.createElement("div",{className:"page-container"},r.a.createElement("h1",{className:"title"},"404 Not Found"))};var ne=function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,null),r.a.createElement(I,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:X}),r.a.createElement(i.a,{path:"/upload/:uuid",component:ae}),r.a.createElement(i.a,{component:te})),r.a.createElement(m.a,{style:{marginTop:"220px"}},"This is not an offical site and used as Education experments."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=t(153),le=t(376),oe=t(375),ce=t(80),ie=(t(312),Object(re.a)({palette:{primary:oe.a,secondary:ce.a}}));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le.a,{theme:ie},r.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.cba10565.chunk.js.map