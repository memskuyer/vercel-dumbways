let blogs = [];

const addBlog = (e) => {
  e.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let images = document.getElementById("input-blog-images");

  if (title == "") {
    return alert("title input Tidak Boleh Kosong");
  } else if (content == "") {
    return alert("content input Tidak Boleh Kosong");
  } else if (images.files.length == 0) {
    return alert("Images input Tidak Boleh Kosong");
  }

  let imagesInput = URL.createObjectURL(images.files[0]);
  let d = new Date();
  const date = new Intl.DateTimeFormat(["ban", "id"]).format(d);
  let blog = {
    author: "Kocheng Oren",
    title: title,
    images: imagesInput,
    content: content,
    postedAt: date,
  };

  blogs.push(blog);
  renderBlogs();
};

const renderBlogs = () => {
  console.log(blogs);
  let blogListing = document.getElementById("blogList");
  blogListing.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i]);
    blogListing.innerHTML += `
     <div id="${i}" class="blog-list-item">
            <div class="blog-image">
              <img src="${blogs[i].images}" alt="Images" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="./blog-detail.html" class="blog-item-title">
                  ${blogs[i].title}
                </a>
              </h1>
              <div class="detail-blog-content">
                ${blogs[i].postedAt} || Kocheng Oren
              </div>
              <p class="blog-text">
                ${blogs[i].content}
              </p>
            </div>
          </div>
    `;
  }
};

const firstBlogContent = () => {
  return `
        <div class="blog-list-item">
            <div class="blog-image">
              <img src="../assets/images/image.png" alt="Images" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="./blog-detail.html" class="blog-item-title">
                  Kucing imut di indonesia sangat gemesh
                </a>
              </h1>
              <div class="detail-blog-content">
                05 Desember 2024 10:30 | Kocheng Oren
              </div>
              <p class="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis sequi minima quaerat hic necessitatibus eligendi
                praesentium exercitationem quisquam qui maiores incidunt, a nam
                laborum dolorem nobis consequuntur omnis eveniet excepturi
                explicabo architecto reprehenderit tempore voluptatibus aliquid.
                Sint nam distinctio dolore minima, unde inventore non ipsam
                ullam pariatur reiciendis temporibus quia tenetur placeat
                dolores velit debitis itaque! Veniam neque dolores qui magnam,
                accusamus deserunt numquam expedita nisi accusantium obcaecati
                maxime atque nobis necessitatibus beatae quod ipsum soluta
                molestias labore nihil corporis adipisci cupiditate sint quidem!
                Nam placeat quae ducimus, natus nulla odio temporibus nesciunt
                porro facilis enim perspiciatis consequatur iure repellendus.
              </p>
            </div>
          </div>
    `;
};

const formatDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Marc",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agus",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];
};

const getRelativeTime = (targetDate) => {
  let now = new Date();
  let diffInSeconds = Math.floor((now - targetDate) / 1000);

  console.log(diffInSeconds);
};
