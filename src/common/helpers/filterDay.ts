import { TimeDay } from 'common/enums/time-day.enum';

const compareFunc = () => {
  let isChange = '';
  return (args: any) => {
    if (args !== isChange) {
      isChange = args;
      console.log('isChange');
      return isChange;
    }
    console.log('isNotChange');
    return false;
  };
};

const anonymCallback = compareFunc();

export const delay = () => {
  const getTime: Date = new Date();
  const time: string = `${getTime.getHours()}.${getTime.getMinutes()}`;
  const value = reducerTime(time);
  const data = anonymCallback(value);
  return data;
};

const reducerTime = (date: string) => {
  const time = Number(date);
  if (time >= 6.0 && time <= 11.59) {
    return TimeDay.morning;
  }
  if (time >= 12.0 && time <= 17.59) {
    return TimeDay.afternoon;
  }
  if (time >= 18.0 && time <= 23.59) {
    return TimeDay.evening;
  }
  return TimeDay.night;
};
