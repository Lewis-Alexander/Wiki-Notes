<%*
const title = tp.file.title;
let splitTitle;
if (title.startsWith("Untitled")) { 
    newTitle = await tp.system.prompt("Enter note title");
    await tp.file.rename(newTitle);
}
-%>
---
title: <% newTitle %>
draft: false
publish: true
modified: <%tp.file.last_modified_date("YYYY-MM-DD")%> 
---