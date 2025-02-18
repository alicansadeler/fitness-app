import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nesciunt maiores in eveniet vero id nihil, perferendis animi
            delectus est ea sint deleniti praesentium, exercitationem expedita
            culpa temporibus dolorum alias.
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-xl mb-2">Contact</h4>
          <p>Lorem ipsum</p>
          <p>+555 111 222 33</p>
          <p>Loremipsum@lorem.com</p>
        </div>

        <div className="mt-16 basis-1/6 md:mt-0">
          <h4 className="font-bold text-xl mb-2">Links</h4>
          <p>Home</p>
          <p>Contact</p>
          <p>About us</p>
          <p>Benefist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
