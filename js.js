async function showNotification(message) {
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  try {
    message = message === null ? "رسالة فارغة" : message;
    let notificationHolder = document.querySelector(".Notify");
    let secondaryText = notificationHolder.querySelector(".secondary");
    let messageText = notificationHolder.querySelector(".Text");

    notificationHolder.style.width = "240px";
    await delay(250).then();
    secondaryText.style.width = "95%";
    await delay(250).then();
    await delay(150).then();
    messageText.textContent = message;
    await delay(500).then();
    messageText.textContent = "";
    secondaryText.style.width = "0px";
    await delay(250).then();
    notificationHolder.style.width = "0px";
  } catch (error) {
    console.log(`Tools -> showNotification -> ${error}`);
  }
}
