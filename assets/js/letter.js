const creativeItems = [
    {
      img: "./assets/images/01l.png",
      icon: "<i class='ph ph-meta-logo creative-universe-icon'></i>",
      link: "https://instagram.com",
      parllaxSpeed: 0.065,
    },
    {
      img: "./assets/images/02l.png",
      icon: "<i class='ph-bold ph-pinterest-logo creative-universe-icon'></i>",
      link: "https://google.com",
      parllaxSpeed: 0.05,
    },
    {
      img: "./assets/images/03l.png",
      icon: "<i class='ph ph-instagram-logo creative-universe-icon'></i>",
      link: "https://google.com",
      parllaxSpeed: 0.08,
    },
    {
        img: "./assets/images/04l.png",
        icon: "<i class='ph ph-meta-logo creative-universe-icon'></i>",
        link: "https://instagram.com",
        parllaxSpeed: 0.065,
      },
      {
        img: "./assets/images/05l.png",
        icon: "<i class='ph-bold ph-pinterest-logo creative-universe-icon'></i>",
        link: "https://google.com",
        parllaxSpeed: 0.05,
      },
      {
        img: "./assets/images/06l.jpeg",
        icon: "<i class='ph ph-instagram-logo creative-universe-icon'></i>",
        link: "https://google.com",
        parllaxSpeed: 0.08,
      },
      {
        img: "./assets/images/07l.jpeg",
        icon: "<i class='ph ph-instagram-logo creative-universe-icon'></i>",
        link: "https://google.com",
        parllaxSpeed: 0.08,
      },
      {
          img: "./assets/images/08l.jpeg",
          icon: "<i class='ph ph-meta-logo creative-universe-icon'></i>",
          link: "https://instagram.com",
          parllaxSpeed: 0.065,
        },
        {
          img: "./assets/images/09l.jpeg",
          icon: "<i class='ph-bold ph-pinterest-logo creative-universe-icon'></i>",
          link: "https://google.com",
          parllaxSpeed: 0.05,
        },
        {
          img: "./assets/images/10l.png",
          icon: "<i class='ph ph-instagram-logo creative-universe-icon'></i>",
          link: "https://google.com",
          parllaxSpeed: 0.08,
        },
        {
            img: "./assets/images/11l.jpeg",
            icon: "<i class='ph ph-instagram-logo creative-universe-icon'></i>",
            link: "https://google.com",
            parllaxSpeed: 0.08,
          },
   
  ];
  
  const creativeGallery = document.querySelector(".creative-universe-gallery");
  
  const creativeItemPositions = [
    { top: "-5%", left: "5%" },
    { top: "40%", left: "-5%" },
    { top: "25%", left: "20%" },
    { top: "60%", left: "40%" },
    { top: "70%", left: "10%" },
    { top: "-10%", left: "65%" },
    { top: "10%", left: "85%" },
    { top: "40%", left: "60%" },
    { top: "80%", left: "70%" },
    { top: "50%", left: "95%" },
  ];
  
  creativeItems.forEach((itemData, index) => {
    const item = document.createElement("div");
    item.classList.add("creative-universe-item");
  
    const position = creativeItemPositions[index];
    item.style.top = position.top;
    item.style.left = position.left;
  
    const img = document.createElement("img");
    img.src = itemData.img;
    item.appendChild(img);
  
    const link = document.createElement("div");
    link.classList.add("creative-universe-link");
    link.innerHTML = `<a href="${itemData.link}">${itemData.icon}</a>`;
    item.appendChild(link);
  
    creativeGallery.appendChild(item);
  });
  
  document.addEventListener("mousemove", (e) => {
    creativeGallery.querySelectorAll(".creative-universe-item").forEach((item, index) => {
      const animationFactor = creativeItems[index].parllaxSpeed;
  
      const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
      const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;
  
      gsap.to(item, { x: deltaX, y: deltaY, duration: 0.75 });
    });
  });
  