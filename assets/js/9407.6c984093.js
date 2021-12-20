"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9407],{29407:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(67294),r=n(3905),o=n(46291),l=n(84490),i=n(86010),c=n(60370),d=n(93783),s=n(55537),u=n(83117),m=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(95999),p=n(14352),b="sidebar_15mo",f="sidebarWithHideableNavbar_267A",E="sidebarHidden_2kNb",v="sidebarLogo_3h0W",g="menu_Bmed",Z="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",N="collapseSidebarButtonIcon_3E-R";function k(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",T),onClick:t},a.createElement(m,{className:N}))}function S(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,d=e.isHidden,u=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),h=m.navbar.hideOnScroll,T=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(b,(t={},t[f]=h,t[E]=d,t))},h&&a.createElement(s.Z,{tabIndex:-1,className:v}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",g,(n={},n[Z]=u,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(p.O,{items:o,activePath:r,level:1}))),T&&a.createElement(k,{onClick:l}))}var C=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(p.O,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function _(e){return a.createElement(c.Cv,{component:C,props:e})}var I=a.memo(S),M=a.memo(_);function y(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(I,e),r&&a.createElement(M,e))}var A=n(80102),w=n(12859),x=n(39960),B=n(99013),F=n(39649),L="details_1VDD";function R(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,u.Z)({},t,{className:(0,i.Z)("alert alert--info",L,t.className)}))}var H=["mdxType","originalType"];var P={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,A.Z)(r,H));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(w.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(B.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(x.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(B.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(R,(0,u.Z)({},e,{summary:n}),r)},h1:(0,F.Z)("h1"),h2:(0,F.Z)("h2"),h3:(0,F.Z)("h3"),h4:(0,F.Z)("h4"),h5:(0,F.Z)("h5"),h6:(0,F.Z)("h6")},W=n(24608),D="backToTopButton_35hR",O="backToTopButtonShow_18ls";function V(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Y=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=V(),d=l.smoothScrollTop,s=l.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||s(),n<300)r(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,h.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,D,(e={},e[O]=n,e)),type:"button",onClick:function(){return d()}})},j=n(76775),U={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function z(e){var t,n,o,d=e.currentDocRoute,s=e.versionMetadata,u=e.children,p=s.pluginId,b=s.version,f=d.sidebar,E=f?s.docsSidebars[f]:void 0,v=(0,a.useState)(!1),g=v[0],Z=v[1],T=(0,a.useState)(!1),N=T[0],k=T[1],S=(0,a.useCallback)((function(){N&&k(!1),Z((function(e){return!e}))}),[N]);return a.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,c.os)(p,b)}},a.createElement("div",{className:U.docPage},a.createElement(Y,null),E&&a.createElement("aside",{className:(0,i.Z)(U.docSidebarContainer,(t={},t[U.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(U.docSidebarContainer)&&g&&k(!0)}},a.createElement(y,{key:f,sidebar:E,path:d.path,onCollapse:S,isHidden:N}),N&&a.createElement("div",{className:U.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},a.createElement(m,{className:U.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(U.docMainContainer,(n={},n[U.docMainContainerEnhanced]=g||!E,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",U.docItemWrapper,(o={},o[U.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:P},u)))))}var J=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,j.LX)(r.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement(w.Z,null,a.createElement("html",{className:n.className})),a.createElement(z,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(W.default,null)}},39649:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return h}});var a=n(80102),r=n(83117),o=n(67294),l=n(86010),i=n(95999),c=n(60370),d="anchorWithStickyNavbar_31ik",s="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},h=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,h=(0,a.Z)(e,u),p=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,r.Z)({},h,{className:(0,l.Z)("anchor",(n={},n[s]=p,n[d]=!p,n)),id:m}),h.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,h)});var t}},24608:function(e,t,n){n.r(t);var a=n(67294),r=n(84490),o=n(95999);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);