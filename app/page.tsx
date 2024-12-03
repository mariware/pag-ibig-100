import Hero from "@/components/hero";
import Carousel from "@/components/ui/carousel";

export default async function Index() {
  const profiles = [
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
      location: "Madrid",
      imageUrl:
        "https://rizal.raphaelmarco.com/static/files/consuelo-ortiga.jpg",
      link: "/Consuelo_Ortiga"
    },
    {
      firstName: "Seiko",
      lastName: "Usui",
      age: null,
      nationality: "Japanese",
      location: "Tokyo",
      imageUrl:
        "https://talambuhay.net/wp-content/uploads/2023/10/image-6.png",
      link: "/Seiko_Usui"
    },
    {
      firstName: "Gertrude",
      lastName: "Beckett",
      age: null,
      nationality: "English",
      location: "London",
      imageUrl:
        "https://philnews.ph/wp-content/uploads/2019/09/Gertrude-Beckett.jpg",
      link: "/Gertrude_Beckett"
    },
    {
      firstName: "Suzanne",
      lastName: "Jacoby",
      age: null,
      nationality: "Belgian",
      location: "Brussels",
      imageUrl:
        "https://talambuhay.net/wp-content/uploads/2023/10/image-5.png",
      link: "/Suzanne_Jacoby"
    },
    {
      firstName: "Nellie",
      lastName: "Boustead",
      age: null,
      nationality: "French",
      location: "???",
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

  return (
    <>
      {/* <Hero /> */}
      <Carousel profiles={profiles} />
      <main className="flex-1 flex flex-col">
        
      </main>
    </>
  );
}
