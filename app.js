const app = document.querySelector(".todo-app");
const list = app.querySelector(".todo-app__list");
const form = app.querySelector(".todo-app__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Щоб додадавати елементи на сторінку існує 2
  // підходи: Перший підхід
  // const item = document.createElement("li");
  // item.textContent = "New";
  // item.textContent = form.elements.todo.value;

  // item.addEventListener("dblclick", () => {
  //   item.remove();
  // });

  // list.append(item); // додає в кінець
  // list.prepend(item); // на початок

  // Другий підхід
  list.insertAdjacentHTML(
    "beforeend",
    `
    <li>
      ${form.elements.todo.value}

      <button onclick="this.parentElement.remove()">
        x
      </button>
    </li>
  `,
  );
  // Код, що вище, схожий на тей який ми писатимемо
  // в React(JSX syntax). Ми в ньому вказуємо куди
  // ми будемо його додавати, потім у вигляді рядка
  // пишемо html, форматуємо так як нам зручно і
  // це набагато зрозуміліше тому, що ми одразу
  // бачимо яка буде фінальна верстка. І тому в
  // в усіх сучасних фреймворках використовують підхід
  // схожий на цей.

  form.reset();
});
// На даному етапі рекомендують викор. перший підхід
// оскільки ми маємо змогу викоритовувати в ньому
// змінні та інші функції на відміну від <button 
// onclick="this.parentElement.remove()">. Просто
// автодоповненя банально нема.
