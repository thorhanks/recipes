var j=Object.defineProperty;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(t,s,l)=>s in t?j(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,f=(t,s)=>{for(var l in s||(s={}))I.call(s,l)&&M(t,l,s[l]);if(B)for(var l of B(s))U.call(s,l)&&M(t,l,s[l]);return t};import{o,c,a as r,r as g,t as m,F as _,b as S,n as A,d as L,m as C,e as G,f as b,g as E,h as V,i as P,j as O,k as w,w as v,l as Y,p as N}from"./vendor.a9bb99b0.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}};F();var D={grid:"GRID",list:"LIST"},h=(t,s)=>{for(const[l,d]of s)t[l]=d;return t};const H={name:"LayoutSidebarPage"},W={class:"h-full flex flex-col text-center md:flex-row"},q={class:"p-5 pb-2 md:text-right md:p-14",style:{"background-color":"rgba(255, 255, 255, 0.25)"}},Z={class:"flex-1 overflow-y-auto p-5 md:text-left md:p-14"};function J(t,s,l,d,n,i){return o(),c("div",W,[r("div",q,[g(t.$slots,"sidebar")]),r("div",Z,[g(t.$slots,"content")])])}var Q=h(H,[["render",J]]);function R(t,s,l=!0){if(!Array.isArray(t)||!s||!t.length)return[];let d=l?1:-1,n=l?-1:1;const i=a=>(y,$)=>y[a]>$[a]?d:$[a]>y[a]?n:0;return t.concat().sort(i(s))}const X={},ee={SET_SELECTED_STYLES_KEYS:"SetSelectedStyleKeys",SET_SELECTED_TAG_KEYS:"SetSelectedTagKeys",SET_SELECTED_GRID_TYPE:"SetSelectedGridType"},te={};var K={getters:X,mutations:ee,actions:te};function e(t){return t?(t^Math.random()*16>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}var x={cajun:{key:e(),label:"Cajun"},other:{key:e(),label:"Other"}},p={instantPot:{key:e(),label:"Instant pot"},beans:{key:e(),label:"Beans"},rice:{key:e(),label:"Rice"},pork:{key:e(),label:"Pork"},beef:{key:e(),label:"Beef"},seafood:{key:e(),label:"Seafood"},casserole:{key:e(),label:"Casserole"},pasta:{key:e(),label:"Pasta"},chicken:{key:e(),label:"Chicken"}};const se={name:"BaseNavMenu",props:{title:{type:String,default:null},size:{type:String,default:"lg",validator:t=>["lg","md"].includes(t)},options:{type:Array,default:()=>[]},selectedOptionKeys:{type:Array,default:()=>[]}},emits:["change"],methods:{selectOption(t){let s=this.selectedOptionKeys.includes(t),l=this.selectedOptionKeys;s?l=l.filter(d=>d!==t):l=[...this.selectedOptionKeys,t],this.$emit("change",l)}}},le={class:"text-left md:text-right font-sketch"},ae={class:"text-highlight1 uppercase text-base md:text-xl mb-0 md:mb-2"},ne=["onClick"],oe={key:0,class:"mx-2 opacity-50 md:hidden"};function ie(t,s,l,d,n,i){return o(),c("div",le,[r("div",ae,m(l.title),1),(o(!0),c(_,null,S(l.options,(a,y)=>(o(),c("div",{key:a.key,class:"inline-block md:block"},[r("span",{class:A(["cursor-pointer text-subtext hover:text-text text-lg",{"md:text-3xl":l.size==="lg","md:text-xl":l.size==="md","text-highlight2":l.selectedOptionKeys.includes(a.key),"hover:text-highlight2":l.selectedOptionKeys.includes(a.key)}]),onClick:$=>i.selectOption(a.key)},m(a.label),11,ne),y<l.options.length-1?(o(),c("span",oe,"\u2022")):L("",!0)]))),128))])}var re=h(se,[["render",ie]]);const ce={name:"ViewRecipesSidebar",components:{BaseNavMenu:re},data:()=>({styleOptions:R(Object.values(x),"label"),tagOptions:R(Object.values(p),"label"),navIsOpen:!0}),computed:f({},C({selectedStyleKeys:t=>t.app.selectedStyleKeys,selectedTagKeys:t=>t.app.selectedTagKeys})),methods:f({},G({setSelectedStyleKeys:K.mutations.SET_SELECTED_STYLES_KEYS,setSelectedTagKeys:K.mutations.SET_SELECTED_TAG_KEYS}))},de=r("div",{class:"font-sketch text-highlight1 text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-5"}," BiteBook ",-1),ue={key:0,class:"fas fa-caret-up"},pe={key:1,class:"fas fa-caret-down"};function me(t,s,l,d,n,i){const a=b("base-nav-menu");return o(),c("div",null,[de,E(a,{class:A({hidden:!t.navIsOpen}),title:"Styles",options:t.styleOptions,"selected-option-keys":t.selectedStyleKeys,size:"lg",onChange:t.setSelectedStyleKeys},null,8,["class","options","selected-option-keys","onChange"]),E(a,{class:A([{hidden:!t.navIsOpen},"mt-3 md:mt-9"]),title:"Tags",options:t.tagOptions,"selected-option-keys":t.selectedTagKeys,size:"md",onChange:t.setSelectedTagKeys},null,8,["class","options","selected-option-keys","onChange"]),r("div",{class:"text-center opacity-50 md:hidden cursor-pointer",onClick:s[0]||(s[0]=y=>t.navIsOpen=!t.navIsOpen)},[t.navIsOpen?(o(),c("i",ue)):(o(),c("i",pe))])])}var ye=h(ce,[["render",me]]);const he={name:"ViewRecipeGrid",emits:["openRecipe"],computed:f(f({},C({})),V(["filteredRecipes"])),methods:{recipeClick(t){this.$emit("openRecipe",t)}}},be={class:"grid grid-flow-row gap-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},ge=["onClick"],ke={class:"px-4 py-2 text-left rounded-b-lg font-sans"},fe={class:"text-base text-text truncate"},_e={class:"text-highlight1 text-xs truncate"};function ve(t,s,l,d,n,i){return o(),c("div",be,[(o(!0),c(_,null,S(t.filteredRecipes,a=>(o(),c("div",{key:a.key,class:"flex flex-col shadow-lg h-52 2xl:h-72 cursor-pointer rounded-lg bg-bgalt opacity-90 hover:opacity-100",onClick:y=>i.recipeClick(a)},[r("div",{class:"flex-1 rounded-t-lg bg-cover",style:P({"background-image":`url(${a.imageUrl})`})},null,4),r("div",ke,[r("div",fe,m(a.name),1),r("div",_e,m(a.tags.map(y=>y.label).join(", ")),1)])],8,ge))),128))])}var $e=h(he,[["render",ve]]);const Se={name:"ViewRecipeList",filters:{},props:{},data:()=>({}),computed:f({},C({recipes:t=>t.app.recipes})),watch:{},mounted(){},methods:f({},G({}))};function we(t,s,l,d,n,i){return o(),c("div",null,"New component")}var xe=h(Se,[["render",we]]);const Te={name:"BaseModal",data:()=>({show:!1,escKeyHandler:null}),mounted(){this.addEscKeyListener()},destroyed(){this.removeEscKeyListener()},methods:{$show(){this.show=!0},close(){this.show=!1},addEscKeyListener(){this.escKeyHandler=t=>{t.key==="Escape"&&this.close()},window.addEventListener("keyup",this.escKeyHandler)},removeEscKeyListener(){window.removeEventListener("keyup",this.escKeyHandler)}}},Ce={key:0,class:"absolute top-0 left-0 w-screen h-screen bg-bgmain flex flex-col py-8 md:py-14"},Ee=r("i",{class:"fal fa-window-close fa-2x"},null,-1),Ke=[Ee],Le={class:"text-left pb-8 px-8 md:px-14"},Ae={class:"flex-1 overflow-y-auto px-8 md:px-14"},Oe={class:"px-8 md:px-14"};function Re(t,s,l,d,n,i){return t.show?(o(),c("div",Ce,[r("div",{class:"absolute top-4 right-5 md:top-6 md:right-7 cursor-pointer opacity-70 hover:opacity-100 hover:text-highlight2 text-xs md:text-base",onClick:s[0]||(s[0]=(...a)=>i.close&&i.close(...a))},Ke),r("div",Le,[g(t.$slots,"header")]),r("div",Ae,[g(t.$slots,"content")]),r("div",Oe,[g(t.$slots,"footer")])])):L("",!0)}var Be=h(Te,[["render",Re]]);const Me={name:"BaseGroupedList",props:{label:{type:String,default:null},items:{type:Array,default:()=>[]}}},Ge={class:"uppercase text-sm mb-2 text-highlight1 font-bold"};function Pe(t,s,l,d,n,i){return o(),c("div",null,[r("div",Ge,m(l.label),1),(o(!0),c(_,null,S(l.items,a=>(o(),c("div",{key:typeof a=="string"?a:a.key,class:"mb-2 text-base"},[t.$slots.default?g(t.$slots,"default",{key:0,item:a}):(o(),c(_,{key:1},[O(m(a),1)],64))]))),128))])}var De=h(Me,[["render",Pe]]);const ze={name:"LayoutThreeColumn"},je={class:"md:flex text-left"},Ie={class:"py-5 md:py-0 md:flex-1 md:px-10"},Ue={key:0};function Ve(t,s,l,d,n,i){return o(),c("div",je,[r("div",null,[g(t.$slots,"col1")]),r("div",Ie,[g(t.$slots,"col2")]),t.$slots.col3?(o(),c("div",Ue,[g(t.$slots,"col3")])):L("",!0)])}var Ye=h(ze,[["render",Ve]]);const Ne={name:"ViewRecipeModal",components:{BaseModal:Be,BaseGroupedList:De,LayoutThreeColumn:Ye},data:()=>({name:null,styleLabel:null,sources:[],ingredients:[],directions:[],tags:[],imageUrl:null}),methods:{$show(t){this.name=t.name,this.styleLabel=t.style.label,this.sources=t.sources,this.ingredients=t.ingredients,this.directions=t.directions,this.tags=t.tags,this.imageUrl=t.imageUrl,this.$refs.modal.$show()}}},Fe={class:"flex"},He={class:"flex-1 md:pl-8"},We={class:"text-5xl font-sketch text-highlight1"},qe={class:"mt-2 text-subtext"},Ze=["href"],Je={class:"mt-2 text-subtext"},Qe={key:0,class:"px-2"},Xe={class:"flex items-center text-sm md:text-base"},et={class:"font-bold whitespace-nowrap"},tt=r("div",{class:"px-2"},"\u2022",-1),st={class:"flex items-center text-sm md:text-base"},lt=r("div",{class:"pr-3"},"\u2022",-1);function at(t,s,l,d,n,i){const a=b("base-grouped-list"),y=b("layout-three-column"),$=b("base-modal");return o(),w($,{ref:"modal"},{header:v(()=>[r("div",Fe,[r("div",{class:"w-28 h-28 bg-cover rounded-lg hidden md:block",style:P({"background-image":`url(${t.imageUrl})`})},null,4),r("div",He,[r("div",We,m(t.name),1),r("div",qe,[O(m(t.styleLabel)+" / ",1),(o(!0),c(_,null,S(t.sources,u=>(o(),c("a",{key:u.key,href:u.value,target:"_blank",class:"hover:text-highlight2 underline"},m(u.label),9,Ze))),128))]),r("div",Je,[(o(!0),c(_,null,S(t.tags.map(u=>u.label),(u,k)=>(o(),c("span",{key:u},[O(m(u),1),k<t.tags.length-1?(o(),c("span",Qe,"\u2022")):L("",!0)]))),128))])])])]),content:v(()=>[E(y,null,{col1:v(()=>[(o(!0),c(_,null,S(t.ingredients,u=>(o(),w(a,{key:u.key,label:u.label,items:u.ingredients,class:"mb-5"},{default:v(({item:k})=>[r("div",Xe,[r("div",et,m(k.amount),1),tt,r("div",null,m(k.label),1)])]),_:2},1032,["label","items"]))),128))]),col2:v(()=>[(o(!0),c(_,null,S(t.directions,u=>(o(),w(a,{key:u.key,label:u.label,items:u.directions,class:"mb-5"},{default:v(({item:k})=>[r("div",st,[lt,r("div",null,m(k),1)])]),_:2},1032,["label","items"]))),128))]),_:1})]),_:1},512)}var nt=h(Ne,[["render",at]]);const ot={name:"ViewRecipes",components:{LayoutSidebarPage:Q,ViewRecipesSidebar:ye,ViewRecipesGrid:$e,ViewRecipesList:xe,ViewRecipeModal:nt},props:{},data:()=>({gridTypes:D}),computed:f({},C({selectedGridType:t=>t.app.selectedGridType})),watch:{},mounted(){},methods:{openRecipe(t){this.$refs.recipeModal.$show(t)}}};function it(t,s,l,d,n,i){const a=b("view-recipes-sidebar"),y=b("view-recipes-grid"),$=b("view-recipes-list"),u=b("view-recipe-modal"),k=b("layout-sidebar-page");return o(),w(k,null,{sidebar:v(()=>[E(a)]),content:v(()=>[t.selectedGridType===t.gridTypes.grid?(o(),w(y,{key:0,onOpenRecipe:i.openRecipe},null,8,["onOpenRecipe"])):(o(),w($,{key:1,onOpenRecipe:i.openRecipe},null,8,["onOpenRecipe"])),E(u,{ref:"recipeModal"},null,512)]),_:1})}var rt=h(ot,[["render",it]]);const ct={name:"BiteBookApp",components:{ViewRecipes:rt},filters:{},props:{},data:()=>({}),computed:C({}),watch:{},mounted(){},methods:{}};function dt(t,s,l,d,n,i){const a=b("view-recipes");return o(),w(a)}var ut=h(ct,[["render",dt]]);var pt="/recipes/assets/red-beans-and-rice.155f5b57.jpg",mt={key:e(),name:"Red beans & rice",imageUrl:pt,style:x.cajun,tags:[p.beans,p.rice,p.pork],sources:[{key:e(),label:"America's Test Kitchen",value:"https://www.youtube.com/watch?v=CZmklbHvo5Y"}],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Dry mexican/small red beans or kidney beans",amount:"1 lb",calories:null},{key:e(),label:"Dry black beans",amount:"1/3 lb",calories:null},{key:e(),label:"Bacon",amount:"4 slices",calories:null},{key:e(),label:"Fully cooked sausage",amount:"8 oz",calories:null},{key:e(),label:"Onion",amount:"1",calories:null},{key:e(),label:"Green pepper",amount:"1",calories:null},{key:e(),label:"Celery",amount:"1 stalk",calories:null},{key:e(),label:"Chicken broth",amount:"3 cups",calories:null},{key:e(),label:"Water",amount:"6 cups",calories:null},{key:e(),label:"Tabasco sauce",amount:"1 tbsp",calories:null},{key:e(),label:"Garlic",amount:"3 cloves",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Paprika",amount:"1 tsp",calories:null},{key:e(),label:"Black pepper",amount:"1/4 tsp",calories:null},{key:e(),label:"Cayenne pepper",amount:"1 tsp",calories:null},{key:e(),label:"Thyme",amount:"1 tsp",calories:null},{key:e(),label:"Bay leaves",amount:"2",calories:null}]}],directions:[{key:e(),label:"24 hrs Before",directions:["Add 3 tbsp of salt to a large container of water, stir","Add dry black and red beans to water","Soak beans for 8-24 hrs"]},{key:e(),label:"Prep",directions:["Mince onion, green pepper, and celery then set aside","Rinse and drain beans then set aside","Measure out spices into a dish and set aside","Mince garlic cloves and add to spices","Cut up sausage and set aside","Cut bacon into tiny pieces then add to large pot"]},{key:e(),label:"Cook",directions:["Set large pot with bacon on low to mid heat and cook till browned and fat is rendered","Add onion, green pepper, celery to pot and cook till glassy/tender","Add spices and garlic to pot then cook till fragrant","Add 3 cups chicken stock to pot","Add 6 cups water to pot","Add soaked beans to pot","Bring pot to a boil","Reduce heat until strong simmer, cook for 45 mins","Add sausage to pot","Add 1 tbsp Tabasco sauce to pot","Simmer until desired doneness/thickness","Turn off heat and add a small dash of Tabasco","Serve over rice"]}]},yt="/recipes/assets/tuna-casserole.02822723.jpg",ht={key:e(),name:"Tuna casserole",imageUrl:yt,style:x.other,tags:[p.seafood,p.casserole,p.pasta],sources:[],ingredients:[{key:e(),label:"Ingredients",ingredients:[{key:e(),label:"Egg noodles",amount:"1 (12 oz) package",calories:null},{key:e(),label:"Onion (diced)",amount:"1/4 cup",calories:null},{key:e(),label:"Cheddar cheese",amount:"2 cups",calories:null},{key:e(),label:"Frozen green beans",amount:"1 cup",calories:null},{key:e(),label:"Tuna",amount:"2 (5 oz cans)",calories:null},{key:e(),label:"Condensed cream of mushroom soup",amount:"2 (10.75 oz cans)",calories:null},{key:e(),label:"Mushrooms",amount:"1/4 cup",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Mince 1/4 cup onion and 1/4 cup mushrooms then set aside","Shred 2 cups cheddar cheese then set aside","Drain 2 cans tuna then set aside"]},{key:e(),label:"Cook",directions:["Bring large pot of lightly salted water to boil","Cook package of egg noodles (~8-10 mins), then drain","Turn on oven to 425 degrees F","In large bowl combine everything (but only half of cheese)","Transfer to 9x13 baking dish","Top with rest of cheese","Bake 15-20 mins"]}]},bt="/recipes/assets/chicken-and-rice.dbfb161a.jpg",gt={key:e(),name:"Chicken & rice",imageUrl:bt,style:x.other,tags:[p.chicken,p.rice,p.instantPot],sources:[],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Chicken thighs",amount:"1 lb",calories:null},{key:e(),label:"Red onion (diced)",amount:"1",calories:null},{key:e(),label:"Green pepper (diced)",amount:"1",calories:null},{key:e(),label:"Mushrooms (diced)",amount:"1 cup",calories:null},{key:e(),label:"Celery stalks (diced)",amount:"2",calories:null},{key:e(),label:"Garlic (minced)",amount:"2 cloves",calories:null},{key:e(),label:"Chicken broth",amount:"3 1/2 cups",calories:null},{key:e(),label:"Short grain rice",amount:"2 cups",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Thyme",amount:"1 tbsp",calories:null},{key:e(),label:"Cajun seasoning",amount:"1 tbsp",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Dice the red onion, green pepper, celery, and mushrooms then set aside","Mince the garlic cloves then set aside"]},{key:e(),label:"Cook",directions:["In an instant pot brown the chicken thighs, then remove and set aside","Add onion, green pepper, celery, and mushrooms to instant pot and saute for a few mins","Turn off heat","Add chicken broth, rice, and seasoning to instant pot","Gently place chicken thighs on top","Put lid on and cook on rice setting (10 mins), natural release"]}]},kt="/recipes/assets/tuna-salad.7774ad2c.jpg",ft={key:e(),name:"Tuna salad",imageUrl:kt,style:x.other,tags:[p.seafood],sources:[],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Tuna",amount:"2 (6 oz) cans",calories:null},{key:e(),label:"Celery stalk (minced)",amount:"2 tbsp",calories:null},{key:e(),label:"Red onion (minced)",amount:"2 tbsp",calories:null},{key:e(),label:"Mayonnaise",amount:"1/3",calories:null},{key:e(),label:"Mustard",amount:"1 tbsp",calories:null},{key:e(),label:"Lemon juice",amount:"To taste",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Paprika",amount:"1 tsp",calories:null},{key:e(),label:"Parsley",amount:"1 tbsp",calories:null},{key:e(),label:"Pepper",amount:"to taste",calories:null},{key:e(),label:"Salt",amount:"to taste",calories:null}]}],directions:[{key:e(),label:"Cook",directions:["Dice celery and red onion, add to bowl","Drain tuna, add to bowl","Add mayonnaise, mustard, and seasonings to bowl","Mix well"]}]},_t="/recipes/assets/cheddar-cheeseburger-meatloaf.6c762016.jpg",vt={key:e(),name:"Tuna salad",imageUrl:_t,style:x.other,tags:[p.beef],sources:[{key:e(),label:"BudgetBytes",value:"https://www.budgetbytes.com/cheddar-cheeseburger-meatloaf/"}],ingredients:[{key:e(),label:"Main ingredients",ingredients:[{key:e(),label:"Ground beef",amount:"1 lb",calories:null},{key:e(),label:"Breadcrumbs",amount:"1/4 cup",calories:null},{key:e(),label:"Egg",amount:"1",calories:null},{key:e(),label:"Onion (minced)",amount:"1/2",calories:null},{key:e(),label:"Sharp cheddar (diced)",amount:"4 oz",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Smoked paprika",amount:"1 tsp",calories:null},{key:e(),label:"Garlic powder",amount:"1 tsp",calories:null},{key:e(),label:"Salt",amount:"3/4 tsp",calories:null}]},{key:e(),label:"Glaze",ingredients:[{key:e(),label:"Ketchup",amount:"1/2 cup",calories:null},{key:e(),label:"Brown sugar",amount:"1 tbsp",calories:null},{key:e(),label:"Yellow mustard",amount:"1 tsp",calories:null},{key:e(),label:"Worcestershire",amount:"1 tsp",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Dice onion, set aside","Dice cheddar, set aside","Mix glaze ingredients together in a small bowl, set aside","Turn on oven to 350 degrees F"]},{key:e(),label:"Cook",directions:["Add ground beef to a large bowl","Add rest of main ingredients and spices to the bowl","Mix meat mixture together with your hands","Place meat mixture into baking dish, shape into loaf","Spread glaze over meat","Bake for 50 mins until internal temp is 160 degrees F"]}]},$t="/recipes/assets/hamburger-stroganoff.c883aa1c.jpg",St={key:e(),name:"Hamburger stroganoff",imageUrl:$t,style:x.other,tags:[p.beef,p.pasta,p.instantPot],sources:[],ingredients:[{key:e(),label:"Ingredients",ingredients:[{key:e(),label:"Ground beef",amount:"1 lb",calories:null},{key:e(),label:"Onion (diced)",amount:"1/2",calories:null},{key:e(),label:"Garlic (minced)",amount:"2 cloves",calories:null},{key:e(),label:"Mushrooms (diced)",amount:"1 cup",calories:null},{key:e(),label:"Green pepper (diced)",amount:"4 oz",calories:null},{key:e(),label:"Cream of mushroom soup",amount:"1 (10.5 oz) can",calories:null},{key:e(),label:"Beef broth",amount:"3 cups",calories:null},{key:e(),label:"Egg noodles",amount:"3 cups (uncooked)",calories:null},{key:e(),label:"Sour cream",amount:"1 cup",calories:null}]},{key:e(),label:"Spices",ingredients:[{key:e(),label:"Salt",amount:"1 tsp",calories:null},{key:e(),label:"Pepper",amount:"1 tsp",calories:null},{key:e(),label:"Four",amount:"1 tbsp",calories:null}]}],directions:[{key:e(),label:"Prep",directions:["Dice the onion, green pepper, and mushrooms, set aside","Mince the garlic"]},{key:e(),label:"Cook",directions:["Saute onion, green pepper, and mushrooms in instant pot","Add ground beef and brown","Add garlic","Stir in 1 tbsp of flour","Turn off heat","Add 3 cups beef broth, 1 can of soup, and salt/pepper","Add 3 cups of egg noodles","Place lid on instant pot and cook pressure 8 mins (natural release)","Stir in 1 cup sour cream"]}]};const T=[];T.push(mt);T.push(ht);T.push(gt);T.push(ft);T.push(vt);T.push(St);var wt={state:{recipes:T,selectedGridType:D.grid,selectedStyleKeys:[],selectedTagKeys:[],searchText:null},getters:{filteredRecipes:t=>R(t.recipes.filter(s=>{if(t.searchText==null&&t.selectedStyleKeys.length===0&&t.selectedTagKeys.length===0)return!0;let l=(s.name||"").toLowerCase().includes((t.searchText||"").toLowerCase());if(t.searchText!=null&&l||t.selectedStyleKeys.includes(s.style.key))return!0;let d=s.tags.map(n=>n.key);for(let n=0;n<t.selectedTagKeys.length;n++){let i=t.selectedTagKeys[n];if(d.includes(i))return!0}return!1}),"name")},mutations:{[K.mutations.SET_SELECTED_GRID_TYPE](t,s){t.selectedGridType=s},[K.mutations.SET_SELECTED_STYLES_KEYS](t,s){t.selectedStyleKeys=s},[K.mutations.SET_SELECTED_TAG_KEYS](t,s){t.selectedTagKeys=s}},actions:{}},xt=Y({modules:{app:wt}});const z=N(ut);z.use(xt);z.mount("#app");
