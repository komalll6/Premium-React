function Lookbook(){
    const lookbooks = [
    {
      id: 1,
      title: 'View Formal Lookbook',
      image: 'https://i.pinimg.com/736x/55/35/bf/5535bf202bce051ffcb53301faa0ca11.jpg', // Swap with your image asset
      bgColor: 'bg-[#121c22]', // Exact Dark Blue/Black background
    },
    {
      id: 2,
      title: 'View Casual Lookbook',
      image: 'https://i.pinimg.com/736x/bc/41/81/bc4181ea9a80552b158b096cdb82d068.jpg', // Swap with your image asset
      bgColor: 'bg-[#5c4133]', // Exact Warm Brown background
    },
    {
      id: 3,
      title: 'View Business Lookbook',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop', // Swap with your image asset
      bgColor: 'bg-[#374e5d]', // Exact Slate Blue background
    },
  ];

    return(
       <section className="bg-[#f3ede4] py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {lookbooks.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              
              {/* Colored Card Container (Perfect Square) */}
              <div className={`${item.bgColor} w-full aspect-square flex items-center justify-center p-8 lg:p-12 shadow-sm transition-transform duration-300 hover:scale-[1.01]`}>
                
                {/* Image Frame Wrapper */}
                <div className="relative w-full h-full overflow-hidden bg-zinc-900">
                  
                  {/* Subtle Brand Watermark (Matches "KNOT STANDARD" style in image) */}
                  <div className="absolute top-4 left-0 right-0 flex flex-col items-center z-10 text-white/70 tracking-[0.25em] text-[9px] font-light pointer-events-none">
                    {/* <span className="text-xs mb-0.5">◊</span>
                    RAJHANS */}
                  </div>

                  {/* Lookbook Cover Photo */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

              </div>

              {/* Styled Underlined Action Link */}
              <a
                href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="mt-6 text-[#070707] text-sm tracking-wider font-medium border-b border-[#1c1c1c]
                 pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors duration-200 capitalize"
              >
                {item.title}
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
    )
}

export default Lookbook;