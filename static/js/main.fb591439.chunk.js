(this["webpackJsonpapp-test-illuminate"]=this["webpackJsonpapp-test-illuminate"]||[]).push([[0],{273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);n(187),n(216),n(218),n(219),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258);var o=n(0),s=n(46),r=n.n(s),c=n(12),a=n.n(c),i=n(34),l=n.n(i),p=n(41),u=n(19),d=n(6),b=(n(272),n(103)),h=n.n(b),f=n(104),j=n.n(f),x=n.p+"static/media/1.f9d395c5.png",g=n.p+"static/media/2.3651a0ca.png",w=n.p+"static/media/3.5b1c6ba3.png",m=n.p+"static/media/4.1f6c3dcb.png",O=(n(273),n(274),n(275),7779768),y=203135022,_=Number(new URLSearchParams(document.location.search).get("vk_user_id")),k=["https://sun9-3.userapi.com/impg/GaGxqCpnlC59LRvDgrvGeUAPohs8zNmIhjzteQ/rbRuFWMdtDI.jpg?size=775x1080&quality=96&sign=421fff7f7a709f761684c82bdfc91a9a&type=album","https://sun9-18.userapi.com/impg/QCk_NPunAzBaR3mIXwfKxcduoL1YL9Kg20swCQ/2D1zd88ldEA.jpg?size=775x1080&quality=96&sign=ffa2a40dce7516f20e15a6d47bae3a53&type=album","https://sun9-7.userapi.com/impg/G62ZkJOQEdM169chsEmJpoJWUt5neWp4Ojppfw/qNdRgVsWuVc.jpg?size=775x1080&quality=96&sign=5f61effcc120db4e37d6601d67c06f93&type=album","https://sun9-51.userapi.com/impg/QfW1AdLgzP9X6kYIpdCLZie-IIOOhD2SxIlECA/-n-5uUBql4w.jpg?size=775x1080&quality=96&sign=591e4c8eb407ac9fdf079d1e82c0d2f7&type=album"];function v(e,t,n,o,s){switch(e){case"share-link":!function(){var e="https://vk.com/app".concat(O);a.a.send("VKWebAppShare",{link:e})}();break;case"copy-link":!function(e){var t="https://vk.com/app".concat(O);a.a.send("VKWebAppGetClientVersion").then((function(n){console.log(n.platform),"web"===n.platform||"mobile-web"===n.platform?window.navigator.clipboard.writeText(t).then((function(){console.log("successfully set",t),e("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430")}),(function(){console.log("write failed",t)})):(a.a.send("VKWebAppCopyText",{text:t}),e("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"))})).catch((function(e){console.log("error",e)}))}(t);break;case"story":!function(e){var t="https://vk.com/app".concat(O,"#").concat(_);a.a.send("VKWebAppShowStoryBox",{background_type:"image",url:e,attachment:{text:"go_to",type:"url",url:t}})}(o);break;case"story-task":!function(e,t,n){var o="https://vk.com/public".concat(y);a.a.send("VKWebAppShowStoryBox",{background_type:"image",url:e,attachment:{text:"go_to",type:"url",url:o}}).then((function(e){console.log("VKWebAppShowStoryBox res",e),n(!0)})).catch((function(e){console.log("VKWebAppShowStoryBox err",e),t("\u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435","red"),n(!1)}))}(o,t,s);break;case"share-wall":!function(e,t){e.preventDefault();var n="https://vk.com/app".concat(O),o="".concat(t,",https://vk.com/app").concat(O),s="\u0423\u0437\u043d\u0430\u0439 \u0435\u0441\u043b\u0438 \u043d\u0435 \u0431\u043e\u0438\u0448\u044c\u0441\u044f! \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 - ".concat(n);a.a.send("VKWebAppShowWallPostBox",{message:s,attachments:o})}(n,o)}}function S(e,t,n){console.log("add group"),a.a.send("VKWebAppJoinGroup",{group_id:t}).then((function(e){var t=e.result;console.log("VKWebAppJoinGroup res",t),n(!0)})).catch((function(t){e("\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0443, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","red"),n(!1)}))}var A=[{id:1,question:"\u0412\u044b \u0441\u0442\u0430\u0440\u0448\u0435 18?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0421\u0442\u0430\u0440\u0448\u0435",answer_3:"\u041c\u043b\u0430\u0434\u0448\u0435",answer_4:"\u041c\u043d\u0435 18"},{id:2,question:"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u0445\u043e\u0431\u0431\u0438?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:""},{id:3,question:"\u0412\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c \u0441\u043f\u043e\u0440\u0442\u043e\u043c?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:""},{id:4,question:"\u041b\u044e\u0431\u0438\u0442\u0435 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0445 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0445?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e"},{id:5,question:"\u041b\u0435\u0432\u0448\u0430 \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u0448\u0430?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u041b\u0435\u0432\u0448\u0430",answer_3:"\u041f\u0440\u0430\u0432\u0448\u0430",answer_4:""},{id:6,question:"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043b\u044e\u0431\u043b\u0435\u043d\u043d\u044b\u0439(\u043a\u0440\u0430\u0448)?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:""},{id:7,question:"\u0412\u044b \u0432\u0435\u0440\u0443\u044e\u0449\u0438\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:"50/50"},{id:8,question:"\u0412\u044b \u0431\u044b\u0432\u0430\u043b\u0438 \u043d\u0430 \u0433\u0440\u0430\u043d\u0438 \u0441\u043c\u0435\u0440\u0442\u0438? ( \u0422\u043e\u043d\u0443\u043b\u0438, \u0443\u0431\u0435\u0433\u0430\u043b\u0438 \u043e\u0442 \u043c\u0430\u043d\u044c\u044f\u043a\u0430, \u043f\u043e\u043f\u0430\u0434\u0430\u043b\u0438 \u0432 \u0430\u0432\u0430\u0440\u0438\u044e \u0438 \u0442.\u0434 )",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:""},{id:9,question:"\u0412\u0435\u0440\u0438\u0442\u0435 \u0432 \u0440\u0435\u0438\u043d\u043a\u0430\u0440\u043d\u0430\u0446\u0438\u044e ( \u0436\u0438\u0437\u043d\u044c \u043f\u043e\u0441\u043b\u0435 \u0441\u043c\u0435\u0440\u0442\u0438 )?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:""},{id:10,question:"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u0444\u043e\u0431\u0438\u0438?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:""}],C=["\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0432\u043e\u0434\u044b","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043c\u0430\u0448\u0438\u043d","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0432\u0440\u0435\u0434\u043d\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u043e\u0447\u043d\u044b\u0445 \u043f\u0440\u043e\u0433\u0443\u043b\u043e\u043a","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432 ( \u0431\u0443\u0434\u044c\u0442\u0435 \u0431\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435 )","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0441\u0430\u043c\u043e\u043b\u0451\u0442\u043e\u0432"],W=["\u0418\u0432\u0430\u043d","\u0421\u0435\u0440\u0433\u0435\u0439","\u041d\u0438\u043a\u0438\u0442\u0430","\u0413\u043b\u0435\u0431","\u041a\u0438\u0440\u0438\u043b\u043b","\u0410\u043d\u0434\u0440\u0435\u0439","\u0413\u0435\u043e\u0440\u0433\u0438\u0439","\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","\u0410\u043b\u0435\u043a\u0441\u0435\u0439","\u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432","\u0418\u043b\u044c\u044f","\u0415\u0432\u0433\u0435\u043d\u0438\u0439","\u0415\u0433\u043e\u0440","\u041f\u0430\u0432\u0435\u043b","\u041e\u043b\u0435\u0433"],I=["\u0412 \u043c\u0430\u0448\u0438\u043d\u0435","\u0412 \u043a\u043b\u0443\u0431\u0435","\u0414\u043e\u043c\u0430","\u0412 \u043b\u0435\u0441\u0443","\u0412 \u0433\u043e\u0441\u0442\u0438\u043d\u0438\u0446\u0435","\u0412 \u043f\u043e\u0435\u0437\u0434\u0435","\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0447\u043d\u043e\u0439","\u0412 \u0441\u0430\u0443\u043d\u0435","\u0412 \u043a\u0430\u043b\u044c\u044f\u043d\u043d\u043e\u0439"],R=n(3),P=function(e){var t=e.question,n=e.answer_1,o=e.answer_2,s=e.answer_3,r=e.answer_4;return Object(R.jsx)(d.g,{top:t,children:Object(R.jsxs)(d.i,{children:[Object(R.jsx)("option",{value:"yes",children:n}),Object(R.jsx)("option",{value:"yes",children:o}),Object(R.jsx)("option",{value:"no",children:s}),Object(R.jsx)("option",{value:"no",children:r})]})})},G=function(e){var t=e.id,n=(e.go,e.getRandomImg),o=(e.setIMGresult,e.setActivePanel),s=e.publishStories,r=e.getPlatform,c=e.gotToken,a=e.snackbar,i=A.map((function(e,t){return Object(R.jsx)(P,{question:e.question,answer_1:e.answer_1,answer_2:e.answer_2,answer_3:e.answer_3,answer_4:e.answer_4},e.id)}));return Object(R.jsxs)(d.j,{id:t,children:[Object(R.jsx)(d.f,{className:"web"===r?"imgPanelHomeWeb":"imgPanelHomeMobile",children:Object(R.jsxs)(d.h,{children:[i,Object(R.jsx)(d.g,{children:Object(R.jsx)(d.d,{onClick:function(){n(0,4),c&&s(),o("result-panel")},stretched:!0,style:{height:"60px",backgroundColor:"white",marginTop:"5px",borderRadius:"40px"},children:Object(R.jsx)("span",{style:{color:"black",fontSize:"20px"},children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})})})]})}),a]})},V=function(e){var t=e.id,n=(e.go,e.openAlert),o=e.setActivePanel,s=e.snackbar,r=e.getPlatform;return Object(R.jsxs)(d.j,{id:t,children:[Object(R.jsx)(d.k,{}),Object(R.jsxs)(d.f,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"150px"},children:["web"===r?Object(R.jsx)(d.f,{style:{fontWeight:"bold",fontSize:"25px",margin:"0px 10px 0px 10px"},children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e?"}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(d.f,{style:{fontWeight:"bold",fontSize:"25px",margin:"0px 10px 0px 10px"},children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430"}),Object(R.jsx)(d.f,{style:{fontWeight:"bold",fontSize:"25px",margin:"0px 10px 0px 10px"},children:"\u043d\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e?"})]}),Object(R.jsx)(d.d,{onClick:function(){return S(n,o)},style:{width:"200px",height:"80px",backgroundColor:"#165df5",marginTop:"50px",borderRadius:"45px"},children:Object(R.jsx)("span",{style:{color:"white",fontSize:"20px"},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]}),s]})},z=n(38),K=function(e){var t=e.id,n=e.go,s=e.IMGresult,r=(e.openBase,e.getPlatform),c=e.openAlert,i=e.snackbar,l=Object(o.useState)(!1),p=Object(u.a)(l,2),b=p[0],h=p[1],f=Object(o.useState)(!1),j=Object(u.a)(f,2),x=j[0],g=j[1],w=Object(o.useState)(!1),m=Object(u.a)(w,2),O=m[0],y=m[1];return Object(o.useEffect)((function(){setTimeout((function(){}),1e3)}),[]),Object(R.jsxs)(d.j,{id:t,children:[Object(R.jsx)(d.k,{separator:!1,left:Object(R.jsxs)(d.f,{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"},children:[Object(R.jsx)(d.f,{onClick:function(){return v("story",null,null,k[globalURLSharing.url])},style:{background:"linear-gradient(90deg, rgba(247,106,171,1) 0%, rgba(0,212,255,1) 100%)",borderRadius:"9px",marginLeft:"10px",fontSize:"14px",height:"28px",width:"170px",color:"white",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"}),Object(R.jsx)(d.f,{})]})}),Object(R.jsx)(d.f,{className:"web"===r?"ResultPanelWeb":"ResultPanelMobile",style:{paddingBottom:"20px"},children:Object(R.jsxs)(d.f,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[s,Object(R.jsxs)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"300px"},children:[Object(R.jsx)(d.f,{style:{color:"white",fontSize:"15px",fontWeight:"bold"},children:"\u041f\u0420\u0418\u0427\u0418\u041d\u0410 \u0421\u041c\u0415\u0420\u0422\u0418"}),Object(R.jsxs)(d.f,{children:[" ",Object(R.jsx)(d.d,{onClick:function(){return S(c,5184003,h)},style:{width:"60px",height:"20px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(R.jsx)("span",{style:{color:"black",fontSize:"13px",fontWeight:"bold"},children:"\u0423\u0437\u043d\u0430\u0442\u044c"})})]})]}),b&&Object(R.jsx)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"300px",height:"30px",border:"solid white 1px",borderRadius:"15px",margin:"8px",color:"white",backgroundColor:"rgba(255, 255, 255, 0.3)"},children:C[Object(z.a)(0,C.length-1)]}),Object(R.jsxs)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"300px"},children:[Object(R.jsx)(d.f,{style:{color:"white",fontSize:"15px",fontWeight:"bold"},children:"\u0418\u041c\u042f \u0421\u0423\u0416\u0415\u041d\u041e\u0413\u041e"}),Object(R.jsxs)(d.f,{children:[" ",Object(R.jsx)(d.d,{onClick:function(){return function(e,t,n){a.a.send("VKWebAppAllowMessagesFromGroup",{group_id:t}).then((function(e){n(!0)})).catch((function(t){e("\u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0433\u0440\u0443\u043f\u043f\u044b","red"),n(!1)}))}(c,201249621,g)},style:{width:"60px",height:"20px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(R.jsx)("span",{style:{color:"black",fontSize:"13px",fontWeight:"bold"},children:"\u0423\u0437\u043d\u0430\u0442\u044c"})})]})]}),x&&Object(R.jsx)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"300px",height:"30px",border:"solid white 1px",borderRadius:"15px",margin:"8px",color:"white",backgroundColor:"rgba(255, 255, 255, 0.3)"},children:W[Object(z.a)(0,W.length-1)]}),Object(R.jsxs)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"300px"},children:[Object(R.jsx)(d.f,{style:{color:"white",fontSize:"15px",fontWeight:"bold"},children:"\u041c\u0415\u0421\u0422\u041e \u041f\u0415\u0420\u0412\u041e\u0413\u041e/\u0421\u041b\u0415\u0414\u0423\u042e\u0429\u0415\u0413\u041e \u0421\u0415\u041a\u0421\u0410"}),Object(R.jsxs)(d.f,{children:[" ",Object(R.jsx)(d.d,{onClick:function(){return v("story-task",c,null,k[globalURLSharing.url],y)},style:{width:"60px",height:"20px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(R.jsx)("span",{style:{color:"black",fontSize:"13px",fontWeight:"bold"},children:"\u0423\u0437\u043d\u0430\u0442\u044c"})})]})]}),O&&Object(R.jsx)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"300px",height:"30px",border:"solid white 1px",borderRadius:"15px",margin:"8px",color:"white",backgroundColor:"rgba(255, 255, 255, 0.3)"},children:I[Object(z.a)(0,I.length-1)]}),Object(R.jsx)(d.f,{children:Object(R.jsx)(d.d,{onClick:n,"data-to":"home",style:{width:"300px",height:"40px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(R.jsx)("span",{style:{color:"black",fontSize:"15px",fontWeight:"bold"},children:"\u041f\u0440\u043e\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437"})})})]})}),i]})},M=n(102),L=n.n(M);window.globalURLSharing={url:0};var q=function(){var e=Object(o.useState)("home"),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(o.useState)(null),c=Object(u.a)(r,2),i=c[0],b=c[1],f=Object(o.useState)(),_=Object(u.a)(f,2),S=_[0],A=_[1],C=Object(o.useState)(null),W=Object(u.a)(C,2),I=W[0],P=W[1],M=Object(o.useState)(null),q=Object(u.a)(M,2),U=q[0],T=(q[1],Object(o.useState)(null)),D=Object(u.a)(T,2),N=D[0],B=D[1],E=Object(o.useState)(null),F=Object(u.a)(E,2),J=F[0],H=F[1],Q=Object(o.useState)(""),X=Object(u.a)(Q,2),Y=X[0],Z=X[1],$=Object(o.useState)(""),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],oe=Object(o.useState)(!1),se=Object(u.a)(oe,2),re=se[0],ce=se[1];function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green";J||H(Object(R.jsx)(d.l,{duration:"12000",layout:"horizontal",onClose:function(){return H(null)},before:Object(R.jsx)(d.c,{size:24,style:{backgroundColor:t},children:"green"===t?Object(R.jsx)(h.a,{fill:"#fff",width:14,height:14}):Object(R.jsx)(j.a,{fill:"#fff",width:14,height:14})}),children:e}))}Object(o.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,b(t),A(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,n=t.type,o=t.data;if("VKWebAppUpdateConfig"===n){var s=document.createAttribute("scheme");s.value=o.scheme?o.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}(),setTimeout((function(){}),1e3)}),[]),Object(o.useEffect)((function(){var e;!function(e,t){a.a.send("VKWebAppGetAuthToken",{app_id:O,scope:"friends,wall, photo, stories "}).then((function(n){console.log("res:",n),e(n.access_token),subscribeMessageFromGroup(),t(!0)})).catch((function(n){a.a.send("VKWebAppGetAuthToken",{app_id:O,scope:"friends,wall, photo, stories "}).then((function(n){console.log("response:",n),e(res.access_token),subscribeMessageFromGroup(),t(!0)})).catch((function(e){console.log("error:",e)})),console.log("err:",n)}))}(Z,ce),e=y,a.a.send("VKWebAppAllowMessagesFromGroup",{group_id:e}).then((function(e){})).catch((function(t){a.a.send("VKWebAppAllowMessagesFromGroup",{group_id:e}).then((function(e){})).catch((function(e){}))}))}),[]),Object(o.useEffect)((function(){a.a.send("VKWebAppGetClientVersion").then((function(e){ne(e.platform),console.log("result.platform",te)})).catch((function(e){return console.log(e)}))}),[]);var ie=function(e){s(e.currentTarget.dataset.to)};return Object(R.jsx)(d.e,{isWebView:!0,children:Object(R.jsxs)(d.m,{activePanel:n,popout:S,modal:N,children:[Object(R.jsx)(G,{id:"home",fetchedUser:i,go:ie,setIMGresult:P,getRandomImg:function(e,t){e=Math.ceil(e),t=Math.floor(t);var n=Math.floor(Math.random()*(t-e))+e;globalURLSharing.url=n,P(Object(R.jsx)(d.f,{className:"icon".concat(n)})),console.log({linkStories:k[n],result:n,IMGresult:Object(R.jsx)(d.f,{className:"icon".concat(n)})})},setActivePanel:s,publishStories:function(){var e;e=278233876,a.a.send("VKWebAppCallAPIMethod",{method:"photos.getUploadServer",params:{album_id:e,v:5.21,access_token:Y}}).then(function(){var t=Object(p.a)(l.a.mark((function t(n){var o,s,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("photos.getUploadServer res:",n),o=[x,g,w,m][Object(z.a)(0,3)],t.next=4,fetch(o);case 4:return t.next=6,t.sent.blob();case 6:return s=t.sent,(r=new FormData).append("file",s,"image.png"),"https://26d76bf93c96.ngrok.io",t.next=12,L()({method:"post",url:"".concat("https://26d76bf93c96.ngrok.io","/").concat(n.response.upload_url),data:r,headers:{"Content-Type":"multipart/form-data"}});case 12:c=t.sent,i=c.data,a.a.send("VKWebAppCallAPIMethod",{method:"photos.save",params:{album_id:e,v:5.21,access_token:Y,hash:i.hash,photos_list:i.photos_list,server:i.server}}).then((function(e){console.log("photos.save response:",e)})).catch((function(e){console.log("photos.save error:",e)}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("photos.getUploadServer err:",e)}))},getPlatform:te,gotToken:re,openAlert:ae,snackbar:J}),Object(R.jsx)(V,{id:"default-panel",fetchedUser:i,go:ie,openAlert:ae,setActivePanel:s,snackbar:J,getPlatform:te}),Object(R.jsx)(K,{id:"result-panel",fetchedUser:i,go:ie,IMGresult:I,urlSharing:U,openBase:function(){B(null),A(Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(d.a,{onClose:function(){return A(null)},children:[Object(R.jsx)(d.b,{autoclose:!0,onClick:function(){return v("share-link",null,null,APP_IMG_SHARING_WALL[globalURLSharing.url])},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439"}),Object(R.jsx)(d.b,{autoclose:!0,onClick:function(){return v("copy-link",ae,null,APP_IMG_SHARING_WALL[globalURLSharing.url])},children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"}),Object(R.jsx)(d.b,{autoclose:!0,onClick:function(){return v("story",null,null,k[globalURLSharing.url])},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"}),Object(R.jsx)(d.b,{autoclose:!0,onClick:function(e){return v("share-wall",null,e,APP_IMG_SHARING_WALL[globalURLSharing.url])},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435"})]})}))},getPlatform:te,openAlert:ae,snackbar:J})]})})};a.a.send("VKWebAppInit"),r.a.render(Object(R.jsx)(q,{}),document.getElementById("root")),Promise.all([n.e(3),n.e(4)]).then(n.bind(null,302)).then((function(e){e.default}))}},[[298,1,2]]]);
//# sourceMappingURL=main.fb591439.chunk.js.map