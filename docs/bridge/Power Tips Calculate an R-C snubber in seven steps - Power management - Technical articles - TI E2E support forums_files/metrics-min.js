function linkCode(t,e,c){utag.link({lc_eventName:e,lc_exitLinkID:t,link_text:c,link_type:"exit link"})}function onclickTrack(t,e,c,o){utag.link({link_text:t,oct_eventName:e,oct_pageName:c,oct_contentGroup:o})}function activitybarTrack(t,e,c,o){utag.link({ab_obj:t,ab_linkType:e,ab_part:c,ab_partType:o})}function ClearVars(){return!0}function sethomePagePromoId(t){"undefined"!=typeof utag?utag.link({homepagePromoID:t}):setTimeout(sethomePagePromoId(t),500)}function setpromoIdCount(t){"undefined"!=typeof utag?utag.link({activityPromoID:t}):setTimeout(setpromoIdCount(t),500)}function setProductPromoIdCount(t){"undefined"!=typeof utag?utag.link({productPromoID:t}):setTimeout(setProductPromoIdCount(t),500)}function onclickCookies(){return!0}function ClearVars(){return!0}function _hbEvent(t,e){}function _hbExitLink(){return!0}function _hbLink(t,e){}function tiStoreCheckOut(t,e,c,o,r,i){utag.link({link_text:t,eventName:"sample checkout",stCK_pageName:e,stCK_tcContentGroup:c,tcPartNumber:o,sampleCheckoutType:r,crossSellOffer:i})}function tiStoreCrossSellAccepted(t,e,c,o){utag.link({tcPartNumber:t,crossSellProduct:e,sampleCheckoutType:c,firstCrossSell:o})}if(!tiPageName)var tiPageName="PUT+PAGE+NAME+HERE";if(!tiContentGroup)var tiContentGroup="CONTENT+CATEGORY";if(!tiDesign)var tiDesign="null";if(!promoIdCount)var promoIdCount="null";if(!homePagePromoIdCount)var homePagePromoIdCount="null";if(!window.com)var com=new Object;com.TI||(com.TI=new Object),com.TI.shared||(com.TI.shared=new Object),com.TI.shared.Util=function(){function t(){return{checkDefined:function(t){return t="undefined"==typeof t?"":t},getHashValue:function(t,e){return t?checkDefined(t[e]):""},getValue:function(t,e){return 0==t[e].length?"":t[e]},checkNull:function(t){return t=""==t?"":t},isEmpty:function(t){return"undefined"==typeof t||null===t||""===t||(!("number"!=typeof t||!isNaN(t))||!!(t instanceof Date&&isNaN(Number(t))))},splitString:function(t,e){return""===e&&(e=" "),t.split(e)},getLeftString:function(t,e){return e<=0?"":e>String(t).length?t:String(t).substring(0,e)},getRightString:function(t,e){if(e<=0)return"";if(e>String(t).length)return t;var c=String(t).length;return String(t).substring(c,c-e)},replaceString:function(t,e,c){return String(e).length<=0||String(c).length<=0?t:String(e).length<=0?"":String(e).length>String(t).length?t:String(t).replace(e,c)},getCookie:function(t){return document.cookie.length>0&&(cookStart=document.cookie.indexOf(t+"="),cookStart!=-1)?(cookStart=cookStart+t.length+1,cookEnd=document.cookie.indexOf(";",cookStart),cookEnd==-1&&(cookEnd=document.cookie.length),unescape(document.cookie.substring(cookStart,cookEnd))):""},trimString:function(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},popUrlParamValues:function(t){var e=new Array;"undefined"==typeof t?t=location.href:"/"==t[0]&&(t=location.host+t);var c=/^((\w+):\/\/\/?)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#;\|]+)?([;\|])?([^\?#]+)?\??([^#]+)?#?(\w*)/,o=c.exec(t);return e.url="undefined"==typeof o[0]?"":o[0],e.protocol="undefined"==typeof o[2]?"":o[2],e.userName="undefined"==typeof o[4]?"":o[4],e.password="undefined"==typeof o[5]?"":o[5],e.host="undefined"==typeof o[6]?"":o[6],e.port="undefined"==typeof o[7]?"":o[7],e.pathName="undefined"==typeof o[8]?"":o[8],e.urlParamSeparator="undefined"==typeof o[9]?"":o[9],e.urlParam="undefined"==typeof o[10]?"":o[10],e.queryString="undefined"==typeof o[11]?"":o[11],e.fragment="undefined"==typeof o[12]?"":o[12],e}}}var e=null;return{getInstance:function(){return e||(e=t()),e}}}(),window.com||(com=new Object),com.TI||(com.TI=new Object),com.TI.Metrics||(com.TI.Metrics=new Object),com.TI.Metrics.wrapperSitePath=["/ww/mx/","/ww/br/","/ww/eu/","/ww/fr/","/ww/de/","/ww/cz/","/ww/hu/","/ww/it/","/ww/pl/","/ww/ru/","/ww/kr/","/ww/tw/","/ww/in/","/ww/vi/"],com.TI.Metrics.langMap={en:"en",cn:"cn",jp:"jp",mx:"mx",br:"br",eu:"eu",fr:"fr",de:"de",cz:"cz",hu:"hu",it:"it",pl:"pl",ru:"ru",kr:"kr",tw:"tw","in":"in",vi:"vi"};var vUtilNS=com.TI.shared.Util.getInstance();com.TI.Metrics.tcURL=unescape(document.URL).toLowerCase(),com.TI.Metrics.tcUrlParamValues=vUtilNS.popUrlParamValues(com.TI.Metrics.tcURL),com.TI.Metrics.tcHostName=vUtilNS.getValue(com.TI.Metrics.tcUrlParamValues,"host"),com.TI.Metrics.tcPathName=vUtilNS.getValue(com.TI.Metrics.tcUrlParamValues,"pathName"),com.TI.Metrics.tcQueryString=vUtilNS.getValue(com.TI.Metrics.tcUrlParamValues,"queryString"),com.TI.Metrics.tcNameSpace="texasinstrument",com.TI.Metrics.tcTrackingServer="texasinstrument.122.2o7.net",com.TI.Metrics.tcCharSet="UTF-8",com.TI.Metrics.tcCurrencyCode="USD",null!=com.TI.Metrics.tcQueryString&&com.TI.Metrics.tcQueryString.indexOf("&")!=-1&&(com.TI.Metrics.QueryStrParams=com.TI.Metrics.tcQueryString.split("&")),com.TI.Metrics.checkContentGroup=function(){return"undefined"!=typeof tiContentGroup&&(""!=vUtilNS.checkDefined(tiContentGroup)&&"CONTENT+CATEGORY"!=vUtilNS.checkDefined(tiContentGroup)||""!=vUtilNS.checkNull(tiContentGroup)&&"CONTENT+CATEGORY"!=vUtilNS.checkNull(tiContentGroup))}(),com.TI.Metrics.validContentGroup=function(){return!!com.TI.Metrics.checkContentGroup&&(!!(tiContentGroup.replace("//","/").length>=2&&tiContentGroup.match(/[a-zA-Z]/g))||(com.TI.Metrics.checkContentGroup=!1,!1))}(),com.TI.Metrics.tcContentGroup=function(){var t="";if("software-dl.ti.com"==com.TI.Metrics.tcHostName||"software-dl-1.ti.com"==com.TI.Metrics.tcHostName||"software-dl-2.ti.com"==com.TI.Metrics.tcHostName||"downloads.ti.com"==com.TI.Metrics.tcHostName?t="/software":"webench.ti.com"==com.TI.Metrics.tcHostName&&(tiContentGroup="/Analog & Mixed-Signal/Analog Design Services/"),"CONTENT+CATEGORY"!=tiContentGroup&&com.TI.Metrics.validContentGroup)return t+tiContentGroup.replace("//","/").replace(/\/$/,"");if(1==com.TI.Metrics.checkContentGroup)return t+tiContentGroup.replace("//","/").replace(/\/$/,"");if(""!=com.TI.Metrics.tcPathName){if("/"==com.TI.Metrics.tcPathName)return"home page";var e=com.TI.Metrics.tcPathName.substring(com.TI.Metrics.tcPathName.indexOf("/"),com.TI.Metrics.tcPathName.lastIndexOf("/"));return t+vUtilNS.trimString(e)}return t+tiContentGroup.replace("//","/").replace(/\/$/,"")}(),com.TI.Metrics.tcPageName=function(){if(com.TI.Metrics.tcURL.indexOf("/devnet/docs/catalog/searchcompanyresults.tsp")>=0?tiPageName="tidn company search results":com.TI.Metrics.tcURL.indexOf("/devnet/docs/catalog/searchproductresults.tsp")>=0&&(tiPageName="tidn solution search results"),"undefined"==typeof tiPageName||"PUT+PAGE+NAME+HERE"==tiPageName?(com.TI.Metrics.tcPageName=document.title,com.TI.Metrics.tcPageName=com.TI.Metrics.tcPageName.toLowerCase()):(com.TI.Metrics.tcPageName=tiPageName,com.TI.Metrics.tcPageName=com.TI.Metrics.tcPageName.toLowerCase()),("e2e.ti.com"==com.TI.Metrics.tcHostName||"e2eprivate.ti.com"==com.TI.Metrics.tcHostName||"www.deyisupport.com"==com.TI.Metrics.tcHostName||"e2eprivate-uat.ti.com"==com.TI.Metrics.tcHostName||"e2e-uat.ti.com"==com.TI.Metrics.tcHostName||"e2ecn-uat.ti.com"==com.TI.Metrics.tcHostName)&&com.TI.Metrics.tcPageName.length>100){var t=com.TI.Metrics.tcPageName.length-100+3;com.TI.Metrics.tcPageName=vUtilNS.replaceString(com.TI.Metrics.tcPageName,vUtilNS.getRightString(com.TI.Metrics.tcPageName,t),"...")}else{if(com.TI.Metrics.tcPageName.length>100){var t=com.TI.Metrics.tcPageName.length-100+3;com.TI.Metrics.tcPageName=vUtilNS.replaceString(com.TI.Metrics.tcPageName,vUtilNS.getLeftString(com.TI.Metrics.tcPageName,t),"...")}"/"==com.TI.Metrics.tcPageName.charAt(0)&&(com.TI.Metrics.tcPageName=com.TI.Metrics.tcPageName.slice(1))}return vUtilNS.trimString(com.TI.Metrics.tcPageName)}(),com.TI.Metrics.tcChannel=function(){if("undefined"!=typeof tiChannel&&""!=tiChannel)return tiChannel;if(1==com.TI.Metrics.checkContentGroup){var t={"/apps/samp/":"E-Commerce","/apps/sampcert/":"E-Commerce","/Training":"Design Support","/myti/portal/":"Account"};for(var e in t)if(tiContentGroup.indexOf(e)!=-1)return t[e]}if("undefined"!=typeof com.TI.Metrics.tcPathName&&""!=com.TI.Metrics.tcPathName){var c={"/prod/folders/":"Products","/toolsw/folders/":"Products","/analog/docs/":"Products","/hirel/docs/":"Products","/logic/docs/":"Products","/dsp/docs/":"Products","/mcu/docs/":"Products","/rfid/":"Products","/arm/":"Products","/asic/":"Products","/storage/":"Products","/solution/folders/":"Solutions","/apps/docs":"Solutions","/corp/":"Corporate","/research/":"Corporate","/careers/":"Corporate","/quality/":"Design Support","/adc/":"Design Support","/docs/training/":"Design Support","/techdays/":"Design Support","/product/":"Products","/tool/":"Products","/solution/":"Solutions","/nationalsemiconductor/":"Products"};for(var o in c)if(com.TI.Metrics.tcPathName.indexOf(o)!=-1)return c[o]}var r={"estore.ti.com":"E-Commerce","store.ti.com":"E-Commerce","uat.estore-tisep.harte-hanks.com":"E-Commerce","commerce.ti.com":"E-Commerce","commerce-test.itg.ti.com":"E-Commerce","e2e.ti.com":"Design Support","www-k.ext.ti.com":"Design Support","www.deyisupport.com":"Design Support","e2eprivate.ti.com":"Design Support","e2e-uat.ti.com":"Design Support","e2ecn-uat.ti.com":"Design Support","e2eprivate-uat.ti.com":"Design Support","newscenter.ti.com":"Corporate","investor.ti.com":"Corporate"};for(var i in r)if(com.TI.Metrics.tcHostName===i)return r[i];return"Unknown"}(),com.TI.Metrics.tcLanguage=function(){var t=function(){if(""==vUtilNS.checkNull(com.TI.Metrics.tcPathName)||""==vUtilNS.checkDefined(com.TI.Metrics.tcPathName))return"en";if("www.ti.com.cn"==com.TI.Metrics.tcHostName||"www-cn-sat.itg.ti.com"==com.TI.Metrics.tcHostName||"www-cn-uat.itg.ti.com"==com.TI.Metrics.tcHostName||"www-cn-int.itg.ti.com"==com.TI.Metrics.tcHostName||"m.ti.com.cn"==com.TI.Metrics.tcHostName)return"cn";if("www.tij.co.jp"==com.TI.Metrics.tcHostName||"www-jp-sat.itg.ti.com"==com.TI.Metrics.tcHostName||"m.tij.co.jp"==com.TI.Metrics.tcHostName||"www-jp-uat.itg.ti.com"==com.TI.Metrics.tcHostName||"www-jp-int.itg.ti.com"==com.TI.Metrics.tcHostName)return"jp";var t=vUtilNS.splitString(com.TI.Metrics.tcPathName,"/");if(!(t.length<1)){t.shift();var e=t.shift();return""==vUtilNS.checkNull(e)?"en":("ww"==e&&(e=t.shift()),e)}return"en"}();return com.TI.Metrics.langMap.hasOwnProperty(t)?com.TI.Metrics.langMap[t]:"en"}(),com.TI.Metrics.tcFolderType=function(){if(com.TI.Metrics.tcPageName.indexOf("product folder")!=-1||com.TI.Metrics.tcPageName.indexOf("产�?文件夹")!=-1||com.TI.Metrics.tcPageName.indexOf("プロダクト・フォルダ")!=-1)return"TI Product Folder";if(com.TI.Metrics.tcPageName.indexOf("software folder")!=-1||com.TI.Metrics.tcPageName.indexOf("软件文件夹")!=-1||com.TI.Metrics.tcPageName.indexOf("ソフトウェア・フォルダ")!=-1)return"TI Software Folder";if(com.TI.Metrics.tcPageName.indexOf("third partytool folder")!=-1||com.TI.Metrics.tcPageName.indexOf("第三方工具文件夹")!=-1||com.TI.Metrics.tcPageName.indexOf("サードパーティツール・フォルダ")!=-1)return"TI 3P Tool Folder";if(com.TI.Metrics.tcPageName.indexOf("tool folder")!=-1||com.TI.Metrics.tcPageName.indexOf("工具文件夹")!=-1||com.TI.Metrics.tcPageName.indexOf("ツール・フォルダ")!=-1)return"TI Tool Folder";if(com.TI.Metrics.tcPathName.indexOf("/solution/")!=-1)return"TI Solution Folder";if(""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/thirdparty/catalog/")!=-1&&null!=com.TI.Metrics.tcQueryString){var t=com.TI.Metrics.tcQueryString.split("&");if(!(t.length<1))for(var e=t.length,c=0,o=e;c<o;++c){var r=t[c].split("=");if("productfolder"==r[1])return"Third-party Folder"}}return""}(),com.TI.Metrics.tcInternalSearch=function(){if("undefined"!=typeof ev1){var t,e,c=ev1.keywords,o=ev1.attr1;return"Success"!=ev1.attr2?(t="",e="null : "+c):(t=c,e=""),[c,o,t,e]}return["","","",""]}(),com.TI.Metrics.tcIntSearchKeywords=com.TI.Metrics.tcInternalSearch[0],com.TI.Metrics.tcIntSearchType=com.TI.Metrics.tcInternalSearch[1],com.TI.Metrics.tcIntSearchResults=com.TI.Metrics.tcInternalSearch[2],com.TI.Metrics.tcIntNullSearchResults=com.TI.Metrics.tcInternalSearch[3],com.TI.Metrics.tcContentHierarchy=function(){if("undefined"!=typeof tiContentHierarchy&&""!=tiContentHierarchy)return tiContentHierarchy;if(com.TI.Metrics.tcPathName.indexOf("/folders/")!=-1&&1==com.TI.Metrics.checkContentGroup){var t="/";if(com.TI.Metrics.tcContentGroup.indexOf(t)!=-1){var e=vUtilNS.splitString(com.TI.Metrics.tcContentGroup,t);if(e.length>1){e.shift();var c,o,r,i,n=e.pop();if(e.length<5)c=e[0],o=e[1],r=e[2],i=e[3];else for(c=e.shift(),o=e.shift(),r=e.shift();0!=e.length;)"undefined"==typeof i?i=e.shift():i+="/"+e.shift();return[n,c,o,r,i]}}}if(com.TI.Metrics.tcPathName.indexOf("/product/")!=-1&&1==com.TI.Metrics.checkContentGroup){var t="/";if(com.TI.Metrics.tcContentGroup.indexOf(t)!=-1){var e=vUtilNS.splitString(com.TI.Metrics.tcContentGroup,t);if(e.length>1){e.shift();var c,o,r,i,n=e.pop();if(e.length<5)c=e[0],o=e[1],r=e[2],i=e[3];else for(c=e.shift(),o=e.shift(),r=e.shift();0!=e.length;)"undefined"==typeof i?i=e.shift():i+="/"+e.shift();return[n,c,o,r,i]}}}if(com.TI.Metrics.tcPathName.indexOf("/tool/")!=-1&&1==com.TI.Metrics.checkContentGroup){var t="/";if(com.TI.Metrics.tcContentGroup.indexOf(t)!=-1){var e=vUtilNS.splitString(com.TI.Metrics.tcContentGroup,t);if(e.length>1){e.shift();var c,o,r,i,n=e.pop();if(e.length<5)c=e[0],o=e[1],r=e[2],i=e[3];else for(c=e.shift(),o=e.shift(),r=e.shift();0!=e.length;)"undefined"==typeof i?i=e.shift():i+="/"+e.shift();return[n,c,o,r,i]}}}if(com.TI.Metrics.tcPathName.indexOf("/solution/")!=-1&&1==com.TI.Metrics.checkContentGroup){var t="/";if(com.TI.Metrics.tcContentGroup.indexOf(t)!=-1){var e=vUtilNS.splitString(com.TI.Metrics.tcContentGroup,t);if(e.length>1){e.shift();var c,o,r,i,n=e.pop();if(e.length<5)c=e[0],o=e[1],r=e[2],i=e[3];else for(c=e.shift(),o=e.shift(),r=e.shift();0!=e.length;)"undefined"==typeof i?i=e.shift():i+="/"+e.shift();return[n,c,o,r,i]}}}if(1==com.TI.Metrics.checkContentGroup||com.TI.Metrics.tcPathName.indexOf("/")>-1){var t="/";if(com.TI.Metrics.tcContentGroup.indexOf(t)!=-1){var e=vUtilNS.splitString(com.TI.Metrics.tcContentGroup,t),a=com.TI.Metrics.tcContentGroup.indexOf("/");"0"==a&&e.length>1&&e.shift();var c,o,r,i;if(e.length<5)c=e[0],o=e[1],r=e[2],i=e[3];else for(c=e.shift(),o=e.shift(),r=e.shift();0!=e.length;)"undefined"==typeof i?i=e.shift():i+="/"+e.shift();return["",c,o,r,i]}var c=com.TI.Metrics.tcContentGroup;return["",c,"","",""]}return["","","","",""]}(),com.TI.Metrics.tcPartNumber=vUtilNS.checkDefined(com.TI.Metrics.tcContentHierarchy[0]),com.TI.Metrics.tcContentHierarchy1=vUtilNS.checkDefined(com.TI.Metrics.tcContentHierarchy[1]),com.TI.Metrics.tcContentHierarchy2=vUtilNS.checkDefined(com.TI.Metrics.tcContentHierarchy[2]),com.TI.Metrics.tcContentHierarchy3=vUtilNS.checkDefined(com.TI.Metrics.tcContentHierarchy[3]),com.TI.Metrics.tcContentHierarchy4=vUtilNS.checkDefined(com.TI.Metrics.tcContentHierarchy[4]),com.TI.Metrics.tcPermanentId=function(){var t=vUtilNS.getCookie("TIPASSID");if(""!=t){var e=vUtilNS.splitString(t,"|");if(e.length>0){var c=vUtilNS.splitString(e[0],"=");if(c.length>0)return c[1]}}return""}(),com.TI.Metrics.tcUserState=function(){return""==com.TI.Metrics.tcPermanentId?"Anonymous":"Registered"}(),com.TI.Metrics.tcPathByUserType=function(){return com.TI.Metrics.tcUserState+":"+com.TI.Metrics.tcPageName}(),com.TI.Metrics.tcE2EGroup=function(){if("e2e.ti.com"==com.TI.Metrics.tcHostName&&""!=com.TI.Metrics.tcPathName){var t=vUtilNS.splitString(com.TI.Metrics.tcPathName,"/");if(t.length>1){t.shift();var e=t.shift();return com.TI.Metrics.langMap.hasOwnProperty(e)&&(e=t.shift()),e}}return""}(),com.TI.Metrics.tcDomainLevels=function(){var t;if(com.TI.Metrics.tcHostName.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))?t=/^(.*\.)*(.*\.[a-z]{2,3}\.[a-z]{2})$/i:com.TI.Metrics.tcHostName.match(new RegExp(/\.[a-z]{2,4}$/i))&&(t=/^(.*\.)*(.*\.[a-z]{2,4})$/i),""==vUtilNS.checkNull(t)||""==vUtilNS.checkDefined(t))return com.TI.Metrics.tcHostName;if(t)var e=t.exec(com.TI.Metrics.tcHostName);return""==e?com.TI.Metrics.tcHostName:e&&e.length>0?(tLevelDomain=e[1],""!=vUtilNS.checkNull(tLevelDomain)&&""!=vUtilNS.checkDefined(tLevelDomain)||(tLevelDomain=com.TI.Metrics.tcHostName),sLevelDomain=e[2],[tLevelDomain,sLevelDomain]):void 0}(),com.TI.Metrics.tcSubDomain=com.TI.Metrics.tcDomainLevels[0],com.TI.Metrics.tcDomain=com.TI.Metrics.tcDomainLevels[1],com.TI.Metrics.tcPageType=function(){if("undefined"!=typeof tiPageType&&""!=tiPageType)return tiPageType;if(""==vUtilNS.checkNull(com.TI.Metrics.tcPathName)||""==vUtilNS.checkDefined(com.TI.Metrics.tcPathName)||"/"===com.TI.Metrics.tcPathName)return"www.ti.com"!=com.TI.Metrics.tcHostName?"Unknown":"Homepage";var t=function(){for(var t=0;t<com.TI.Metrics.wrapperSitePath.length;t++)if(com.TI.Metrics.wrapperSitePath[t]===com.TI.Metrics.tcPathName)return"true";return"false"}();if(com.TI.Metrics.tcPathName.indexOf("/tihome/")!=-1||"true"===t)return"Homepage";if(com.TI.Metrics.tcContentGroup.indexOf("/myti/portal/")!=-1)return"Login";if(""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/paramsearch/")!=-1)return"Node Category";if("undefined"!=typeof com.TI.Metrics.tcE2EGroup&&""!=com.TI.Metrics.tcE2EGroup){var e="Unknown";switch(com.TI.Metrics.tcE2EGroup){case"blogs":e="Blogs";break;case"videos":e="Video";break;case"support":e="Forum";break;case"wikis":e="Forum"}return e}return"processors.wiki.ti.com"===com.TI.Metrics.tcHostName?"Wiki":"register.ti.com"===com.TI.Metrics.tcHostName?"Form":"E-Commerce"===com.TI.Metrics.tcChannel?"E-Commerce":"Unknown"}(),com.TI.Metrics.tcSiteSubsection=function(){return"undefined"!=typeof tiSiteSubsection&&""!=tiSiteSubsection?tiSiteSubsection:"undefined"!=typeof tiSiteSubsection?tiSiteSubsection:"commerce.ti.com"===com.TI.Metrics.tcHostName||"commerce-test.itg.ti.com"===com.TI.Metrics.tcHostName?"Sample and Buy":"estore.ti.com"===com.TI.Metrics.tcHostName?"Sample and Buy":"store.ti.com"===com.TI.Metrics.tcHostName||"uat.estore-tisep.harte-hanks.com"===com.TI.Metrics.tcHostName?"Sample and Buy":"e2e.ti.com"===com.TI.Metrics.tcHostName||"www.deyisupport.com"===com.TI.Metrics.tcHostName||"e2eprivate.ti.com"===com.TI.Metrics.tcHostName||"e2e-uat.ti.com"===com.TI.Metrics.tcHostName||"e2ecn-uat.ti.com"===com.TI.Metrics.tcHostName||"e2eprivate-uat.ti.com"===com.TI.Metrics.tcHostName?"Support and Community":"www-k.ext.ti.com"===com.TI.Metrics.tcHostName?""==com.TI.Metrics.tcPathName||com.TI.Metrics.tcPathName.indexOf("/pic/")==-1&&com.TI.Metrics.tcPathName.indexOf("email-tech-support")==-1?"Support and Community":(""!=com.TI.Metrics.tcQueryString&&com.TI.Metrics.tcPathName.indexOf("=")===-1&&(com.TI.Metrics.tcEmailTechSupportType=com.TI.Metrics.tcQueryString),"Support and Community"):""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/adc/")!=-1?"Tools and Software":""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/quality/")!=-1?"Support and Community":""==com.TI.Metrics.tcPathName||com.TI.Metrics.tcPathName.indexOf("/training/")==-1&&com.TI.Metrics.tcPathName.indexOf("/courses/")==-1?"newscenter.ti.com"===com.TI.Metrics.tcHostName?"About TI":"investor.ti.com"===com.TI.Metrics.tcHostName?"About TI":"www.ti.com"===com.TI.Metrics.tcHostName&&""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/csr/")!=-1?"About TI":""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/careers/")!=-1?"About TI":"www.ti.com"!==com.TI.Metrics.tcHostName||""==com.TI.Metrics.tcPathName||com.TI.Metrics.tcPathName.indexOf("/company/")==-1&&com.TI.Metrics.tcPathName.indexOf("/ventures/")==-1?""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("distributorinfo")!=-1?"Sample and Buy":""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/salesrep/")!=-1?"Sample and Buy":"myportal.ti.com"===com.TI.Metrics.tcHostName?"myTI Login":""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/myti/portal/")!=-1?"myTI Login":""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/apps/samp/")!=-1?"Sample and Buy":""!=com.TI.Metrics.tcPathName&&com.TI.Metrics.tcPathName.indexOf("/apps/sampcert/")!=-1?"Sample and Buy":"":"About TI":"Support and Community"}(),com.TI.Metrics.tcErrorPage=function(){if("undefined"!=typeof tiErrorPage)return tiErrorPage}(),"undefined"!=typeof thePlayer&&thePlayer.omnitureKdpJsReady(),com.TI.Metrics.tcMerchandiseOrderCompletion=function(){return"store.ti.com"==com.TI.Metrics.tcHostName||"uat.estore-tisep.harte-hanks.com"==com.TI.Metrics.tcHostName?com.TI.Metrics.tcPageName.indexOf("tistore-orderconfirmation")!=-1||com.TI.Metrics.tcPageName.indexOf("checkout/receipt")!=-1||com.TI.Metrics.tcPageName.indexOf("checkout_complete")!=-1?"Store":"":"commerce.ti.com"!=com.TI.Metrics.tcHostName&&"estore.ti.com"!=com.TI.Metrics.tcHostName&&"commerce-test.itg.ti.com"!=com.TI.Metrics.tcHostName||com.TI.Metrics.tcPathName.indexOf("/stores/servlet/orderprocess")==-1&&com.TI.Metrics.tcPathName.indexOf("/checkout/receipt.aspx")==-1?"":com.TI.Metrics.tcPageName.indexOf("sc sample request- order status")!=-1?"Sample":com.TI.Metrics.tcPageName.indexOf("checkout/receipt")!=-1||com.TI.Metrics.tcPageName.indexOf("checkout_complete")!=-1?"eStore":""}();var utag_data=com.TI.Metrics;!function(t,e,c,o){var r=window.metricsPrefix||"";""===r&&"m-uat.itg.ti.com"===location.hostname&&(r="uat-"),t="int-"===r||"uat-"===r?"//www.ti.com/utag/ti/main/dev/utag.js":"sat-"===r?"//www.ti.com/utag/ti/main/qa/utag.js":"//www.ti.com/utag/ti/main/prod/utag.js",e=document,c="script",o=e.createElement(c),o.src=t,o.type="text/java"+c,o.async=!0,t=e.getElementsByTagName(c)[0],t.parentNode.insertBefore(o,t)}();