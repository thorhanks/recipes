var q=Object.defineProperty,N=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var j=(t,l,a)=>l in t?q(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,k=(t,l)=>{for(var a in l||(l={}))H.call(l,a)&&j(t,a,l[a]);if(U)for(var a of U(l))Q.call(l,a)&&j(t,a,l[a]);return t},D=(t,l)=>N(t,F(l));import{q as A,o as r,c as d,a as i,r as v,t as h,F as S,b as w,n as C,d as E,m as W,e as L,f as z,g,h as K,i as P,j as G,k as O,l as R,w as T,p as X,s as J}from"./vendor.574795a1.js";const Z=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};Z();const M="PLUGIN-URL-PARAM-SYNC__SET-PARAM-VALUE";function ee(t=[]){return l=>{var a=A.parse(window.location.search),c=te(t,a);l.registerModule("urlParameters",{state:c,mutations:{[M](o,{key:n,value:s,sync:m}){o[n]=s;let y=t.find(p=>p.key===n);y&&m!==!1&&V(n,s,y.history)}}}),window.addEventListener("popstate",()=>{let o=A.parse(window.location.search);Object.keys(o).forEach(n=>{l.commit(M,{key:n,value:o[n],sync:!1})})}),Object.keys(c).forEach(o=>{V(o,c[o],!1)})}}function te(t,l={}){let a={};for(let c of t){let o=c.key,n=Object.keys(l).includes(o)?l[o]:c.default;a[o]=n}return a}function V(t,l,a=!0){const c=window.location.href.replace(window.location.search,"");let o=A.stringify(A.parse(window.location.search)),n=A.parse(window.location.search);n[t]=l;let s=A.stringify(n);o!=s&&(a?window.history.pushState({},"",`${c}?${s}`):window.history.replaceState({},"",`${c}?${s}`))}var B={grid:"GRID",list:"LIST"},b=(t,l)=>{for(const[a,c]of l)t[a]=c;return t};const le={name:"LayoutSidebarPage"},se={class:"h-full flex flex-col text-center md:flex-row"},ae={class:"p-5 pb-2 md:text-right md:p-14",style:{"background-color":"rgba(255, 255, 255, 0.25)"}},ne={class:"flex-1 overflow-y-auto p-5 md:text-left pb-20 md:p-14"};function oe(t,l,a,c,o,n){return r(),d("div",se,[i("div",ae,[v(t.$slots,"sidebar")]),i("div",ne,[v(t.$slots,"content")])])}var ie=b(le,[["render",oe]]);function I(t,l,a=!0){if(!Array.isArray(t)||!l||!t.length)return[];let c=a?1:-1,o=a?-1:1;const n=s=>(m,y)=>m[s]>y[s]?c:y[s]>m[s]?o:0;return t.concat().sort(n(l))}const re={},ce={SET_SELECTED_STYLES_KEYS:"SetSelectedStyleKeys",SET_SELECTED_TAG_KEYS:"SetSelectedTagKeys",SET_SELECTED_GRID_TYPE:"SetSelectedGridType",SET_SEARCH_TEXT:"SetSearchText"},de={};var x={getters:re,mutations:ce,actions:de};function e(t){return t?(t^Math.random()*16>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}var f={cajun:{key:e(),label:"Cajun"},mexican:{key:e(),label:"Mexican"},other:{key:e(),label:"Other"}},u={instantPot:{key:e(),label:"Instant pot"},marinade:{key:e(),label:"Marinade"},beans:{key:e(),label:"Beans"},rice:{key:e(),label:"Rice"},pork:{key:e(),label:"Pork"},beef:{key:e(),label:"Beef"},seafood:{key:e(),label:"Seafood"},casserole:{key:e(),label:"Casserole"},pasta:{key:e(),label:"Pasta"},chicken:{key:e(),label:"Chicken"},salad:{key:e(),label:"Salad"},quinoa:{key:e(),label:"Quinoa"}};const ue={name:"BaseNavMenu",props:{title:{type:String,default:null},size:{type:String,default:"lg",validator:t=>["lg","md"].includes(t)},options:{type:Array,default:()=>[]},selectedOptionKeys:{type:Array,default:()=>[]}},emits:["change"],methods:{selectOption(t){let l=this.selectedOptionKeys.includes(t),a=this.selectedOptionKeys;l?a=a.filter(c=>c!==t):a=[...this.selectedOptionKeys,t],this.$emit("change",a)}}},pe={class:"text-left md:text-right font-sketch"},me={class:"text-highlight1 uppercase text-base md:text-xl mb-0 md:mb-2"},ye=["onClick"],he={key:0,class:"mx-2 opacity-50 md:hidden"};function be(t,l,a,c,o,n){return r(),d("div",pe,[i("div",me,h(a.title),1),(r(!0),d(S,null,w(a.options,(s,m)=>(r(),d("div",{key:s.key,class:"inline-block md:block"},[i("span",{class:C(["cursor-pointer text-subtext hover:text-text text-lg",{"md:text-3xl":a.size==="lg","md:text-xl":a.size==="md","text-highlight2":a.selectedOptionKeys.includes(s.key),"hover:text-highlight2":a.selectedOptionKeys.includes(s.key)}]),onClick:y=>n.selectOption(s.key)},h(s.label),11,ye),m<a.options.length-1?(r(),d("span",he,"\u2022")):E("",!0)]))),128))])}var ge=b(ue,[["render",be]]);const ke={name:"BaseSearchInput",emits:["input"],methods:{onInput(t){let l=t.target.value;l&&(l=l.trim()),l||(l=null),this.$emit("input",l)},clearInput(){this.$refs.input.value="",this.$emit("input",null)}}},fe=i("i",{class:"fal fa-search fa-sm -mr-6 opacity-40"},null,-1);function _e(t,l,a,c,o,n){return r(),d("span",null,[fe,i("input",W({type:"search",autocomplete:"off",ref:"input",class:"rounded-full bg-text bg-opacity-5 py-1 px-7 w-36"},t.$attrs,{onInput:l[0]||(l[0]=(...s)=>n.onInput&&n.onInput(...s))}),null,16),i("i",{class:"fal fa-times -ml-6 cursor-pointer opacity-40 fa-sm hover:opacity-100",onClick:l[1]||(l[1]=(...s)=>n.clearInput&&n.clearInput(...s))})])}var ve=b(ke,[["render",_e]]);const Se={name:"ViewRecipesSidebar",components:{BaseNavMenu:ge,BaseSearchInput:ve},data:()=>({styleOptions:I(Object.values(f),"label"),tagOptions:I(Object.values(u),"label"),navIsOpen:!0,gridTypes:B}),computed:k({},L({selectedGridType:t=>t.app.selectedGridType,selectedStyleKeys:t=>t.app.selectedStyleKeys,selectedTagKeys:t=>t.app.selectedTagKeys})),methods:k({},z({setSelectedStyleKeys:x.mutations.SET_SELECTED_STYLES_KEYS,setSelectedTagKeys:x.mutations.SET_SELECTED_TAG_KEYS,setSearchText:x.mutations.SET_SEARCH_TEXT,setSelectedGridType:x.mutations.SET_SELECTED_GRID_TYPE}))},$e=i("div",{class:"font-sketch text-highlight1 text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-5"}," BiteBook ",-1),we={class:"mb-3 md:mb-8"},Te={key:0,class:"fas fa-caret-up"},xe={key:1,class:"fas fa-caret-down"};function Ce(t,l,a,c,o,n){const s=g("base-search-input"),m=g("base-nav-menu");return r(),d("div",null,[$e,i("div",we,[K(s,{class:C({hidden:!t.navIsOpen}),onInput:t.setSearchText},null,8,["class","onInput"]),t.navIsOpen?(r(),d("i",{key:0,class:C(["fal fa-th-large fa-lg ml-8 cursor-pointer",{"text-highlight1":t.selectedGridType===t.gridTypes.grid,"opacity-40":t.selectedGridType!==t.gridTypes.grid}]),onClick:l[0]||(l[0]=y=>t.setSelectedGridType(t.gridTypes.grid))},null,2)):E("",!0),t.navIsOpen?(r(),d("i",{key:1,class:C(["fal fa-th-list fa-lg ml-2 cursor-pointer",{"text-highlight1":t.selectedGridType===t.gridTypes.list,"opacity-40":t.selectedGridType!==t.gridTypes.list}]),onClick:l[1]||(l[1]=y=>t.setSelectedGridType(t.gridTypes.list))},null,2)):E("",!0)]),K(m,{class:C({hidden:!t.navIsOpen}),title:"Styles",options:t.styleOptions,"selected-option-keys":t.selectedStyleKeys,size:"lg",onChange:t.setSelectedStyleKeys},null,8,["class","options","selected-option-keys","onChange"]),K(m,{class:C([{hidden:!t.navIsOpen},"mt-3 md:mt-9"]),title:"Tags",options:t.tagOptions,"selected-option-keys":t.selectedTagKeys,size:"md",onChange:t.setSelectedTagKeys},null,8,["class","options","selected-option-keys","onChange"]),i("div",{class:"text-center opacity-50 md:hidden cursor-pointer",onClick:l[2]||(l[2]=y=>t.navIsOpen=!t.navIsOpen)},[t.navIsOpen?(r(),d("i",Te)):(r(),d("i",xe))])])}var Ee=b(Se,[["render",Ce]]);const Re={name:"ViewRecipeGrid",emits:["openRecipe"],computed:k(k({},L({})),P(["filteredRecipes"])),methods:{recipeClick(t){this.$emit("openRecipe",t)}}},Ae={class:"grid grid-flow-row gap-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},Ke=["onClick"],Le={class:"px-4 py-2 text-left rounded-b-lg font-sans"},Pe={class:"text-base text-text truncate"},Ge={class:"text-highlight1 text-xs truncate"};function Oe(t,l,a,c,o,n){return r(),d("div",Ae,[(r(!0),d(S,null,w(t.filteredRecipes,s=>(r(),d("div",{key:s.key,class:"flex flex-col shadow-lg h-52 2xl:h-72 cursor-pointer rounded-lg bg-bgalt opacity-90 hover:opacity-100",onClick:m=>n.recipeClick(s)},[i("div",{class:"flex-1 rounded-t-lg bg-cover",style:G({"background-image":`url(${s.imageUrl})`})},null,4),i("div",Le,[i("div",Pe,h(s.name),1),i("div",Ge,h(s.tags.map(m=>m.label).join(", ")),1)])],8,Ke))),128))])}var Me=b(Re,[["render",Oe]]);const Be={name:"ViewRecipeList",props:{},data:()=>({}),computed:k(k({},L({recipes:t=>t.app.recipes})),P(["filteredRecipes"])),watch:{},mounted(){},methods:{recipeClick(t){this.$emit("openRecipe",t)}}},Ie=["onClick"],Ue={class:"flex-1 truncate"},je={class:"truncate font-sketch text-2xl text-highlight1"},De={class:"truncate text-sm text-subtext"},ze={class:"truncate text-sm text-subtext"};function Ve(t,l,a,c,o,n){return r(),d("div",null,[(r(!0),d(S,null,w(t.filteredRecipes,(s,m)=>(r(),d("div",{key:s.key,class:C(["py-4 md:py-6 md:px-3 border-border-light flex hover:bg-white hover:bg-opacity-20 cursor-pointer text-left",{"border-t":m!=0}]),onClick:y=>n.recipeClick(s)},[i("div",{class:"h-20 w-20 bg-cover rounded-lg mr-4",style:G({"background-image":`url(${s.imageUrl})`})},null,4),i("div",Ue,[i("div",je,h(s.name),1),i("div",De,h(s.tags.map(y=>y.label).join(", ")),1),i("div",ze,h(s.style.label),1)])],10,Ie))),128))])}var Ye=b(Be,[["render",Ve]]);const qe={name:"BaseModal",emits:["close"],data:()=>({show:!1,escKeyHandler:null}),mounted(){this.addEscKeyListener()},destroyed(){this.removeEscKeyListener()},methods:{$show(){this.show=!0},close(){this.show=!1,this.$emit("close")},addEscKeyListener(){this.escKeyHandler=t=>{t.key==="Escape"&&this.close()},window.addEventListener("keyup",this.escKeyHandler)},removeEscKeyListener(){window.removeEventListener("keyup",this.escKeyHandler)}}},Ne={key:0,class:"absolute top-0 left-0 w-screen h-screen bg-bgmain flex flex-col py-8 md:py-14"},Fe=i("i",{class:"fal fa-window-close fa-2x"},null,-1),He=[Fe],Qe={class:"text-left pb-8 px-8 md:px-14"},We={class:"flex-1 overflow-y-auto px-8 md:px-14"},Xe={class:"px-8 md:px-14"};function Je(t,l,a,c,o,n){return t.show?(r(),d("div",Ne,[i("div",{class:"absolute top-4 right-5 md:top-6 md:right-7 cursor-pointer opacity-70 hover:opacity-100 hover:text-highlight2 text-xs md:text-base",onClick:l[0]||(l[0]=(...s)=>n.close&&n.close(...s))},He),i("div",Qe,[v(t.$slots,"header")]),i("div",We,[v(t.$slots,"content")]),i("div",Xe,[v(t.$slots,"footer")])])):E("",!0)}var Ze=b(qe,[["render",Je]]);const et={name:"BaseGroupedList",props:{label:{type:String,default:null},items:{type:Array,default:()=>[]}}},tt={class:"uppercase text-sm mb-2 text-highlight1 font-bold"};function lt(t,l,a,c,o,n){return r(),d("div",null,[i("div",tt,h(a.label),1),(r(!0),d(S,null,w(a.items,s=>(r(),d("div",{key:typeof s=="string"?s:s.key,class:"mb-2 text-base"},[t.$slots.default?v(t.$slots,"default",{key:0,item:s}):(r(),d(S,{key:1},[O(h(s),1)],64))]))),128))])}var st=b(et,[["render",lt]]);const at={name:"LayoutThreeColumn"},nt={class:"md:flex text-left"},ot={class:"py-5 md:py-0 md:flex-1 md:px-10"},it={key:0};function rt(t,l,a,c,o,n){return r(),d("div",nt,[i("div",null,[v(t.$slots,"col1")]),i("div",ot,[v(t.$slots,"col2")]),t.$slots.col3?(r(),d("div",it,[v(t.$slots,"col3")])):E("",!0)])}var ct=b(at,[["render",rt]]);const dt={name:"ViewRecipeModal",components:{BaseModal:Ze,BaseGroupedList:st,LayoutThreeColumn:ct},data:()=>({name:null,styleLabel:null,sources:[],ingredients:[],directions:[],tags:[],imageUrl:null}),methods:{$show(t){this.name=t.name,this.styleLabel=t.style.label,this.sources=t.sources,this.ingredients=t.ingredients,this.directions=t.directions,this.tags=t.tags,this.imageUrl=t.imageUrl,this.$refs.modal.$show()}}},ut={class:"flex"},pt={class:"flex-1 md:pl-8"},mt={class:"text-5xl font-sketch text-highlight1"},yt={class:"mt-2 text-subtext"},ht={key:0},bt=["href"],gt={class:"mt-2 text-subtext"},kt={key:0,class:"px-2"},ft={class:"flex items-center text-sm md:text-base"},_t={class:"font-bold whitespace-nowrap"},vt=i("div",{class:"px-2"},"\u2022",-1),St={class:"flex items-center text-sm md:text-base"},$t=i("div",{class:"pr-3"},"\u2022",-1);function wt(t,l,a,c,o,n){const s=g("base-grouped-list"),m=g("layout-three-column"),y=g("base-modal");return r(),R(y,{ref:"modal"},{header:T(()=>[i("div",ut,[i("div",{class:"w-28 h-28 bg-cover rounded-lg hidden md:block",style:G({"background-image":`url(${t.imageUrl})`})},null,4),i("div",pt,[i("div",mt,h(t.name),1),i("div",yt,[O(h(t.styleLabel)+" ",1),t.sources.length?(r(),d("span",ht,"/")):E("",!0),(r(!0),d(S,null,w(t.sources,p=>(r(),d("a",{key:p.key,href:p.value,target:"_blank",class:"hover:text-highlight2 underline"},h(p.label),9,bt))),128))]),i("div",gt,[(r(!0),d(S,null,w(t.tags.map(p=>p.label),(p,$)=>(r(),d("span",{key:p},[O(h(p),1),$<t.tags.length-1?(r(),d("span",kt,"\u2022")):E("",!0)]))),128))])])])]),content:T(()=>[K(m,null,{col1:T(()=>[(r(!0),d(S,null,w(t.ingredients,p=>(r(),R(s,{key:p.key,label:p.label,items:p.ingredients,class:"mb-5"},{default:T(({item:$})=>[i("div",ft,[i("div",_t,h($.amount),1),vt,i("div",null,h($.label),1)])]),_:2},1032,["label","items"]))),128))]),col2:T(()=>[(r(!0),d(S,null,w(t.directions,p=>(r(),R(s,{key:p.key,label:p.label,items:p.directions,class:"mb-5"},{default:T(({item:$})=>[i("div",St,[$t,i("div",null,h($),1)])]),_:2},1032,["label","items"]))),128))]),_:1})]),_:1},512)}var Tt=b(dt,[["render",wt]]);const xt={name:"ViewRecipes",components:{LayoutSidebarPage:ie,ViewRecipesSidebar:Ee,ViewRecipesGrid:Me,ViewRecipesList:Ye,ViewRecipeModal:Tt},props:{},data:()=>({gridTypes:B}),computed:k(k({},L({urlRecipeKey:t=>t.urlParameters.recipekey,selectedGridType:t=>t.app.selectedGridType})),P(["filteredRecipes"])),mounted(){if(this.urlRecipeKey){let t=this.filteredRecipes.find(l=>l.key===this.urlRecipeKey);t&&this.openRecipe(t)}},methods:D(k({},z({setUrlParameterValueMutation:M})),{openRecipe(t){this.$refs.recipeModal.$show(t),this.setUrlParameterValueMutation({key:"recipekey",value:t.key})},onRecipeClose(){this.setUrlParameterValueMutation({key:"recipekey",value:null})}})};function Ct(t,l,a,c,o,n){const s=g("view-recipes-sidebar"),m=g("view-recipes-grid"),y=g("view-recipes-list"),p=g("view-recipe-modal"),$=g("layout-sidebar-page");return r(),R($,null,{sidebar:T(()=>[K(s)]),content:T(()=>[t.selectedGridType===t.gridTypes.grid?(r(),R(m,{key:0,onOpenRecipe:n.openRecipe},null,8,["onOpenRecipe"])):(r(),R(y,{key:1,onOpenRecipe:n.openRecipe},null,8,["onOpenRecipe"])),K(p,{ref:"recipeModal",onClose:n.onRecipeClose},null,8,["onClose"])]),_:1})}var Et=b(xt,[["render",Ct]]);const Rt={name:"BiteBookApp",components:{ViewRecipes:Et},filters:{},props:{},data:()=>({}),computed:L({}),watch:{},mounted(){},methods:{}};function At(t,l,a,c,o,n){const s=g("view-recipes");return r(),R(s)}var Kt=b(Rt,[["render",At]]);var Lt="/recipes/assets/red-beans-and-rice.155f5b57.jpg",Pt={key:"red-beans-rice",name:"Red beans & rice",imageUrl:Lt,style:f.cajun,tags:[u.beans,u.rice,u.pork],sources:[{key:e(),label:"America's Test Kitchen",value:"https://www.youtube.com/watch?v=CZmklbHvo5Y"}],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Dry mexican/small red beans or kidney beans",amount:"1 lb",calories:null},{key:e(),label:"Dry black beans",amount:"1/3 lb",calories:null},{key:e(),label:"Bacon",amount:"4 slices",calories:null},{key:e(),label:"Fully cooked sausage",amount:"8 oz",calories:null},{key:e(),label:"Onion",amount:"1",calories:null},{key:e(),label:"Green pepper",amount:"1",calories:null},{key:e(),label:"Celery",amount:"1 stalk",calories:null},{key:e(),label:"Chicken broth",amount:"3 cups",calories:null},{key:e(),label:"Water",amount:"6 cups",calories:null},{key:e(),label:"Tabasco sauce",amount:"1 tbsp",calories:null},{key:e(),label:"Garlic",amount:"3 cloves",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Paprika",amount:"1 tsp",calories:null},{key:e(),label:"Black pepper",amount:"1/4 tsp",calories:null},{key:e(),label:"Cayenne pepper",amount:"1 tsp",calories:null},{key:e(),label:"Thyme",amount:"1 tsp",calories:null},{key:e(),label:"Bay leaves",amount:"2",calories:null}]}],directions:[{key:e(),label:"24 hrs Before",directions:["Add 3 tbsp of salt to a large container of water, stir","Add dry black and red beans to water","Soak beans for 8-24 hrs"]},{key:e(),label:"Prep",directions:["Mince onion, green pepper, and celery then set aside","Rinse and drain beans then set aside","Measure out spices into a dish and set aside","Mince garlic cloves and add to spices","Cut up sausage and set aside","Cut bacon into tiny pieces then add to large pot"]},{key:e(),label:"Cook",directions:["Set large pot with bacon on low to mid heat and cook till browned and fat is rendered","Add onion, green pepper, celery to pot and cook till glassy/tender","Add spices and garlic to pot then cook till fragrant","Add 3 cups chicken stock to pot","Add 6 cups water to pot","Add soaked beans to pot","Bring pot to a boil","Reduce heat until strong simmer, cook for 45 mins","Add sausage to pot","Add 1 tbsp Tabasco sauce to pot","Simmer until desired doneness/thickness","Turn off heat and add a small dash of Tabasco","Serve over rice"]}]},Gt="/recipes/assets/tuna-casserole.02822723.jpg",Ot={key:"tuna-casserole",name:"Tuna casserole",imageUrl:Gt,style:f.other,tags:[u.seafood,u.casserole,u.pasta],sources:[],ingredients:[{key:e(),label:"Ingredients",ingredients:[{key:e(),label:"Egg noodles",amount:"1 (12 oz) package",calories:null},{key:e(),label:"Onion (diced)",amount:"1/4 cup",calories:null},{key:e(),label:"Cheddar cheese",amount:"2 cups",calories:null},{key:e(),label:"Frozen green beans",amount:"1 cup",calories:null},{key:e(),label:"Tuna",amount:"2 (5 oz cans)",calories:null},{key:e(),label:"Condensed cream of mushroom soup",amount:"2 (10.75 oz cans)",calories:null},{key:e(),label:"Mushrooms",amount:"1/4 cup",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Mince 1/4 cup onion and 1/4 cup mushrooms then set aside","Shred 2 cups cheddar cheese then set aside","Drain 2 cans tuna then set aside"]},{key:e(),label:"Cook",directions:["Bring large pot of lightly salted water to boil","Cook package of egg noodles (~8-10 mins), then drain","Turn on oven to 425 degrees F","In large bowl combine everything (but only half of cheese)","Transfer to 9x13 baking dish","Top with rest of cheese","Bake 15-20 mins"]}]},Mt="/recipes/assets/chicken-and-rice.dbfb161a.jpg",Bt={key:"chicken-rice",name:"Chicken & rice",imageUrl:Mt,style:f.other,tags:[u.chicken,u.rice,u.instantPot],sources:[],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Chicken thighs",amount:"1 lb",calories:null},{key:e(),label:"Red onion (diced)",amount:"1",calories:null},{key:e(),label:"Green pepper (diced)",amount:"1",calories:null},{key:e(),label:"Mushrooms (diced)",amount:"1 cup",calories:null},{key:e(),label:"Celery stalks (diced)",amount:"2",calories:null},{key:e(),label:"Garlic (minced)",amount:"2 cloves",calories:null},{key:e(),label:"Chicken broth",amount:"3 1/2 cups",calories:null},{key:e(),label:"Short grain rice",amount:"2 cups",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Thyme",amount:"1 tbsp",calories:null},{key:e(),label:"Cajun seasoning",amount:"1 tbsp",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Dice the red onion, green pepper, celery, and mushrooms then set aside","Mince the garlic cloves then set aside"]},{key:e(),label:"Cook",directions:["In an instant pot brown the chicken thighs, then remove and set aside","Add onion, green pepper, celery, and mushrooms to instant pot and saute for a few mins","Turn off heat","Add chicken broth, rice, and seasoning to instant pot","Gently place chicken thighs on top","Put lid on and cook on rice setting (10 mins), natural release"]}]},It="/recipes/assets/tuna-salad.7774ad2c.jpg",Ut={key:"tuna-salad",name:"Tuna salad",imageUrl:It,style:f.other,tags:[u.seafood],sources:[],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Tuna",amount:"2 (6 oz) cans",calories:null},{key:e(),label:"Celery stalk (minced)",amount:"2 tbsp",calories:null},{key:e(),label:"Red onion (minced)",amount:"2 tbsp",calories:null},{key:e(),label:"Mayonnaise",amount:"1/3",calories:null},{key:e(),label:"Mustard",amount:"1 tbsp",calories:null},{key:e(),label:"Lemon juice",amount:"To taste",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Paprika",amount:"1 tsp",calories:null},{key:e(),label:"Parsley",amount:"1 tbsp",calories:null},{key:e(),label:"Pepper",amount:"to taste",calories:null},{key:e(),label:"Salt",amount:"to taste",calories:null}]}],directions:[{key:e(),label:"Cook",directions:["Dice celery and red onion, add to bowl","Drain tuna, add to bowl","Add mayonnaise, mustard, and seasonings to bowl","Mix well"]}]},jt="/recipes/assets/cheddar-cheeseburger-meatloaf.6c762016.jpg",Dt={key:"cheddar-cheeseburger-meatloaf",name:"Cheddar cheeseburger meatloaf",imageUrl:jt,style:f.other,tags:[u.beef],sources:[{key:e(),label:"BudgetBytes",value:"https://www.budgetbytes.com/cheddar-cheeseburger-meatloaf/"}],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Ground beef",amount:"1 lb",calories:null},{key:e(),label:"Breadcrumbs",amount:"1/4 cup",calories:null},{key:e(),label:"Egg",amount:"1",calories:null},{key:e(),label:"Onion (minced)",amount:"1/2",calories:null},{key:e(),label:"Sharp cheddar (diced)",amount:"4 oz",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Smoked paprika",amount:"1 tsp",calories:null},{key:e(),label:"Garlic powder",amount:"1 tsp",calories:null},{key:e(),label:"Salt",amount:"3/4 tsp",calories:null}]},{key:e(),label:"Glaze",ingredients:[{key:e(),label:"Ketchup",amount:"1/2 cup",calories:null},{key:e(),label:"Brown sugar",amount:"1 tbsp",calories:null},{key:e(),label:"Yellow mustard",amount:"1 tsp",calories:null},{key:e(),label:"Worcestershire",amount:"1 tsp",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Dice onion, set aside","Dice cheddar, set aside","Mix glaze ingredients together in a small bowl, set aside","Turn on oven to 350 degrees F"]},{key:e(),label:"Cook",directions:["Add ground beef to a large bowl","Add rest of main ingredients and spices to the bowl","Mix meat mixture together with your hands","Place meat mixture into baking dish, shape into loaf","Spread glaze over meat","Bake for 50 mins until internal temp is 160 degrees F"]}]},zt="/recipes/assets/hamburger-stroganoff.c170fd3d.jpg",Vt={key:"hamburger-stroganoff",name:"Hamburger stroganoff",imageUrl:zt,style:f.other,tags:[u.beef,u.pasta,u.instantPot],sources:[],ingredients:[{key:e(),label:"Ingredients",ingredients:[{key:e(),label:"Ground beef",amount:"1 lb",calories:null},{key:e(),label:"Onion (diced)",amount:"1/2",calories:null},{key:e(),label:"Garlic (minced)",amount:"2 cloves",calories:null},{key:e(),label:"Mushrooms (diced)",amount:"1 cup",calories:null},{key:e(),label:"Green pepper (diced)",amount:"4 oz",calories:null},{key:e(),label:"Cream of mushroom soup",amount:"1 (10.5 oz) can",calories:null},{key:e(),label:"Beef broth",amount:"3 cups",calories:null},{key:e(),label:"Egg noodles",amount:"3 cups (uncooked)",calories:null},{key:e(),label:"Sour cream",amount:"1 cup",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Salt",amount:"1 tsp",calories:null},{key:e(),label:"Pepper",amount:"1 tsp",calories:null},{key:e(),label:"Flour",amount:"1 tbsp",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Dice the onion, green pepper, and mushrooms, set aside","Mince the garlic"]},{key:e(),label:"Cook",directions:["Saute onion, green pepper, and mushrooms in instant pot","Add ground beef and brown","Add garlic","Stir in 1 tbsp of flour","Turn off heat","Add 3 cups beef broth, 1 can of soup, and salt/pepper","Add 3 cups of egg noodles","Place lid on instant pot and cook pressure 8 mins (natural release)","Stir in 1 cup sour cream"]}]},Yt="/recipes/assets/salmon-patties.5bf42011.jpg",qt={key:"salmon-patties",name:"Salmon patties",imageUrl:Yt,style:f.other,tags:[u.seafood],sources:[],ingredients:[{key:e(),label:"Ingredients",ingredients:[{key:e(),label:"Salmon",amount:"2 (14.75 oz) cans",calories:null},{key:e(),label:"Green onions (minced)",amount:"6",calories:null},{key:e(),label:"Eggs",amount:"2",calories:null},{key:e(),label:"Breadcrumbs",amount:"1/2 cup",calories:null},{key:e(),label:"Parmesan cheese (grated)",amount:"1/2 cup",calories:null},{key:e(),label:"Lime (jucied)",amount:"1",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Paprika",amount:"1 tsp",calories:null},{key:e(),label:"Parsley",amount:"1 tsp",calories:null},{key:e(),label:"Pepper",amount:"1 tsp",calories:null},{key:e(),label:"Salt",amount:"1 tsp",calories:null}]}],directions:[{key:e(),label:"Cook",directions:["Mince green onions add to medium bowl","Grate 1/2 parmesan cheese, add to bowl","Drain salmon and pick out the good meat and add to bowl","Add 2 eggs to bowl","Add 1/2 cup breadcrumbs to bowl","Add spices to bowl","Add lime juice to bowl","Mix well form into patties and fry in a skillet"]}]},Nt="/recipes/assets/quinoa-salad.1309bcd2.jpg",Ft={key:"quinoa-salad",name:"Quinoa salad",imageUrl:Nt,style:f.mexican,tags:[u.salad,u.quinoa,u.instantPot],sources:[],ingredients:[{key:e(),label:"Quinoa ingredients",ingredients:[{key:e(),label:"Quinoa",amount:"2 cups",calories:null},{key:e(),label:"Water",amount:"3 cups",calories:null}]},{key:e(),label:"Salad ingredients",ingredients:[{key:e(),label:"Jalapeno (diced)",amount:"1",calories:null},{key:e(),label:"Onion (diced)",amount:"1/2",calories:null},{key:e(),label:"Garlic (minced)",amount:"5 cloves",calories:null},{key:e(),label:"Bell pepper (diced)",amount:"1/2",calories:null},{key:e(),label:"Corn",amount:"1 can",calories:null},{key:e(),label:"Black beans",amount:"1 can",calories:null},{key:e(),label:"Cilantro (chopped)",amount:"1/4 cup",calories:null},{key:e(),label:"Tomatoes (diced)",amount:"2",calories:null}]},{key:e(),label:"Sauce",ingredients:[{key:e(),label:"Olive oil",amount:"1/4 cup",calories:null},{key:e(),label:"Cumin",amount:"1 tbsp",calories:null},{key:e(),label:"Salt",amount:"1 tsp",calories:null},{key:e(),label:"Limes (jucied)",amount:"2",calories:null}]}],directions:[{key:e(),label:"Quinoa",directions:["Add 2 cups quinoa and 3 cups water to instant pot","Cook high pressure for 1 min then natural release for 10 mins"]},{key:e(),label:"Salad",directions:["While quinoa is cooking get a large bowl","Chop/drain all salad ingredients and add each to bowl","In a small bowl mix together sauce ingredients","When quinoa is done add to bowl and combine well","Drizzle sauce over quinoa salad mix and mix well"]}]},Ht="/recipes/assets/chipotle-chicken-marinade.55d48906.jpg",Qt={key:"chipotle-chicken-marinade",name:"Chipotle chicken marinade",imageUrl:Ht,style:f.mexican,tags:[u.chicken,u.marinade],sources:[],ingredients:[{key:e(),label:"Ingredients",ingredients:[{key:e(),label:"Cumin",amount:"1 tsp",calories:null},{key:e(),label:"Garlic (minced)",amount:"4 cloves",calories:null},{key:e(),label:"Oregano",amount:"1 tsp",calories:null},{key:e(),label:"Salt",amount:"2 tsp",calories:null},{key:e(),label:"Pepper",amount:"1 tsp",calories:null},{key:e(),label:"Chili powder",amount:"1 tbsp",calories:null},{key:e(),label:"Oil",amount:"2 tbsp",calories:null},{key:e(),label:"Chipotle peppers in adobo sauce",amount:"1 (7 oz) can",calories:null},{key:e(),label:"Water",amount:"3/4 cup",calories:null}]}],directions:[{key:e(),label:"Blend",directions:["Add all ingredients to a blender and blend smooth","Pour over raw chicken, let marinade 4-24 hrs"]}]};const _=[];_.push(Pt);_.push(Ot);_.push(Bt);_.push(Ut);_.push(Dt);_.push(Vt);_.push(qt);_.push(Ft);_.push(Qt);var Wt={state:{recipes:_,selectedGridType:B.grid,selectedStyleKeys:[],selectedTagKeys:[],searchText:null},getters:{filteredRecipes:t=>I(t.recipes.filter(l=>{if(t.searchText==null&&t.selectedStyleKeys.length===0&&t.selectedTagKeys.length===0)return!0;let a=(l.name||"").toLowerCase().includes((t.searchText||"").toLowerCase());if(t.searchText!=null&&a||t.selectedStyleKeys.includes(l.style.key))return!0;let c=l.tags.map(o=>o.key);for(let o=0;o<t.selectedTagKeys.length;o++){let n=t.selectedTagKeys[o];if(c.includes(n))return!0}return!1}),"name")},mutations:{[x.mutations.SET_SELECTED_GRID_TYPE](t,l){t.selectedGridType=l},[x.mutations.SET_SELECTED_STYLES_KEYS](t,l){t.selectedStyleKeys=l},[x.mutations.SET_SELECTED_TAG_KEYS](t,l){t.selectedTagKeys=l},[x.mutations.SET_SEARCH_TEXT](t,l){t.searchText=l}},actions:{}};const Xt=ee([{key:"recipekey",default:null,history:!0}]);var Jt=X({plugins:[Xt],modules:{app:Wt}});const Y=J(Kt);Y.use(Jt);Y.mount("#app");