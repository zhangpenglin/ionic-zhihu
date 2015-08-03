angular.module('starter.services', [])

.factory('dataService', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var marks = [{
		title: "有趣的知识",
		avatar: "img/avatar_1.jpg",
		name: "天猪(刘勇)",
		num: "251"
	}, {
		title: "去哪里吃什么",
		avatar: "img/avatar_2.jpg",
		name: "唐棣",
		num: "28"
	}, {
		title: "触目惊心",
		avatar: "img/avatar_3.jpg",
		name: "尤子涵",
		num: "178"
	}, {
		title: "时光浅暖",
		avatar: "img/avatar_4.jpg",
		name: "Aylona Sun",
		num: "799"
	}, {
		title: "有用的资料",
		avatar: "img/avatar_5.png",
		name: "郑建文",
		num: "69"
	}, {
		title: "下厨房，做好次的给你呀",
		avatar: "img/avatar_6.jpg",
		name: "myd7349",
		num: "126"
	}, ];
	var datas = [{
		title: "如何看待央行拟规定「网络支付每天限额 5000 元」、「支付宝不能跨行转账」？",
		content: "<p>央妈延续了“不让你过好周末”的光荣传统，在周五发布了《非银行支付机构网络支付业务管理办法（征求意见稿）》（以下简称央行新规），引发了轩然大波。当然我们知道这个光荣传统是为了让股市过个好周末，所以今天的吐槽重点不在这儿。<br></p><br><p>首先不得不说央行的公关艺术有了质的进步。新规文本一出台，连专门跑央行的记者都大呼看不懂，忙着查了一晚上电子签名、电子证书在PC端和移动端的普及情况。有些媒体为了抢时效，提炼标题为“网购支付限额5000”；央行马上在第二天休息日加班以答记者问的方式放风说：我们可没说支付限额5000元哦，我们说的是余额支付限5000，更多的部分还可以从银行账户划转支付。这下连本来反感央行新规的人都看不下去了，说媒体太不专业啦见风就是雨啦等等；至于一些本来就亲央行的意见领袖（其名字还被列入了官方允许采访的少数名单），就更是“啥都不懂”“傻逼专家”地破口大骂了。<br><br>通过对这么一个次要问题的放风、争议、辟谣，央行成功污名化了冲在前头的质疑媒体，让新规中最主要的不合理之处逃避过第一轮的质疑。那些感慨“互联网企业利用舆论优势冲击监管”的银行界人士看清楚了，央妈在舆论操控上老到得很，更何况它还掌握了让媒体闭嘴的强权（仅仅周日一天即有多家媒体网站的投票、讨论专题被撤下），这个权力可是任何媒体和民营企业都不具备的。</p><br><p>那么央行新规最不合理的地方在哪里呢？淼叔在仔细读了新规五十七条之后正要下笔，突然想起冲在第一线质疑央行的那些媒体同行的悲惨下场，又特意在半夜拨通了一位银行朋友的电话。她告诉淼叔，金融监管首重“风险管理”，与创新、便捷比起来，安全始终具有最高的优先级。她最后问的一句话击中了关键：中国现在有多少家第三方支付机构？淼叔上网一查，270家！这里面有一些以发行预付费卡为业、多次被媒体质疑的，有银联、北京银联、宁波银联这样子孙共聚一堂的，还有北京市政交通一卡通这种拿着几亿沉淀资金不知在干啥、退个卡难于上青天的的国有企业。</p><br><p>还好没有骤然下笔质疑！不然不管你指责哪条管理过严过苛，央行及其亲近媒体都可以从这270家里找出一个确实发生的事故案例，无辜地亮出来告诉大众：这是真实的案例啊，第三方支付行业乱象渐显啊！再不监管要出大事啊！然后淼叔也要被“官方指定采访对象”大骂无知傻逼了。</p><br><p>所以，为了稳妥起见防被反咬，淼叔也开宗明义地说一句：这篇文章的出发点，就是基于蚂蚁金服、腾讯金融、百度金融、京东金融这几家互联网金融巨头的产品；他们推出的产品在过去十年来，不仅弥补了传统银行事难办、收费乱、服务差、门槛高的弊端，而且发明了余额宝、微信红包、京东白条等利国利民的互联网金融产品。它们均在美国、香港等公开透明的资本市场上市（或拥有在此上市的大股东），体量巨大，财务数字透明。央行将它们与一些不知名的第三方机构混在一起用同样的标准进行监管，本身即是不平之事。以下论述，均基于上述几个大型互联网公司的产品、服务，<strong>不为央行颁发牌照的其他200多家机构背书。</strong></p><br><p>额外多说一句，这个央行新规只是一个征求意见稿，这意味着在8月28日前，作为普通用户的你，还有机会提出自己的不满和建议。虽然央行惜字如金地为意见反馈渠道仅仅提供了一个电子邮箱和一个实体收件地址，但有总比没有好，以下反对意见，为了方便大家使用，淼叔也按照小标题、原文、不合理之处、建议更改的格式分条排版反对意见，读者们可以挑选您赞同的一条或者几条，直接拷贝后发送到央行的邮件地址paymentcard@pbc.gov.cn，标题用“我反对《非银行支付机构网络支付业务管理办法（征求意见稿）》的如下内容”诸如此类的即可。</p><br><p><b>苛刻限制账户条件，不合理！</b></p><br><blockquote>规定原文：<br>第九条 支付机构为客户开立支付账户的，应当对客户实行实名制管理，登记客户身份基本信息，核实客户有效身份证件，按规定留存有效身份证件复印件或者影印件，并通过三个（含）以上合法安全的外部渠道对客户身份基本信息进行多重交叉验证，确保有效核实客户身份及其真实意愿，不得开立匿名、假名支付账户。外部验证渠道包括但不限于政府部门数据库、商业银行账户信息系统、商业化数据库等能够有效验证客户身份基本信息的数据库或系统。（央行在另文中指出，具体验证渠道包括但不限于公安、工商、教育、财税等管理部门及商业银行、征信机构等单位所运营的，能够有效验证客户身份基本信息的数据库或系统）。<br>第十六条 ……<br>​（一）对于支付机构自主或委托合作机构以面对面方式完成身份核实的个人客户，以及支付机构仅以非面对面方式核实身份，但通过五个（含）以上合法安全的外部渠道对身份基本信息完成多重交叉验证的个人客户，支付机构可为其开立综合类支付账户，支付账户余额可以用于消费、转账以及购买投资理财产品或服务；<br>（二）对于支付机构仅以非面对面方式核实身份，且通过三个（含）以上、五个以下合法安全的外部渠道对身份基本信息完成多重交叉验证的个人客户，支付机构可为其开立消费类支付账户，支付账户余额仅可用于消费以及转账至客户本人同名银行账户；</blockquote><br><br><p>开个第三方支付账户，就要求你出具至少三个“身份验证独立外部渠道”；独立是什么意思呢？就是说一个政府部门或商业机构仅能算一个渠道，所以身份证和护照不能算两个证件哦，因为都是由公安部门提供的。不过呢，据接近央行的记者表示，不同银行的银行卡倒是可以算独立渠道，也就是说一张工行卡加一张建行卡加一张身份证就可以开个第三方支付账户了。</p><br><p>但这种账户其实也没啥用，不能买理财产品、不能转账，只能买买东西，在互联网金融消费大行其道的今天，等于开历史倒车。假如想获得这些功能，你得有五个独立渠道来证明身份——最常见的可能就是一张身份证加工农中建四大国有银行的银行卡（你说你想通过工商、教育、税务部门的资料去验证？请问你知道到哪儿去开纳税证明和工商资料吗？开了后如何通过网络传输并且让开户机构认可呢？）。</p><br><p>所以搞笑的一幕出现了，央行要求第三方支付必须对现有用户补办认证手续，否则半年后要降级用户；支付宝3亿实名用户、微信支付2亿用户，这5亿用户都走一遍央行要求的认证的话，除了身份证渠道，需要有20亿张银行卡来作为“独立渠道”；考虑到一般人通常都是一到两张银行卡，<strong>光履行央行身份验证这一条，就会新增10到15亿银行卡的需求。央妈，到底是亲妈。</strong></p><br><p>即使在银行开户，也不是个个都像央妈要求这么严苛的。香港某些大银行开户，要求提供的不过是身份证件加地址证明，其他的资料由银行购买或构建的内部数据库验证。而在大陆，与电商企业结合的支付账户通过历次购买记录早就能掌握用户住址，通过日常上线、手机号等记录也可以交叉比对出用户住址与身份。央行仍然削足适履地设置5个独立渠道的门槛，无疑是增大了全社会的成本。</p><br><p>更改建议：用身份证、手机号、一张银行卡验证后开通全功能支付账户比较合理。</p><br><p><b>低下额度限制，不合理！</b></p><br><blockquote>第十五条 ……（三）除单笔金额不足200元的小额支付业务，以及公共事业费、税费缴纳等收款人固定并且定期发生的支付业务外，支付机构不得代替银行进行客户身份及交易验证。银行对客户资金安全的管理责任不因支付机构代替验证而转移。<br><br>第二十八条 ……支付机构采用包括数字证书或电子签名在内的两类（含）以上要素进行验证的交易，单日累计限额由支付机构与客户通过协议自主约定；支付机构采用不包括数字证书、电子签名在内的两类（含）以上要素进行验证的交易，单个客户所有支付账户单日累计金额应不超过5000元（不包括支付账户向客户本人同名银行账户转账，下同）；支付机构采用不足两类要素进行验证的交易，单个客户所有支付账户单日累计金额应不超过1000元，且支付机构应当承诺无条件全额承担此类交易的风险损失赔付责任。</blockquote><br><p>第十五条说的是，200元以上的非固定定期消费，除了支付密码之外，你还得通过银行的身份和交易验证，这些方式从手机短信到恶心的网银页面不一而足。例如，你要发个微信红包，得先像上文说的一样准备一个身份证四张银行卡开户；即使开户了，假如一个红包超过200元，你也得先跳到网银界面输入卡号、密码、验证码，或者输入手机验证码，才能发出这个红包（中间跳转来跳转去微信的红包界面还在么？央妈才不管你）。</p><br><p>有了这第十五条，你也应该知道，部分媒体对第二十八条“支付上限5000元”的解读其实也不是完全失实。如果你要买一部iPhone，从前是直接下单付款完事儿，央行新规后，这6000元里5000元余额仍然很顺畅，剩下那1000又要跳到恶心的银行网银（电脑上的话某些银行要求必须是IE浏览器哦，MAC党哭去吧），才能完成。这种被强行打断的支付体验，说是“上限5000”并不离谱。</p><p>更改建议：消费额度由第三方支付与用户自行制定，或第三方支付方根据用户信用、历史消费等数据自行制定。</p><br><p><b>限制金融创新尝试，不合理！</b></p><blockquote>第十三条 支付机构不得为客户办理或者变相办理现金存取、信贷、融资、理财、担保、货币兑换业务。<br>第十七条 支付机构为客户办理银行账户向支付账户转账的，转出账户应仅限于支付账户客户本人同名银行借记账户；办理支付账户向银行借记账户转账的，转入账户应仅限于客户预先指定的一个本人同名银行借记账户。<br>支付机构不得对支付账户向客户本人同名银行借记账户转账业务设置限额。</blockquote><br><p>如果这条生效，那蚂蚁花呗、京东白条这样的金融创新产品就死掉了，余额宝也离死不远了。像蚂蚁、京东、腾讯这样拥有大量客户数据的公司，根据客户信用适当进行借贷、分期等金融创新，合情合理，风险控制条件目前看也具备，央行实在不放心可以要求对这部分数据进行监管，一刀切掉不觉得太粗暴了吗？不仅造成了民众的不便，还对基于互联网数据的风控模型完善、借贷产品设计等创新工程设置了极大障碍，别说互联网+了，除都除得不亦乐乎。</p><br><p>更搞笑的是，当年余额宝风头正劲时，四大国有银行同时降低了支付宝的快捷支付额度，从两万到5000元；那时候不见央妈出来吭一声，现在却急急忙忙地要求“支付机构不得对支付账户向客户本人同名银行借记账户转账业务设置限额。”</p><br><p>谁的央妈？一目了然。</p><br><p>更改建议：第三方机构进行金融创新时，应该随时接受央行及其派出机构的检查，并应要求提供数据监测接口以供监管部门评估效果。</p><br><p>写到这里，篇幅已经太长，谁让央妈的五十八条槽点如此丰富呢。可以看出，央行规避风险的基本思路，一是限制，二是将一些数据监督、验证的工作，强制第三方支付提交给银行进行把关。但在互联网技术如此发达的今天，大型第三方支付的数据已经具有了不同于银行的特征，强行要求它们去适应银行的标准，既限制创新，又有裁判员与运动员同场竞技之嫌。央行拿出的这个监管新规，往客气里说，也是一种“惰政”。</p><br><p>对于一些其他疑问，淼叔将视需要另行撰文补充。也欢迎你添加微信公众号“山寨发布会”并在后台留言，一起来探讨央妈与第三方支付的未来。</p>",
		good: "278",
		avatar: "img/avatar_8.jpg",
		name: "阳淼",
		about: "IT传媒人，“山寨发布会”创始人，《AV与愤怒》作者"
	}, {
		title: "如何制作高端大气上档次的建筑设计作品集",
		content: "谢邀作品集作为自己大学的总结，或者工作的总结，就算没有找工作的压力，我觉得也应该做，原来记得学姐跟我说，应该养成每隔五年给自己做作品集的习惯，收获的不仅仅是五年的知识与经验，更多的其实是对自己人生的一个总结",
		good: "278",
		avatar: "img/avatar_1.jpg",
		name: "myd7349",
		about: "机电专业大三学生"
	}, {
		title: "吃西餐时有哪些行为非常low？",
		content: "我原来以为吃西餐一定不能搞错左右手以及刀和叉子，我以为一次性把主菜、甜点叫过来很不优雅，如果自己再要双筷子那简直太粗俗。直到我到了法国，直到我和法国人一起吃了无数次西餐，我才知道原来国内西餐厅所谓的礼节真的比国外还要讲究",
		good: "4k",
		avatar: "img/avatar_2.jpg",
		name: "Aylona Sun",
		about: "微信公号：道哥的黑板报"
	}, {
		title: "放弃娱乐下班和周末改为充电是不是太极端了？",
		content: "1）你开心就好喽~极端不极端，只有你自己能判断。2）适度的压力是生活必需品。3）虽然这么说，但充电也应该是享受在其中，为了充电而充电让其变成负担，便没有必要。4）苹果死机我也不知道啊，不如换台新的？（挖鼻孔表情",
		good: "65",
		avatar: "img/avatar_3.jpg",
		name: "尤子涵",
		about: "前中式餐饮连锁老板，现丛林社会冒险家，北漂iOS码农"
	}, {
		title: "有哪些你 20 岁之前不信，30 岁后深信不疑且奉为圭臬的话 / 道理？",
		content: "谢邀……但我还没到30岁呢……不过这几年处于变动期，也算悟出了一些之前未曾明白的道理。1.社会是最公平的我在学生时代，是个彻头彻尾的愤青，总觉得社会处处充满着不公。为什么别人走走关系，就能拿到比我辛辛苦苦复习要高的分数？工作之后也有很长一段时间抱怨自己的主管，凭什么我勤勤恳恳地工作，最后功劳都被他抢了去？",
		good: "32",
		avatar: "img/avatar_4.jpg",
		name: "唐棣",
		name: "我是男的，不解释。知影zhimovie，和你在一起"
	}, {
		title: "“知乎”有哪些负能量？",
		content: "“信仰”《乌合之众》，却往往不愿耐心读完看不懂的最高票答案然后点赞；“信仰”《娱乐至死》，却往往愿意在知乎上点开一个个段子和吐槽消磨时间；“信仰”《一九八四》，却往往喜欢一边随手举报一边不停维护自己心爱的大V。",
		good: "5w",
		avatar: "img/avatar_5.png",
		name: "郑建文",
		about: "摄影师，摄影培训，人像一对十网络课开始报名"
	}, {
		title: "既然大学生大学毕业后从事自己专业的很少，那大学生是否应该把精力适当的从学习转移到社会活动中呢？",
		content: "第一，“大学生大学毕业后从事自己专业的很少”这个命题，题主应该拿出数据来说话比较合适，否则就是一个伪命题。第二，无论毕业后是否从事其他专业的工作，都不应该在大学时减少对专业所学的重视程度。因为这首先是对自己毕业后生活的负责任。我也建议在学",
		good: "90",
		avatar: "img/avatar_6.jpg",
		name: "天猪(刘勇)",
		aboout: "法律不是万能的，但是没有法律是万万不能的"
	}];
	var newmarks = {
		title: "冷静的声音",
		avatar: "img/avatar_7.jpg",
		name: "edmon",
		num: "812"
	};
	var newdatas = {
		title: "有一个稀有的姓是一种怎样的感受？",
		content: "我姓过。这个姓氏可以追溯到夏商时期，是个古老而少见的姓氏。姓过倒也不稀奇，虽说不在百家姓内（貌似在五百开外），但全国范围内倒也还有不少同胞。关键是我还有个更简洁有力的名：人。",
		good: "663",
		avatar: "img/avatar_7.jpg",
		name: "阳淼",
		about: "IT传媒人，“山寨发布会”创始人，《AV与愤怒》作者"
	};
	return {
		marks: marks,
		datas: datas,
		newmarks: newmarks,
		newdatas: newdatas
	};
});