export default function daysToXmas(date) {  
  if(date instanceof Date) {
    const CHRISTMAS_DATE = new Date("Dec 25, 2021")
    const DAY_AS_MILLISECONDS = 86400000;
    date = date.setHours(0, 0, 0, 0)

    const diffMilliseconds = CHRISTMAS_DATE - date
    
    return diffMilliseconds / DAY_AS_MILLISECONDS
  }
  return daysToXmas(new Date(date))
}