const start = document.getElementById("start_date");
const end = document.getElementById("end_date");
const today = new Date().toISOString().split("T")[0];

start.value = today;
start.min = today;

const tomorrowDate = () => {
  let day = new Date(today);
  day.setDate(day.getDate() + 1);
  let tomorrow = day.toISOString().split("T")[0];
  end.min = tomorrow;
  end.value = tomorrow;
};
tomorrowDate();

start.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() + 1);
  let tomorrow = day.toISOString().split("T")[0];
  end.min = tomorrow;
});

end.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() - 1);
  let yesterday = day.toISOString().split("T")[0];
  start.max = yesterday;
});

const bookingTotal = () => {
  let date1 = new Date(start.value);
  let date2 = new Date(end.value);
  let diffTime = Math.abs(date2 - date1);

  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let trip = document.getElementById("trip");
  let passenger = document.getElementById("passenger");
  let totalPrice = trip.value * passenger.value;
  document.getElementById("nightPrice").innerHTML = totalPrice;

  let total = diffDays * totalPrice;
  document.getElementById("total").innerHTML = total;
};
start.addEventListener("change", () => bookingTotal());
end.addEventListener("change", () => bookingTotal());
trip.addEventListener("change", () => bookingTotal());
passenger.addEventListener("change", () => bookingTotal());

bookingTotal();
