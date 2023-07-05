---
title: "{{ replace .Name "-" " " | title }}"
description: "Description of the project."
---
**Insert Lead paragraph here.**

## New Cool Posts

{{ range first 10 ( where .Site.RegularPages "Type" "projets" ) }}
* {{ .Title }}
{{ end }}

fdgdf