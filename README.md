HyperTextComponents
==========

One of the biggest problems I've run into in building browser based applications in HTML5 is the inability to use includes in HTML.

As a result I've started working on a <b>component</b> based HTML includes framework for browser based applications which can extend into the mobile app world.

Example:<br/>
<br/>
&lt;!doctype html&gt;<br/>
&lt;html&gt;<br/>
&nbsp;&nbsp;	&lt;head&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;meta http-equiv="PRAGMA" content="NO-CACHE"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;meta http-equiv="CACHE-CONTROL" content="NO-CACHE"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;meta http-equiv="EXPIRES" content="Tue, 31 Jan 2012 12:00:01 GMT"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;title&gt;Hyper Text Components&lt;/title&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;link type="text/css" rel="stylesheet" href="css/body.css"/&gt;<br/>
&nbsp;&nbsp;	&lt;/head&gt;<br/>
&nbsp;&nbsp;	&lt;body&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;div id="page"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<b>&lt;component id="header" htmlsrc="components/header.html" csssrc="css/header.css"&gt;&lt;/component&gt;</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<b>&lt;component id="nav" htmlsrc="components/nav.html" csssrc="css/nav.css" jssrc="js/nav.js"&gt;&lt;/component&gt;</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			&lt;div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;				<b>&lt;component id="content" htmlsrc="components/content.html" csssrc="css/content.css" cssclass="content"&gt;&lt;/component&gt;</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;				<b>&lt;component id="content1" htmlsrc="components/content1.html" cssclass="subcontent"&gt;&lt;/component&gt;</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<b>&lt;component id="footer" htmlsrc="components/footer.html" csssrc="css/footer.css"&gt;&lt;/component&gt;</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;div id="loading"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		&lt;div id="loadingani"&gt;loading...&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;		&lt;/div&gt;<br/>
&nbsp;&nbsp;	&lt;/body&gt;<br/>
&nbsp;&nbsp;	<b>&lt;script type="text/javascript" src="js/HyperTextComponents.js"&gt;&lt;/script&gt;</b><br/>
&lt;/html&gt;<br/>

I would really appreciate any feedback, suggestions or help if anyone is interested: <a href="mailto:gregg@blackchicken.ca">gregg@blackchicken.ca</a>

Yes, I realize that the component tag does not comply with HTML standards... but we have to start somewhere.

Next steps for the project:
<ol>
	<li>add tests for recursive components to determine impact on performance</li>
	<li>try to optimize inclusion with fewer AJAX calls</li>
	<li>browser compatibility</li>
</ol>
