import { jobs } from "../data/jobs.js";

// Function to create job listings
function createJobListings() {
  const jobList = document.getElementById("job-list");

  jobs.forEach((job) => {
    const jobDiv = document.createElement("div");
    jobDiv.className = "recurit-job";

    const jobTitle = document.createElement("h3");
    jobTitle.textContent = job.title;
    jobDiv.appendChild(jobTitle);

    const jobDescription = document.createElement("p");
    jobDescription.textContent = job.description;
    jobDiv.appendChild(jobDescription);

    const requirementsList = document.createElement("ul");
    job.requirements.forEach((req) => {
      const listItem = document.createElement("li");
      listItem.textContent = req;
      requirementsList.appendChild(listItem);
    });
    jobDiv.appendChild(requirementsList);

    const applyButton = document.createElement("button");
    applyButton.className = "recurit-btn";
    applyButton.textContent = "申請職位";
    applyButton.onclick = function () {
      alert(`您已申請職位: ${job.title}`);
    };
    jobDiv.appendChild(applyButton);

    jobList.appendChild(jobDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createJobListings();
});
