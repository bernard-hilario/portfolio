import Particles from './component/Particles';
import LightRays from './component/LightRays';
import ShinyText from './component/ShinyText';
import TextType from './component/TextType';
import Dock from './component/Dock';

// ✅ IMPORT ICONS (missing cause of error)
import { VscHome, VscAccount, VscBriefcase, VscTools, VscMail } from "react-icons/vsc";

function App() {
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => alert('About!') },
    { icon: <VscTools size={18} />, label: 'Skils', onClick: () => alert('Skils!') },
    { icon: <VscBriefcase size={18} />, label: 'Project', onClick: () => alert('Project!') },
    { icon: <VscMail size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <>
      <section
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        {/* Background particles */}
        <Particles
          particleColors={['#ffffff']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        />

        {/* Light Rays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        {/* Heading */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            fontSize: '3.3rem',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          <ShinyText
            text="Hi, Welcome to My Portfolio"
            speed={4}
            delay={3}
            color="#707070"
            shineColor="#ffffff"
            spread={120}
          />
        </div>

        {/* Typing text */}
        <div
          style={{
            position: 'absolute',
            top: '47%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            fontSize: '1.3rem',
            color: 'rgb(200, 200, 200)',
            maxWidth: 420,
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          <TextType
            text={[
              'Frontend Developer',
              'Modern Web Interfaces',
              'React & UI Engineer',
              'Creative Coder',
              'Passionate About Coding',
              'Always Learning',
              'Building Engaging Experiences',
            ]}
            typingSpeed={90}
            pauseDuration={2000}
            deletingSpeed={50}
            showCursor
            cursorCharacter="|"
          />
        </div>

        {/* ✅ Dock Navbar fixed bottom center */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
          }}
        >
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={60}
          magnification={80}
        />
        </div>
      </section>
    </>
  );
}

export default App;