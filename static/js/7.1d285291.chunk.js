(this["webpackJsonpthe-fed"]=this["webpackJsonpthe-fed"]||[]).push([[7],{124:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t(30),r=t(6),c=t(0),i=t.n(c),l=t(15),o=(t(1),t(2)),s=t(3),m=t(14);i.a.Component;i.a.Component;var u=function(e,a){return"function"===typeof e?e(a):e},f=function(e,a){return"string"===typeof e?Object(l.c)(e,null,null,a):e},d=function(e){return e},b=i.a.forwardRef;"undefined"===typeof b&&(b=d);var p=b((function(e,a){var t=e.innerRef,n=e.navigate,r=e.onClick,c=Object(s.a)(e,["innerRef","navigate","onClick"]),l=c.target,m=Object(o.a)({},c,{onClick:function(e){try{r&&r(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return m.ref=d!==b&&a||t,i.a.createElement("a",m)}));var v=b((function(e,a){var t=e.component,r=void 0===t?p:t,c=e.replace,l=e.to,v=e.innerRef,y=Object(s.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(n.e.Consumer,null,(function(e){e||Object(m.a)(!1);var t=e.history,n=f(u(l,e.location),e.location),s=n?t.createHref(n):"",p=Object(o.a)({},y,{href:s,navigate:function(){var a=u(l,e.location);(c?t.replace:t.push)(a)}});return d!==b?p.ref=a||v:p.innerRef=v,i.a.createElement(r,p)}))})),y=function(e){return e},N=i.a.forwardRef;"undefined"===typeof N&&(N=y);N((function(e,a){var t=e["aria-current"],r=void 0===t?"page":t,c=e.activeClassName,l=void 0===c?"active":c,d=e.activeStyle,b=e.className,p=e.exact,j=e.isActive,O=e.location,h=e.strict,E=e.style,g=e.to,x=e.innerRef,k=Object(s.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return i.a.createElement(n.e.Consumer,null,(function(e){e||Object(m.a)(!1);var t=O||e.location,c=f(u(g,t),t),s=c.pathname,R=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=R?Object(n.f)(t.pathname,{path:R,exact:p,strict:h}):null,P=!!(j?j(C,t):C),w=P?function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(b,l):b,_=P?Object(o.a)({},E,{},d):E,F=Object(o.a)({"aria-current":P&&r||null,className:w,style:_,to:c},k);return y!==N?F.ref=a||x:F.innerRef=x,i.a.createElement(v,F)}))}))},138:function(e,a,t){"use strict";var n=t(29),r=t(0),c=t.n(r),i=t(4),l=t.n(i),o=t(139),s=t.n(o),m=t(140),u=t.n(m),f=function(e){var a=e.className,t=Object(n.a)(e,["className"]);return c.a.createElement("small",Object.assign({className:l()(a,"text-muted")},t),c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("div",{className:"d-flex"},"A project by"," ",c.a.createElement("a",{href:"https://memetic.institute",target:"_blank",rel:"noopener noreferrer",className:l()("d-flex","align-items-center")},c.a.createElement("img",{src:u.a,alt:"Institute of Memetic Research and Development",className:s.a.imrdLogo}),"IMRD"))),c.a.createElement("span",{className:l()(s.a.spacer,"mx-2")},"\xb7"),c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("a",{href:"https://memetic.institute/gib",target:"_blank",rel:"noopener noreferrer"},"Donate")))};f.defaultProps={className:void 0},a.a=f},139:function(e,a,t){e.exports={spacer:"Footer_spacer__1lE6T",imrdLogo:"Footer_imrdLogo__RlrhN"}},140:function(e,a,t){e.exports=t.p+"static/media/imrd.a35fbb12.svg"},154:function(e,a,t){"use strict";var n=t(2),r=t(3),c=t(4),i=t.n(c),l=t(0),o=t.n(l),s=t(5),m=t(57),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,l=e.size,u=e.active,f=e.className,d=e.block,b=e.type,p=e.as,v=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(s.b)(t,"btn"),N=i()(f,y,u&&"active",y+"-"+c,d&&y+"-block",l&&y+"-"+l);if(v.href)return o.a.createElement(m.a,Object(n.a)({},v,{as:p,ref:a,className:i()(N,v.disabled&&"disabled")}));a&&(v.ref=a),p||(v.type=b);var j=p||"button";return o.a.createElement(j,Object(n.a)({},v,{className:N}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=u},193:function(e,a,t){e.exports={link:"NotFound_link__22Uww"}},194:function(e,a,t){"use strict";var n=t(2),r=t(3),c=t(4),i=t.n(c),l=t(0),o=t.n(l),s=t(5),m=t(11),u=t(33),f=o.a.createContext(null),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.variant,m=e.as,u=void 0===m?"img":m,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=Object(s.b)(t,"card-img");return o.a.createElement(u,Object(n.a)({ref:a,className:i()(l?d+"-"+l:d,c)},f))}));d.displayName="CardImg",d.defaultProps={variant:null};var b=d,p=Object(u.a)("h5"),v=Object(u.a)("h6"),y=Object(m.a)("card-body"),N=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,m=e.bg,u=e.text,d=e.border,b=e.body,p=e.children,v=e.as,N=void 0===v?"div":v,j=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.b)(t,"card"),h=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return o.a.createElement(f.Provider,{value:h},o.a.createElement(N,Object(n.a)({ref:a},j,{className:i()(c,O,m&&"bg-"+m,u&&"text-"+u,d&&"border-"+d)}),b?o.a.createElement(y,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=b,N.Title=Object(m.a)("card-title",{Component:p}),N.Subtitle=Object(m.a)("card-subtitle",{Component:v}),N.Body=y,N.Link=Object(m.a)("card-link",{Component:"a"}),N.Text=Object(m.a)("card-text",{Component:"p"}),N.Header=Object(m.a)("card-header"),N.Footer=Object(m.a)("card-footer"),N.ImgOverlay=Object(m.a)("card-img-overlay");a.a=N},197:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(62),i=t.n(c),l=t(4),o=t.n(l),s=t(124),m=t(127),u=t(194),f=t(154),d=t(40),b=t(52),p=t(56),v=t(138),y=t(193),N=t.n(y);a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Not Found"}),r.a.createElement(p.a,null),r.a.createElement(m.a,{className:o()("py-5","text-center")},r.a.createElement(u.a,{body:!0,className:o()("main-card","p-3")},r.a.createElement(d.a,{icon:b.e,size:"5x",className:"mb-4"}),r.a.createElement("h1",null,r.a.createElement("span",{className:"text-danger"},"404:")," We Lost The Records"),r.a.createElement("p",{className:"mb-4"},"We couldn't find the page you were looking for. It probably never existed, and you should not ask any questions."),r.a.createElement(f.a,{as:s.a,to:"/",variant:"primary",type:null,className:N.a.link},r.a.createElement(d.a,{icon:b.a,fixedWidth:!0,className:"mr-2"}),"Back to Game")),r.a.createElement(u.a,{as:"footer",body:!0,className:o()("main-card","mt-4")},r.a.createElement(v.a,null))))}}}]);
//# sourceMappingURL=7.1d285291.chunk.js.map