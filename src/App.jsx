import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import DigitalFraudTutor from './pages/DigitalFraudTutor.jsx'
import Admin from './pages/admin/Admin.jsx'
import AdminAssets from './pages/admin/AdminAssets.jsx'
import AdminFinance from './pages/admin/AdminFinance.jsx'
import AdminCommunity from './pages/admin/AdminCommunity.jsx'



export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/digital-fraud-tutor" element={<DigitalFraudTutor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="assets" element={<AdminAssets />} />
            <Route path="finance" element={<AdminFinance />} />
            <Route path="community" element={<AdminCommunity />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}