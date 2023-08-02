document.addEventListener("DOMContentLoaded", () => {
  console.log(4);
  let result = document.getElementById("result");
  let currentExpression = "";
  const nums = document.querySelectorAll(".nums");
  const operations = document.querySelectorAll(".operators");

  nums.forEach((num) => {
    num.addEventListener("click", () => {
      num.classList.add("clicked");

      if (num.textContent == "C") {
        currentExpression = "";
        result.innerText = currentExpression;
        return;
      }
      currentExpression += num.textContent;
      result.innerText = currentExpression;
    });
    num.addEventListener("transitionend", () => {
      num.classList.remove("clicked");
    });
  });

  console.log(operations[0].innerHTML);
  operations.forEach((operator) => {
    operator.addEventListener("click", () => {
      operator.classList.add("clicked");
      console.log(operator.innerText);
      if (operator.textContent === "=") {
        try {
          const ans = eval(currentExpression);
          result.innerText = ans.toString();
          currentExpression = ans.toString();
        } catch (error) {
          currentExpression = "";
          result.innerText = "Error : " + error.message;
        }
      } else if (operator.textContent == "←") {
        // alert(operator.innerHTML)
        currentExpression = currentExpression.slice(0, -1);
        result.innerText = currentExpression;
      } else {
        currentExpression += operator.textContent;
        result.innerText = currentExpression;
      }
    });
    operator.addEventListener("transitionend", () => {
      operator.classList.remove("clicked");
    });
  });
});
