function saturdayFun(action = "roller-skate") {
    return (`This Saturday, I want to ${action}!`);
  }
  
saturdayFun();
saturdayFun("bathe my dog")

function mondayWork(activity="go to the office"){
    return (`This Monday, I will ${activity}.`)
}
mondayWork()
mondayWork("work from home")


function wrapAdjective(string="*") {
    return function (word = "special") {
      return `You are ${string}${word}${string}!`;
    };
  }
  
wrapAdjective()(word="hard worker");

