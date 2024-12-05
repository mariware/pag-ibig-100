import Hero from "@/components/hero";
import Carousel from "@/components/ui/carousel";
import CarouselMod from "@/components/ui/carouselmod";

export default async function Index() {
  const women = [
    {
      firstName: "Segunda",
      lastName: "Katigbak",
      age: 14,
      nationality: "Filipino",
      location: "Lipa, Batangas",
      imageUrl:
        "https://herencialipena.com/wp-content/uploads/2022/01/segunda-katigbak-1-e1642307375285.jpg",
      link: "/Segunda_Katigbak"
    },
    {
      firstName: "Leonor",
      lastName: "Valenzuela",
      age: null,
      nationality: "Filipino",
      location: "Pagsanjan, Laguna",
      imageUrl:
        "https://talambuhay.net/wp-content/uploads/2023/10/image-4.png",
      link: "/Leonor_Valenzuela"
    },
    {
      firstName: "Leonor",
      lastName: "Rivera",
      age: null,
      nationality: "Filipino",
      location: "Camiling, Tarlac",
      imageUrl:
        "https://cdn.balita.net.ph/wp-content/uploads/2023/04/Untitled-design-2023-04-11T120023.213.png",
      link: "/Leonor_Rivera"
    },
    {
      firstName: "Consuelo",
      lastName: "Ortiga",
      age: null,
      nationality: "Spanish",
      location: "Madrid, Spain",
      imageUrl:
        "https://rizal.raphaelmarco.com/static/files/consuelo-ortiga.jpg",
      link: "/Consuelo_Ortiga"
    },
    {
      firstName: "Seiko",
      lastName: "Usui",
      age: null,
      nationality: "Japanese",
      location: "Tokyo, Japan",
      imageUrl:
        "https://talambuhay.net/wp-content/uploads/2023/10/image-6.png",
      link: "/Seiko_Usui"
    },
    {
      firstName: "Gertrude",
      lastName: "Beckett",
      age: null,
      nationality: "English",
      location: "London, UK",
      imageUrl:
        "https://philnews.ph/wp-content/uploads/2019/09/Gertrude-Beckett.jpg",
      link: "/Gertrude_Beckett"
    },
    {
      firstName: "Suzanne",
      lastName: "Jacoby",
      age: null,
      nationality: "Belgian",
      location: "Brussels, Belgium",
      imageUrl:
        "https://talambuhay.net/wp-content/uploads/2023/10/image-5.png",
      link: "/Suzanne_Jacoby"
    },
    {
      firstName: "Nellie",
      lastName: "Boustead",
      age: null,
      nationality: "French",
      location: "French Riviera, France",
      imageUrl:
        "https://images.summitmedia-digital.com/spotph/images/files/2014/12/1419826924-Nellie-Boustead.jpg",
      link: "/Nellie_Boustead"
    },
    {
      firstName: "Josephine",
      lastName: "Bracken",
      age: 25,
      nationality: "Irish",
      location: "British Hong Kong",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Josephine_Bracken_BR.jpg/800px-Josephine_Bracken_BR.jpg",
      link: "/Josephine_Bracken"
    },
  ];

  const family = [
    {
      name: "Don Francisco",
      relation: "Father",
      imageUrl: "https://kahimyang.com/resources-14/francisco_mercado.jpg",
      link: "/Francisco_Mercado",
    },
    {
      name: "Doña Lolay",
      relation: "Mother",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Theodora_alonzo_quintos.jpg",
      link: "/Teodora_Alonso",
    },
    {
      name: "Saturnina",
      relation: "Sister (first child)",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Saturnina_mercado.jpg",
      link: "/Saturnina",
    },
    {
      name: "Paciano",
      relation: "Brother (second child)",
      imageUrl: "https://images.findagrave.com/photos/2022/56/94596162_1c9b975d-c965-41b4-9252-c6f3f6ec3bb5.jpeg?size=photos250",
      link: "/Paciano",
    },
    {
      name: "Narcisa",
      relation: "Sister (third child)",
      imageUrl: "https://www.knightsofrizal.be/images/family/03-narcisa.jpg",
      link: "/Narcisa",
    },
    {
      name: "Olympia",
      relation: "Sister (fourth child)",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Olimpia_mercado.jpg",
      link: "/Olympia",
    },
    {
      name: "Lucia",
      relation: "Sister (fifth child)",
      imageUrl: "https://ourhappyschool.com/sites/default/files/luc.jpg",
      link: "/Lucia",
    },
    {
      name: "Maria",
      relation: "Sister (sixth child)",
      imageUrl: "https://ourhappyschool.com/sites/default/files/maria.jpg",
      link: "/Maria",
    },
    {
      name: "Concepcion",
      relation: "Sister (eighth child)",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/007/810/782/small_2x/vintage-grunge-texture-background-vector.jpg",
      link: "/Concepcion",
    },
    {
      name: "Josefa",
      relation: "Sister (ninth child)",
      imageUrl: "https://ourhappyschool.com/sites/default/files/josefa.jpg",
      link: "/Josefa",
    },
    {
      name: "Trinidad",
      relation: "Sister (tenth child)",
      imageUrl: "https://kahimyang.com/resources-14/trinidad-rizal.webp",
      link: "/Trinidad",
    },
    {
      name: "Soledad",
      relation: "Sister (eleventh child)",
      imageUrl: "https://kahimyang.com/resources-23/solidad-rizal.avif",
      link: "/Soledad",
    },
  ];
  

  return (
    <>
      {/* <Hero /> */}
      <Carousel profiles={women} />
      <CarouselMod profiles={family} />
    </>
  );
}
