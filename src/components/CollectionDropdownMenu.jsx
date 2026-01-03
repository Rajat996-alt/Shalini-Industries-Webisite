import { useState } from "react";

const CollectionDropdownMenu = ({ visibility }) => {
  const [collections] = useState([
    {
      img: "https://media.istockphoto.com/id/1691914584/photo/modern-bedroom-interior-with-dressing-table-bed-with-bedhead-and-side-table-with-photo-frame.webp?a=1&b=1&s=612x612&w=0&k=20&c=fur3jSH12gfa_yfvZg52BQyNaqrKl2uW3l7RLoMEOzQ=",
      title: "Bedroom Furniture",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
      title: "Living Room Furniture",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://images.unsplash.com/photo-1600488999806-8efb986d87b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRpbmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
      title: "Dining Furniture",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://images.unsplash.com/photo-1547043736-b2247cb34b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Office & Study Furniture",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://images.unsplash.com/photo-1593071045320-171ec7573b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0b3JhZ2UlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
      title: "Storage Furniture",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661963667668-f53a412a5922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpdGNoZW4lMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
      title: "Kitchen & Utility",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://images.unsplash.com/photo-1735990415461-a596110c0f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbmRpY3JhZnQlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
      title: "Home Decor & Handicraft",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://images.unsplash.com/photo-1623625434531-d130448273c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVuJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
      title: "Outdoor & Garden",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1683141118084-89df02e0a30c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvb2QlMjBzdG9yYWdlJTIwdW5pdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Custom Made",
      subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestias.",
    },
  ]);

  return (
    <div
      className={`rounded-md bg-[#FEFAE0] max-w-7xl mx-auto p-6 grid grid-cols-3 gap-6 ${visibility}`}
    >
      {collections.map((item, index) => (
        <div
          key={index}
          className="rounded-sm h-34 bg-white relative grayscale hover:grayscale-0 hover:scale-99 transition-all duration-100 ease-linear"
        >
          <img
            src={item.img}
            alt=""
            className="w-full h-full object-cover rounded-sm"
          />
          <div className="absolute bottom-2 left-2 text-white">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-[.7rem] text-amber-50 w-2/3">{item.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionDropdownMenu;
