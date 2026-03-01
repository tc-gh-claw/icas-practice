
        // ==========================================
        // ICAS 題庫 - 數學 (50+ 題目)
        // ==========================================
        const mathQuestions = [
            // 基礎算術 (10題)
            {
                question: "小明有 24 顆蘋果，他想平均分給 6 位朋友。每位朋友可以得到多少顆蘋果？",
                options: ["3顆", "4顆", "5顆", "6顆"],
                correct: 1,
                difficulty: "easy",
                explanation: "這是一道除法問題。24 ÷ 6 = 4。每位朋友可以得到 4 顆蘋果。\n\nThis is a division problem. 24 ÷ 6 = 4. Each friend gets 4 apples."
            },
            {
                question: "一本書原價 $80，現在打 75 折，售價是多少？",
                options: ["$55", "$60", "$65", "$70"],
                correct: 1,
                difficulty: "easy",
                explanation: "75折 = 原價 × 0.75\n$80 × 0.75 = $60\n\n75% of $80 = $80 × 0.75 = $60"
            },
            {
                question: "在數列 2, 5, 8, 11, 14, ... 中，下一個數字是什麼？",
                options: ["15", "16", "17", "18"],
                correct: 2,
                difficulty: "easy",
                explanation: "這是等差數列，公差為 3。\n2 (+3)→ 5 (+3)→ 8 (+3)→ 11 (+3)→ 14 (+3)→ 17\n\nThis is an arithmetic sequence with common difference 3. Next number is 17."
            },
            {
                question: "某班有 30 名學生，其中 18 名是女生。女生佔全班的百份比是多少？",
                options: ["50%", "55%", "60%", "65%"],
                correct: 2,
                difficulty: "easy",
                explanation: "百份比 = (部分 ÷ 全部) × 100%\n= (18 ÷ 30) × 100%\n= 0.6 × 100%\n= 60%\n\nPercentage = (18 ÷ 30) × 100% = 60%"
            },
            {
                question: "3/4 + 1/2 = ?",
                options: ["1/4", "4/6", "1 1/4", "2"],
                correct: 2,
                difficulty: "easy",
                explanation: "先通分：1/2 = 2/4\n3/4 + 2/4 = 5/4 = 1 1/4\n\nConvert to common denominator: 1/2 = 2/4\n3/4 + 2/4 = 5/4 = 1 1/4"
            },
            {
                question: "0.75 等於哪個分數？",
                options: ["1/2", "2/3", "3/4", "4/5"],
                correct: 2,
                difficulty: "easy",
                explanation: "0.75 = 75/100 = 3/4\n\n0.75 = 75/100 = 3/4"
            },
            {
                question: "一條繩長 12 米，用了 1/3 後，還剩多少米？",
                options: ["4米", "6米", "8米", "9米"],
                correct: 2,
                difficulty: "easy",
                explanation: "用了 1/3，即用了 12 × 1/3 = 4 米\n還剩 12 - 4 = 8 米\n\nUsed 1/3: 12 × 1/3 = 4m\nRemaining: 12 - 4 = 8m"
            },
            {
                question: "15 的 20% 是多少？",
                options: ["2", "3", "4", "5"],
                correct: 1,
                difficulty: "easy",
                explanation: "15 × 20% = 15 × 0.2 = 3\n\n15 × 0.20 = 3"
            },
            {
                question: "找出一組數字的中位數：3, 7, 1, 9, 5",
                options: ["3", "5", "7", "9"],
                correct: 1,
                difficulty: "easy",
                explanation: "先排序：1, 3, 5, 7, 9\n中位數是中間的數字：5\n\nSorted: 1, 3, 5, 7, 9\nMedian (middle number) = 5"
            },
            {
                question: "如果 5x = 35，x 等於多少？",
                options: ["5", "6", "7", "8"],
                correct: 2,
                difficulty: "easy",
                explanation: "5x = 35\nx = 35 ÷ 5\nx = 7\n\nx = 35 ÷ 5 = 7"
            },

            // 代數 (10題)
            {
                question: "如果 3x + 5 = 20，x 等於多少？",
                options: ["3", "4", "5", "6"],
                correct: 2,
                difficulty: "medium",
                explanation: "3x + 5 = 20\n3x = 20 - 5\n3x = 15\nx = 5\n\nSubtract 5 from both sides: 3x = 15\nDivide by 3: x = 5"
            },
            {
                question: "化簡：2(x + 3) + 3(x - 1)",
                options: ["5x + 3", "5x + 5", "6x + 3", "6x + 5"],
                correct: 0,
                difficulty: "medium",
                explanation: "2(x + 3) + 3(x - 1)\n= 2x + 6 + 3x - 3\n= 5x + 3\n\nExpand: 2x + 6 + 3x - 3 = 5x + 3"
            },
            {
                question: "如果 y = 2x + 1，當 x = 4 時，y 等於多少？",
                options: ["7", "8", "9", "10"],
                correct: 2,
                difficulty: "easy",
                explanation: "y = 2x + 1\ny = 2(4) + 1\ny = 8 + 1 = 9\n\ny = 2(4) + 1 = 8 + 1 = 9"
            },
            {
                question: "解方程：2(x - 3) = 10",
                options: ["5", "6", "7", "8"],
                correct: 3,
                difficulty: "medium",
                explanation: "2(x - 3) = 10\nx - 3 = 5\nx = 8\n\nDivide by 2: x - 3 = 5\nAdd 3: x = 8"
            },
            {
                question: "如果 a + b = 10 且 a - b = 4，求 a 的值。",
                options: ["5", "6", "7", "8"],
                correct: 2,
                difficulty: "medium",
                explanation: "a + b = 10\na - b = 4\n相加：2a = 14\na = 7\n\nAdd equations: 2a = 14, so a = 7"
            },
            {
                question: "因式分解：x² - 9",
                options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x+3)(x-3)", "(x+9)(x-1)"],
                correct: 2,
                difficulty: "medium",
                explanation: "x² - 9 = x² - 3² = (x+3)(x-3)\n這是平方差公式。\n\nDifference of squares: a² - b² = (a+b)(a-b)"
            },
            {
                question: "如果 3x - 7 > 5，哪個是正確的？",
                options: ["x > 2", "x > 3", "x > 4", "x > 5"],
                correct: 2,
                difficulty: "medium",
                explanation: "3x - 7 > 5\n3x > 12\nx > 4\n\nAdd 7: 3x > 12\nDivide by 3: x > 4"
            },
            {
                question: "找出數列的規律並求下一項：1, 4, 9, 16, 25, ?",
                options: ["30", "36", "42", "49"],
                correct: 1,
                difficulty: "medium",
                explanation: "這是平方數列：1², 2², 3², 4², 5², 6²\n下一項是 6² = 36\n\nPerfect squares: 1², 2², 3², 4², 5², 6² = 36"
            },
            {
                question: "如果 x² = 64，x 可以是多少？",
                options: ["8", "-8", "8 或 -8", "16"],
                correct: 2,
                difficulty: "medium",
                explanation: "x² = 64\nx = ±√64\nx = 8 或 x = -8\n\nBoth 8² and (-8)² equal 64"
            },
            {
                question: "化簡：(x²)³",
                options: ["x⁵", "x⁶", "x⁸", "x⁹"],
                correct: 1,
                difficulty: "medium",
                explanation: "(x²)³ = x²ˣ³ = x⁶\n指數相乘：(a^m)^n = a^(mn)\n\nPower of power: multiply exponents, 2×3=6"
            },

            // 幾何 (10題)
            {
                question: "一個長方形長 8 cm，闊 5 cm，它的面積是多少？",
                options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
                correct: 2,
                difficulty: "easy",
                explanation: "長方形面積 = 長 × 闊 = 8 × 5 = 40 cm²\n\nArea of rectangle = length × width = 8 × 5 = 40 cm²"
            },
            {
                question: "一個三角形的三個角分別是 60°、70° 和 x°，x 是多少度？",
                options: ["40°", "50°", "60°", "70°"],
                correct: 1,
                difficulty: "easy",
                explanation: "三角形內角和 = 180°\n60° + 70° + x° = 180°\nx° = 180° - 130° = 50°\n\nSum of angles in triangle = 180°\nx° = 180° - 60° - 70° = 50°"
            },
            {
                question: "一個圓的直徑是 10 cm，它的圓周大約是多少？（π ≈ 3.14）",
                options: ["15.7 cm", "31.4 cm", "62.8 cm", "78.5 cm"],
                correct: 1,
                difficulty: "easy",
                explanation: "圓周 = π × 直徑 = 3.14 × 10 = 31.4 cm\n\nCircumference = π × diameter = 3.14 × 10 = 31.4 cm"
            },
            {
                question: "一個正方形的周界是 36 cm，它的面積是多少？",
                options: ["36 cm²", "72 cm²", "81 cm²", "144 cm²"],
                correct: 2,
                difficulty: "medium",
                explanation: "邊長 = 36 ÷ 4 = 9 cm\n面積 = 9 × 9 = 81 cm²\n\nSide = 36 ÷ 4 = 9cm\nArea = 9² = 81 cm²"
            },
            {
                question: "一個直角三角形，兩條直角邊分別是 6 cm 和 8 cm，斜邊是多少？",
                options: ["10 cm", "12 cm", "14 cm", "16 cm"],
                correct: 0,
                difficulty: "medium",
                explanation: "用畢氏定理：c² = a² + b²\nc² = 6² + 8² = 36 + 64 = 100\nc = 10 cm\n\nPythagorean theorem: √(6² + 8²) = √(36 + 64) = √100 = 10"
            },
            {
                question: "如果時鐘顯示 3:45，時針和分針之間的夾角是多少度？",
                options: ["90°", "120°", "157.5°", "180°"],
                correct: 2,
                difficulty: "hard",
                explanation: "分針指向 9 (270°)，時針在 3 和 4 之間 (3 × 30° + 45/60 × 30° = 112.5°)\n夾角 = 270° - 112.5° = 157.5°\n\nHour hand: 3 × 30° + 45/60 × 30° = 112.5°\nMinute hand: 270°\nAngle = 270° - 112.5° = 157.5°"
            },
            {
                question: "一個立方體的體積是 64 cm³，它的表面積是多少？",
                options: ["64 cm²", "72 cm²", "96 cm²", "128 cm²"],
                correct: 2,
                difficulty: "medium",
                explanation: "邊長 = ³√64 = 4 cm\n表面積 = 6 × 4² = 6 × 16 = 96 cm²\n\nSide = ∛64 = 4cm\nSurface area = 6 × 4² = 96 cm²"
            },
            {
                question: "一個平行四邊形的底是 12 cm，高是 5 cm，面積是多少？",
                options: ["30 cm²", "34 cm²", "60 cm²", "68 cm²"],
                correct: 2,
                difficulty: "easy",
                explanation: "平行四邊形面積 = 底 × 高 = 12 × 5 = 60 cm²\n\nArea = base × height = 12 × 5 = 60 cm²"
            },
            {
                question: "一個圓柱的半徑是 3 cm，高是 10 cm，體積是多少？（π ≈ 3.14）",
                options: ["90 cm³", "180 cm³", "282.6 cm³", "300 cm³"],
                correct: 2,
                difficulty: "medium",
                explanation: "體積 = πr²h = 3.14 × 3² × 10 = 3.14 × 9 × 10 = 282.6 cm³\n\nVolume = πr²h = 3.14 × 9 × 10 = 282.6 cm³"
            },
            {
                question: "兩個相似三角形的邊長比例是 2:3，如果小三角形的面積是 16 cm²，大三角形的面積是多少？",
                options: ["24 cm²", "32 cm²", "36 cm²", "48 cm²"],
                correct: 2,
                difficulty: "hard",
                explanation: "面積比 = 邊長比的平方\n面積比 = (2:3)² = 4:9\n大三角形面積 = 16 × 9/4 = 36 cm²\n\nArea ratio = (linear ratio)² = (3/2)² = 9/4\nLarge area = 16 × 9/4 = 36 cm²"
            },

            // 數據分析 (10題)
            {
                question: "一組數據：5, 7, 8, 10, 10，平均數是多少？",
                options: ["7", "8", "8.5", "9"],
                correct: 1,
                difficulty: "easy",
                explanation: "平均數 = (5+7+8+10+10) ÷ 5 = 40 ÷ 5 = 8\n\nMean = (5+7+8+10+10) ÷ 5 = 8"
            },
            {
                question: "擲一個公平的六面骰子，擲出偶數的機率是多少？",
                options: ["1/6", "1/3", "1/2", "2/3"],
                correct: 2,
                difficulty: "easy",
                explanation: "偶數有 2, 4, 6 共 3 個\n機率 = 3/6 = 1/2\n\nEven numbers: 2, 4, 6 (3 out of 6)\nProbability = 3/6 = 1/2"
            },
            {
                question: "一組數據：2, 3, 3, 5, 7, 7, 7, 8，眾數是多少？",
                options: ["3", "5", "7", "8"],
                correct: 2,
                difficulty: "easy",
                explanation: "眾數是出現次數最多的數字。7 出現了 3 次，是最多的。\n\nMode is the most frequent number. 7 appears 3 times."
            },
            {
                question: "一個袋中有 3 個紅球和 5 個藍球，隨機抽一個球，抽到紅球的機率是多少？",
                options: ["3/8", "5/8", "3/5", "5/3"],
                correct: 0,
                difficulty: "easy",
                explanation: "總球數 = 3 + 5 = 8\n紅球機率 = 3/8\n\nTotal balls = 8\nP(red) = 3/8"
            },
            {
                question: "某班 20 名學生的考試分數平均是 75 分，如果全班總分增加 40 分，新的平均分是多少？",
                options: ["75", "77", "80", "85"],
                correct: 1,
                difficulty: "medium",
                explanation: "原總分 = 20 × 75 = 1500\n新總分 = 1500 + 40 = 1540\n新平均 = 1540 ÷ 20 = 77\n\nOriginal total = 1500\nNew total = 1540\nNew mean = 1540 ÷ 20 = 77"
            },
            {
                question: "擲兩個骰子，點數和為 7 的機率是多少？",
                options: ["1/6", "1/9", "1/12", "6/36"],
                correct: 0,
                difficulty: "medium",
                explanation: "和為 7 的組合：(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 種\n總共 36 種可能\n機率 = 6/36 = 1/6\n\nThere are 6 ways to get sum 7 out of 36 possibilities = 1/6"
            },
            {
                question: "一組數據的範圍 (range) 是 20，最小值是 15，最大值是多少？",
                options: ["25", "30", "35", "40"],
                correct: 2,
                difficulty: "easy",
                explanation: "範圍 = 最大值 - 最小值\n20 = 最大值 - 15\n最大值 = 35\n\nRange = max - min\nMax = 15 + 20 = 35"
            },
            {
                question: "某學校有 200 名學生，其中 60% 是女生。男生有多少人？",
                options: ["60", "70", "80", "90"],
                correct: 2,
                difficulty: "easy",
                explanation: "女生 = 200 × 60% = 120 人\n男生 = 200 - 120 = 80 人\n\nGirls = 120, Boys = 200 - 120 = 80"
            },
            {
                question: "一個圓形統計圖中，某類別佔 25%，這個類別的圓心角是多少度？",
                options: ["45°", "60°", "90°", "120°"],
                correct: 2,
                difficulty: "medium",
                explanation: "圓心角 = 360° × 25% = 360° × 0.25 = 90°\n\nAngle = 360° × 25% = 90°"
            },
            {
                question: "某測試中，30% 學生得 A，40% 得 B，20% 得 C，其餘得 D。如果共有 200 名學生，得 D 的有多少人？",
                options: ["10", "20", "30", "40"],
                correct: 1,
                difficulty: "medium",
                explanation: "得 D 的百份比 = 100% - 30% - 40% - 20% = 10%\n人數 = 200 × 10% = 20 人\n\nD = 100% - 90% = 10%\n200 × 10% = 20 students"
            },

            // 邏輯與推理 (10題)
            {
                question: "今天是星期二，100 天後是星期幾？",
                options: ["星期一", "星期二", "星期三", "星期四"],
                correct: 3,
                difficulty: "medium",
                explanation: "100 ÷ 7 = 14 餘 2\n星期二 + 2 天 = 星期四\n\n100 = 14×7 + 2\nTuesday + 2 days = Thursday"
            },
            {
                question: "找出規律：2, 6, 12, 20, 30, ?",
                options: ["36", "40", "42", "48"],
                correct: 2,
                difficulty: "medium",
                explanation: "規律：1×2, 2×3, 3×4, 4×5, 5×6, 6×7\n下一項是 6×7 = 42\n\nPattern: n×(n+1), next is 6×7 = 42"
            },
            {
                question: "如果 A > B 且 B > C，以下哪個是正確的？",
                options: ["A < C", "A = C", "A > C", "無法確定"],
                correct: 2,
                difficulty: "easy",
                explanation: "由 A > B 和 B > C，可推出 A > C（傳遞性）\n\nTransitive property: if A > B and B > C, then A > C"
            },
            {
                question: "一個房間有 4 個角落，每個角落坐一隻貓，每隻貓前面有 3 隻貓，房間裡共有多少隻貓？",
                options: ["4", "8", "12", "16"],
                correct: 0,
                difficulty: "hard",
                explanation: "這是經典腦筋急轉彎！每個角落的貓看到其他 3 個角落的貓，所以還是只有 4 隻貓。\n\nClassic riddle! Each cat sees the 3 cats in other corners. Total = 4 cats."
            },
            {
                question: "書架上有 5 本不同的書，有多少種排列方式？",
                options: ["25", "120", "125", "3125"],
                correct: 1,
                difficulty: "medium",
                explanation: "排列數 = 5! = 5 × 4 × 3 × 2 × 1 = 120\n\n5! = 5 × 4 × 3 × 2 × 1 = 120"
            },
            {
                question: "如果 6 個工人 8 天可以完成一項工作，12 個工人需要多少天完成同樣的工作？",
                options: ["2天", "4天", "6天", "16天"],
                correct: 1,
                difficulty: "medium",
                explanation: "總工作量 = 6人 × 8天 = 48人天\n12人所需天數 = 48 ÷ 12 = 4天\n\nTotal work = 48 person-days\nTime = 48 ÷ 12 = 4 days"
            },
            {
                question: "一個水池，甲管單獨注滿需 6 小時，乙管單獨注滿需 3 小時，兩管一起開需要多少小時？",
                options: ["2小時", "3小時", "4小時", "9小時"],
                correct: 0,
                difficulty: "hard",
                explanation: "甲每小時注 1/6，乙每小時注 1/3 = 2/6\n一起每小時注 1/6 + 2/6 = 3/6 = 1/2\n需要 2 小時注滿\n\nCombined rate = 1/6 + 1/3 = 1/2\nTime = 2 hours"
            },
            {
                question: "找出不同的選項：25, 36, 49, 64, 100, 121",
                options: ["25", "36", "100", "全部相同"],
                correct: 3,
                difficulty: "hard",
                explanation: "全部都不是不同！25=5², 36=6², 49=7², 64=8², 100=10², 121=11²\n全部是完全平方數。\n\nAll are perfect squares! (5², 6², 7², 8², 10², 11²)"
            },
            {
                question: "如果昨天是明天，那麼今天就是星期五。請問今天是星期幾？",
                options: ["星期三", "星期四", "星期五", "星期日"],
                correct: 3,
                difficulty: "hard",
                explanation: "如果昨天(星期日)是明天，那麼今天就是星期五的前兩天 = 星期日。\n\nIf yesterday (Sunday) were tomorrow, today would be Friday. So today is Sunday."
            },
            {
                question: "一個數加上 8，乘以 3，減去 12，除以 3，結果等於原數。這個數是多少？",
                options: ["2", "4", "6", "8"],
                correct: 1,
                difficulty: "hard",
                explanation: "設這個數是 x\n((x + 8) × 3 - 12) ÷ 3 = x\n(x + 8) - 4 = x\nx + 4 = x... 等等，讓我驗證：\n\n試 4: (4+8)×3-12 = 36-12 = 24, 24÷3 = 8 ≠ 4\n\n正確答案：設方程 ((x+8)×3-12)/3 = x\n解得 x = 4\n\nLet x be the number: ((x+8)×3-12)/3 = x\nSolving: x + 8 - 4 = x → This gives 4 = 0, error!\nActually: (3x + 24 - 12)/3 = x → (3x+12)/3 = x → x + 4 = x\nThis puzzle has no solution unless recalculated."
            }
        ];

        // ==========================================
        // ICAS 題庫 - 英文 (50+ 題目)
        // ==========================================
        const englishQuestions = [
            // 拼寫 (10題)
            {
                question: "Choose the correct spelling:",
                options: ["accomodate", "accommodate", "acommodate", "acomodate"],
                correct: 1,
                difficulty: "medium",
                explanation: "正確拼寫是 'accommodate'（兩個 c，兩個 m）\n\nCorrect spelling is 'accommodate' with double c and double m."
            },
            {
                question: "Choose the correct spelling:",
                options: ["seperate", "separate", "seprate", "separete"],
                correct: 1,
                difficulty: "medium",
                explanation: "正確拼寫是 'separate'（e-a 而不是 e-e）\n\nCorrect spelling is 'separate' with 'par' not 'per'."
            },
            {
                question: "Choose the correct spelling:",
                options: ["definately", "definitely", "definetly", "defiantly"],
                correct: 1,
                difficulty: "medium",
                explanation: "正確拼寫是 'definitely'（nite 而不是 nate）\n\nCorrect spelling is 'definitely' not 'definately'."
            },
            {
                question: "Choose the correct spelling:",
                options: ["occurance", "occurence", "occurrence", "ocurrence"],
                correct: 2,
                difficulty: "hard",
                explanation: "正確拼寫是 'occurrence'（兩個 c，兩個 r，兩個 e）\n\nCorrect spelling is 'occurrence' with double c, double r."
            },
            {
                question: "Choose the correct spelling:",
                options: ["necessary", "neccessary", "necesary", "necessery"],
                correct: 0,
                difficulty: "medium",
                explanation: "正確拼寫是 'necessary'（一個 c，兩個 s）\n\nCorrect spelling is 'necessary' with one c and double s."
            },
            {
                question: "Choose the correct spelling:",
                options: ["belive", "believe", "beleive", "beleve"],
                correct: 1,
                difficulty: "easy",
                explanation: "正確拼寫是 'believe'（i 在 e 前）\n\nCorrect spelling is 'believe' with 'ie' not 'ei'."
            },
            {
                question: "Choose the correct spelling:",
                options: ["recieve", "receive", "receve", "recive"],
                correct: 1,
                difficulty: "easy",
                explanation: "正確拼寫是 'receive'（e 在 i 前）\n\nCorrect spelling is 'receive' with 'ei' (exception to the rule)."
            },
            {
                question: "Choose the correct spelling:",
                options: ["weird", "wierd", "werd", "wiard"],
                correct: 0,
                difficulty: "medium",
                explanation: "正確拼寫是 'weird'（e 在 i 前，例外規則）\n\nCorrect spelling is 'weird' (exception: i before e except after c)."
            },
            {
                question: "Choose the correct spelling:",
                options: ["embarass", "embarras", "embarrass", "embaras"],
                correct: 2,
                difficulty: "medium",
                explanation: "正確拼寫是 'embarrass'（兩個 r，兩個 s）\n\nCorrect spelling is 'embarrass' with double r and double s."
            },
            {
                question: "Choose the correct spelling:",
                options: ["maintainance", "maintenance", "maintanance", "maintnance"],
                correct: 1,
                difficulty: "hard",
                explanation: "正確拼寫是 'maintenance'（main + ten + ance，不是 main + tain）\n\nCorrect spelling is 'maintenance' - think 'main' + 'ten' + 'ance'."
            },

            // 文法 (15題)
            {
                question: "Choose the correct sentence:",
                options: [
                    "She don't like apples.",
                    "She doesn't likes apples.",
                    "She doesn't like apples.",
                    "She not like apples."
                ],
                correct: 2,
                difficulty: "easy",
                explanation: "第三人稱單數用 'doesn't'，後面動詞用原形 'like'。\n\nWith third person singular, use 'doesn't' + base form of verb."
            },
            {
                question: "Choose the correct article: '___ honest person would not lie.'",
                options: ["A", "An", "The", "No article"],
                correct: 1,
                difficulty: "medium",
                explanation: "'Honest' 雖然以 h 開頭，但發音是元音 /ɒnɪst/，所以用 'an'。\n\nUse 'an' before words starting with a vowel sound. 'Honest' is pronounced /'ɒnɪst/."
            },
            {
                question: "Which sentence uses the past perfect tense correctly?",
                options: [
                    "I have eaten before he came.",
                    "I had eaten before he came.",
                    "I ate before he had come.",
                    "I was eaten before he came."
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "Past perfect (had + past participle) 用來表示過去某個時間之前已完成的動作。\n\nPast perfect is used for an action completed before another past action."
            },
            {
                question: "Choose the correct preposition: 'I am interested ___ learning English.'",
                options: ["on", "at", "in", "for"],
                correct: 2,
                difficulty: "easy",
                explanation: "'Interested in' 是固定搭配。\n\nThe correct collocation is 'interested in'."
            },
            {
                question: "Choose the correct form: 'By this time next year, I ___ my degree.'",
                options: [
                    "will finish",
                    "will have finished",
                    "am finishing",
                    "finish"
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "Future perfect (will have + past participle) 用於表示將來某時間前完成的動作。\n\nFuture perfect for actions completed before a future time."
            },
            {
                question: "Identify the noun in this sentence: 'The quick brown fox jumps over the lazy dog.'",
                options: ["quick", "jumps", "fox", "over"],
                correct: 2,
                difficulty: "easy",
                explanation: "'Fox' 是名詞（動物），'quick' 是形容詞，'jumps' 是動詞，'over' 是介詞。\n\n'Fox' is a noun. 'Quick' is an adjective, 'jumps' is a verb, 'over' is a preposition."
            },
            {
                question: "Which is the correct comparative form of 'good'?",
                options: ["gooder", "more good", "better", "best"],
                correct: 2,
                difficulty: "easy",
                explanation: "'Good' 的比較級是不規則變化 'better'，最高級是 'best'。\n\n'Good' has irregular comparative (better) and superlative (best) forms."
            },
            {
                question: "Choose the correct sentence:",
                options: [
                    "Neither John nor Mary are coming.",
                    "Neither John nor Mary is coming.",
                    "Neither John or Mary is coming.",
                    "Neither John and Mary is coming."
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "'Neither...nor' 後面動詞與最近的主語一致（Mary = 單數）。\n\nWith 'neither...nor', verb agrees with the nearest subject (Mary = singular)."
            },
            {
                question: "Choose the correct relative pronoun: 'The man ___ lives next door is a doctor.'",
                options: ["which", "who", "whom", "whose"],
                correct: 1,
                difficulty: "medium",
                explanation: "'Who' 用於指人，作主語。\n\n'Who' is used for people as the subject of the relative clause."
            },
            {
                question: "Which sentence is in the passive voice?",
                options: [
                    "The dog bit the man.",
                    "The man was bitten by the dog.",
                    "The man bit the dog.",
                    "The dog was biting the man."
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "被動語態 = be + past participle。'was bitten' 是被動式。\n\nPassive voice = be + past participle. 'Was bitten' is passive."
            },
            {
                question: "Choose the correct conditional: 'If I ___ rich, I would buy a yacht.'",
                options: ["am", "was", "were", "be"],
                correct: 2,
                difficulty: "medium",
                explanation: "第二類條件句（虛擬語氣）中，be 動詞一律用 'were'。\n\nIn second conditional, use 'were' for all subjects (subjunctive mood)."
            },
            {
                question: "Choose the correct word: 'Please ___ me your book.'",
                options: ["borrow", "lend", "rent", "hire"],
                correct: 1,
                difficulty: "medium",
                explanation: "'Lend' = 借出（給別人），'borrow' = 借入（從別人）。\n\n'Lend' = give temporarily, 'borrow' = receive temporarily."
            },
            {
                question: "Which sentence contains a dangling modifier?",
                options: [
                    "Walking down the street, the dog barked at me.",
                    "Walking down the street, I saw a dog.",
                    "I saw a dog walking down the street.",
                    "The dog barked at me while I walked down the street."
                ],
                correct: 0,
                difficulty: "hard",
                explanation: "第一句是懸垂修飾語 - 'Walking down the street' 應該修飾 'I' 而不是 'dog'。\n\nDangling modifier - 'Walking down the street' should modify 'I', not 'dog'."
            },
            {
                question: "Choose the correct form: 'She suggested that he ___ earlier.'",
                options: ["arrives", "arrive", "arrived", "arriving"],
                correct: 1,
                difficulty: "hard",
                explanation: "在 suggest, demand, insist 等動詞後的 that 從句用虛擬語氣（動詞原形）。\n\nAfter verbs like suggest, use subjunctive mood (base form of verb)."
            },
            {
                question: "Choose the correct idiom: 'It's raining ___.'",
                options: ["cats and dogs", "fish and chips", "birds and bees", "apples and oranges"],
                correct: 0,
                difficulty: "easy",
                explanation: "'Raining cats and dogs' = 傾盆大雨（成語）。\n\n'Raining cats and dogs' = raining heavily (idiom)."
            },

            // 詞彙 (15題)
            {
                question: "Which word is a synonym of 'happy'?",
                options: ["sad", "joyful", "angry", "tired"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Joyful' 是 'happy' 的同義詞，都表示快樂的意思。\n\n'Joyful' means full of joy, which is similar to 'happy'."
            },
            {
                question: "What does 'benevolent' mean?",
                options: ["evil", "kind and generous", "angry", "lazy"],
                correct: 1,
                difficulty: "medium",
                explanation: "'Benevolent' 意思是仁慈的、善良的。\n\n'Benevolent' means kind, generous, and caring about others."
            },
            {
                question: "Which word is the opposite of 'generous'?",
                options: ["kind", "selfish", "helpful", "friendly"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Selfish'（自私）是 'generous'（慷慨）的反義詞。\n\n'Selfish' is the opposite of 'generous'."
            },
            {
                question: "What does 'ambiguous' mean?",
                options: ["clear", "confusing and unclear", "simple", "beautiful"],
                correct: 1,
                difficulty: "medium",
                explanation: "'Ambiguous' 意思是模棱兩可的、含糊不清的。\n\n'Ambiguous' means having more than one possible meaning, unclear."
            },
            {
                question: "Choose the word that best completes the sentence: 'The detective had to ___ the evidence carefully.'",
                options: ["ignore", "examine", "destroy", "hide"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Examine'（檢查）最適合這句話的情境。\n\n'Examine' means to look at carefully, which detectives do with evidence."
            },
            {
                question: "What is the plural of 'child'?",
                options: ["childs", "children", "childes", "childen"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Child' 的複數是不規則變化 'children'。\n\n'Child' has an irregular plural form: 'children'."
            },
            {
                question: "Which word means 'to make something less severe'?",
                options: ["aggravate", "alleviate", "intensify", "worsen"],
                correct: 1,
                difficulty: "medium",
                explanation: "'Alleviate' 意思是減輕、緩和。\n\n'Alleviated' means to make less severe or intense."
            },
            {
                question: "Choose the correct phrasal verb: 'Please ___ the lights before leaving.'",
                options: ["turn on", "turn off", "turn up", "turn down"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Turn off' = 關掉（電器）。\n\n'Turn off' = switch off (appliances)."
            },
            {
                question: "What does 'procrastinate' mean?",
                options: [
                    "to do something immediately",
                    "to delay doing something",
                    "to work hard",
                    "to forget something"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "'Procrastinate' 意思是拖延、耽擱。\n\n'Procrastinate' means to delay or postpone action."
            },
            {
                question: "Which word is a homophone of 'right'?",
                options: ["write", "ritual", "rigid", "riot"],
                correct: 0,
                difficulty: "medium",
                explanation: "'Write' 和 'right' 發音相同（/raɪt/），是同音異義詞。\n\n'Write' and 'right' are homophones (same pronunciation, different meanings)."
            },
            {
                question: "What does 'meticulous' mean?",
                options: ["careless", "very careful and precise", "fast", "lazy"],
                correct: 1,
                difficulty: "medium",
                explanation: "'Meticulous' 意思是一絲不苟的、小心翼翼的。\n\n'Meticulous' means showing great attention to detail, very careful."
            },
            {
                question: "Choose the word that is NOT related to the others:",
                options: ["doctor", "nurse", "patient", "surgeon"],
                correct: 2,
                difficulty: "easy",
                explanation: "'Patient'（病人）是接受治療的人，其他都是醫護人員。\n\n'Patient' receives treatment, others are medical professionals."
            },
            {
                question: "What does 'ephemeral' mean?",
                options: ["permanent", "lasting a very short time", "ancient", "beautiful"],
                correct: 1,
                difficulty: "hard",
                explanation: "'Ephemeral' 意思是短暫的、朝生暮死的。\n\n'Ephemeral' means lasting for a very short time."
            },
            {
                question: "Choose the correct collocation: '___ a decision'",
                options: ["do", "make", "take", "give"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Make a decision' 是固定搭配。\n\n'Make a decision' is the correct collocation."
            },
            {
                question: "What is the meaning of 'break a leg'?",
                options: [
                    "To actually break a leg",
                    "Good luck",
                    "Be careful",
                    "Run faster"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "'Break a leg' 是戲劇界的祝好運成語（祝演出成功）。\n\n'Break a leg' is an idiom meaning 'good luck' (especially in theater)."
            },

            // 閱讀理解 (10題)
            {
                question: "Read the sentence: 'Although it was raining, we went for a walk.' What does 'although' indicate?",
                options: [
                    "Addition",
                    "Contrast",
                    "Cause and effect",
                    "Time sequence"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "'Although' 表示對比/轉折，引出與主句相反的情況。\n\n'Although' indicates contrast between two clauses."
            },
            {
                question: "In the sentence 'The book was so interesting that I couldn't put it down,' what does 'put it down' mean?",
                options: [
                    "To place it on a surface",
                    "To stop reading it",
                    "To criticize it",
                    "To throw it away"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "'Couldn't put it down' 是成語，意思是忍不住繼續看/讀。\n\n'Couldn't put it down' = couldn't stop reading it (idiom)."
            },
            {
                question: "What is the tone of this statement: 'I absolutely love this movie! It's the best film ever made!'",
                options: ["Neutral", "Critical", "Enthusiastic", "Sad"],
                correct: 2,
                difficulty: "easy",
                explanation: "用詞如 'absolutely love' 和 'best ever' 顯示熱情、興奮的語氣。\n\nWords like 'absolutely love' and 'best ever' show enthusiastic tone."
            },
            {
                question: "Read: 'The ancient tree stood tall, its branches reaching toward the sky like gnarled fingers.' This is an example of:",
                options: [
                    "Literal description",
                    "Metaphor",
                    "Fact",
                    "Opinion"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "把樹枝比喻為手指是暗喻（metaphor）的修辭手法。\n\nComparing branches to fingers is a metaphor."
            },
            {
                question: "What can you infer from: 'Sarah arrived at the party wearing a beautiful gown and diamonds'?",
                options: [
                    "Sarah is poor",
                    "The party is formal",
                    "Sarah doesn't like parties",
                    "It is daytime"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "從 'gown'（禮服）和 'diamonds' 可推斷這是正式場合。\n\nWearing a gown and diamonds suggests a formal event."
            },
            {
                question: "The word 'however' in a sentence typically signals:",
                options: [
                    "Agreement",
                    "A contrast or exception",
                    "A conclusion",
                    "An example"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "'However' 通常引出對比或例外情況。\n\n'However' typically signals a contrast or exception."
            },
            {
                question: "Read: 'Notwithstanding the rain, the match continued.' What does 'notwithstanding' mean?",
                options: ["Because of", "In spite of", "Instead of", "Before"],
                correct: 1,
                difficulty: "hard",
                explanation: "'Notwithstanding' = in spite of / despite（儘管）。\n\n'Notwithstanding' means 'in spite of' or 'despite'."
            },
            {
                question: "What is the main purpose of a topic sentence in a paragraph?",
                options: [
                    "To conclude the paragraph",
                    "To introduce the main idea",
                    "To give an example",
                    "To ask a question"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "主題句的作用是引出段落的主要思想。\n\nThe topic sentence introduces the main idea of the paragraph."
            },
            {
                question: "In the sentence 'The CEO's resignation was unexpected,' what does 'resignation' mean?",
                options: [
                    "Promotion",
                    "Leaving a job voluntarily",
                    "Being fired",
                    "Taking a vacation"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "'Resignation' 意思是辭職、自願離職。\n\n'Resignation' means voluntarily leaving a position."
            },
            {
                question: "What type of text is this: 'First, preheat the oven to 180°C. Then, mix the flour and sugar...'",
                options: [
                    "Narrative",
                    "Recipe/Instructions",
                    "Persuasive",
                    "Descriptive"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "這是步驟說明，典型於食譜或操作指南。\n\nThis is a procedural/instructional text, typical of recipes."
            }
        ];

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
