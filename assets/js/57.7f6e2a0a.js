(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{394:function(s,e,a){"use strict";a.r(e);var t=a(7),_=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[s._v("#")]),s._v(" general")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据文件存放的目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("datadir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mysql.socket表示server和client在同一台服务器，并且使用localhost进行连接，就会使用socket进行连接")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql/mysql.sock\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#存储mysql的pid")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid_file")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql/mysql.pid\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mysql服务的端口号")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mysql存储引擎")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_storage_engine")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("InnoDB\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当忘记mysql的用户名密码的时候，可以在mysql配置文件中配置该参数，跳过权限表验证，不需要密码即可登录mysql")]),s._v("\nskip-grant-tables\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h3",{attrs:{id:"character"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#character"}},[s._v("#")]),s._v(" character")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("character_set_client")]),s._v("：客户端数据的字符集")]),s._v(" "),e("li",[e("strong",[s._v("character_set_connection")]),s._v("：mysql处理客户端发来的信息时，会把这些数据转换成连接的字符集格式")]),s._v(" "),e("li",[e("strong",[s._v("character_set_results")]),s._v("：mysql发送给客户端的结果集所用的字符集")]),s._v(" "),e("li",[e("strong",[s._v("character_set_database")]),s._v("：数据库默认的字符集")]),s._v(" "),e("li",[e("strong",[s._v("character_set_server")]),s._v("：mysql server的默认字符集")])]),s._v(" "),e("h3",{attrs:{id:"connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[s._v("#")]),s._v(" connection")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("max_connections")]),s._v("：mysql的最大连接数，如果数据库的并发连接请求比较大，应该调高该值")]),s._v(" "),e("li",[e("strong",[s._v("max_user_connections")]),s._v("：限制每个用户的连接个数")]),s._v(" "),e("li",[e("strong",[s._v("back_log")]),s._v("：mysql能够暂存的连接数量，当mysql的线程在一个很短时间内得到非常多的连接请求时，就会起作用，如果mysql的连接数量达到max_connections时，新的请求会被存储在堆栈中，以等待某一个连接释放资源，如果等待连接的数量超过back_log,则不再接受连接资源")]),s._v(" "),e("li",[e("strong",[s._v("wait_timeout")]),s._v("：mysql在关闭一个非交互的连接之前需要等待的时长")]),s._v(" "),e("li",[e("strong",[s._v("interactive_timeout")]),s._v("：关闭一个交互连接之前需要等待的秒数")])]),s._v(" "),e("h3",{attrs:{id:"cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[s._v("#")]),s._v(" cache")]),s._v(" "),e("h4",{attrs:{id:"key-buffer-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-buffer-size"}},[s._v("#")]),s._v(" key_buffer_size")]),s._v(" "),e("p",[s._v("索引缓存区的大小（只对myisam表起作用）")]),s._v(" "),e("h4",{attrs:{id:"query-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-cache"}},[s._v("#")]),s._v(" query cache")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("query_cache_size")]),s._v("：查询缓存的大小，未来版本被删除")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("show status like '%Qcache%';查看缓存的相关属性")]),s._v(" "),e("p",[e("strong",[s._v("Qcache_free_blocks")]),s._v("：缓存中相邻内存块的个数，如果值比较大，那么查询缓存中碎片比较多")]),s._v(" "),e("p",[e("strong",[s._v("Qcache_free_memory")]),s._v("：查询缓存中剩余的内存大小")]),s._v(" "),e("p",[e("strong",[s._v("Qcache_hits")]),s._v("：表示有多少此命中缓存")]),s._v(" "),e("p",[e("strong",[s._v("Qcache_inserts")]),s._v("：表示多少次未命中而插入")]),s._v(" "),e("p",[e("strong",[s._v("Qcache_lowmen_prunes")]),s._v("：多少条query因为内存不足而被移除cache")]),s._v(" "),e("p",[e("strong",[s._v("Qcache_queries_in_cache")]),s._v("：当前cache中缓存的query数量")]),s._v(" "),e("p",[e("strong",[s._v("Qcache_total_blocks")]),s._v("：当前cache中block的数量")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("query_cache_limit")]),s._v("：超出此大小的查询将不被缓存")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("query_cache_min_res_unit")]),s._v("：缓存块最小大小")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("query_cache_type")]),s._v("：缓存类型，决定缓存什么样的查询。"),e("code",[s._v("0表示禁用，1表示将缓存所有结果，除非sql语句中使用sql_no_cache禁用查询缓存，2表示只缓存select语句中通过sql_cache指定需要缓存的查询")])])])]),s._v(" "),e("h4",{attrs:{id:"sort-buffer-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort-buffer-size"}},[s._v("#")]),s._v(" sort_buffer_size")]),s._v(" "),e("p",[s._v("每个需要排序的线程分派该大小的缓冲区")]),s._v(" "),e("h4",{attrs:{id:"max-allowed-packet-32m"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-allowed-packet-32m"}},[s._v("#")]),s._v(" max_allowed_packet=32M")]),s._v(" "),e("p",[s._v("限制server接受的数据包大小")]),s._v(" "),e("h4",{attrs:{id:"join-buffer-size-2m"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join-buffer-size-2m"}},[s._v("#")]),s._v(" join_buffer_size=2M")]),s._v(" "),e("p",[s._v("表示关联缓存的大小")]),s._v(" "),e("h4",{attrs:{id:"thread-cache-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thread-cache-size"}},[s._v("#")]),s._v(" thread_cache_size")]),s._v(" "),e("p",[s._v("服务器线程缓存，这个值表示可以重新利用保存再缓存中的线程数量，当断开连接时，那么客户端的线程将被放到缓存中以响应下一个客户而不是销毁，如果线程重新被请求，那么请求将从缓存中读取，如果缓存中是空的或者是新的请求，这个线程将被重新请求，那么这个线程将被重新创建，如果有很多新的线程，增加这个值即可")]),s._v(" "),e("ul",[e("li",[s._v("Threads_cached：代表当前此时此刻线程缓存中有多少空闲线程")]),s._v(" "),e("li",[s._v("Threads_connected：代表当前已建立连接的数量")]),s._v(" "),e("li",[s._v("Threads_created：代表最近一次服务启动，已创建现成的数量，如果该值比较大，那么服务器会一直再创建线程")]),s._v(" "),e("li",[s._v("Threads_running：代表当前激活的线程数")])]),s._v(" "),e("h3",{attrs:{id:"innodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[s._v("#")]),s._v(" INNODB")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("innodb_buffer_pool_size")]),s._v("：该参数指定大小的内存来缓冲数据和索引，最大可以设置为物理内存的80%")]),s._v(" "),e("li",[e("strong",[s._v("innodb_flush_log_at_trx_commit")]),s._v("：主要控制innodb将log buffer中的数据写入日志文件并flush磁盘的时间点，值分别为0，1，2")]),s._v(" "),e("li",[e("strong",[s._v("innodb_thread_concurrency")]),s._v("：设置innodb线程的并发数，默认为0表示不受限制，如果要设置建议跟服务器的cpu核心数一致或者是cpu核心数的两倍")]),s._v(" "),e("li",[e("strong",[s._v("innodb_log_buffer_size")]),s._v("：此参数确定日志文件所用的内存大小，以M为单位")]),s._v(" "),e("li",[e("strong",[s._v("innodb_log_file_size")]),s._v("：此参数确定数据日志文件的大小，以M为单位")]),s._v(" "),e("li",[e("strong",[s._v("innodb_log_files_in_group")]),s._v("：以循环方式将日志文件写到多个文件中")]),s._v(" "),e("li",[e("strong",[s._v("read_buffer_size")]),s._v("：mysql读入缓冲区大小，对表进行顺序扫描的请求将分配到一个读入缓冲区")]),s._v(" "),e("li",[e("strong",[s._v("read_rnd_buffer_size")]),s._v("：mysql随机读的缓冲区大小")]),s._v(" "),e("li",[e("strong",[s._v("innodb_file_per_table")]),s._v("：此参数确定为每张表分配一个新的文件")])])])}),[],!1,null,null,null);e.default=_.exports}}]);