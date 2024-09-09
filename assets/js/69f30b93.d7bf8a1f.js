"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[323],{4782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var a=n(4848),l=n(8453);const i={},s="Installation",o={id:"Getting Started/Installation",title:"Installation",description:"Prerequisities",source:"@site/docs/Getting Started/Installation.md",sourceDirName:"Getting Started",slug:"/Getting Started/Installation",permalink:"/docs/Getting Started/Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/napthaai.github.io/tree/main/docs/Getting Started/Installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview of the Naptha Stack",permalink:"/docs/Getting Started/Naptha Stack"},next:{title:"Build a Module",permalink:"/docs/Getting Started/Build a Module"}},r={},h=[{value:"Prerequisities",id:"prerequisities",level:2},{value:"Install Poetry",id:"install-poetry",level:3},{value:"Install the Naptha SDK",id:"install-the-naptha-sdk",level:2},{value:"Install the Naptha Node (Optional)",id:"install-the-naptha-node-optional",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.h2,{id:"prerequisities",children:"Prerequisities"}),"\n",(0,a.jsx)(t.h3,{id:"install-poetry",children:"Install Poetry"}),"\n",(0,a.jsxs)(t.p,{children:["From the official poetry ",(0,a.jsx)(t.a,{href:"https://python-poetry.org/docs/#installing-with-the-official-installer",children:"docs"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -sSL https://install.python-poetry.org | python3 -\nexport PATH="/home/$(whoami)/.local/bin:$PATH"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"install-the-naptha-sdk",children:"Install the Naptha SDK"}),"\n",(0,a.jsxs)(t.p,{children:["The best place to get started is by using the ",(0,a.jsx)(t.a,{href:"https://github.com/NapthaAI/naptha-sdk",children:"Naptha SDK"}),". To install from source:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/naptha-sdk.git\ncd naptha-sdk\npoetry install\npoetry shell\n"})}),"\n",(0,a.jsx)(t.p,{children:"Create a copy of the .env file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You will need to add a value to ",(0,a.jsx)(t.code,{children:"PRIVATE_KEY"})," in .env. You can generate and output one to the commandline using ",(0,a.jsx)(t.code,{children:"naptha user"}),". Then copy and paste the value into the .env file."]}),"\n",(0,a.jsx)(t.p,{children:"To check the installation, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"naptha\n"})}),"\n",(0,a.jsx)(t.h2,{id:"install-the-naptha-node-optional",children:"Install the Naptha Node (Optional)"}),"\n",(0,a.jsx)(t.p,{children:"To get started initially, you can run the Naptha SDK using a hosted node."}),"\n",(0,a.jsxs)(t.p,{children:["When you're ready to run your own node, please reach out the Naptha team at ",(0,a.jsx)(t.a,{href:"mailto:team@naptha.ai",children:"team@naptha.ai"}),". We'll add you to the ",(0,a.jsx)(t.a,{href:"https://github.com/NapthaAI/node",children:"Naptha Node"})," repository. With the installation script, it's super easy to set up and takes about 5 minutes to install on a fresh instance."]}),"\n",(0,a.jsx)(t.p,{children:"From source:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/node.git\ncd node\n"})}),"\n",(0,a.jsx)(t.p,{children:"Then run the node:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bash launch.sh\n"})}),"\n",(0,a.jsx)(t.p,{children:"This will install all of the components, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Python 3.12 (pre-Requirement)"}),"\n",(0,a.jsx)(t.li,{children:"Poetry (manages dependencies)"}),"\n",(0,a.jsx)(t.li,{children:"SurrealDB (Naptha Protocol info is stored here)"}),"\n",(0,a.jsx)(t.li,{children:"RabbitMQ (message-broker for the Naptha Protocol)"}),"\n",(0,a.jsx)(t.li,{children:"Ollama (used to run LLMs)"}),"\n",(0,a.jsx)(t.li,{children:"Docker (isolates Modules from the system)"}),"\n",(0,a.jsx)(t.li,{children:"Naptha node (orchestrates ML workflows)"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The first time you launch, you will be prompted about whether (i) to generate a private key, and (ii) to input a Stability API key, which is needed if you would like to run the image module examples. If you choose not to, you can always edit the .env file manually later."}),"\n",(0,a.jsxs)(t.p,{children:["After a few minutes you should see,",(0,a.jsx)(t.code,{children:"[System] Setup complete. Applications are running."})]}),"\n",(0,a.jsx)(t.p,{children:"Then, in a new terminal window run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"journalctl -u nodeapp -n 100 -f\n"})}),"\n",(0,a.jsx)(t.p,{children:"That's it! You're now running a local AI node."}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use the SDK with your local node, change ",(0,a.jsx)(t.code,{children:"NODE_URL=http://localhost:7001"})," in the .env file."]})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const l={},i=a.createContext(l);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);