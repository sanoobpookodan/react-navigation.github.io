(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(486)),i={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},c={id:"version-3.x/drawer-based-navigation",title:"Drawer navigation",description:"The drawer navigator allows you to present a navigation menu to your users. It can be customized out of the box, or you can completely control with a custom component.",source:"@site/versioned_docs/version-3.x/drawer-based-navigation.md",permalink:"/docs/3.x/drawer-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/drawer-based-navigation.md",version:"3.x",sidebar_label:"Drawer navigation",sidebar:"version-3.x-docs",previous:{title:"Tab navigation",permalink:"/docs/3.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/3.x/auth-flow"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The drawer navigator allows you to present a navigation menu to your users. It can be customized out of the box, or you can completely control with a custom component."),Object(o.b)("p",null,"This guide covers ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/3.x/drawer-navigator"}),"createDrawerNavigator"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>\n      </View>\n    );\n  }\n}\n\nconst DrawerNavigator = createDrawerNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    hideStatusBar: true,\n    drawerBackgroundColor: 'rgba(255,255,255,.9)',\n    overlayColor: '#6b52ae',\n    contentOptions: {\n      activeTintColor: '#fff',\n      activeBackgroundColor: '#6b52ae',\n    },\n  }\n);\n\nexport default createAppContainer(DrawerNavigator);\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/basic-drawer-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("p",null,"To open and close drawer, use the following helpers to open and close the drawer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"this.props.navigation.openDrawer();\nthis.props.navigation.closeDrawer();\n")),Object(o.b)("p",null,"If you would like to toggle the drawer you call the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"this.props.navigation.toggleDrawer();\n")),Object(o.b)("p",null,"Each of these functions, behind the scenes, are simply dispatching actions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"this.props.navigation.dispatch(DrawerActions.openDrawer());\nthis.props.navigation.dispatch(DrawerActions.closeDrawer());\nthis.props.navigation.dispatch(DrawerActions.toggleDrawer());\n")),Object(o.b)("p",null,"If you would like to determine if drawer is open or closed, you can do the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const parent = this.props.navigation.dangerouslyGetParent();\nconst isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;\n")),Object(o.b)("p",null,"Additionally, you can automatically hide the status bar by passing the DrawerLayout prop of ",Object(o.b)("inlineCode",{parentName:"p"},"hideStatusBar: true"),"."))}p.isMDXComponent=!0},486:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(g,c({ref:t},l,{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);