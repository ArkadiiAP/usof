(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],{58:function(e,t,s){},59:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),a=s.n(n),i=s(19),r=s.n(i),o=(s(58),s(44)),l=s(45),j=s(51),d=s(50),u=(s(59),s(60),s(6)),h=s(88),m=s(87),b=s(90),p=s(89),O=s(48),g=s(86),f=s.p+"static/media/logo.6ce24c58.svg",x=s(7),v=s.n(x),w=s(34);var _=function(e){var t=e.match.params.id,s=a.a.useState([]),i=Object(u.a)(s,2),r=i[0],o=i[1],l=a.a.useState([]),j=Object(u.a)(l,2),d=j[0],h=j[1],m=a.a.useState(""),b=Object(u.a)(m,2),p=b[0],O=b[1];function g(e){var t=new Date(1e3*e),s=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+c+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}return Object(n.useEffect)((function(){var e="https://api.stackexchange.com/2.2/questions/".concat(t,"?order=desc&sort=activity&site=stackoverflow&filter=!3zl2.BHmiROa9.Phi&key=eZoZLL*)llKhER8pMMusAw((");v.a.get(e).then((function(e){var t=e.data;console.log(t),o([].concat(Object(w.a)(r),Object(w.a)(t.items)))}),(function(e){O("download api error"),console.log(e)})),v.a.get("https://api.stackexchange.com/2.2/questions/".concat(t,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!b6Aubk6cwNOqa9&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){h(e.data.items)}),(function(e){O("download api error")}))}),[window.location.href]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"question-main",children:p.length?Object(c.jsx)("h1",{children:p}):r.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title}}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:["created: ",g(e.creation_date)," "]}),Object(c.jsxs)("span",{children:["Veiwed: ",e.view_count]})]})]}),Object(c.jsx)("div",{className:"question_post",dangerouslySetInnerHTML:{__html:e.body}}),Object(c.jsx)("div",{className:"question-comments",children:e.comments?e.comments.map((function(e,t){return Object(c.jsxs)("div",{className:"question-comments-item",children:[Object(c.jsx)("p",{className:"question-comments-body",dangerouslySetInnerHTML:{__html:e.body}}),Object(c.jsx)("p",{className:"question-comments-author",dangerouslySetInnerHTML:{__html:e.owner.display_name},href:"#/profile/"+e.owner.user_id})]},t)})):Object(c.jsx)(c.Fragment,{})}),Object(c.jsx)("div",{children:e.tags.map((function(e,t){return Object(c.jsx)("span",{className:"question-tags",children:e},t)}))}),Object(c.jsxs)("div",{className:"profile-info-question",children:[Object(c.jsxs)("p",{children:["asked ",g(e.creation_date)]}),Object(c.jsxs)("div",{className:"profile-info-question-2",children:[Object(c.jsx)("img",{className:"profile-image",src:e.owner.profile_image,alt:"prolife image"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#/profile/".concat(e.owner.user_id),dangerouslySetInnerHTML:{__html:e.owner.display_name}}),Object(c.jsx)("p",{children:e.owner.reputation})]})]})]})]})}))}),Object(c.jsx)("div",{className:"answer-main",children:d.map((function(e,t){return Object(c.jsxs)("div",{className:"answer",children:[Object(c.jsx)("div",{className:"answer-score",children:Object(c.jsx)("p",{children:e.score})}),Object(c.jsxs)("div",{className:"answer-body",children:[Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:e.body}}),Object(c.jsx)("div",{className:"answer-comments",children:e.comments?e.comments.map((function(e,t){return Object(c.jsxs)("div",{className:"answer-comments-item",children:[Object(c.jsx)("p",{className:"answer-comments-body",dangerouslySetInnerHTML:{__html:e.body}}),Object(c.jsx)("p",{className:"answer-comments-author",dangerouslySetInnerHTML:{__html:e.owner.display_name},href:"#/profile/"+e.owner.user_id})]},t)})):Object(c.jsx)(c.Fragment,{})}),Object(c.jsxs)("div",{className:"profile-info-question",children:[Object(c.jsx)("p",{children:g(e.creation_date)}),Object(c.jsxs)("div",{className:"profile-info-question-2",children:[Object(c.jsx)("img",{className:"profile-image",src:e.owner.profile_image,alt:"profile_image"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#/profile/"+e.owner.user_id,dangerouslySetInnerHTML:{__html:e.owner.display_name}}),Object(c.jsx)("p",{children:e.owner.reputation})]})]})]})]})]},t)}))})]})};function k(e){var t=e.question,s=Object(n.useState)(!1),a=Object(u.a)(s,2),i=a[0],r=a[1];return Object(c.jsxs)("div",{className:"question-content "+(i?"active":""),onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:[Object(c.jsxs)("div",{onClick:function(){window.location.href="/question/".concat(t.question_id)},className:"votes",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[t.score," "]}),Object(c.jsx)("span",{children:"votes"})]}),Object(c.jsxs)("div",{className:t.answer_count>0?t.is_answered?"answered":"some_answer":"no_answer",children:[Object(c.jsxs)("span",{children:[t.answer_count," "]}),Object(c.jsx)("span",{children:"answers"})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[t.view_count," "]}),Object(c.jsx)("span",{children:"views"})]})]}),Object(c.jsxs)("div",{className:"question-info",children:[Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"#/question/".concat(t.question_id),dangerouslySetInnerHTML:{__html:t.title}})}),Object(c.jsxs)("div",{className:"div-tag-author",children:[Object(c.jsx)("div",{className:"home-tags",children:t.tags.map((function(e,t){return Object(c.jsx)("a",{className:"home-tags-tag",children:e},t)}))}),Object(c.jsxs)("div",{className:"question-author-info",children:[Object(c.jsxs)("a",{children:["changed\xa0",Object(c.jsxs)("span",{children:[function(e){var t=new Date(1e3*e),s=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+c+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(t.last_activity_date),"\xa0"]})]}),Object(c.jsx)("a",{href:"#/profile/".concat(t.owner.user_id),className:"author",dangerouslySetInnerHTML:{__html:t.owner.display_name}}),Object(c.jsxs)("span",{children:[" reputation: ",t.owner.reputation>=1e4?(t.owner.reputation/1e3).toFixed(1)+"k":t.owner.reputation]})]})]})]}),i&&Object(c.jsx)("div",{className:"absolute-question",dangerouslySetInnerHTML:{__html:t.body}})]})}var y=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),s=t[0],i=t[1];return Object(n.useEffect)((function(){v.a.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDxJY5&key=eZoZLL*)llKhER8pMMusAw((").then((function(e){i(e.data.items)}))}),[window.location.href]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Main page"}),s.map((function(e,t){return Object(c.jsx)(k,{question:e},t)}))]})},M=s(8);function N(e){var t=e.user;console.log(t);var s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){var e="https://api.stackexchange.com/2.2/users/".concat(t.user_id,"/top-tags?pagesize=6&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((");v.a.get(e).then((function(e){r(e.data.items)}))}),[window.location.href]),Object(c.jsxs)("div",{className:"user-body",children:[Object(c.jsxs)("div",{className:"user-info",children:[Object(c.jsx)("img",{className:"user-info-img",src:t.profile_image,alt:"profile_image"}),Object(c.jsxs)("div",{className:"user-info-2",children:[Object(c.jsx)("a",{href:"#/profile/"+t.user_id,dangerouslySetInnerHTML:{__html:t.display_name}}),Object(c.jsx)("p",{children:t.location}),Object(c.jsxs)("p",{children:["Reputation: ",t.reputation>1e4?(t.reputation/1e3).toFixed(2)+"k":t.reputation]})]})]}),Object(c.jsx)("div",{className:"user-tags",children:i.map((function(e,t){return Object(c.jsxs)("p",{children:[e.tag_name,"\xa0",e.answer_score+e.question_score]},t)}))})]})}function L(){var e=a.a.useState([]),t=Object(u.a)(e,2),s=t[0],i=t[1];return Object(n.useEffect)((function(){v.a.get("https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow&filter=!9_bDDp)d5&key=eZoZLL*)llKhER8pMMusAw((").then((function(e){i(e.data.items)}))}),[window.location.href]),Object(c.jsx)("div",{className:"user-main",children:s.map((function(e,t){return Object(c.jsx)(N,{user:e},t)}))})}function S(e){var t=Object(n.useState)([]),s=Object(u.a)(t,2),a=s[0],i=s[1],r=e.associate.user_id;return Object(n.useEffect)((function(){v.a.get("https://api.stackexchange.com/2.2/users/".concat(r,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){i(e.data.items)}))}),[window.location.href]),console.log(a),Object(c.jsx)(c.Fragment,{children:a.map((function(e,t){return Object(c.jsxs)("div",{className:"associated-user",onClick:function(){return window.location.href="#/profile/".concat(e.user_id)},children:[Object(c.jsx)("img",{src:e.profile_image}),Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:e.display_name}})]},t)}))})}function Z(e){var t=e.post,s=e.postType;return Object(c.jsx)("div",{children:t.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:["qa"===s?e.post_type:"questions"===s?"Question":"answers"===s?"Answer":e.post_type,": ",e.score]},t),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.title}})]})}))})}function q(e){var t=e.match.params.user_id,s=a.a.useState([]),i=Object(u.a)(s,2),r=i[0],o=i[1],l=a.a.useState([]),j=Object(u.a)(l,2),d=(j[0],j[1],a.a.useState([])),h=Object(u.a)(d,2),m=h[0],b=h[1],p=a.a.useState([]),O=Object(u.a)(p,2),f=O[0],x=O[1],w=a.a.useState([]),_=Object(u.a)(w,2),k=_[0],y=_[1],M=a.a.useState([]),N=Object(u.a)(M,2),L=N[0],q=N[1],A=a.a.useState([]),E=Object(u.a)(A,2),T=E[0],D=E[1],F=a.a.useState([]),R=Object(u.a)(F,2),K=R[0],H=R[1],I=Object(n.useState)([]),C=Object(u.a)(I,2),J=C[0],P=C[1],Y=Object(n.useState)("qa"),z=Object(u.a)(Y,2),U=z[0],B=z[1];function Q(e){var t=new Date(1e3*e),s=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+c+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}function G(e){"qa"===e?v.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/posts?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDt835&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){P(t.data.items),B(e)})):"questions"===e?v.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/questions?order=desc&sort=activity&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){P(t.data.items),B(e)})):"answers"===e?v.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!9_bDE(DzN&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){P(t.data.items),B(e)})):"favorites"===e&&v.a.get("https://api.stackexchange.com/2.2/users/".concat(t,"/favorites?order=desc&sort=activity&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(t){P(t.data.items),B(e)}))}return Object(n.useEffect)((function(){var e="https://api.stackexchange.com/2.2/users/".concat(t,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),s="https://api.stackexchange.com/2.2/users/".concat(t,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!9_bDE(fI5&key=eZoZLL*)llKhER8pMMusAw(("),c="https://api.stackexchange.com/2.2/users/".concat(t,"/questions?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDxJY5&key=eZoZLL*)llKhER8pMMusAw(("),n="https://api.stackexchange.com/2.2/users/".concat(t,"/privileges?site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),a="https://api.stackexchange.com/2.2/users/".concat(t,"/tags?order=desc&sort=popular&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),i="https://api.stackexchange.com/2.2/users/".concat(t,"/associated?key=eZoZLL*)llKhER8pMMusAw(("),l="https://api.stackexchange.com/2.2/users/".concat(t,"/timeline?site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((");v.a.get(e).then((function(e){o(e.data.items),console.log(r),console.log(e.data)})),v.a.get(s).then((function(e){b(e.data.items),console.log(m)})),v.a.get(c).then((function(e){x(e.data.items),console.log(f)})),v.a.get(n).then((function(e){y(e.data.items),console.log(k)})),v.a.get(a).then((function(e){q(e.data.items),console.log(L)})),v.a.get(i).then((function(e){D(e.data.items),console.log(T)})),v.a.get(l).then((function(e){H(e.data.items),console.log(K)})),G("qa")}),[window.location.href]),Object(c.jsx)("div",{className:"profile-main",children:r.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:r[0].display_name}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:r[0].profile_image,alt:"profile image"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:Q(r[0].creation_date)}),Object(c.jsxs)("div",{className:"badge",children:[Object(c.jsxs)("span",{className:"bronze",children:["\u2022 ",r[0].badge_counts.bronze]}),Object(c.jsxs)("span",{className:"silver",children:["\u2022 ",r[0].badge_counts.silver]}),Object(c.jsxs)("span",{className:"gold",children:["\u2022 ",r[0].badge_counts.gold]})]})]})]}),Object(c.jsxs)("div",{className:"allTags",children:[Object(c.jsx)("h3",{children:"Tags"}),L.map((function(e,t){return Object(c.jsxs)("span",{className:"tags "+(e.count>50?"tag-50":e.count>40?"tag-40":e.count>30?"tag-30":e.count>20?"tag-20":e.count>10?"tag-10":"tag"),children:[e.name," ",e.count]},t)}))]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Posts"}),Object(c.jsx)(g.a,{className:"qa"===U?"active":"",onClick:function(){return G("qa")},children:"Q&A"}),Object(c.jsx)(g.a,{className:"questions"===U?"active":"",onClick:function(){return G("questions")},children:"Questions"}),Object(c.jsx)(g.a,{className:"answers"===U?"active":"",onClick:function(){return G("answers")},children:"Answers"}),Object(c.jsx)(g.a,{className:"favorites"===U?"active":"",onClick:function(){return G("favorites")},children:"Favorites"}),Object(c.jsx)(Z,{post:J,postType:U})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Privileges"}),k.map((function(e,t){return Object(c.jsx)("span",{className:"privileges",children:e.short_description},t)}))]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Timeline"}),K.map((function(e,t){return Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsxs)("div",{className:"timeline-type",children:[Object(c.jsxs)("span",{children:["Post type: ",e.post_type]}),Object(c.jsxs)("span",{children:["Timeline type: ",e.timeline_type]})]}),Object(c.jsx)("div",{className:"timeline-title",children:Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:e.title}})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{children:Q(e.creation_date)})})]},t)}))]}),Object(c.jsxs)("div",{className:"associated-users",children:[Object(c.jsx)("h3",{children:"Associated users"}),T.map((function(e,t){return Object(c.jsx)(S,{associate:e},t)}))]})]}):Object(c.jsx)("h1",{children:"Something going wrong..."})})}function A(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)([]),r=Object(u.a)(i,2),o=r[0],l=r[1],j="";return Object(n.useEffect)((function(){v.a.get("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((").then((function(e){a(e.data.items)})),v.a.get("https://api.stackexchange.com/2.2/tags/".concat(j.substring(0,j.length-1),"/wikis?site=stackoverflow&filter=!9_bDDrGXY&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){l(e.data.items)}))}),[window.location.href]),Object(c.jsx)("div",{children:s.map((function(e,t){return j+="".concat(e.name,";"),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"tag-name",children:e.name}),Object(c.jsx)("p",{className:"tag-count",children:e.count}),Object(c.jsx)("p",{className:"tag-description",children:o.length?o[t].excerpt:""})]},t)}))})}function E(e){var t=e.search,s=Object(n.useState)([]),a=Object(u.a)(s,2);a[0],a[1];return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:t})})}function T(e){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"tagged"})})}function D(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)([]),r=Object(u.a)(i,2),o=r[0],l=r[1],j=Object(n.useState)(),d=Object(u.a)(j,2),x=d[0],w=d[1],k=Object(n.useState)(""),N=Object(u.a)(k,2),S=(N[0],N[1],Object(n.useState)(!1)),Z=Object(u.a)(S,2);Z[0],Z[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,{bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md",children:Object(c.jsxs)(m.a,{children:[Object(c.jsxs)(h.a.Brand,{href:"#/",children:[Object(c.jsx)("img",{alt:"logo",src:f,width:"30",height:"30",className:"d-inline-block align-top"}),"USOF"]}),Object(c.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(b.a,{className:"mr-auto",children:[Object(c.jsx)(b.a.Link,{href:"#/",children:"Main"}),Object(c.jsx)(b.a.Link,{href:"#/users",children:"Users"}),Object(c.jsx)(b.a.Link,{href:"#/tags",children:"Tags"})]}),Object(c.jsxs)(p.a,{inline:!0,children:[" ",Object(c.jsx)(O.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(c.jsx)(g.a,{variant:"outline-success",children:"Search"})]}),s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"my-info",children:o.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{className:"my-image",src:e.profile_image,alt:"profile image"}),Object(c.jsx)("p",{className:"my-name",href:"#/profile/"+o[0].user_id,dangerouslySetInnerHTML:{__html:e.display_name}})]})}))}),Object(c.jsx)(g.a,{variant:"outline-info",className:"ml-3",onClick:function(){return e=x.accessToken,v.a.get("https://api.stackexchange.com/2.2/access-tokens/".concat(e,"/invalidate?key=eZoZLL*)llKhER8pMMusAw((")),void a(!1);var e},children:"Logout"})]}):Object(c.jsx)(g.a,{variant:"outline-info",className:"ml-3",onClick:function(){window.SE.authenticate({success:function(e){a(!0),w(e),console.log(e),v.a.get("https://api.stackexchange.com/2.2/users/".concat(e.networkUsers[0].user_id,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){l(e.data.items)})),console.log(o)},error:function(e){alert("An error occurred:\n"+e.errorName+"\n"+e.errorMessage)},networkUsers:!0})},children:"Login"})]})]})}),Object(c.jsxs)(M.c,{children:[Object(c.jsx)(M.a,{exact:!0,path:"/",component:y}),Object(c.jsx)(M.a,{path:"/search/:info",component:E}),Object(c.jsx)(M.a,{path:"/tagged/:tag",component:T}),Object(c.jsx)(M.a,{path:"/users",component:L}),Object(c.jsx)(M.a,{path:"/tags",component:A}),Object(c.jsx)(M.a,{path:"/question/:id",component:_}),Object(c.jsx)(M.a,{path:"/profile/:user_id",component:q})]})]})}var F=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.SE.init({clientId:19338,key:"eZoZLL*)llKhER8pMMusAw((",channelUrl:"https://arkadiiap.github.io",complete:function(e){console.log(e)}})}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(D,{})})}}]),s}(n.Component),R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))},K=s(31);r.a.render(Object(c.jsx)(K.a,{basename:"/usof",children:Object(c.jsx)(F,{})}),document.getElementById("root")),R()}},[[84,1,2]]]);
//# sourceMappingURL=main.65202069.chunk.js.map