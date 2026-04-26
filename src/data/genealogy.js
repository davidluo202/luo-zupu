/**
 * 羅氏族谱完整数据
 * 始祖劻正公（周武王三年，前1048年受封）
 * 興寧始祖小九公/洪德公（1261年）至今
 *
 * 注：生僻字均使用Unicode原字，配合Noto Serif SC字体渲染
 */

// 每個人物的数据结构
// { id, name, courtesy(字), alias(號), posthumous(谥號),
//   birth, death, birthNote, deathNote,
//   title(官职), deeds(事迹), generation, branch,
//   spouses: [{ name, surname, birth, death, children: [id...] }],
//   note }

export const members = [
  // === 遠祖（本譜之前，用負數世代表示）===
  { id: 'kuangzheng', name: '劻正', generation: -89, branch: 'ancestor',
    title: '周武王三年鎮守宣城有功受封', birth: '前1048年',
    deeds: '羅氏得姓始祖，周武王三年鎮守宣城有功，後受封於羅，子孫以國為氏',
    spouses: [], note: '傳三子：昌柞、昌世、昌允', isAncestor: true },

  // === 《大成譜》八十九世 谷賢公（本譜之前一世）===
  { id: 'guxian', name: '谷賢', generation: -1, branch: 'ancestor',
    deeds: '娶九妻，生十八子', death: '享壽91歲', isAncestor: true,
    spouses: [
      { name: '饒修', surname: '饶', children: ['xiaojiu','boqi','dawu'] },
      { name: '程氏', surname: '程' }, { name: '錢氏', surname: '錢' },
      { name: '古氏', surname: '古' }, { name: '鄭氏', surname: '鄭' },
      { name: '白氏', surname: '白' }, { name: '董氏', surname: '董' },
      { name: '蔣氏', surname: '蒋' }, { name: '韓氏', surname: '韓' },
    ] },

  // === 始祖 小九公（洪德公）一世 ===
  { id: 'xiaojiu', name: '君治', courtesy: '盛齡', alias: '洪德', generation: 1,
    branch: 'main', birth: '1261-11-01', birthNote: '宋理宗景定二年辛酉十月初八卯时',
    title: '宋朝循州學正', note: '按《《大成譜》》为四十九世派，又称小九公',
    deeds: '原籍福建寧化县石壁村，宋末客道廣東興寧，赴任循州學正，见興寧山水悠揚、土地沃野豐裕，择東廓而立家',
    spouses: [
      { name: '曾氏', surname: '曾', note: '大孺人', children: ['shenghan'] },
      { name: '胡氏', surname: '胡', note: '大孺人', children: ['xinhan'] },
      { name: '黃氏', surname: '黃', note: '大孺人', children: ['zhenhan'] },
    ] },

  // === 右八房祖 昇澣 ===
  { id: 'shenghan', name: '昇澣', courtesy: null, alias: null, generation: 2,
    branch: 'right', birthNote: '元成宗元贞元年', birth: '1295',
    title: '貢士，授教諭郎大學士', death: '1400', deathNote: '明惠帝建文二年，寿105',
    note: '按《《大成譜》》派名成章，右八房祖',
    spouses: [{ name: '謝氏', surname: '謝', children: ['hanyin_r','hanchen_r'] }] },

  // === 右八房世系 ===
  // 右三世
  { id: 'hanyin_r', name: '漢寅', generation: 3, branch: 'right',
    note: '派名彥興',
    spouses: [
      { name: '黃氏', surname: '黃' },
      { name: '虞氏', surname: '虞', children: ['xiushan_r'] }
    ] },
  { id: 'hanchen_r', name: '漢辰', generation: 3, branch: 'right',
    note: '派名彥典',
    spouses: [{ name: '張氏', surname: '張', children: ['xiufu_r'] }] },

  // 右四世
  { id: 'xiushan_r', name: '秀山', generation: 4, branch: 'right',
    note: '派名伯瑚',
    spouses: [
      { name: '謝氏', surname: '謝' },
      { name: '朱氏', surname: '朱', children: ['mengchu_r'] }
    ] },
  { id: 'xiufu_r', name: '秀甫', generation: 4, branch: 'right',
    note: '派名伯琅',
    spouses: [{ name: '楊氏', surname: '楊', children: ['wenliang_r'] }] },

  // 右五世
  { id: 'mengchu_r', name: '孟初', generation: 5, branch: 'right',
    note: '派名賢',
    spouses: [{ name: '陳氏', surname: '陳', children: ['cai_r','lun_r'] }] },
  { id: 'wenliang_r', name: '文亮', generation: 5, branch: 'right',
    note: '派名公全',
    spouses: [{ name: '楊氏', surname: '楊', children: ['chenbao_r'] }] },

  // 右六世
  { id: 'cai_r', name: '綵', generation: 6, branch: 'right',
    spouses: [{ name: '陳氏', surname: '陳', children: ['huai_r7','yuan_r7'] }] },
  { id: 'lun_r', name: '綸', generation: 6, branch: 'right',
    spouses: [{ name: '劉氏', surname: '劉', children: ['huan_r7','jun_r7'] }] },
  { id: 'chenbao_r', name: '塵保', generation: 6, branch: 'right',
    spouses: [{ name: '劉氏', surname: '劉', children: ['rou_r7','chong_r7','jiong_r7','lian_r7'] }] },

  // 右七世（上四房+下四房 = 右八房）
  { id: 'huai_r7', name: '淮', generation: 7, branch: 'right-1', note: '上四房之一' },
  { id: 'yuan_r7', name: '源', generation: 7, branch: 'right-2', note: '上四房之二' },
  { id: 'huan_r7', name: '渙', generation: 7, branch: 'right-3', note: '上四房之三' },
  { id: 'jun_r7', name: '浚', generation: 7, branch: 'right-4', note: '上四房之四' },
  { id: 'rou_r7', name: '涭', generation: 7, branch: 'right-5', note: '下四房之一' },
  { id: 'chong_r7', name: '沖', generation: 7, branch: 'right-6', note: '下四房之二' },
  { id: 'jiong_r7', name: '浻', generation: 7, branch: 'right-7', note: '下四房之三' },
  { id: 'lian_r7', name: '溓', generation: 7, branch: 'right-8', note: '下四房之四' },

  // === 黃氏所生 振澣（第三房，傳承不明）===
  { id: 'zhenhan', name: '振澣', generation: 2, branch: 'middle',
    note: '黃氏所生，傳漢細（三世）→文彥（四世），以後不明',
    spouses: [] },

  // === 左八房世系（本族主脉）===
  { id: 'xinhan', name: '新澣', generation: 2, branch: 'left',
    note: '按《《大成譜》》派名成宗，左八房祖', title: '大元學谕',
    spouses: [{ name: '陳氏', surname: '陳', note: '大孺人', children: ['handong'] }] },

  { id: 'handong', name: '漢東', generation: 3, branch: 'left',
    birth: '1309-10-28', birthNote: '元武宗二年己酉九月二十五日',
    note: '按《《大成譜》》名彥興，行九十三郎',
    spouses: [{ name: '張氏', surname: '張', note: '大孺人', children: ['yingwu'] }] },

  { id: 'yingwu', name: '應午', generation: 4, branch: 'left',
    birth: '1326', birthNote: '元泰定三年二月初十辰时',
    note: '按《《大成譜》》派名伯修',
    spouses: [{ name: '張氏', surname: '張', note: '大孺人', children: ['wenli'] }] },

  { id: 'wenli', name: '文立', generation: 5, branch: 'left',
    note: '按《《大成譜》》派名公質',
    spouses: [{ name: '薛氏', surname: '薛', note: '大孺人', children: ['zuxian'] }] },

  { id: 'zuxian', name: '祖賢', generation: 6, branch: 'left',
    spouses: [{ name: '楊氏', surname: '楊', note: '大孺人', children: ['wei'] }] },

  { id: 'wei', name: '維', generation: 7, branch: 'left',
    deeds: '生八子，立左八房',
    spouses: [{ name: '曾氏', surname: '曾', note: '大孺人',
      children: ['yu8','cheng8','min8','hao8','xu8','bing8','ang8','mian8'] }] },

  // 左八世八子
  { id: 'yu8', name: '昱', generation: 8, branch: 'left-1',
    spouses: [{ name: '陳氏', surname: '陳', children: ['zan9'] }] },
  { id: 'cheng8', name: '晟', generation: 8, branch: 'left-2',
    spouses: [{ name: '李氏', surname: '李', children: ['gun9','qiu9'] }] },
  { id: 'min8', name: '旻', generation: 8, branch: 'left-3',
    title: '明朝進士',
    spouses: [{ name: '劉氏', surname: '劉', children: ['si9','yi9','xi9'] }] },
  { id: 'hao8', name: '昊', generation: 8, branch: 'left-4',
    spouses: [{ name: '何氏', surname: '何', children: ['hu9','jin9','xiang9','you9'] }] },
  { id: 'xu8', name: '勗', generation: 8, branch: 'left-5',
    note: '勗(xù)，同"勖"，勉励之意',
    spouses: [{ name: '張氏', surname: '張', children: ['ju9','pi9','tan9','tang9'] }] },
  { id: 'bing8', name: '昺', generation: 8, branch: 'left-6',
    note: '昺(bǐng)，同"炳"',
    spouses: [{ name: '張氏', surname: '張', children: ['xia9','qu9','zhuan9','si9b','ru9'] }] },
  { id: 'ang8', name: '昂', generation: 8, branch: 'left-7',
    spouses: [{ name: '鄧氏', surname: '鄧', children: ['biao9','pei9','zhuang9'] }] },
  { id: 'mian8', name: '冕', generation: 8, branch: 'left-8',
    spouses: [{ name: '朱氏', surname: '朱', children: [] }],
    note: '生四子：䄎、𫌀、䘺、䄝' },

  // 九世（旻公後裔，本房主脉）
  { id: 'si9', name: '榹', generation: 9, branch: 'left-3',
    note: '榹(sī)，原配劉氏，繼娶郭氏',
    spouses: [
      { name: '劉氏', surname: '劉' },
      { name: '郭氏', surname: '郭', children: [] }
    ] },
  { id: 'yi9', name: '𧘕', generation: 9, branch: 'left-3',
    note: '𧘕，衣字旁生僻字',
    spouses: [{ name: '林氏', surname: '林' }] },
  { id: 'xi9', name: '禠', generation: 9, branch: 'left-3',
    posthumous: '孝友', note: '禠(xī/chī)',
    spouses: [{ name: '張氏', surname: '張', children: ['wenshen'] }] },

  // 十世
  { id: 'wenshen', name: '文紳', generation: 10, branch: 'left-3',
    spouses: [{ name: '陳氏', surname: '陳', note: '陳靜孺人',
      children: ['changchun','changhuai','changgui'] }] },

  // 十一世
  { id: 'changchun', name: '常椿', generation: 11, branch: 'left-3-bo',
    spouses: [{ name: '劉氏', surname: '劉' }] },
  { id: 'changhuai', name: '常槐', generation: 11, branch: 'left-3',
    spouses: [{ name: '彭氏', surname: '彭', children: ['qiujiang','zhanjiang'] }] },
  { id: 'changgui', name: '常桂', generation: 11, branch: 'left-3-shu' },

  // 十二世
  { id: 'qiujiang', name: '如鳳', alias: '秋江', generation: 12, branch: 'left-3',
    spouses: [{ name: '陳氏', surname: '陳', children: ['nantai','yutai'] }] },
  { id: 'zhanjiang', name: '湛江', generation: 12, branch: 'left-3-shu',
    spouses: [{ name: '廖氏', surname: '廖' }] },

  // 十三世
  { id: 'nantai', name: '南台', generation: 13, branch: 'left-3-bo',
    spouses: [{ name: '薛氏', surname: '薛' }] },
  { id: 'yutai', name: '瑀', courtesy: '玉台', generation: 13, branch: 'left-3',
    birth: '1522', birthNote: '明朝嘉靖正月二十二日',
    death: '1608', deathNote: '萬歷三十六年',
    spouses: [{ name: '黃氏', surname: '黃',
      children: ['shifu','shigui','shikang','shining','shilong'] }] },

  // 十四世
  { id: 'shifu', name: '世富', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '林氏', surname: '林' }], note: '後裔移居徽州府' },
  { id: 'shigui', name: '世貴', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '黃氏', surname: '黃' }], note: '後裔移居徽州府' },
  { id: 'shikang', name: '世康', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '陳氏', surname: '陳' }], note: '後裔移居徽州府' },
  { id: 'shilong', name: '世隆', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '劉氏', surname: '劉' }], note: '立嗣萬秋，後裔移居徽州府' },
  { id: 'shining', name: '世寧', generation: 14, branch: 'left-3',
    birth: '1587', birthNote: '萬歷十五年丁亥十二月十七日',
    death: '1640', deathNote: '崇禎十三年庚辰四月初六日',
    spouses: [
      { name: '饒氏', surname: '饶', children: ['xishi','xishu','xiD'] },
      { name: '鄭氏', surname: '鄭', children: ['xili','xiyue','xiwen','wanrong'] },
    ] },

  // 十五世
  { id: 'xishi', name: '習詩', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '楊氏', surname: '楊' }], note: '移居惠州' },
  { id: 'xishu', name: '習書', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '賴氏', surname: '賴' }], note: '移居惠州' },
  { id: 'xili', name: '習禮', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '鄭氏', surname: '鄭' }], note: '移居惠州' },
  { id: 'xiyue', name: '習樂', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '姚氏', surname: '姚' }], note: '移居惠州' },
  { id: 'wanrong', name: '萬荣', courtesy: '習章', generation: 15, branch: 'left-3',
    birth: '1636', birthNote: '明末崇禎九年七月', note: '後更名元章',
    deeds: '六歲丧父，十二歲丧母，明末清初单独至揚州访叔伯，与叔管英合股贸易後積累財款，樂施好善，創買下寨仔脑水楼下（俗语眠牛形）宅地',
    spouses: [{ name: '李氏', surname: '李', children: ['yiqi','tenghai'] }] },

  // 十六世
  { id: 'yiqi', name: '以旂', courtesy: '必捷', alias: '仕霖', posthumous: '純端',
    generation: 16, branch: 'left-3',
    birth: '1669-08-01', birthNote: '清朝康熙八年八月初一',
    death: '1741-10-05', deathNote: '乾隆六年十月初五',
    spouses: [
      { name: '梁氏', surname: '梁', birth: '1670', death: '1743',
        children: ['xueqian','xueheng','xuejin'] },
      { name: '黃氏', surname: '黃', birth: '1693', death: '1777',
        children: ['xuegui'] },
    ] },
  { id: 'tenghai', name: '滕海', courtesy: '必運', alias: '以旌', generation: 16,
    branch: 'left-3-shu',
    birth: '1679', birthNote: '康熙十八年己未年正月', death: '1770',
    deeds: '創建房于程淋塘侧均塘西上',
    spouses: [{ name: '王氏', surname: '王', birth: '1682', death: '1750' }] },

  // 十七世
  { id: 'xueqian', name: '學谦', courtesy: '德光', generation: 17, branch: 'left-3',
    birth: '1690', birthNote: '康熙二十九年庚午九月十五日',
    deeds: '天资聪穎，學問淵雅，常告誡說：人生在勤，教子孙讀書，視學不應虛度年華',
    spouses: [
      { name: '李氏', surname: '李', children: ['siren','siyi'] },
      { name: '陳氏', surname: '陳', birth: '1701', death: '1763',
        children: ['sizhi','sisheng','sizhong','sizheng'] },
    ] },

  // 十八世
  { id: 'sizhi', name: '思智', courtesy: '清仕', generation: 18, branch: 'left-3',
    spouses: [{ name: '李氏', surname: '李',
      birthNote: '康熙丙午年七月十二日', deathNote: '乾隆甲寅年十月十六日',
      children: ['zhenyu','zhuyu','zhangyu'] }] },

  // 十九世
  { id: 'zhenyu', name: '濬香', courtesy: '珍玉', generation: 19, branch: 'left-3-bo',
    note: '濬(jùn)，同"浚"',
    spouses: [
      { name: '朱氏', surname: '朱' },
      { name: '鐘氏', surname: '鐘', children: ['jinhua','qianhua'] },
    ] },
  { id: 'zhuyu', name: '珠玉', generation: 19, branch: 'left-3-bo',
    spouses: [{ name: '吳氏', surname: '吳' }],
    note: '五子：莲華、㭏華、茂華、棆華、𣏌華，部分移居四川' },
  { id: 'zhangyu', name: '璋玉', generation: 19, branch: 'left-3',
    birth: '1759', birthNote: '乾隆二十四年己卯二月', death: '1811', deathNote: '嘉慶十六年二月',
    spouses: [{ name: '曾氏', surname: '曾', birth: '1759-08-16',
      birthNote: '乾隆二十四年八月十六日', death: '1833-12-10', deathNote: '道光十三年十二月初十',
      children: ['xinhua','kehua','zihua'] }] },

  // 二十世
  { id: 'xinhua', name: '莘華', generation: 20, branch: 'left-3-bo',
    birth: '1781', birthNote: '乾隆四十六年辛丑十一月初七',
    death: '1833', deathNote: '道光十三年九月二十七日',
    spouses: [{ name: '莊氏', surname: '莊', birth: '1783', death: '1833' }] },
  { id: 'kehua', name: '科華', generation: 20, branch: 'left-3-bo',
    birth: '1785', birthNote: '乾隆五十年五月初一',
    note: '娶賴氏後續胡氏，二子亦賢和世賢早故，以梓華公第三子启明承嗣',
    spouses: [{ name: '賴氏', surname: '賴' }, { name: '胡氏', surname: '胡' }] },
  { id: 'zihua', name: '梓華', alias: '楚田', generation: 20, branch: 'left-3',
    birth: '1789', birthNote: '乾隆五十四年九月初三',
    death: '1855', deathNote: '咸丰五年九月十一日',
    spouses: [{ name: '梁氏', surname: '梁', birth: '1790', death: '1871',
      birthNote: '乾隆五十五年十二月十四日', deathNote: '同治十年正月初五',
      children: ['qixian','liexian','qiming'] }] },

  // 二十一世
  { id: 'qixian', name: '启賢', generation: 21, branch: 'left-3-bo',
    birth: '1811', birthNote: '嘉慶十六年八月初七', death: '1875', deathNote: '光绪元年',
    spouses: [{ name: '曾氏', surname: '曾' }] },
  { id: 'liexian', name: '烈賢', generation: 21, branch: 'left-3-bo', note: '早故' },
  { id: 'qiming', name: '启明', courtesy: '宝珣', alias: '萝石', generation: 21,
    branch: 'left-3',
    birth: '1829', birthNote: '道光九年十二月二十日', death: '1897', deathNote: '光绪二十三年丁酉年',
    deeds: '穎悟過人，讀書有獨特見解，二十七歲游泮，咸丰五年（1855年）科试及第获秀才，常为村民办事，深得信賴，威信极高，德高望重',
    title: '秀才',
    spouses: [{ name: '熊氏', surname: '熊', birth: '1835-01-15',
      birthNote: '道光十五年正月十五', death: '1901-10-01', deathNote: '光绪二十七年辛丑年十月初一',
      children: ['xixun','xiliu','xijun'] }] },

  // 二十二世
  { id: 'xixun', name: '錫薰', courtesy: '肇虞', alias: '五琴', generation: 22,
    branch: 'left-3-bo',
    birth: '1864-01-25', birthNote: '同治三年正月二十五',
    death: '1925-01-14', deathNote: '民國十四年正月十四',
    spouses: [
      { name: '游氏', surname: '游', birth: '1868-08-28', death: '1910',
        children: ['yinghuai','yingchang','yingxiang_xx','yingheng','yingjian','yingchun'] },
      { name: '陳氏', surname: '陳', birth: '1894', death: '1961', note: '祖籍佛山',
        children: ['yingshen'] },
    ] },
  { id: 'xiliu', name: '錫镠', courtesy: '肇庚', generation: 22, branch: 'left-3-bo',
    birth: '1869-04-20', birthNote: '同治八年四月二十日庚时',
    death: '1910-05-15', deathNote: '宣统二年五月十五日',
    spouses: [{ name: '鄧氏', surname: '鄧',
      children: ['chongan','chongxun'] }] },
  { id: 'xijun', name: '錫钧', courtesy: '肇廉', alias: '史良', generation: 22,
    branch: 'left-3',
    birth: '1873-12-16', birthNote: '同治十二年十二月十六日',
    death: '1957-02-10', deathNote: '享年84歲',
    spouses: [{ name: '陳氏', surname: '陳', courtesy: '桂嬢',
      birth: '1877-10-18', birthNote: '光绪三年十月十八日',
      death: '1968-04-01', deathNote: '享年92歲',
      children: ['chongrui','chongshou','chongxie','chongzhang','chongyu','chongfan','chongshan'] }] },

  // 二十三世（錫薰公後裔）
  { id: 'yinghuai', name: '崇耀', courtesy: '應懷', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '曾氏', surname: '曾', children: ['jiemao'] }],
    note: '生二女，立嗣捷茂（字益群）' },
  { id: 'yingchang', name: '崇基', courtesy: '應昌', generation: 23, branch: 'left-3-bo' },
  { id: 'yingxiang_xx', name: '崇善', courtesy: '應祥', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '陳氏', surname: '陳' }],
    note: '立嗣捷森，移居江西贛州五雲橋鄉下' },
  { id: 'yingheng', name: '崇鍵', courtesy: '應衡', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '陳氏', surname: '陳' }],
    note: '生四子：銘慶、捷森（過繼應祥）、捷運、捷元' },
  { id: 'yingjian', name: '崇㥁', courtesy: '應堅', generation: 23, branch: 'left-3-bo' },
  { id: 'yingchun', name: '崇鑣', courtesy: '應春', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '曾氏', surname: '曾' }], note: '無後裔' },
  { id: 'yingshen', name: '崇漢', courtesy: '應燊', generation: 23, branch: 'left-3-bo',
    note: '早故，陳氏（祖籍佛山）所生' },

  // 二十三世（錫鎦公後裔）
  { id: 'chongan', name: '崇安', courtesy: '應增', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '劉福英', surname: '劉',
      children: ['jielong','jiesheng_a','jieguia','jieyang','jieganh'] }] },
  { id: 'chongxun', name: '崇訓', courtesy: '應連', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '楊氏', surname: '楊' }],
    note: '未生子女，立嗣，移居江西' },

  // 二十三世（錫鈞後裔）
  { id: 'chongrui', name: '崇瑞', courtesy: '應粦', generation: 23, branch: 'left-3',
    note: '早故，娶賴氏未生子女' },
  { id: 'chongshou', name: '崇寿', courtesy: '應麒', generation: 23, branch: 'left-3',
    note: '早故' },
  { id: 'chongxie', name: '崇瑎', courtesy: '應芳', generation: 23, branch: 'left-3',
    birth: '1904-07-13', birthNote: '光绪三十年七月十三日',
    death: '1990-07-09', deathNote: '享年85歲',
    note: '爷爷辈',
    spouses: [{ name: '饶素雲', surname: '饶',
      birth: '1909-08-06', birthNote: '宣统元年八月初六',
      death: '1998-04-10', deathNote: '享年88歲',
      children: ['jiewen','jiedeng','jiehui','jieyong','jiejin','jiefu'] }] },
  { id: 'chongzhang', name: '崇璋', courtesy: '應彬', generation: 23, branch: 'left-3-shu',
    birth: '1906-09-22', birthNote: '光绪三十二年九月二十二日',
    spouses: [{ name: '張玉珍', surname: '張',
      children: ['jiejun_z','jiechun','jieju'] }] },
  { id: 'chongyu', name: '崇瑜', courtesy: '應淜', generation: 23, branch: 'left-3',
    note: '早故' },
  { id: 'chongfan', name: '崇璠', courtesy: '應康', generation: 23, branch: 'left-3-shu',
    birth: '1916-02-22',
    spouses: [{ name: '刁善招', surname: '刁', death: '1980',
      children: ['jieqiong','jiegao','jiequan','jiesheng_k','jiefeng','jiexiong'] }],
    note: '另有四女：美雲、利雲、秀雲、新雲' },
  { id: 'chongshan', name: '崇珊', courtesy: '應汀', generation: 23, branch: 'left-3-shu',
    birth: '1918-07-27',
    spouses: [
      { name: '賴氏', surname: '賴' },
      { name: '李银招', surname: '李', children: ['jieyun','jiehuan','jiebiao'] }
    ] },

  // 二十四世（應芳/崇瑎後裔 - 主脉）
  { id: 'jiewen', name: '捷文', generation: 24, branch: 'left-3',
    birth: '1925-08-07', birthNote: '民國十四年八月初七', death: '2013-08-25',
    spouses: [
      { name: '黃氏', surname: '黃', children: ['xinqiang'] },
      { name: '刁月兰', surname: '刁', birth: '1940-09-08', death: '2025-04-13',
        children: ['meiling','qiaoling','xinhai'] },
    ] },
  { id: 'jiedeng', name: '捷登', generation: 24, branch: 'left-3',
    birth: '1927-02-22', death: '2008-07-22',
    spouses: [{ name: '陳秉慈', surname: '陳', birth: '1932-01-12', death: '2012-04-02',
      children: ['xinsong','xintao'] }] },
  { id: 'jiehui', name: '捷辉', generation: 24, branch: 'left-3', note: '早故' },
  { id: 'jieyong', name: '捷永', generation: 24, branch: 'left-3', note: '早故' },
  { id: 'jiejin', name: '捷金', courtesy: '漢才', generation: 24, branch: 'left-3',
    birth: '1937-05-12',
    spouses: [{ name: '蔡钦木', surname: '蔡', birth: '1942-08-05', note: '四川籍',
      children: ['chang24','qiuling','qiumei'] }] },
  { id: 'jiefu', name: '捷夫', generation: 24, branch: 'left-3',
    birth: '1945-07-22',
    spouses: [{ name: '刁惠玲', surname: '刁', birth: '1949-08-21',
      children: ['xinhao','congling'] }] },

  // 二十四世（崇安/應增後裔，錫鎦公支）
  { id: 'jielong', name: '捷龍', generation: 24, branch: 'left-3-bo',
    birth: '1930-04-22', note: '移居江西贛州' },
  { id: 'jiesheng_a', name: '捷升', generation: 24, branch: 'left-3-bo',
    birth: '1936-01-10', note: '移居江西贛州沙地墟' },
  { id: 'jieguia', name: '捷桂', generation: 24, branch: 'left-3-bo',
    birth: '1939', note: '過繼應連叔父，移居江西贛州' },
  { id: 'jieyang', name: '捷揚', generation: 24, branch: 'left-3-bo',
    birth: '1943-09-05', note: '移居江西崇義縣' },
  { id: 'jieganh', name: '捷淦', generation: 24, branch: 'left-3-bo',
    birth: '1948-04',
    spouses: [{ name: '曾氏', surname: '曾', children: ['weibo'] }],
    note: '生一子（偉波）一女' },

  // 二十四世（崇璋/應彬後裔）
  { id: 'jiejun_z', name: '捷俊', generation: 24, branch: 'left-3-shu', note: '早故' },
  { id: 'jiechun', name: '捷純', generation: 24, branch: 'left-3-shu',
    birth: '1937-10-14',
    spouses: [{ name: '曾素雲', surname: '曾' }],
    note: '生一女五子' },
  { id: 'jieju', name: '捷居', generation: 24, branch: 'left-3-shu',
    birth: '1950-10-08', note: '生二子：永明（更名志明）' },

  // 二十四世（崇璠/應康後裔）
  { id: 'jieqiong', name: '捷瓊', generation: 24, branch: 'left-3-shu', note: '早故' },
  { id: 'jiegao', name: '捷高', generation: 24, branch: 'left-3-shu',
    birth: '1944-07-06',
    spouses: [{ name: '彭會香', surname: '彭' }], note: '生二女一子' },
  { id: 'jiequan', name: '捷權', generation: 24, branch: 'left-3-shu',
    birth: '1958',
    spouses: [{ name: '陳其蘭', surname: '陳', children: ['xinglin'] }],
    note: '生一女一子（杏林）' },
  { id: 'jiesheng_k', name: '捷勝', generation: 24, branch: 'left-3-shu', birth: '1962-05-15' },
  { id: 'jiefeng', name: '捷烽', generation: 24, branch: 'left-3-shu', birth: '1964-07-22' },
  { id: 'jiexiong', name: '捷雄', generation: 24, branch: 'left-3-shu', birth: '1968-12-29' },

  // 二十四世（崇珊/應汀後裔）
  { id: 'jieyun', name: '捷雲', generation: 24, branch: 'left-3-shu',
    spouses: [{ name: '彭小玲', surname: '彭' }], note: '生四女' },
  { id: 'jiehuan', name: '捷環', generation: 24, branch: 'left-3-shu',
    spouses: [{ name: '王柳萍', surname: '王', children: ['muhua'] }], note: '生一女一子：目華' },
  { id: 'jiebiao', name: '捷標', generation: 24, branch: 'left-3-shu', note: '早故' },

  // 二十四世（應懷立嗣）
  { id: 'jiemao', name: '捷茂', courtesy: '益群', generation: 24, branch: 'left-3-bo',
    birth: '1926-09-26', death: '1993-02-09',
    spouses: [{ name: '盧玉香', surname: '盧', children: ['xinyang','yueyang','dongyang'] }],
    note: '應懷立嗣，生三子二女' },

  // 二十四世（應衡後裔）
  { id: 'mingqing', name: '銘慶', generation: 24, branch: 'left-3-bo',
    spouses: [{ name: '李偉英', surname: '李' }],
    note: '生二子（立賢、立民）二女' },

  // 二十五世（旁系）
  { id: 'weibo', name: '偉波', generation: 25, branch: 'left-3-bo' },
  { id: 'xinglin', name: '杏林', generation: 25, branch: 'left-3-shu' },
  { id: 'muhua', name: '目華', generation: 25, branch: 'left-3-shu' },
  { id: 'xinyang', name: '新陽', generation: 25, branch: 'left-3-bo' },
  { id: 'yueyang', name: '月陽', generation: 25, branch: 'left-3-bo' },
  { id: 'dongyang', name: '東陽', generation: 25, branch: 'left-3-bo' },

  // 二十五世（女兒 - 捷文後裔）
  { id: 'meiling', name: '梅玲', generation: 25, branch: 'left-3',
    birth: '1964-08-15', note: '女',
    spouses: [{ name: '何子強', surname: '何' }] },
  { id: 'qiaoling', name: '巧玲', generation: 25, branch: 'left-3',
    birth: '1966-10-09', note: '女',
    spouses: [{ name: '羅立平', surname: '羅' }] },

  // 二十五世（女兒 - 捷金後裔）
  { id: 'qiuling', name: '秋玲', generation: 25, branch: 'left-3',
    birth: '1963-08-27', note: '女',
    spouses: [{ name: '尹梁', surname: '尹' }] },
  { id: 'qiumei', name: '秋玫', generation: 25, branch: 'left-3',
    birth: '1976-10-31', note: '女',
    spouses: [{ name: '王坤', surname: '王' }] },

  // 二十五世（女兒 - 捷夫後裔）
  { id: 'congling', name: '聰玲', generation: 25, branch: 'left-3',
    birth: '1976-10-22', note: '女',
    spouses: [{ name: '鍾曉東', surname: '鍾' }] },

  // 二十五世（主脈）
  { id: 'xinqiang', name: '新強', generation: 25, branch: 'left-3',
    birth: '1959-08-16',
    spouses: [{ name: '吳秋瓊', surname: '吳', birth: '1965-09-10',
      children: ['huidong','huijun'] }] },
  { id: 'xinhai', name: '新海', generation: 25, branch: 'left-3',
    spouses: [{ name: '黃瑞娟', surname: '黃', children: ['jianxin','xin25','luoxin26','jianxin26'] }] },
  { id: 'xinsong', name: '新松', generation: 25, branch: 'left-3',
    birth: '1970-08-21', note: '移居紐西蘭',
    spouses: [{ name: '張鐘尹', surname: '張', birth: '1974-05-01',
      children: ['yueheng','yuewen','yuesheng'] }] },
  { id: 'xintao', name: '新涛', generation: 25, branch: 'left-3',
    birth: '1972-05-20', note: '移居美國',
    spouses: [{ name: '範冰', surname: '範', birth: '1973-09-21',
      children: ['derui','dezhi'] }] },
  { id: 'chang24', name: '昶', generation: 25, branch: 'left-3',
    birth: '1969-05-20',
    spouses: [{ name: '張元敏', surname: '張', birth: '1974-05-03',
      children: ['yaosong','qiuling25a','qiumei25a'] }] },
  { id: 'xinhao', name: '新浩', generation: 25, branch: 'left-3',
    spouses: [{ name: '羅宇慈', surname: '羅' }] },

  // 二十六世
  { id: 'huidong', name: '汇東', generation: 26, branch: 'left-3',
    birth: '1989-06-05',
    spouses: [{ name: '劉怡琪', surname: '劉', birth: '1992-08-27',
      children: ['jiayu','jialing'] }] },
  { id: 'huijun', name: '汇君', generation: 26, branch: 'left-3',
    birth: '1991-05-27', note: '女' },
  { id: 'yueheng', name: '悦姮', generation: 26, branch: 'left-3',
    birth: '2001-10-19', note: '女' },
  { id: 'yuewen', name: '悦文', generation: 26, branch: 'left-3',
    birth: '2006-01-18', note: '女' },
  { id: 'yuesheng', name: '悦生', generation: 26, branch: 'left-3',
    birth: '2008-06-11' },
  { id: 'derui', name: '德睿', generation: 26, branch: 'left-3',
    birth: '2004-01-10', note: '双胞胎' },
  { id: 'dezhi', name: '德智', generation: 26, branch: 'left-3',
    birth: '2004-01-10', note: '双胞胎' },
  { id: 'yaosong', name: '曜松', generation: 26, branch: 'left-3', birth: '1999-11-16' },
  { id: 'luoxin26', name: '欣', generation: 26, branch: 'left-3',
    birth: '2001-04-05', note: '女' },
  { id: 'jianxin26', name: '健鑫', generation: 26, branch: 'left-3',
    birth: '2008-10-25', note: '女' },

  // 二十七世
  { id: 'jiayu', name: '佳钰', generation: 27, branch: 'left-3',
    birth: '2022-02-26', note: '女' },
  { id: 'jialing', name: '佳玲', generation: 27, branch: 'left-3',
    birth: '2025-08-05', note: '女' },
]

// 主脉路径（新涛直系）
export const mainLineage = [
  'kuangzheng', 'guxian', 'xiaojiu', 'xinhan', 'handong', 'yingwu',
  'wenli', 'zuxian', 'wei', 'min8', 'xi9', 'wenshen', 'changhuai',
  'qiujiang', 'yutai', 'shining', 'wanrong', 'yiqi', 'xueqian',
  'sizhi', 'zhangyu', 'zihua', 'qiming', 'xijun', 'chongxie',
  'jiedeng', 'xintao', 'derui', 'dezhi'
]

// 迁徙事件
export const migrations = [
  { year: '前1048', from: '宣城', to: '羅國', person: '劻正公', event: '周武王三年鎮守宣城有功，受封於羅，子孫以國為氏', landmark: 'xuancheng',
    yearEn: '1048 BC', fromEn: 'Xuancheng', toEn: 'State of Luo', eventEn: 'Defended Xuancheng for King Wu of Zhou, enfeoffed at Luo — origin of the Luo surname' },
  { year: '约1280', from: '福建寧化石壁村', to: '廣東興寧', person: '小九公', event: '宋末客道廣東，赴任循州學正，見興寧山水悠揚遂立家', landmark: 'xingning',
    yearEn: 'c.1280', fromEn: 'Shibi Village, Fujian', toEn: 'Xingning, Guangdong', eventEn: 'Traveled to Guangdong in late Song, served as Education Commissioner; settled in Xingning' },
  { year: '约1648', from: '廣東興寧', to: '揚州', person: '萬榮公', event: '幼年喪父成孤兒，獨赴揚州與叔合股貿易', landmark: 'yangzhou',
    yearEn: 'c.1648', fromEn: 'Xingning, Guangdong', toEn: 'Yangzhou', eventEn: 'Orphaned young, traveled alone to Yangzhou to trade with his uncle' },
  { year: '约1660', from: '揚州', to: '廣東興寧', person: '萬榮公', event: '數年間積累財款，衣錦還鄉，回興寧置產立業', landmark: 'xingning',
    yearEn: 'c.1660', fromEn: 'Yangzhou', toEn: 'Xingning, Guangdong', eventEn: 'Amassed wealth over years, returned home in glory to establish his estate' },
  { year: '清中期', from: '興寧', to: '惠州/惠陽', person: '習詩等', event: '部分後裔移居惠州西湖之畔', landmark: 'huizhou',
    yearEn: 'Mid-Qing', fromEn: 'Xingning', toEn: 'Huizhou', eventEn: 'Some descendants settled by the West Lake of Huizhou' },
  { year: '清中期', from: '興寧', to: '四川', person: '㭏華等', event: '珠玉公後裔隨湖廣填四川浪潮西遷', landmark: 'sichuan',
    yearEn: 'Mid-Qing', fromEn: 'Xingning', toEn: 'Sichuan', eventEn: 'Descendants of Zhuyu joined the great westward migration to Sichuan' },
  { year: '清中期', from: '興寧', to: '江西贛州', person: '新賢', event: '移居贛南，落戶贛州', landmark: 'ganzhou',
    yearEn: 'Mid-Qing', fromEn: 'Xingning', toEn: 'Ganzhou, Jiangxi', eventEn: 'Settled in southern Jiangxi' },
  { year: '清中期', from: '興寧', to: '南洋', person: '欽賢', event: '漂洋過海，下南洋謀生', landmark: 'nanyang',
    yearEn: 'Mid-Qing', fromEn: 'Xingning', toEn: 'Southeast Asia', eventEn: 'Sailed overseas to seek fortune in Southeast Asia' },
  { year: '民國', from: '興寧', to: '江西贛州', person: '捷龍等', event: '錫鎦公後裔移居贛州', landmark: 'ganzhou',
    yearEn: 'Republic', fromEn: 'Xingning', toEn: 'Ganzhou, Jiangxi', eventEn: 'Descendants of Xiliu moved to Ganzhou' },
  { year: '解放前', from: '興寧', to: '廣州', person: '捷登', event: '赴穗求學謀生，娶妻生子，扎根羊城', landmark: 'guangzhou',
    yearEn: 'Pre-1949', fromEn: 'Xingning', toEn: 'Guangzhou', eventEn: 'Went to Guangzhou to study and work, married and settled in the city' },
  { year: '解放前', from: '興寧', to: '雲南曲靖', person: '捷金（漢才）', event: '早期移居滇東曲靖，開拓新天地', landmark: 'qujing',
    yearEn: 'Pre-1949', fromEn: 'Xingning', toEn: 'Qujing, Yunnan', eventEn: 'Moved to eastern Yunnan to pioneer a new frontier' },
  { year: '1980s', from: '廣州', to: '深圳', person: '捷登家', event: '改革開放浪潮，舉家南遷特區', landmark: 'shenzhen',
    yearEn: '1980s', fromEn: 'Guangzhou', toEn: 'Shenzhen', eventEn: 'Rode the wave of Reform and Opening Up, moved the family to the Special Economic Zone' },
  { year: '2000後', from: '深圳', to: '紐西蘭', person: '新松家', event: '跨越太平洋，移民南半球', landmark: 'newzealand',
    yearEn: 'Post-2000', fromEn: 'Shenzhen', toEn: 'New Zealand', eventEn: 'Crossed the Pacific, emigrated to the Southern Hemisphere' },
  { year: '2010後', from: '深圳', to: '美國', person: '新濤家', event: '赴美定居，續寫海外新篇', landmark: 'usa',
    yearEn: 'Post-2010', fromEn: 'Shenzhen', toEn: 'United States', eventEn: 'Settled in America, writing a new chapter overseas' },
]

// 世代辈分字
export const generationChars = {
  1: '—', 2: '—', 3: '—', 4: '—', 5: '—',
  6: '—', 7: '—', 8: '日', 9: '衣/礻', 10: '文',
  11: '常', 12: '—', 13: '—',
  14: '世', 15: '萬', 16: '必', 17: '學', 18: '思',
  19: '玉', 20: '華', 21: '賢/啟', 22: '錫', 23: '崇（字用應）',
  24: '捷', 25: '新', 26: '德/悅/匯',
}

// 朝代對照
export const dynastyMap = {
  1: '宋末', 2: '元初', 3: '元', 4: '元', 5: '元末',
  6: '明初', 7: '明', 8: '明', 9: '明', 10: '明',
  11: '明', 12: '明', 13: '明', 14: '明末', 15: '明末清初',
  16: '清·康熙', 17: '清·康熙', 18: '清·雍正', 19: '清·乾隆',
  20: '清·乾隆', 21: '清·道光', 22: '清·同治', 23: '清末·光緒',
  24: '民國', 25: '現代', 26: '當代', 27: '當代',
}

// 生僻字拼音對照表
export const pinyinMap = {
  '劻': 'kuāng', '澣': 'huàn', '昇': 'shēng',
  '旻': 'mín', '昊': 'hào', '勗': 'xù', '昺': 'bǐng',
  '榹': 'sī', '禠': 'xī', '𧘕': 'yì',
  '綵': 'cǎi', '綸': 'lún', '涭': 'shòu', '浻': 'jiǒng', '溓': 'lián',
  '瑀': 'yǔ', '濬': 'jùn', '㭏': 'guì', '棆': 'lún', '𣏌': 'qǐ',
  '鍹': 'xuān', '䃿': 'què',
  '禶': 'zǎn', '袞': 'gǔn', '祜': 'hù', '衿': 'jīn',
  '裾': 'jū', '䘛': 'pī', '祫': 'xiá', '祛': 'qū',
  '襈': 'zhuàn', '襦': 'rú', '裴': 'péi',
  '瑎': 'xié', '璋': 'zhāng', '璠': 'fán', '鎦': 'liú',
  '薰': 'xūn', '鑣': 'biāo', '㥁': 'dé',
  '昶': 'chǎng', '曜': 'yào',
}
