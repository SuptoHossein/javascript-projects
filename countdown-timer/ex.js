const newYearDate = new Date('1 Jan 2023');
const currentDate = new Date();

// time difference
const diff = Math.abs(newYearDate.getTime() - currentDate.getTime())

// days difference
const diffDays = Math.ceil(diff / (1000 * 3600 * 24))

console.log(diffDays)