(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function r(t,r,o){return(r=function(t){var r=function(t){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}var o=["reddit.com","twitter.com","youtube.com"],n=["stackoverflow.com","notion.so","docs.google.com"],i={focusedTime:0,distractedTime:0,lastUpdated:(new Date).toDateString()};chrome.tabs.onUpdated.addListener((function(e,c,a){if("complete"===c.status&&a.url){var u=new URL(a.url).hostname;o.includes(u)?i.focusedTime+=1:n.includes(u)&&(i.distractedTime+=1),chrome.storage.local.get(["timeData"],(function(e){var o=e.timeData||[],n=(new Date).toDateString(),c=o.find((function(e){return e.date===n}));c?(c.focusedTime=i.focusedTime,c.distractedTime=i.distractedTime):o.push(function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?t(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({date:n},i)),chrome.storage.local.set({timeData:o},(function(){console.log("Daily data saved:",o)}))}))}})),chrome.alarms.create("weeklyReport",{periodInMinutes:10080}),chrome.alarms.onAlarm.addListener((function(e){"weeklyReport"===e.name&&chrome.storage.local.get(["timeData","userEmail"],(function(e){var t=e.timeData||[],r=e.userEmail;if(r&&0!==t.length){var o=t.reduce((function(e,t){return e+t.focusedTime}),0),n=t.reduce((function(e,t){return e+t.distractedTime}),0),i="\n      <h1>Weekly Time Report</h1>\n      <p>Focused Time: ".concat(o," minutes</p>\n      <p>Distracted Time: ").concat(n,' minutes</p>\n      <div id="chart"></div>\n    ');sendEmail(r,"Weekly Time Report",i),chrome.storage.local.set({timeData:[]})}}))}))})();