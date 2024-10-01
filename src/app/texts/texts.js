const title = "Arepas Mis Princesas";
const email = "saraysofiag1414@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en probar los productos de ${title} y me gustaría recibir más información sobre sus arepas con queso y jamón. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3102933330";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "*Arepas Mis Princesas* se especializa en la elaboración de deliciosas arepas rellenas de queso y jamón. Nos dedicamos a ofrecer productos frescos y sabrosos que deleitan el paladar.",
        description2: "Nuestras arepas están hechas con ingredientes de la más alta calidad, asegurando un sabor auténtico y un bocado irresistible. Cada arepa está preparada con esmero, brindando una experiencia culinaria que combina tradición y sabor. En *Arepas Mis Princesas*, estamos comprometidos a ofrecer productos que destacan por su calidad y sabor. ¡Ven y prueba nuestras deliciosas arepas rellenas de queso y jamón!",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Deliciosas arepas con queso y jamón",
            p2: "¡El sabor que te conquistará!",
        },
        address: "Dirección del emprendimiento",
        phone: numeroWhatsApp,
        email: email,
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/profile.php?id=61565794866736&mibextid=ZbWKwL",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
