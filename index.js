/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



function createEmployeeRecord(arr){
    let record;
    return record = {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }

  function createEmployeeRecords(arrays){ 
    return arrays.map(createEmployeeRecord);
  }

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

//function hoursWorkedOnDate(employeeRec, dateStamp){
//    const timeIn = employeeRec.timeInEvents.find((e) => 
//    e.date === dateStamp).hour
//    const timeOut = employeeRec.timeOutEvents.find((e) => 
//    e.date === dateStamp).hour
//    return (timeOut - timeIn)/100
//  }
let hoursWorkedOnDate = function(dateStamp){
    const timeIn = this.timeInEvents.find((e) => 
    e.date === dateStamp).hour;
    const timeOut = this.timeOutEvents.find((e) => 
    e.date === dateStamp).hour
    return (timeOut - timeIn)/100
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}