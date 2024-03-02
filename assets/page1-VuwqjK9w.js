import{a as i,u as m,j as e,C as L,d as p,e as q,N as x,f as F,g as O,h as y,S as z,i as w,B as b,m as u,o as $,k as R,F as K}from"./custom-MINkKIfQ.js";function C(t,s){return Array.isArray(t)?t.includes(s):t===s}const A=i.createContext({});A.displayName="AccordionContext";const g=A,D=i.forwardRef(({as:t="div",bsPrefix:s,className:n,children:r,eventKey:a,...c},o)=>{const{activeEventKey:l}=i.useContext(g);return s=m(s,"accordion-collapse"),e.jsx(L,{ref:o,in:C(l,a),...c,className:p(n,s),children:e.jsx(t,{children:i.Children.only(r)})})});D.displayName="AccordionCollapse";const I=D,B=i.createContext({eventKey:""});B.displayName="AccordionItemContext";const N=B,H=i.forwardRef(({as:t="div",bsPrefix:s,className:n,onEnter:r,onEntering:a,onEntered:c,onExit:o,onExiting:l,onExited:h,...f},v)=>{s=m(s,"accordion-body");const{eventKey:j}=i.useContext(N);return e.jsx(I,{eventKey:j,onEnter:r,onEntering:a,onEntered:c,onExit:o,onExiting:l,onExited:h,children:e.jsx(t,{ref:v,...f,className:p(n,s)})})});H.displayName="AccordionBody";const U=H;function T(t,s){const{activeEventKey:n,onSelect:r,alwaysOpen:a}=i.useContext(g);return c=>{let o=t===n?null:t;a&&(Array.isArray(n)?n.includes(t)?o=n.filter(l=>l!==t):o=[...n,t]:o=[t]),r==null||r(o,c),s==null||s(c)}}const M=i.forwardRef(({as:t="button",bsPrefix:s,className:n,onClick:r,...a},c)=>{s=m(s,"accordion-button");const{eventKey:o}=i.useContext(N),l=T(o,r),{activeEventKey:h}=i.useContext(g);return t==="button"&&(a.type="button"),e.jsx(t,{ref:c,onClick:l,...a,"aria-expanded":Array.isArray(h)?h.includes(o):o===h,className:p(n,s,!C(h,o)&&"collapsed")})});M.displayName="AccordionButton";const V=M,S=i.forwardRef(({as:t="h2",bsPrefix:s,className:n,children:r,onClick:a,...c},o)=>(s=m(s,"accordion-header"),e.jsx(t,{ref:o,...c,className:p(n,s),children:e.jsx(V,{onClick:a,children:r})})));S.displayName="AccordionHeader";const Z=S,E=i.forwardRef(({as:t="div",bsPrefix:s,className:n,eventKey:r,...a},c)=>{s=m(s,"accordion-item");const o=i.useMemo(()=>({eventKey:r}),[r]);return e.jsx(N.Provider,{value:o,children:e.jsx(t,{ref:c,...a,className:p(n,s)})})});E.displayName="AccordionItem";const _=E,W=i.forwardRef((t,s)=>{const{as:n="div",activeKey:r,bsPrefix:a,className:c,onSelect:o,flush:l,alwaysOpen:h,...f}=q(t,{activeKey:"onSelect"}),v=m(a,"accordion"),j=i.useMemo(()=>({activeEventKey:r,onSelect:o,alwaysOpen:h}),[r,o,h]);return e.jsx(g.Provider,{value:j,children:e.jsx(n,{ref:s,...f,className:p(c,v,l&&`${v}-flush`)})})});W.displayName="Accordion";const d=Object.assign(W,{Button:V,Collapse:I,Item:_,Header:Z,Body:U});function Q(){const[t,s]=i.useState(window.innerWidth<991?"vertical":"horizontal");return i.useEffect(()=>{const n=()=>{s(window.innerWidth<991?"vertical":"horizontal")};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e.jsx(e.Fragment,{children:e.jsx(x,{id:"NavigationBar",expand:"lg",collapseOnSelect:!0,className:"bg-secondary",children:e.jsxs(F,{children:[e.jsx(x.Brand,{href:"#home",children:e.jsx("img",{src:O,height:"52",width:"auto",className:"d-inline-block align-top",alt:"Logo"})}),e.jsx(x.Toggle,{"aria-controls":"responsive-navbar-nav"}),e.jsx(x.Collapse,{id:"responsive-navbar-nav",children:e.jsx(y,{variant:"underline",children:e.jsxs(z,{direction:t,gap:5,children:[e.jsx(y.Link,{className:"nav-item m-auto",href:"#home",children:"Home"}),e.jsx(y.Link,{className:"nav-item m-auto",href:"#about-us",children:"About Us"}),e.jsxs(w,{className:"nav-item m-auto",title:"Services",id:"basic-nav-dropdown",children:[e.jsx(w.Item,{href:"services",children:"Web Development"}),e.jsx(w.Item,{href:"services",children:"Mobile Development"}),e.jsx(w.Item,{href:"services",children:"System Development"})]}),e.jsx(y.Link,{className:"nav-item m-auto",href:"faq",children:"FAQ"})]})})}),e.jsx(b,{href:"https://wa.me/6282138754680",target:"_blank",rel:"noreferrer",variant:"primary",className:"navBtn",children:"Get in touch"})]})})})}function Y(){return e.jsx("div",{className:"bg-secondary",children:e.jsxs("div",{className:"container Hero",children:[e.jsxs(u.div,{layout:!0,transition:{duration:1,type:"spring",bounce:.5},initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"hero-copy",children:[e.jsxs("div",{className:"header",children:[e.jsx("h1",{className:"hero-header text-primary",children:"Inspiring"}),e.jsx("h1",{className:"hero-header text-light",children:"Digital Innovation"})]}),e.jsx("p",{className:"hero-desc text-light",children:"Innovative Software House to Bring Your Ideas to Life. We are your trusted partner in web, mobile, and software development."}),e.jsx(b,{href:"#about-us",variant:"primary",children:"Dive In"})," "]}),e.jsx("img",{className:"hero-ornament",src:$,alt:""})]})})}const G="/assets/about-0u-Hz7dC.png";function J(){return e.jsx(e.Fragment,{children:e.jsxs("div",{id:"about-us",className:" container d-flex about bg-light",children:[e.jsxs(u.div,{layout:!0,transition:{duration:1},initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"about-copy",children:[e.jsx("h1",{className:"about-header text-dark",children:"Unlock Your Development Potential with Us"}),e.jsx("p",{className:"about-desc text-dark",children:"At our software house, we offer a range of services in web, mobile, and system development. With our expertise and dedication, we provide tailored solutions to meet your unique needs and help you achieve your goals."}),e.jsx(b,{href:"https://wa.me/6282138754680",target:"_blank",rel:"noreferrer",variant:"primary",children:"Contact Us"})," "]}),e.jsx(u.img,{fluid:!0,transition:{duration:1},initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"about-image",src:G,alt:""})]})})}const X="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%209.33335C4.5%208.20514%204.50212%207.45958%204.57651%206.9063C4.64703%206.38179%204.76558%206.18215%204.89052%206.05721C5.01546%205.93227%205.2151%205.81372%205.73961%205.7432C6.29289%205.66881%207.03845%205.66669%208.16667%205.66669H19.8333C20.9615%205.66669%2021.7071%205.66881%2022.2604%205.7432C22.7849%205.81372%2022.9845%205.93227%2023.1095%206.05721C23.2344%206.18215%2023.353%206.38179%2023.4235%206.9063C23.4979%207.45958%2023.5%208.20514%2023.5%209.33335V18.8333H4.5V9.33335Z'%20stroke='%23D64923'%20stroke-width='2'/%3e%3cpath%20d='M4.27778%2018.8333C3.29594%2018.8333%202.5%2019.6293%202.5%2020.6111C2.5%2022.0225%203.64416%2023.1666%205.05556%2023.1666H22.9444C24.3558%2023.1666%2025.5%2022.0225%2025.5%2020.6111C25.5%2019.6293%2024.7041%2018.8333%2023.7222%2018.8333H4.27778Z'%20stroke='%23D64923'%20stroke-width='2'/%3e%3c/svg%3e",P="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5.66667'%20y='3.33331'%20width='16.6667'%20height='21.3333'%20rx='2'%20stroke='%23D64923'%20stroke-width='2'/%3e%3cpath%20d='M17.5%2019.8333H10.5'%20stroke='%23D64923'%20stroke-width='2'/%3e%3c/svg%3e",ee="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.16666%2012.8334C8.16666%2010.6335%208.16666%209.53352%208.85007%208.8501C9.53349%208.16669%2010.6334%208.16669%2012.8333%208.16669H15.1667C17.3665%208.16669%2018.4665%208.16669%2019.1499%208.8501C19.8333%209.53352%2019.8333%2010.6335%2019.8333%2012.8334V15.1667C19.8333%2017.3666%2019.8333%2018.4665%2019.1499%2019.1499C18.4665%2019.8334%2017.3665%2019.8334%2015.1667%2019.8334H12.8333C10.6334%2019.8334%209.53349%2019.8334%208.85007%2019.1499C8.16666%2018.4665%208.16666%2017.3666%208.16666%2015.1667V12.8334Z'%20stroke='%23D64923'%20stroke-width='2'/%3e%3crect%20x='11.6667'%20y='11.6667'%20width='4.66667'%20height='4.66667'%20rx='1'%20fill='%23D64923'/%3e%3cpath%20d='M11.6667%208.16669V4.66669'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.3333%208.16669V4.66669'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.8333%2011.6667L23.3333%2011.6667'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.8333%2016.3334L23.3333%2016.3334'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M11.6667%2023.3333V19.8333'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.3333%2023.3333V19.8333'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.66666%2011.6667L8.16666%2011.6667'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.66666%2016.3334L8.16666%2016.3334'%20stroke='%23D64923'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",se="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Expand_right'%3e%3cpath%20id='Vector%209'%20d='M9.5%206L15.5%2012L9.5%2018'%20stroke='%23D64923'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e",k={initial:{opacity:0,y:100},animate:{opacity:1,y:0}},te=[{id:1,icon:X,name:"Web Development",desc:"With a website, your business could be improved by having a stronger brand-awareness, reaching more market like never before"},{id:2,icon:P,name:"Mobile Development",desc:"With an app, your business could be enabled and scaled infinitely as onboarding customers via app is much more scalable."},{id:3,icon:ee,name:"System Development",desc:"With a system, your business processes could be automated and streamlined, resulting in a reduced cost, and higher net-profits."}];function ne(){return e.jsx(e.Fragment,{children:e.jsxs("div",{id:"our-services",className:"container services d-flex flex-column",children:[e.jsxs(u.div,{variants:k,initial:"initial",whileInView:"animate",viewport:{once:!0},className:"services-copy",children:[e.jsx("h1",{className:"services-header text-secondary",children:"Our Services"}),e.jsx("p",{className:"services-desc text-secondary",children:"We offer comprehensive web, mobile, and system development services."})]}),e.jsx("div",{className:"services-card d-flex flex-row",children:te.map((t,s)=>e.jsxs(u.div,{variants:k,initial:"initial",whileInView:"animate",viewport:{once:!0},transition:{delay:.4*s},className:"cards",children:[e.jsxs("div",{className:"cards-header",children:[e.jsx("img",{src:t.icon}),e.jsx("h2",{className:"headers text-primary",children:t.name})]}),e.jsx("p",{className:"card-desc",children:t.desc}),e.jsxs(u.a,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},className:"btn-services",href:"/services",style:{textDecoration:"none"},children:["Learn More ",e.jsx("img",{src:se,alt:""})]})]},s))})]})})}function oe(){return e.jsx("div",{className:"container d-flex justify-content-center faq-section d-flex flex-row",children:e.jsxs("div",{className:"faq",children:[e.jsxs(u.div,{initial:{opacity:0,y:-150},whileInView:{opacity:1,y:0},transition:{duration:1,type:"spring",bounce:.3},viewport:{once:!0},className:"faq-copy",children:[e.jsx("h1",{className:"faq-header",children:"FAQ"}),e.jsx("p",{className:"faq-desc",children:"Find answers to common questions about our services and processes."})]}),e.jsx(u.div,{initial:{opacity:0,y:150},whileInView:{opacity:1,y:0},transition:{duration:1,type:"spring",bounce:.3},viewport:{once:!0},className:"faq-qna",children:e.jsxs(d,{defaultActiveKey:"",children:[e.jsxs(d.Item,{eventKey:"0",children:[e.jsx(d.Header,{children:"What kind of businesses can benefit from your software development services?"}),e.jsx(d.Body,{children:"Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."})]}),e.jsxs(d.Item,{eventKey:"1",children:[e.jsx(d.Header,{children:"How does your development process ensure our project aligns with our business goals?"}),e.jsx(d.Body,{children:"We begin with a thorough consultation to understand your business objectives. Our development process is transparent and iterative, involving regular updates and feedback sessions. This ensures that the final product not only meets but exceeds your expectations, aligning seamlessly with your strategic business goals."})]}),e.jsxs(d.Item,{eventKey:"2",children:[e.jsx(d.Header,{children:"Can your software solutions integrate with our existing systems?"}),e.jsx(d.Body,{children:"Absolutely. Our approach is to create solutions that can seamlessly integrate with your existing systems. We prioritize compatibility and scalability, ensuring that our software not only enhances your current operations but also adapts to future technological advancements and business growth."})]}),e.jsxs(d.Item,{eventKey:"3",children:[e.jsx(d.Header,{children:"What kind of ongoing support and maintenance do you offer post-development?"}),e.jsx(d.Body,{children:"Post-development, we offer comprehensive support and maintenance to ensure your software continues to run smoothly. This includes regular updates, bug fixes, and performance optimization. Additionally, we provide dedicated customer service to address any queries or modifications you may need."})]})]})})]})})}function re(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{}),e.jsx(Y,{}),e.jsx(J,{}),e.jsx(ne,{}),e.jsx(oe,{}),e.jsx(R,{}),e.jsx(K,{})]})}export{d as A,re as a};