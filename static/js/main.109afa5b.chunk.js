(this["webpackJsonpthe-specific-press"]=this["webpackJsonpthe-specific-press"]||[]).push([[0],{27:function(e,t,a){e.exports=a(54)},5:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(5),a(6)),i=a(7),s=a(9),u=a(8),h=a(4),m=a(3),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a=e.state.query;e.props.handleSearch(a),e.setState({query:"",placeholder:a})},e.handleChange=function(t){e.setState({query:t.target.value})},e.state={query:"",placeholder:"Miscellaneous"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.placeholder,a=e.query;return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,r.a.createElement(m.a,{icon:h.c}),"The Specific Press"),r.a.createElement("h2",null,"Enter a Subject for the Latest News Headlines"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Showing results for: "),r.a.createElement("input",{type:"text",placeholder:t,value:a,onChange:this.handleChange}),r.a.createElement("label",{className:"sr-only",htmlFor:"search"},"Search News"))))}}]),a}(n.Component),d=a(25),f=a.n(d),g=a(26),E=a.n(g),v=function(e){var t=e.url,a=e.imgSrc,n=e.title,l=e.date;return null===a?null:r.a.createElement("a",{className:"image-container",href:t,"aria-label":"".concat(n,", type enter to read more."),title:"Read More",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("h2",null,n),r.a.createElement("p",null,r.a.createElement(m.a,{icon:h.a}),l.slice(0,10)))},y=function(){return r.a.createElement("div",{className:"error-container"},r.a.createElement(m.a,{icon:h.e}),r.a.createElement("h3",null,"That subject must not be newsworthy, try again."))},b=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"News articles courtesy of the ",r.a.createElement("a",{className:"api-link",href:"https://newsapi.org/"},"News API")),r.a.createElement("a",{href:"https://github.com/seandaniel/the-specific-press"},r.a.createElement(m.a,{icon:h.b}))))},S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).apiCall=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Miscellaneous";f()({url:"https://proxy.hackeryou.com",responseType:"json",paramsSerializer:function(e){return E.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://newsapi.org/v2/everything",params:{q:t,language:"en",pageSize:100,apiKey:"eb43cb932e264320adfd1b7942970622"},proxyHeaders:{header_params:"value"},xmlToJSON:!1}}).then((function(t){var a=t.data.totalResults,n=t.data.articles.filter((function(e,t,a){return a.findIndex((function(t){return t.title===e.title}))===t}));e.setState({articles:n,results:a,query:"",isLoading:!1})})),console.log("API Called")},e.onPageLoad=function(){console.log("Miscellaneous"),e.apiCall(),e.setState({pageLoadCount:2})},e.handleSearch=function(t){console.log(t),e.apiCall(t)},e.state={articles:[],results:1,query:"",isLoading:!0,pageLoadCount:1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){1===this.state.pageLoadCount&&this.onPageLoad()}},{key:"render",value:function(){var e=this.state,t=e.articles,a=e.results;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{handleSearch:this.handleSearch}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("main",null,a>0?t.map((function(e,t){return r.a.createElement(v,{key:t,url:e.url,imgSrc:e.urlToImage,title:e.title,date:e.publishedAt})})):r.a.createElement(y,null))),r.a.createElement(b,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.109afa5b.chunk.js.map