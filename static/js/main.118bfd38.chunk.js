(this["webpackJsonpapp-test-illuminate"]=this["webpackJsonpapp-test-illuminate"]||[]).push([[0],{276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},305:function(e,t,n){"use strict";n.r(t);n(190),n(219),n(221),n(222),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261);var o=n(0),c=n(46),s=n.n(c),r=n(12),a=n.n(r),i=n(34),l=n.n(i),p=n(41),u=n(18),d=n(6),b=(n(275),n(106)),h=n.n(b),f=n(107),j=n.n(f),x=n.p+"static/media/1.bed5d3ca.png",g=n.p+"static/media/2.5e2cdc3a.png",m=n.p+"static/media/3.9c519285.png",w=n.p+"static/media/4.933fe8df.png",O=(n(276),n(277),n(278),7779768),y=(Number(new URLSearchParams(document.location.search).get("vk_user_id")),["https://sun9-53.userapi.com/impg/a0fyVA24dAiICnpg6PLuoHgcMZK__2DFSX4G7Q/Z_FAmvQLKw0.jpg?size=579x807&quality=96&sign=c68255377a84ad31deb7febde1b8de3e&type=album","https://sun9-47.userapi.com/impg/x_oqtb7YiGP_HOXrDO2JXKZO3j-KQrNV3ljglQ/ynuIGESmw1A.jpg?size=579x807&quality=96&sign=d19983049bf32c730d4e4393d7a74c1b&type=album","https://sun9-69.userapi.com/impg/U9DJKzK-47acYOdmECrd-_ytc2EqeHp_9GKyeg/_luMg3mwpUY.jpg?size=579x807&quality=96&sign=427c41da6c036a534436c9cb52e60e88&type=album","https://sun9-14.userapi.com/impg/1FFkrEFmyhtGEdN4UKQ2NTR-f3gkIU8w2QP7ag/Hj56c1053cI.jpg?size=579x807&quality=96&sign=39bcaaa1a19b821e3086b336e7d1eb8e&type=album"]);function _(e,t,n,o,c){switch(e){case"share-link":!function(){var e="https://vk.com/app".concat(O);a.a.send("VKWebAppShare",{link:e})}();break;case"copy-link":!function(e){var t="https://vk.com/app".concat(O);a.a.send("VKWebAppGetClientVersion").then((function(n){console.log(n.platform),"web"===n.platform||"mobile-web"===n.platform?window.navigator.clipboard.writeText(t).then((function(){console.log("successfully set",t),e("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430")}),(function(){console.log("write failed",t)})):(a.a.send("VKWebAppCopyText",{text:t}),e("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"))})).catch((function(e){console.log("error",e)}))}(t);break;case"story":!function(e){var t="https://vk.com/app".concat(O);a.a.send("VKWebAppShowStoryBox",{background_type:"image",url:e,attachment:{text:"go_to",type:"url",url:t}})}(o);break;case"story-task":!function(e,t,n){var o="https://vk.com/app".concat(O);a.a.send("VKWebAppShowStoryBox",{background_type:"image",url:e,attachment:{text:"go_to",type:"url",url:o}}).then((function(e){console.log("VKWebAppShowStoryBox res",e),n(!0)})).catch((function(e){console.log("VKWebAppShowStoryBox err",e),t("\u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435","red"),n(!1)}))}(o,t,c);break;case"share-wall":!function(e,t){e.preventDefault();var n="https://vk.com/app".concat(O),o="".concat(t,",https://vk.com/app").concat(O),c="\u0423\u0437\u043d\u0430\u0439 \u0435\u0441\u043b\u0438 \u043d\u0435 \u0431\u043e\u0438\u0448\u044c\u0441\u044f! \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 - ".concat(n);a.a.send("VKWebAppShowWallPostBox",{message:c,attachments:o})}(n,o)}}function k(e,t,n){console.log("add group"),a.a.send("VKWebAppJoinGroup",{group_id:t}).then((function(e){var t=e.result;console.log("VKWebAppJoinGroup res",t),n(!0)})).catch((function(t){e("\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0443, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","red"),n(!1)}))}var A=[{id:1,question:"\u0412\u044b \u0441\u0442\u0430\u0440\u0448\u0435 18?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0421\u0442\u0430\u0440\u0448\u0435",answer_3:"\u041c\u043b\u0430\u0434\u0448\u0435",answer_4:"\u041c\u043d\u0435 18"},{id:2,question:"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u0445\u043e\u0431\u0431\u0438?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442"},{id:3,question:"\u0412\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c \u0441\u043f\u043e\u0440\u0442\u043e\u043c?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442"},{id:4,question:"\u041b\u044e\u0431\u0438\u0442\u0435 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0445 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0445?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e"},{id:5,question:"\u041b\u0435\u0432\u0448\u0430 \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u0448\u0430?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u041b\u0435\u0432\u0448\u0430",answer_3:"\u041f\u0440\u0430\u0432\u0448\u0430"},{id:6,question:"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043b\u044e\u0431\u043b\u0435\u043d\u043d\u044b\u0439(\u043a\u0440\u0430\u0448)?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442"},{id:7,question:"\u0412\u044b \u0432\u0435\u0440\u0443\u044e\u0449\u0438\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442",answer_4:"50/50"},{id:8,question:"\u0412\u044b \u0431\u044b\u0432\u0430\u043b\u0438 \u043d\u0430 \u0433\u0440\u0430\u043d\u0438 \u0441\u043c\u0435\u0440\u0442\u0438? ( \u0422\u043e\u043d\u0443\u043b\u0438, \u0443\u0431\u0435\u0433\u0430\u043b\u0438 \u043e\u0442 \u043c\u0430\u043d\u044c\u044f\u043a\u0430, \u043f\u043e\u043f\u0430\u0434\u0430\u043b\u0438 \u0432 \u0430\u0432\u0430\u0440\u0438\u044e \u0438 \u0442.\u0434 )",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442"},{id:9,question:"\u0412\u0435\u0440\u0438\u0442\u0435 \u0432 \u0440\u0435\u0438\u043d\u043a\u0430\u0440\u043d\u0430\u0446\u0438\u044e ( \u0436\u0438\u0437\u043d\u044c \u043f\u043e\u0441\u043b\u0435 \u0441\u043c\u0435\u0440\u0442\u0438 )?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442"},{id:10,question:"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u0444\u043e\u0431\u0438\u0438?",answer_1:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",answer_2:"\u0414\u0430",answer_3:"\u041d\u0435\u0442"}],S=["\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0432\u043e\u0434\u044b","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043c\u0430\u0448\u0438\u043d","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0432\u0440\u0435\u0434\u043d\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u043e\u0447\u043d\u044b\u0445 \u043f\u0440\u043e\u0433\u0443\u043b\u043e\u043a","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432 ( \u0431\u0443\u0434\u044c\u0442\u0435 \u0431\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435 )","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f","\u041e\u0441\u0442\u0435\u0440\u0435\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u0441\u0430\u043c\u043e\u043b\u0451\u0442\u043e\u0432"],v=["\u0418\u0432\u0430\u043d","\u0421\u0435\u0440\u0433\u0435\u0439","\u041d\u0438\u043a\u0438\u0442\u0430","\u0413\u043b\u0435\u0431","\u041a\u0438\u0440\u0438\u043b\u043b","\u0410\u043d\u0434\u0440\u0435\u0439","\u0413\u0435\u043e\u0440\u0433\u0438\u0439","\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","\u0410\u043b\u0435\u043a\u0441\u0435\u0439","\u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432","\u0418\u043b\u044c\u044f","\u0415\u0432\u0433\u0435\u043d\u0438\u0439","\u0415\u0433\u043e\u0440","\u041f\u0430\u0432\u0435\u043b","\u041e\u043b\u0435\u0433"],C=["\u0412 \u043c\u0430\u0448\u0438\u043d\u0435","\u0412 \u043a\u043b\u0443\u0431\u0435","\u0414\u043e\u043c\u0430","\u0412 \u043b\u0435\u0441\u0443","\u0412 \u0433\u043e\u0441\u0442\u0438\u043d\u0438\u0446\u0435","\u0412 \u043f\u043e\u0435\u0437\u0434\u0435","\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0447\u043d\u043e\u0439","\u0412 \u0441\u0430\u0443\u043d\u0435","\u0412 \u043a\u0430\u043b\u044c\u044f\u043d\u043d\u043e\u0439"],W=["\u041d\u0430\u0441\u0442\u044f","\u0418\u0440\u0438\u043d\u0430","\u041a\u0430\u0442\u044f","\u041e\u043b\u044f","\u041b\u0435\u043d\u0430","\u0410\u043b\u0438\u043d\u0430","\u041b\u0435\u0439\u0441\u0430\u043d","\u0410\u043b\u0438\u043d\u0430","\u0413\u0443\u0437\u0435\u043b\u044c","\u0420\u0430\u044f","\u0410\u0434\u0430","\u041f\u043e\u043b\u0438\u043d\u0430","\u041c\u0438\u043b\u0430\u043d\u0430","\u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430","\u0412\u043b\u0430\u0434\u0430"],I=n(3),K=function(e){var t=e.question,n=e.answer_1,o=e.answer_2,c=e.answer_3,s=e.answer_4;return Object(I.jsx)(d.g,{top:t,children:Object(I.jsxs)(d.i,{children:[Object(I.jsx)("option",{value:"yes",children:n}),Object(I.jsx)("option",{value:"yes",children:o}),Object(I.jsx)("option",{value:"no",children:c}),s&&Object(I.jsx)("option",{value:"no",children:s})]})})},V=function(e){var t=e.id,n=(e.go,e.getRandomImg),o=(e.setIMGresult,e.setActivePanel),c=e.publishStories,s=e.getPlatform,r=e.gotToken,a=e.snackbar,i=A.map((function(e,t){return Object(I.jsx)(K,{question:e.question,answer_1:e.answer_1,answer_2:e.answer_2,answer_3:e.answer_3,answer_4:e.answer_4},e.id)}));return Object(I.jsxs)(d.j,{id:t,children:[Object(I.jsx)(d.f,{className:"web"===s?"imgPanelHomeWeb":"imgPanelHomeMobile",children:Object(I.jsxs)(d.h,{children:[i,Object(I.jsx)(d.g,{children:Object(I.jsx)(d.d,{onClick:function(){n(0,4),r&&c(),o("result-panel")},stretched:!0,style:{height:"60px",backgroundColor:"white",marginTop:"5px",borderRadius:"40px"},children:Object(I.jsx)("span",{style:{color:"black",fontSize:"20px"},children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})})})]})}),a]})},G=function(e){var t=e.id,n=(e.go,e.openAlert),o=e.setActivePanel,c=e.snackbar,s=e.getPlatform;return Object(I.jsxs)(d.j,{id:t,children:[Object(I.jsx)(d.k,{}),Object(I.jsxs)(d.f,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"150px"},children:["web"===s?Object(I.jsx)(d.f,{style:{fontWeight:"bold",fontSize:"25px",margin:"0px 10px 0px 10px"},children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e?"}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(d.f,{style:{fontWeight:"bold",fontSize:"25px",margin:"0px 10px 0px 10px"},children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430"}),Object(I.jsx)(d.f,{style:{fontWeight:"bold",fontSize:"25px",margin:"0px 10px 0px 10px"},children:"\u043d\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e?"})]}),Object(I.jsx)(d.d,{onClick:function(){return k(n,o)},style:{width:"200px",height:"80px",backgroundColor:"#165df5",marginTop:"50px",borderRadius:"45px"},children:Object(I.jsx)("span",{style:{color:"white",fontSize:"20px"},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]}),c]})},P=n(47),R=n.n(P),T=n(38),U=function(e){var t=e.id,n=e.go,c=e.IMGresult,s=(e.openBase,e.getPlatform),r=e.openAlert,i=e.snackbar,l=e.fetchedUser,p=Object(o.useState)(!1),b=Object(u.a)(p,2),h=b[0],f=b[1],j=Object(o.useState)(!1),x=Object(u.a)(j,2),g=x[0],m=x[1],w=Object(o.useState)(!1),O=Object(u.a)(w,2),A=O[0],K=O[1],V=Object(o.useState)(S[Object(T.a)(0,S.length-1)]),G=Object(u.a)(V,2),P=G[0],U=(G[1],Object(o.useState)(v[Object(T.a)(0,v.length-1)])),M=Object(u.a)(U,2),z=M[0],L=(M[1],Object(o.useState)(W[Object(T.a)(0,W.length-1)])),q=Object(u.a)(L,2),D=q[0],E=(q[1],Object(o.useState)(C[Object(T.a)(0,C.length-1)])),N=Object(u.a)(E,2),F=N[0];N[1];return Object(o.useEffect)((function(){setTimeout((function(){}),1e3)}),[]),Object(I.jsxs)(d.j,{id:t,children:[Object(I.jsx)(d.k,{separator:!1,left:Object(I.jsxs)(d.f,{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"},children:[Object(I.jsx)(d.f,{onClick:function(){return _("story",null,null,y[globalURLSharing.url])},style:{background:"linear-gradient(90deg, rgba(247,106,171,1) 0%, rgba(0,212,255,1) 100%)",borderRadius:"9px",marginLeft:"10px",fontSize:"14px",height:"28px",width:"170px",color:"white",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"}),Object(I.jsx)(d.f,{})]})}),Object(I.jsx)(d.f,{className:"web"===s?"ResultPanelWeb":"ResultPanelMobile",style:{paddingBottom:"20px"},children:Object(I.jsxs)(d.f,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[c,Object(I.jsxs)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"300px"},children:[Object(I.jsx)(d.f,{style:{color:"white",fontSize:"15px",fontWeight:"bold"},children:"\u041f\u0420\u0418\u0427\u0418\u041d\u0410 \u0421\u041c\u0415\u0420\u0422\u0418"}),Object(I.jsxs)(d.f,{children:[" ",Object(I.jsx)(d.d,{onClick:function(){return k(r,5184003,f)},style:{width:"60px",height:"20px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(I.jsx)("span",{style:{color:"black",fontSize:"13px",fontWeight:"bold"},children:"\u0423\u0437\u043d\u0430\u0442\u044c"})})]})]}),h&&Object(I.jsx)(R.a,{left:!0,duration:3e3,children:Object(I.jsx)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"300px",height:"60px",border:"solid white 1px",borderRadius:"15px",margin:"8px",color:"white",backgroundColor:"rgba(255, 255, 255, 0.3)"},children:P})}),Object(I.jsxs)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"300px"},children:[Object(I.jsx)(d.f,{style:{color:"white",fontSize:"15px",fontWeight:"bold"},children:"\u0418\u041c\u042f \u0421\u0423\u0416\u0415\u041d\u041e\u0413\u041e"}),Object(I.jsxs)(d.f,{children:[" ",Object(I.jsx)(d.d,{onClick:function(){return function(e,t,n){a.a.send("VKWebAppAllowMessagesFromGroup",{group_id:t}).then((function(e){n(!0)})).catch((function(t){e("\u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0433\u0440\u0443\u043f\u043f\u044b","red"),n(!1)}))}(r,201249621,m)},style:{width:"60px",height:"20px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(I.jsx)("span",{style:{color:"black",fontSize:"13px",fontWeight:"bold"},children:"\u0423\u0437\u043d\u0430\u0442\u044c"})})]})]}),g&&Object(I.jsx)(R.a,{right:!0,duration:3e3,children:Object(I.jsx)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"300px",height:"30px",border:"solid white 1px",borderRadius:"15px",margin:"8px",color:"white",backgroundColor:"rgba(255, 255, 255, 0.3)"},children:2===l.sex?D:z})}),Object(I.jsxs)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"300px"},children:[Object(I.jsx)(d.f,{style:{color:"white",fontSize:"15px",fontWeight:"bold"},children:"\u041c\u0415\u0421\u0422\u041e \u041f\u0415\u0420\u0412\u041e\u0413\u041e/\u0421\u041b\u0415\u0414\u0423\u042e\u0429\u0415\u0413\u041e \u0421\u0415\u041a\u0421\u0410"}),Object(I.jsxs)(d.f,{children:[" ",Object(I.jsx)(d.d,{onClick:function(){return _("story-task",r,null,y[globalURLSharing.url],K)},style:{width:"60px",height:"20px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(I.jsx)("span",{style:{color:"black",fontSize:"13px",fontWeight:"bold"},children:"\u0423\u0437\u043d\u0430\u0442\u044c"})})]})]}),A&&Object(I.jsx)(R.a,{left:!0,duration:3e3,children:Object(I.jsx)(d.f,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"300px",height:"30px",border:"solid white 1px",borderRadius:"15px",margin:"8px",color:"white",backgroundColor:"rgba(255, 255, 255, 0.3)"},children:F})}),Object(I.jsx)(d.f,{children:Object(I.jsx)(d.d,{onClick:n,"data-to":"home",style:{width:"300px",height:"40px",backgroundColor:"white",marginTop:"5px",borderRadius:"10px"},children:Object(I.jsx)("span",{style:{color:"black",fontSize:"15px",fontWeight:"bold"},children:"\u041f\u0440\u043e\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437"})})})]})}),i]})},M=n(105),z=n.n(M);window.globalURLSharing={url:0};var L=function(){var e=Object(o.useState)("home"),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)(null),r=Object(u.a)(s,2),i=r[0],b=r[1],f=Object(o.useState)(),k=Object(u.a)(f,2),A=k[0],S=k[1],v=Object(o.useState)(null),C=Object(u.a)(v,2),W=C[0],K=C[1],P=Object(o.useState)(null),R=Object(u.a)(P,2),M=R[0],L=(R[1],Object(o.useState)(null)),q=Object(u.a)(L,2),D=q[0],E=q[1],N=Object(o.useState)(null),F=Object(u.a)(N,2),B=F[0],H=F[1],J=Object(o.useState)(""),Q=Object(u.a)(J,2),X=Q[0],Y=Q[1],Z=Object(o.useState)(""),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ne=Object(o.useState)(!1),oe=Object(u.a)(ne,2),ce=oe[0],se=oe[1];function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green";B||H(Object(I.jsx)(d.l,{duration:"12000",layout:"horizontal",onClose:function(){return H(null)},before:Object(I.jsx)(d.c,{size:24,style:{backgroundColor:t},children:"green"===t?Object(I.jsx)(h.a,{fill:"#fff",width:14,height:14}):Object(I.jsx)(j.a,{fill:"#fff",width:14,height:14})}),children:e}))}Object(o.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,b(t),S(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,n=t.type,o=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=o.scheme?o.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}(),setTimeout((function(){}),1e3)}),[]),Object(o.useEffect)((function(){console.log("fetchedUser",i)}),[i]),Object(o.useEffect)((function(){var e;!function(e,t){a.a.send("VKWebAppGetAuthToken",{app_id:O,scope:"friends,wall,photos"}).then((function(n){console.log("VKWebAppGetAuthToken res:",n),e(n.access_token),t(!0)})).catch((function(n){a.a.send("VKWebAppGetAuthToken",{app_id:O,scope:"friends,wall,photos"}).then((function(n){console.log("VKWebAppGetAuthToken response:",n),e(n.access_token),t(!0)})).catch((function(e){console.log("VKWebAppGetAuthToken error:",e)})),console.log("VKWebAppGetAuthToken err:",n)}))}(Y,se),e=203135022,a.a.send("VKWebAppAllowMessagesFromGroup",{group_id:e}).then((function(e){})).catch((function(t){a.a.send("VKWebAppAllowMessagesFromGroup",{group_id:e}).then((function(e){})).catch((function(e){}))}))}),[]),Object(o.useEffect)((function(){a.a.send("VKWebAppGetClientVersion").then((function(e){te(e.platform),console.log("result.platform",ee)})).catch((function(e){return console.log(e)}))}),[]);var ae=function(e){c(e.currentTarget.dataset.to)};return Object(I.jsx)(d.e,{isWebView:!0,children:Object(I.jsxs)(d.m,{activePanel:n,popout:A,modal:D,children:[Object(I.jsx)(V,{id:"home",fetchedUser:i,go:ae,setIMGresult:K,getRandomImg:function(e,t){e=Math.ceil(e),t=Math.floor(t);var n=Math.floor(Math.random()*(t-e))+e;globalURLSharing.url=n,K(Object(I.jsx)(d.f,{className:"icon".concat(n)}))},setActivePanel:c,publishStories:function(){var e;a.a.send("VKWebAppCallAPIMethod",{method:"photos.createAlbum",params:{title:"ILLUMINATE TEST",description:"\u0423\u0437\u043d\u0430\u0439 \u0434\u0430\u0442\u0443 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0441\u0435\u043a\u0441\u0430, \u0441\u0432\u0430\u0434\u044c\u0431\u044b \u0438 \u0441\u043c\u0435\u0440\u0442\u0438, \u043f\u0440\u043e\u0439\u0434\u044f \u0442\u0435\u0441\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \ud83d\ude05\n          \u0417\u043f\u0443\u0441\u043a\u0430\u0439 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \ud83d\udc47\n          https://vk.com/app".concat(O),v:5.21,access_token:X}}).then((function(t){console.log("photos.createAlbum r.response.id:",t.response.id),e=t.response.id,a.a.send("VKWebAppCallAPIMethod",{method:"photos.getUploadServer",params:{album_id:e,v:5.21,access_token:X}}).then(function(){var t=Object(p.a)(l.a.mark((function t(n){var o,c,s,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("photos.getUploadServer res:",n),o=[x,g,m,w][Object(T.a)(0,3)],t.next=4,fetch(o);case 4:return t.next=6,t.sent.blob();case 6:return c=t.sent,(s=new FormData).append("file",c,"image.png"),"https://proxy.ods-studio.ru",t.next=12,z()({method:"post",url:"".concat("https://proxy.ods-studio.ru","/").concat(n.response.upload_url),data:s,headers:{"Content-Type":"multipart/form-data"}});case 12:r=t.sent,i=r.data,a.a.send("VKWebAppCallAPIMethod",{method:"photos.save",params:{album_id:e,v:5.21,access_token:X,hash:i.hash,photos_list:i.photos_list,server:i.server,caption:"\u0423\u0437\u043d\u0430\u0439 \u0434\u0430\u0442\u0443 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0441\u0435\u043a\u0441\u0430, \u0441\u0432\u0430\u0434\u044c\u0431\u044b \u0438 \u0441\u043c\u0435\u0440\u0442\u0438, \u043f\u0440\u043e\u0439\u0434\u044f \u0442\u0435\u0441\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \ud83d\ude05\n                  \u0417\u043f\u0443\u0441\u043a\u0430\u0439 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \ud83d\udc47\n                  https://vk.com/app".concat(O)}}).then((function(e){console.log("photos.save response:",e)})).catch((function(e){console.log("photos.save error:",e)}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("photos.getUploadServer err:",e)}))})).catch((function(e){console.log("photos.createAlbum err:",e)}))},getPlatform:ee,gotToken:ce,openAlert:re,snackbar:B}),Object(I.jsx)(G,{id:"default-panel",fetchedUser:i,go:ae,openAlert:re,setActivePanel:c,snackbar:B,getPlatform:ee}),Object(I.jsx)(U,{id:"result-panel",fetchedUser:i,go:ae,IMGresult:W,urlSharing:M,openBase:function(){E(null),S(Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(d.a,{onClose:function(){return S(null)},children:[Object(I.jsx)(d.b,{autoclose:!0,onClick:function(){return _("share-link",null,null,APP_IMG_SHARING_WALL[globalURLSharing.url])},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439"}),Object(I.jsx)(d.b,{autoclose:!0,onClick:function(){return _("copy-link",re,null,APP_IMG_SHARING_WALL[globalURLSharing.url])},children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"}),Object(I.jsx)(d.b,{autoclose:!0,onClick:function(){return _("story",null,null,y[globalURLSharing.url])},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"}),Object(I.jsx)(d.b,{autoclose:!0,onClick:function(e){return _("share-wall",null,e,APP_IMG_SHARING_WALL[globalURLSharing.url])},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435"})]})}))},getPlatform:ee,openAlert:re,snackbar:B})]})})};a.a.send("VKWebAppInit"),s.a.render(Object(I.jsx)(L,{}),document.getElementById("root"))}},[[305,1,2]]]);
//# sourceMappingURL=main.118bfd38.chunk.js.map