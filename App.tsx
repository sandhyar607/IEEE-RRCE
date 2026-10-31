import { lazy, Suspense, type LazyExoticComponent, type ReactElement } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import { LoadingPanel } from '@/components/ui/feedback';
import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { RouterProvider, useRouter } from '@/context/RouterContext';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const TeamPage = lazy(() => import('@/pages/TeamPage'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const InnovationHubPage = lazy(() => import('@/pages/InnovationHubPage'));
const PublicationsPage = lazy(() => import('@/pages/PublicationsPage'));
const AchievementsPage = lazy(() => import('@/pages/AchievementsPage'));
const OpportunitiesPage = lazy(() => import('@/pages/OpportunitiesPage'));
const MembershipPage = lazy(() => import('@/pages/MembershipPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const NewJoinerPage = lazy(() => import('@/pages/NewJoinerPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const PassportPage = lazy(() => import('@/pages/PassportPage'));
const TeamFinderPage = lazy(() => import('@/pages/TeamFinderPage'));
const AdminPage = lazy(() => import('@/pages/AdminPage'));
const MentorConnectPage = lazy(() => import('@/pages/MentorConnectPage'));
const CertificatesPage = lazy(() => import('@/pages/CertificatesPage'));
const AiStudioPage = lazy(() => import('@/pages/AiStudioPage'));
const VerifyCertificatePage = lazy(() => import('@/pages/VerifyCertificatePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const PAGES: Record<string, LazyExoticComponent<() => ReactElement>> = {
  '/': HomePage,
  '/about': AboutPage,
  '/team': TeamPage,
  '/events': EventsPage,
  '/innovation-hub': InnovationHubPage,
  '/publications': PublicationsPage,
  '/achievements': AchievementsPage,
  '/opportunities': OpportunitiesPage,
  '/membership': MembershipPage,
  '/contact': ContactPage,
  '/sign-in': SignInPage,
  '/dashboard': DashboardPage,
  '/new-joiner': NewJoinerPage,
  '/portfolio': PortfolioPage,
  '/passport': PassportPage,
  '/team-finder': TeamFinderPage,
  '/admin': AdminPage,
  '/mentors': MentorConnectPage,
  '/certificates': CertificatesPage,
  '/ai-studio': AiStudioPage,
};

const VERIFY_PREFIX = '/verify/';

function AppRoutes() {
  const { pathname } = useRouter();
  const Page = PAGES[pathname] ?? NotFoundPage;

  return (
    <SiteLayout>
      {pathname.startsWith(VERIFY_PREFIX) ? (
        <VerifyCertificatePage certificateId={pathname.slice(VERIFY_PREFIX.length)} />
      ) : (
        <Page />
      )}
    </SiteLayout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider>
          <Suspense
            fallback={
              <div className="container-page py-24">
                <LoadingPanel label="Loading page" />
              </div>
            }
          >
            <AppRoutes />
          </Suspense>
        </RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
