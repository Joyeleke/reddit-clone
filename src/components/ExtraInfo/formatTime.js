import { differenceInHours, differenceInDays } from 'date-fns';

function timeAgo(timestamp) {
    const currentDate = new Date();
    const date = new Date(timestamp * 1000); 
  
    let time;
    const hoursAgo = differenceInHours(currentDate, date);
  
    if (hoursAgo < 24) {
      time = `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    } else {
      const daysAgo = differenceInDays(currentDate, date);
      time = `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
    }
  
    return time;
  }
  
  export { timeAgo };