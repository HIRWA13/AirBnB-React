import Grid from "../assets/grid.svg";

export default function Hero() {
  return (
    <>
      <section>
        <img src={Grid} className="w-3/5 mx-auto mt-10" />
      </section>
      <section className="p-5">
        <div className="w-2/5">
          <h1 className="text-5xl font-bold">Online Experiences</h1>
          <p className="w-3/5 text-2xl font-light">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </section>
    </>
  );
}