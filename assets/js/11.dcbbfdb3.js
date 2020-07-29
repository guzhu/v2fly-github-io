(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{370:function(a,t,e){"use strict";e.r(t);var v=e(18),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[a._v("#")]),a._v(" 下载安装")]),a._v(" "),e("h2",{attrs:{id:"平台支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平台支持"}},[a._v("#")]),a._v(" 平台支持")]),a._v(" "),e("p",[a._v("V2Ray 在以下平台中可用：")]),a._v(" "),e("ul",[e("li",[a._v("Windows 7 及之后版本（x86 / amd64 / arm32）；")]),a._v(" "),e("li",[a._v("macOS 10.10 Yosemite 及之后版本（amd64）；")]),a._v(" "),e("li",[a._v("Linux 2.6.23 及之后版本（x86 / amd64 / arm / arm64 / mips64 / mips / ppc64 / s390x / riscv64）；\n"),e("ul",[e("li",[a._v("包括但不限于 Debian 7 / 8、Ubuntu 12.04 / 14.04 及后续版本、CentOS 6 / 7、Arch Linux 等；")])])]),a._v(" "),e("li",[a._v("FreeBSD (x86 / amd64)；")]),a._v(" "),e("li",[a._v("OpenBSD (x86 / amd64)；")]),a._v(" "),e("li",[a._v("Dragonfly BSD (amd64)；")])]),a._v(" "),e("h2",{attrs:{id:"下载-v2ray"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-v2ray"}},[a._v("#")]),a._v(" 下载 V2Ray")]),a._v(" "),e("p",[a._v("预编译的压缩包可以在如下几个站点找到：")]),a._v(" "),e("ol",[e("li",[a._v("Github Release："),e("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("github.com/v2fly/v2ray-core"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("Homebrew："),e("a",{attrs:{href:"https://github.com/v2ray/homebrew-v2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("github.com/v2ray/homebrew-v2ray"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("Arch Linux："),e("a",{attrs:{href:"https://www.archlinux.org/packages/community/x86_64/v2ray/",target:"_blank",rel:"noopener noreferrer"}},[a._v("packages/community/x86_64/v2ray/"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("压缩包均为 ZIP 格式，找到对应平台的压缩包，下载解压即可使用。")]),a._v(" "),e("h2",{attrs:{id:"验证安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证安装包"}},[a._v("#")]),a._v(" 验证安装包")]),a._v(" "),e("p",[a._v("V2Ray 提供两种验证方式：")]),a._v(" "),e("ol",[e("li",[a._v("安装包 ZIP 文件的 SHA1 / SHA256 摘要，在每个安装包对应的 "),e("code",[a._v(".dgst")]),a._v(" 文件中可以找到。")]),a._v(" "),e("li",[a._v("使用 v2ctl verify --sig=Release example-file")])]),a._v(" "),e("h2",{attrs:{id:"windows-和-macos-安装方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-和-macos-安装方式"}},[a._v("#")]),a._v(" Windows 和 macOS 安装方式")]),a._v(" "),e("p",[a._v("通过上述方式下载的压缩包，解压之后可看到 v2ray 或 v2ray.exe。直接运行即可。")]),a._v(" "),e("h2",{attrs:{id:"linux-发行版仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-发行版仓库"}},[a._v("#")]),a._v(" Linux 发行版仓库")]),a._v(" "),e("p",[a._v("部分发行版可能已收录 V2Ray 到其官方维护和支持的软件仓库／软件源中。出于兼容性和适配性考虑，建议选用由您所使用的发行版，其维护团队维护的软件包，然后再考虑使用下文的安装脚本，亦或基于已发布的二进制文件或源代码，进行手动安装。")]),a._v(" "),e("h2",{attrs:{id:"linux-安装脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装脚本"}},[a._v("#")]),a._v(" Linux 安装脚本")]),a._v(" "),e("p",[a._v("原安装脚本已被弃置，由 "),e("a",{attrs:{href:"https://github.com/v2fly/fhs-install-v2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("fhs-install-v2ray"),e("OutboundLink")],1),a._v(" 替换。")]),a._v(" "),e("p",[a._v("相关讨论可前往 "),e("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/issues/2328",target:"_blank",rel:"noopener noreferrer"}},[a._v("#2328"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("p",[a._v("主要改动内容：")]),a._v(" "),e("ul",[e("li",[a._v("依据 FHS 修改 V2Ray 的安装路径。")]),a._v(" "),e("li",[a._v("停止对类似 CentOS 6 等上古发行版版本的支援。")]),a._v(" "),e("li",[a._v("停止对 System V 的支援。")]),a._v(" "),e("li",[a._v("启动服务由 root 用户替换为 nobody 用户。")])]),a._v(" "),e("p",[a._v("迁移方案：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("确认该发行版不是上古版本。")])]),a._v(" "),e("li",[e("p",[a._v("确认该发行版使用 systemd：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# ls -l /sbin/init\n")])])]),e("p",[a._v("出现 "),e("code",[a._v("/sbin/init -> ../lib/systemd/systemd")]),a._v(" 即可。")])]),a._v(" "),e("li",[e("p",[a._v("移除原安装脚本的安装：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# bash <(curl -L https://install.direct/go.sh) --remove\n\n# rm -r /var/log/v2ray/\n")])])])]),a._v(" "),e("li",[e("p",[a._v("迁移配置文件路径：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# mv /etc/v2ray/ /usr/local/etc/\n")])])])]),a._v(" "),e("li",[e("p",[a._v("使用新的安装脚本：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# bash <(curl https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)\n")])])])])]),a._v(" "),e("p",[a._v("请将 Log 修改至 "),e("code",[a._v("/var/log/v2ray/")]),a._v(" 文件夹下：")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"log"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"access"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/var/log/v2ray/access.log"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/var/log/v2ray/error.log"')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("如果你需要 V2Ray 直接使用证书文件：")]),a._v(" "),e("p",[a._v("假设证书文件的所在路径为 "),e("code",[a._v("/srv/http/")]),a._v("，文件分别为 "),e("code",[a._v("/srv/http/example.com.key")]),a._v(" 和 "),e("code",[a._v("/srv/http/example.com.pem")]),a._v("。")]),a._v(" "),e("p",[e("code",[a._v("/srv/http/")]),a._v(" 的默认权限一般为 755，"),e("code",[a._v("/srv/http/example.com.key")]),a._v(" 的默认权限一般为 600，"),e("code",[a._v("/srv/http/example.com.pem")]),a._v(" 的默认权限一般为 644。")]),a._v(" "),e("p",[a._v("将 "),e("code",[a._v("/srv/http/example.com.key")]),a._v(" 修改为 644 即可：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# chmod 644 /srv/http/example.com.key\n")])])]),e("p",[a._v("除此之外，还有另一个方法。")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# id nobody\n")])])]),e("p",[a._v("显示出来的结果可能是：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("uid=65534(nobody) gid=65534(nogroup) groups=65534(nogroup)\n")])])]),e("p",[a._v("也可能是：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("uid=65534(nobody) gid=65534(nobody) groups=65534(nobody)\n")])])]),e("p",[a._v("相应的，只需要执行：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# chown -R nobody:nogroup /srv/http/\n")])])]),e("p",[a._v("或是：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# chown -R nobody:nobody /srv/http/\n")])])]),e("hr"),a._v(" "),e("p",[a._v("原 go.sh 不再推荐使用。")]),a._v(" "),e("p",[a._v("V2Ray 提供了一个在 Linux 中的自动化安装脚本。这个脚本会自动检测有没有安装过 V2Ray，如果没有，则进行完整的安装和配置；如果之前安装过 V2Ray，则只更新 V2Ray 二进制程序而不更新配置。")]),a._v(" "),e("p",[a._v("以下指令假设已在 su 环境下，如果不是，请先运行 sudo su。")]),a._v(" "),e("p",[a._v("运行下面的指令下载并安装 V2Ray。当 yum 或 apt-get 可用的情况下，此脚本会自动安装 unzip 和 daemon。这两个组件是安装 V2Ray 的必要组件。如果你使用的系统不支持 yum 或 apt-get，请自行安装 unzip 和 daemon")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L -s https://install.direct/go.sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("此脚本会自动安装以下文件：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("/usr/bin/v2ray/v2ray")]),a._v("：V2Ray 程序；")]),a._v(" "),e("li",[e("code",[a._v("/usr/bin/v2ray/v2ctl")]),a._v("：V2Ray 工具；")]),a._v(" "),e("li",[e("code",[a._v("/etc/v2ray/config.json")]),a._v("：配置文件；")]),a._v(" "),e("li",[e("code",[a._v("/usr/bin/v2ray/geoip.dat")]),a._v("：IP 数据文件；")]),a._v(" "),e("li",[e("code",[a._v("/usr/bin/v2ray/geosite.dat")]),a._v("：域名数据文件。")])]),a._v(" "),e("p",[a._v("此脚本会配置自动运行脚本。自动运行脚本会在系统重启之后，自动运行 V2Ray。目前自动运行脚本只支持带有 Systemd 的系统，以及 Debian / Ubuntu 全系列。")]),a._v(" "),e("p",[a._v("运行脚本位于系统的以下位置：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("/etc/systemd/system/v2ray.service")]),a._v(": Systemd")]),a._v(" "),e("li",[e("code",[a._v("/etc/init.d/v2ray")]),a._v(": SysV")])]),a._v(" "),e("p",[a._v("脚本运行完成后，你需要：")]),a._v(" "),e("ol",[e("li",[a._v("编辑 /etc/v2ray/config.json 文件来配置你需要的代理方式；")]),a._v(" "),e("li",[a._v("运行 systemctl start v2ray 来启动 V2Ray 进程；")]),a._v(" "),e("li",[a._v("之后可以使用 systemctl start | stop | restart | enable | disable | status v2ray 控制 V2Ray 的运行。")])]),a._v(" "),e("h3",{attrs:{id:"go-sh-参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go-sh-参数"}},[a._v("#")]),a._v(" go.sh 参数")]),a._v(" "),e("p",[a._v("go.sh 支持如下参数，可在手动安装时根据实际情况调整：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-p")]),a._v(" 或 "),e("code",[a._v("--proxy")]),a._v("：使用代理服务器来下载 V2Ray 的文件，格式与 curl 接受的参数一致，比如 "),e("code",[a._v('"socks5://127.0.0.1:1080"')]),a._v(" 或 "),e("code",[a._v('"http://127.0.0.1:3128"')]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("-f")]),a._v(" 或 "),e("code",[a._v("--force")]),a._v("：强制安装。在默认情况下，如果当前系统中已有最新版本的 V2Ray，go.sh 会在检测之后就退出。如果需要强制重装一遍，则需要指定该参数。")]),a._v(" "),e("li",[e("code",[a._v("--version")]),a._v("：指定需要安装的版本，比如 "),e("code",[a._v('"v1.13"')]),a._v("。默认值为最新版本。")]),a._v(" "),e("li",[e("code",[a._v("--local")]),a._v("：使用一个本地文件进行安装。如果你已经下载了某个版本的 V2Ray，则可通过这个参数指定一个文件路径来进行安装。")])]),a._v(" "),e("p",[a._v("示例：")]),a._v(" "),e("ul",[e("li",[a._v("使用地址为 127.0.0.1:1080 的 SOCKS 代理下载并安装最新版本："),e("code",[a._v("./go.sh -p socks5://127.0.0.1:1080")])]),a._v(" "),e("li",[a._v("安装本地的 v1.13 版本："),e("code",[a._v("./go.sh --version v1.13 --local /path/to/v2ray.zip")])])]),a._v(" "),e("h2",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),e("p",[a._v("V2Ray 提供了预编译的 Docker image：")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://hub.docker.com/r/v2fly/v2fly-core",target:"_blank",rel:"noopener noreferrer"}},[a._v("v2fly/v2ray-core"),e("OutboundLink")],1),a._v("：其中"),e("code",[a._v("latest")]),a._v("标签会跟随"),e("a",{attrs:{href:"https://github.com/v2fly/docker-fly",target:"_blank",rel:"noopener noreferrer"}},[a._v("v2fly"),e("OutboundLink")],1),a._v("编译仓库提交保持最新，而各个版本以 tag 方式发布，比如"),e("code",[a._v("4.21.3")]),a._v("。")])]),a._v(" "),e("p",[a._v("docker image 的文件结构跟 Linux 下安装的路径相同：")]),a._v(" "),e("ul",[e("li",[a._v("/etc/v2ray/config.json：配置文件")]),a._v(" "),e("li",[a._v("/usr/bin/v2ray/v2ray：V2Ray 主程序")]),a._v(" "),e("li",[a._v("/usr/bin/v2ray/v2ctl：V2Ray 辅助工具")]),a._v(" "),e("li",[a._v("/usr/bin/v2ray/geoip.dat：IP 数据文件")]),a._v(" "),e("li",[a._v("/usr/bin/v2ray/geosite.dat：域名数据文件")])])])}),[],!1,null,null,null);t.default=s.exports}}]);