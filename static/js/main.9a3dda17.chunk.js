(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,A,t){},30:function(e,A,t){},35:function(e,A,t){"use strict";t.r(A);var n=t(1),c=t(15),s=t.n(c),a=t(3),l=t(0);function i(e){return Object(l.jsx)("button",{className:e.className,onClick:e.onClick,children:e.text})}function r(e){return Object(l.jsx)("a",{href:e.link,children:Object(l.jsx)("div",{className:"h-16 w-16 phonemax:h-12 phonemax:w-12 border-2 rounded-full justify-center flex hover:bg-gray-300 cursor-pointer",children:Object(l.jsx)("img",{className:"m-auto w-7 h-7",src:e.info})})})}var o=t(10),d=t.n(o),u=t(16);function m(){return{revealSideNav:function(e){document.getElementById(e).style.display="block",setTimeout((function(){document.getElementById(e).style.opacity=1})),document.getElementById(e).style.right="0"},hideSideNav:function(e){document.getElementById(e).style.opacity=0,setTimeout((function(){document.getElementById(e).style.display="none"}),300)}}}function j(e){var A=function(){e.onClick()};return Object(l.jsx)("div",{className:e.className,children:Object(l.jsxs)("div",{onClick:A,className:"transition-all",children:[Object(l.jsx)("div",{style:{transform:"rotate(45deg)"},onClick:A,className:"bg-black top-3 h-0.5 w-8 rounded-md my-1 absolute rotate-45"}),Object(l.jsx)("div",{onClick:A,className:"bg-black h-0.5 w-8 rounded-md my-1 absolute top-3 opacity-0"}),Object(l.jsx)("div",{style:{transform:"rotate(-45deg)"},onClick:A,className:"bg-black h-0.5 w-8 rounded-md my-1 absolute top-3 -rotate-45"})]})})}var b=t(17);var h=t(42),g=t(1).useState;function x(){var e=m().hideSideNav,A=function(){var e=g(),A=Object(a.a)(e,2),t=A[0],n=A[1],c=g(!1),s=Object(a.a)(c,2);return{buttonInfo:t,emailSuccess:s[0],setEmailSuccess:s[1],setbuttonInfo:n,buttonInfoFunc:function(e){n("progress"===e?Object(l.jsx)(h.a,{className:"mt-1",sx:{color:function(e){return e.palette.grey["light"===e.palette.mode?200:800]}},size:25,thickness:5}):e)}}}(),t=A.buttonInfo,c=A.emailSuccess,s=A.setEmailSuccess,i=A.buttonInfoFunc,r=Object(n.useRef)(),o=function(){var e=Object(u.a)(d.a.mark((function e(A){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("progress"),A.preventDefault(),e.next=4,c=r,b.a.sendForm("service_5a3xr41","template_ontjho8",c.current,"user_NV7NHn5okHm0zP0TsJMMt").then((function(e){return console.log(e.text),e.text}),(function(e){console.log(e.text)}));case 4:if("OK"===e.sent){for(t=document.getElementsByClassName("landing-form"),n=0;n<t.length;n++)t[n].value="";i("NOTIFY ME!"),s("Successfully subscribed!"),setTimeout((function(){s(!1)}),5e3)}case 6:case"end":return e.stop()}var c}),e)})));return function(A){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i("NOTIFY ME!")}),[]),Object(l.jsxs)("nav",{id:"landingSideNav",style:{transition:"opacity 0.3s"},className:"w-full md:w-1/2 bg-accent-400 md:p-16 text-black h-screen text-center py-16 px-6 absolute z-10 opacity-0 hidden",children:[Object(l.jsx)(j,{className:"absolute right-20 top-10",onClick:function(){e("landingSideNav")}}),Object(l.jsxs)("div",{className:"xl:p-24",children:[Object(l.jsx)("h1",{className:"my-6 font-light text-4xl leading-normal",children:"BE THE FIRST TO KNOW WHEN WE GO LIVE"}),Object(l.jsx)("h4",{className:"font-light my-4",children:"GET NOTIFIED"}),Object(l.jsxs)("form",{ref:r,onSubmit:o,className:"space-y-4 py-5 w-9/12 m-auto",children:[Object(l.jsx)("input",{className:"w-full h-10 p-3 landing-form",type:"text",name:"name",placeholder:"Enter Your Name",required:!0}),Object(l.jsx)("input",{className:"w-full h-10 p-3 landing-form",type:"email",name:"email",placeholder:"Enter Your Email",required:!0}),Object(l.jsx)("button",{type:"submit",className:"bg-black text-white h-10 px-4 w-full hover:bg-gray-600 transition-all",children:t})]}),c&&c]})]})}var f=t.p+"static/media/logo-white-cropped-transparent.ce08b901.png";t(29);var w=function(){var e=Object(n.useState)("0"),A=Object(a.a)(e,2),t=A[0],c=A[1],s=m().revealSideNav,o=[{link:"https://www.facebook.com/rickdusi",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCR4WNQsaw6awAAAB3ElEQVR42u3ZsWrCYBQF4HNtu+gmmZx0dhChdnZw6ewj6DuInRy6+wRdOvgChfoUpQjirAgVg6Di4FL+06FbC2JM+G/T3ANuGu/5vIlBBX8kZKkEtlqQVguoVoEg+H7k88BuB5DAfg86BzkcgPUaCENgNBIZj7Xnj1G8WiWfn8nPT16UwSDO+1/rFS8UwOEQ6HSAXE5rDhUAuiAAx2PI7a1WcTUAslAAXl8B/fIA4H/1OBwCjYZ2cRUAuloN0u1ql1YDgDw8ACLapVUAyEoFaLe1C6sBAPf3wNWVduGf8fctwGYTFy3/fA5Mp8B2CxyPv4/79uatQ6z+XK2i3eFNJnR3d9pzJ1Pe3dyQzp1fPgzpgsDHbJ6uAcVitKv/05PkNpv/AyBRP833dy9zeQNgPh/tBev1/wKInP0+4wD+YgDaA2jHALQH0I4BaA+Q+pCDwWU/ZyeRXi/u/CnfgPk82wDMOkC2N+B4hIRhdgG4WIiQ2QWQ+OufboAEzv+UAywWGQfI/AYkA5DAHyMvL8DHx8mnsFyG9PvnH/PxEVguTx9zNksCwEvoGo1o9/j1uq/ZUnwKGIABGIABGIABGIABGIABGIABGIABGIABGIABGIABGIABGIABGIABRMkXcui94uRQ7y8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMzBUMjI6NTM6MTErMDA6MDDn4qnmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTMwVDIyOjUzOjExKzAwOjAwlr8RWgAAAABJRU5ErkJggg=="},{link:"https://www.instagram.com/rickdusi/",icon:"data:image/png;base64,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"},{link:"",icon:"data:image/png;base64,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"}];return Object(n.useEffect)((function(){c("60%")}),[]),Object(l.jsxs)("div",{className:"landing-landscape-bg text-center grid text-white bg-black h-screen relative p-3",children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"bg-transparent",children:Object(l.jsx)("img",{className:"w-44 m-auto my-4",src:f})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"md:px-32 lg:px-56 px-2 xl:text-8xl lg:text-7xl sm:text-6xl text-4xl my-3 py-1 leading-none font-thin",children:"DESIGNING THE NEXT TREND"}),Object(l.jsx)("h5",{className:"py-2 text-2xl my-6 font-thin",children:"WEBSITE LOADING!"}),Object(l.jsxs)("div",{className:"bg-gray-100 w-4/5 sm:w-96 m-auto h-4 my-8",children:[Object(l.jsx)("div",{style:{width:t,transition:"ease 1s all"},className:"progress-bar w-56 bg-blue-400 h-4"}),Object(l.jsxs)("div",{className:"relative flex justify-between top-2 progress-label",children:[Object(l.jsx)("p",{children:"0%"}),Object(l.jsx)("p",{children:"100%"})]})]}),Object(l.jsx)(i,{text:"NOTIFY ME!",className:"bg-accent-400 hover:bg-accent-100 px-10 py-2 shadow-lg mt-6 text-black",onClick:function(){s("landingSideNav")}}),Object(l.jsx)("div",{className:"flex justify-between md:w-128 w-4/5 m-auto mt-12",children:o.map((function(e){return Object(l.jsx)(r,{info:e.icon,link:e.link})}))})]}),Object(l.jsx)("footer",{className:"py-4 font-light text-sm",children:"RICK DUSI \xa9 2021. Proudly created Chukwuma Azubuike"})]})};t(30);var N=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(w,{})})};t(31).config(),s.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9a3dda17.chunk.js.map