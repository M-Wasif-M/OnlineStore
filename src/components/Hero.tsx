import Icon from "./Icon";

export default function Hero() {
  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">New season / curated essentials</p>
        <h1>
          Style that feels
          <span> effortless.</span>
        </h1>
        <p className="hero-copy">
          Modern wardrobe pieces, refined accessories and beauty essentials
          selected for everyday life.
        </p>

        <button className="primary-button" type="button" onClick={scrollToShop}>
          Shop collection
          <Icon name="arrow" />
        </button>
      </div>

      <div className="hero-stat">
        <strong>01</strong>
        <span>Fresh arrivals</span>
      </div>
    </section>
  );
}
