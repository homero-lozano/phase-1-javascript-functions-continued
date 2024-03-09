function saturdayFun(fun = 'roller-skate') {
return (`This Saturday, I want to ${fun}!`)
}
saturdayFun() 
const mondayWork = function (work = 'go to the office') {
    return (`This Monday, I will ${work}.`)
}
mondayWork() 
function wrapAdjective(result = '*') { 
    return function (emphatic = 'a hard worker') {
        return (`You are ${result}${emphatic}${result}!`);
    } 
}
wrapAdjective() 

