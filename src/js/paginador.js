// paginator.js

const data = [
    {
        imagen: "./src/imagenes/noticias/nintendo-3ds.png",
        titulo: "Nintendo 3ds",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet curabitur sem, semper viverra elementum ornare quis mollis vehicula nunc orci. Consequat interdum magna bibendum dictum sodales massa fermentum nisl natoque phasellus aptent porttitor blandit est ac, neque elementum sociis metus curabitur diam hendrerit vestibulum habitasse arcu venenatis dignissim aliquet tempus. Blandit molestie justo vitae dictum varius suscipit nisl lectus, vehicula imperdiet orci lobortis cum sapien gravida aptent, ad magnis diam metus lacus nascetur curabitur."
    },
    {
        imagen: "./src/imagenes/noticias/evento-nintendo.png",
        titulo: "Gran evento de Nintendo",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet curabitur sem, semper viverra elementum ornare quis mollis vehicula nunc orci. Consequat interdum magna bibendum dictum sodales massa fermentum nisl natoque phasellus aptent porttitor blandit est ac, neque elementum sociis metus curabitur diam hendrerit vestibulum habitasse arcu venenatis dignissim aliquet tempus. Blandit molestie justo vitae dictum varius suscipit nisl lectus, vehicula imperdiet orci lobortis cum sapien gravida aptent, ad magnis diam metus lacus nascetur curabitur."
    },
    {
        imagen: "./src/imagenes/noticias/virtual.png",
        titulo: "Nueva consola virtual!!",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet curabitur sem, semper viverra elementum ornare quis mollis vehicula nunc orci. Consequat interdum magna bibendum dictum sodales massa fermentum nisl natoque phasellus aptent porttitor blandit est ac, neque elementum sociis metus curabitur diam hendrerit vestibulum habitasse arcu venenatis dignissim aliquet tempus. Blandit molestie justo vitae dictum varius suscipit nisl lectus, vehicula imperdiet orci lobortis cum sapien gravida aptent, ad magnis diam metus lacus nascetur curabitur.."
    },

    {
        imagen: "./src/imagenes/noticias/cruceta.png",
        titulo: "Nuevo anuncio de PlayStation",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet curabitur sem, semper viverra elementum ornare quis mollis vehicula nunc orci. Consequat interdum magna bibendum dictum sodales massa fermentum nisl natoque phasellus aptent porttitor blandit est ac, neque elementum sociis metus curabitur diam hendrerit vestibulum habitasse arcu venenatis dignissim aliquet tempus. Blandit molestie justo vitae dictum varius suscipit nisl lectus, vehicula imperdiet orci lobortis cum sapien gravida aptent, ad magnis diam metus lacus nascetur curabitur."
    },
    {
        imagen: "./src/imagenes/noticias/minecraft.png",
        titulo: "Minecraft lo hace nuevamente!!",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet curabitur sem, semper viverra elementum ornare quis mollis vehicula nunc orci. Consequat interdum magna bibendum dictum sodales massa fermentum nisl natoque phasellus aptent porttitor blandit est ac, neque elementum sociis metus curabitur diam hendrerit vestibulum habitasse arcu venenatis dignissim aliquet tempus. Blandit molestie justo vitae dictum varius suscipit nisl lectus, vehicula imperdiet orci lobortis cum sapien gravida aptent, ad magnis diam metus lacus nascetur curabitur."
    },
    {
        imagen: "./src/imagenes/noticias/lol.png",
        titulo: "Nuevo campeon de lol llegara pronto!",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet curabitur sem, semper viverra elementum ornare quis mollis vehicula nunc orci. Consequat interdum magna bibendum dictum sodales massa fermentum nisl natoque phasellus aptent porttitor blandit est ac, neque elementum sociis metus curabitur diam hendrerit vestibulum habitasse arcu venenatis dignissim aliquet tempus. Blandit molestie justo vitae dictum varius suscipit nisl lectus, vehicula imperdiet orci lobortis cum sapien gravida aptent, ad magnis diam metus lacus nascetur curabitur."
    },
];

function generateSectionHTML(section) {
    return `
      <div class="text-container">
        <p class="title-noticias">${section.titulo}</p>
        <div class="box-noticias">
          <img src="${section.imagen}" alt="">
          <div class="text-noticias">
            <p class="text">${section.texto}</p>
          </div>
        </div>
      </div>
    `;
};

function displaySections(page) {
    const itemsPerPage = 3;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = start; i < end && i < data.length; i++) {
        container.insertAdjacentHTML("beforeend", generateSectionHTML(data[i]));
    }
};
