function findMatching(drivers, str) {
    const lowerCaseString = str.toLowerCase()
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase().includes(lowerCaseString))
    return matchingDrivers
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(name => name.startsWith(string))
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}