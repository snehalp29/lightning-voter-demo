!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.ngCustomElement=t()}(this,function(){var n=/^((?:x|data)[:\-_])/,t=/^ngce[:\-_][^:\-_]+[:\-_]/;function e(e){return e.toLowerCase().replace(n,"").replace(t,"").replace(/_(.)/g,function(n,t){return t.toUpperCase()})}var r=["$exceptionHandler","$parse","$rootScope",function(n,t,r){var o=/^(on[a-z]+|formaction)$/;function i(t){try{t()}catch(t){n(t)}}return{restrict:"A",priority:100,compile:function(n,a){var u=Object.keys(a).filter(function(n){return n.startsWith("ngceProp")}).map(function(n){return[e(a.$attr[n]),t(a[n])]}),c=Object.keys(a).filter(function(n){return n.startsWith("ngceOn")}).map(function(n){return[e(a.$attr[n]),t(a[n])]});return{pre:function(n,t){var e=u.map(function(e){var r=e[0],i=e[1];if(o.test(r))throw new Error("Property bindings for HTML DOM event properties are disallowed.");var a=function(n){return t.prop(r,n)};return a(i(n)),n.$watch(i,a)});t.on("$destroy",function(){return e.forEach(i)})},post:function(n,t){c.forEach(function(e){var o=e[1];t.on(e[0],function(t){var e=o.bind(null,n,{$event:t=t.originalEvent||t});r.$$phase?i(e):n.$apply(e)})})}}}}}];return angular.module("ngCustomElement",[]).directive("ngCustomElement",r).name});
//# sourceMappingURL=ng-custom-element.umd.js.map
