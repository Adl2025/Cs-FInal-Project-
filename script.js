document.addEventListener("DOMContentLoaded", function() {
  const askBtn = document.getElementById("askBtn");
  const questionInput = document.getElementById("questionInput");
  const answerBox = document.getElementById("answerBox");
  const exampleBtns = document.querySelectorAll(".example-btn");

  // Q&A pairs
  const qaPairs = [
    {
      q: "bullying",
      a: "If you see bullying, tell a trusted adult or use your school's anonymous reporting system. Support the person being bullied and do not join in. Everyone has the right to feel safe."
    },
    {
      q: "search my bag",
      a: "A teacher can only search your bag if they have a good reason (like safety concerns) and usually with another adult present. You have the right to know why and to have a parent or trusted adult informed if you are under 18."
    },
    {
      q: "report cyberbullying",
      a: "To report cyberbullying, save evidence (like screenshots), block the person, and tell a trusted adult or use the reporting tools on the platform. Never respond with anger."
    }
  ];

  function findAnswer(question) {
    const qLower = question.toLowerCase();
    for (const pair of qaPairs) {
      if (qLower.includes(pair.q)) {
        return pair.a;
      }
    }
    return "Thank you for your question! We'll try to answer it soon. If it's urgent, talk to a trusted adult or use the resources page.";
  }

  if (askBtn) {
    askBtn.addEventListener("click", function() {
      const question = questionInput.value.trim();
      if (question.length === 0) {
        answerBox.textContent = "Please enter a question.";
        return;
      }
      answerBox.textContent = findAnswer(question);
    });
  }

  exampleBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      questionInput.value = btn.textContent;
      questionInput.focus();
    });
  });
}); 