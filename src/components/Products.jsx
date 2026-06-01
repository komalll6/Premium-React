function Products() {
  const products = [
    {
      category: "Menswear",
      title: "OUTERWEAR",
      image:
        "https://i.pinimg.com/736x/b9/4e/b8/b94eb8d95a8f816577c3df591d8c4992.jpg",
    },
    {
      category: "Womenswear",
      title: "BLAZERS",
      image:
        "https://i.pinimg.com/736x/5e/b4/c2/5eb4c29787bb0fa6d07343571e2b3307.jpg",
    },
    {
      category: "Menswear",
      title: "FORMAL",
      image:
        "https://i.pinimg.com/736x/13/95/20/13952049adf3f8e12d4e9e7f66bae68f.jpg",
    },
    {
      category: "Menswear",
      title: "SUITS",
      image:
        "https://i.pinimg.com/1200x/0f/1c/e5/0f1ce5a0cd950ef33893c006a35b0fff.jpg",
    },
    {
      category: "Womenswear",
      title: "CO-ORD SETS",
      image:
        "https://i.pinimg.com/1200x/01/d2/f5/01d2f5e682835ba952fc54bca1aedc64.jpg",
    },
  ];

  const Card = ({ item, height }) => (
    <div
      className={`relative ${height} overflow-hidden group cursor-pointer`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="
          w-full
          h-full
          object-cover
          object-top
          transition-all
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

        <p className="text-[15px] md:text-[18px] font-light mb-2">
          {item.category}
        </p>

        <h2
          className="
            font-['Oswald']
            text-[28px]
            md:text-[36px]
            lg:text-[48px]
            font-light
            uppercase
            leading-[0.9]
            text-center
            w-full
            px-4
            mx-auto
            tracking-[1px]
          "
        >
          {item.title === "CO-ORD SETS" ? (
            <>
              CO-ORD
              <br />
              SETS
            </>
          ) : (
            item.title
          )}
        </h2>

      </div>
    </div>
  );

  return (
    <section className="bg-[#f5f5f5] py-10">

      <div className="max-w-[1180px] mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px]">

          {/* Left Column */}
          <div className="flex flex-col gap-[2px]">

            <Card
              item={products[0]}
              height="h-[260px]"
            />

            <Card
              item={products[2]}
              height="h-[320px]"
            />

          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-[2px]">

            <Card
              item={products[1]}
              height="h-[290px]"
            />

            <Card
              item={products[3]}
              height="h-[290px]"
            />

          </div>

          {/* Right Column */}
          <div>

            <Card
              item={products[4]}
              height="h-[582px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Products;