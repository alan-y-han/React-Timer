(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{12:function(t,e,V){t.exports=V.p+"static/media/notification.edf88af1.mp3"},13:function(t,e,V){t.exports=V(25)},18:function(t,e,V){},19:function(t,e,V){},25:function(t,e,V){"use strict";V.r(e);var n=V(0),a=V.n(n),i=V(11),s=V.n(i),o=(V(18),V(2)),r=V(3),c=V(5),l=V(4),u=function(t){Object(c.a)(V,t);var e=Object(l.a)(V);function V(){return Object(o.a)(this,V),e.apply(this,arguments)}return Object(r.a)(V,[{key:"render",value:function(){return 0!==this.props.seconds?a.a.createElement("div",null,a.a.createElement("h1",null,"Time left: ",+this.props.seconds)):a.a.createElement("div",null,a.a.createElement("h1",null,"Time left: Finished"))}}]),V}(a.a.Component),m=(V(19),function(t){Object(c.a)(V,t);var e=Object(l.a)(V);function V(){return Object(o.a)(this,V),e.apply(this,arguments)}return Object(r.a)(V,[{key:"render",value:function(){var t=this.props,e=t.enabled,V=t.onPress;return a.a.createElement("button",{className:"button",onClick:V,disabled:void 0!==e&&!e},this.props.children)}}]),V}(a.a.Component)),d=V(8),A=V(9),f=function(t){Object(c.a)(V,t);var e=Object(l.a)(V);function V(){return Object(o.a)(this,V),e.apply(this,arguments)}return Object(r.a)(V,[{key:"render",value:function(){var t=this.props,e=t.stageNo,V=t.totalStages,n=t.stageName;return a.a.createElement("div",null,a.a.createElement("h1",null,"Stage ".concat(e," / ").concat(V,": ").concat(n)))}}]),V}(a.a.Component),h=function t(e,V){var n=this;Object(o.a)(this,t),this.callback=void 0,this.timeInterval=void 0,this.timerId=void 0,this.start=function(){n.callback?n.timerId?console.warn("Tried to start timer, but it is already running"):n.timerId=setInterval(n.callback,n.timeInterval):console.error("Tried to start timer without a callback")},this.stop=function(){n.timerId?(clearInterval(n.timerId),n.timerId=void 0):console.warn("Tried to stop timer, but it is already stopped")},this.callback=e,this.timeInterval=V},g=V(12),b=V.n(g),p=function(t){Object(c.a)(V,t);var e=Object(l.a)(V);function V(t){var n;return Object(o.a)(this,V),(n=e.call(this,t)).stages=[{name:"Intro",seconds:72},{name:"Pre Magitek Colossus",seconds:175},{name:"Post Magitek Colossus",seconds:51},{name:"Magitek Armor",seconds:65},{name:"Nero",seconds:337},{name:"Gaius 1",seconds:101},{name:"Gaius 2",seconds:290},{name:"Ultima",seconds:177},{name:"Between Ultima Phases",seconds:310},{name:"Lahabrea",seconds:240}],n.defaultState={secondsLeft:n.stages[0].seconds,currentStage:0,timerRunning:!1},n.timer=void 0,n.notificationSound=void 0,n.silentSound="data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",n.nextButtonCallback=function(){if(n.notificationSound.src=n.silentSound,n.notificationSound.currentTime=0,n.notificationSound.play(),n.notificationSound.src=b.a,!n.state.timerRunning){var t=n.state.currentStage+1;0===n.state.currentStage&&0!==n.state.secondsLeft?n.startTimer():t<n.stages.length&&(n.startTimer(),n.setState({currentStage:t,secondsLeft:n.stages[t].seconds}))}},n.resetButtonCallback=function(){n.clearTimer(),n.setState(n.getDefaultState())},n.getDefaultState=function(){return n.defaultState},n.tick=function(){0===n.state.secondsLeft-1&&(n.clearTimer(),n.notificationSound.currentTime=0,n.notificationSound.play()),n.setState((function(t){return{secondsLeft:t.secondsLeft-1}}))},n.startTimer=function(){n.timer.start(),n.setState({timerRunning:!0})},n.clearTimer=function(){n.timer.stop(),n.setState({timerRunning:!1})},n.state=n.getDefaultState(),n.timer=new h(n.tick,1e3),n.notificationSound=new Audio,n.notificationSound.volume=.7,n}return Object(r.a)(V,[{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"render",value:function(){var t=(this.state.currentStage!==this.stages.length-1||0!==this.state.secondsLeft)&&!this.state.timerRunning;return a.a.createElement("div",{className:"App"},a.a.createElement(m,{onPress:this.resetButtonCallback},a.a.createElement("div",null,"Reset"),a.a.createElement(d.a,{icon:A.b})),a.a.createElement(f,{stageNo:this.state.currentStage+1,totalStages:this.stages.length,stageName:this.stages[this.state.currentStage].name}),a.a.createElement(u,{seconds:this.state.secondsLeft}),a.a.createElement(m,{onPress:this.nextButtonCallback,enabled:t},a.a.createElement("div",null,"Next"),a.a.createElement(d.a,{icon:A.a})))}}]),V}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.6e96782d.chunk.js.map