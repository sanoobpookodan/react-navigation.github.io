(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),i=(n(0),n(487)),a={id:"with-navigation-focus",title:"withNavigationFocus",sidebar_label:"withNavigationFocus"},c={id:"version-2.x/with-navigation-focus",title:"withNavigationFocus",description:"`withNavigationFocus` is a higher order component which passes the `isFocused` prop into a wrapped component. It's useful if you need to use the focus state in the render function of your screen component or another component rendered somewhere inside of a screen.",source:"@site/versioned_docs/version-2.x/with-navigation-focus.md",permalink:"/docs/2.x/with-navigation-focus",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/with-navigation-focus.md",version:"2.x",sidebar_label:"withNavigationFocus",sidebar:"version-2.x-api",previous:{title:"withNavigation",permalink:"/docs/2.x/with-navigation"},next:{title:"NavigationEvents reference",permalink:"/docs/2.x/navigation-events"}},s=[{value:"Example",id:"example",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"withNavigationFocus")," is a higher order component which passes the ",Object(i.b)("inlineCode",{parentName:"p"},"isFocused")," prop into a wrapped component. It's useful if you need to use the focus state in the render function of your screen component or another component rendered somewhere inside of a screen."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"withNavigationFocus(Component)")," returns a component.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { Text } from 'react-native';\nimport { withNavigationFocus } from 'react-navigation';\n\nclass FocusStateLabel extends React.Component {\n  render() {\n    return <Text>{this.props.isFocused ? 'Focused' : 'Not focused'}</Text>;\n  }\n}\n\n// withNavigationFocus returns a component that wraps FocusStateLabel and passes\n// in the navigation prop\nexport default withNavigationFocus(FocusStateLabel);\n")))}p.isMDXComponent=!0},487:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return n?o.a.createElement(m,c({ref:t},u,{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);