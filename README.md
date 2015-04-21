# Disqus Wrapper for Meteor

![Meteor logo](https://d14jjfgstdxsoz.cloudfront.net/meteor-logo.png)





## How to

**Add the Meteor Package**

`meteor add visudare:disqus`

**Configure disqus shortname**

Set your Disqus shortname in **/lib**

`disqus_shortname="your_shortname";`

**Add the Disqus Template wherever you want**

`{{> disqus}}`

**Template Settings**

You can set the following options to the template:

1. url
2. category_id
3. identifier
4. title

If its **not** set the following fallback options will be set:

1. for **url** `location.href`
2. for **category_id** none
3. for **identifier** `location.pathname`
4. for **title**  `<title>` attribute in `<head>`


**Example:**

`{{> disqus title="My page title."}}`

**Reference here:** 

<https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables>
