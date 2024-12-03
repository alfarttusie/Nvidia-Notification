function showNotification(Text) {
  const Holder = document.createElement("div");
  Holder.classList.add("Notify");
  const Secondary = document.createElement("div");
  Secondary.classList.add("secondary");
  const span = document.createElement("span");
  span.classList.add("Text");
  Holder.appendChild(Secondary);
  Secondary.appendChild(span);
  document.body.appendChild(Holder);
  Holder.classList.add("active");
  span.innerText = Text;
  setTimeout(() => {
    Holder.classList.remove("active");
    Holder.remove();
  }, 2500);
}
