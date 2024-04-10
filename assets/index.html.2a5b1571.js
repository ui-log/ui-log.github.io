const e={key:"v-1e1909c5",path:"/docs/Nextjs/2024-04-05-Step-by-StepGuideforDeployingaReactApplicationonAzureAppServiceDockerAzureContainerRegistryAzureDevOpsPipelinePart1/",title:"\uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 Azure App Service, Docker, Azure Container Registry, Azure DevOps Pipeline\uC5D0 \uBC30\uD3EC\uD558\uAE30",lang:"ko",frontmatter:{title:"\uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 Azure App Service, Docker, Azure Container Registry, Azure DevOps Pipeline\uC5D0 \uBC30\uD3EC\uD558\uAE30",description:"",date:"2024-04-05 17:52",sidebarDepth:0,tag:"Tech",thumbnail:null,originalTitle:"Step-by-Step Guide for Deploying a React Application on Azure App Service, Docker, Azure Container Registry , Azure DevOps Pipeline | Part 1",link:"https://medium.com/@yogender.singh.wd/step-by-step-guide-for-deploying-a-react-application-on-azure-app-service-docker-azure-container-a3ad2f79bdb1"},excerpt:"",headers:[{level:2,title:"\uB2E8\uACC4 1: React \uC571 \uB9CC\uB4E4\uAE30 \uBC0F \uB85C\uCEEC\uC5D0\uC11C \uBE4C\uB4DC \uD14C\uC2A4\uD2B8",slug:"\u1103\u1161\u11AB\u1100\u1168-1-react-\u110B\u1162\u11B8-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175-\u1106\u1175\u11BE-\u1105\u1169\u110F\u1165\u11AF\u110B\u1166\u1109\u1165-\u1107\u1175\u11AF\u1103\u1173-\u1110\u1166\u1109\u1173\u1110\u1173",children:[]},{level:2,title:"\uB2E8\uACC4 2: React \uC571\uC5D0 Docker \uC801\uC6A9\uD558\uAE30",slug:"\u1103\u1161\u11AB\u1100\u1168-2-react-\u110B\u1162\u11B8\u110B\u1166-docker-\u110C\u1165\u11A8\u110B\u116D\u11BC\u1112\u1161\u1100\u1175",children:[]},{level:2,title:"\uB2E8\uACC4 3: Docker \uC774\uBBF8\uC9C0 \uC0DD\uC131\uD558\uAE30",slug:"\u1103\u1161\u11AB\u1100\u1168-3-docker-\u110B\u1175\u1106\u1175\u110C\u1175-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175",children:[]},{level:2,title:"\uB2E8\uACC4 4: \uC774\uBBF8\uC9C0 \uC2E4\uD589 \uBC0F \uCEE8\uD14C\uC774\uB108 \uD655\uC778",slug:"\u1103\u1161\u11AB\u1100\u1168-4-\u110B\u1175\u1106\u1175\u110C\u1175-\u1109\u1175\u11AF\u1112\u1162\u11BC-\u1106\u1175\u11BE-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1112\u116A\u11A8\u110B\u1175\u11AB",children:[]},{level:2,title:"\uB2E8\uACC4 5: Azure \uCEE8\uD14C\uC774\uB108 \uB808\uC9C0\uC2A4\uD2B8\uB9AC (ACR) \uAD6C\uC131",slug:"\u1103\u1161\u11AB\u1100\u1168-5-azure-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1105\u1166\u110C\u1175\u1109\u1173\u1110\u1173\u1105\u1175-acr-\u1100\u116E\u1109\u1165\u11BC",children:[]},{level:2,title:"\uB2E8\uACC4 6: React \uC774\uBBF8\uC9C0\uB97C Azure \uCEE8\uD14C\uC774\uB108 \uB808\uC9C0\uC2A4\uD2B8\uB9AC\uC5D0 \uD478\uC2DC\uD558\uB294 \uBC29\uBC95: \uC7AC\uBBF8\uC788\uB294 \uC2DC\uC791!",slug:"\u1103\u1161\u11AB\u1100\u1168-6-react-\u110B\u1175\u1106\u1175\u110C\u1175\u1105\u1173\u11AF-azure-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1105\u1166\u110C\u1175\u1109\u1173\u1110\u1173\u1105\u1175\u110B\u1166-\u1111\u116E\u1109\u1175\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u110C\u1162\u1106\u1175\u110B\u1175\u11BB\u1102\u1173\u11AB-\u1109\u1175\u110C\u1161\u11A8",children:[]},{level:2,title:"\uB2E8\uACC4 7: Azure App Service\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBC30\uD3EC",slug:"\u1103\u1161\u11AB\u1100\u1168-7-azure-app-service\u110B\u1166-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1107\u1162\u1111\u1169",children:[]},{level:2,title:"\uAFC0\uD301: ACR\uACFC App Service\uB294 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB098\uC694?",slug:"\u1101\u116E\u11AF\u1110\u1175\u11B8-acr\u1100\u116A-app-service\u1102\u1173\u11AB-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u110C\u1161\u11A8\u1103\u1169\u11BC\u1112\u1161\u1102\u1161\u110B\u116D",children:[]}],git:{updatedTime:1712420138e3},filePathRelative:"docs/Nextjs/2024-04-05-Step-by-StepGuideforDeployingaReactApplicationonAzureAppServiceDockerAzureContainerRegistryAzureDevOpsPipelinePart1/README.md"};export{e as data};
