(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],{58:function(e,t,s){},59:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s.n(a),o=s(19),i=s.n(o),r=(s(58),s(44)),l=s(45),u=s(51),d=s(50),j=(s(59),s(60),s(6)),h=s(88),m=s(87),b=s(90),p=s(89),O=s(48),g=s(86),f=s.p+"static/media/logo.6ce24c58.svg",x=s(7),_=s.n(x),v=s(34);var y=function(e){var t=e.match.params.id,s=c.a.useState([]),o=Object(j.a)(s,2),i=o[0],r=o[1],l=c.a.useState([]),u=Object(j.a)(l,2),d=u[0],h=u[1],m=c.a.useState(""),b=Object(j.a)(m,2),p=b[0],O=b[1];function g(e){var t=new Date(1e3*e),s=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+n+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}return Object(a.useEffect)((function(){var e="https://api.stackexchange.com/2.2/questions/".concat(t,"?order=desc&sort=activity&site=stackoverflow&filter=!3zl2.BHmiROa9.Phi&key=eZoZLL*)llKhER8pMMusAw((");_.a.get(e).then((function(e){var t=e.data;console.log(t),r([].concat(Object(v.a)(i),Object(v.a)(t.items)))}),(function(e){O("download api error"),console.log(e)})),_.a.get("https://api.stackexchange.com/2.2/questions/".concat(t,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!b6Aubk6cwNOqa9&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){h(e.data.items)}),(function(e){O("download api error")}))}),[window.location.href]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"question-main",children:p.length?Object(n.jsx)("h1",{children:p}):i.map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title}}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:["created: ",g(e.creation_date)," "]}),Object(n.jsxs)("span",{children:["Veiwed: ",e.view_count]})]})]}),Object(n.jsx)("div",{className:"question_post",dangerouslySetInnerHTML:{__html:e.body}}),Object(n.jsx)("div",{className:"question-comments",children:e.comments?e.comments.map((function(e,t){return Object(n.jsxs)("div",{className:"question-comments-item",children:[Object(n.jsx)("p",{className:"question-comments-body",dangerouslySetInnerHTML:{__html:e.body}}),Object(n.jsx)("p",{className:"question-comments-author",dangerouslySetInnerHTML:{__html:e.owner.display_name},href:"#/profile/"+e.owner.user_id})]},t)})):Object(n.jsx)(n.Fragment,{})}),Object(n.jsx)("div",{children:e.tags.map((function(e,t){return Object(n.jsx)("span",{className:"question-tags",href:"#/tagged/"+e,children:e},t)}))}),Object(n.jsxs)("div",{className:"profile-info-question",children:[Object(n.jsxs)("p",{children:["asked ",g(e.creation_date)]}),Object(n.jsxs)("div",{className:"profile-info-question-2",children:[Object(n.jsx)("img",{className:"profile-image",src:e.owner.profile_image,alt:"prolife image"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"#/profile/".concat(e.owner.user_id),dangerouslySetInnerHTML:{__html:e.owner.display_name}}),Object(n.jsx)("p",{children:e.owner.reputation})]})]})]})]})}))}),Object(n.jsx)("div",{className:"answer-main",children:d.map((function(e,t){return Object(n.jsxs)("div",{className:"answer",children:[Object(n.jsx)("div",{className:"answer-score",children:Object(n.jsx)("p",{children:e.score})}),Object(n.jsxs)("div",{className:"answer-body",children:[Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:e.body}}),Object(n.jsx)("div",{className:"answer-comments",children:e.comments?e.comments.map((function(e,t){return Object(n.jsxs)("div",{className:"answer-comments-item",children:[Object(n.jsx)("p",{className:"answer-comments-body",dangerouslySetInnerHTML:{__html:e.body}}),Object(n.jsx)("p",{className:"answer-comments-author",dangerouslySetInnerHTML:{__html:e.owner.display_name},href:"#/profile/"+e.owner.user_id})]},t)})):Object(n.jsx)(n.Fragment,{})}),Object(n.jsxs)("div",{className:"profile-info-question",children:[Object(n.jsx)("p",{children:g(e.creation_date)}),Object(n.jsxs)("div",{className:"profile-info-question-2",children:[Object(n.jsx)("img",{className:"profile-image",src:e.owner.profile_image,alt:"profile_image"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"#/profile/"+e.owner.user_id,dangerouslySetInnerHTML:{__html:e.owner.display_name}}),Object(n.jsx)("p",{children:e.owner.reputation})]})]})]})]})]},t)}))})]})};function w(e){var t=e.question,s=Object(a.useState)(!1),c=Object(j.a)(s,2),o=c[0],i=c[1];return Object(n.jsxs)("div",{className:"question-content "+(o?"active":""),onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(n.jsxs)("div",{onClick:function(){window.location.href="/question/".concat(t.question_id)},className:"votes",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[t.score," "]}),Object(n.jsx)("span",{children:"votes"})]}),Object(n.jsxs)("div",{className:t.answer_count>0?t.is_answered?"answered":"some_answer":"no_answer",children:[Object(n.jsxs)("span",{children:[t.answer_count," "]}),Object(n.jsx)("span",{children:"answers"})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[t.view_count," "]}),Object(n.jsx)("span",{children:"views"})]})]}),Object(n.jsxs)("div",{className:"question-info",children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:"#/question/".concat(t.question_id),dangerouslySetInnerHTML:{__html:t.title}})}),Object(n.jsxs)("div",{className:"div-tag-author",children:[Object(n.jsx)("div",{className:"home-tags",children:t.tags.map((function(e,t){return Object(n.jsx)("a",{className:"home-tags-tag",href:"#/tagged/"+e,children:e},t)}))}),Object(n.jsxs)("div",{className:"question-author-info",children:[Object(n.jsxs)("a",{children:["changed\xa0",Object(n.jsxs)("span",{children:[function(e){var t=new Date(1e3*e),s=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+n+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(t.last_activity_date),"\xa0"]})]}),Object(n.jsx)("a",{href:"#/profile/".concat(t.owner.user_id),className:"author",dangerouslySetInnerHTML:{__html:t.owner.display_name}}),Object(n.jsxs)("span",{children:[" reputation: ",t.owner.reputation>=1e4?(t.owner.reputation/1e3).toFixed(1)+"k":t.owner.reputation]})]})]})]}),o&&Object(n.jsx)("div",{className:"absolute-question",dangerouslySetInnerHTML:{__html:t.body}})]})}var k=function(){var e=c.a.useState([]),t=Object(j.a)(e,2),s=t[0],o=t[1];return Object(a.useEffect)((function(){_.a.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDxJY5&key=eZoZLL*)llKhER8pMMusAw((").then((function(e){o(e.data.items)}))}),[window.location.href]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Main page"}),s.map((function(e,t){return Object(n.jsx)(w,{question:e},t)}))]})},M=s(8);function N(e){var t=e.user;console.log(t);var s=Object(a.useState)([]),c=Object(j.a)(s,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){var e="https://api.stackexchange.com/2.2/users/".concat(t.user_id,"/top-tags?pagesize=6&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((");_.a.get(e).then((function(e){i(e.data.items)}))}),[window.location.href]),Object(n.jsxs)("div",{className:"user-body",children:[Object(n.jsxs)("div",{className:"user-info",children:[Object(n.jsx)("img",{className:"user-info-img",src:t.profile_image,alt:"profile_image"}),Object(n.jsxs)("div",{className:"user-info-2",children:[Object(n.jsx)("a",{href:"#/profile/"+t.user_id,dangerouslySetInnerHTML:{__html:t.display_name}}),Object(n.jsx)("p",{children:t.location}),Object(n.jsxs)("p",{children:["Reputation: ",t.reputation>1e4?(t.reputation/1e3).toFixed(2)+"k":t.reputation]})]})]}),Object(n.jsx)("div",{className:"user-tags",children:o.map((function(e,t){return Object(n.jsxs)("p",{children:[e.tag_name,"\xa0",e.answer_score+e.question_score]},t)}))})]})}function L(){var e=c.a.useState([]),t=Object(j.a)(e,2),s=t[0],o=t[1];return Object(a.useEffect)((function(){_.a.get("https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow&filter=!9_bDDp)d5&key=eZoZLL*)llKhER8pMMusAw((").then((function(e){o(e.data.items)}))}),[window.location.href]),Object(n.jsx)("div",{className:"user-main",children:s.map((function(e,t){return Object(n.jsx)(N,{user:e},t)}))})}function q(e){var t=Object(a.useState)([]),s=Object(j.a)(t,2),c=s[0],o=s[1],i=e.associate.user_id;return Object(a.useEffect)((function(){_.a.get("https://api.stackexchange.com/2.2/users/".concat(i,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){o(e.data.items)}))}),[window.location.href]),console.log(c),Object(n.jsx)(n.Fragment,{children:c.map((function(e,t){return Object(n.jsxs)("div",{className:"associated-user",onClick:function(){return window.location.href="#/profile/".concat(e.user_id)},children:[Object(n.jsx)("img",{src:e.profile_image}),Object(n.jsx)("p",{href:"#/profile/"+e.user_id,dangerouslySetInnerHTML:{__html:e.display_name}})]},t)}))})}function S(e){var t=e.post,s=e.postType;return Object(n.jsx)("div",{children:t.map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{children:["qa"===s?e.post_type:"questions"===s?"Question":"answers"===s?"Answer":"favorite",": ",e.score]},t),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.title}})]})}))})}function Z(e){var t=e.match.params.user_id,s=c.a.useState([]),o=Object(j.a)(s,2),i=o[0],r=o[1],l=c.a.useState([]),u=Object(j.a)(l,2),d=(u[0],u[1],c.a.useState([])),h=Object(j.a)(d,2),m=h[0],b=h[1],p=c.a.useState([]),O=Object(j.a)(p,2),f=O[0],x=O[1],v=c.a.useState([]),y=Object(j.a)(v,2),w=y[0],k=y[1],M=c.a.useState([]),N=Object(j.a)(M,2),L=N[0],Z=N[1],E=c.a.useState([]),A=Object(j.a)(E,2),T=A[0],D=A[1],F=c.a.useState([]),R=Object(j.a)(F,2),K=R[0],H=R[1],I=Object(a.useState)([]),J=Object(j.a)(I,2),C=J[0],Y=J[1],P=Object(a.useState)("qa"),z=Object(j.a)(P,2),U=z[0],B=z[1];function Q(e){var t=new Date(1e3*e),s=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+n+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}function G(e){"qa"===e?_.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/posts?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDt835&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){Y(t.data.items),B(e)})):"questions"===e?_.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/questions?order=desc&sort=activity&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){Y(t.data.items),B(e)})):"answers"===e?_.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!9_bDE(DzN&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){Y(t.data.items),B(e)})):"favorites"===e&&_.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/favorites?order=desc&sort=activity&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){Y(t.data.items),B(e)}))}return Object(a.useEffect)((function(){var e="https://api.stackexchange.com/2.2/users/".concat(t,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),s="https://api.stackexchange.com/2.2/users/".concat(t,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!9_bDE(fI5&key=eZoZLL*)llKhER8pMMusAw(("),n="https://api.stackexchange.com/2.2/users/".concat(t,"/questions?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDxJY5&key=eZoZLL*)llKhER8pMMusAw(("),a="https://api.stackexchange.com/2.2/users/".concat(t,"/privileges?site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),c="https://api.stackexchange.com/2.2/users/".concat(t,"/tags?order=desc&sort=popular&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),o="https://api.stackexchange.com/2.2/users/".concat(t,"/associated?key=eZoZLL*)llKhER8pMMusAw(("),l="https://api.stackexchange.com/2.2/users/".concat(t,"/timeline?site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((");_.a.get(e).then((function(e){r(e.data.items),console.log(i),console.log(e.data)})),_.a.get(s).then((function(e){b(e.data.items),console.log(m)})),_.a.get(n).then((function(e){x(e.data.items),console.log(f)})),_.a.get(a).then((function(e){k(e.data.items),console.log(w)})),_.a.get(c).then((function(e){Z(e.data.items),console.log(L)})),_.a.get(o).then((function(e){D(e.data.items),console.log(T)})),_.a.get(l).then((function(e){H(e.data.items),console.log(K)})),G("qa")}),[window.location.href]),Object(n.jsx)("div",{className:"profile-main",children:i.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:i[0].display_name}),Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:i[0].profile_image,alt:"profile image"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:Q(i[0].creation_date)}),Object(n.jsxs)("div",{className:"badge",children:[Object(n.jsxs)("span",{className:"bronze",children:["\u2022 ",i[0].badge_counts.bronze]}),Object(n.jsxs)("span",{className:"silver",children:["\u2022 ",i[0].badge_counts.silver]}),Object(n.jsxs)("span",{className:"gold",children:["\u2022 ",i[0].badge_counts.gold]})]})]})]}),Object(n.jsxs)("div",{className:"allTags",children:[Object(n.jsx)("h3",{children:"Tags"}),L.map((function(e,t){return Object(n.jsxs)("span",{className:"tags "+(e.count>50?"tag-50":e.count>40?"tag-40":e.count>30?"tag-30":e.count>20?"tag-20":e.count>10?"tag-10":"tag"),children:[e.name," ",e.count]},t)}))]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Posts"}),Object(n.jsx)(g.a,{className:"qa"===U?"active":"",onClick:function(){return G("qa")},children:"Q&A"}),Object(n.jsx)(g.a,{className:"questions"===U?"active":"",onClick:function(){return G("questions")},children:"Questions"}),Object(n.jsx)(g.a,{className:"answers"===U?"active":"",onClick:function(){return G("answers")},children:"Answers"}),Object(n.jsx)(g.a,{className:"favorites"===U?"active":"",onClick:function(){return G("favorites")},children:"Favorites"}),Object(n.jsx)(S,{post:C,postType:U})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Privileges"}),w.map((function(e,t){return Object(n.jsx)("span",{className:"privileges",children:e.short_description},t)}))]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Timeline"}),K.map((function(e,t){return Object(n.jsxs)("div",{className:"timeline",children:[Object(n.jsxs)("div",{className:"timeline-type",children:[Object(n.jsxs)("span",{children:["Post type: ",e.post_type]}),Object(n.jsxs)("span",{children:["Timeline type: ",e.timeline_type]})]}),Object(n.jsx)("div",{className:"timeline-title",children:Object(n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.title}})}),Object(n.jsx)("div",{children:Object(n.jsx)("span",{children:Q(e.creation_date)})})]},t)}))]}),Object(n.jsxs)("div",{className:"associated-users",children:[Object(n.jsx)("h3",{children:"Associated users"}),T.map((function(e,t){return Object(n.jsx)(q,{associate:e},t)}))]})]}):Object(n.jsx)("h1",{children:"Something going wrong..."})})}function E(e){var t=e.names.replace("#","%23"),s=e.tags,c=Object(a.useState)([]),o=Object(j.a)(c,2),i=o[0],r=o[1];return console.log(t),Object(a.useEffect)((function(){_.a.get("https://api.stackexchange.com/2.2/tags/".concat(t,"/wikis?site=stackoverflow&filter=!9_bDDrGXY&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){r(e.data.items)}))}),[t]),console.log(i),s.map((function(e,t){return Object(n.jsxs)("div",{className:"tag-body",href:"#/tagged/"+e.name,children:[Object(n.jsx)("p",{className:"tag-name",children:e.name}),Object(n.jsx)("p",{className:"tag-count",children:e.count}),i.length?i.map((function(t){if(t.tag_name==e.name)return Object(n.jsx)("p",{className:"tag-excerpt",children:t.excerpt})})):""]},t)}))}function A(){var e=Object(a.useState)([{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:2138097,name:"javascript"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:1739128,name:"java"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:1608602,name:"python"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:1453466,name:"c#"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:1383685,name:"php"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:1313949,name:"android"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:1041236,name:"html"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:1003416,name:"jquery"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:705055,name:"c++"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:696961,name:"css"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:646645,name:"ios"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:614172,name:"mysql"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:572425,name:"sql"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:379906,name:"r"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:364127,name:"node.js"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:360716,name:"asp.net"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:350564,name:"arrays"},{has_synonyms:!1,is_moderator_only:!1,is_required:!1,count:347201,name:"c"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:322683,name:"ruby-on-rails"},{has_synonyms:!0,is_moderator_only:!1,is_required:!1,count:307947,name:"json"}]),t=Object(j.a)(e,2),s=t[0],c=(t[1],"");return Object(n.jsxs)("div",{className:"tagwiki",children:[s.map((function(e,t){return c+="".concat(e.name,";"),Object(n.jsx)(n.Fragment,{})})),Object(n.jsx)(E,{tags:s,names:c.substring(0,c.length-1)})]})}function T(e){var t=e.search,s=Object(a.useState)([]),c=Object(j.a)(s,2);c[0],c[1];return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:t})})}function D(e){var t=e.tag,s=Object(a.useState)([]),c=Object(j.a)(s,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){_.a.get("https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=".concat(t,"&site=stackoverflow&filter=!9_bDDxJY5&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){i(e.data.items)}))})),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"tagged"}),o.map((function(e,t){return Object(n.jsx)(w,{question:e},t)}))]})}function F(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),s=t[0],c=t[1],o=Object(a.useState)([]),i=Object(j.a)(o,2),r=i[0],l=i[1],u=Object(a.useState)(),d=Object(j.a)(u,2),x=d[0],v=d[1],w=Object(a.useState)(""),N=Object(j.a)(w,2),q=(N[0],N[1],Object(a.useState)(!1)),S=Object(j.a)(q,2);S[0],S[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md",children:Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(h.a.Brand,{href:"#/",children:[Object(n.jsx)("img",{alt:"logo",src:f,width:"30",height:"30",className:"d-inline-block align-top"}),"USOF"]}),Object(n.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsxs)(b.a,{className:"mr-auto",children:[Object(n.jsx)(b.a.Link,{href:"#/",children:"Main"}),Object(n.jsx)(b.a.Link,{href:"#/users",children:"Users"}),Object(n.jsx)(b.a.Link,{href:"#/tags",children:"Tags"})]}),Object(n.jsxs)(p.a,{inline:!0,children:[" ",Object(n.jsx)(O.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(n.jsx)(g.a,{variant:"outline-success",children:"Search"})]}),s?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"my-info",children:r.map((function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{className:"my-image",src:e.profile_image,alt:"profile image"}),Object(n.jsx)("p",{className:"my-name",href:"#/profile/"+r[0].user_id,dangerouslySetInnerHTML:{__html:e.display_name}})]})}))}),Object(n.jsx)(g.a,{variant:"outline-info",className:"ml-3",onClick:function(){return e=x.accessToken,_.a.get("https://api.stackexchange.com/2.2/access-tokens/".concat(e,"/invalidate?key=eZoZLL*)llKhER8pMMusAw((")),void c(!1);var e},children:"Logout"})]}):Object(n.jsx)(g.a,{variant:"outline-info",className:"ml-3",onClick:function(){window.SE.authenticate({success:function(e){c(!0),v(e),console.log(e),_.a.get("https://api.stackexchange.com/2.2/users/".concat(e.networkUsers[0].user_id,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){l(e.data.items)})),console.log(r)},error:function(e){alert("An error occurred:\n"+e.errorName+"\n"+e.errorMessage)},networkUsers:!0})},children:"Login"})]})]})}),Object(n.jsxs)(M.c,{children:[Object(n.jsx)(M.a,{exact:!0,path:"/",component:k}),Object(n.jsx)(M.a,{path:"/search/:info",component:T}),Object(n.jsx)(M.a,{path:"/tagged/:tag",component:D}),Object(n.jsx)(M.a,{path:"/users",component:L}),Object(n.jsx)(M.a,{path:"/tags",component:A}),Object(n.jsx)(M.a,{path:"/question/:id",component:y}),Object(n.jsx)(M.a,{path:"/profile/:user_id",component:Z})]})]})}var R=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.SE.init({clientId:19338,key:"eZoZLL*)llKhER8pMMusAw((",channelUrl:"https://arkadiiap.github.io",complete:function(e){console.log(e)}})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(F,{})})}}]),s}(a.Component),K=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),c(e),o(e)}))},H=s(31);i.a.render(Object(n.jsx)(H.a,{basename:"/usof",children:Object(n.jsx)(R,{})}),document.getElementById("root")),K()}},[[84,1,2]]]);
//# sourceMappingURL=main.7c829e2c.chunk.js.map