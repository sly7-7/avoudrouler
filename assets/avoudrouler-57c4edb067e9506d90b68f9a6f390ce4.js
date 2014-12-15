define("avoudrouler/adapters/application",["ember-data","avoudrouler/config/environment","exports"],function(e,t,r){"use strict";var a=e["default"],n=t["default"];r["default"]=a.FirebaseAdapter.extend({firebase:new window.Firebase("https://"+n.firebaseInstance+".firebaseio.com")})}),define("avoudrouler/app",["ember","ember/resolver","ember/load-initializers","avoudrouler/config/environment","exports"],function(e,t,r,a,n){"use strict";var i=e["default"],d=t["default"],o=r["default"],c=a["default"];i.MODEL_FACTORY_INJECTIONS=!0;var l=i.Application.extend({modulePrefix:c.modulePrefix,podModulePrefix:c.podModulePrefix,Resolver:d});o(l,c.modulePrefix),n["default"]=l}),define("avoudrouler/controllers/race",["ember","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.ObjectController.extend({routeSrc:function(){return"assets/images/"+this.get("route")}.property("route")})}),define("avoudrouler/initializers/export-application-global",["ember","avoudrouler/config/environment","exports"],function(e,t,r){"use strict";function a(e,t){var r=n.String.classify(i.modulePrefix);i.exportApplicationGlobal&&(window[r]=t)}var n=e["default"],i=t["default"];r.initialize=a,r["default"]={name:"export-application-global",initialize:a}}),define("avoudrouler/initializers/initialize-torii-callback",["torii/redirect-handler","exports"],function(e,t){"use strict";var r=e["default"];t["default"]={name:"torii-callback",before:"torii",initialize:function(e,t){t.deferReadiness(),r.handle(window.location.toString())["catch"](function(){t.advanceReadiness()})}}}),define("avoudrouler/initializers/initialize-torii-session",["torii/configuration","torii/bootstrap/session","exports"],function(e,t,r){"use strict";var a=e["default"],n=t["default"];r["default"]={name:"torii-session",after:"torii",initialize:function(e){a.sessionServiceName&&(n(e,a.sessionServiceName),e.injection("adapter",a.sessionServiceName,"torii:session"))}}}),define("avoudrouler/initializers/initialize-torii",["torii/bootstrap/torii","torii/configuration","exports"],function(e,t,r){"use strict";var a=e["default"],n=t["default"],i={name:"torii",initialize:function(e,t){a(e);for(var r in n.providers)n.providers.hasOwnProperty(r)&&e.lookup("torii-provider:"+r);t.inject("route","torii","torii:main")}};window.DS&&(i.after="store"),r["default"]=i}),define("avoudrouler/models/player",["ember-data","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Model.extend({name:r.attr("string"),lastName:r.attr("string"),adress:r.attr("string"),zipCode:r.attr("number"),city:r.attr("string"),mail:r.attr("string")})}),define("avoudrouler/models/race-type",["ember-data","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Model.extend({name:r.attr("string"),route:r.attr("string"),bibCode:r.attr("number")})}),define("avoudrouler/models/race",["ember-data","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Model.extend({year:r.attr("number"),startTimestamp:r.attr(),endTimestamp:r.attr(),raceType:r.belongsTo(),teams:r.hasMany()})}),define("avoudrouler/models/registration",["ember-data","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Model.extend({validated:r.attr({defaultValue:!1}),players:r.hasMany(),race:r.belongsTo()})}),define("avoudrouler/models/team",["ember-data","ember","exports"],function(e,t,r){"use strict";{var a=e["default"];t["default"]}r["default"]=a.Model.extend({bibNumber:a.attr(),race:a.belongsTo(),players:a.hasMany(),arrivalTimestamp:a.attr()})}),define("avoudrouler/router",["ember","avoudrouler/config/environment","exports"],function(e,t,r){"use strict";var a=e["default"],n=t["default"],i=a.Router.extend({location:n.locationType});i.map(function(){this.route("home"),this.route("description"),this.resource("races",function(){this.resource("race",{path:":race_name"})}),this.route("afterRace"),this.route("gallery"),this.route("registrations",function(){this.route("new")})}),r["default"]=i}),define("avoudrouler/routes/index",["ember","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Route.extend({beforeModel:function(){var e=this;return this.get("session").open("firebase-password").then(function(){return e.transitionTo("home")})}})}),define("avoudrouler/routes/race",["ember","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Route.extend({model:function(e){return this.modelFor("races").findBy("name",e.race_name)},serialize:function(e){return{race_name:e.get("name")}}})}),define("avoudrouler/routes/races",["ember","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Route.extend({model:function(){return this.store.find("race-type")}})}),define("avoudrouler/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createTextNode("Accueil");return t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}(),t=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createTextNode("Description");return t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}(),r=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createTextNode("Epreuves");return t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}(),a=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createTextNode("Inscriptions");return t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}(),n=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createTextNode("L'après course");return t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}(),i=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createTextNode("Gallerie");return t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}();return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("h1"),a=e.createTextNode("Avoudrouler");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("h2"),a=e.createTextNode("Le site du bike and run d'Avoudrey");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("nav");e.setAttribute(r,"class","navbar navbar-default"),e.setAttribute(r,"role","navigation");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","container-fluid");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","collapse navbar-collapse");var i=e.createTextNode("\n      ");e.appendChild(n,i);var i=e.createElement("ul");e.setAttribute(i,"class","nav navbar-nav");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(d,o,c){var l=o.dom,s=o.hooks,u=s.content;l.detectNamespace(c),null===this.cachedFragment&&(this.cachedFragment=this.build(l));var p=l.cloneNode(this.cachedFragment,!0),h=p.childNodes[4].childNodes[1].childNodes[1].childNodes[1],m=l.createMorphAt(h.childNodes[1],-1,-1),v=l.createMorphAt(h.childNodes[3],-1,-1),f=l.createMorphAt(h.childNodes[5],-1,-1),x=l.createMorphAt(h.childNodes[7],-1,-1),g=l.createMorphAt(h.childNodes[9],-1,-1),N=l.createMorphAt(h.childNodes[11],-1,-1),b=l.createMorphAt(p,5,6,c);return u(m,"link-to",d,["home"],{},{morph:m,template:e},o),u(v,"link-to",d,["description"],{},{morph:v,template:t},o),u(f,"link-to",d,["races"],{},{morph:f,template:r},o),u(x,"link-to",d,["registrations"],{},{morph:x,template:a},o),u(g,"link-to",d,["afterRace"],{},{morph:g,template:n},o),u(N,"link-to",d,["gallery"],{},{morph:N,template:i},o),u(b,"outlet",d,[],{},{morph:b},o),p}}}())}),define("avoudrouler/templates/description",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2"),a=e.createTextNode("Bike And Run : De quoi s'agit-il ??");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("p"),a=e.createTextNode("Littéralement traduit en Français, il s’agit d’une épreuve de vélo et course à pied. Cette épreuve sportive consiste, sur un parcours défini, par équipe de deux personnes, à partir avec un seul VTT, pour deux. Entre la ligne de départ et la ligne d’arrivée, les équipes mettent en place la stratégie de leur choix, à savoir, soit se relayer, soit une personne fait tout le parcours à pied et l’autre tout le parcours à vélo. Seuls impératifs, franchir la ligne d'arrivée ensemble et ne pas être deux sur le vélo !!\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}())}),define("avoudrouler/templates/home",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"class","texte-accueil");var a=e.createTextNode("Dimanche 6 Juillet 2014");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("h2");e.setAttribute(r,"class","texte-accueil");var a=e.createTextNode("6e Edition");return e.appendChild(r,a),e.appendChild(t,r),t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}())}),define("avoudrouler/templates/race",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("img");e.setAttribute(r,"class","img-responsive"),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(e,t,r){var a=t.dom,n=t.hooks,i=n.content,d=n.get,o=n.element;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var c=a.cloneNode(this.cachedFragment,!0),l=c.childNodes[2],s=a.createMorphAt(c.childNodes[0],-1,-1);return i(s,"name",e,[],{},{morph:s},t),o(l,"bind-attr",e,[],{src:d(e,"routeSrc",t)},{element:l},t),c}}}())}),define("avoudrouler/templates/races",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("");e.appendChild(t,r);var r=e.createTextNode("");return e.appendChild(t,r),t},render:function(e,t,r){var a=t.dom,n=t.hooks,i=n.content;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var d=a.cloneNode(this.cachedFragment,!0);a.repairClonedNode(d,[0,1]);var o=a.createMorphAt(d,0,1,r);return i(o,"race.name",e,[],{},{morph:o},t),d}}}();return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("        ");e.appendChild(t,r);var r=e.createElement("li");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(t,r,a){var n=r.dom,i=r.hooks,d=i.get,o=i.content;n.detectNamespace(a),null===this.cachedFragment&&(this.cachedFragment=this.build(n));var c=n.cloneNode(this.cachedFragment,!0),l=n.createMorphAt(c.childNodes[1],-1,-1);return o(l,"link-to",t,["race",d(t,"race",r)],{},{morph:l,template:e},r),c}}}();return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","container-fluid");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","col-xs-3");var i=e.createTextNode("\n      ");e.appendChild(n,i);var i=e.createElement("ul");e.setAttribute(i,"class","nav nav-pills nav-stacked");var d=e.createTextNode("\n");e.appendChild(i,d);var d=e.createTextNode("      ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","col-xs-9");var i=e.createTextNode("\n      ");e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(t,r,a){var n=r.dom,i=r.hooks,d=i.get,o=i.content;n.detectNamespace(a),null===this.cachedFragment&&(this.cachedFragment=this.build(n));var c=n.cloneNode(this.cachedFragment,!0),l=c.childNodes[0].childNodes[1],s=n.createMorphAt(l.childNodes[1].childNodes[1],0,1),u=n.createMorphAt(l.childNodes[3],0,1);return o(s,"each",t,[d(t,"model",r)],{keyword:"race"},{morph:s,template:e},r),o(u,"outlet",t,[],{},{morph:u},r),c}}}())}),define("avoudrouler/templates/races/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("p"),a=e.createTextNode("Trois parcours seront proposés aux participants, un de 5 kms réservé exclusivement aux moins de 12 ans, un de 13 kms et un de 22 Kms. Cette épreuve présente l’avantage de s’adresser à un très large public, les vrais sportifs avec un profil de triathlètes, mais surtout les sportifs du Dimanche qui pourront, grâce aux multiples catégories et classements (seniors masculins, seniors féminines , équipes mixtes, moins de 12 ans, parent / enfant), se faire plaisir sur des parcours exigeants, mais à la portée de tous !! Et c’est bien là l’esprit de cette épreuve, une course qui se veut familiale et l’occasion pour tous de se mesurer aux meilleurs sportifs de la région et se lancer un défi individuel.");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("p"),a=e.createTextNode("Comme pour l'année 2013, une randonnée pédestre est proposée aux marcheurs.");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}())}),define("avoudrouler/templates/registrations/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createTextNode("vous inscrire en ligne");return t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}();return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("p"),a=e.createTextNode("Inscriptions préalables avec tarif préferentiel de 8€ pour les adultes et 6€ pour les moins de 15 ans concernant les parcours découverte, familiale et sportif et de 3€ pour la randonnée pédestre.\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("p"),a=e.createTextNode("\n\nVous pouvez ");e.appendChild(r,a);var a=e.createTextNode(" ou remplir votre bulletin d'inscription directement:\n");e.appendChild(r,a);var a=e.createElement("ul"),n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("li"),i=e.createTextNode("A la boutique Clarendon Prêt à Porter, 2 rue St Michel à Valdahon");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("li"),i=e.createTextNode("Au Super U Valdahon, le 05 Juillet de 10h à 12h");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","alert alert-danger");var n=e.createTextNode("Il est noté qu'aucun remboursement ne pourra être effectué sur inscription préalable même en cas d'annulation de l'épreuve.");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("p"),a=e.createTextNode("Inscriptions sur place à  partir de 08h00 avec tarif de 11€ pour les adultes et 9€ pour les moins de 15 ans concernant les parcours découverte, familiale et sportif. Pour la randonnée pédestre le tarif reste inchangé (3€).\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(t,r,a){var n=r.dom,i=r.hooks,d=i.content;n.detectNamespace(a),null===this.cachedFragment&&(this.cachedFragment=this.build(n));var o=n.cloneNode(this.cachedFragment,!0),c=n.createMorphAt(o.childNodes[2],0,1);return d(c,"link-to",t,["registrations.new"],{},{morph:c,template:e},r),o}}}())}),define("avoudrouler/templates/registrations/new",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,cachedFragment:null,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("p"),a=e.createTextNode("Ici je m'inscris en ligne");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("h1"),a=e.createTextNode("Formulaire");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("p"),a=e.createTextNode("\nPour confirmer votre inscription, merci de nous retourner le formulaire d'inscription et le renvoyer accompagné du rêglement (ordre des chèques: AS Avoudrey) à l'adresse suivante:\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("p"),a=e.createTextNode("QUERRY Sylvie");e.appendChild(r,a);var a=e.createElement("br");e.appendChild(r,a);var a=e.createTextNode("\n1, rue Mange");e.appendChild(r,a);var a=e.createElement("br");e.appendChild(r,a);var a=e.createTextNode("\n25690 Avoudrey");e.appendChild(r,a);var a=e.createElement("br");e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(e,t,r){var a=t.dom;a.detectNamespace(r),null===this.cachedFragment&&(this.cachedFragment=this.build(a));var n=a.cloneNode(this.cachedFragment,!0);return n}}}())}),define("avoudrouler/torii-adapters/firebase-password",["ember","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Object.extend({open:function(e){return r.RSVP.resolve({authData:e})}})}),define("avoudrouler/torii-providers/firebase-password",["ember","avoudrouler/config/environment","exports"],function(e,t,r){"use strict";var a=e["default"],n=t["default"],i=new window.Firebase("https://"+n.firebaseInstance+".firebaseio.com");r["default"]=a.Object.extend({open:function(){return new a.RSVP.Promise(function(e,t){i.authWithPassword({email:"sylvain.mina@gmail.com",password:"7micka77"},function(r,a){null===r?(console.log("User ID: "+a.uid+", Provider: "+a.provider),e(a)):(console.log("Error authenticating user:",r),t(r))})})}})}),define("avoudrouler/config/environment",["ember"],function(e){var t="avoudrouler";try{var r=t+"/config/environment",a=e["default"].$('meta[name="'+r+'"]').attr("content"),n=JSON.parse(unescape(a));return{"default":n}}catch(i){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests?require("avoudrouler/tests/test-helper"):require("avoudrouler/app")["default"].create({});