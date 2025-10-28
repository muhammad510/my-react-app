
function Home() {
    return (
        <>
            <Crousel />

        </>
    );
}



function About() {
    return (
        <>
            <HeroContainer />
            <Crousel />
        </>
    );
}

function Crousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://m.media-amazon.com/images/I/71GXqew8QuL.jpg"
            className="d-block w-100"
            alt="First slide"
            style={{height:"100vh", maxWidth:"auto"}}

          />
        </div>

        <div className="carousel-item">
          <img
            src="https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg"
            className="d-block w-100"
            alt="Second slide"
            style={{height:"100vh", maxWidth:"auto"}}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-a-tiger-in-the-wild-image_16185174.jpg"
            className="d-block w-100"
            alt="Third slide"
            style={{height:"100vh", maxWidth:"auto"}}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function HeroContainer() {
    return (

        <>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <h3>Hello ji how are you i am your friend</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat optio nisi, voluptate natus dolores doloremque culpa voluptatum officiis neque consectetur ratione labore sunt assumenda, magni, tempore quam at inventore officia.</p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <img src="https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-green-parrot-with-red-beak-png-image_16222303.png" alt="" style={{ border: "1px solid red" }} />
                </div>
            </div>
        </>


    );
}

export default Home;

export { About }
