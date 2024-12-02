import Hero from "@/components/hero";
import Carousel from "@/components/ui/carousel";

export default async function Index() {
  const profiles = [
    {
      firstName: "Segunda",
      lastName: "Katigbak",
      age: 14,
      nationality: "Filipino",
      location: "Pagsanjan",
      imageUrl:
        "https://herencialipena.com/wp-content/uploads/2022/01/segunda-katigbak-1-e1642307375285.jpg",
      link: "/Segunda_Katigbak"
    },
    {
      firstName: "Leonor",
      lastName: "Valenzuela",
      age: null, // Null age handled below
      nationality: "Filipino",
      location: "Pagsanjan",
      imageUrl:
        "https://talambuhay.net/wp-content/uploads/2023/10/image-4.png",
      link: "/Segunda_Katigbak"
    },
    {
      firstName: "Josephine",
      lastName: "Bracken",
      age: 25,
      nationality: "Irish",
      location: "British Hong Kong",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Josephine_Bracken_BR.jpg/800px-Josephine_Bracken_BR.jpg",
      link: "/Segunda_Katigbak"
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
