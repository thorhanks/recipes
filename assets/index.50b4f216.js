var I=Object.defineProperty;var R=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var A=(e,t,s)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f=(e,t)=>{for(var s in t||(t={}))P.call(t,s)&&A(e,s,t[s]);if(R)for(var s of R(t))j.call(t,s)&&A(e,s,t[s]);return e};import{o as a,c as r,a as i,r as _,t as u,F as b,b as $,n as C,d as K,m as S,e as B,f as y,g as w,h as N,i as G,j as L,k as x,w as v,l as z,p as U}from"./vendor.a9bb99b0.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}};H();var M={grid:"GRID",list:"LIST"},h=(e,t)=>{for(const[s,d]of t)e[s]=d;return e};const F={name:"LayoutSidebarPage"},q={class:"h-full flex flex-col text-center md:flex-row"},W={class:"p-5 pb-2 md:text-right md:p-14",style:{"background-color":"rgba(255, 255, 255, 0.25)"}},Z={class:"flex-1 overflow-y-auto p-5 md:text-left md:p-14"};function J(e,t,s,d,l,o){return a(),r("div",q,[i("div",W,[_(e.$slots,"sidebar")]),i("div",Z,[_(e.$slots,"content")])])}var Q=h(F,[["render",J]]);function O(e,t,s=!0){if(!Array.isArray(e)||!t||!e.length)return[];let d=s?1:-1,l=s?-1:1;const o=n=>(m,k)=>m[n]>k[n]?d:k[n]>m[n]?l:0;return e.concat().sort(o(t))}const X={},ee={SET_SELECTED_STYLES_KEYS:"SetSelectedStyleKeys",SET_SELECTED_TAG_KEYS:"SetSelectedTagKeys",SET_SELECTED_GRID_TYPE:"SetSelectedGridType"},te={};var T={getters:X,mutations:ee,actions:te},V={mexican:{key:"style_mexican",label:"Mexican"},cajun:{key:"style_cajun",label:"Cajun"}},E={beans:{key:"tag_beans",label:"Beans"},rice:{key:"tag_rice",label:"Rice"},onePotMeal:{key:"tag_one_pot_meal",label:"One pot meal"},pork:{key:"tag_pork",label:"Pork"},chicken:{key:"tag_chicken",label:"Chicken"}};const se={name:"BaseNavMenu",props:{title:{type:String,default:null},size:{type:String,default:"lg",validator:e=>["lg","md"].includes(e)},options:{type:Array,default:()=>[]},selectedOptionKeys:{type:Array,default:()=>[]}},emits:["change"],methods:{selectOption(e){let t=this.selectedOptionKeys.includes(e),s=this.selectedOptionKeys;t?s=s.filter(d=>d!==e):s=[...this.selectedOptionKeys,e],this.$emit("change",s)}}},ne={class:"text-left md:text-right font-sketch"},le={class:"text-highlight1 uppercase text-base md:text-xl mb-0 md:mb-2"},ae=["onClick"],oe={key:0,class:"mx-2 opacity-50 md:hidden"};function ie(e,t,s,d,l,o){return a(),r("div",ne,[i("div",le,u(s.title),1),(a(!0),r(b,null,$(s.options,(n,m)=>(a(),r("div",{key:n.key,class:"inline-block md:block"},[i("span",{class:C(["cursor-pointer text-subtext hover:text-text text-lg",{"md:text-3xl":s.size==="lg","md:text-xl":s.size==="md","text-highlight2":s.selectedOptionKeys.includes(n.key),"hover:text-highlight2":s.selectedOptionKeys.includes(n.key)}]),onClick:k=>o.selectOption(n.key)},u(n.label),11,ae),m<s.options.length-1?(a(),r("span",oe,"\u2022")):K("",!0)]))),128))])}var re=h(se,[["render",ie]]);const ce={name:"ViewRecipesSidebar",components:{BaseNavMenu:re},data:()=>({styleOptions:O(Object.values(V),"label"),tagOptions:O(Object.values(E),"label"),navIsOpen:!0}),computed:f({},S({selectedStyleKeys:e=>e.app.selectedStyleKeys,selectedTagKeys:e=>e.app.selectedTagKeys})),methods:f({},B({setSelectedStyleKeys:T.mutations.SET_SELECTED_STYLES_KEYS,setSelectedTagKeys:T.mutations.SET_SELECTED_TAG_KEYS}))},de=i("div",{class:"font-sketch text-highlight1 text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-5"}," BiteBook ",-1),pe={key:0,class:"fas fa-caret-up"},ue={key:1,class:"fas fa-caret-down"};function me(e,t,s,d,l,o){const n=y("base-nav-menu");return a(),r("div",null,[de,w(n,{class:C({hidden:!e.navIsOpen}),title:"Styles",options:e.styleOptions,"selected-option-keys":e.selectedStyleKeys,size:"lg",onChange:e.setSelectedStyleKeys},null,8,["class","options","selected-option-keys","onChange"]),w(n,{class:C([{hidden:!e.navIsOpen},"mt-3 md:mt-9"]),title:"Tags",options:e.tagOptions,"selected-option-keys":e.selectedTagKeys,size:"md",onChange:e.setSelectedTagKeys},null,8,["class","options","selected-option-keys","onChange"]),i("div",{class:"text-center opacity-50 md:hidden cursor-pointer",onClick:t[0]||(t[0]=m=>e.navIsOpen=!e.navIsOpen)},[e.navIsOpen?(a(),r("i",pe)):(a(),r("i",ue))])])}var he=h(ce,[["render",me]]);const ye={name:"ViewRecipeGrid",emits:["openRecipe"],computed:f(f({},S({})),N(["filteredRecipes"])),methods:{recipeClick(e){this.$emit("openRecipe",e)}}},_e={class:"grid grid-flow-row gap-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},ge=["onClick"],fe={class:"px-4 py-2 text-left rounded-b-lg font-sans"},be={class:"text-base text-text truncate"},ve={class:"text-highlight1 text-xs truncate"};function ke(e,t,s,d,l,o){return a(),r("div",_e,[(a(!0),r(b,null,$(e.filteredRecipes,n=>(a(),r("div",{key:n.key,class:"flex flex-col shadow-lg h-52 2xl:h-72 cursor-pointer rounded-lg bg-bgalt opacity-90 hover:opacity-100",onClick:m=>o.recipeClick(n)},[i("div",{class:"flex-1 rounded-t-lg bg-cover",style:G({"background-image":`url(${n.imageUrl})`})},null,4),i("div",fe,[i("div",be,u(n.name),1),i("div",ve,u(n.tags.map(m=>m.label).join(", ")),1)])],8,ge))),128))])}var $e=h(ye,[["render",ke]]);const xe={name:"ViewRecipeList",filters:{},props:{},data:()=>({}),computed:f({},S({recipes:e=>e.app.recipes})),watch:{},mounted(){},methods:f({},B({}))};function Se(e,t,s,d,l,o){return a(),r("div",null,"New component")}var we=h(xe,[["render",Se]]);const Te={name:"BaseModal",data:()=>({show:!1,escKeyHandler:null}),mounted(){this.addEscKeyListener()},destroyed(){this.removeEscKeyListener()},methods:{$show(){this.show=!0},close(){this.show=!1},addEscKeyListener(){this.escKeyHandler=e=>{e.key==="Escape"&&this.close()},window.addEventListener("keyup",this.escKeyHandler)},removeEscKeyListener(){window.removeEventListener("keyup",this.escKeyHandler)}}},Ee={key:0,class:"absolute top-0 left-0 w-screen h-screen bg-bgmain flex flex-col py-8 md:py-14"},Ke=i("i",{class:"fal fa-window-close fa-2x"},null,-1),Ce=[Ke],Le={class:"text-left pb-8 px-8 md:px-14"},Oe={class:"flex-1 overflow-y-auto px-8 md:px-14"},Re={class:"px-8 md:px-14"};function Ae(e,t,s,d,l,o){return e.show?(a(),r("div",Ee,[i("div",{class:"absolute top-6 right-7 cursor-pointer opacity-70 hover:opacity-100 hover:text-highlight2 text-xs md:text-base",onClick:t[0]||(t[0]=(...n)=>o.close&&o.close(...n))},Ce),i("div",Le,[_(e.$slots,"header")]),i("div",Oe,[_(e.$slots,"content")]),i("div",Re,[_(e.$slots,"footer")])])):K("",!0)}var Be=h(Te,[["render",Ae]]);const Ge={name:"BaseGroupedList",props:{label:{type:String,default:null},items:{type:Array,default:()=>[]}}},Me={class:"uppercase text-sm mb-2 text-highlight1 font-bold"};function Ve(e,t,s,d,l,o){return a(),r("div",null,[i("div",Me,u(s.label),1),(a(!0),r(b,null,$(s.items,n=>(a(),r("div",{key:typeof n=="string"?n:n.key,class:"mb-2 text-base"},[e.$slots.default?_(e.$slots,"default",{key:0,item:n}):(a(),r(b,{key:1},[L(u(n),1)],64))]))),128))])}var De=h(Ge,[["render",Ve]]);const Ye={name:"LayoutThreeColumn"},Ie={class:"md:flex text-left"},Pe={class:"py-5 md:py-0 md:flex-1 md:px-10"},je={key:0};function Ne(e,t,s,d,l,o){return a(),r("div",Ie,[i("div",null,[_(e.$slots,"col1")]),i("div",Pe,[_(e.$slots,"col2")]),e.$slots.col3?(a(),r("div",je,[_(e.$slots,"col3")])):K("",!0)])}var ze=h(Ye,[["render",Ne]]);const Ue={name:"ViewRecipeModal",components:{BaseModal:Be,BaseGroupedList:De,LayoutThreeColumn:ze},data:()=>({name:null,styleLabel:null,sources:[],ingredients:[],directions:[],tags:[],imageUrl:null}),methods:{$show(e){this.name=e.name,this.styleLabel=e.style.label,this.sources=e.sources,this.ingredients=e.ingredients,this.directions=e.directions,this.tags=e.tags,this.imageUrl=e.imageUrl,this.$refs.modal.$show()}}},He={class:"flex"},Fe={class:"flex-1 md:pl-8"},qe={class:"text-5xl font-sketch text-highlight1"},We={class:"mt-2 text-subtext"},Ze=["href"],Je={class:"mt-2 text-subtext"},Qe={key:0,class:"px-2"},Xe={class:"flex items-center text-sm md:text-base"},et={class:"font-bold whitespace-nowrap"},tt=i("div",{class:"px-2"},"\u2022",-1),st={class:"flex items-center text-sm md:text-base"},nt=i("div",{class:"pr-3"},"\u2022",-1);function lt(e,t,s,d,l,o){const n=y("base-grouped-list"),m=y("layout-three-column"),k=y("base-modal");return a(),x(k,{ref:"modal"},{header:v(()=>[i("div",He,[i("div",{class:"w-28 h-28 bg-cover rounded-lg hidden md:block",style:G({"background-image":`url(${e.imageUrl})`})},null,4),i("div",Fe,[i("div",qe,u(e.name),1),i("div",We,[L(u(e.styleLabel)+" / ",1),(a(!0),r(b,null,$(e.sources,p=>(a(),r("a",{key:p.key,href:p.value,target:"_blank",class:"hover:text-highlight2 underline"},u(p.label),9,Ze))),128))]),i("div",Je,[(a(!0),r(b,null,$(e.tags.map(p=>p.label),(p,g)=>(a(),r("span",{key:p},[L(u(p),1),g<e.tags.length-1?(a(),r("span",Qe,"\u2022")):K("",!0)]))),128))])])])]),content:v(()=>[w(m,null,{col1:v(()=>[(a(!0),r(b,null,$(e.ingredients,p=>(a(),x(n,{key:p.key,label:p.label,items:p.ingredients,class:"mb-5"},{default:v(({item:g})=>[i("div",Xe,[i("div",et,u(g.amount),1),tt,i("div",null,u(g.label),1)])]),_:2},1032,["label","items"]))),128))]),col2:v(()=>[(a(!0),r(b,null,$(e.directions,p=>(a(),x(n,{key:p.key,label:p.label,items:p.directions,class:"mb-5"},{default:v(({item:g})=>[i("div",st,[nt,i("div",null,u(g),1)])]),_:2},1032,["label","items"]))),128))]),_:1})]),_:1},512)}var at=h(Ue,[["render",lt]]);const ot={name:"ViewRecipes",components:{LayoutSidebarPage:Q,ViewRecipesSidebar:he,ViewRecipesGrid:$e,ViewRecipesList:we,ViewRecipeModal:at},props:{},data:()=>({gridTypes:M}),computed:f({},S({selectedGridType:e=>e.app.selectedGridType})),watch:{},mounted(){},methods:{openRecipe(e){this.$refs.recipeModal.$show(e)}}};function it(e,t,s,d,l,o){const n=y("view-recipes-sidebar"),m=y("view-recipes-grid"),k=y("view-recipes-list"),p=y("view-recipe-modal"),g=y("layout-sidebar-page");return a(),x(g,null,{sidebar:v(()=>[w(n)]),content:v(()=>[e.selectedGridType===e.gridTypes.grid?(a(),x(m,{key:0,onOpenRecipe:o.openRecipe},null,8,["onOpenRecipe"])):(a(),x(k,{key:1,onOpenRecipe:o.openRecipe},null,8,["onOpenRecipe"])),w(p,{ref:"recipeModal"},null,512)]),_:1})}var rt=h(ot,[["render",it]]);const ct={name:"BiteBookApp",components:{ViewRecipes:rt},filters:{},props:{},data:()=>({}),computed:S({}),watch:{},mounted(){},methods:{}};function dt(e,t,s,d,l,o){const n=y("view-recipes");return a(),x(n)}var pt=h(ct,[["render",dt]]);function c(e){return e?(e^Math.random()*16>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c)}var ut="/recipes/assets/red_beans_and_rice.155f5b57.jpg",mt={key:c(),name:"Red beans & rice",imageUrl:ut,style:V.cajun,tags:[E.beans,E.rice,E.onePotMeal,E.pork],sources:[{key:c(),label:"America's Test Kitchen",value:"https://www.youtube.com/watch?v=CZmklbHvo5Y"}],ingredients:[{key:c(),label:"Main",ingredients:[{key:c(),label:"Dry mexican/small red beans or kidney beans",amount:"1 lb",calories:null},{key:c(),label:"Dry black beans",amount:"1/3 lb",calories:null},{key:c(),label:"Bacon",amount:"4 slices",calories:null},{key:c(),label:"Fully cooked sausage",amount:"8 oz",calories:null},{key:c(),label:"Onion",amount:"1",calories:null},{key:c(),label:"Green pepper",amount:"1",calories:null},{key:c(),label:"Celery",amount:"1 stalk",calories:null},{key:c(),label:"Chicken broth",amount:"3 cups",calories:null},{key:c(),label:"Water",amount:"6 cups",calories:null},{key:c(),label:"Tabasco sauce",amount:"1 tbsp",calories:null},{key:c(),label:"Garlic",amount:"3 cloves",calories:null}]},{key:c(),label:"Spices",ingredients:[{key:c(),label:"Paprika",amount:"1 tsp",calories:null},{key:c(),label:"Black pepper",amount:"1/4 tsp",calories:null},{key:c(),label:"Cayenne pepper",amount:"1 tsp",calories:null},{key:c(),label:"Thyme",amount:"1 tsp",calories:null},{key:c(),label:"Bay leaves",amount:"2",calories:null}]}],directions:[{key:c(),label:"24 hrs Before",directions:["Add 3 tbsp of salt to a large container of water, stir","Add dry black and red beans to water","Soak beans for 8-24 hrs"]},{key:c(),label:"Prep",directions:["Mince onion, green pepper, and celery then set aside","Rinse and drain beans then set aside","Measure out spices into a dish and set aside","Mince garlic cloves and add to spices","Cut up sausage and set aside","Cut bacon into tiny pieces then add to large pot"]},{key:c(),label:"Cook",directions:["Set large pot with bacon on low to mid heat and cook till browned and fat is rendered","Add onion, green pepper, celery to pot and cook till glassy/tender","Add spices and garlic to pot then cook till fragrant","Add 3 cups chicken stock to pot","Add 6 cups water to pot","Add soaked beans to pot","Bring pot to a boil","Reduce heat until strong simmer, cook for 45 mins","Add sausage to pot","Add 1 tbsp Tabasco sauce to pot","Simmer until desired doneness/thickness","Turn off heat and add a small dash of Tabasco","Serve over rice"]}]};const D=[];D.push(mt);var ht={state:{recipes:D,selectedGridType:M.grid,selectedStyleKeys:[],selectedTagKeys:[],searchText:null},getters:{filteredRecipes:e=>O(e.recipes.filter(t=>{if(e.searchText==null&&e.selectedStyleKeys.length===0&&e.selectedTagKeys.length===0)return!0;let s=(t.name||"").toLowerCase().includes((e.searchText||"").toLowerCase());if(e.searchText!=null&&s||e.selectedStyleKeys.includes(t.style.key))return!0;let d=t.tags.map(l=>l.key);for(let l=0;l<e.selectedTagKeys.length;l++){let o=e.selectedTagKeys[l];if(d.includes(o))return!0}return!1}),"name")},mutations:{[T.mutations.SET_SELECTED_GRID_TYPE](e,t){e.selectedGridType=t},[T.mutations.SET_SELECTED_STYLES_KEYS](e,t){e.selectedStyleKeys=t},[T.mutations.SET_SELECTED_TAG_KEYS](e,t){e.selectedTagKeys=t}},actions:{}},yt=z({modules:{app:ht}});const Y=U(pt);Y.use(yt);Y.mount("#app");
