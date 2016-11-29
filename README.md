# jQuery-FixTableHeader
_A jQuery plugin to fix header or footer row in a table on user scroll_

This plugin does exactly what it says. Fixing the headings and/or the footers in a HTML table is made easy by this plugin

View a demo **<a href='#'>here</a></h4>**.

## An ideal html table
<table><tr><td width="50%"><font color="blue">
&lt;table&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;thead&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;&nbsp;&lt;th&gt;...&lt;/th&gt;&nbsp;......&lt;/tr&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/thead&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tfoot&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;&nbsp;&lt;td&gt;...&lt;/td&gt;&nbsp;......&lt;/tr&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tfoot&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;&nbsp;&lt;td&gt;...&lt;/td&gt;&nbsp;......&lt;/tr&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;<br/>
&lt;/table&gt;</font>
</td><td width="50%" valign="top">
Not to worry, although this is the perfect layout of a table, this plugin can work even on different layouts and misformed layouts.
<br/><br/>Not all possibilities are tested, some of the tested layouts include:
<ul>
<li>Ttraditional layout with no <b>tbody, thead, tfoot</b></li>
<li>Improper use of <b>td</b> for <b>th</b> in heading</li>
</ul>
</td>
</tr>
</table>
