

const Banner = () => {
  return (
    <div>
      <section className="container mx-auto lexend my-8">
        <div className="rounded-3xl bg-[url('./assets/images/banner.jpg')] bg-cover py-20">
          <div className="flex flex-col justify-between items-center text-center py-8 px-8 lg:px-48">
            <h1 className="text-5xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-white  my-5 text-lg">Join our exceptional cooking class designed just for you! Learn new techniques, master favorite dishes, and elevate your culinary skills in a fun, interactive environment.</p>
            <div className="flex gap-3">
              <button className="btn btn-accent rounded-full px-8 text-white bg-[#0BE58A] border-none">Registerer Now</button>
              <button className="btn rounded-full px-8 text-white bg-transparent">Our Feedback</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;