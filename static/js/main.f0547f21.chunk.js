(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],{58:function(e,t,s){},59:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),a=s.n(n),i=s(20),o=s.n(i),r=(s(58),s(23)),l=s(24),j=s(29),d=s(27),u=(s(59),s(60),s(6)),h=s(88),b=s(86),p=s(90),O=s(89),m=s(50),g=s(87),x=s.p+"static/media/logo.6ce24c58.svg",f=s(7),v=s.n(f),w=s(12);var k=function(e){var t=Object(c.jsx)(_,{}),s=e.match.params.id,i=a.a.useState([]),o=Object(u.a)(i,2),r=o[0],l=o[1],j=a.a.useState([]),d=Object(u.a)(j,2),h=d[0],b=(d[1],a.a.useState("")),p=Object(u.a)(b,2),O=p[0],m=p[1];function g(e){var t=new Date(1e3*e),s=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+c+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}return Object(n.useEffect)((function(){var e="https://api.stackexchange.com/2.2/questions/".concat(s,"?order=desc&sort=activity&site=stackoverflow&filter=!3zl2.BHmiROa9.Phi&key=eZoZLL*)llKhER8pMMusAw((");v.a.get(e).then((function(e){var t=e.data;console.log(t),l([].concat(Object(w.a)(r),Object(w.a)(t.items)))}),(function(e){m("download api error"),console.log(e)}))}),[window.location.href]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"question-main",children:O.length?Object(c.jsx)("h1",{children:O}):r.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title}}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:["created: ",g(e.creation_date)," "]}),Object(c.jsxs)("span",{children:["Veiwed: ",e.view_count]})]})]}),Object(c.jsx)("div",{className:"question_post",dangerouslySetInnerHTML:{__html:e.body}}),Object(c.jsx)("div",{children:e.tags.map((function(e,t){return Object(c.jsx)("span",{className:"question-tags",children:e},t)}))}),Object(c.jsxs)("div",{className:"profile-info-question",children:[Object(c.jsxs)("p",{children:["asked ",g(e.creation_date)]}),Object(c.jsxs)("div",{className:"profile-info-question-2",children:[Object(c.jsx)("img",{className:"profile-image",src:e.owner.profile_image,alt:"prolife image"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#/profile/".concat(e.owner.user_id),dangerouslySetInnerHTML:{__html:e.owner.display_name}}),Object(c.jsx)("p",{children:e.owner.reputation})]})]})]})]})}))}),Object(c.jsxs)("div",{className:"answer-main",children:[console.log(t),Object(c.jsx)("p",{children:t}),Object(c.jsx)("p",{children:"aToken"}),h.map((function(e,t){return Object(c.jsxs)("div",{className:"answer",children:[Object(c.jsx)("div",{className:"answer-score",children:Object(c.jsx)("p",{children:e.score})}),Object(c.jsxs)("div",{className:"answer-body",children:[Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:e.body}}),Object(c.jsxs)("div",{className:"profile-info-question",children:[Object(c.jsx)("p",{children:g(e.creation_date)}),Object(c.jsxs)("div",{className:"profile-info-question-2",children:[Object(c.jsx)("img",{className:"profile-image",src:e.owner.profile_image,alt:"profile_image"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#/profile/"+e.owner.user_id,dangerouslySetInnerHTML:{__html:e.owner.display_name}}),Object(c.jsx)("p",{children:e.owner.reputation})]})]})]})]})]},t)}))]})]})};function _(e){return e.token}function y(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),r=o[0],l=o[1],j=Object(n.useState)(),d=Object(u.a)(j,2),f=d[0],w=d[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h.a,{bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md",children:Object(c.jsxs)(b.a,{children:[Object(c.jsxs)(h.a.Brand,{href:"#/",children:[Object(c.jsx)("img",{alt:"logo",src:x,width:"30",height:"30",className:"d-inline-block align-top"}),"USOF"]}),Object(c.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(p.a,{className:"mr-auto",children:[Object(c.jsx)(p.a.Link,{href:"#/",children:"Main"}),Object(c.jsx)(p.a.Link,{href:"#/users",children:"Users"}),Object(c.jsx)(p.a.Link,{href:"#/tags",children:"Tags"})]}),Object(c.jsxs)(O.a,{inline:!0,children:[Object(c.jsx)(m.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(c.jsx)(g.a,{variant:"outline-success",children:"Search"})]}),s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"my-info",children:r.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{className:"my-image",src:e.profile_image,alt:"profile image"}),Object(c.jsx)("p",{className:"my-name",dangerouslySetInnerHTML:{__html:e.display_name}})]})}))}),Object(c.jsx)(g.a,{variant:"outline-info",className:"ml-3",onClick:function(){return e=f.accessToken,v.a.get("https://api.stackexchange.com/2.2/access-tokens/".concat(e,"/invalidate?key=eZoZLL*)llKhER8pMMusAw((")),void a(!1);var e},children:"Logout"})]}):Object(c.jsx)(g.a,{variant:"outline-info",className:"ml-3",onClick:function(){window.SE.authenticate({success:function(e){a(!0),w(e),console.log(e),e.accessToken,v.a.get("https://api.stackexchange.com/2.2/users/".concat(e.networkUsers[0].user_id,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){l(e.data.items)})),console.log(r)},error:function(e){alert("An error occurred:\n"+e.errorName+"\n"+e.errorMessage)},networkUsers:!0})},children:"Login"})]})]})})})}function M(e){var t=e.question,s=Object(n.useState)(!1),a=Object(u.a)(s,2),i=a[0],o=a[1];return Object(c.jsxs)("div",{className:"question-content "+(i?"active":""),onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:[Object(c.jsxs)("div",{onClick:function(){window.location.href="/question/".concat(t.question_id)},className:"votes",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[t.score," "]}),Object(c.jsx)("span",{children:"votes"})]}),Object(c.jsxs)("div",{className:t.answer_count>0?t.is_answered?"answered":"some_answer":"no_answer",children:[Object(c.jsxs)("span",{children:[t.answer_count," "]}),Object(c.jsx)("span",{children:"answers"})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[t.view_count," "]}),Object(c.jsx)("span",{children:"views"})]})]}),Object(c.jsxs)("div",{className:"question-info",children:[Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"#/question/".concat(t.question_id),dangerouslySetInnerHTML:{__html:t.title}})}),Object(c.jsxs)("div",{className:"div-tag-author",children:[Object(c.jsx)("div",{className:"home-tags",children:t.tags.map((function(e,t){return Object(c.jsx)("a",{className:"home-tags-tag",children:e},t)}))}),Object(c.jsxs)("div",{className:"question-author-info",children:[Object(c.jsxs)("a",{children:["changed\xa0",Object(c.jsxs)("span",{children:[function(e){var t=new Date(1e3*e),s=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+c+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(t.last_activity_date),"\xa0"]})]}),Object(c.jsx)("a",{href:"#/profile/".concat(t.owner.user_id),className:"author",dangerouslySetInnerHTML:{__html:t.owner.display_name}}),Object(c.jsxs)("span",{children:[" reputation: ",t.owner.reputation>=1e4?(t.owner.reputation/1e3).toFixed(1)+"k":t.owner.reputation]})]})]})]}),i&&Object(c.jsx)("div",{className:"absolute-question",dangerouslySetInnerHTML:{__html:t.body}})]})}var L=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),s=t[0],i=t[1];return Object(n.useEffect)((function(){v.a.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((").then((function(e){var t=e.data;console.log(t),i([].concat(Object(w.a)(s),Object(w.a)(t.items))),console.log(s)}))}),[window.location.href]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Main page"}),s.map((function(e,t){return Object(c.jsx)(M,{question:e},t)}))]})};function N(e){var t=e.user;console.log(t);var s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){var e="https://api.stackexchange.com/2.2/users/".concat(t.user_id,"/top-tags?pagesize=5&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((");v.a.get(e).then((function(e){o(e.data.items)}))}),[window.location.href]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:t.profile_image,alt:"profile_image"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#/profile/"+t.user_id,dangerouslySetInnerHTML:{__html:t.display_name}}),Object(c.jsx)("p",{children:t.location}),Object(c.jsxs)("p",{children:["Reputation: ",t.reputation>1e4?(t.reputation/1e3).toFixed(2)+"k":t.reputation]})]})]}),Object(c.jsx)("div",{children:i.map((function(e,t){return Object(c.jsxs)("p",{children:[e.tag_name,"\xa0",e.answer_score+e.question_score]},t)}))})]})}function S(){var e=a.a.useState([]),t=Object(u.a)(e,2),s=t[0],i=t[1];return Object(n.useEffect)((function(){v.a.get("https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow&filter=!9_bDDp)d5&key=eZoZLL*)llKhER8pMMusAw((").then((function(e){i(e.data.items)}))}),[window.location.href]),Object(c.jsx)("div",{children:s.map((function(e,t){return Object(c.jsx)(N,{user:e},t)}))})}var Z=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"tags page"})})}}]),s}(n.Component);function E(e){var t=Object(n.useState)([]),s=Object(u.a)(t,2),a=s[0],i=s[1],o="";e.associate.map((function(e){o+="".concat(e.user_id,";")}));var r=o.substring(0,o.length-1);return console.log(r),Object(n.useEffect)((function(){r.length>0&&v.a.get("https://api.stackexchange.com/2.2/users/".concat(r,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){i([].concat(Object(w.a)(a),Object(w.a)(e.data.items)))}))}),[window.location.href]),console.log(a),Object(c.jsx)(c.Fragment,{children:a.map((function(e,t){return Object(c.jsxs)("div",{className:"associated-user",onClick:function(){return window.location.href="#/profile/".concat(e.user_id)},children:[Object(c.jsx)("img",{src:e.profile_image}),Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:e.display_name}})]},t)}))})}function q(e){var t=Object(n.useState)([]),s=Object(u.a)(t,2),a=s[0],i=s[1],o=e.post,r=e.user,l="";return Object(n.useEffect)((function(){"qa"===o?v.a.get("https://api.stackexchange.com/2.2/users/".concat(r,"/posts?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDt835&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){i.apply(void 0,[].concat(Object(w.a)(e.data.items)))})):"qeustions"===o?v.a.get("https://api.stackexchange.com/2.2/users/".concat(r,"/questions?order=desc&sort=activity&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){i.apply(void 0,[].concat(Object(w.a)(e.data.items)))})):"answers"===o?v.a.get("https://api.stackexchange.com/2.2/users/".concat(r,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!9_bDE(DzN&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){i.apply(void 0,[].concat(Object(w.a)(e.data.items)))})):"favorites"===o?v.a.get("https://api.stackexchange.com/2.2/users/".concat(r,"/favorites?order=desc&sort=activity&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((")).then((function(e){i.apply(void 0,[].concat([e.data.items]))})):l="Something going wrong"}),[window.location.href]),Object(c.jsx)("div",{children:l.length?Object(c.jsx)("p",{children:l}):a.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:[e.post_type,": ",e.score]},t),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.title}})]})}))})}function A(e){var t=e.match.params.user_id,s=a.a.useState([]),i=Object(u.a)(s,2),o=i[0],r=i[1],l=a.a.useState([]),j=Object(u.a)(l,2),d=(j[0],j[1],a.a.useState([])),h=Object(u.a)(d,2),b=h[0],p=h[1],O=a.a.useState([]),m=Object(u.a)(O,2),x=m[0],f=m[1],w=a.a.useState([]),k=Object(u.a)(w,2),_=k[0],y=k[1],M=a.a.useState([]),L=Object(u.a)(M,2),N=L[0],S=L[1],Z=a.a.useState([]),A=Object(u.a)(Z,2),T=A[0],F=A[1],R=a.a.useState([]),D=Object(u.a)(R,2),K=D[0],H=D[1],I=Object(n.useState)("qa"),C=Object(u.a)(I,2),J=C[0],P=C[1];function z(e){var t=new Date(1e3*e),s=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+c+" "+s+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}return Object(n.useEffect)((function(){var e="https://api.stackexchange.com/2.2/users/".concat(t,"?order=desc&sort=reputation&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),s="https://api.stackexchange.com/2.2/users/".concat(t,"/answers?order=desc&sort=activity&site=stackoverflow&filter=!9_bDE(fI5&key=eZoZLL*)llKhER8pMMusAw(("),c="https://api.stackexchange.com/2.2/users/".concat(t,"/questions?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDxJY5&key=eZoZLL*)llKhER8pMMusAw(("),n="https://api.stackexchange.com/2.2/users/".concat(t,"/privileges?site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),a="https://api.stackexchange.com/2.2/users/".concat(t,"/tags?order=desc&sort=popular&site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw(("),i="https://api.stackexchange.com/2.2/users/".concat(t,"/associated&key=eZoZLL*)llKhER8pMMusAw(("),l="https://api.stackexchange.com/2.2/users/".concat(t,"/timeline?site=stackoverflow&key=eZoZLL*)llKhER8pMMusAw((");v.a.get(e).then((function(e){r(e.data.items),console.log(o),console.log(e.data)})),v.a.get(s).then((function(e){p(e.data.items),console.log(b)})),v.a.get(c).then((function(e){f(e.data.items),console.log(x)})),v.a.get(n).then((function(e){y(e.data.items),console.log(_)})),v.a.get(a).then((function(e){S(e.data.items),console.log(N)})),v.a.get(i).then((function(e){F(e.data.items),console.log(T)})),v.a.get(l).then((function(e){H(e.data.items),console.log(K)}))}),[window.location.href]),Object(c.jsx)("div",{children:o.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:o[0].display_name}),Object(c.jsx)("h1",{children:t}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:o[0].profile_image,alt:"profile image"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:z(o[0].creation_date)}),Object(c.jsxs)("div",{className:"badge",children:[Object(c.jsxs)("span",{className:"bronze",children:["\u2022 ",o[0].badge_counts.bronze]}),Object(c.jsxs)("span",{className:"silver",children:["\u2022 ",o[0].badge_counts.silver]}),Object(c.jsxs)("span",{className:"gold",children:["\u2022 ",o[0].badge_counts.gold]})]})]})]}),Object(c.jsxs)("div",{className:"allTags",children:[Object(c.jsx)("h3",{children:"Tags"}),N.map((function(e,t){return Object(c.jsxs)("span",{className:"tags "+(e.count>50?"tag-50":e.count>40?"tag-40":e.count>30?"tag-30":e.count>20?"tag-20":e.count>10?"tag-10":"tag"),children:[e.name," ",e.count]},t)}))]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Posts"}),Object(c.jsx)(g.a,{className:"qa"===J?"active":"",onClick:function(){return P("qa")},children:"Q&A"}),Object(c.jsx)(g.a,{className:"questions"===J?"active":"",onClick:function(){return P("questions")},children:"Questions"}),Object(c.jsx)(g.a,{className:"answers"===J?"active":"",onClick:function(){return P("answers")},children:"Answers"}),Object(c.jsx)(g.a,{className:"favorites"===J?"active":"",onClick:function(){return P("favorites")},children:"Favorites"}),Object(c.jsx)(q,{post:J,user:t})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Privileges"}),_.map((function(e,t){return Object(c.jsx)("span",{className:"privileges",children:e.short_description},t)}))]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Timeline"}),K.map((function(e,t){return Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsxs)("div",{className:"timeline-type",children:[Object(c.jsxs)("span",{children:["Post type: ",e.post_type]}),Object(c.jsxs)("span",{children:["Timeline type: ",e.timeline_type]})]}),Object(c.jsx)("div",{className:"timeline-title",children:Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:e.title}})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{children:z(e.creation_date)})})]},t)}))]}),Object(c.jsxs)("div",{className:"associated-users",children:[Object(c.jsx)("h3",{children:"Associated users"}),Object(c.jsx)(E,{associate:T})]})]}):Object(c.jsx)("h1",{children:"Something going wrong..."})})}var T=s(8),F=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.SE.init({clientId:19338,key:"eZoZLL*)llKhER8pMMusAw((",channelUrl:"https://arkadiiap.github.io",complete:function(e){console.log(e)}})}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y,{}),Object(c.jsxs)(T.c,{children:[Object(c.jsx)(T.a,{exact:!0,path:"/",component:L}),Object(c.jsx)(T.a,{path:"/users",component:S}),Object(c.jsx)(T.a,{path:"/tags",component:Z}),Object(c.jsx)(T.a,{path:"/question/:id",component:k}),Object(c.jsx)(T.a,{path:"/profile/:user_id",component:A})]})]})}}]),s}(n.Component),R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))},D=s(36);o.a.render(Object(c.jsx)(D.a,{basename:"/usof",children:Object(c.jsx)(F,{})}),document.getElementById("root")),R()}},[[84,1,2]]]);
//# sourceMappingURL=main.f0547f21.chunk.js.map