//tealium universal tag - utag.246 ut4.0.202208181848, Copyright 2022 Tealium.com Inc. All Rights Reserved.
window["_abtasty"]=window["_abtasty"]||[];window['abtiming']=1*new Date();try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={};u.extend=[];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}return true;};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//try.abtasty.com/##utag_accountId##.js","account_id":"19c369a85be168c883cbae6664876759","trans":"trans-prod","objective":"Purchase","product_id":[],"product_name":[],"product_category":[]};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
u.loader_cb=function(a,b,c){if(u.data.trans.indexOf("trans")===0&&u.data.order_id){window.abtasty.send("transaction",{tid:u.data.order_id,ta:u.data.objective,tr:u.data.order_total,ts:b._cship||0,tt:b._ctax||0,tc:b._ccurrency||'USD',tcc:b._cpromo||'',icn:(typeof utag_data['js_page._metrics_store_data.part_quantity']!='undefined'&&utag_data['js_page._metrics_store_data.part_quantity'].length>0)?utag_data['js_page._metrics_store_data.part_quantity'].reduce(function(a,b){return a+parseInt(b);},0):0});if(u.data.trans==="trans-prod"){for(var i=0;i<u.data.product_id.length;i++){window.abtasty.send("item",{"tid":(typeof utag_data['js_page._metrics_store_data.order_id']!='undefined')?utag_data['js_page._metrics_store_data.order_id']:'',"in":utag_data['js_page._metrics_store_data.part_number'][i],"ip":utag_data['js_page._metrics_store_data.part_unit_price'][i],"iq":utag_data['js_page._metrics_store_data.part_quantity'][i],"ic":utag_data['js_page._metrics_store_data.part_number'][i],"iv":utag_data['js_page._metrics_store_data.part_type'][i]});}}
if(!u.isEmptyObject(u.data.custom)){var keyName="";for(keyName in u.data.custom){_abtasty.push(["eco",keyName,u.data.custom[keyName]]);}}}};u.callBack=function(){var data={};u.initialized=true;while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b,data.c);}};if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url.replace("##utag_accountId##",u.data.account_id),"cb":u.callBack,"loc":"script","id":'utag_246'});}}
}};utag.o[loader].loader.LOAD(id);}("246","ti.main"));}catch(error){utag.DB(error);}
