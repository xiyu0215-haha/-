const questions = [
    { q: "終於迎來週末假期，你理想中的充電方式是？", a: [ { text: "約朋友去打卡咖啡廳、市集狂歡聚會", type: "E" }, { text: "窩在家看劇、追漫或獨自享受安靜的下午茶", type: "I" } ] },
    { q: "去一家沒去過的高評價甜點店，你會怎麼點餐？", a: [ { text: "選招牌經典款或店長推薦，最穩不踩雷", type: "S" }, { text: "點名稱神秘、擺盤特別的季節限定創新款", type: "N" } ] },
    { q: "朋友遇到煩心事找你傾訴，你的第一反應是？", a: [ { text: "幫他理性分析原因，提供具體的解決建議", type: "T" }, { text: "先抱抱他、安撫情緒，給予真誠的同理與關懷", type: "F" } ] },
    { q: "計畫一趟三天的輕旅行，你的行前準備是？", a: [ { text: "做精美的行程規畫，連時間、交通都查好", type: "J" }, { text: "訂好住宿就出發，景點等到現場再隨心決定", type: "P" } ] },
    { q: "在夜市或美食街看到大排長龍的爆款糕點，你會？", a: [ { text: "拉著朋友一起排隊，邊聊天邊享受熱鬧氛圍", type: "E" }, { text: "想到要跟人擠就頭痛，寧願改買隔壁免排隊的", type: "I" } ] },
    { q: "逛家居文創雜貨店時，最吸引你注意的商品是？", a: [ { text: "極具實用性、質感紮實的日用品（如馬克杯）", type: "S" }, { text: "富有藝術感、造型獨特的小擺飾或氣氛燈", type: "N" } ] },
    { q: "跟朋友聚餐結帳發現店家算錯金額，你會？", a: [ { text: "直接拿著明細找店家核對清楚，一毛不差", type: "T" }, { text: "只要金額差不大，就不想打擾大家的好興致", type: "F" } ] },
    { q: "你的房間或個人桌子通常呈現什麼狀態？", a: [ { text: "物品各有歸位、井然有序，有自己的一套秩序", type: "J" }, { text: "隨性擺放，雖然看起來有點亂但自己找得到", type: "P" } ] },
    { q: "收到一份精美驚喜的傳統禮盒時，你的第一反應是？", a: [ { text: "開心地拍限動發社群，跟大家分享這份喜悅", type: "E" }, { text: "內心感到溫暖，默默拍下留念並私訊謝謝對方", type: "I" } ] },
    { q: "挑選生活用品或衣服時，你最看重？", a: [ { text: "材質耐用度、CP 值與實際功能", type: "S" }, { text: "整體設計概念、氛圍感與獨特品味", type: "N" } ] },
    { q: "當親朋好友之間發生摩擦爭執，你會？", a: [ { text: "站在中立立場分析誰對誰錯，講道理", type: "T" }, { text: "扮演緩和劑，溫柔協調大家的感受與情緒", type: "F" } ] },
    { q: "對於生活中的日常行程（如健身、作息），你習慣？", a: [ { text: "制定規律的打卡計畫，按時執行", type: "J" }, { text: "看當天的心情與狀態，彈性調整隨興而為", type: "P" } ] }
];

const pastries = {
    "INTJ": { name: "無麩質米餅乾", tag: "獨特理性、極簡品味", desc: "獨立沉穩的生活哲學家。對生活品質有極高標準，不隨波逐流，喜歡在自己的小天地裡深度思考。", item: "降噪耳機 & 沉香香氛", perf: "95%", g1Name: "太陽餅", g1Mbti: "ENFP", g2Name: "牛軋糖", g2Mbti: "INTP", prod: "極致純粹無麩質米餅乾禮盒", prodDesc: "無負擔的極致理性美味", link: "https://www.jzn.com.tw/product/detail/%E7%84%A1%E9%BA%A9%E8%B3%AA%E7%B1%B3%E9%A4%85%E4%B9%BE" },
    "INTP": { name: "牛軋糖", tag: "冷靜有梗、越嚼越香", desc: "生活中的冷幽默奇才。外表冷靜、內心充滿奇思妙想，獨處時靈感最多，越深入了解越覺得你很有料！", item: "邏輯益智拼圖", perf: "88%", g1Name: "漢餅（大餅）", g1Mbti: "ENTJ", g2Name: "無麩質米餅乾", g2Mbti: "INTJ", prod: "經典濃醇牛軋糖禮盒", prodDesc: "越嚼越有味的經典深度", link: "https://www.jzn.com.tw/product/detail/%E6%9D%8F%E4%BB%81%E7%89%9B%E8%BB%8B%E7%B3%96" },
    "ENTJ": { name: "漢餅（大餅）", tag: "氣場全開、生活主導者", desc: "生活中的行動派領袖。規劃能力極強，無論是聚會還是旅行，只要有你在大家就特別安心。", item: "精緻皮革萬用手帳", perf: "98%", g1Name: "牛軋糖", g1Mbti: "INTP", g2Name: "小米香", g2Mbti: "INFP", prod: "尊榮招牌大餅喜餅禮盒", prodDesc: "鎮壓全場的大氣首選", link: "https://www.jzn.com.tw/product/category/%E4%BC%B4%E6%89%8B%E7%A6%AE%E5%93%81" },
    "ENTP": { name: "月餅", tag: "驚喜不斷、百變生活", desc: "生活的破局點子王。討厭千篇一律的枯燥生活，總能發掘新奇有趣的去處與美味，隨時帶給朋友驚喜。", item: "百變手繪筆記本", perf: "75%", g1Name: "四季糕", g1Mbti: "INFJ", g2Name: "豆沙Q餅", g2Mbti: "ENFJ", prod: "創意跨界金沙月餅禮盒", prodDesc: "每一口都是意想不到的驚喜", link: "https://www.jzn.com.tw/product/detail/%E5%BB%A3%E5%BC%8F%E6%9C%88%E9%A4%85%E4%B8%AD%E7%A7%8B%E9%99%90%E5%AE%9A" },
    "INFJ": { name: "四季糕", tag: "質樸細緻、溫柔陪伴", desc: "生活中的心靈導師。心思極其細膩，能敏銳察覺身邊人的微小情緒，給予最恰到好處的溫暖與傾聽。", item: "手作暖心陶杯", perf: "92%", g1Name: "月餅", g1Mbti: "ENTP", g2Name: "太陽餅", g2Mbti: "ENFP", prod: "古法手作四季雪花糕禮盒", prodDesc: "入口即化的細緻溫柔", link: "https://www.jzn.com.tw/product/detail/%E5%9B%9B%E5%AD%A3%E7%B3%95" },
    "INFP": { name: "小米香", tag: "純粹美好、靈魂浪漫", desc: "浪漫的理想主義者。生活雖然平凡，但你的內心世界極其豐富繽紛，能從日常的小事中發現美好。", item: "彩色手繪日誌本", perf: "82%", g1Name: "豆沙Q餅", g1Mbti: "ENFJ", g2Name: "漢餅（大餅）", g2Mbti: "ENTJ", prod: "古早味爆米香綜合禮盒", prodDesc: "單純純粹的童年美好記憶", link: "https://www.jzn.com.tw/product/detail/醬燒小米香春節限定" },
    "ENFJ": { name: "豆沙Q餅", tag: "熱情溫暖、圓融包容", desc: "生活中的溫暖小太陽。總是主動照顧身邊每一個人，有你在的場子氣氛總是特別融洽溫馨。", item: "手作保溫杯", perf: "89%", g1Name: "小米香", g1Mbti: "INFP", g2Name: "核桃杏香酥", g2Mbti: "ISFP", prod: "招牌麻糬豆沙Q餅禮盒", prodDesc: "豐富層次牽起大家的幸福感", link: "https://www.jzn.com.tw/product/detail/%E8%B1%86%E6%B2%99q%E9%A4%85" },
    "ENFP": { name: "太陽餅", tag: "皮酥餡甜、快樂源泉", desc: "生活的快樂製造機。充滿靈感與好奇心，跟你在一起的生活絕不無聊，隨時充滿陽光與笑聲！", item: "復古拍立得相機", perf: "70%", g1Name: "無麩質米餅乾", g1Mbti: "INTJ", g2Name: "四季糕", g2Mbti: "INFJ", prod: "台中經典麥芽太陽餅禮盒", prodDesc: "如陽光般甜而不膩的經典", link: "https://www.jzn.com.tw/product/detail/%E5%A4%AA%E9%99%BD%E9%A4%85" },
    "ISTJ": { name: "平安龜", tag: "踏實靠譜、安定守護", desc: "生活中的安定大後盾。作息規律、為人可靠，把生活中的每一件小事都安排得井井有條。", item: "精準計時鬧鐘", perf: "99%", g1Name: "年貨零嘴", g1Mbti: "ESFP", g2Name: "棗泥核桃糕", g2Mbti: "ESTP", prod: "吉祥祈福龜糕禮盒", prodDesc: "最沉穩安定的真誠祝福", link: "https://www.jzn.com.tw/product/detail/%E5%B9%B3%E5%AE%89%E9%BE%9C%E6%98%A5%E7%AF%80%E9%99%90%E5%AE%9A" },
    "ISFJ": { name: "小漢餅", tag: "細心貼心、默默奉獻", desc: "生活中的溫柔守護者。默默記住朋友的喜好，總是體貼地在細節處給予照顧，令人倍感窩心。", item: "溫熱舒壓眼罩", perf: "90%", g1Name: "棗泥核桃糕", g1Mbti: "ESTP", g2Name: "鳳梨酥", g2Mbti: "ESTJ", prod: "精巧綜合小漢餅禮盒", prodDesc: "剛剛好的貼心與一口滿足", link: "https://www.jzn.com.tw/product/category/%E4%BC%B4%E6%89%8B%E7%A6%AE%E5%93%81" },
    "ESTJ": { name: "鳳梨酥", tag: "經典招財、高效利落", desc: "生活中的高效率達人。講求實用與產出，不管是安排行程還是購物，都能用最高 CP 值搞定。", item: "多功能高效計算機", perf: "96%", g1Name: "核桃杏香酥", g1Mbti: "ISFP", g2Name: "小漢餅", g2Mbti: "ISFJ", prod: "金鑽鳳梨酥旺來禮盒", prodDesc: "扎實高效的招財熱銷冠軍", link: "https://www.jzn.com.tw/product/detail/%E9%B3%B3%E6%A2%A8%E9%85%A5" },
    "ESFJ": { name: "綠豆椪", tag: "熱情人情、歡樂共享", desc: "生活的社交潤滑劑。熱愛分享美食與好物，好人緣滿滿，總是能快速拉近大家的距離。", item: "分享包風味茶包", perf: "87%", g1Name: "堅果酥類", g1Mbti: "ISTP", g2Name: "小漢餅", g2Mbti: "ISFJ", prod: "傳統純素/肉鬆綠豆椪禮盒", prodDesc: "牽起濃濃人情味的必備款", link: "https://www.jzn.com.tw/product/detail/%E7%B6%A0%E8%B1%86%E6%A4%AA" },
    "ISTP": { name: "堅果酥類", tag: "真材實料、獨立隨性", desc: "生活中的實作冒險家。不說廢話、動手能力極強，享受俐落乾脆的生活節奏，應變力一流。", item: "多功能工具組", perf: "85%", g1Name: "綠豆椪", g1Mbti: "ESFJ", g2Name: "鳳梨酥", g2Mbti: "ESTJ", prod: "綜和綜合堅果酥禮盒", prodDesc: "硬核實力派的香脆首選", link: "https://www.jzn.com.tw/product/category/%E9%9B%B6%E5%98%B4" },
    "ISFP": { name: "核桃杏香酥", tag: "美學質感、質感生活", desc: "生活的視覺與質感代表。注重儀式感，隨時隨地能營造出舒適美觀的生活氛圍，帶有獨特品味。", item: "天然精油擴香", perf: "80%", g1Name: "鳳梨酥", g1Mbti: "ESTJ", g2Name: "豆沙Q餅", g2Mbti: "ENFJ", prod: "法式宮廷核桃杏香酥", prodDesc: "生活與口感的美學極致體驗", link: "https://www.jzn.com.tw/product/detail/%E6%A0%B8%E6%A1%83%E6%9D%8F%E9%A6%99%E9%85%A5" },
    "ESTP": { name: "棗泥核桃糕", tag: "濃郁果斷、熱情冒險", desc: "生活的熱情開拓者。行動力爆棚，想到什麼就立刻去做，享受當下的每一刻精彩！", item: "運動智能手環", perf: "78%", g1Name: "小漢餅", g1Mbti: "ISFJ", g2Name: "平安龜", g2Mbti: "ISTJ", prod: "養生南棗核桃糕禮盒", prodDesc: "濃郁果斷的頂級精力來源", link: "https://www.jzn.com.tw/product/detail/%E6%A3%97%E6%B3%A5%E6%A0%B8%E6%A1%83%E7%B3%95" },
    "ESFP": { name: "年貨零嘴", tag: "繽紛熱鬧、派對靈魂", desc: "生活中的派對主角。走到哪裡歡樂就到哪裡，極具感染力，是聚會不可或缺的情緒價值擔當！", item: "便攜藍牙音響", perf: "65%", g1Name: "平安龜", g1Mbti: "ISTJ", g2Name: "綠豆椪", g2Mbti: "ESFJ", prod: "歡樂澎湃年貨零嘴大禮包", prodDesc: "派對聚會不可或缺的歡樂源泉", link: "https://www.jzn.com.tw/product/category/%E9%9B%B6%E5%98%B4" }
};

let currentQ = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
    currentQ = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showScreen('quiz-screen');
    renderQuestion();
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
    const q = questions[currentQ];
    document.getElementById('question-num').innerText = `QUESTION ${String(currentQ + 1).padStart(2, '0')}`;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('progress-fill').style.width = `${((currentQ) / questions.length) * 100}%`;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.a.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleAnswer(opt.type);
        container.appendChild(btn);
    });
}

function handleAnswer(type) {
    scores[type]++;
    currentQ++;
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const mbti = 
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');

    const p = pastries[mbti] || pastries['ENFP'];

    document.getElementById('res-mbti').innerText = mbti;
    document.getElementById('res-title').innerText = p.name;
    document.getElementById('res-tagline').innerText = p.tag;
    document.getElementById('res-perfection').innerText = p.perf;
    document.getElementById('res-item').innerText = p.item;
    document.getElementById('res-desc').innerText = p.desc;
    
    document.getElementById('res-good-1-name').innerText = p.g1Name;
    document.getElementById('res-good-1-mbti').innerText = p.g1Mbti;
    document.getElementById('res-good-2-name').innerText = p.g2Name;
    document.getElementById('res-good-2-mbti').innerText = p.g2Mbti;

    document.getElementById('res-product-name').innerText = p.prod;
    document.getElementById('res-product-desc').innerText = p.prodDesc;
    document.getElementById('res-buy-link').href = p.link;

    renderSvgIcon();
    showScreen('result-screen');
    renderChart();
}

function renderSvgIcon() {
    document.getElementById('res-svg').innerHTML = `
        <svg viewBox="0 0 100 100" width="80" height="80">
            <rect x="20" y="25" width="60" height="50" rx="10" fill="#E65C40" stroke="#5C3D2E" stroke-width="3"/>
            <rect x="25" y="20" width="50" height="10" rx="4" fill="#F6D55C" stroke="#5C3D2E" stroke-width="2"/>
            <circle cx="38" cy="45" r="3" fill="#FFF"/>
            <circle cx="62" cy="45" r="3" fill="#FFF"/>
            <path d="M 43 55 Q 50 62 57 55" stroke="#FFF" stroke-width="2" fill="none"/>
        </svg>
    `;
}

function renderChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (window.myRadarChart) window.myRadarChart.destroy();

    window.myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['社交(E)', '務實(S)', '邏輯(T)', '規劃(J)', '理想(N)', '情感(F)'],
            datasets: [{
                data: [
                    Math.max(scores.E * 25, 20),
                    Math.max(scores.S * 25, 20),
                    Math.max(scores.T * 25, 20),
                    Math.max(scores.J * 25, 20),
                    Math.max(scores.N * 25, 20),
                    Math.max(scores.F * 25, 20)
                ],
                backgroundColor: 'rgba(230, 92, 64, 0.2)',
                borderColor: '#E65C40',
                borderWidth: 2,
                pointBackgroundColor: '#5C3D2E'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: '#5C3D2E' },
                    grid: { color: '#E8D5C4' },
                    pointLabels: { font: { size: 10, weight: 'bold' }, color: '#5C3D2E' },
                    ticks: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function restartQuiz() {
    showScreen('start-screen');
}
