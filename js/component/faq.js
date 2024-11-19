import faqData from "../data/faqdata.js";

// Function to toggle the answer display with animation
function toggleAnswer(questionElement) {
  const answerElement = questionElement.nextElementSibling;
  const icon = questionElement.querySelector(".toggle-icon");

  if (
    answerElement.style.height === "0px" ||
    answerElement.style.height === ""
  ) {
    // Set the height to the scroll height to animate
    answerElement.style.height = answerElement.scrollHeight + 100 + "px";
    icon.textContent = "-"; // Change icon to minus
  } else {
    // Set the height back to 0 for hiding
    answerElement.style.height = "0px";
    icon.textContent = "+"; // Change icon to plus
  }
}

// Function to render the FAQ items
function renderFAQs() {
  const faqContainer = document.getElementById("faq-container");

  faqData.forEach((item) => {
    // Create question element
    const questionDiv = document.createElement("div");

    questionDiv.classList.add("question");

    const iconHtml = `<i class="${item.questionIcon}"></i>`;

    questionDiv.onclick = () => toggleAnswer(questionDiv);
    questionDiv.innerHTML = `
                <div class="question-left">
                ${iconHtml}
                <strong>${item.question}</strong>
                </div>  
                <span class="toggle-icon">+</span>
            `;

    // Create answer element
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");
    answerDiv.classList.add("text-muted");

    answerDiv.textContent = item.answer;

    // Append question and answer to the container
    faqContainer.appendChild(questionDiv);
    faqContainer.appendChild(answerDiv);
  });
}

// Initialize the FAQ on page load
document.addEventListener("DOMContentLoaded", renderFAQs);
