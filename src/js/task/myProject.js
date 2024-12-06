var arr = [];

let lcProject = JSON.parse(localStorage.getItem("project") || "[]");

if (lcProject != []) {
  arr.push(...lcProject);
} else {
  submitForm();
}

const submitForm = (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let description = document.getElementById("description").value;

  let arrCheckbox = [];
  let checkBox = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkBox.length; i++) {
    arrCheckbox.push(checkBox[i].value);
  }

  let imageUpload = document.getElementById("upload-images");
  let imagesInput = document.querySelector(`input[type=file]`);

  if (name == "") {
    return alert("name input Tidak Boleh Kosong");
  } else if (startDate == "") {
    return alert("Start date input Tidak Boleh Kosong");
  } else if (endDate == "") {
    return alert("End Date input Tidak Boleh Kosong");
  } else if (description == "") {
    return alert("description input Tidak Boleh Kosong");
  } else if (description.length <= 100) {
    return alert("description input harus 100 Huruf");
  } else if (imageUpload.files.length == 0) {
    return alert("Images input Tidak Boleh Kosong");
  }

  // let images = URL.createObjectURL(imageUpload.files[0]);

  let res = {
    author: name,
    startDate: startDate,
    endDate: endDate,
    description: description,
    checBox: arrCheckbox,
    images: imagesInput.files[0].name,
  };
  arr.push(res);
  localStorage.setItem("project", JSON.stringify(arr));
  alert("Berhasil");
};

const getStorage = () => {
  let projectList = document.getElementById("listProject");

  for (let i = 0; i < lcProject.length; i++) {
    // console.log(lcProject[i].checBox);
    let checkboxArr = [];
    lcProject[i].checBox.forEach((b) => {
      checkboxArr.push(b);
    });

    let dateStart = new Date(lcProject[i].startDate.replaceAll("-", "/"));
    let dateend = new Date(lcProject[i].endDate.replaceAll("-", "/"));

    let duration =
      dateend.getMonth() -
      dateStart.getMonth() +
      12 * (dateend.getFullYear() - dateStart.getFullYear());

    // console.log(duration);
    projectList.innerHTML += `
        <div id=${i} class="card">
        <img src="../../assets/images/${lcProject[i].images}" alt="" class="img-hero" />
        <h2>${lcProject[i].author}</h2>
        <p>Durasi: ${duration} Bulan | Papoy </p>
        <p>
        ${lcProject[i].description}
        </p>
          <p>${checkboxArr}</p>
        <div class="btn-section-two">
        <button class="btn-edit">edit</button>
        <button class="btn-delete">delete</button>
        </div>
        </div>
        </div>
        `;
  }
};

getStorage();
