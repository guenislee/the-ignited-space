/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制品",
    "About & Changelog": "关于 & 更新日志",
    "Charge": "充能",
    "Collapse": "折叠",
    "Craftable": "可制作",
    "Drill rock": "开采石头",
    "Drone Actions": "无人机动作",
    "Drone Upgrades": "无人机升级",
    "Export text": "导出文本",
    "Export to file": "导出到文件",
    "Game Data": "游戏数据",
    "Get export text": "获取导出文本",
    "None": "无",
    "Power up": "通电",
    "Hard reset": "硬重置",
    "Ignited Space": "激燃太空",
    "Import from file": "从文件导入",
    "Import from text": "从文本导入",
    "Landing zone": "着陆区",
    "Planet": "行星",
    "Power": "电力",
    "Repair Drill": "修理钻机",
    "Select file": "选择文件",
    "Stone": "石头",
    "Time:": "时间：",
    "Wipe game data": "擦除游戏数据",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "Consume": "消耗",
    "Drill rock at cost of some energy": "开采 岩石 会消耗一些电力",
    "Drill ore at cost of some energy": "开采 矿石 会消耗一些电力",
    "Never": "从不",
    "Produce": "生产",
    "Recover your energy power": "恢复你的电力",
    "Ore": "矿石",
    "Drill ore": "开采矿石",
    "Allows building quarry": "允许建造采石场",
    "Allows digging and picking more materials": "允许挖掘和捡起更多材料",
    "Auto-quarrying": "自动开采石头",
    "Repair Charging Cable": "修理充电线",
    "Repair Manipulators": "修理机械手",
    "Allows creating electricity power by burning biomass": "允许通过燃烧生物质来产生电力",
    "Automatically collect some biomass": "自动收集一些生物量",
    "Bacteria Incubator": "细菌培养箱",
    "Biomass": "生物质",
    "Collect Biomass": "收集生物质",
    "Combustion": "燃烧",
    "Dig and get some organics": "挖掘并获得一些有机物",
    "Drill some stone": "开采一些石头",
    "Further facilities repair": "进一步的设施修理",
    "Industrial Buildings": "工业建筑",
    "Repair Charging Cable": "修理充电线",
    "Repair Drill": "修理钻头",
    "Automatically collect some stone": "自动收集一些石头",
    "Quarry": "采石场",
    "Repair machinery": "修理机器",
    "Repair machinery. Improves your automatic quarries and mines by 50%": "修理机器。 将您的自动采石场和矿山提高 50%",
    "Auto-miners": "自动采矿",
    "Allows building mine": "允许建造矿山",
    "Collect some organics": "收集一些有机物",
    "Repair storage module": "修理存储模块",
    "Autonomous power supply": "自动化电力供应",
    "Repair storage module. Allows building storage sections": "修理存储模块。 允许构建存储部分",
    "Bacteria Incubator": "细菌培养箱",
    "Thermoelectric Power plant": "热电厂",
    "Expand": "展开",
    "Burns biomass to obtain electricity": "燃烧生物质以获取电力",
    "Power Buildings": "电力建筑",
    "Automatically collect some ore": "自动收集一些矿石",
    "Mine": "矿山",
    "Storage section": "存储部分",
    "Storage facilities": "储存设施",
    "Combustion cameras": "燃烧相机",
    "Storage Buildings": "存储建筑",
    "Decrease biomass consumption by thermoelectric power plants by 25%": "热电厂的生物质消耗量减少25%",
    "Metal": "金属",
    "Provides additional storage space": "提供额外的存储空间",
    "Storage": "存储",
    "Wood": "木头",
    "Boost power supply": "提升电力供应",
    "Repair battery": "修理电池",
    "Bio technology": "生物技术",
    "Increase incubators output by 25%": "将孵化器产量提高 25%",
    "Increase quarries output by 25%": "将采石场产量提高 25%",
    "Quarry technology": "采石技术",
    "Bacteria selection": "菌种选择",
    "Ore production": "矿石生产",
    "Power capacity": "电力容量",
    "Increase electricity consumption by incubators, but incubators start producing oxygen": "增加孵化器的耗电量，但孵化器开始产生氧气",
    "Combustion technology": "燃烧科技",
    "Increase thermal plant output by 25%": "将热电厂输出增加 25%",
    "Economy Boost": "经济提升",
    "Increase mine output by 25%": "矿山产量提高 25%",
    "Mine technology": "矿山技术",
    "More Storage": "更多存储空间",
    "Breath In": "吸气",
    "Storage hub": "存储中心",
    "Provides more storage space, but consumes power": "提供更多存储空间，但耗电",
    "Improved thermal plants": "改良热电厂",
    "Allow building oxygen compressors to store more oxygen": "允许建造氧气压缩机以储存更多的氧气",
    "Basic habitability requirements": "基本宜居性要求",
    "Oxidase burning cameras": "氧化酶燃烧相机",
    "Oxygen": "氧气",
    "Oxygen compressor": "氧气压缩机",
    "Oxygen compressors": "氧气压缩机",
    "Thermal plants are 50% more efficient, but now consume oxygen": "热电厂的效率提高了 50%，但现在消耗的是氧气",
    "Water pump": "水泵",
    "Water storage": "水储存",
    "Allow building water pumping stations": "允许建造水泵站",
    "Increase stone, ore and biomass storage from storage section and hub by 25%": "将存储部分和存储中心的石头、矿石和生物质存储量增加 25%",
    "Reserve batteries": "备用电池",
    "Storage Bonuses": "存储奖励",
    "Storage technology": "存储技术",
    "Thermoelectric plants now also provide small power storage": "热电厂现在也提供小型电力储存",
    "Water pumping": "抽水",
    "Water": "水",
    "Provides water storage": "提供蓄水功能",
    "Ship hold": "船舱",
    "Provides water supply": "提供供水",
    "To max:": "装满：",
    "To empty:": "用完：",
    "Breakdown:": "分解：",
    "Base battery": "基础电池",
    "Base": "基础",
    "Provides more storage for oxygen": "提供更多的氧气储存",
    "Allows building battery. Also, improves power output by 20%": "允许建造电池。 此外，提高 20% 的电力输出",
    "Electrolytes": "电解质",
    "Final preparation": "最后准备",
    "Income Bonuses": "收入奖励",
    "Nutrition": "营养学",
    "Repair supply module": "修理供电模块",
    "Battery": "电池",
    "Provides power storage": "提供电力储存",
    "Start generating trace amount of nutrition": "开始产生微量营养",
    "Enables colonists arrival": "使殖民者能够到达",
    "First colonists": "第一批殖民者",
    "Living Cabin": "生活舱",
    "Repair docking module": "修复对接模块",
    "You start with broken ship on hostile planet. Your main goal is to prepare for firts colonists to arrive, and build prosperous civilisation": "你从敌对星球上的破船开始。 你的主要目标是为第一批殖民者的到来做好准备，并建立繁荣的文明",
    "Empty and cold here": "这里空旷寒冷",
    "This game was pretty much inspired by": "这个游戏的灵感来自于",
    "Popups will now appear always to right": "弹出窗口现在总是出现在右边",
    "Basic game mechanics: buildings, researches, upgrades, colony management": "基本游戏机制：建筑、研究、升级、殖民地管理",
    "Cargo Sorting": "货物分拣",
    "Colonists": "殖民者",
    "Colony": "殖民地",
    "Provides living space for 2 colonists": "为 2 名殖民者提供生活空间",
    "Repair research module": "修复研究模块",
    "Repair research module to enable researchers working at it and produce some science.": "修复研究模块，使研究人员能够在其中工作并产生一些科学成果。",
    "Repair sorting machinery. Gives 75% bonus to stone, ore and biomass storage.": "维修分拣机械。 为石头、矿石和生物质储存提供 75% 的加成。",
    "Research": "研究",
    "Residental Buildings": "住宅楼",
    "Aesthetics": "美学",
    "Basic": "基础",
    "Exo farming": "外部农业",
    "Free colonists:": "自由殖民者：",
    "Generates research": "产生研究",
    "Happiness affects your colonists productivity. Has no effect on machinery production or crafting": "幸福会影响您的殖民者的生产力。 对机械生产或手工艺没有影响",
    "Jobs": "工作",
    "Learn how to work with soil on a foreign planet. Allows you hiring farmers": "了解如何在外星球上处理土壤。 允许你雇佣农民",
    "Miner": "矿工",
    "Mines ore": "开采矿石",
    "Mines stone": "矿石",
    "Overview": "概览",
    "Population": "人口",
    "Population:": "人口：",
    "Quarrymen": "采石工人",
    "Research: Exo farming": "研究：外种农业",
    "Researcher": "研究员",
    "Researches": "研究",
    "Science": "科学",
    "Scientific basics": "基础科学",
    "Farmer": "农民",
    "Farming tools": "农具",
    "Generates nutrition": "产生营养",
    "Improves farming output by 10%.": "农业产出提高 10%。",
    "Learn more about minerals available at your new home": "详细了解您的新家可用的矿物质",
    "Learn your atmosphere closer. Unlocks new upgrades and buildings": "更深入地了解你的氛围。 解锁新的升级和建筑",
    "Meteorology": "气象",
    "Mineralogy": "矿物学",
    "Service Industry": "服务业",
    "Unlock providing some services to your groving colony": "解锁为您的殖民地提供一些服务",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Resource: ": "资源：",
    "Goal: ": "目标：",
    "Allows drilling harder materials. Also improve stone output by ": "允许开采更硬的材料。 同时提高石头产量 ",
    "Improves Charge Output by ": "将电力输出提高 ",
    "Upgrade: ": "升级: ",
    "Building: ": "建筑: ",
    "Improves energy storage by ": "提升电力存储 ",
    "Happiness: ": "幸福: ",
    "Job: ": "工作: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);