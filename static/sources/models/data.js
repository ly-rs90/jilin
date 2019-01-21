let getXCoording = function (num) {
    let n = num || 96;
    let x = [];
    let nowBegin = new Date(new Date().toLocaleDateString()).getTime()/1000;
    let splitSec = 24*3600/n;
    for (let i = 0; i < n; i++) {
        let temp = nowBegin + splitSec * i;
        let t = new Date(temp*1000);
        let hour = t.getHours();
        let minute = t.getMinutes();
        if (minute < 10) minute = "0" + minute;
        x.push(hour + ":" + minute);
    }
    return x;
};
export const option1 = {
    title: {text: "新能源机组总和"},
    grid: {x: 60, y: 60, x2: 50, y2: 40},
    legend: {top: 20, data: ["优化设定值", "预测均值", "计划区间上限", "计划区间下限"]},
    tooltip: {trigger: "axis"},
    xAxis: {name: "时间", data: getXCoording(), boundaryGap: false, splitLine: {interval: 3}},
    yAxis: [{name: "kW", nameGap: 8}, {}],
    series: [
        {
            name: "优化设定值",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "预测均值",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "计划区间上限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "计划区间下限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        }
    ]
};
export const option2 = {
    title: {text: "传统机组总和"},
    grid: {x: 60, y: 60, x2: 50, y2: 40},
    legend: {top: 20, data: ["优化设定值", "计划区间上限", "计划区间下限"]},
    tooltip: {trigger: "axis"},
    xAxis: {name: "时间", data: getXCoording(), boundaryGap: false},
    yAxis: [{name: "kW", nameGap: 8}, {}],
    series: [
        {
            name: "优化设定值",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "计划区间上限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "计划区间下限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        }
    ]
};
export const option3 = {
    title: {text: "监视断面"},
    grid: {x: 60, y: 60, x2: 50, y2: 40},
    legend: {top: 20, data: ["优化设定值", "计划区间上限", "计划区间下限", "上限", "下限"]},
    tooltip: {trigger: "axis"},
    xAxis: {name: "时间", data: getXCoording(), boundaryGap: false},
    yAxis: [{name: "kW", nameGap: 8}, {}],
    series: [
        {
            name: "优化设定值",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "计划区间上限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "计划区间下限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "上限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        },
        {
            name: "下限",
            type: "line",
            lineStyle: {width: 3},
            data: []
        }
    ]
};

export const readData = function (date, type, name) {
    let p = {date: date, type: type};
    if(name) p["name"] = name;
    return webix.ajax().post("/riqian", p);
};