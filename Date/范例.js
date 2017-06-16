//写一个函数getChIntv，获取从当前时间到指定日期的间隔时间

function getChIntv(timeStr) {
    var days = 1000 * 60 * 60 * 24
    var hours = 1000 * 60 * 60
    var minutes = 1000 * 60
    var second = 1000
    var end = new Date(timeStr).getTime()
    var strt = new Date().getTime()
    var offsetTime = end - strt
    var getDays = parseInt(offsetTime / days)
    var getHours = parseInt((offsetTime % days) / hours)
    var getMinutes = parseInt(offsetTime % days % hours / minutes)
    var getSecond = parseInt(offsetTime % days % hours % minutes / second)
    var abc = ('相差' + getDays + '天' + getHours + '小时' + getMinutes + '分钟' + getSecond + '秒')
    return abc
}

var str = getChIntv("2018-02-08");
console.log(str);


//把hh-mm-dd格式数字日期改成中文日期

function getChsDate(str) {
    var dateArr = str.split('-')
    var years = dateArr[0]
    var months = dateArr[1]
    var days = dateArr[2]
    var dict = ["零","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十","三十一"]
    var chYears = dict[years[0]] + dict[years[1]] + dict[years[2]] + dict[years[3]] + '年'
    var chMonths = dict[parseInt(months)] + '月'
    var chDays = dict[parseInt(days)] + '日'
    var chDate = chYears + chMonths + chDays
    return chDate
}

var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日



/*写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

刚刚（ t 距当前时间不到1分钟时间间隔）
3分钟前 (t距当前时间大于等于1分钟，小于1小时)
8小时前 (t 距离当前时间大于等于1小时，小于24小时)
3天前 (t 距离当前时间大于等于24小时，小于30天)
2个月前 (t 距离当前时间大于等于30天小于12个月)
8年前 (t 距离当前时间大于等于12个月)*/

function friendlyDate(time){
    var now = new Date().getTime()
    var offsetTime = parseInt((now - time) /1000/60)
    if(offsetTime < 1){
        return '刚刚'
    }else if(1 <= offsetTime&&offsetTime < 60){
        return '3分钟前'
    }else if(60 <= offsetTime&&offsetTime < 24*60){
        return '8小时前'
    }else if(24*60 <= offsetTime&&offsetTime < 24*60*30){
        return '3天前'
    }else if(24*60*30 <= offsetTime&&offsetTime < 24*60*30*12){
        return '2个月前'
    }else if(24*60*30*12 <= offsetTime){
        return '8年前'
    }
}
var str = friendlyDate( '1484286699422' ) //  1分钟前
var str2 = friendlyDate('1483941245793') //4天前
