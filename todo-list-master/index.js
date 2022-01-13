const commonVariables = (eventTarget, data) => {
  const listId = eventTarget.closest(".list").id;
  const card = eventTarget.closest(".card");
  const cardId = +card.id;
  const deletedCard = data[listId].filter((card) => card.id === cardId)[0];
  const deletedCardIndex = data[listId].findIndex(
    (card) => card.id === deletedCard.id
  );

  return { listId, deletedCard, deletedCardIndex };
};

const drawList = (data, listType) => {
  const list = document.querySelector(`#${listType}`);

  list.innerHTML = "";
  data[listType].forEach((card) => {
    list.innerHTML += `
      <li class='card' id=${card.id}>
        <span>Title:</span>
        <p class='title'>${card.title}</p>
        <span>Description:</span>
        <p class='description'>${card.description}</p>
        <br />
        ${
          listType !== "deleted"
            ? `<button class='button editButton'>Edit</button>
              <button class='button nextButton'>Next</button>
              <button class='button deleteButton'>Delete</button>`
            : `<button class='button restoreButton'>Restore</button>`
        }
      </li>
    `;
  });
};

const createCard = (data) => {
  const createItemForm = document.querySelector(".createItemForm");
  const inputTitle = document.querySelector("#inputTitle");
  const inputDescription = document.querySelector("#inputDescription");

  data.toDo.push({
    title: inputTitle.value,
    description: inputDescription.value,
    id: Date.now(),
  });

  createItemForm.reset();
  drawList(data, "toDo");
};

const deleteCard = (eventTarget, data) => {
  const { listId, deletedCard, deletedCardIndex } = commonVariables(
    eventTarget,
    data
  );

  data[listId].splice(deletedCardIndex, 1);
  data.deleted.push(deletedCard);

  drawList(data, listId);
  drawList(data, "deleted");
};

const editCard = (eventTarget, data) => {
  const { listId, deletedCard, deletedCardIndex } = commonVariables(
    eventTarget,
    data
  );
  const modal = document.querySelector(".modal");
  const modalinputModalTitle = document.querySelector(".inputModalTitle");
  const inputModalDescription = document.querySelector(
    ".inputModalDescription"
  );
  const editModalButton = document.querySelector("#editModalButton");
  const cancelModalButton = document.querySelector("#cancelModalButton");

  modal.style.display = "block";
  modalinputModalTitle.value = deletedCard.title;
  inputModalDescription.value = deletedCard.description;

  editModalButton.addEventListener("click", (event) => {
    event.preventDefault();
    data[listId].splice(deletedCardIndex, 1, {
      title: modalinputModalTitle.value,
      description: inputModalDescription.value,
      id: deletedCard.id,
    });
    modal.style.display = "none";

    drawList(data, listId);
  });

  cancelModalButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
  });
};

const tranferCardToAnotherList = (eventTarget, data) => {
  const { listId, deletedCard, deletedCardIndex } = commonVariables(
    eventTarget,
    data
  );
  //тоже самое
  // const listId = commonVariables(eventTarget, data).listId;
  // const deletedCard = commonVariables(eventTarget, data).deletedCard;
  // const deletedCardIndex = commonVariables(eventTarget, data).deletedCardIndex;
  
  const listsId = [...document.querySelectorAll(".list")].map(
    (list) => list.id
  );
  const nextListIndex = listsId.findIndex((id) => id === listId) + 1;

  data[listId].splice(deletedCardIndex, 1);
  data[listsId[nextListIndex]].push(deletedCard);

  drawList(data, listId);
  drawList(data, listsId[nextListIndex]);
};

const restoreCard = (eventTarget, data) => {
  const { listId, deletedCard, deletedCardIndex } = commonVariables(
    eventTarget,
    data
  );

  data[listId].splice(deletedCardIndex, 1);
  data.toDo.push(deletedCard);

  drawList(data, listId);
  drawList(data, "toDo");
};

const deleteAllFromDeletedList = (data) => {
  data.deleted = [];
  drawList(data, "deleted");
};

const init = () => {
  const createCardButton = document.querySelector("#createCardButton");
  const toDoList = document.querySelector(".toDoList");
  const data = {
    toDo: [],
    inProgress: [],
    done: [],
    deleted: [],
  };
  createCardButton.addEventListener("click", (event) => {
    event.preventDefault();
    createCard(data);
  });

  toDoList.addEventListener("click", (event) => {
    switch (true) {
      case [...event.target.classList].includes("deleteButton"):
        deleteCard(event.target, data);
        break;
      case [...event.target.classList].includes("editButton"):
        editCard(event.target, data);
        break;
      case [...event.target.classList].includes("nextButton"):
        tranferCardToAnotherList(event.target, data);
        break;
      case [...event.target.classList].includes("restoreButton"):
        restoreCard(event.target, data);
        break;
      case [...event.target.classList].includes("clearAllButton"):
        deleteAllFromDeletedList(data);
        break;
    }
  });
};

init();
