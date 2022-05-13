import Link from "next/link";

const Footer = () => {
  const getYear = () => {
    const d = new Date();
    let year = d.getFullYear();
    return year;
  };

  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Sittad Samaj</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Important Link</h5>

              <ul className="list-unstyled mb-0">
                <Link href="/">
                  <li>
                    <a className="text-white">Home</a>
                  </li>
                </Link>

                <Link href="/about">
                  <li>
                    <a className="text-white">About Sittad Samaj</a>
                  </li>
                </Link>

                <Link href="/contact">
                  <li>
                    <a className="text-white">Quick Contact</a>
                  </li>
                </Link>

                <Link href="/news">
                  <li>
                    <a className="text-white">News</a>
                  </li>
                </Link>

                <Link href="/gallery">
                  <li>
                    <a className="text-white">Gallery</a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Contact Us</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                  <p>Phone: 9999999999</p>
                  <p>Email: info@sittadsamaj.com.np</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Donate</h5>
              <div>
                <p>Help Us Change the Lives of Children in World</p>
                <button className="btn btn-info">Donate Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Copyright © {`${getYear()}`}, SITTAD SAMAJ
      </div>
    </footer>
  );
};

export default Footer;
