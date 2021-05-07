(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,e,a){"use strict";a.r(e);var n=a(39),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" Eslint")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://eslint.org/docs/about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eslint"),a("OutboundLink")],1),t._v(" is a linting utility program that helps to keep consistent and good\nlooking code through the scope of an entire project.")]),t._v(" "),a("h2",{attrs:{id:"install-eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-eslint"}},[t._v("#")]),t._v(" Install eslint")]),t._v(" "),a("p",[t._v("To add eslint to your project, simply install it via "),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("npm")]),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("yarn")]),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint --save-dev\n")])])]),a("p",[t._v("or with yarn:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" eslint --dev\n")])])]),a("h2",{attrs:{id:"configuring-eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-eslint"}},[t._v("#")]),t._v(" Configuring eslint")]),t._v(" "),a("p",[t._v("When Eslint is launched, it checks all source files against rules defined in a\nspecial file called "),a("code",[t._v(".eslintrc")]),t._v(". That "),a("code",[t._v("rc")]),t._v(" at the end, might be familiar to you\nif you are a user of a unix/linux system. It means "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Run_commands",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("run commands")]),a("OutboundLink")],1),t._v(" and\nindicates that commands defined in the file suffixed with "),a("code",[t._v("rc")]),t._v(" are executed\nright after the launch of that program. But in modern days, and especially in\nthe world of JavaScript, "),a("code",[t._v("rc")]),t._v(" suffixed files are usually closer to\n"),a("em",[t._v("configuration files")]),t._v(" that define some global variables and settings for a\nprogram.")]),t._v(" "),a("p",[a("code",[t._v(".eslintrc")]),t._v(" can have multiple extensions:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".json")])]),t._v(" "),a("li",[a("code",[t._v(".yml")])]),t._v(" "),a("li",[a("code",[t._v(".js")])])]),t._v(" "),a("p",[t._v("We use "),a("code",[t._v(".yml")]),t._v(", which is a shortened version of the "),a("a",{attrs:{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML"),a("OutboundLink")],1),t._v(" which stands for:")]),t._v(" "),a("p",[a("em",[t._v('"YAML Ain\'t Markup Language"')])]),t._v(" "),a("p",[t._v("Which is a recursive definition of the abbreviation. This is quite common in the\nworld of open source and unix/linux software.")]),t._v(" "),a("h2",{attrs:{id:"why-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-yaml"}},[t._v("#")]),t._v(" Why YAML?")]),t._v(" "),a("p",[t._v("Because its syntax is clean and concise. Again, it is a standard that we impose\nwithout asking anyone's permission, but if entire team would rather use\n"),a("a",{attrs:{href:"https://www.json.org/json-en.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON"),a("OutboundLink")],1),t._v(" then we would have no choice, but to abide to the common desire. In\nregards to YAML, visit its home page to learn more about its syntax.")]),t._v(" "),a("h2",{attrs:{id:"writing-your-own-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-your-own-configuration"}},[t._v("#")]),t._v(" Writing your own configuration")]),t._v(" "),a("p",[t._v("As stated above "),a("code",[t._v(".eslintrc")]),t._v(" contains definitions of all rules used to check\nsource files. In this repository, we provide our most common "),a("code",[t._v(".eslintrc")]),t._v(" files.\nIf you wish to learn more about configuring eslint, then visit its\n"),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation page"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"creating-test-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-test-scripts"}},[t._v("#")]),t._v(" Creating test scripts")]),t._v(" "),a("p",[t._v("On every project we want to ensure quality and consistency of the code. To\nachieve this, we can create test scripts in the "),a("code",[t._v("package.json")]),t._v(" file of our\nproject:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test:lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint ."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ...\n")])])]),a("p",[t._v("Then, you could run this script like so:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run test:lint\n")])])]),a("p",[t._v("or if you are using yarn:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" test:lint\n")])])]),a("p",[t._v("Eslint takes path to the source directory as its argument, so by specifying "),a("code",[t._v(".")]),t._v("\nwe tell eslint to start checking from the current directory. If all of your code\nlies somewhere else, then you would replace "),a("code",[t._v(".")]),t._v(" with path to that directory.")]),t._v(" "),a("h3",{attrs:{id:"auto-fixing-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-fixing-errors"}},[t._v("#")]),t._v(" Auto fixing errors")]),t._v(" "),a("p",[t._v("You can also add "),a("code",[t._v("--fix")]),t._v(" option to the command to let eslint fix all fixable\nproblems that may occur during the test. Keep in mind, that not all eslint rules\nare fixable, it's usually stated in the description of a rule whether it is auto\nfixable or not. You don't have to add "),a("code",[t._v("--fix")]),t._v(" option to the script if you don't\nwant to. You can simply append it during the execution of the script:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run test:lint --fix\n")])])]),a("p",[t._v("or with yarn:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" test:lint --fix\n")])])]),a("h2",{attrs:{id:"pre-commit-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-commit-hooks"}},[t._v("#")]),t._v(" Pre-commit hooks")]),t._v(" "),a("p",[t._v("Scripts are a fine tool to run linting tests on your code, but it never prevents\nyou from committing a flawed code. To battle this, we can create a "),a("em",[t._v("pre-commit")]),t._v("\ngit hook.")]),t._v(" "),a("p",[t._v("Git hooks are script files that are hooked to specific git commands. Pre-commit\nhook as its name implies, is a hook that is executed "),a("em",[t._v("before")]),t._v(" git accepts your\ncommit.")]),t._v(" "),a("p",[t._v("As all hooks, pre-commit hook is located at "),a("code",[t._v(".git/hooks/pre-commit")]),t._v(". To add\nfunctionality to the hook, simply open it with any editor and start writing your\npre-commit logic. Git hooks are shell scripts, so code you put into that script\nmust be executable by your shell.")]),t._v(" "),a("p",[t._v("You can read more about git hooks "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To create a hook that would run our linting test before we commit our code, we\ncould write something like this:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run test:lint\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or yarn test:lint")]),t._v("\n")])])]),a("p",[t._v("At this point you might be thinking:")]),t._v(" "),a("p",[a("em",[t._v('"Should I do this for every project? Seems a bit tedious..."')])]),t._v(" "),a("p",[t._v("And you are right, it is tedious. But even worse news is that this hook would\nwork only on your local system, hooks are not version controlled. So you\nwouldn't be able to share this with your team. Yikes!")]),t._v(" "),a("p",[t._v("But don't worry, there is a solution. There is an npm package called\n"),a("a",{attrs:{href:"https://www.npmjs.com/package/pre-commit",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("pre-commit")]),a("OutboundLink")],1),t._v(" that does exactly what we want. Just install it as you would\ninstall any other package:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pre-commit --save-dev\n")])])]),a("p",[t._v("or with yarn:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" pre-commit --dev\n")])])]),a("p",[t._v("Then add "),a("code",[t._v("pre-commit")]),t._v(" field to your "),a("code",[t._v("package.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test:lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("As you can see, we are passing an array of commands that "),a("code",[t._v("pre-commit")]),t._v(" will\nexecute, well, before each commit 😅. Since it is an npm package, and its\nconfiguration is just an entry in the "),a("code",[t._v("package.json")]),t._v(", it is going to be fully\nversion controlled and we will be able to share with our team 😌.")]),t._v(" "),a("h2",{attrs:{id:"where-do-i-find-these-eslint-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-do-i-find-these-eslint-configuration-files"}},[t._v("#")]),t._v(" Where do I find these eslint configuration files?")]),t._v(" "),a("p",[t._v("All common "),a("code",[t._v(".eslintrc")]),t._v(" definitions are available in this repository:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/code-style/react-eslintrc"}},[t._v("JavaScript and React")])])]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://eslint.org/docs/about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eslint, eslint.org"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Run_commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("Run commands, wikipedia.org"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML, yaml.org"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.json.org/json-en.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON, json.org"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eslint Docs, eslint.org"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("npm")]),t._v(", npmjs.com"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("yarn")]),t._v(", yarnpkg.com"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Hooks, git-scm.com"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("["),a("code",[t._v("pre-commit")]),t._v(", npmjs.com/package/pre-commit]")])])])}),[],!1,null,null,null);e.default=s.exports}}]);