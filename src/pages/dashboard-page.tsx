// src/pages/Dashboard.tsx
import ParticleBackground from "@/components/particles-background";
import { TypeAnimation } from "react-type-animation";
import { MyButton } from "../components/button";
import { FeaturedVideo } from "../components/featured-video";
import { ListItem } from "../components/list-items";
import { ModeSelector } from "../components/mode-selector";
import { PartySection } from "../components/party-section";
import { SocialLink } from "../components/social-links";
import { UserProfile } from "../components/user-profile";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative p-3">
      {/* Particle background */}
      <ParticleBackground />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 z-10 relative">
        <div className="space-y-4">
          <UserProfile />
          <PartySection />
          <MyButton label="PLAY" color="green" width="full" />
          <button className="w-full border-4 border-gray-500 rounded-lg p-2 text-gray-500 font-bold hover:bg-slate-400 hover:text-white">
            SETTING
          </button>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-800 bg-opacity-30 rounded-lg p-4">
          <ListItem />
        </div>

        <div className="space-y-4">
          <ModeSelector />
          <FeaturedVideo />
          <div className="mt-2 flex justify-center">
            <SocialLink />
          </div>
        </div>
      </div>

      <div className="mt-2 flex justify-center z-10 relative">
        <TypeAnimation
          sequence={["Design By TiyoIgusty", 1000, "", 1000]}
          wrapper="span"
          speed={50}
          className="font-extrabold text-neon shadow-md"
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Dashboard;
