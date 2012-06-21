/**
* author - Gregg Bowden
* date - February 2012
* version - 1.0.5
* email - gregg@blackchicken.ca
**/
javasCrypt = {};
javasCrypt.view = {};

debug=false;
/* Find the first instance (index = 0) of the head tag*/
he = document.getElementsByTagName("head")[0];

/* Find the first instance of the body tag*/
bo = document.getElementsByTagName("body")[0];

pattern = /<component(.*?)><\/component>/g;

javasCrypt = new function(){
	showLoading();
	javasCrypt.view = new function(){
		debug?console.log("View"):null;
		javasCrypt.view.Init = new function(){
			debug?console.log("init"):null;
			//check the document object for component tags
			var tags = getComponents(document);
			if(tags != null){
				//load components using AJAX and store as a key value pair
				//note: component content must be a valid XML document with a root node.
				var comps = readComponents(tags);
				debug?console.log(comps):null;
				
				//read the components from the content loaded from components at level1
				
				if(comps.length > 0){
					for(var c=0;c < comps.length; c++){
						var comp = readSubComponents(comps[c]);
						if(comp != ""){
							//console.log(comp);
							comps.push.apply(comp);
						}
					}
				}
				if(comps.length != -1 && comps.length > 0){
					try{
						//write the components to the DOM and replace the existing component tags
						writeComponents(comps);
					}catch(err){
						console.log(err.message);
					}
				}
			}
		};
	};
	
	function readComponents(comps){
		var contentObjs = new Array();
		//console.log(comps.length);
		for(var c=0;c < comps.length; c++){
			var comp = new Component(comps[c]);
			//console.log(comp._htmlsrc);
			var xhr = new XMLHttpRequest();
			xhr.open("GET", comp._htmlsrc, false);
			xhr.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					var content = xhr.responseText;
					//console.log(content);
					var contentHTML = stringToHTMLObject(content);
					//console.log(contentHTML);
					var compPair = [comp,contentHTML];
					contentObjs[c] = compPair;
				}
			};
			xhr.send();
		}
		return contentObjs;
	}
	
	function readSubComponents(comp){
		//console.log(comp);
		var subcomps = getComponents(comp[1]);
		var subcontent = new Array();
		//console.log(subtag);
		if(subcomps.length != 0){
			//console.log(subtag);
			var subcomp = readComponents(subcomps);
			//console.log(subcomp);
			for(var c=0;c<subcomp.length;c++){
				//console.log(subcomp[c]);
				subcontent.push(subcomp[c]);
			}
		}
		
		return subcontent;
	}
	
	
	/**
	*find all component tags in the object only
	*
	*/
	function getComponents(obj){
		//console.log(obj);
		var tags = null;
		if(typeof obj.querySelectorAll !== 'undefined'){
			tags = obj.querySelectorAll("component");
		}else if(typeof obj.getElementsByTagName !== 'undefined'){
			tags = obj.getElementsByTagName("component");
		}
		//console.log(tags);
		return tags;
	}

	
	/**
	*convert content strings to html objects
	*
	*/
	function stringToHTMLObject(htmlStr){
		var domParser = new DOMParser();
		return domParser.parseFromString(htmlStr, "text/xml").firstChild;
	}
	
	/**
	*write the component to the DOM
	*
	*/
	function writeComponent(comp,content){
		var compid = comp._id;
		comptag = document.getElementById(compid);
		
		writeCSS(comp,he);
		writeJS(comp,he);
		
		var div = document.createElement("DIV");
		div.setAttribute("id",comp._id);
		if(comp._cssclass != null){
			div.setAttribute("class",comp._cssclass);
		}
		div.innerHTML = outerHTML(content);
		comptag.parentNode.replaceChild(div,comptag);
	}
	
	/**
	*find all component tags in the object only
	*
	*/
	function writeComponents(comps){
		for(var c=0;c < comps.length; c++){
			var comp = comps[c][0];
			var content = comps[c][1];
			writeComponent(comp,content);
		}
		//hideLoading();
	}
	
	/**
	*find all component tags in the object only
	*
	*/
	function writeCSS(comp,he){
		if(comp._csssrc != null){
			try{
				var csslink = document.createElement("LINK");
				csslink.type = 'text/css';
				csslink.rel = 'stylesheet';
				csslink.href = comp._csssrc;
				he.appendChild(csslink);
			}catch(err){
				console.log(err.message);
			}
		}
	}
	
	/**
	*find all component tags in the object only
	*
	*/
	function writeJS(comp,he){
		if(comp._jssrc != null){
			try{
				var js = document.createElement("SCRIPT");
				js.type = 'text/javascript';
				js.src = comp._jssrc;
				he.appendChild(js);
			}catch(err){
				console.log(err.message);
			}
		}
	}
	
	/**
	*find all component tags in the object only
	*
	*/
	function outerHTML(node){
		return node.outerHTML || new XMLSerializer().serializeToString(node);
	}
	
	/**
	*find all component tags in the object only
	*
	*/
	String.prototype.replaceAt=function(index, char) {
      return this.substr(0, index) + char + this.substr(index+char.length);
   }
	
	function Component(tagObj){
		/*check tag attributes*/
		if(typeof tagObj != 'undefined'){
			if(typeof tagObj.attributes != 'undefined'){
				if(tagObj.attributes.htmlsrc != null){
					this._htmlsrc = tagObj.attributes.htmlsrc.value;
				}else{
					//console.log("object has no htmlsrc");
				}
				
				if(tagObj.getAttribute("id") != null){
					this._id = tagObj.getAttribute("id");
					//console.log(this._id);
				}else{
					//console.log("object has no id");
				}
				
				if(typeof tagObj.attributes.callback != 'undefined' && typeof tagObj.attributes.callback != null){
					this._callback = tagObj.attributes.callback.value;
				}else{
					//console.log("object has no callback function");
				}
				
				if(typeof tagObj.attributes.csssrc != 'undefined' && typeof tagObj.attributes.csssrc != null){
					this._csssrc = tagObj.attributes.csssrc.value;
				}else{
					//console.log("object has no css");
				}
				
				if(typeof tagObj.attributes.cssclass != 'undefined' && typeof tagObj.attributes.cssclass != null){
					this._cssclass = tagObj.attributes.cssclass.value;
				}else{
					//console.log("object has no css class");
				}
				
				if(typeof tagObj.attributes.jssrc != 'undefined' && typeof tagObj.attributes.jssrc != null){
					this._jssrc = tagObj.attributes.jssrc.value;
				}else{
					//console.log("object has no js");
				}
			}else{
				console.log('no attributes');
			}
		}else{
			console.log('no tag');
		}
	};
	
	function showLoading(){
		var loading = document.getElementById('loading');
		loading.style.display = 'block';
	}

	function hideLoading(){
		var alreadyrunflag=0; //flag to indicate whether target function has already been run
		var loading = document.getElementById('loading');
		var page = document.getElementById('page');
		document.addEventListener("DOMContentLoaded", 
			new function(){
				console.log(alreadyrunflag);
				alreadyrunflag=1
				loading.style.display = 'none';
				page.style.display = 'block';
			}, false);
	}
	eval(javasCrypt);
	window.onload = hideLoading();
};
