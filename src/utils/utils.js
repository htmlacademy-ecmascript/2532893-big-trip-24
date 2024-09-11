import dayjs from 'dayjs';
import { DurationUnitConversion, DurationUnit } from './constants';

const { MILLISECONDS_TO_SECONDS: SEC, SECONDS_TO_MINUTES: MIN, MINUTES_TO_HOURS: HOURS, HOURS_TO_DAYS: DAYS, MILLISECONDS_TO_HOURS: MHOURS, MILLISECONDS_TO_DAYS: MDAYS, DAYS_TO_MONTHS: MONTHS } = DurationUnitConversion;

const { MINUTES: MINS, HOURS: HRS, DAYS: DAY } = DurationUnit;

function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const ButtonsTitles = {
  'DELETE': 'Delete',
  'CANCEL': 'Cancel',
};

export default function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomNum = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getUniqueID(startID) {
  let uniqueID = startID;
  return function () {
    uniqueID += 1;
    return uniqueID;
  };
}

function generateRandomDate(from, to) {
  return new Date(
    from.getTime() +
    Math.random() * (to.getTime() - from.getTime()),
  );
}

function humanizeEventDate(eventDate) {
  return eventDate ? dayjs(eventDate).format('DD/MM/YYYY hh:mm') : '';
}

function humanizeDateAttribute(eventDate) {
  return eventDate ? dayjs(eventDate).format('YYYY-MM-DDThh:mm') : '';
}

function getTimeDiff(startDate, endDate) {
  const difference = endDate - startDate;
  const seconds = Math.floor(difference / SEC);
  const minutes = Math.floor(seconds / MIN);
  const hours = Math.floor(minutes / HOURS);
  const days = Math.floor(hours / DAYS);

  return {
    difference: difference,
    days: days % MONTHS,
    hours: hours % DAYS,
    minutes: minutes % HOURS,
  };
}

function getDuration({ difference, days, hours, minutes }) {
  switch (true) {
    case (difference < MHOURS):
      return `${minutes}${MINS}`;
      break;
    case (difference >= MHOURS && difference < MDAYS):
      return `${hours}${HRS} ${minutes}${MINS}`;
      break;
    case (difference >= MDAYS):
      return `${days}${DAY} ${hours}${HRS} ${minutes}${MINS}`;
      break;
    default:
      return '';
      break;
  }
}

export { capitalizeFirstLetter, ButtonsTitles, getRandomNum, getUniqueID, getRandomArrayElement, generateRandomDate, getTimeDiff, getDuration, humanizeEventDate, humanizeDateAttribute };
