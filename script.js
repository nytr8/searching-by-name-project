let arr = [
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jakes",
    role: "Engineer",
    bio: "I am an engineer at Microsoft.",
  },
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia",
    role: "UI/UX Designer",
    bio: "I design clean and modern user interfaces.",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "juni",
    role: "Software Developer",
    bio: "I build full-stack applications using JavaScript.",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mia",
    role: "Data Scientist",
    bio: "I analyze data and create machine learning models.",
  },
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Liam",
    role: "Digital Marketer",
    bio: "I handle social media campaigns and SEO strategies.",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "lara",
    role: "Product Manager",
    bio: "I manage product planning and development cycles.",
  },
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ethan",
    role: "Cybersecurity Analyst",
    bio: "I secure systems and protect companies from threats.",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Priya",
    role: "Content Writer",
    bio: "I write technical and creative content for brands.",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Eula",
    role: "Content Writer",
    bio: "I write technical and creative content for brands.",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "saby",
    role: "Content creator",
    bio: "I write technical and creative content for brandsi create content for brands ",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "zendaya",
    role: "product tester",
    bio: "I test products and analyze them for better uses.",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "pritam",
    role: "Content Writer",
    bio: "I write technical and creative content for brands.",
  },
];
let inp = document.querySelector("#search");

let names = function (vals) {
  vals.forEach((element) => {
    const cards = document.querySelector(".cards");

    // Create main card
    const card = document.createElement("div");
    card.className = "card";

    // Image
    const img = document.createElement("img");
    img.setAttribute("src", element.profile);
    // console.log(element.profile);
    img.alt = "profile";

    // Name
    const name = document.createElement("h3");
    name.textContent = element.name;

    // Role
    const role = document.createElement("p");
    role.className = "role";
    role.textContent = element.role;

    // Bio
    const bio = document.createElement("p");
    bio.className = "bio";
    bio.textContent = element.bio;

    // Append children
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(bio);

    cards.appendChild(card);
  });
};

inp.addEventListener("input", (evn) => {
  let valu = evn.target.value.trim().toLowerCase();
  let rus = arr.filter((fil) => {
    return fil.name.toLowerCase().startsWith(valu);
  });
  console.log(rus);
  document.querySelector(".cards").innerHTML = "";
  names(rus);
});

names(arr);
