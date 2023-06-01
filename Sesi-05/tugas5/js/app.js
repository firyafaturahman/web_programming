let list = document.getElementById("list");

const show = () => {
  list.innerHTML = "";
  const messages = document.getElementById("message").value;
  console.log(messages);
  const times = document.getElementById("times").value;
  console.log(times);

  let count = 0;
  while (count < times) {
    // console.log(messages);
    for (count; count < times; count++) {
      list.innerHTML = `${list.innerHTML} <li> ${messages} </li>`;
    }
  }
};
