(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{167:function(t,s,e){"use strict";e.r(s);var l={props:["title","source","classes"]},a=e(0),i=Object(a.a)(l,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rounded overflow-hidden w-full md:w-1/3"},[e("div",{staticClass:"p-4 h-full text-sm font-semibold relative shadow",class:t.classes},[e("div",{staticClass:"uppercase mb-6"},[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"list-reset opacity-75"},t._l(t.source,function(s){return e("li",{staticClass:"my-2"},[t._v("\n        "+t._s(s.label)+"\n        "),e("ul",{staticClass:"list-reset opacity-75"},t._l(s.items,function(s){return e("li",[t._v(t._s(s))])}),0)])}),0)])])},[],!1,null,null,null);s.default=i.exports},177:function(t,s,e){"use strict";e.r(s);var l={components:{"colored-list":e(167).default},data:function(){return{frontend:[{label:"Lenguajes",items:["JavaScript"]},{label:"Otros",items:["CSS/SCSS","HTML","Markdown"]},{label:"Frameworks",items:["Angular v2+","Vue"]},{label:"Librerías",items:["Reactjs","JQuery","Flutter","Bootstrap","Bulma","Tailwind","Vuepress"]}],backend:[{label:"Lenguajes",items:[".NET (C#, VB)","Java","Python","JavaScript (Node.js)","C++","SQL (MSSQL, MySQL/MariaDB, PostgreSQL)","NoSQL (MongoDB)"]},{label:"Otros",items:["TypeScript","NAnt/MSBuild","Apache server"]},{label:"Frameworks",items:["Windows Forms","WPF","Entity Framework","Express.js"]},{label:"Librerías",items:[]}],otros:[{label:"",items:["Bash","Git/SVN","NPM/Yarn","MATLAB/Octave","Unity (game engine)"]}]}}},a=e(0),i=Object(a.a)(l,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex flex-wrap h-full"},[s("colored-list",{staticClass:"z-10",attrs:{title:"Frontend",source:this.frontend,classes:"bg-indigo-darkest text-indigo-lightest"}}),this._v(" "),s("colored-list",{staticClass:"py-1 z-10",attrs:{title:"Backend",source:this.backend,classes:"bg-indigo-darker text-indigo-lightest"}}),this._v(" "),s("colored-list",{staticClass:"py-2",attrs:{title:"Otros",source:this.otros,classes:"bg-indigo-dark text-indigo-lightest"}})],1)},[],!1,null,null,null);s.default=i.exports}}]);