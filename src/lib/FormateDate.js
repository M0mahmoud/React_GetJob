function formatTimestamp(timestamp) {
  const dateObject = new Date(timestamp);
  const timeOptions = { hour: "numeric", minute: "numeric" };
  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    dateObject
  );

  const dateOptions = { day: "numeric", month: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    dateObject
  );

  return `${formattedTime} ${formattedDate}`;
}
export default formatTimestamp;
