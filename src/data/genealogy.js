/**
 * 罗氏族谱完整数据
 * 始祖劻正公（周武王三年，前1048年受封）
 * 兴宁始祖小九公/洪德公（1261年）至今
 *
 * 注：生僻字均使用Unicode原字，配合Noto Serif SC字体渲染
 */

// 每个人物的数据结构
// { id, name, courtesy(字), alias(号), posthumous(谥号),
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

  // === 大成譜八十九世 谷賢公（本譜之前一世）===
  { id: 'guxian', name: '谷賢', generation: -1, branch: 'ancestor',
    deeds: '娶九妻，生十八子', death: '享壽91歲', isAncestor: true,
    spouses: [
      { name: '饶修', surname: '饶', children: ['xiaojiu','boqi','dawu'] },
      { name: '程氏', surname: '程' }, { name: '钱氏', surname: '钱' },
      { name: '古氏', surname: '古' }, { name: '郑氏', surname: '郑' },
      { name: '白氏', surname: '白' }, { name: '董氏', surname: '董' },
      { name: '蒋氏', surname: '蒋' }, { name: '韩氏', surname: '韩' },
    ] },

  // === 始祖 小九公（洪德公）一世 ===
  { id: 'xiaojiu', name: '君治', courtesy: '盛龄', alias: '洪德', generation: 1,
    branch: 'main', birth: '1261-11-01', birthNote: '宋理宗景定二年辛酉十月初八卯时',
    title: '宋朝循州学正', note: '按大成谱为四十九世派，又称小九公',
    deeds: '原籍福建宁化县石壁村，宋末客道广东兴宁，赴任循州学正，见兴宁山水悠扬、土地沃野丰裕，择东廓而立家',
    spouses: [
      { name: '曾氏', surname: '曾', note: '大孺人', children: ['shenghan'] },
      { name: '胡氏', surname: '胡', note: '大孺人', children: ['xinhan'] },
      { name: '黄氏', surname: '黄', note: '大孺人', children: ['zhenhan'] },
    ] },

  // === 右八房祖 昇澣 ===
  { id: 'shenghan', name: '昇澣', courtesy: null, alias: null, generation: 2,
    branch: 'right', birthNote: '元成宗元贞元年', birth: '1295',
    title: '贡士，授教谕郎大学士', death: '1400', deathNote: '明惠帝建文二年，寿105',
    note: '按大成谱派名成章，右八房祖',
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
    note: '按大成谱派名成宗，左八房祖', title: '大元学谕',
    spouses: [{ name: '陈氏', surname: '陈', note: '大孺人', children: ['handong'] }] },

  { id: 'handong', name: '汉东', generation: 3, branch: 'left',
    birth: '1309-10-28', birthNote: '元武宗二年己酉九月二十五日',
    note: '按大成谱名彦兴，行九十三郎',
    spouses: [{ name: '张氏', surname: '张', note: '大孺人', children: ['yingwu'] }] },

  { id: 'yingwu', name: '应午', generation: 4, branch: 'left',
    birth: '1326', birthNote: '元泰定三年二月初十辰时',
    note: '按大成谱派名伯修',
    spouses: [{ name: '张氏', surname: '张', note: '大孺人', children: ['wenli'] }] },

  { id: 'wenli', name: '文立', generation: 5, branch: 'left',
    note: '按大成谱派名公质',
    spouses: [{ name: '薛氏', surname: '薛', note: '大孺人', children: ['zuxian'] }] },

  { id: 'zuxian', name: '祖贤', generation: 6, branch: 'left',
    spouses: [{ name: '杨氏', surname: '杨', note: '大孺人', children: ['wei'] }] },

  { id: 'wei', name: '维', generation: 7, branch: 'left',
    deeds: '生八子，立左八房',
    spouses: [{ name: '曾氏', surname: '曾', note: '大孺人',
      children: ['yu8','cheng8','min8','hao8','xu8','bing8','ang8','mian8'] }] },

  // 左八世八子
  { id: 'yu8', name: '昱', generation: 8, branch: 'left-1',
    spouses: [{ name: '陈氏', surname: '陈', children: ['zan9'] }] },
  { id: 'cheng8', name: '晟', generation: 8, branch: 'left-2',
    spouses: [{ name: '李氏', surname: '李', children: ['gun9','qiu9'] }] },
  { id: 'min8', name: '旻', generation: 8, branch: 'left-3',
    title: '明朝进士',
    spouses: [{ name: '刘氏', surname: '刘', children: ['si9','yi9','xi9'] }] },
  { id: 'hao8', name: '昊', generation: 8, branch: 'left-4',
    spouses: [{ name: '何氏', surname: '何', children: ['hu9','jin9','xiang9','you9'] }] },
  { id: 'xu8', name: '勗', generation: 8, branch: 'left-5',
    note: '勗(xù)，同"勖"，勉励之意',
    spouses: [{ name: '张氏', surname: '张', children: ['ju9','pi9','tan9','tang9'] }] },
  { id: 'bing8', name: '昺', generation: 8, branch: 'left-6',
    note: '昺(bǐng)，同"炳"',
    spouses: [{ name: '张氏', surname: '张', children: ['xia9','qu9','zhuan9','si9b','ru9'] }] },
  { id: 'ang8', name: '昂', generation: 8, branch: 'left-7',
    spouses: [{ name: '邓氏', surname: '邓', children: ['biao9','pei9','zhuang9'] }] },
  { id: 'mian8', name: '冕', generation: 8, branch: 'left-8',
    spouses: [{ name: '朱氏', surname: '朱', children: [] }],
    note: '生四子：䄎、𫌀、䘺、䄝' },

  // 九世（旻公后裔，本房主脉）
  { id: 'si9', name: '榹', generation: 9, branch: 'left-3',
    note: '榹(sī)，原配刘氏，继娶郭氏',
    spouses: [
      { name: '刘氏', surname: '刘' },
      { name: '郭氏', surname: '郭', children: [] }
    ] },
  { id: 'yi9', name: '𧘕', generation: 9, branch: 'left-3',
    note: '𧘕，衣字旁生僻字',
    spouses: [{ name: '林氏', surname: '林' }] },
  { id: 'xi9', name: '禠', generation: 9, branch: 'left-3',
    posthumous: '孝友', note: '禠(xī/chī)',
    spouses: [{ name: '张氏', surname: '张', children: ['wenshen'] }] },

  // 十世
  { id: 'wenshen', name: '文绅', generation: 10, branch: 'left-3',
    spouses: [{ name: '陈氏', surname: '陈', note: '陈静孺人',
      children: ['changchun','changhuai','changgui'] }] },

  // 十一世
  { id: 'changchun', name: '常椿', generation: 11, branch: 'left-3-bo',
    spouses: [{ name: '刘氏', surname: '刘' }] },
  { id: 'changhuai', name: '常槐', generation: 11, branch: 'left-3',
    spouses: [{ name: '彭氏', surname: '彭', children: ['qiujiang','zhanjiang'] }] },
  { id: 'changgui', name: '常桂', generation: 11, branch: 'left-3-shu' },

  // 十二世
  { id: 'qiujiang', name: '如凤', alias: '秋江', generation: 12, branch: 'left-3',
    spouses: [{ name: '陈氏', surname: '陈', children: ['nantai','yutai'] }] },
  { id: 'zhanjiang', name: '湛江', generation: 12, branch: 'left-3-shu',
    spouses: [{ name: '廖氏', surname: '廖' }] },

  // 十三世
  { id: 'nantai', name: '南台', generation: 13, branch: 'left-3-bo',
    spouses: [{ name: '薛氏', surname: '薛' }] },
  { id: 'yutai', name: '瑀', courtesy: '玉台', generation: 13, branch: 'left-3',
    birth: '1522', birthNote: '明朝嘉靖正月二十二日',
    death: '1608', deathNote: '万历三十六年',
    spouses: [{ name: '黄氏', surname: '黄',
      children: ['shifu','shigui','shikang','shining','shilong'] }] },

  // 十四世
  { id: 'shifu', name: '世富', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '林氏', surname: '林' }], note: '后裔移居徽州府' },
  { id: 'shigui', name: '世贵', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '黄氏', surname: '黄' }], note: '后裔移居徽州府' },
  { id: 'shikang', name: '世康', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '陈氏', surname: '陈' }], note: '后裔移居徽州府' },
  { id: 'shilong', name: '世隆', generation: 14, branch: 'left-3-bo',
    spouses: [{ name: '刘氏', surname: '刘' }], note: '立嗣万秋，后裔移居徽州府' },
  { id: 'shining', name: '世宁', generation: 14, branch: 'left-3',
    birth: '1587', birthNote: '万历十五年丁亥十二月十七日',
    death: '1640', deathNote: '崇祯十三年庚辰四月初六日',
    spouses: [
      { name: '饶氏', surname: '饶', children: ['xishi','xishu','xiD'] },
      { name: '郑氏', surname: '郑', children: ['xili','xiyue','xiwen','wanrong'] },
    ] },

  // 十五世
  { id: 'xishi', name: '习诗', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '杨氏', surname: '杨' }], note: '移居惠州' },
  { id: 'xishu', name: '习书', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '赖氏', surname: '赖' }], note: '移居惠州' },
  { id: 'xili', name: '习礼', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '郑氏', surname: '郑' }], note: '移居惠州' },
  { id: 'xiyue', name: '习乐', generation: 15, branch: 'left-3-bo',
    spouses: [{ name: '姚氏', surname: '姚' }], note: '移居惠州' },
  { id: 'wanrong', name: '万荣', courtesy: '习章', generation: 15, branch: 'left-3',
    birth: '1636', birthNote: '明末崇祯九年七月', note: '后更名元章',
    deeds: '六岁丧父，十二岁丧母，明末清初单独至扬州访叔伯，与叔管英合股贸易后积累财款，乐施好善，创买下寨仔脑水楼下（俗语眠牛形）宅地',
    spouses: [{ name: '李氏', surname: '李', children: ['yiqi','tenghai'] }] },

  // 十六世
  { id: 'yiqi', name: '以旂', courtesy: '必捷', alias: '仕霖', posthumous: '纯端',
    generation: 16, branch: 'left-3',
    birth: '1669-08-01', birthNote: '清朝康熙八年八月初一',
    death: '1741-10-05', deathNote: '乾隆六年十月初五',
    spouses: [
      { name: '梁氏', surname: '梁', birth: '1670', death: '1743',
        children: ['xueqian','xueheng','xuejin'] },
      { name: '黄氏', surname: '黄', birth: '1693', death: '1777',
        children: ['xuegui'] },
    ] },
  { id: 'tenghai', name: '滕海', courtesy: '必运', alias: '以旌', generation: 16,
    branch: 'left-3-shu',
    birth: '1679', birthNote: '康熙十八年己未年正月', death: '1770',
    deeds: '创建房于程淋塘侧均塘西上',
    spouses: [{ name: '王氏', surname: '王', birth: '1682', death: '1750' }] },

  // 十七世
  { id: 'xueqian', name: '学谦', courtesy: '德光', generation: 17, branch: 'left-3',
    birth: '1690', birthNote: '康熙二十九年庚午九月十五日',
    deeds: '天资聪颖，学问渊雅，常告诫说：人生在勤，教子孙读书，视学不应虚度年华',
    spouses: [
      { name: '李氏', surname: '李', children: ['siren','siyi'] },
      { name: '陈氏', surname: '陈', birth: '1701', death: '1763',
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
      { name: '钟氏', surname: '钟', children: ['jinhua','qianhua'] },
    ] },
  { id: 'zhuyu', name: '珠玉', generation: 19, branch: 'left-3-bo',
    spouses: [{ name: '吴氏', surname: '吴' }],
    note: '五子：莲华、㭏华、茂华、棆华、𣏌华，部分移居四川' },
  { id: 'zhangyu', name: '璋玉', generation: 19, branch: 'left-3',
    birth: '1759', birthNote: '乾隆二十四年己卯二月', death: '1811', deathNote: '嘉庆十六年二月',
    spouses: [{ name: '曾氏', surname: '曾', birth: '1759-08-16',
      birthNote: '乾隆二十四年八月十六日', death: '1833-12-10', deathNote: '道光十三年十二月初十',
      children: ['xinhua','kehua','zihua'] }] },

  // 二十世
  { id: 'xinhua', name: '莘华', generation: 20, branch: 'left-3-bo',
    birth: '1781', birthNote: '乾隆四十六年辛丑十一月初七',
    death: '1833', deathNote: '道光十三年九月二十七日',
    spouses: [{ name: '庄氏', surname: '庄', birth: '1783', death: '1833' }] },
  { id: 'kehua', name: '科华', generation: 20, branch: 'left-3-bo',
    birth: '1785', birthNote: '乾隆五十年五月初一',
    note: '娶赖氏后续胡氏，二子亦贤和世贤早故，以梓华公第三子启明承嗣',
    spouses: [{ name: '赖氏', surname: '赖' }, { name: '胡氏', surname: '胡' }] },
  { id: 'zihua', name: '梓华', alias: '楚田', generation: 20, branch: 'left-3',
    birth: '1789', birthNote: '乾隆五十四年九月初三',
    death: '1855', deathNote: '咸丰五年九月十一日',
    spouses: [{ name: '梁氏', surname: '梁', birth: '1790', death: '1871',
      birthNote: '乾隆五十五年十二月十四日', deathNote: '同治十年正月初五',
      children: ['qixian','liexian','qiming'] }] },

  // 二十一世
  { id: 'qixian', name: '启贤', generation: 21, branch: 'left-3-bo',
    birth: '1811', birthNote: '嘉庆十六年八月初七', death: '1875', deathNote: '光绪元年',
    spouses: [{ name: '曾氏', surname: '曾' }] },
  { id: 'liexian', name: '烈贤', generation: 21, branch: 'left-3-bo', note: '早故' },
  { id: 'qiming', name: '启明', courtesy: '宝珣', alias: '萝石', generation: 21,
    branch: 'left-3',
    birth: '1829', birthNote: '道光九年十二月二十日', death: '1897', deathNote: '光绪二十三年丁酉年',
    deeds: '颖悟过人，读书有独特见解，二十七岁游泮，咸丰五年（1855年）科试及第获秀才，常为村民办事，深得信赖，威信极高，德高望重',
    title: '秀才',
    spouses: [{ name: '熊氏', surname: '熊', birth: '1835-01-15',
      birthNote: '道光十五年正月十五', death: '1901-10-01', deathNote: '光绪二十七年辛丑年十月初一',
      children: ['xixun','xiliu','xijun'] }] },

  // 二十二世
  { id: 'xixun', name: '锡薰', courtesy: '肇虞', alias: '五琴', generation: 22,
    branch: 'left-3-bo',
    birth: '1864-01-25', birthNote: '同治三年正月二十五',
    death: '1925-01-14', deathNote: '民国十四年正月十四',
    spouses: [
      { name: '游氏', surname: '游', birth: '1868-08-28', death: '1910',
        children: ['yinghuai','yingchang','yingxiang_xx','yingheng','yingjian','yingchun'] },
      { name: '陈氏', surname: '陈', birth: '1894', death: '1961', note: '祖籍佛山',
        children: ['yingshen'] },
    ] },
  { id: 'xiliu', name: '锡镠', courtesy: '肇庚', generation: 22, branch: 'left-3-bo',
    birth: '1869-04-20', birthNote: '同治八年四月二十日庚时',
    death: '1910-05-15', deathNote: '宣统二年五月十五日',
    spouses: [{ name: '邓氏', surname: '邓',
      children: ['chongan','chongxun'] }] },
  { id: 'xijun', name: '锡钧', courtesy: '肇廉', alias: '史良', generation: 22,
    branch: 'left-3',
    birth: '1873-12-16', birthNote: '同治十二年十二月十六日',
    death: '1957-02-10', deathNote: '享年84岁',
    spouses: [{ name: '陈氏', surname: '陈', courtesy: '桂嬢',
      birth: '1877-10-18', birthNote: '光绪三年十月十八日',
      death: '1968-04-01', deathNote: '享年92岁',
      children: ['chongrui','chongshou','chongxie','chongzhang','chongyu','chongfan','chongshan'] }] },

  // 二十三世（錫薰公後裔）
  { id: 'yinghuai', name: '崇耀', courtesy: '應懷', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '曾氏', surname: '曾' }],
    note: '娶曾氏生二女，立嗣捷茂（字益群）' },
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
    spouses: [{ name: '劉福英', surname: '劉' }],
    note: '生五子：捷龍(1930)、捷升(1936)、捷桂(1939)、捷揚(1943)、捷淦(1948)，多移居江西贛州' },
  { id: 'chongxun', name: '崇訓', courtesy: '應連', generation: 23, branch: 'left-3-bo',
    spouses: [{ name: '楊氏', surname: '楊' }],
    note: '未生子女，立嗣，移居江西' },

  // 二十三世（錫鈞後裔）
  { id: 'chongrui', name: '崇瑞', courtesy: '应粦', generation: 23, branch: 'left-3',
    note: '早故，娶赖氏未生子女' },
  { id: 'chongshou', name: '崇寿', courtesy: '应麒', generation: 23, branch: 'left-3',
    note: '早故' },
  { id: 'chongxie', name: '崇瑎', courtesy: '应芳', generation: 23, branch: 'left-3',
    birth: '1904-07-13', birthNote: '光绪三十年七月十三日',
    death: '1990-07-09', deathNote: '享年85岁',
    note: '爷爷辈',
    spouses: [{ name: '饶素云', surname: '饶',
      birth: '1909-08-06', birthNote: '宣统元年八月初六',
      death: '1998-04-10', deathNote: '享年88岁',
      children: ['jiewen','jiedeng','jiehui','jieyong','jiejin','jiefu'] }] },
  { id: 'chongzhang', name: '崇璋', courtesy: '应彬', generation: 23, branch: 'left-3-shu',
    birth: '1906-09-22', birthNote: '光绪三十二年九月二十二日',
    spouses: [{ name: '张玉珍', surname: '张',
      children: ['jiejun_z','jiechun','jieju'] }] },
  { id: 'chongyu', name: '崇瑜', courtesy: '应淜', generation: 23, branch: 'left-3',
    note: '早故' },
  { id: 'chongfan', name: '崇璠', courtesy: '应康', generation: 23, branch: 'left-3-shu',
    birth: '1916-02-22',
    spouses: [{ name: '刁善招', surname: '刁', death: '1980',
      children: ['jieqiong','jiegao','jiequan','jiesheng','jiefeng','jiexiong'] }],
    note: '另有四女：美云、利云、秀云、新云' },
  { id: 'chongshan', name: '崇珊', courtesy: '应汀', generation: 23, branch: 'left-3-shu',
    birth: '1918-07-27',
    spouses: [
      { name: '赖氏', surname: '赖' },
      { name: '李银招', surname: '李', children: ['jieyun','jiehuan','jiebiao'] }
    ] },

  // 二十四世（应芳/崇瑎后裔 - 主脉）
  { id: 'jiewen', name: '捷文', generation: 24, branch: 'left-3',
    birth: '1925-08-07', birthNote: '民国十四年八月初七', death: '2013-08-25',
    spouses: [
      { name: '黄氏', surname: '黄', children: ['xinqiang'] },
      { name: '刁月兰', surname: '刁', birth: '1940-09-08', death: '2025-04-13',
        children: ['meiling','qiaoling','xinhai'] },
    ] },
  { id: 'jiedeng', name: '捷登', generation: 24, branch: 'left-3',
    birth: '1927-02-22', death: '2008-07-22',
    spouses: [{ name: '陈秉慈', surname: '陈', birth: '1932-01-12', death: '2012-04-02',
      children: ['xinsong','xintao'] }] },
  { id: 'jiehui', name: '捷辉', generation: 24, branch: 'left-3', note: '早故' },
  { id: 'jieyong', name: '捷永', generation: 24, branch: 'left-3', note: '早故' },
  { id: 'jiejin', name: '捷金', courtesy: '汉才', generation: 24, branch: 'left-3',
    birth: '1937-05-12',
    spouses: [{ name: '蔡钦木', surname: '蔡', birth: '1942-08-05', note: '四川籍',
      children: ['chang24','qiuling','qiumei'] }] },
  { id: 'jiefu', name: '捷夫', generation: 24, branch: 'left-3',
    birth: '1945-07-22',
    spouses: [{ name: '刁惠玲', surname: '刁', birth: '1949-08-21',
      children: ['xinhao','congling'] }] },

  // 二十五世
  { id: 'xinqiang', name: '新强', generation: 25, branch: 'left-3',
    birth: '1959-08-16',
    spouses: [{ name: '吴秋琼', surname: '吴', birth: '1965-09-10',
      children: ['huidong','huijun'] }] },
  { id: 'xinhai', name: '新海', generation: 25, branch: 'left-3',
    spouses: [{ name: '黄瑞娟', surname: '黄', children: ['jianxin','xin25'] }] },
  { id: 'xinsong', name: '新松', generation: 25, branch: 'left-3',
    birth: '1970-08-21', note: '移居新西兰',
    spouses: [{ name: '张钟尹', surname: '张', birth: '1974-05-01',
      children: ['yueheng','yuewen','yuesheng'] }] },
  { id: 'xintao', name: '新涛', generation: 25, branch: 'left-3',
    birth: '1972-05-20', note: '移居美国',
    spouses: [{ name: '范冰', surname: '范', birth: '1973-09-21',
      children: ['derui','dezhi'] }] },
  { id: 'chang24', name: '昶', generation: 25, branch: 'left-3',
    birth: '1969-05-20',
    spouses: [{ name: '张元敏', surname: '张', birth: '1974-05-03',
      children: ['yaosong','qiuling25a','qiumei25a'] }] },
  { id: 'xinhao', name: '新浩', generation: 25, branch: 'left-3',
    spouses: [{ name: '罗宇慈', surname: '罗' }] },

  // 二十六世
  { id: 'huidong', name: '汇东', generation: 26, branch: 'left-3',
    birth: '1989-06-05',
    spouses: [{ name: '刘怡琪', surname: '刘', birth: '1992-08-27',
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
  { year: '前1048', from: '受封之地', to: '罗国', person: '劻正公', event: '周武王三年建功受封' },
  { year: '约1280', from: '福建宁化石壁村', to: '广东兴宁', person: '小九公', event: '宋末客道广东，任循州学正' },
  { year: '约1648', from: '广东兴宁', to: '扬州', person: '万荣公', event: '幼年孤儿，独赴扬州与叔合股贸易' },
  { year: '约1660', from: '扬州', to: '广东兴宁', person: '万荣公', event: '积累财款，回乡置产' },
  { year: '清中期', from: '兴宁', to: '惠州/惠阳', person: '习诗等', event: '部分后裔移居惠州' },
  { year: '清中期', from: '兴宁', to: '四川', person: '㭏华等', event: '珠玉公后裔移居四川' },
  { year: '清中期', from: '兴宁', to: '江西', person: '新贤', event: '移居江西' },
  { year: '清中期', from: '兴宁', to: '南洋', person: '钦贤', event: '移居南洋' },
  { year: '民国', from: '兴宁', to: '江西赣州', person: '捷龙等', event: '锡镠公后裔移居赣州' },
  { year: '约1970s', from: '兴宁', to: '新西兰', person: '新松', event: '新松家移居新西兰' },
  { year: '约1990s', from: '兴宁', to: '美国', person: '新涛', event: '新涛家移居美国' },
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
