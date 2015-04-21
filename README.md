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




**Example:**

`{{> disqus title="My page title."}}`

**Reference here:** 

<https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables>
