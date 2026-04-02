import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RulesPage from './pages/RulesPage';
import TeamRegistrationPage from './pages/TeamRegistrationPage';
import PlayerRegistrationPage from './pages/PlayerRegistrationPage';
import SchedulePage from './pages/SchedulePage';
import StandingsPage from './pages/StandingsPage';
import SponsorsPage from './pages/SponsorsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import GrowthStrategyPage from './pages/GrowthStrategyPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/team-registration" element={<TeamRegistrationPage />} />
        <Route path="/player-registration" element={<PlayerRegistrationPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/standings" element={<StandingsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/growth-strategy" element={<GrowthStrategyPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
