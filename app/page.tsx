import Footer from "../components/common/Footer";
import LandingPageBanner from "../components/common/LandingPageBanner";
import LandingPageRoleSelection from "../components/common/LandingPageRoleSelection";

const Home = () => {
  return (
    <div className="h-screen w-full"
    style={{
            animation: "slideUp 0.6s ease-out",
          }}
    >
      <main className=" justify-center "
       >


<LandingPageBanner />

<LandingPageRoleSelection />
        

      </main>
      <Footer />
    </div>
  );
};

export default Home;
