(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,n){e.exports=n.p+"static/media/Corndel-Logo.333d3997.png"},24:function(e,a,n){e.exports=n(36)},29:function(e,a,n){},30:function(e,a,n){},31:function(e,a,n){},36:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(19),l=n.n(r),c=(n(29),n(30),n(21)),i=n(5),s=n(6),m=n(7),u=n(9),d=n(8),h=n(10),g=function(e){function a(e){return Object(s.a)(this,a),Object(u.a)(this,Object(d.a)(a).call(this,e))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"game-heading"},o.a.createElement("h1",null,"Lets play"))}}]),a}(o.a.Component),p=(n(31),n(20)),b=n.n(p),f=[{name:"in_jail_out_soon"},{name:"desperate_enuf"},{name:"herpes_free_since_03"},{name:"kiss-my-axe"},{name:"king_0f_dairy_queen"},{name:"dildo_swaggins"},{name:"shaquille_oatmeal"},{name:"ask_yo_girl_about_me"},{name:"hugs_for_drugs"},{name:"hoosier_daddy"},{name:"hugo_balls"},{name:"fast_and_the_curious"}],v=function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(u.a)(this,Object(d.a)(a).call(this,e))).placeholderName=f[Math.floor(Math.random()*f.length)],n.state={username:""},n}return Object(h.a)(a,e),Object(m.a)(a,[{key:"validateForm",value:function(){return this.state.username.length>0}},{key:"handleSubmit",value:function(){fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username})}).then(function(e){200===e.status&&console.log("Working callback.")})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"landing-box"},o.a.createElement("div",{className:"landing-header"},o.a.createElement("h1",null,"Cards Against"),o.a.createElement("img",{className:"corndel-logo",src:b.a,alt:"Corndel Logo"})),o.a.createElement("div",{className:"landing-input-box"},o.a.createElement("input",{className:"",name:"username",type:"text",id:"username",placeholder:this.placeholderName.name,onChange:function(a){return e.setState({username:a.target.value})}}),o.a.createElement("button",{className:"submit-btn",disabled:!this.validateForm(),onClick:function(){return e.handleSubmit()},type:"submit"},"Onwards!")))}}]),a}(o.a.Component),_=function(e){function a(e){return Object(s.a)(this,a),Object(u.a)(this,Object(d.a)(a).call(this,e))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"landing-heading"},o.a.createElement("h1",null,"Want to play again?")),o.a.createElement("div",null,o.a.createElement("button",null,o.a.createElement("a",{href:"/"},"Back to Home"))))}}]),a}(o.a.Component);var E=function(){return o.a.createElement(c.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:v}),o.a.createElement(i.a,{path:"/game",component:g}),o.a.createElement(i.a,{path:"/endgame",component:_}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.17d4463c.chunk.js.map