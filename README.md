javascrypt
==========

One of the biggest problems I've run into in building browser based applications in HTML5 is the inability to use includes in HTML.

As a result I've started working on a component based HTML includes framework for browser based applications which can extend into mobile app world.

&lt;!doctype html&gt;<br/>
&lt;html&gt;<br/>
&nbsp;	&lt;head&gt;<br/>
&nbsp;&nbsp;		&lt;meta http-equiv="PRAGMA" content="NO-CACHE"&gt;<br/>
&nbsp;&nbsp;		&lt;meta http-equiv="CACHE-CONTROL" content="NO-CACHE"&gt;<br/>
&nbsp;&nbsp;		&lt;meta http-equiv="EXPIRES" content="Tue, 31 Jan 2012 12:00:01 GMT"&gt;<br/>
&nbsp;&nbsp;		&lt;title&gt;JavasCrypt&lt;/title&gt;<br/>
&nbsp;&nbsp;		&lt;link type="text/css" rel="stylesheet" href="css/body.css"/&gt;<br/>
&nbsp;	&lt;/head&gt;<br/>
&nbsp;	&lt;body&gt;<br/>
&nbsp;&nbsp;		&lt;div id="page"&gt;<br/>
&nbsp;&nbsp;			&lt;component id="header" htmlsrc="components/header.html" csssrc="css/header.css"&gt;&lt;/component&gt;<br/>
&nbsp;&nbsp;			&lt;component id="nav" htmlsrc="components/nav.html" csssrc="css/nav.css"&gt;&lt;/component&gt;<br/>
&nbsp;&nbsp;			&lt;div&gt;<br/>
&nbsp;&nbsp;&nbsp;				&lt;component id="content" htmlsrc="components/content.html" csssrc="css/content.css" cssclass="content"&gt;&lt;/component&gt;<br/>
&nbsp;&nbsp;&nbsp;				&lt;component id="content1" htmlsrc="components/content1.html" cssclass="subcontent"&gt;&lt;/component&gt;<br/>
&nbsp;&nbsp;			&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;			&lt;component id="footer" htmlsrc="components/footer.html" csssrc="css/footer.css"&gt;&lt;/component&gt;<br/>
&nbsp;&nbsp;		&lt;/div&gt;<br/>
&nbsp;&nbsp;		&lt;div id="loading"&gt;<br/>
&nbsp;&nbsp;&nbsp;			&lt;div id="loadingani"&gt;loading...&lt;/div&gt;<br/>
&nbsp;&nbsp;		&lt;/div&gt;<br/>
&nbsp;	&lt;/body&gt;<br/>
&nbsp;	&lt;script type="text/javascript" src="js/javascrypt.js"&gt;&lt;/script&gt;<br/>
&lt;/html&gt;<br/>