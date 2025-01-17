---
title: <%tp.system.prompt("Title")%>
tags: 
publish: "false"
created: <% tp.file.creation_date("dddd, MMMM Do YYYY") %>
modified: <% tp.file.last_modified_date("dddd, MMMM Do YYYY") %>
draft: false
---
<%*
	tp.file.rename(tp.frontmatter.title)
%>