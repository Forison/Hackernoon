const timeConv= (time) => {
  const MONTHS = ["January", "Febuary", "March"];
  console.log("hello")
  const pub = new Date(time * 1000);
  const month = pub.getUTCMonth();
  const date = pub.getDate();
  const year = pub.getFullYear();
  return `${MONTHS[month]} ${date} ${year}`;
}
export default timeConv;