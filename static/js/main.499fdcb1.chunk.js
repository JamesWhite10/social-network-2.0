(this["webpackJsonpsocial-network-2.0"]=this["webpackJsonpsocial-network-2.0"]||[]).push([[0],{139:function(e,t,n){e.exports={item:"Post_item__1854D"}},17:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1EKZ8",dialogsItems:"Dialogs_dialogsItems__1mUVE",dialog:"Dialogs_dialog__2reVz",activeLink:"Dialogs_activeLink__1YF0A",messages:"Dialogs_messages__9-BVx",message:"Dialogs_message__2Gjyt",avatar:"Dialogs_avatar__1vRJA",name:"Dialogs_name__1LVOx",form:"Dialogs_form__2LEaY",button:"Dialogs_button__3vIGa"}},171:function(e,t,n){},26:function(e,t,n){e.exports={getUsers:"Users_getUsers__2PHBG",pages:"Users_pages__2C-9_",selectedPage:"Users_selectedPage__OVjDo",users:"Users_users__1sLxp",userPhoto:"Users_userPhoto__1bGE3",button:"Users_button__31JDR",userInfo:"Users_userInfo__3EDVw",name:"Users_name__2Tpaw",status:"Users_status__2RozC",location:"Users_location__24yvs"}},294:function(e,t,n){"use strict";n.r(t);n(98);var s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,308)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))},a=n(0),i=n.n(a),c=n(30),r=n.n(c),o=n(13),u=(n(171),n(9)),l=n.n(u),d=n(17),j=n.n(d),b=n(1),g=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:j.a.image,children:[Object(b.jsx)("img",{src:e.image}),e.name]})})},h=n(10),m=n(42),f=n(6),O=n(131),p=n.n(O).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"14b0628e-63da-450d-a3cb-ba811b8ac388"}}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return p.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},x=function(e){return p.post("follow/".concat(e)).then((function(e){return e.data}))},I=function(e){return p.delete("follow/".concat(e)).then((function(e){return e.data}))},S=function(e){return console.warn("Obsolete method. Please profileAPI object."),E.getProfile(e)},E={getProfile:function(e){return p.get("profile/".concat(+e)).then((function(e){return e.data}))},getStatus:function(e){return p.get("profile/status/".concat(+e)).then((function(e){return e.data}))},updateStatus:function(e){return p.put("profile/status",{status:e}).then((function(e){return e.data}))}},C=function(){return p.get("auth/me").then((function(e){return e.data}))},P=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return p.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},A=function(){return p.delete("auth/login").then((function(e){return e.data}))},w={profile:null,posts:[{id:1,message:"Hi, how are you?",likeCount:23},{id:2,message:"It's my first Post!!",likeCount:58},{id:3,message:"Are you ready....",likeCount:17}],status:""},D=function(e){return{type:"SET-STATUS",status:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.newPostText;return Object(f.a)(Object(f.a)({},e),{},{posts:[].concat(Object(m.a)(e.posts),[{id:4,message:n,likeCount:0}])});case"SET-USER-PROFILE":return Object(f.a)(Object(f.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(f.a)(Object(f.a)({},e),{},{status:t.status});default:return e}},N={dialogs:[{id:1,name:"Anna",avatar:"https://qaprovider.com/storage/users/2773_avatar1588529274.png"},{id:2,name:"Max",avatar:"https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/d2/27/7b/d2277b15-bd32-0545-920e-8efc1767fc25/source/512x512bb.jpg"},{id:3,name:"Ben",avatar:"https://narcosis-css.ru/800/600/http/pristor.ru/wp-content/uploads/2017/06/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D0%AE%D1%82%D1%83%D0%B1-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-15.jpg"},{id:4,name:"Alice",avatar:"https://hypeava.ru/uploads/posts/2018-05/1527186697_5.png"},{id:5,name:"Den",avatar:"https://instagram-my.ru/wp-content/uploads/2019/11/avainsta14.jpg"}],messages:[{id:1,message:"Hi"},{id:2,message:"Yo!!!"},{id:3,message:"How is your playing basketball?"},{id:4,message:"Yo!!!"},{id:5,message:"Yo!!!"}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.newMessageText;return Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(m.a)(e.messages),[{id:6,message:n}])});default:return e}},T={friends:[{id:1,name:"Patrik",image:"https://img2.freepng.ru/20180318/wye/kisspng-derrick-rose-chicago-bulls-nba-draft-cleveland-cav-derrick-rose-cliparts-5aae255e6d7772.9388071515213622704484.jpg"},{id:2,name:"Ann",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcU4bXsUHvbehYhD3UtlJWivLmu_7DOQ8Vw&usqp=CAU"},{id:3,name:"Oliver",image:"https://i.pinimg.com/originals/40/96/e1/4096e11a4e50eb8551db700a8aa96ba7.jpg"}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return e},y={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},L=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},B=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},_=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",followingInProgress:e,userId:t}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!0}):e}))});case"UN-FOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(f.a)(Object(f.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(f.a)(Object(f.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(f.a)(Object(f.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(m.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R=n(31),J={id:null,email:null,login:null,isAuth:!1},Q=function(e,t,n,s){return{type:"SET-USER-DATA",payload:{id:e,email:t,login:n,isAuth:s}}},Y=function(){return function(e){C().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,a=n.email,i=n.login;e(Q(s,a,i,!0))}}))}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(f.a)(Object(f.a)({},e),{},{email:t.payload.email,login:t.payload.login,id:t.payload.id,isAuth:!0});default:return e}},z=n(132),q=n(130),H={initialized:!1},V=Object(h.c)({profilePage:U,dialogsPage:k,usersPage:M,sidebar:F,auth:G,form:q.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZED":return Object(f.a)(Object(f.a)({},e),{},{initialized:t.initialized});default:return e}}}),W=Object(h.e)(V,Object(h.a)(z.a));window.store=W;var K=W,X=function(){var e=K.getState().sidebar.friends.map((function(e){return Object(b.jsx)(g,{name:e.name,image:e.image},e.id)}));return Object(b.jsxs)("nav",{className:l.a.nav,children:[Object(b.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(b.jsx)(o.b,{to:"/profile",activeClassName:l.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(b.jsx)(o.b,{to:"/dialogs",activeClassName:l.a.activeLink,children:"Messages"})}),Object(b.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(b.jsx)(o.b,{to:"news",activeClassName:l.a.activeLink,children:"News"})}),Object(b.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(b.jsx)(o.b,{to:"/music",activeClassName:l.a.activeLink,children:"Music"})}),Object(b.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(b.jsx)("div",{className:l.a.users,children:Object(b.jsx)(o.b,{to:"/users",activeClassName:l.a.activeLink,children:"Users"})})}),Object(b.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(b.jsx)("div",{className:l.a.settings,children:Object(b.jsx)(o.b,{to:"/settings",activeClassName:l.a.activeLink,children:"Settings"})})}),Object(b.jsx)("div",{className:"".concat(l.a.item," ").concat(l.a.active),children:Object(b.jsxs)("div",{className:l.a.friends,children:[Object(b.jsx)(o.b,{to:"/friends",activeClassName:l.a.activeLink,children:"Friends"}),Object(b.jsx)("div",{className:l.a.image,children:e})]})})]})},Z=n(12),$=function(){return Object(b.jsx)("div",{children:"News"})},ee=function(){return Object(b.jsx)("div",{children:"Music"})},te=function(){return Object(b.jsx)("div",{children:"Settings"})},ne=function(e){return Object(b.jsx)("div",{className:"".concat(j.a.dialog," ").concat(j.a.active),children:Object(b.jsx)(o.b,{to:"/dialogs/".concat(e.id),activeClassName:j.a.activeLink,children:Object(b.jsxs)("div",{className:j.a.avatar,children:[Object(b.jsx)("img",{src:e.avatar,alt:"image"}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{className:j.a.name,children:e.name})})]})})})},se=function(e){return Object(b.jsx)("div",{className:j.a.message,children:e.message})},ae=n(128),ie=n(129),ce=n(56),re=n(73),oe=n.n(re),ue=function(e){var t=e.meta,n=t.touched,s=t.error,a=e.children,i=n&&s;return Object(b.jsxs)("div",{className:"".concat(oe.a.formControl," ").concat(i?oe.a.error:""),children:[Object(b.jsx)("div",{children:a}),i&&Object(b.jsx)("span",{className:oe.a.span,children:s})]})},le=function(e){var t=e.input,n=(e.meta,Object(ce.a)(e,["input","meta"]));return Object(b.jsx)(ue,Object(f.a)(Object(f.a)({},e),{},{children:Object(b.jsx)("textarea",Object(f.a)(Object(f.a)({},t),n))}))},de=function(e){var t=e.input,n=(e.meta,Object(ce.a)(e,["input","meta"]));return Object(b.jsx)(ue,Object(f.a)(Object(f.a)({},e),{},{children:Object(b.jsx)("input",Object(f.a)(Object(f.a)({},t),n))}))},je=function(e){if(!e)return"Field is required"},be=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},ge=be(300),he=Object(ie.a)({form:"dialogAddMessageForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)(ae.a,{component:le,name:"newMessageText",placeholder:"Enter your message",validate:[je,ge]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:j.a.button,children:"Send"})})]})})),me=n(11),fe=function(e){return{isAuth:e.auth.isAuth}};function Oe(e){return Object(me.b)(fe)((function(t){var n=t.isAuth,s=Object(ce.a)(t,["isAuth"]);return n?Object(b.jsx)(e,Object(f.a)({},s)):Object(b.jsx)(Z.a,{to:"/login"})}))}var pe=Object(h.d)(Object(me.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{newMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",newMessageText:e}}(t))}}})),Oe)((function(e){var t=e.dialogs.map((function(e){return Object(b.jsx)(ne,{name:e.name,id:e.id,avatar:e.avatar},e.id)})),n=e.messages.map((function(e){return Object(b.jsx)(se,{message:e.message},e.id)}));return Object(b.jsxs)("div",{className:j.a.dialogs,children:[Object(b.jsx)("div",{className:j.a.dialogsItems,children:t}),Object(b.jsxs)("div",{className:j.a.messages,children:[n,Object(b.jsx)("div",{className:j.a.form,children:Object(b.jsx)(he,{onSubmit:function(t,n){e.newMessage(t.newMessageText),n(Object(R.a)("dialogAddMessageForm"))}})})]})]})})),ve=n(68),xe=n(69),Ie=n(72),Se=n(71),Ee=n(26),Ce=n.n(Ee),Pe=n(307),Ae=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:Ce.a.pages,children:n.map((function(t,n){return Object(b.jsx)("span",{className:e.currentPage===t&&Ce.a.selectedPage,onClick:function(){e.onClickPageUsers(t)},children:t},n)}))}),Object(b.jsx)("div",{className:Ce.a.users,children:e.users.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(o.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",alt:"avatar",className:Ce.a.userPhoto})})}),Object(b.jsx)("div",{className:Ce.a.button,children:t.followed?Object(b.jsx)(Pe.a,{disabled:e.followingInProgress.some((function(e){return e===t.id})),variant:"contained",size:"small",color:"secondary",onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(b.jsx)(Pe.a,{disabled:e.followingInProgress.some((function(e){return e===t.id})),variant:"contained",size:"small",color:"primary",onClick:function(){e.follow(t.id)},children:"Follow"})}),Object(b.jsxs)("div",{className:Ce.a.userInfo,children:[Object(b.jsx)("div",{className:Ce.a.name,children:t.name}),Object(b.jsx)("div",{className:Ce.a.status,children:t.status}),Object(b.jsxs)("div",{className:Ce.a.location,children:[Object(b.jsx)("div",{children:"u.location.country"}),Object(b.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))})]})},we=n.p+"static/media/preloader.2b51a802.svg",De=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{style:{marginTop:"125px"},src:we,alt:"preloader"})})},Ue=n(138),Ne=Object(Ue.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(){return!0}))})),ke=function(e){return e.usersPage.pageSize},Te=function(e){return e.usersPage.totalUsersCount},Fe=function(e){return e.usersPage.currentPage},ye=function(e){return e.usersPage.isFetching},Le=function(e){return e.usersPage.followingInProgress},Be=function(e){Object(Ie.a)(n,e);var t=Object(Se.a)(n);function n(){var e;Object(ve.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onClickPageUsers=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(xe.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(De,{}):null,Object(b.jsx)(Ae,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onClickPageUsers:this.onClickPageUsers,setIsFollowingInProgress:this.props.setIsFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),_e=Object(h.d)(Object(me.b)((function(e){return{users:Ne(e),pageSize:ke(e),totalUsersCount:Te(e),currentPage:Fe(e),isFetching:ye(e),followingInProgress:Le(e)}}),{follow:function(e){return function(t){t(_(!0,e)),x(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(_(!1,e))}))}},unfollow:function(e){return function(t){t(_(!0,e)),I(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"UN-FOLLOW",userId:e}}(e)),t(_(!1,e))}))}},setCurrentPage:L,setIsFollowingInProgress:_,getUsers:function(e,t){return function(n){n(B(!0)),n(L(e)),v(e,t).then((function(e){n(B(!1)),n({type:"SET-USERS",users:e.items}),n({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:e.totalCount})}))}}}))(Be),Me=n(94),Re=n.n(Me),Je=n(97),Qe=function(e){var t=Object(a.useState)(!1),n=Object(Je.a)(t,2),s=n[0],i=n[1],c=Object(a.useState)(e.status),r=Object(Je.a)(c,2),o=r[0],u=r[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return Object(b.jsxs)("div",{children:[!s&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){i(!0)},children:e.status||"-------"})}),s&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),"string"===typeof o&&e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},Ye=function(e){return e.profile?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:Re.a.image,children:Object(b.jsx)("img",{src:"https://a.espncdn.com/photo/2016/0112/NBARankATPG_1296x518.jpg",alt:"image"})}),Object(b.jsxs)("div",{className:Re.a.descriptionBlock,children:[Object(b.jsx)("img",{src:e.profile.photos.large,alt:"image"}),Object(b.jsx)("div",{children:e.profile.contacts.facebook}),Object(b.jsx)("div",{children:e.profile.fullName}),Object(b.jsx)(Qe,{status:e.status,updateStatus:e.updateStatus})]})]}):Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)(De,{})})},Ge=n(95),ze=n.n(Ge),qe=n(139),He=n.n(qe),Ve=function(e){return Object(b.jsxs)("div",{className:He.a.item,children:[Object(b.jsx)("img",{src:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/176058558/original/5d30aa3aa3101b3c2a3609baf4f14b69455c720c/create-your-own-nba-finals-avatar.jpg"}),e.message,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:[e.likeCount,"  Like"]})})]})};var We=be(30),Ke=Object(ie.a)({form:"profileAddPostForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(ae.a,{component:le,name:"newPostText",placeholder:"New post",validate:[je,We]})}),Object(b.jsx)("button",{children:"Add post"})]})})),Xe=Object(me.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))((function(e){var t=e.posts.map((function(e){return Object(b.jsx)(Ve,{message:e.message,likeCount:e.likeCount},e.id)}));return Object(b.jsxs)("div",{className:ze.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My Posts"}),Object(b.jsx)(Ke,{onSubmit:function(t,n){e.addPost(t.newPostText),n(Object(R.a)("profileAddPostForm"))}}),Object(b.jsx)("div",{className:ze.a.posts,children:t})]})})),Ze=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Ye,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(b.jsx)(Xe,{})]})},$e=Object(h.d)(Object(me.b)((function(e){return{profile:e.profilePage.profile,posts:e.profilePage.posts,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){S(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e})}))}},getUserStatus:function(e){return function(t){E.getStatus(e).then((function(e){t(D(e))}))}},updateStatus:function(e){return function(t){E.updateStatus(e).then((function(n){0===n.resultCode&&t(D(e))}))}}}),Z.f,Oe)((function(e){return Object(a.useEffect)((function(){var t=e.match.params.userId||null;(t||(t=e.authorizedUserId))&&(e.getUserProfile(t),e.getUserStatus(t))}),[]),Object(b.jsx)(Ze,Object(f.a)(Object(f.a)({},e),{},{profile:e.profile,status:e.status,updateStatus:e.updateStatus}))})),et=n(96),tt=n.n(et),nt=function(e){return Object(b.jsxs)("header",{className:tt.a.header,children:[Object(b.jsx)("img",{src:"https://ss.sport-express.ru/userfiles/materials/160/1605423/large.jpg",alt:"image"}),Object(b.jsx)("div",{className:tt.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," ",Object(b.jsx)(Pe.a,{variant:"contained",color:"primary",onClick:e.logOut,children:"Log Out"})]}):Object(b.jsx)(o.b,{to:"/login"+e.id,children:"Login"})})]})},st=function(e){Object(Ie.a)(n,e);var t=Object(Se.a)(n);function n(){return Object(ve.a)(this,n),t.apply(this,arguments)}return Object(xe.a)(n,[{key:"render",value:function(){return Object(b.jsx)(nt,Object(f.a)({},this.props))}}]),n}(i.a.Component),at=Object(me.b)((function(e){return{id:e.auth.id,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth}}),{logOut:function(){return function(e){A().then((function(t){0===t.resultCode&&e(Q(null,null,null,null))}))}}})(st),it=n(43),ct=n.n(it),rt=Object(ie.a)({form:"login"})((function(e){return Object(b.jsxs)("form",{className:ct.a.form,onSubmit:e.handleSubmit,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"Login:"}),Object(b.jsx)(ae.a,{className:ct.a.input,placeholder:"Email",name:"email",component:de,validate:[je]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"Password:"}),Object(b.jsx)(ae.a,{className:ct.a.input,placeholder:"Password",name:"password",type:"password",component:de,validate:[je]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(ae.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"]}),e.error&&Object(b.jsx)("div",{className:ct.a.formSummaryError,children:e.error}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Sign In"})})]})})),ot=Object(me.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){P(e,t,n).then((function(e){if(0===e.resultCode)s(Y());else{var t=e.messages.length>0?e.messages[0]:"Some error";s(Object(R.b)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(b.jsx)(Z.a,{to:"/profile"}):Object(b.jsxs)("div",{className:ct.a.loginBlock,children:[Object(b.jsx)("h2",{children:"Log In"}),Object(b.jsx)(rt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),ut=function(){var e=Object(me.d)((function(e){return e.app.initialized})),t=Object(me.c)();return Object(a.useEffect)((function(){t((function(e){e(Y()),C().then((function(){e({type:"SET-INITIALIZED",initialized:!0})}))}))}),[]),e?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(at,{}),Object(b.jsx)(X,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(Z.b,{path:"/dialogs",render:function(){return Object(b.jsx)(pe,{})}}),Object(b.jsx)(Z.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)($e,{})}}),Object(b.jsx)(Z.b,{path:"/news",component:$}),Object(b.jsx)(Z.b,{path:"/music",component:ee}),Object(b.jsx)(Z.b,{path:"/users",component:_e}),Object(b.jsx)(Z.b,{path:"/settings",component:te}),Object(b.jsx)(Z.b,{path:"/friends",component:g}),Object(b.jsx)(Z.b,{path:"/login",component:ot})]})]}):Object(b.jsx)(Z.a,{to:"/login"})};r.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(me.a,{store:K,children:Object(b.jsx)(ut,{})})}),document.getElementById("root")),s()},43:function(e,t,n){e.exports={loginBlock:"Login_loginBlock__38F2m",form:"Login_form__2Wu6b",input:"Login_input__1Y8rE",formSummaryError:"Login_formSummaryError__1moq1"}},73:function(e,t,n){e.exports={formControl:"FormsControls_formControl__NaRvU",error:"FormsControls_error__1vobl",span:"FormsControls_span__1b_An"}},9:function(e,t,n){e.exports={nav:"NavBar_nav__JqNJ8",item:"NavBar_item__2zwhe",activeLink:"NavBar_activeLink__12K0Q",users:"NavBar_users__16T3N",settings:"NavBar_settings__2S-zR",friends:"NavBar_friends__3sLbq",image:"NavBar_image__2PeXw",button:"NavBar_button__28Z2B"}},94:function(e,t,n){e.exports={image:"ProfileInfo_image__Yh9Sq",descriptionBlock:"ProfileInfo_descriptionBlock__2L-Ux"}},95:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__22xlv",posts:"MyPosts_posts__2cmEp"}},96:function(e,t,n){e.exports={header:"Header_header__2VbJ1",loginBlock:"Header_loginBlock__yAD-I"}},98:function(e,t,n){}},[[294,1,2]]]);
//# sourceMappingURL=main.499fdcb1.chunk.js.map