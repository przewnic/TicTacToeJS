(()=>{"use strict";var t={459:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"html, body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n}\n\nheader, footer {\n    text-align: center;\n    background-color:rgba(201, 208, 215, 0.514);    \n}\n\nmain {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n    padding: 4vw;\n    max-width: 600px;\n}\n\n.game-button {\n    min-height: 125px;\n    min-width: 125px;\n    border: 1px solid black;\n}\n\nbutton {\n    min-height: 100px;\n    min-width: 100px;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var h=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=a(p,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),l=0;l<o.length;l++){var u=n(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{class t{constructor(t){this.sign=t}}var e=n(379),r=n.n(e),a=n(795),o=n.n(a),i=n(569),s=n.n(i),c=n(565),l=n.n(c),u=n(216),d=n.n(u),h=n(589),p=n.n(h),f=n(459),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=document.getElementById("main"),b=document.createElement("div");b.classList.add("info");const v=document.createElement("p");b.appendChild(v),v.id="message";const y=document.createElement("button");y.textContent="Restart",y.addEventListener("click",(function(){T.reset()})),b.appendChild(y),g.appendChild(b);const x=document.createElement("div");x.classList.add("container"),g.appendChild(x);const w=function(t){const e=[];for(let n=0;n<9;n++){const r=document.createElement("button");r.classList.add("game-button"),r.id=`${n}`,r.addEventListener("click",_),t.appendChild(r),e.push(r)}return e}(x),C=new t("X"),E=new t("O"),k=new class{constructor(t,e){this.players=[t,e],this.board=[null,null,null,null,null,null,null,null,null],this.turn=0,this.stop=!1}play(t){null===this.board[t]&&(this.board[t]=this.players[this.turn].sign,this.change_turn())}check_win(){this.stop=!0;for(let t=0;t<3;t++){let e=3*t;if(this.board[e]===this.board[e+1]&&this.board[e]===this.board[e+2]&&null!==this.board[e])return!0;if(this.board[t]===this.board[t+3]&&this.board[t]===this.board[t+6]&&null!==this.board[t])return!0}return this.board[0]===this.board[4]&&this.board[0]===this.board[8]&&null!==this.board[0]||this.board[2]===this.board[4]&&this.board[2]===this.board[6]&&null!==this.board[2]||(this.stop=!1,!1)}check_draw(){for(let t of this.board)if(null===t)return!1;return!0}reset(){for(let t=0;t<9;t++)this.board[t]=null;this.turn=0,this.stop=!1}change_turn(){this.turn=0==this.turn?1:0}}(C,E),T=new class{constructor(t,e,n,r){this.message=e,this.resetButton=n,this.buttons=t,this.game=r,this.update()}play(t){this.game.stop||(this.game.play(t.target.id),this.update())}update(){for(let t=0;t<9;t++)this.buttons[t].textContent=this.game.board[t];this.game.check_win()?(this.game.change_turn(),this.message.textContent=`Won: ${this.game.players[this.game.turn].sign}`):this.game.check_draw()?this.message.textContent="Draw":this.message.textContent=`Next move: ${this.game.players[this.game.turn].sign}`}reset(){this.game.reset(),this.update()}}(w,v,y,k);function _(t){T.play(t)}})()})();