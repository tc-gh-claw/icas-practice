
        // ==========================================
        // ICAS 題庫 - 科學 (50+ 題目)
        // ==========================================
        const scienceQuestions = [
            // 物理 (15題)
            {
                question: "水在什麼溫度下會沸騰？",
                options: ["90°C", "100°C", "110°C", "120°C"],
                correct: 1,
                difficulty: "easy",
                explanation: "在標準大氣壓下，水的沸點是 100°C。\n\nWater boils at 100°C at standard atmospheric pressure."
            },
            {
                question: "聲音在什麼介質中傳播最快？",
                options: ["空氣", "水", "固體（如鋼鐵）", "真空"],
                correct: 2,
                difficulty: "medium",
                explanation: "聲音在固體中傳播最快，因為分子排列緊密。在真空中不能傳播。\n\nSound travels fastest in solids because molecules are closely packed. It cannot travel in a vacuum."
            },
            {
                question: "磁鐵的哪個部位磁力最強？",
                options: ["中間", "兩極 (N 極和 S 極)", "側面", "底部"],
                correct: 1,
                difficulty: "easy",
                explanation: "磁鐵的兩極（北極和南極）磁力最強。\n\nThe magnetic field is strongest at the two poles (North and South poles) of a magnet."
            },
            {
                question: "彩虹有多少種顏色？",
                options: ["5 種", "6 種", "7 種", "8 種"],
                correct: 2,
                difficulty: "easy",
                explanation: "彩虹有 7 種顏色：紅、橙、黃、綠、藍、靛、紫 (ROY G BIV)。\n\nA rainbow has 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet."
            },
            {
                question: "電流的基本單位是什麼？",
                options: ["伏特 (Volt)", "安培 (Ampere)", "歐姆 (Ohm)", "瓦特 (Watt)"],
                correct: 1,
                difficulty: "medium",
                explanation: "電流的單位是安培 (Ampere/A)，伏特是電壓單位，歐姆是電阻單位，瓦特是功率單位。\n\nThe unit of electric current is Ampere (A). Volt is for voltage, Ohm is for resistance, and Watt is for power."
            },
            {
                question: "光在真空中的速度大約是多少？",
                options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"],
                correct: 0,
                difficulty: "medium",
                explanation: "光速約為 300,000 km/s（或 3×10⁸ m/s），是宇宙中最快的速度。\n\nSpeed of light ≈ 300,000 km/s or 3×10⁸ m/s, the fastest speed in the universe."
            },
            {
                question: "一個物體從高處自由落下，它的速度會：",
                options: ["保持不變", "越來越慢", "越來越快", "先快後慢"],
                correct: 2,
                difficulty: "medium",
                explanation: "由於重力加速度，自由落體的速度會越來越快（每秒增加約 9.8 m/s）。\n\nDue to gravitational acceleration, falling objects speed up (about 9.8 m/s²)."
            },
            {
                question: "什麼顏色的物體吸收最多熱量？",
                options: ["白色", "銀色", "黑色", "黃色"],
                correct: 2,
                difficulty: "medium",
                explanation: "黑色物體吸收所有顏色的光，因此吸收最多熱量；白色反射所有光。\n\nBlack absorbs all colors of light, so it absorbs the most heat. White reflects all light."
            },
            {
                question: "電路中的開關作用是什麼？",
                options: ["增加電壓", "控制電流的通斷", "減少電阻", "儲存電能"],
                correct: 1,
                difficulty: "easy",
                explanation: "開關用於打開或關閉電路，控制電流是否流通。\n\nA switch controls whether electric current can flow through a circuit."
            },
            {
                question: "凸透鏡對光線有什麼作用？",
                options: ["發散", "會聚", "反射", "吸收"],
                correct: 1,
                difficulty: "medium",
                explanation: "凸透鏡（中間厚邊緣薄）將平行光線會聚到焦點。\n\nA convex lens converges (focuses) parallel light rays to a focal point."
            },
            {
                question: "下列哪種現象是光的折射？",
                options: [
                    "鏡子中的倒影",
                    "筷子在水中看起來彎曲",
                    "彩虹",
                    "日食"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "光從空氣進入水時會折射，使水中的物體看起來位置偏移。\n\nLight bends when passing from air to water, making objects appear displaced."
            },
            {
                question: "一個物體在月球上的重量與在地球上相比：",
                options: [
                    "相同",
                    "在月球上較重",
                    "在月球上較輕（約1/6）",
                    "在月球上沒有重量"
                ],
                correct: 2,
                difficulty: "medium",
                explanation: "月球重力約為地球的 1/6，所以物體在月球上重量較輕（但質量不變）。\n\nMoon's gravity is about 1/6 of Earth's, so objects weigh less there."
            },
            {
                question: "摩擦力的方向通常是：",
                options: [
                    "與運動方向相同",
                    "與運動方向相反",
                    "垂直於運動方向",
                    "與運動無關"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "摩擦力總是與物體運動方向（或傾向）相反，阻止運動。\n\nFriction always opposes motion or the tendency of motion."
            },
            {
                question: "下列哪種能源是不可再生能源？",
                options: ["太陽能", "風能", "煤炭", "水能"],
                correct: 2,
                difficulty: "easy",
                explanation: "煤炭是化石燃料，形成需要數百萬年，用盡後無法短期內再生。\n\nCoal is a fossil fuel that takes millions of years to form and cannot be replenished quickly."
            },
            {
                question: "簡單機械中的槓桿原理是誰發現的？",
                options: ["牛頓", "阿基米德", "愛因斯坦", "伽利略"],
                correct: 1,
                difficulty: "hard",
                explanation: "阿基米德發現了槓桿原理，並說過「給我一個支點，我能撬動地球」。\n\nArchimedes discovered the lever principle and famously said 'Give me a place to stand, and I shall move the Earth.'"
            },

            // 化學 (10題)
            {
                question: "水的化學式是什麼？",
                options: ["CO₂", "H₂O", "O₂", "NaCl"],
                correct: 1,
                difficulty: "easy",
                explanation: "水的化學式是 H₂O，由兩個氫原子和一個氧原子組成。\n\nWater's chemical formula is H₂O, consisting of 2 hydrogen atoms and 1 oxygen atom."
            },
            {
                question: "下列哪種物質是酸性的？",
                options: ["肥皂水", "檸檬汁", "漂白水", "海水"],
                correct: 1,
                difficulty: "easy",
                explanation: "檸檬汁含有檸檬酸，pH 值小於 7，呈酸性。\n\nLemon juice contains citric acid and has a pH less than 7, making it acidic."
            },
            {
                question: "鐵生鏽是什麼類型的變化？",
                options: ["物理變化", "化學變化", "生物變化", "核變化"],
                correct: 1,
                difficulty: "medium",
                explanation: "鐵生鏽是鐵與氧氣、水發生化學反應生成氧化鐵，屬於化學變化。\n\nRusting is a chemical change where iron reacts with oxygen and water to form iron oxide."
            },
            {
                question: "下列哪種氣體佔地球大氣層的比例最高？",
                options: ["氧氣", "二氧化碳", "氮氣", "氫氣"],
                correct: 2,
                difficulty: "medium",
                explanation: "氮氣 (N₂) 約佔大氣的 78%，氧氣約 21%，其他氣體約 1%。\n\nNitrogen makes up about 78% of Earth's atmosphere, oxygen about 21%."
            },
            {
                question: "光合作用會釋放什麼氣體？",
                options: ["二氧化碳", "氧氣", "氮氣", "氫氣"],
                correct: 1,
                difficulty: "easy",
                explanation: "光合作用吸收 CO₂ 和水，產生葡萄糖和氧氣。\n\nPhotosynthesis absorbs CO₂ and water, producing glucose and oxygen."
            },
            {
                question: "下列哪種是混合物？",
                options: ["純水", "食鹽", "空氣", "蒸餾水"],
                correct: 2,
                difficulty: "medium",
                explanation: "空氣是氮氣、氧氣、二氧化碳等多種氣體的混合物。\n\nAir is a mixture of nitrogen, oxygen, carbon dioxide, and other gases."
            },
            {
                question: "pH 值為 7 表示物質是：",
                options: ["酸性", "鹼性", "中性", "強酸"],
                correct: 2,
                difficulty: "easy",
                explanation: "pH 7 為中性（如純水），小於 7 為酸性，大於 7 為鹼性。\n\npH 7 is neutral (like pure water). Below 7 is acidic, above 7 is basic/alkaline."
            },
            {
                question: "下列哪種過程是吸熱反應？",
                options: [
                    "燃燒",
                    "冰塊融化",
                    "生鏽",
                    "爆炸"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "冰塊融化需要從環境吸收熱量，屬於吸熱過程。\n\nMelting ice absorbs heat from the surroundings, making it endothermic."
            },
            {
                question: "鑽石和金剛石是同一種物質嗎？",
                options: [
                    "不是，完全不同",
                    "是，都是純碳",
                    "不是，鑽石是石頭",
                    "是，都是金屬"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "鑽石和金剛石都是純碳（C）的同素異形體，只是原子排列不同。\n\nDiamond and graphite are both pure carbon (allotropes) with different atomic arrangements."
            },
            {
                question: "防腐劑的主要作用是什麼？",
                options: [
                    "增加食物的營養",
                    "延長食物的保質期",
                    "改變食物的顏色",
                    "增加食物的水分"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "防腐劑用於抑制細菌生長，延長食物的保質期。\n\nPreservatives inhibit bacterial growth to extend food shelf life."
            },

            // 生物 (15題)
            {
                question: "植物進行光合作用需要什麼？",
                options: ["氧氣和二氧化碳", "陽光、水和二氧化碳", "氧氣和水", "陽光和氧氣"],
                correct: 1,
                difficulty: "easy",
                explanation: "光合作用需要陽光、水和二氧化碳，產生氧氣和葡萄糖。\n\nPhotosynthesis requires sunlight, water, and carbon dioxide to produce oxygen and glucose."
            },
            {
                question: "人體最大的器官是什麼？",
                options: ["肝臟", "大腦", "皮膚", "心臟"],
                correct: 2,
                difficulty: "easy",
                explanation: "皮膚是人體最大的器官，覆蓋整個身體表面。\n\nThe skin is the body's largest organ, covering the entire body surface."
            },
            {
                question: "下列哪種動物是哺乳動物？",
                options: ["青蛙", "企鵝", "鯨魚", "蜥蝪"],
                correct: 2,
                difficulty: "easy",
                explanation: "鯨魚是哺乳動物，用肺呼吸，會哺乳餵養幼崽。青蛙是兩棲動物，企鵝是鳥類，蜥蝪是爬蟲類。\n\nWhales are mammals - they breathe air and nurse their young with milk. Frogs are amphibians, penguins are birds, and lizards are reptiles."
            },
            {
                question: "細胞的「發電廠」是什麼細胞器？",
                options: ["細胞核", "粒線體", "葉綠體", "核糖體"],
                correct: 1,
                difficulty: "medium",
                explanation: "粒線體負責細胞呼吸，產生 ATP 能量，被稱為細胞的「發電廠」。\n\nMitochondria produce ATP energy through cellular respiration, called the 'powerhouse' of the cell."
            },
            {
                question: "DNA 的全名是什麼？",
                options: [
                    "去氧核糖核酸",
                    "核糖核酸",
                    "氨基酸",
                    "蛋白質"
                ],
                correct: 0,
                difficulty: "medium",
                explanation: "DNA = Deoxyribonucleic Acid（去氧核糖核酸），攜帶遺傳信息。\n\nDNA = Deoxyribonucleic Acid, carries genetic information."
            },
            {
                question: "下列哪種生物是分解者？",
                options: ["草", "兔子", "真菌", "老鷹"],
                correct: 2,
                difficulty: "medium",
                explanation: "真菌（如蘑菇）分解死去的有機物，是生態系統中的分解者。\n\nFungi like mushrooms are decomposers that break down dead organic matter."
            },
            {
                question: "人類有多少對染色體？",
                options: ["22對", "23對", "24對", "46對"],
                correct: 1,
                difficulty: "medium",
                explanation: "人類有 23 對（共 46 條）染色體，其中一對是性染色體。\n\nHumans have 23 pairs (46 total) of chromosomes, including one pair of sex chromosomes."
            },
            {
                question: "光合作用在哪個細胞器中進行？",
                options: ["細胞核", "粒線體", "葉綠體", "液泡"],
                correct: 2,
                difficulty: "easy",
                explanation: "葉綠體含有葉綠素，是植物進行光合作用的場所。\n\nChloroplasts contain chlorophyll and are where photosynthesis occurs in plant cells."
            },
            {
                question: "下列哪種血型被稱為「萬能供血者」？",
                options: ["A型", "B型", "AB型", "O型"],
                correct: 3,
                difficulty: "medium",
                explanation: "O型血沒有 A 或 B 抗原，可以捐給任何血型的人（但只能接受 O 型血）。\n\nType O has no A or B antigens, so can donate to any blood type (but only receive O)."
            },
            {
                question: "動物細胞和植物細胞的主要區別是什麼？",
                options: [
                    "植物細胞有細胞核",
                    "植物細胞有細胞壁和葉綠體",
                    "動物細胞比較大",
                    "動物細胞有葉綠體"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "植物細胞有細胞壁、葉綠體和大液泡，動物細胞沒有。\n\nPlant cells have cell walls, chloroplasts, and large vacuoles; animal cells do not."
            },
            {
                question: "下列哪個器官屬於消化系統？",
                options: ["心臟", "肺", "胃", "腎臟"],
                correct: 2,
                difficulty: "easy",
                explanation: "胃是消化系統的一部分，負責儲存和初步消化食物。\n\nThe stomach is part of the digestive system, storing and beginning digestion of food."
            },
            {
                question: "什麼是「自然選擇」？",
                options: [
                    "人類選擇寵物",
                    "適者生存，不適者被淘汰",
                    "選擇天然食物",
                    "保護自然環境"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "自然選擇是達爾文提出的演化機制：適應環境的個體更容易生存和繁殖。\n\nNatural selection (Darwin): organisms better adapted to their environment tend to survive and reproduce."
            },
            {
                question: "細菌是什麼類型的生物？",
                options: ["真核生物", "原核生物", "病毒", "真菌"],
                correct: 1,
                difficulty: "medium",
                explanation: "細菌是原核生物，沒有細胞核和膜結合的細胞器。\n\nBacteria are prokaryotes - they have no nucleus or membrane-bound organelles."
            },
            {
                question: "人體哪個系統負責運輸氧氣和養分？",
                options: ["呼吸系統", "消化系統", "循環系統", "神經系統"],
                correct: 2,
                difficulty: "easy",
                explanation: "循環系統（心血管系統）透過血液運輸氧氣、養分和廢物。\n\nThe circulatory (cardiovascular) system transports oxygen, nutrients, and waste through blood."
            },
            {
                question: "疫苗的作用是什麼？",
                options: [
                    "直接殺死病毒",
                    "幫助免疫系統認識病原體",
                    "替代藥物治療",
                    "改變 DNA"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "疫苗含有弱化或死亡的病原體，刺激免疫系統產生抗體，建立免疫記憶。\n\nVaccines stimulate the immune system to produce antibodies and build immunity."
            },

            // 地球科學 (10題)
            {
                question: "地球圍繞什麼運行？",
                options: ["月球", "太陽", "火星", "銀河系中心"],
                correct: 1,
                difficulty: "easy",
                explanation: "地球圍繞太陽運行，公轉一周需要約 365 天（一年）。\n\nEarth orbits around the Sun, taking about 365 days to complete one revolution."
            },
            {
                question: "下列哪種岩石是由火山熔岩冷卻形成的？",
                options: ["沉積岩", "火成岩", "變質岩", "化石"],
                correct: 1,
                difficulty: "easy",
                explanation: "火成岩（又稱岩漿岩）由熔融的岩漿冷卻凝固形成。\n\nIgneous rocks form from cooled and solidified magma or lava."
            },
            {
                question: "潮汐主要由什麼引起？",
                options: ["風", "月球引力", "太陽熱", "地震"],
                correct: 1,
                difficulty: "medium",
                explanation: "潮汐主要由月球（和太陽）的引力作用引起。\n\nTides are mainly caused by the gravitational pull of the Moon (and Sun)."
            },
            {
                question: "下列哪種天氣現象與冷鋒有關？",
                options: ["晴朗", "雷暴", "大霧", "無風"],
                correct: 1,
                difficulty: "medium",
                explanation: "冷鋒通過時常帶來雷暴、強風和降雨，之後氣溫下降。\n\nCold fronts often bring thunderstorms, strong winds, and rain, followed by cooler temperatures."
            },
            {
                question: "水循環中，水從地表回到大氣的主要過程是什麼？",
                options: ["降雨", "凝結", "蒸發", "滲透"],
                correct: 2,
                difficulty: "easy",
                explanation: "蒸發是水從液態變為氣態，從地表（海洋、湖泊等）回到大氣的過程。\n\nEvaporation is the process where liquid water changes to vapor and returns to the atmosphere."
            },
            {
                question: "下列哪種能源是可再生能源？",
                options: ["煤炭", "石油", "太陽能", "天然氣"],
                correct: 2,
                difficulty: "easy",
                explanation: "太陽能是可再生能源，因為太陽每天都會升起。煤炭、石油和天然氣都是化石燃料，會用盡。\n\nSolar energy is renewable because the sun continues to shine. Coal, oil, and natural gas are fossil fuels that will run out."
            },
            {
                question: "臭氧層的主要功能是什麼？",
                options: [
                    "產生氧氣",
                    "吸收紫外線",
                    "調節氣溫",
                    "阻擋隕石"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "臭氧層吸收大部分有害的紫外線輻射，保護地球生物。\n\nThe ozone layer absorbs most harmful UV radiation, protecting life on Earth."
            },
            {
                question: "下列哪個是化石燃料？",
                options: ["風能", "地熱能", "天然氣", "潮汐能"],
                correct: 2,
                difficulty: "easy",
                explanation: "天然氣是化石燃料，由古代有機物經過數百萬年形成。\n\nNatural gas is a fossil fuel formed from ancient organic matter over millions of years."
            },
            {
                question: "地球內部結構從外到內依次是：",
                options: [
                    "地核、地幔、地殻",
                    "地殻、地幔、地核",
                    "地幔、地核、地殻",
                    "地殻、地核、地幔"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "地球結構：地殻（最外層）→ 地幔 → 地核（最內層）。\n\nEarth's structure: crust (outer) → mantle → core (inner)."
            },
            {
                question: "下列哪種現象與全球暖化有關？",
                options: [
                    "冰川融化",
                    "海平面上升",
                    "極端天氣增加",
                    "以上皆是"
                ],
                correct: 3,
                difficulty: "easy",
                explanation: "全球暖化導致冰川融化、海平面上升、極端天氣增加等多種影響。\n\nGlobal warming causes melting glaciers, rising sea levels, and increased extreme weather events."
            }
        ];
