function formatDate(timestamp: Date, isNumbers = false, includeYear = true) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: isNumbers ? "numeric" : "short",
    day: "numeric",
    year: includeYear ? "numeric" : undefined,
  });
}

function formatTime(timestamp: Date) {
  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}

function toDatetimeLocal(timestamp: Date) {
  var date = timestamp,
    ten = function (i: any) {
      return (i < 10 ? "0" : "") + i;
    },
    YYYY = date.getFullYear(),
    MM = ten(date.getMonth() + 1),
    DD = ten(date.getDate()),
    HH = ten(date.getHours()),
    II = ten(date.getMinutes()),
    SS = ten(date.getSeconds());
  return YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + II + ":" + SS;
}

function dateInput(timestamp: Date) {
  var date = timestamp,
    ten = function (i: any) {
      return (i < 10 ? "0" : "") + i;
    },
    YYYY = date.getFullYear(),
    MM = ten(date.getMonth() + 1),
    DD = ten(date.getDate()),
    HH = ten(date.getHours()),
    II = ten(date.getMinutes()),
    SS = ten(date.getSeconds());
  return YYYY + "-" + MM + "-" + DD;
}

const dateService = {
  format: {
    date: formatDate,
    time: formatTime,
    toDateTime: toDatetimeLocal,
    toDateInput: dateInput,
  },
};

export default dateService;
