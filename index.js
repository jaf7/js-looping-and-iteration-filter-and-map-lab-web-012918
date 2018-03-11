function driversWithRevenueOver(drivers, num) {
  return drivers.filter(function(driver) {
    return driver['revenue'] > num;
  });
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(function(driver) {
    return driver['name'];
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    for (const attribute in driver) {
      if (driver[attribute] === obj[attribute]) {
        return true;
      }
    }
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver) {
    return driver['name'];
  });
}
