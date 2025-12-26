function showFeedbackMessage() {
  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const hours = new Date().getHours();
  let timeMsg =
    hours < 12 ? "Good Morning" :
    hours < 18 ? "Good Afternoon" :
    "Good Evening";
  let feedbackMsg;
  switch (rating) {
    case "Excellent":
      feedbackMsg = "We’re thrilled that you had a wonderful stay! 🌟";
      break;
    case "Good":
      feedbackMsg = "Glad you enjoyed your stay. We’ll make it even better next time!";
      break;
    case "Average":
      feedbackMsg = "Thanks for your feedback! We’ll use it to improve your experience.";
      break;
    case "Poor":
      feedbackMsg = "Sorry to hear that. We’ll work on improving right away.";
      break;
    default:
      feedbackMsg = "Thanks for sharing your thoughts!";
  }
  document.getElementById("feedbackForm").style.display = "none";
  const messageEl = document.getElementById("thankYouMessage");
  messageEl.textContent = `${timeMsg}, ${name}! ${feedbackMsg} Please visit again 😊`;
  messageEl.style.display = "block";
  messageEl.style.animation = "fadeSlide 0.8s ease forwards";
}
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault();
  showFeedbackMessage();
});