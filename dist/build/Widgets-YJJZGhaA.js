import{a3 as y,j as e,e as o,a4 as j,T as l,a5 as w,a as $,a6 as C,a7 as F,k as c,a8 as R,a9 as T,aa as v,ab as M,ac as L,ad as D,ae as W,af as A,Z as m,a2 as I}from"./strapi-_t5zS_PU.js";import{W as u}from"./WidgetHelpers-CkeJmPgh.js";import{g as S,a as N}from"./users-DLc-PG84.js";const E=c(l)`
  font-size: 2.4rem;
`,U=()=>{const t=y("User",a=>a.user),s=S(t),i=N(t);return e.jsxs(o,{direction:"column",gap:3,height:"100%",justifyContent:"center",children:[e.jsx(j.Item,{delayMs:0,fallback:i}),s&&e.jsx(E,{fontWeight:"bold",textTransform:"none",textAlign:"center",children:s}),t?.email&&e.jsx(l,{variant:"omega",textColor:"neutral600",children:t?.email}),t?.roles?.length&&e.jsx(o,{marginTop:2,gap:1,wrap:"wrap",children:t?.roles?.map(a=>e.jsx(w,{children:a.name},a.id))})]})},G=c(m)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-radius: ${({theme:t})=>t.borderRadius};
  overflow: hidden;
`,K=c(m)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:nth-child(2n) {
    border-right: none;
  }
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }
`,z=({locale:t,number:s})=>new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:1}).format(s),B=c(I)`
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[3]};
`,X=()=>{const{formatMessage:t,locale:s}=$(),{data:i,isLoading:a}=C(),{data:d,isLoading:p}=F();if(p||a)return e.jsx(u.Loading,{});if(!d||!i)return e.jsx(u.Error,{});const b={entries:{label:{id:"widget.key-statistics.list.entries",defaultMessage:"Entries"},icon:{component:e.jsx(A,{}),background:"primary100",color:"primary600"},link:"/content-manager"},assets:{label:{id:"widget.key-statistics.list.assets",defaultMessage:"Assets"},icon:{component:e.jsx(W,{}),background:"warning100",color:"warning600"},link:"/plugins/upload"},contentTypes:{label:{id:"widget.key-statistics.list.contentTypes",defaultMessage:"Content-Types"},icon:{component:e.jsx(D,{}),background:"secondary100",color:"secondary600"},link:"/plugins/content-type-builder"},components:{label:{id:"widget.key-statistics.list.components",defaultMessage:"Components"},icon:{component:e.jsx(L,{}),background:"alternative100",color:"alternative600"},link:"/plugins/content-type-builder"},locales:{label:{id:"widget.key-statistics.list.locales",defaultMessage:"Locales"},icon:{component:e.jsx(M,{}),background:"success100",color:"success600"},link:"/settings/internationalization"},admins:{label:{id:"widget.key-statistics.list.admins",defaultMessage:"Admins"},icon:{component:e.jsx(v,{}),background:"danger100",color:"danger600"},link:"/settings/users?pageSize=10&page=1&sort=firstname"},webhooks:{label:{id:"widget.key-statistics.list.webhooks",defaultMessage:"Webhooks"},icon:{component:e.jsx(T,{}),background:"alternative100",color:"alternative600"},link:"/settings/webhooks"},apiTokens:{label:{id:"widget.key-statistics.list.apiTokens",defaultMessage:"API Tokens"},icon:{component:e.jsx(R,{}),background:"neutral100",color:"neutral600"},link:"/settings/api-tokens?sort=name:ASC"}},{draft:f,published:x,modified:k}=i??{draft:0,published:0,modified:0},h=f+x+k;return e.jsx(G,{children:Object.entries(b).map(([r,n])=>{const g=d?.[r];return g!==null&&e.jsx(K,{as:B,to:n.link,"data-testid":`stat-${r}`,children:e.jsxs(o,{alignItems:"center",gap:2,children:[e.jsx(o,{padding:2,borderRadius:1,background:n.icon.background,color:n.icon.color,children:n.icon.component}),e.jsxs(o,{direction:"column",alignItems:"flex-start",children:[e.jsx(l,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:t(n.label)}),e.jsx(l,{variant:"omega",fontWeight:"bold",textColor:"neutral800",children:z({locale:s,number:r==="entries"?h:g})})]})]})},`key-statistics-${r}`)})})};export{X as KeyStatisticsWidget,U as ProfileWidget};
