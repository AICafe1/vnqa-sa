(this.webpackJsonpvnqa=this.webpackJsonpvnqa||[]).push([[0],{19:function(e,t,n){e.exports=n(53)},24:function(e,t,n){n(25),n(26)},25:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),i=window.dfd,l=i.Series,o=i.DataFrame,s=function(){function e(t,n){Object(a.a)(this,e),this.index=t.index,this.series=[];for(var r=0,i=t.index.length;r<i;)++r<n?this.series.push(NaN):this.series.push(t.iloc(["".concat(r-n,":").concat(r)]))}return Object(r.a)(e,[{key:"apply",value:function(e){return new l(this.series.map((function(t){return t&&e(t)})),{index:this.index})}}]),e}();l.prototype.rolling=function(e){return new s(this,e)};var c=function(){function e(t,n){Object(a.a)(this,e),this.index=t.index,this.columns=t.columns,this.dtypes=t.dtypes,this.df=[];for(var r=0,i=t.index.length;r<i;)++r<n?this.df.push(NaN):this.df.push(t.iloc({rows:["".concat(r-n,":").concat(r)]}))}return Object(r.a)(e,[{key:"apply",value:function(e){var t=this.columns.map((function(){return NaN}));return new o(this.df.map((function(n){return n?e(n):t})),{index:this.index,columns:this.columns,dtypes:this.dtypes})}}]),e}();o.prototype.rolling=function(e){return new c(this,e)}},26:function(e,t){window.dfd.Series.prototype.dropnall=function(e){for(var t=this.values,n=this.index,a=[],r=[],i=0,l=t.length;i<l;i++){var o=t[i];isNaN(o)||null===o||void 0===o||(a.push(o),r.push(n[i]))}if(e.inplace)return this.$setValues(a,!1),this.$setIndex(r),this;var s=this.copy();return s.$setValues(a,!1),s.$setIndex(r),s}},53:function(e,t,n){"use strict";n.r(t);var a,r,i,l=n(1),o=n(2),s=n(4),c=n(3),u=n(5),d=n(0),p=n.n(d),h=n(8),m=n.n(h),v=(n(24),n(9)),f=window.wp;function g(e){return e&&"aicafe_one_logged_out"===e.code?window.location.reload():e}if(window.wp=void 0,f.role||(window.location.href=f.url||"https://aicafe.one/vnqa",exit()),f.hasOwnProperty("vnqa"))try{a=f.vnqa?JSON.parse(f.vnqa):{},delete f.vnqa}catch(he){a={}}var y={arrayMerge:function(e,t){return t}};function b(){return a?new Promise((function(e){return e(a)})):(r||(r=(e="aicafe/v1/app/vnqa",fetch("".concat(f.api).concat(e).concat(-1===e.indexOf("?")?"?":"&","_wpnonce=").concat(f.nonce)).then((function(e){return e.json()})).then(g)).then((function(e){return a=Array.isArray(e)?{}:e})).catch((function(){return a={}}))),r);var e}function w(e){return a=window.deepmerge(a,e,y),i&&clearTimeout(i),i=setTimeout((function(){return e="aicafe/v1/app/vnqa",t=a,fetch("".concat(f.api).concat(e).concat(-1===e.indexOf("?")?"?":"&","_wpnonce=").concat(f.nonce),{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(g);var e,t}),9e3),a}var E=!document.getElementById("df"),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.lazy&&clearTimeout(this.lazy)}},{key:"setStateLazy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;this.lazy&&clearTimeout(this.lazy),this.lazyState=this.lazyState?Object.assign(this.lazyState,e):e,this.lazy=setTimeout((function(){t.setState(t.lazyState),t.lazyState=!1}),n)}},{key:"getSettings",value:function(e,t){E&&b().then((function(n){return t(e?n[e]:n)}))}},{key:"getSettingsSync",value:function(e){return E&&(e?a&&a[e]:a)}},{key:"saveSettings",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E&&w(e)}}]),t}(p.a.Component),x=window.dfd.DataFrame,O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={ticker:"",window:20},n.getSettingsSync()?(n.state.ticker=n.getSettingsSync(n.getKey())||n.state.ticker,n.state.window=n.getSettingsSync("window")||n.state.window):n.getSettings(!1,(function(e){if(n.props.df instanceof x){var t=e[n.getKey()];t&&t!==n.state.ticker&&n.setState({ticker:t})}e.window&&e.window!==n.state.window&&n.setState({window:e.window})})),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getKey",value:function(){return this.props.df.hasOwnProperty("VNINDEX")?"idx":"ticker"}},{key:"changeTicker",value:function(e){this.state.ticker!==e&&(this.saveSettings(Object(v.a)({},this.getKey(),e)),this.setState({ticker:e}))}},{key:"changeWindow",value:function(e){e=(e=parseInt(e.target.value))>1?e:this.state.window,this.saveSettings({window:e}),this.setState({window:e})}}]),t}(j),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,n=e.df,a=e.columns;a||(a=n.columns);for(var r=[{x:n[a[0]].index,y:n[a[0]].values,name:a[0]}],i=[["xy"]],l=1;l<a.length;l++)r.push({x:n[a[l]].index,y:n[a[l]].values,name:a[l],xaxis:"x",yaxis:"y".concat(l+1)}),i.push(["xy".concat(l+1)]);window.Plotly.newPlot(t,r,{xaxis:{showspikes:!0,spikemode:"toaxis+across+marker",spikesnap:"cursor"},yaxis:{type:"log"},grid:{rows:a.length,columns:1,subplots:i},margin:{l:40,r:8,b:32,t:40,pad:0},showlegend:!1})}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"render",value:function(){return p.a.createElement("div",{id:this.props.id})}}]),t}(p.a.Component),N=n(10),S=n(18),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(N.a)({},this.props);return e.options=e.options.map((function(t){return e.value===t?(e.value={value:t,label:t},e.value):{value:t,label:t}})),p.a.createElement(S.a,e)}}]),t}(p.a.Component),M=window.dfd.DataFrame,D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"volatility",value:function(e){var t=this.props.df,n=e.ticker,a=e.window;t instanceof M&&(n&&t.hasOwnProperty(n)||(n=t.columns[0],e.ticker=n),t=t[n]),t.dropnall({inplace:!0});var r=t.apply(Math.log);(t=new M(Object(v.a)({},t.columns[0],t.values),{index:t.index})).addColumn({values:r.sub([NaN].concat(r.values.slice(0,-1))),column:"returns",inplace:!0});var i=Math.sqrt(252);return t.addColumn({values:t.returns.rolling(a).apply((function(e){return e.std()*i})),column:"volatility",inplace:!0}),e.df=t,e}},{key:"render",value:function(){var e=this,t=this.volatility(this.state);return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-header"},"\u0110\u1ed9 bi\u1ebfn \u0111\u1ed9ng",this.props.df instanceof M&&p.a.createElement(p.a.Fragment,null,"\xa0c\u1ee7a",p.a.createElement(C,{className:"d-inline-flex ms-2",onChange:function(t){return e.changeTicker(t.value)},value:t.ticker||this.props.df.columns[0],options:this.props.df.columns})),"\xa0trong",p.a.createElement("input",{className:"d-inline-flex ms-2 form-control",style:{width:"70px"},type:"number",value:t.window,onChange:function(t){return e.changeWindow(t)}}),"\xa0ng\xe0y"),p.a.createElement("div",{className:"card-body"},t.df&&p.a.createElement(k,{id:this.props.id,df:t.df})))}}]),t}(O),P=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id;e.sf.plot(t).hist({layout:Object(N.a)({margin:{l:40,r:8,b:32,t:100,pad:0}},this.props)})}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"render",value:function(){return p.a.createElement("div",{id:this.props.id})}}]),t}(p.a.Component),F=window.jStat,T=window.dfd.DataFrame;var q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"returns",value:function(e){var t=this.props.df,n=e.ticker||this.state.ticker;t instanceof T&&(n&&t.hasOwnProperty(n)||(n=t.columns[0],e.ticker=n),t=t[n]),t.dropnall({inplace:!0});var a=t.apply(Math.log);return e.df=t,e.returns=a.iloc(["1:"]).sub(a.values.slice(0,-1)),e}},{key:"render",value:function(){var e=this,t=this.returns(this.state),n=t.returns,a=t.df,r=t.ticker;return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-header"},"L\u1ee3i nhu\u1eadn",this.props.df instanceof T&&p.a.createElement(p.a.Fragment,null,"\xa0c\u1ee7a",p.a.createElement(C,{className:"d-inline-flex ms-2",onChange:function(t){return e.changeTicker(t.value)},value:r||this.props.df.columns[0],options:this.props.df.columns}))),n?p.a.createElement("div",{className:"card-body row"},p.a.createElement("div",{className:"col-md-6 mt-4"},p.a.createElement("table",{className:"table table-borderless table-striped table-hover"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",null,"T\u1eeb ng\xe0y"),p.a.createElement("td",null,a.index[0])),p.a.createElement("tr",null,p.a.createElement("td",null,"\u0110\u1ebfn ng\xe0y"),p.a.createElement("td",null,a.index[a.index.length-1])),p.a.createElement("tr",null,p.a.createElement("td",null,"T\u1ef7 l\u1ec7 t\u0103ng tr\u01b0\u1edfng h\xe0ng n\u0103m (CAGR)"),p.a.createElement("td",null,(100*Math.expm1(31536e6*Math.log(a.values[a.values.length-1]/a.values[0])/(new Date(a.index[a.index.length-1])-new Date(a.index[0])))).toFixed(2),"%")),p.a.createElement("tr",null,p.a.createElement("td",null,"L\u1ee3i nhu\u1eadn trung b\xecnh n\u0103m"),p.a.createElement("td",null,(25200*n.mean()).toFixed(2),"%")),p.a.createElement("tr",null,p.a.createElement("td",null,"Bi\u1ebfn \u0111\u1ed9ng trung b\xecnh n\u0103m"),p.a.createElement("td",null,(n.std()*Math.sqrt(252e4)).toFixed(2),"%")),p.a.createElement("tr",null,p.a.createElement("td",null,"T\u1ef7 l\u1ec7 Sharpe"),p.a.createElement("td",null,(n.mean()/n.std()*Math.sqrt(252)).toFixed(2))),p.a.createElement("tr",null,p.a.createElement("td",null,"Max Drawdown"),p.a.createElement("td",null,function(e){for(var t=0,n=0,a=0,r=e.length;a<r;a++){var i=e[a];if(i<n){var l=100*(n-i)/n;l>t&&(t=l)}else n=i}return t}(a.values).toFixed(2),"%")),p.a.createElement("tr",null,p.a.createElement("td",null,"Max Drawdown Duration"),p.a.createElement("td",null,function(e){for(var t,n=0,a=0,r=0,i=e.length;r<i;r++){var l=e[r];l<a?t++:(t>n&&(n=t),a=l,t=0)}return n}(a.values)," ng\xe0y")),p.a.createElement("tr",null,p.a.createElement("td",null,"\u0110\u1ed9 l\u1ec7ch (Skew)"),p.a.createElement("td",null,F.skewness(n.values).toFixed(2))),p.a.createElement("tr",null,p.a.createElement("td",null,"\u0110\u1ed9 nh\u1ecdn (Kurtosis)"),p.a.createElement("td",null,F.kurtosis(n.values).toFixed(2))),p.a.createElement("tr",null,p.a.createElement("td",null,"Gi\xe1 tr\u1ecb ch\u1ecbu r\u1ee7i ro h\xe0ng ng\xe0y (VAR 95%)"),p.a.createElement("td",null,(100*F.percentile(n.values,.05)).toFixed(2),"%"))))),p.a.createElement("div",{className:"col-md-6"},p.a.createElement(P,{id:this.props.id,sf:n,title:"Ph\xe2n b\u1ed1 l\u1ee3i nhu\u1eadn"}))):"")}}]),t}(O),z=window,R=z.jStat,A=z.Plotly,I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,n=e.x,a=e.y,r=R.min(n),i=R.max(n),l=R(this.model?this.model.coef:[0,1]),o=[{x:n,y:a,mode:"markers",type:"scatter"},{x:[r,i],y:[l.dot([1,r]),l.dot([1,i])],mode:"lines"}];A.newPlot(t,o,{margin:{l:40,r:8,b:32,t:40,pad:0},showlegend:!1})}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"render",value:function(){return this.model=R.models.ols(this.props.y,this.props.x.map((function(e){return[1,e]}))),p.a.createElement(p.a.Fragment,null,p.a.createElement("h5",{className:"text-center my-3"},this.props.title),p.a.createElement("table",{className:"table table-borderless table-striped table-hover"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",null,"coef"),p.a.createElement("td",null,this.model.coef.join(", "))),p.a.createElement("tr",null,p.a.createElement("td",null,"t test P-value"),p.a.createElement("td",null,this.model.t.p.join(", "))),p.a.createElement("tr",null,p.a.createElement("td",null,"f test P-value"),p.a.createElement("td",null,this.model.f.pvalue)),p.a.createElement("tr",null,p.a.createElement("td",null,"R2"),p.a.createElement("td",null,this.model.R2)))),p.a.createElement("div",{id:this.props.id}))}}]),t}(p.a.Component),K=window.dfd.DataFrame,U=window.jStat,W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"volatility",value:function(e){var t=this.props.df,n=e.ticker,a=e.window;t instanceof K&&(n&&t.hasOwnProperty(n)||(n=t.columns[0],e.ticker=n),t=t[n]),t.dropnall({inplace:!0});for(var r=t.apply(Math.log),i=r.iloc(["1:"]).sub(r.values.slice(0,-1)).values,l=[],o=[],s=0,c=i.length;s<c;s+=a){var u=i.slice(s,s+a);l.push(U.mean(u)),o.push(U.stdev(u))}return e.retx=l.slice(0,-1),e.rety=l.slice(1),e.volx=o.slice(0,-1),e.voly=o.slice(1),e}},{key:"render",value:function(){var e=this,t=this.volatility(this.state);return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-header"},"M\xf4 h\xecnh tuy\u1ebfn t\xednh d\u1ef1 b\xe1o",this.props.df instanceof K&&p.a.createElement(p.a.Fragment,null,"\xa0cho",p.a.createElement(C,{className:"d-inline-flex ms-2",onChange:function(t){return e.changeTicker(t.value)},value:t.ticker||this.props.df.columns[0],options:this.props.df.columns})),"\xa0trong",p.a.createElement("input",{className:"d-inline-flex ms-2 form-control",style:{width:"70px"},type:"number",value:t.window,onChange:function(t){return e.changeWindow(t)}}),"\xa0ng\xe0y"),p.a.createElement("div",{className:"card-body row"},p.a.createElement("div",{className:"col-md-6"},t.retx&&p.a.createElement(I,{id:this.props.id+"Ret",x:t.retx,y:t.rety,title:"D\u1ef1 b\xe1o l\u1ee3i nhu\u1eadn"})),p.a.createElement("div",{className:"col-md-6"},t.volx&&p.a.createElement(I,{id:this.props.id+"Vol",x:t.volx,y:t.voly,title:"D\u1ef1 b\xe1o \u0111\u1ed9 bi\u1ebfn \u0111\u1ed9ng"}))))}}]),t}(O),$=n(16),B=n.n($),L=(n(52),n(12)),V=n.n(L),G=n(17),_=n.n(G),H=n(6);function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=function(r){function i(){return Object(l.a)(this,i),Object(s.a)(this,Object(c.a)(i).apply(this,arguments))}return Object(u.a)(i,r),Object(o.a)(i,[{key:"render",value:function(){var r=new H.PivotData(this.props),i=r.getRowKeys(),l=r.getColKeys(),o=a?l:i;0===o.length&&o.push([]);var s=a?i:l;0===s.length&&s.push([]);var c=this.props.aggregatorName,u=this.props.aggregators[c]([])().numInputs||0;0!==u&&(c+=" of ".concat(this.props.vals.slice(0,u).join(", ")));var d=o.map((function(e){var n=[],i=[],l=!0,o=!1,u=void 0;try{for(var d,p=s[Symbol.iterator]();!(l=(d=p.next()).done);l=!0){var h=d.value,m=parseFloat(r.getAggregator(a?h:e,a?e:h).value());n.push(isFinite(m)?m:null),i.push(h.join("-")||" ")}}catch(f){o=!0,u=f}finally{try{l||null==p.return||p.return()}finally{if(o)throw u}}var v={name:e.join("-")||c};return"pie"===t.type?(v.values=n,v.labels=i.length>1?i:[c]):(v.x=a?n:i,v.y=a?i:n),Object.assign(v,t)})),h=c,m=a?this.props.rows.join("-"):this.props.cols.join("-"),v=a?this.props.cols.join("-"):this.props.rows.join("-");""!==m&&(h+=" vs ".concat(m)),""!==v&&(h+=" by ".concat(v));var f={title:h,hovermode:"closest",width:window.innerWidth*(window.innerWidth<768?.7:.6)-96,height:.6*window.innerHeight};if("pie"===t.type){var g=Math.ceil(Math.sqrt(d.length)),y=Math.ceil(d.length/g);f.grid={columns:g,rows:y},d.forEach((function(e,t){e.domain={row:Math.floor(t/g),column:t-g*Math.floor(t/g)},d.length>1&&(e.title=e.name)})),1===d[0].labels.length&&(f.showlegend=!1)}else f.xaxis={title:a?c:null,automargin:!0},f.yaxis={title:a?null:c,automargin:!0};return p.a.createElement(e,{data:d,layout:Object.assign(f,n,this.props.plotlyOptions),config:this.props.plotlyConfig,onUpdate:this.props.onRendererUpdate})}}]),i}(p.a.PureComponent);return r.defaultProps=Object.assign({},H.PivotData.defaultProps,{plotlyOptions:{},plotlyConfig:{}}),r}function X(e){var t=function(t){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){var t=new H.PivotData(this.props),n=t.getRowKeys(),a=t.getColKeys();0===n.length&&n.push([]),0===a.length&&a.push([]);var r={x:[],y:[],text:[],type:"scatter",mode:"markers"};n.forEach((function(e){a.forEach((function(n){var a=t.getAggregator(e,n).value();null!==a&&(r.x.push(n.join("-")),r.y.push(e.join("-")),r.text.push(a))}))}));var i={title:this.props.rows.join("-")+" vs "+this.props.cols.join("-"),hovermode:"closest",xaxis:{title:this.props.cols.join("-"),automargin:!0},yaxis:{title:this.props.rows.join("-"),automargin:!0},width:window.innerWidth*(window.innerWidth<768?.7:.6)-96,height:.6*window.innerHeight};return p.a.createElement(e,{data:[r],layout:Object.assign(i,this.props.plotlyOptions),config:this.props.plotlyConfig,onUpdate:this.props.onRendererUpdate})}}]),n}(p.a.PureComponent);return t.defaultProps=Object.assign({},H.PivotData.defaultProps,{plotlyOptions:{},plotlyConfig:{}}),t}var Q=_()(window.Plotly);function Y(e){var t=Math.min.apply(Math,e),n=Math.max.apply(Math,e);return function(e){if(e>0){var a=255-Math.round(255*e/n);return{backgroundColor:"rgb("+a+",255,"+a+")"}}if(e<0){var r=255-Math.round(255*e/t);return{backgroundColor:"rgb(255,"+r+","+r+")"}}return{}}}var Z,ee=Object.assign({},V.a,{"Grouped Column Chart":J(Z=Q,{type:"bar"},{barmode:"group"}),"Stacked Column Chart":J(Z,{type:"bar"},{barmode:"relative"}),"Grouped Bar Chart":J(Z,{type:"bar",orientation:"h"},{barmode:"group"},!0),"Stacked Bar Chart":J(Z,{type:"bar",orientation:"h"},{barmode:"relative"},!0),"Line Chart":J(Z),"Dot Chart":J(Z,{mode:"markers"},{},!0),"Area Chart":J(Z,{stackgroup:1}),"Scatter Chart":X(Z),"Multiple Pie Chart":J(Z,{type:"pie",scalegroup:1,hoverinfo:"label+value",textinfo:"none"},{},!0)});function te(e){return isNaN(e)||!isFinite(e)?"":Math.abs(e)>=1e8?e.toExponential(2):(e<0?"-":"")+Math.floor(Math.abs(e.toFixed(2))).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+(Math.abs(e)%1).toFixed(2).replace(/0*$/,"").replace(/\.$/,"").substr(1)}function ne(e){return te(Math.exp(e))}function ae(e){return te(100*Math.expm1(e))}H.aggregators["Exp Sum"]=H.aggregatorTemplates.sum(ne),H.aggregators["Exp Avg"]=H.aggregatorTemplates.average(ne),H.aggregators["Exp Stdev"]=H.aggregatorTemplates.stdev(1,ne),H.aggregators["Exp % Sum"]=H.aggregatorTemplates.sum(ae),H.aggregators["Exp % Avg"]=H.aggregatorTemplates.average(ae),H.aggregators["Exp % Stdev"]=H.aggregatorTemplates.stdev(1,ae);var re=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement(B.a,Object.assign({onChange:function(t){return e.setState(t)},renderers:ee,tableColorScaleGenerator:Y},this.props,this.state,{data:this.props.data}))}}]),t}(p.a.Component),ie=window.dfd,le=ie.DataFrame,oe=ie.Series,se=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"seasonal",value:function(e){var t=this.props.df,n=e.ticker;t instanceof le&&(n&&t.hasOwnProperty(n)||(n=t.columns[0],e.ticker=n),t=t[n]),t.dropnall({inplace:!0});var a=t.apply(Math.log);t=new le({returns:a.iloc(["1:"]).sub(a.values.slice(0,-1)).values},{index:t.index.slice(1)});var r=new oe(t.index).dt;return t.addColumn({values:r.year(),column:"year",inplace:!0}),t.addColumn({values:r.month().add(1),column:"month",inplace:!0}),t.addColumn({values:r.day().add(1),column:"day of week",inplace:!0}),t.addColumn({values:r.monthday(),column:"day of month",inplace:!0}),e.data=[t.columns].concat(t.values),e}},{key:"render",value:function(){var e=this,t=this.seasonal(this.state);return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-header",style:{zIndex:2}},"Chu k\u1ef3 l\u1ee3i nhu\u1eadn",this.props.df instanceof le&&p.a.createElement(p.a.Fragment,null,"\xa0c\u1ee7a",p.a.createElement(C,{className:"d-inline-flex ms-2",onChange:function(t){return e.changeTicker(t.value)},value:t.ticker||this.props.df.columns[0],options:this.props.df.columns}))),t.data&&p.a.createElement("div",{className:"card-body"},p.a.createElement(re,{data:t.data,aggregatorName:"Exp % Sum",vals:["returns"],rows:["year"],cols:["month"],rendererName:"Table Heatmap"})))}}]),t}(O),ce=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,n=e.ep;n.plot(t).line({x:n.index,layout:{margin:{l:40,r:8,b:32,t:40,pad:0}}})}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"render",value:function(){return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-header"},"T\u1ef7 tr\u1ecdng ch\u1ee9ng kho\xe1n"),p.a.createElement("div",{className:"card-body"},p.a.createElement("div",{id:this.props.id})))}}]),t}(p.a.Component),ue=window.dfd.Series;function de(e){return e.replace(/(^"|"$)/g,"")}var pe=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(s.a)(this,Object(c.a)(t).call(this,e));var a=document.getElementById("df").innerHTML.trim();"%(csv)s"===a&&(a="date,close,expose\n2022-10-03,1,0\n2022-10-04,3,70006\n2022-10-05,2,70700\n2022-10-06,4,71143\n2022-10-07,5,71239");var r=[],i=[],o=[];return a.split(/\r?\n/).slice(1).forEach((function(e){if(e){var t=e.split(",").map(de);r.push(t[0]),i.push(+t[1]),o.push(t[2]/1e5)}})),n.state={df:new ue(i,{index:r,config:{lowMemoryMode:!0}}),ep:new ue(o,{index:r,config:{lowMemoryMode:!0}})},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this,n=this.state,a=n.tab,r=n.df,i=n.ep;return"rets"===a?e=p.a.createElement(q,{id:"stocksRets",df:r}):"pred"===a?e=p.a.createElement(W,{id:"stocksPred",df:r}):"ep"===a?e=p.a.createElement(ce,{id:"stocksEp",ep:i}):"ssn"===a?e=p.a.createElement(se,{id:"stocksSsn",df:r}):(a="vola",e=p.a.createElement(D,{id:"stocksVola",df:r})),p.a.createElement(p.a.Fragment,null,p.a.createElement("ul",{className:"nav nav-tabs my-2"},p.a.createElement("li",{className:"nav-item",onClick:function(){return"vola"===a||t.setState({tab:"vola"})}},p.a.createElement("button",{className:"vola"===a?"nav-link active":"nav-link"},"\u0110\u1ed9 bi\u1ebfn \u0111\u1ed9ng")),p.a.createElement("li",{className:"nav-item",onClick:function(){return"rets"===a||t.setState({tab:"rets"})}},p.a.createElement("button",{className:"rets"===a?"nav-link active":"nav-link"},"L\u1ee3i nhu\u1eadn")),r.$data.length>20&&p.a.createElement("li",{className:"nav-item",onClick:function(){return"pred"===a||t.setState({tab:"pred"})}},p.a.createElement("button",{className:"pred"===a?"nav-link active":"nav-link"},"D\u1ef1 b\xe1o")),p.a.createElement("li",{className:"nav-item",onClick:function(){return"ep"===a||t.setState({tab:"ep"})}},p.a.createElement("button",{className:"ep"===a?"nav-link active":"nav-link"},"T\u1ef7 tr\u1ecdng")),p.a.createElement("li",{className:"nav-item",onClick:function(){return"ssn"===a||t.setState({tab:"ssn"})}},p.a.createElement("button",{className:"ssn"===a?"nav-link active":"nav-link"},"Chu k\u1ef3 l\u1ee3i nhu\u1eadn"))),e)}}]),t}(d.Component);m.a.render(p.a.createElement(pe,null),document.getElementById("root"))}},[[19,1,2]]]);