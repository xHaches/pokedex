(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JTxt:function(t,o,n){"use strict";n.r(o),n.d(o,"PokemonModule",function(){return D});var e=n("SVse"),i=n("iInd"),a=n("lJxs"),c=n("JIr8"),s=n("vkgz"),r=n("quSY"),b=n("8Y7J"),l=n("AytR"),m=n("IheW");let p=(()=>{class t{constructor(t){this.http=t,this.baseUrl=l.a.baseURL,this._pokemonDetails=[]}getPokemons(t,o){return this.http.get(`${this.baseUrl}?offset=${t}&limit=${o}`)}getPokemonById(t){return this.http.get(`${this.baseUrl}/${t}`)}addPokemonDetails(t){this._pokemonDetails.push(t)}getPokemonsDetails(){return[...this._pokemonDetails]}}return t.\u0275fac=function(o){return new(o||t)(b.Qb(m.a))},t.\u0275prov=b.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("f0Cb"),d=n("XiUz"),h=n("bTqV"),f=n("Wp6s");const g=function(t){return["/list/detail",t]};function k(t,o){if(1&t&&(b.Mb(0,"mat-card",6),b.Mb(1,"mat-card-header"),b.Kb(2,"img",7),b.Mb(3,"mat-card-title"),b.pc(4),b.Lb(),b.Mb(5,"mat-card-subtitle"),b.pc(6),b.Lb(),b.Lb(),b.Mb(7,"mat-card-actions"),b.Mb(8,"button",8),b.pc(9,"Ver m\xe1s"),b.Lb(),b.Lb(),b.Lb()),2&t){const t=o.$implicit;b.zb(2),b.bc("src",t.sprites.front_default,b.hc),b.zb(2),b.qc(t.name),b.zb(2),b.qc("#"+t.id),b.zb(2),b.bc("routerLink",b.cc(4,g,t.id))}}let M=(()=>{class t{constructor(t){this.pokemonService=t,this.pokemons=[],this.subscriptions=new r.a,this.offset=0,this.limit=20}get pokemonsDetails(){return this.pokemonService.getPokemonsDetails()}ngOnInit(){this.pokemonsDetails.length>0||this.loadPokemons()}loadPokemons(){this.pokeSubscription=this.pokemonService.getPokemons(this.offset,this.limit).pipe(function(...t){const o=t.length;if(0===o)throw new Error("list of properties cannot be empty.");return n=>Object(a.a)(function(t,o){return n=>{let e=n;for(let i=0;i<o;i++){const o=null!=e?e[t[i]]:void 0;if(void 0===o)return;e=o}return e}}(t,o))(n)}("results"),Object(c.a)(t=>[]),Object(s.a)(t=>this.pokemons=t),Object(s.a)(t=>t.forEach((t,o)=>{const n=t.url.slice(t.url.length-4,-1);this.pokemons[o].id=n.replace(/[A-Za-z]*\//,"")})),Object(s.a)(t=>t.forEach((t,o)=>{this.subscriptions.add(this.pokemonService.getPokemonById(t.id).subscribe(t=>{this.pokemonService.addPokemonDetails(t)}))}))).subscribe()}ngOnDestroy(){var t,o;null===(t=this.pokeSubscription)||void 0===t||t.unsubscribe(),null===(o=this.subscriptions)||void 0===o||o.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(b.Jb(p))},t.\u0275cmp=b.Db({type:t,selectors:[["app-pokemons"]],decls:11,vars:1,consts:[[1,"text-center"],["fxLayout","row wrap","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","20px"],["class","card","fxFlex","20","fxFlex.lg","15","fxFlex.sm","30",4,"ngFor","ngForOf"],["fxLayout","column",1,"mb"],[1,"spacer"],["mat-raised-button","","color","primary","type","button",1,"login-button",3,"click"],["fxFlex","20","fxFlex.lg","15","fxFlex.sm","30",1,"card"],["mat-card-avatar","",3,"src"],["mat-button","","color","primary",3,"routerLink"]],template:function(t,o){1&t&&(b.Mb(0,"h1",0),b.pc(1,"Listado de Pokemon"),b.Lb(),b.Kb(2,"mat-divider"),b.Kb(3,"br"),b.Mb(4,"div",1),b.oc(5,k,10,6,"mat-card",2),b.Lb(),b.Mb(6,"div",3),b.Kb(7,"div",4),b.Mb(8,"button",5),b.Ub("click",function(){return o.loadPokemons()}),b.pc(9," Cargar M\xe1s "),b.Lb(),b.Kb(10,"div",4),b.Lb()),2&t&&(b.zb(5),b.bc("ngForOf",o.pokemonsDetails))},directives:[u.a,d.c,d.b,d.d,e.i,h.a,f.a,d.a,f.e,f.c,f.i,f.h,f.b,i.b],styles:["@media (min-width:400px){.card[_ngcontent-%COMP%]{margin-bottom:5%}}button[_ngcontent-%COMP%]{width:80%;margin:5% auto;border-radius:8px}"]}),t})();var L=n("eIep"),v=n("wZkO"),x=n("5RNC");function w(t,o){if(1&t&&(b.Mb(0,"p",14),b.pc(1),b.Lb()),2&t){const t=o.$implicit;b.zb(1),b.rc(" Tipo: ",t.type.name," ")}}function y(t,o){if(1&t&&(b.Mb(0,"strong"),b.pc(1),b.Lb()),2&t){const t=o.$implicit;b.zb(1),b.rc("",t.ability.name," ")}}function O(t,o){if(1&t&&(b.Mb(0,"div",15),b.Mb(1,"p",14),b.pc(2),b.Kb(3,"mat-slider",16),b.Lb(),b.Lb()),2&t){const t=o.$implicit;b.zb(2),b.sc(" ",t.stat.name,": ",t.base_stat," "),b.zb(1),b.bc("value",t.base_stat)}}function C(t,o){if(1&t&&(b.Mb(0,"strong"),b.pc(1),b.Lb()),2&t){const t=o.$implicit;b.zb(1),b.rc(" ",t.move.name," ")}}const P=[{path:"",component:M},{path:"detail/:id",component:(()=>{class t{constructor(t,o){this.pokemonService=t,this.activatedRoute=o}ngOnInit(){this.routeSubscription=this.activatedRoute.params.pipe(Object(L.a)(({id:t})=>this.pokemonService.getPokemonById(t))).subscribe(t=>this.pokemon=t)}ngOnDestroy(){this.routeSubscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(b.Jb(p),b.Jb(i.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-pokemon-detail"]],decls:29,vars:12,consts:[["fxLayout","column","fxLayoutGap","30px",1,"card"],["mat-card-avatar","",1,"example-header-image",3,"src"],["mat-card-image","",3,"src"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1440 320"],["fill","#0099ff","fill-opacity","1","d","M0,96L40,85.3C80,75,160,53,240,48C320,43,400,53,480,85.3C560,117,640,171,720,186.7C800,203,880,181,960,149.3C1040,117,1120,75,1200,58.7C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"],[1,"tabs"],[1,"mat-elevation-z12"],["mat-stretch-tabs",""],["label","Acerca de"],["class","mt",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["label","Estad\xedsticas"],["fxLayout","column",4,"ngFor","ngForOf"],["label","Movimientos"],[1,"mt"],["fxLayout","column"],["min","0","max","100",3,"value"]],template:function(t,o){1&t&&(b.Mb(0,"mat-card",0),b.Mb(1,"mat-card-header"),b.Kb(2,"img",1),b.Mb(3,"mat-card-title"),b.pc(4),b.Lb(),b.Mb(5,"mat-card-subtitle"),b.pc(6),b.Lb(),b.Lb(),b.Mb(7,"mat-card-content"),b.Kb(8,"img",2),b.Xb(),b.Mb(9,"svg",3),b.Kb(10,"path",4),b.Lb(),b.Wb(),b.Mb(11,"div",5),b.Mb(12,"mat-card",6),b.Mb(13,"mat-tab-group",7),b.Mb(14,"mat-tab",8),b.oc(15,w,2,1,"p",9),b.Mb(16,"p"),b.pc(17),b.Lb(),b.Mb(18,"p"),b.pc(19),b.Lb(),b.Mb(20,"p"),b.pc(21," Habilidades: "),b.oc(22,y,2,1,"strong",10),b.Lb(),b.Lb(),b.Mb(23,"mat-tab",11),b.oc(24,O,4,3,"div",12),b.Lb(),b.Mb(25,"mat-tab",13),b.Mb(26,"p",14),b.pc(27," Movimientos: "),b.oc(28,C,2,1,"strong",10),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(2),b.bc("src",null==o.pokemon||null==o.pokemon.sprites?null:o.pokemon.sprites.front_default,b.hc),b.zb(2),b.qc(null==o.pokemon?null:o.pokemon.name),b.zb(2),b.rc("Id: #",null==o.pokemon?null:o.pokemon.id,""),b.zb(2),b.bc("src",null==o.pokemon||null==o.pokemon.sprites?null:o.pokemon.sprites.front_shiny,b.hc),b.zb(7),b.bc("ngForOf",null==o.pokemon?null:o.pokemon.types),b.zb(2),b.sc(" Peso: ",null==o.pokemon?null:o.pokemon.weight,"lbs. (",(.45*((null==o.pokemon?null:o.pokemon.weight)||0)).toFixed(2),"Kg.) "),b.zb(2),b.sc(" Altura: ",null==o.pokemon?null:o.pokemon.height,"in. (",(2.54*((null==o.pokemon?null:o.pokemon.height)||0)).toFixed(2),"cm.) "),b.zb(3),b.bc("ngForOf",null==o.pokemon?null:o.pokemon.abilities),b.zb(2),b.bc("ngForOf",null==o.pokemon?null:o.pokemon.stats),b.zb(4),b.bc("ngForOf",null==o.pokemon?null:o.pokemon.moves))},directives:[f.a,d.c,d.d,f.e,f.c,f.i,f.h,f.d,f.f,v.b,v.a,e.i,x.a],styles:[".card[_ngcontent-%COMP%]{width:75%}svg[_ngcontent-%COMP%]{z-index:100}.tabs[_ngcontent-%COMP%]{top:0;margin:0;padding:0;width:100%;height:100%;display:block}@media (max-width:600px){.tabs[_ngcontent-%COMP%]{overflow:hidden}.card[_ngcontent-%COMP%]{width:90%}}mat-card[_ngcontent-%COMP%]{width:90%;margin:5% auto;border-radius:8px}@media (max-width:600px){mat-card[_ngcontent-%COMP%]{width:80%}}mat-checkbox[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:80%;display:block;margin:auto}mat-card-content[_ngcontent-%COMP%]{margin-top:20px}.login-button[_ngcontent-%COMP%]{display:block;width:80%;margin:20px auto}mat-grid-tile[_ngcontent-%COMP%]{background:#add8e6}"]}),t})()},{path:"**",pathMatch:"full",redirectTo:""}];let z=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(o){return new(o||t)},imports:[[i.d.forChild(P)],i.d]}),t})();var F=n("hctd"),_=n("YUcS");let D=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(o){return new(o||t)},imports:[[e.b,z,F.a,_.a]]}),t})()}}]);