(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{567:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("当使用’from module import "),s("a",{attrs:{href:"https://python3-cookbook.readthedocs.io/zh_CN/latest/c10/p02_control_the_import_of_everything.html#id3",target:"_blank",rel:"noopener noreferrer"}},[t._v("*"),s("OutboundLink")],1),t._v("’ 语句时，希望对从模块或包导出的符号进行精确控制。")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("在你的模块中定义一个变量 __all__ 来明确地列出需要导出的内容。")]),t._v(" "),s("p",[t._v("举个例子:")]),t._v(" "),s("div",{staticClass:"language-Python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# somemodule.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("spam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\nblah "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Only export 'spam' and 'grok'")]),t._v("\n__all__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spam'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'grok'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"讨论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[t._v("#")]),t._v(" 讨论")]),t._v(" "),s("p",[t._v("尽管强烈反对使用 ‘from module import "),s("a",{attrs:{href:"https://python3-cookbook.readthedocs.io/zh_CN/latest/c10/p02_control_the_import_of_everything.html#id7",target:"_blank",rel:"noopener noreferrer"}},[t._v("*"),s("OutboundLink")],1),t._v("’, 但是在定义了大量变量名的模块中频繁使用。 如果你不做任何事, 这样的导入将会导入所有不以下划线开头的。 另一方面,如果定义了 "),s("em",[t._v("_all")]),t._v("_ , 那么只有被列举出的东西会被导出。")]),t._v(" "),s("p",[t._v("如果你将 "),s("em",[t._v("_all")]),t._v("_ 定义成一个空列表, 没有东西将被导入。 如果 "),s("em",[t._v("_all")]),t._v("_ 包含未定义的名字, 在导入时引起AttributeError。")])])}),[],!1,null,null,null);s.default=r.exports}}]);