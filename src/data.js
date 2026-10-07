export const getCaps = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Кепарик Armani Exchange", price: 3990, image: "https://ir.ozone.ru/s3/multimedia-n/6449279411.jpg" },
        { id: 2, name: "Мега крутой кепар New York Yankees MLB", price: 4900, image: "https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_36-011-08(0).jpg" },
        { id: 3, name: "Очень дорогая кепка Louis Vuitton", price: 15890, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHfYfcRrORXKOQP1O4istDzuvGgyDg0Z2uu4XPB4FEw&s=10" },
        { id: 4, name: "Гипер дорогая GUCCI", price: 43950, image: "https://st-cdn.tsum.com/sig/be7c0c28b452c5e05d141d69cda51c70/width/2000/i/61/6b/99/54/fece6107-2d6e-464b-a2f6-a2f8d3b56fbd.jpg" }
      ]);
    }, 1000);
  });
};