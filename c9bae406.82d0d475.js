/*! For license information please see c9bae406.82d0d475.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{398:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),i=a(9),r=(a(0),a(469)),o=a(471),b=a(472),c={id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},l={id:"version-5.x/material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-5.x/material-bottom-tab-navigator.md",permalink:"/docs/material-bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/material-bottom-tab-navigator.md",version:"5.x",sidebar_label:"createMaterialBottomTabNavigator",sidebar:"version-5.x/docs",previous:{title:"createBottomTabNavigator",permalink:"/docs/bottom-tab-navigator"},next:{title:"createMaterialTopTabNavigator",permalink:"/docs/material-top-tab-navigator"}},s=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",children:[]}],p={rightToc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused."),Object(r.b)("p",null,"This wraps the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"}),Object(r.b)("inlineCode",{parentName:"a"},"BottomNavigation"))," component from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnativepaper.com"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-paper")),". If you ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/getting-started.html"}),"configure the Babel plugin"),", it won't include the whole ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle."),Object(r.b)("img",{src:"/assets/navigators/tabs/material-bottom-tabs.gif",style:{width:"420px",maxWidth:"100%",margin:"16px 0"}}),Object(r.b)("p",null,"To use this navigator, ensure that you have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started"}),Object(r.b)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/master/packages/material-bottom-tabs"}),Object(r.b)("inlineCode",{parentName:"a"},"@react-navigation/material-bottom-tabs")),":"),Object(r.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/material-bottom-tabs react-native-paper\n"))),Object(r.b)(b.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/material-bottom-tabs react-native-paper\n")))),Object(r.b)("p",null,"This API also requires that you install ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo, it will just work out of the box. Otherwise, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oblador/react-native-vector-icons#installation"}),"follow these installation instructions"),"."),Object(r.b)("p",null,"To use this tab navigator, import it from ",Object(r.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs")),Object(r.b)("h2",{id:"api-definition"},"API Definition"),Object(r.b)("p",null,"To use this tab navigator, import it from ",Object(r.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs"),":"),Object(r.b)("samp",{id:"material-tab-based-navigation-minimal"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tab-based-navigation"}),"Tab Navigation"))),Object(r.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(r.b)("p",null,"The route configs object is a mapping from route name to a route config."),Object(r.b)("h3",{id:"props"},"Props"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),Object(r.b)("h4",{id:"initialroutename"},Object(r.b)("inlineCode",{parentName:"h4"},"initialRouteName")),Object(r.b)("p",null,"The name of the route to render on first load of the navigator."),Object(r.b)("h4",{id:"screenoptions"},Object(r.b)("inlineCode",{parentName:"h4"},"screenOptions")),Object(r.b)("p",null,"Default options to use for the screens in the navigator."),Object(r.b)("h4",{id:"backbehavior"},Object(r.b)("inlineCode",{parentName:"h4"},"backBehavior")),Object(r.b)("p",null,"Behavior of back button handling."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," to not handle back button")),Object(r.b)("h4",{id:"shifting"},Object(r.b)("inlineCode",{parentName:"h4"},"shifting")),Object(r.b)("p",null,"Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label. By default, this is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when you have more than 3 tabs."),Object(r.b)("h4",{id:"labeled"},Object(r.b)("inlineCode",{parentName:"h4"},"labeled")),Object(r.b)("p",null,"Whether to show labels in tabs. When ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", only icons will be displayed."),Object(r.b)("h4",{id:"activecolor"},Object(r.b)("inlineCode",{parentName:"h4"},"activeColor")),Object(r.b)("p",null,"Custom color for icon and label in the active tab."),Object(r.b)("h4",{id:"inactivecolor"},Object(r.b)("inlineCode",{parentName:"h4"},"inactiveColor")),Object(r.b)("p",null,"Custom color for icon and label in the inactive tab."),Object(r.b)("h4",{id:"barstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"barStyle")),Object(r.b)("p",null,"Style for the bottom navigation bar. You can set a bottom padding here if you have a translucent navigation bar on Android: ",Object(r.b)("inlineCode",{parentName:"p"},"barStyle={{ paddingBottom: 48 }}"),"."),Object(r.b)("p",null,"Example:"),Object(r.b)("samp",{id:"material-bottom-tab-styled"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ backgroundColor: \'#694fad\' }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),Object(r.b)("h3",{id:"options"},"Options"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"options")," prop can be used to configure individual screens inside the navigator. Supported options are:"),Object(r.b)("h4",{id:"title"},Object(r.b)("inlineCode",{parentName:"h4"},"title")),Object(r.b)("p",null,"Generic title that can be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(r.b)("h4",{id:"tabbaricon"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(r.b)("p",null,"Function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),Object(r.b)("h4",{id:"tabbarcolor"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarColor")),Object(r.b)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",Object(r.b)("inlineCode",{parentName:"p"},"shifting")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h4",{id:"tabbarlabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(r.b)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",Object(r.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(r.b)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),Object(r.b)("h4",{id:"tabbarbadge"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarBadge")),Object(r.b)("p",null,"Badge to show on the tab icon, can be ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to show a dot, ",Object(r.b)("inlineCode",{parentName:"p"},"string")," or ",Object(r.b)("inlineCode",{parentName:"p"},"number")," to show text."),Object(r.b)("h4",{id:"tabbaraccessibilitylabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(r.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(r.b)("h4",{id:"tabbartestid"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(r.b)("p",null,"ID to locate this tab button in tests."),Object(r.b)("h3",{id:"events"},"Events"),Object(r.b)("p",null,"The navigator can ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/navigation-events"}),"emit events")," on certain actions. Supported events are:"),Object(r.b)("h4",{id:"tabpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabPress")),Object(r.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),Object(r.b)("li",{parentName:"ul"},"If the tab is already focused:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, scroll to top is performed by ",Object(r.b)("inlineCode",{parentName:"li"},"useScrollToTop")),Object(r.b)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",Object(r.b)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),Object(r.b)("p",null,"To prevent the default behavior, you can call ",Object(r.b)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),Object(r.b)("samp",{id:"material-bottom-tab-prevent-default"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', e => {\n    // Prevent default behavior\n\n    e.preventDefault();\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(r.b)("h3",{id:"helpers"},"Helpers"),Object(r.b)("p",null,"The tab navigator adds the following methods to the navigation prop:"),Object(r.b)("h4",{id:"jumpto"},Object(r.b)("inlineCode",{parentName:"h4"},"jumpTo")),Object(r.b)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - ",Object(r.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(r.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(r.b)("samp",{id:"material-tab-jump-to"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("samp",{id:"material-bottom-tab-example"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\nimport { MaterialCommunityIcons } from \'react-native-vector-icons\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      activeColor="#e91e63"\n      style={{ backgroundColor: \'tomato\' }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="home" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="account" color={color} size={26} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')),Object(r.b)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",Object(r.b)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),Object(r.b)("p",null,"You can use the theming support in ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/getting-started.html"}),Object(r.b)("inlineCode",{parentName:"a"},"Provider")," from ",Object(r.b)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/theming.html"}),"instructions on ",Object(r.b)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}u.isMDXComponent=!0},469:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return a?i.a.createElement(d,b({ref:t},l,{components:a})):i.a.createElement(d,b({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},470:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=i.apply(null,n);o&&e.push(o)}else if("object"===r)for(var b in n)a.call(n,b)&&n[b]&&e.push(b)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},471:function(e,t,a){"use strict";a(23),a(17),a(18);var n=a(0),i=a.n(n),r=a(470),o=a.n(r),b=a(120),c=a.n(b),l=37,s=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,b=e.values,p=Object(n.useState)(r),u=p[0],m=p[1],d=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:o()("tab-item",c.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return m(t)},onClick:function(){return m(t)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===u}))[0]))}},472:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);