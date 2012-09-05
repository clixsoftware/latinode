
/**
 * 培训课程信息
 *
 * Author: 	hustcer
 * Date: 	2012-1-19  
 */

/**
 * 当前开课情况:Latin
 */
var cCourseLatin = {
	// **************	不同的舞种数据存储在不同的Collecion里面的，一定不能混存。	*************
	// **************	拉丁数据存储在dance数据库中的	latin  collecion中 	  	*************
	// **************	爵士数据存储在dance数据库中的	jazz   collecion中 		*************
	// **************	街舞数据存储在dance数据库中的	hiphop collecion中 		*************
	courseType : 'latin',
   // 每个课程可以有：cCapacity、locked、autoApprove、manFirst、autoLimit等局部配置，可以覆盖相应的全局配置
   courses    :[{cValue: "CXL1B", cName: "城西拉丁第1期B班", ps:"上课时间：9月12日起，每周三晚6:30~8:40",locked: true, cCapacity: 24, autoLimit:24 },
                {cValue: "14RE", cName: "伦巴基础班", ps:"上课时间：每周四晚6:30~7:30",locked: true},
                {cValue: "14CE", cName: "恰恰基础班", ps:"上课时间：每周四晚7:40~8:40",locked: true}],
   // 课程额定容量，此为全局配置可以被各课程的对应配置所覆盖
   cCapacity  : 15,
   // 锁定课程状态，禁止报名、退课等操作
   locked     : true,
   // 是否开启报名自动审核
   autoApprove: true,
   // 是否男士报名优先，对于拉丁课男士优先则自动审核开启时男士报名自动审核通过
   manFirst   : true,
   // 自动审核报名成功的人数限制
   autoLimit  : 15,
   notice     : '上课地点：西湖国际D座3楼培训教室.说明：教室、上课时间，若有临时变动，或遇公司活动而调整，我们会尽量了解，并提前联系大家。如发生此类情况，也请大家谅解。有问题请联系 齐竞艳（29476）',
   successMsg : '您好，您的拉丁培训报名申请已经审核通过，请按时上课，若因故不能上课可以取消或者申请退课!',
   quitMsg    : '您好，您的拉丁退课申请已经审核通过，欢迎下次报名!',
   beginDate  : '',
   endingDate : ''
};

/**
 * 当前开课情况:Jazz
 */
var cCourseJazz = {
   courseType  : 'jazz', 
   courses     :[{cValue: "7JZE1", cName: "第7期Jazz基础1班", ps:"上课时间：每周一晚7:40~8:30"},
	 			     {cValue: "7JZE2", cName: "第7期Jazz基础2班", ps:"上课时间：每周二晚7:40~8:30"},
	 			     {cValue: "7JZA1", cName: "第7期Jazz提高1班", ps:"上课时间：每周一晚6:40~7:30"},
	 			     {cValue: "7JZA2", cName: "第7期Jazz提高2班", ps:"上课时间：每周二晚6:40~7:30", cCapacity: 20, autoLimit: 20}],

   cCapacity   : 20, 
   // 锁定课程状态，禁止报名、退课等操作
   locked      : false,
   // 是否开启报名自动审核
   autoApprove : true,
   // 是否男士报名优先，对于拉丁课男士优先则自动审核开启时男士报名自动审核通过
   manFirst    : false,
   // 自动审核报名成功的人数限制
   autoLimit   : 20,
   notice      : '上课地点：公司舞房。每期培训9次课，学费90.00元，胸牌押金10.00元[课程结束后退还胸牌押金退回]。每个班如不足15人取消开课，开课时间8月6日，报名结束后会邮件通知。报名成功后请及时付款到支付宝: https://me.alipay.com/starsun，每周五未付款的报名将被取消。',
   successMsg  : '您好，您的Jazz报名申请已经审核通过，烦请迅速缴费，逾期未付则课程将被取消。敬请谅解!',
   quitMsg     : '您好，您的Jazz退课申请已经审核通过，欢迎下次报名!',
   beginDate   : '',
   endingDate  : ''
};

/**
 * 当前开课情况:Hiphop
 */
var cCourseHiphop = {
   courseType  : 'hiphop', 
   courses     :[{cValue: "6HPI", cName: "第6期HipHop中级班", ps:"上课时间：每周一晚7:40~8:30", cCapacity: 24, autoLimit: 24}
                 ],
   cCapacity   : 24, 
   // 锁定课程状态，禁止报名、退课等操作
   locked      : false,
   // 是否开启报名自动审核
   autoApprove : true,
   // 是否男士报名优先，对于拉丁课男士优先则自动审核开启时男士报名自动审核通过
   manFirst    : false,
   // 自动审核报名成功的人数限制
   autoLimit   : 24,
   notice      : '上课地点:公司舞房.每个培训舞种共9次课,基础班费用50.00元,中级班或提高班费用60.00元,开课时间可能5月中旬,具体情况等通知.',
   successMsg  : '您好，您的街舞报名申请已经审核通过，烦请迅速缴费，逾期未付则课程将被取消。敬请谅解!',
   quitMsg     : '您好，您的街舞退课申请已经审核通过，欢迎下次报名!',
   beginDate   : '',
   endingDate  : ''
};

/**
 * 课程命名方法：前面的数字代表培训期次编号，紧随其后的大写字母表示舞种:
 * R:Rumba; C:ChaCha; J:Jive; S:Samba; P:Paso doble;
 * 最后一个大写字母表示课程级别：E: Elementary 基础班;I: Intermediate 中级班; A: Advanced 高级班
 */
var courseLatinList = [
      {courseVal:'CXL1B', courseName:'城西拉丁第1期B班'},
      {courseVal:'14RE', courseName:'伦巴基础班(临时)'},
      {courseVal:'14CE', courseName:'恰恰基础班(临时)'},
		{courseVal:'13SE', courseName:'第13期桑巴基础班'},
		{courseVal:'13CI', courseName:'第13期恰恰中级班'}
	];

/**
 * 课程命名方法：前面的数字代表培训期次编号，紧随其后的大写字母表示舞种:
 * JZ:jazz; 
 * 最后一个大写字母表示课程级别：E: Elementary 基础班;I: Intermediate 中级班; A: Advanced 高级班
 */
var courseJazzList = [
		{courseVal:'7JZA1', courseName:'第7期Jazz提高1班'},
		{courseVal:'7JZA2', courseName:'第7期Jazz提高2班'},
		{courseVal:'7JZE1', courseName:'第7期Jazz基础1班'},
		{courseVal:'7JZE2', courseName:'第7期Jazz基础2班'},
		{courseVal:'6JZI',  courseName:'第6期Jazz中级班'},
		{courseVal:'6JZA',  courseName:'第6期Jazz提高班'},
		{courseVal:'6JZE1', courseName:'第6期Jazz基础1班'},
		{courseVal:'6JZE2', courseName:'第6期Jazz基础2班'}
	];

/**
 * 课程命名方法：前面的数字代表培训期次编号，紧随其后的大写字母表示舞种:
 * HP:hiphop; 
 * 最后一个大写字母表示课程级别：E: Elementary 基础班;I: Intermediate 中级班; A: Advanced 高级班
 */
var courseHiphopList = [
      {courseVal:'6HPI',  courseName:'第6期HipHop中级班'}
    ];


exports.cCourses        = {cLatin:cCourseLatin, cJazz:cCourseJazz, cHiphop:cCourseHiphop};
exports.cCoursesList    = {latinList:courseLatinList, jazzList:courseJazzList, hiphopList:courseHiphopList};



