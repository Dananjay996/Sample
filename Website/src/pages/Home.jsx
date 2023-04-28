import { Navbar,Hero,Footer} from "../components";

const Home = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Hero />
    </div>
    <Footer />
  </div>
);

export default Home;
