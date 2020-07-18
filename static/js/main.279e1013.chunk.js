(this["webpackJsonpthe-specific-press"]=this["webpackJsonpthe-specific-press"]||[]).push([[0],{13:function(e,t,a){},27:function(e,t,a){e.exports=a(54)},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),c=(a(13),a(5)),o=a(6),s=a(8),u=a(7),h=a(25),m=a.n(h),d=a(26),p=a.n(d),f=a(2),E=a(3),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleScrollTop=function(){window.scrollTo(0,e.top.current.offsetTop)},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;e.props.handleSearch(a),e.setState({query:"",placeholder:a})},e.handleChange=function(t){e.setState({query:t.target.value})},e.top=r.a.createRef(),e.state={query:"",placeholder:"Miscellaneous"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.placeholder,a=e.query;return r.a.createElement("header",{ref:this.top},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,r.a.createElement(E.a,{icon:f.d}),"The Specific Press"),r.a.createElement("h2",null,"Enter a Subject for the Latest News Headlines"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Showing results for: "),r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{type:"text",placeholder:t,value:a,onChange:this.handleChange,required:!0}),r.a.createElement("label",{className:"sr-only",htmlFor:"search"},"Miscellaneous"),r.a.createElement("button",{class:"search-button",onSubmit:this.handleSubmit},r.a.createElement(E.a,{icon:f.e,"aria-hidden":"true"})))),r.a.createElement("button",{class:"up-arrow",onClick:this.handleScrollTop,"aria-label":"Back to the top"},r.a.createElement(E.a,{icon:f.a,"aria-hidden":"true",title:"Back to the top"}))))}}]),a}(n.Component),b=function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement(E.a,{icon:f.f,"aria-hidden":"true"}))},v=function(){return r.a.createElement("div",{className:"noResults-container"},r.a.createElement(E.a,{icon:f.g}),r.a.createElement("h3",null,"Whoa! We can't retrieve news articles right now. Read them from the ",r.a.createElement("a",{href:"https://news.google.com/topstories?hl=en-CA&gl=CA&ceid=CA:en"},"source")," instead."))},w=function(e){var t=e.imgSrc,a=e.url,n=e.title,l=e.date;return null===t?null:r.a.createElement("a",{className:"image-container",href:a,"aria-label":"".concat(n,", enter to read more."),title:"Read more",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:t,alt:n}),r.a.createElement("h2",null,n),r.a.createElement("p",null,r.a.createElement(E.a,{icon:f.b,"aria-hidden":"true"}),l.slice(0,10)))},y=function(){return r.a.createElement("div",{className:"noResults-container"},r.a.createElement(E.a,{icon:f.h,"aria-hidden":"true"}),r.a.createElement("h3",null,"That subject must not be newsworthy, try again."))},S=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"News articles courtesy of the ",r.a.createElement("a",{className:"api-link",href:"https://newsapi.org/"},"News API")),r.a.createElement("a",{href:"https://github.com/seandaniel/the-specific-press"},r.a.createElement(E.a,{icon:f.c,"aria-hidden":"true",title:"View source code via GitHub"}))))},L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).apiCall=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Miscellaneous";m()({url:"https://proxy.hackeryou.com",responseType:"json",paramsSerializer:function(e){return p.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://newsapi.org/v2/everything",params:{q:t,language:"en",pageSize:100,apiKey:"eb43cb932e264320adfd1b7942970622"}}}).then((function(t){var a=t.data.totalResults,n=t.data.articles.filter((function(e,t,a){return a.findIndex((function(t){return t.title===e.title}))===t}));e.setState({articles:n,results:a,query:"",isLoading:!1})})).catch((function(){e.setState({isLoading:!1,apiLimit:!0})}))},e.onPageLoad=function(){e.apiCall(),e.setState({pageLoadCount:2})},e.handleSearch=function(t){e.setState({isLoading:!0,apiLimit:!1}),!1===e.state.isLoading&&e.apiCall(t)},e.state={articles:[],results:1,apiLimit:!1,query:"",isLoading:!0,pageLoadCount:1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){1===this.state.pageLoadCount&&this.onPageLoad()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.apiLimit,n=e.results,l=e.articles;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{handleSearch:this.handleSearch,ref:this.top}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("main",null,t?r.a.createElement(b,null):!0===a?r.a.createElement(v,null):n>0?l.map((function(e,t){return r.a.createElement(w,{key:t,url:e.url,imgSrc:e.urlToImage,title:e.title,date:e.publishedAt})})):r.a.createElement(y,null))),r.a.createElement(S,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.279e1013.chunk.js.map