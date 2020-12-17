
// 全部名單
let allEmpBtn = document.querySelector('#all-emp-btn');
allEmpBtn.addEventListener('click', function () {
    displayEmployees(employees);
});

//搜尋名單
let searchBox = document.querySelector('#search-box'); //搜尋Input
let resultsDiv = document.querySelector('#results');//顯示result文字
let searchEmpBtn = document.querySelector('#search-btn');//搜尋按鈕
searchEmpBtn.addEventListener('click', function () {
    let selectValue = document.getElementById("searchBy").value;

    if (selectValue === "searchByName") { //搜尋姓名
        let textEntered = searchBox.value;

        if (textEntered.length > 0) {

            let targetEmployees = employees.filter((employee) => {
                return employee.Name.toUpperCase().startsWith(textEntered.toUpperCase());
            });

            //console.log("targetEmployees", targetEmployees);
            displayEmployees(targetEmployees); // 載入表格
            //載入result 筆數
            let noOfRecords = targetEmployees.length;
            resultsDiv.innerHTML = `<p>The Results Found <span>${noOfRecords}</span></p>`;
        }
        else {
            document.querySelector('#table_body').innerHTML = '';
            resultsDiv.innerHTML = '';
        }
    } else if (selectValue === "searchByDepartment") { //搜尋科系
        let textEntered = searchBox.value;
        if (textEntered.length > 0) {
            let targetEmployees = employees.filter((employee) => {
                return employee.department.toUpperCase().startsWith(textEntered.toUpperCase());
            });

            displayEmployees(targetEmployees);// 載入表格
            //載入result 筆數
            let noOfRecords = targetEmployees.length;
            resultsDiv.innerHTML = `<p>The Results Found <span>${noOfRecords}</span></p>`;
        }
        else {
            document.querySelector('#table_body').innerHTML = '';
            resultsDiv.innerHTML = '';
        }
    }
});

//回到頂端觸發
let BackTopBtn = document.querySelector('#backTop'); //回到頂端btn
BackTopBtn.addEventListener('click', function () {
    topFunction();
});

// 回到頂端重置scrollTop這個變數的值
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 載入表格
let displayEmployees = (employees) => {
    let tableBody = document.querySelector('#table_body');
    let tableRow = '';
    //console.log("employees", employees);
    for (let employee of employees) {
        tableRow += `<tr>
                        <td>${employee.id}</td> 
                        <td>${employee.EName}</td>                      
                        <td>${employee.team}</td>
                        <td>${employee.school}</td>
                        <td>${employee.department}</td>    
                        <td>${employee.workshopcourse}</td>
                    </tr>`;
    }

    tableBody.innerHTML = tableRow;
};

//預載資料
var employees =
    [{ "id": 1, "Name": "周家卉", "EName":"周○卉", "team": "第一組", "school": "屏東大學", "department": "文創", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 2, "Name": "王家薇", "EName": "王○薇", "team": "第一組", "school": "屏東大學", "department": "心輔", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 3, "Name": "林容伃", "EName": "林○伃", "team": "第一組", "school": "屏東大學", "department": "文創", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 4, "Name": "顏秉誠", "EName": "顏○誠", "team": "第一組", "school": "屏東大學", "department": "文創", "workshopcourse": "如何打造品牌思維？" },
    { "id": 5, "Name": "葉利生", "EName": "葉○生", "team": "第一組", "school": "屏東大學", "department": "文創", "workshopcourse": "" },
    { "id": 6, "Name": "蘇意玲", "EName": "蘇○玲", "team": "第一組", "school": "屏東大學", "department": "文創", "workshopcourse": "如何打造品牌思維？" },
    { "id": 7, "Name": "陳欣妤", "EName": "陳○妤", "team": "第一組", "school": "屏東大學", "department": "英語", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 8, "Name": "林依珊", "EName": "林○珊", "team": "第二組", "school": "屏東大學", "department": "心輔", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 9, "Name": "郭怡萱", "EName": "郭○萱", "team": "第二組", "school": "屏東大學", "department": "心輔", "workshopcourse": "如何打造品牌思維？" },
    { "id": 10, "Name": "吳婕晞", "EName": "吳○晞", "team": "第二組", "school": "屏東大學", "department": "幼教", "workshopcourse": "如何打造品牌思維？" },
    { "id": 11, "Name": "劉芷君", "EName": "劉○君", "team": "第二組", "school": "屏東大學", "department": "幼教", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 12, "Name": "杜函穎", "EName": "杜○穎", "team": "第二組", "school": "屏東大學", "department": "商管", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 13, "Name": "鄭晴晴", "EName": "鄭○晴", "team": "第二組", "school": "屏東大學", "department": "國貿", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 14, "Name": "林羿妏", "EName": "林○妏", "team": "第二組", "school": "屏東大學", "department": "國貿", "workshopcourse": "" },
    { "id": 15, "Name": "黃愉萱", "EName": "黃○萱", "team": "第三組", "school": "大仁科技大學", "department": "社工", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 16, "Name": "呂明諺", "EName": "呂○諺", "team": "第三組", "school": "屏東大學", "department": "原專", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 17, "Name": "田寶祥", "EName": "田○祥", "team": "第三組", "school": "屏東大學", "department": "原專", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 18, "Name": "謝皓宇", "EName": "謝○宇", "team": "第三組", "school": "屏東大學", "department": "原專", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 19, "Name": "沈月紅", "EName": "沈○紅", "team": "第三組", "school": "義守大學", "department": "財金", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 20, "Name": "沈千惠", "EName": "沈○惠", "team": "第三組", "school": "南臺科大", "department": "應英", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 21, "Name": "駱家彥", "EName": "駱○彥", "team": "第三組", "school": "大仁科技大學", "department": "護理", "workshopcourse": "如何打造品牌思維？" },
    { "id": 22, "Name": "喻讌婷", "EName": "喻○婷", "team": "第四組", "school": "文藻外語大學", "department": "日文", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 23, "Name": "寒茹鈺", "EName": "寒○鈺", "team": "第四組", "school": "屏東大學", "department": "文創", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 24, "Name": "黃培芸", "EName": "黃○芸", "team": "第四組", "school": "屏東大學", "department": "文創", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 25, "Name": "洪品涵", "EName": "洪○涵", "team": "第四組", "school": "屏東大學", "department": "文創", "workshopcourse": "如何打造品牌思維？" },
    { "id": 26, "Name": "黃巧昀", "EName": "黃○昀", "team": "第四組", "school": "屏東大學", "department": "文創", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 27, "Name": "許家寧", "EName": "許○寧", "team": "第四組", "school": "屏東大學", "department": "英語", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 28, "Name": "林琨富", "EName": "林○富", "team": "第四組", "school": "靜宜大學", "department": "日文", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 29, "Name": "葛恩霈", "EName": "葛○霈", "team": "第五組", "school": "長榮大學", "department": "大傳", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 30, "Name": "陳譯陞", "EName": "陳○陞", "team": "第五組", "school": "屏東大學", "department": "文創", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 31, "Name": "黃柏諺", "EName": "黃○諺", "team": "第五組", "school": "長榮大學", "department": "醫學社會", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 32, "Name": "潘語心", "EName": "潘○心", "team": "第五組", "school": "屏東大學", "department": "中文", "workshopcourse": "如何打造品牌思維？" },
    { "id": 33, "Name": "黃仲瑜", "EName": "黃○瑜", "team": "第五組", "school": "南實踐大學", "department": "時尚設計", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 34, "Name": "蘇子淳", "EName": "蘇○淳", "team": "第五組", "school": "台南應用科技大學", "department": "美術", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 35, "Name": "陳李惟惠", "EName": "陳李○惠", "team": "第五組", "school": "屏東大學", "department": "視覺藝術", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 36, "Name": "楊淯涵", "EName": "楊○涵", "team": "第六組", "school": "靜宜大學", "department": "英文", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 37, "Name": "吳欣諭", "EName": "吳○諭", "team": "第六組", "school": "大葉大學", "department": "造藝", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 38, "Name": "林彥汝", "EName": "林○汝", "team": "第六組", "school": "屏東大學", "department": "文創", "workshopcourse": "如何打造品牌思維？" },
    { "id": 39, "Name": "洪舒絹", "EName": "洪○絹", "team": "第六組", "school": "屏東大學", "department": "文創", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 40, "Name": "彭筠淇", "EName": "彭○淇", "team": "第六組", "school": "屏東大學", "department": "文創", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 41, "Name": "鄭至芸", "EName": "鄭○芸", "team": "第六組", "school": "屏東大學", "department": "英語", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 42, "Name": "邵昱寧", "EName": "邵○寧", "team": "第六組", "school": "屏東大學", "department": "英語", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 43, "Name": "林佳恩", "EName": "林○恩", "team": "第七組", "school": "屏東科技大學", "department": "社工", "workshopcourse": "如何打造品牌思維？" },
    { "id": 44, "Name": "洪郁雯", "EName": "洪○雯", "team": "第七組", "school": "屏東科技大學", "department": "社工", "workshopcourse": "如何打造品牌思維？" },
    { "id": 45, "Name": "陳俐涵", "EName": "陳○涵", "team": "第七組", "school": "屏東科技大學", "department": "社工", "workshopcourse": "如何打造品牌思維？" },
    { "id": 46, "Name": "陳怡君", "EName": "陳○君", "team": "第七組", "school": "屏東科技大學", "department": "社工", "workshopcourse": "如何打造品牌思維？" },
    { "id": 47, "Name": "曾上秦", "EName": "曾○秦", "team": "第七組", "school": "屏東大學", "department": "心輔", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 48, "Name": "陳苙苓", "EName": "陳○苓", "team": "第七組", "school": "屏東大學", "department": "心輔", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 49, "Name": "許凱翔", "EName": "許○翔", "team": "第八組", "school": "屏東大學", "department": "資管", "workshopcourse": "如何打造品牌思維？" },
    { "id": 50, "Name": "陳勁文", "EName": "陳○文", "team": "第八組", "school": "屏東大學", "department": "心輔", "workshopcourse": "如何打造品牌思維？" },
    { "id": 51, "Name": "鄭宇承", "EName": "鄭○承", "team": "第八組", "school": "屏東大學", "department": "心輔", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 52, "Name": "蕭心柔", "EName": "蕭○柔", "team": "第八組", "school": "屏東大學", "department": "文創", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 53, "Name": "賴奕勳", "EName": "賴○勳", "team": "第八組", "school": "屏東大學", "department": "資科", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 54, "Name": "林妙怡", "EName": "林○怡", "team": "第八組", "school": "屏東大學", "department": "資管", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 55, "Name": "鍾麗華", "EName": "鍾○華", "team": "第八組", "school": "屏東大學", "department": "機器人", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 56, "Name": "王焌豪", "EName": "王○豪", "team": "第九組", "school": "屏東大學", "department": "電通", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 57, "Name": "康軒豪", "EName": "康○豪", "team": "第九組", "school": "屏東大學", "department": "國貿", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 58, "Name": "蕭佑恩", "EName": "蕭○恩", "team": "第九組", "school": "屏東大學", "department": "電通", "workshopcourse": "如何打造品牌思維？" },
    { "id": 59, "Name": "吳弘淵", "EName": "吳○淵", "team": "第九組", "school": "屏東大學", "department": "電通", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 60, "Name": "楊承諺", "EName": "楊○諺", "team": "第九組", "school": "屏東大學", "department": "應用物理系", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 61, "Name": "林瑞趂", "EName": "林○趂", "team": "第九組", "school": "屏東大學", "department": "應用物理系", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 62, "Name": "鍾沛均", "EName": "鍾○均", "team": "第九組", "school": "重考生", "department": "", "workshopcourse": "如何打造品牌思維？" },
    { "id": 63, "Name": "徐加恩", "EName": "徐○恩", "team": "第十組", "school": "嘉南藥理大學", "department": "粧品", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 64, "Name": "張嘉珮", "EName": "張○珮", "team": "第十組", "school": "北京中醫藥大學", "department": "", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 65, "Name": "楊睿桐", "EName": "楊○桐", "team": "第十組", "school": "重考生", "department": "", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 66, "Name": "蘇余評", "EName": "蘇○評", "team": "第十組", "school": "屏東大學", "department": "教育", "workshopcourse": "如何打造品牌思維？" },
    { "id": 67, "Name": "林姵呈", "EName": "林○呈", "team": "第十組", "school": "屏東大學", "department": "教育", "workshopcourse": "如何打造品牌思維？" },
    { "id": 68, "Name": "孫意婷", "EName": "孫○婷", "team": "第十組", "school": "屏東大學", "department": "財金", "workshopcourse": "如何打造品牌思維？" },
    { "id": 69, "Name": "李庭文", "EName": "李○文", "team": "第十組", "school": "南華大學", "department": "幼教", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 70, "Name": "施宇倩", "EName": "施○倩", "team": "第十一組", "school": "屏東科技大學", "department": "獸醫", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 71, "Name": "陳永翔", "EName": "陳○翔", "team": "第十一組", "school": "屏東科技大學", "department": "車輛", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 72, "Name": "陳閱其", "EName": "陳○其", "team": "第十一組", "school": "屏東科技大學", "department": "科技農業", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 73, "Name": "王嬿琇", "EName": "王○琇", "team": "第十一組", "school": "屏東科技大學", "department": "食品", "workshopcourse": "" },
    { "id": 74, "Name": "林佳祈", "EName": "林○祈", "team": "第十一組", "school": "屏東科技大學", "department": "食品", "workshopcourse": "" },
    { "id": 75, "Name": "吳沛蓉", "EName": "吳○蓉", "team": "第十一組", "school": "屏東科技大學", "department": "食品(進修部)", "workshopcourse": "" },
    { "id": 76, "Name": "林育德", "EName": "林○德", "team": "第十一組", "school": "屏東大學", "department": "教育", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 77, "Name": "吳羿潔", "EName": "吳○潔", "team": "第十一組", "school": "屏東大學", "department": "教育", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 78, "Name": "喻讌棻", "EName": "喻○棻", "team": "第十二組", "school": "台南應用科技大學", "department": "餐飲", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 79, "Name": "劉昱均", "EName": "劉○均", "team": "第十二組", "school": "正修科技大學", "department": "機械", "workshopcourse": "如何打造品牌思維？" },
    { "id": 80, "Name": "鄭文瑄", "EName": "鄭○瑄", "team": "第十二組", "school": "正修科技大學", "department": "機械", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 81, "Name": "郭旭弘", "EName": "郭○弘", "team": "第十二組", "school": "高雄大學", "department": "亞太工商管理", "workshopcourse": "腦力激盪(brainstorming)－設計思考" },
    { "id": 82, "Name": "陳以琳", "EName": "陳○琳", "team": "第十二組", "school": "育達科技大學", "department": "觀休", "workshopcourse": "如何打造品牌思維？" },
    { "id": 83, "Name": "楊璟允", "EName": "楊○允", "team": "第十二組", "school": "重考生", "department": "普通", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 84, "Name": "劉穎琳", "EName": "劉○琳", "team": "第十三組", "school": "屏東科技大學", "department": "食品", "workshopcourse": "如何打造品牌思維？" },
    { "id": 85, "Name": "郭怡君", "EName": "郭○君", "team": "第十三組", "school": "屏東大學", "department": "教育", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 86, "Name": "賴佩琳", "EName": "賴○琳", "team": "第十三組", "school": "屏東大學", "department": "教育", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 87, "Name": "陳映綺", "EName": "陳○綺", "team": "第十三組", "school": "屏東科技大學", "department": "獸醫", "workshopcourse": "手機APP質感修圖攻略" },
    { "id": 88, "Name": "葉紜而", "EName": "葉○而", "team": "第十三組", "school": "美和科技大學", "department": "社工", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" },
    { "id": 89, "Name": "黃美珊", "EName": "黃○珊", "team": "第十三組", "school": "美和科技大學", "department": "食品", "workshopcourse": "如何打造品牌思維？" },
    { "id": 90, "Name": "李詩媛", "EName": "李○媛", "team": "第十三組", "school": "屏東大學", "department": "社發", "workshopcourse": "我要的IG濾鏡特效自己做！Spark AR基礎教學" }];


//進入畫面，預載表格
function defaultLoadingFunction() {
    displayEmployees(employees);
}
defaultLoadingFunction();