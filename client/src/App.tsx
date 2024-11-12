import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from './pages/Home';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Launch from './pages/Launch';
import About from './pages/About';
import Profile from './pages/Profile';
import HoroscopePage from './pages/Horoscope';
import Compatibility from './pages/Compatibility';
import Compatibility2 from './pages/Compatibility2';
import Natal_Chart from './pages/Natal_Chart';
import NatalChart_Details from './pages/NatalChart_Details';
import NatalChart_Results from './pages/NatalChart_Results';
import Astrologers from './pages/Astrologers';
import Astrologer2 from './pages/Astrologer2';
import PaymentSuccess from './pages/PaymentSuccess';
import Payment from './pages/Payment';
import Palmistry from './pages/Palmistry';
import PalmAnalysis from './pages/PalmAnalysis';
import PalmResult from './pages/PalmResult';
import TarotHome from './pages/Tarot_Home';
import Tarot_Category from './pages/Tarot_Category';
import Tarot_Card from './pages/Tarot_Card';
import Tarot_Interpretation from './pages/Tarot_Interpretation';
import HoroscopeResult from './pages/HoroscopeResult';
import SignupAstrologer from './pages/Astro/SignupAstrologer';
import LaunchAstro from './pages/Astro/LaunchAstro';
import SignIn_Astro from './pages/Astro/SigninAstro';
import AstroDashboard from './pages/Astro/Dashboard';
import SideHeader from './components/AstroHeader/SideHeader';
import TopHeader from './components/AstroHeader/TopHeader';
import GoLive from './pages/Astro/GoLive';
import Performance from './pages/Astro/Performance';
import History from './pages/Astro/History';
import Notification from './pages/Astro/Notification';
import AstroProfile from './pages/Astro/Profile';
import CallAppointment from './pages/Astro/Appointment';
import PrivateRoute from './components/PrivateRoute';

function Layout() {
  const location = useLocation();
  
  // Paths where header should be shown
  const showFooter = ['/', '/about'];
  const showHeader = [
    '/', '/search', '/about', '/profile', '/features/horoscope', '/features/compatibility',
    '/features/compatibility2', '/features/natalChart', '/natalChart_Details', 
    '/natalChart_Results', '/astrologers', '/features/palmistry', '/palmResult', 
    '/features/tarotHome', '/tarot_Category','/horoscope/result'
  ];

  const showAstroHeader = ['/astro_Dashboard','/astro/goLive', '/astro/callAppointment', '/astro/performance', '/astro/history', '/astro/notification', '/astro/profile']

  // Check if path starts with `/astrologers/` to handle dynamic :id routes
  const isAstrologerDetailPage = location.pathname.startsWith('/astrologers/');
  const isTarotCardPage = location.pathname.startsWith('/tarotCard/');
  const isTarotResultPage = location.pathname.startsWith('/tarot_Result/');

  return (
    <>
      {/* Show header for paths or dynamic astrologer detail pages */}
      {(showHeader.includes(location.pathname) || isAstrologerDetailPage || isTarotCardPage || isTarotResultPage) && <Header />}

      <Routes>

        {/* users path */}
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />

        <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/launch' element={<Launch />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
            <Route path='/features/horoscope' element={<HoroscopePage />} />
            <Route path='/horoscope/result' element={<HoroscopeResult />} />
            <Route path='/features/compatibility' element={<Compatibility />} />
            <Route path='/features/compatibility2' element={<Compatibility2 />} />
            <Route path='/features/natalChart' element={<Natal_Chart />} />
            <Route path='/natalChart_Details' element={<NatalChart_Details />} />
            <Route path='/natalChart_Results' element={< NatalChart_Results/>} />
            <Route path='/features/palmistry' element={< Palmistry />} />
            <Route path='/palmAnalysis' element={< PalmAnalysis />} />
            <Route path='/palmResult' element={< PalmResult />} />
            <Route path='/features/tarotHome' element={< TarotHome />} />
            <Route path='/tarot_Category' element={< Tarot_Category />} />
            <Route path='/tarotCard/:id' element={< Tarot_Card />} />
            <Route path='/tarot_Result/:id' element={< Tarot_Interpretation />} />
            <Route path='/astrologers' element={< Astrologers/>} />
            <Route path='/astrologers/:id' element={< Astrologer2 />} />
            <Route path='/payment' element={< Payment />} />
            <Route path='/paymentSuccess' element={< PaymentSuccess />} />
        </Route>

      </Routes>
      {/* Show footer only on specific pages */}
      {showFooter.includes(location.pathname) && <Footer />}

      {/* Astrologers path */}
      
      {(showAstroHeader.includes(location.pathname)) && <TopHeader />}
      {(showAstroHeader.includes(location.pathname)) && <SideHeader />}
      <Routes>
        
        <Route path='/signUp_Astro' element={<SignupAstrologer />} />
        <Route path='/signIn_Astro' element={<SignIn_Astro />} />

        <Route element={<PrivateRoute />}>
            <Route path='/launchAstro' element={<LaunchAstro />} />
            <Route path='/astro_Dashboard' element={<AstroDashboard />} />
            <Route path='/astro/goLive' element={<GoLive />} />
            <Route path='/astro/callAppointment' element={<CallAppointment />} />
            <Route path='/astro/performance' element={<Performance />} />
            <Route path='/astro/history' element={<History />} />
            <Route path='/astro/notification' element={<Notification />} />
            <Route path='/astro/profile' element={<AstroProfile />} />
        </Route>

      </Routes>
      
    </>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App
