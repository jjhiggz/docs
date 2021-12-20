"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1723],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,r(r({ref:t},s),{},{components:n})):o.createElement(f,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8117:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=["components"],l={title:"1 - Setup"},c=void 0,d={unversionedId:"tutorials/tasks/jetpack-compose/setup",id:"tutorials/tasks/jetpack-compose/setup",isDocsHomePage:!1,title:"1 - Setup",description:"The following guide will show you how to build a Task list application with Android Jetpack Compose. The Jetpack Compose is a modern set of libraries to build Android apps with a declarative UI with Kotlin code and without writing any XML.",source:"@site/docs/tutorials/tasks/jetpack-compose/1-setup.md",sourceDirName:"tutorials/tasks/jetpack-compose",slug:"/tutorials/tasks/jetpack-compose/setup",permalink:"/tutorials/tasks/jetpack-compose/setup",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/tasks/jetpack-compose/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Setup"},sidebar:"tutorialSidebar",previous:{title:"4 - Editing Tasks",permalink:"/tutorials/tasks/swiftui/edit-screen"},next:{title:"2 - Configure Ditto",permalink:"/tutorials/tasks/jetpack-compose/configure-ditto"}},s=[{value:"1-1 Create the App",id:"1-1-create-the-app",children:[],level:2},{value:"1-2 Add dependencies",id:"1-2-add-dependencies",children:[],level:2},{value:"1-3 Add Vector Icons",id:"1-3-add-vector-icons",children:[],level:2}],p={toc:s};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following guide will show you how to build a Task list application with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/getting-started"},"Android Jetpack Compose"),". The Jetpack Compose is a modern set of libraries to build Android apps with a declarative UI with Kotlin code and without writing any XML."),(0,a.kt)("p",null,"Before getting started, you will need the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio Arctic Fox"),". In addition, for this tutorial, you should have a decent familiarity with Kotlin."),(0,a.kt)("h2",{id:"1-1-create-the-app"},"1-1 Create the App"),(0,a.kt)("p",null,"Once you've had ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio Arctic Fox")," installed, Click ",(0,a.kt)("strong",{parentName:"p"},"File > New Project")," and"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(68504).Z})),(0,a.kt)("p",null,"Fill out the information on the form similar to the screenshot below. These are recommended values however they are not crucial to complete this tutorial:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},'"Tasks"')),(0,a.kt)("li",{parentName:"ul"},"Package Name: ",(0,a.kt)("inlineCode",{parentName:"li"},'"live.ditto.tasks"')),(0,a.kt)("li",{parentName:"ul"},"Save location: choose a directory"),(0,a.kt)("li",{parentName:"ul"},"Minimum SDK: ",(0,a.kt)("inlineCode",{parentName:"li"},'"API 25: Android 7.1.1 (Nougat)"'))),(0,a.kt)("p",null,'And finally click "Finish" and wait for Android Studio to setup the project.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23533).Z})),(0,a.kt)("h2",{id:"1-2-add-dependencies"},"1-2 Add dependencies"),(0,a.kt)("p",null,"In your application's Module ",(0,a.kt)("strong",{parentName:"p"},"build.gradle")," file add the additional dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:"title=build.gradle",title:"build.gradle"},'dependencies {\n  // ... existing dependencies\n\n  // Add the following dependencies below\n\n  // Ditto\n  implementation "live.ditto:ditto:latest.release"\n  // Jetpack Compose View Model\n  implementation \'androidx.lifecycle:lifecycle-viewmodel-compose:1.0.0-alpha07\'\n  // Live Data\n  implementation "androidx.compose.runtime:runtime-livedata:$compose_version"\n  // JetPack Compose Navigation\n  implementation "androidx.navigation:navigation-compose:2.4.0-alpha07"\n}\n\n')),(0,a.kt)("h2",{id:"1-3-add-vector-icons"},"1-3 Add Vector Icons"),(0,a.kt)("p",null,"We will need a couple of additional icons to show the tasks' completed, incompleted states. We will reference these vector resources in our code later. You will need to add 3 icons"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Right click on the ",(0,a.kt)("strong",{parentName:"li"},"res > drawable")," package and add a new ",(0,a.kt)("strong",{parentName:"li"},"Vector Asset"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Vector Icons Menu",src:n(3223).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Select the "add" icon and select it for size ',(0,a.kt)("inlineCode",{parentName:"li"},"24"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Vector Icons Menu",src:n(54149).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Follow steps 1 and 2 for "circle"')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Vector Icons",src:n(15681).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'Follow steps 1 and 2 for "circle" but for "outline"')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Vector Icons",src:n(20798).Z})),(0,a.kt)("p",null,"You should have have 3 additional drawables with the following names:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ic_baseline_add_24.xml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ic_baseline_circle_24.xml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ic_outline_circle_24.xml"))))}u.isMDXComponent=!0},54149:function(e,t,n){t.Z=n.p+"assets/images/add-icon-add-2-80cd44f62c1a3d153e2acd55875940b5.png"},3223:function(e,t,n){t.Z=n.p+"assets/images/add-icon-add-29e4d32f3a9a8c15c938dfedfc1f5d91.png"},20798:function(e,t,n){t.Z=n.p+"assets/images/add-icon-circle-outline-006736446463a4db31a742c1f4bbc402.png"},15681:function(e,t,n){t.Z=n.p+"assets/images/add-icons-2da03a995708cd0e8e93c615b62ffadd.png"},23533:function(e,t,n){t.Z=n.p+"assets/images/new-project-2-d32abc3547e5f60838f81950fce8f7aa.png"},68504:function(e,t,n){t.Z=n.p+"assets/images/new-project-3489158eac4ebc0d9ebf1bd86a716ed7.png"}}]);