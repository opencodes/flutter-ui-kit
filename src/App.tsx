import React, { useState } from 'react';
import {
  Compass,
  MousePointer,
  Edit3,
  Grid,
  Layout,
  AlertTriangle,
  Layers,
  Calendar,
  ChevronRight,
  ChevronDown,
  Check,
  Copy,
  FileCode,
  HelpCircle,
  Clock,
  ExternalLink,
  Laptop,
  Smartphone,
  Info,
  RotateCcw,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle2,
  MoreHorizontal,
  Search,
  Lock,
  Phone,
  Mail,
  X,
  Menu,
  Download,
  Bolt,
  User,
  Sliders,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  BookOpen,
  Filter,
  Eye,
  CheckCircle,
  Bell,
  Languages,
  LogOut,
  SlidersHorizontal,
  MapPin,
  Clock3,
  Shield,
  FileText,
  Workflow,
  Sparkle,
  Moon,
  Sun,
  HardDrive,
  LayoutGrid,
  Folder,
  FolderOpen
} from 'lucide-react';
import { FLUTTER_DESIGN_SYSTEM_CATEGORIES } from './flutterCode';
import { FlutterWidgetInfo, PropertyRow } from './types';
import { CORE_APPLICATION_SCREENS, AppScreen } from './screensData';
import { FLUTTER_SCREENS_CODE } from './screensCodeData';

const SCREEN_DART_PATHS: Record<string, string> = {
  splash: 'lib/presentation/auth/splash_screen.dart',
  welcome: 'lib/presentation/auth/welcome_screen.dart',
  login: 'lib/presentation/auth/login_screen.dart',
  signup: 'lib/presentation/auth/signup_screen.dart',
  otp: 'lib/presentation/auth/otp_screen.dart',
  forgot_password: 'lib/presentation/auth/forgot_password_screen.dart',
  account_setup: 'lib/presentation/auth/account_setup_screen.dart',
  app_shell: 'lib/presentation/shell/app_shell.dart',
  home_dashboard: 'lib/presentation/home/home_dashboard.dart',
  profile_hub: 'lib/presentation/profile/profile_hub.dart',
  edit_profile: 'lib/presentation/profile/edit_profile_screen.dart',
  settings: 'lib/presentation/profile/settings_screen.dart',
  notification_settings: 'lib/presentation/profile/notification_settings_screen.dart',
  language_selection: 'lib/presentation/profile/language_selection_screen.dart',
  help_support: 'lib/presentation/profile/help_support_screen.dart',
  about_us: 'lib/presentation/profile/about_us_screen.dart',
  notifications_list: 'lib/presentation/notifications/notifications_hub.dart',
  notification_details: 'lib/presentation/notifications/notification_details_screen.dart',
  notifications_empty: 'lib/presentation/notifications/notifications_empty_state.dart',
  global_search: 'lib/presentation/search/global_search_screen.dart',
  search_results: 'lib/presentation/search/search_results_screen.dart',
  search_empty: 'lib/presentation/search/search_empty_state.dart',
  common_states_deck: 'lib/presentation/common_states/common_states_grid.dart',
  success_state: 'lib/presentation/common_states/success_state_screen.dart'
};

export default function App() {
  const [activeMode, setActiveMode] = useState<'storybook' | 'assembler'>('assembler');
  
  // Simulator Navigation & States
  const [activeScreenId, setActiveScreenId] = useState<string>('splash');
  const [setupUserHandle, setSetupUserHandle] = useState<string>('@janesmith');
  const [setupUserRole, setSetupUserRole] = useState<string>('Senior Producer');
  const [setupUserPhone, setSetupUserPhone] = useState<string>('+1 (555) 0192');
  const [loginEmail, setLoginEmail] = useState<string>('jane.smith@monolith.com');
  const [loginPassword, setLoginPassword] = useState<string>('••••••••');
  const [activeNotificationsFilter, setActiveNotificationsFilter] = useState<string>('All');
  const [dismissedNotifications, setDismissedNotifications] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [languageSelected, setLanguageSelected] = useState<string>('English (United States)');
  const [hasUnreadNotification, setHasUnreadNotification] = useState<boolean>(true);
  const [commonStateCategory, setCommonStateCategory] = useState<'success' | 'loading' | 'error' | 'offline'>('success');
  const [licensingAccepted, setLicensingAccepted] = useState<boolean>(true);
  const [isSimulatedLoading, setIsSimulatedLoading] = useState<boolean>(false);

  const [activeCategory, setActiveCategory] = useState<string>('tokens');
  const [activeWidgetId, setActiveWidgetId] = useState<string>('colors');
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'docs'>('preview');
  const [assemblerSidebarTab, setAssemblerSidebarTab] = useState<'modules' | 'folderTree'>('folderTree');
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    lib: true,
    core: true,
    constants: false,
    theme: false,
    shared: true,
    buttons: false,
    inputs: false,
    cards: false,
    feedback: false,
    presentation: true,
    auth: true,
    shell: true,
    home: true,
    profile: false,
    notifications: false,
    search: false,
    common_states: false,
  });

  const toggleFolder = (folderKey: string) => {
    setExpandedFolders(prev => ({ ...prev, [folderKey]: !prev[folderKey] }));
  };
  
  // Widget interactive states configuration
  const [widgetState, setWidgetState] = useState<'default' | 'active' | 'disabled' | 'loading' | 'error' | 'selected'>('default');
  
  // Copy state feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSpecTab, setActiveSpecTab] = useState<'hierarchy' | 'code'>('hierarchy');

  // Live simulation states for interactive playground widgets
  const [demoCheckbox, setDemoCheckbox] = useState<boolean>(false);
  const [demoSwitch, setDemoSwitch] = useState<boolean>(true);
  const [demoRadio, setDemoRadio] = useState<string>('option1');
  const [demoChipSelected, setDemoChipSelected] = useState<string>('Design');
  const [demoTextInput, setDemoTextInput] = useState<string>('');
  const [selectedDemoDate, setSelectedDemoDate] = useState<string>('2026-05-29');
  
  // Dialog / Sheets visible simulation states
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  
  // Custom toast simulation array
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  const [snackbars, setSnackbars] = useState<{ id: number; message: string; action: string }[]>([]);

  // Get current active widget details
  const currentCategory = FLUTTER_DESIGN_SYSTEM_CATEGORIES.find(c => c.id === activeCategory);
  const currentWidget = currentCategory?.widgets.find(w => w.id === activeWidgetId) || FLUTTER_DESIGN_SYSTEM_CATEGORIES[0].widgets[0];

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const triggerToast = (msg: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message: msg }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const triggerSnackbar = (msg: string, actionLabel: string) => {
    const id = Date.now();
    setSnackbars(prev => [...prev, { id, message: msg, action: actionLabel }]);
    setTimeout(() => {
      setSnackbars(prev => prev.filter(s => s.id !== id));
    }, 4500);
  };

  // Maps category IDs to Lucide Icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-4 h-4" />;
      case 'MousePointer': return <MousePointer className="w-4 h-4" />;
      case 'Edit3': return <Edit3 className="w-4 h-4" />;
      case 'Grid': return <Grid className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'AlertTriangle': return <AlertTriangle className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Calendar': return <Calendar className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      {/* Top Professional Banner */}
      <header className="bg-white border-b border-[#E5E5EA] px-8 py-4 sticky top-0 z-40 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-lg shadow-sm font-mono whitespace-nowrap">
              M3
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="bg-black text-white text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-sm uppercase">
                  Flutter 3.x • Material 3
                </span>
                <span className="text-[#86868B] text-xs font-mono">• Apple-Inspired Aesthetics</span>
              </div>
              <h1 id="app-title" className="text-lg font-bold tracking-tight text-[#1D1D1F]">
                Flutter Minimalist M3 UI Kit & Flow Arch
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Main Mode Controller */}
            <div className="bg-[#EDEDF0] p-1 rounded-xl flex gap-1">
              <button
                id="mode-btn-storybook"
                onClick={() => setActiveMode('storybook')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeMode === 'storybook'
                    ? 'bg-white text-black shadow-[0_2px_4px_rgba(0,0,0,0.05)] font-bold'
                    : 'text-[#86868B] hover:text-black font-medium'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                Atomic Components
              </button>
              <button
                id="mode-btn-assembler"
                onClick={() => setActiveMode('assembler')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative ${
                  activeMode === 'assembler'
                    ? 'bg-white text-black shadow-[0_2px_4px_rgba(0,0,0,0.05)] font-bold'
                    : 'text-[#86868B] hover:text-black font-medium'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-[#007AFF]" />
                App Screens Explorer
                <span className="absolute -top-1 -right-1 bg-[#007AFF] text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
                  24
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 bg-[#F5F5F7] rounded-lg px-3 py-2 border border-[#E5E5EA]">
              <Clock className="w-3.5 h-3.5 text-[#86868B]" />
              <span className="text-[11px] font-mono text-[#1D1D1F]">2026-05-29 UTC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Mode Conditional Container */}
      {activeMode === 'storybook' ? (
        <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
        
        {/* Left Navigation: Category / Components Tree Drawer */}
        <section className="lg:col-span-3 flex flex-col gap-6" id="sidebar-navigation">
          
          {/* Architecture Tree Overview Card */}
          <div className="bg-white rounded-2xl border border-[#E5E5EA] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <h3 className="text-xs font-bold tracking-wider text-[#86868B] uppercase mb-4 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-[#1D1D1F]" />
              Design System Modules
            </h3>
            
            <nav className="flex flex-col gap-2">
              {FLUTTER_DESIGN_SYSTEM_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    id={`cat-btn-${cat.id}`}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveWidgetId(cat.widgets[0].id);
                      setWidgetState('default');
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-black text-white font-medium shadow-[0_4px_10px_rgba(0,0,0,0.08)]'
                        : 'text-[#1D1D1F] hover:bg-[#F5F5F7]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-white' : 'text-[#86868B]'}>
                        {getCategoryIcon(cat.icon)}
                      </span>
                      <span>{cat.name}</span>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${isActive ? 'bg-[#333] text-white' : 'bg-[#F2F2F7] text-[#86868B]'}`}>
                      {cat.widgets.length}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Directory Folder Explorer Structure */}
          <div className="bg-white rounded-2xl border border-[#E5E5EA] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex-1">
            <h3 className="text-xs font-bold tracking-wider text-[#86868B] uppercase mb-3 flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-[#1D1D1F]" />
              Dart Project Tree (lib/)
            </h3>
            <p className="text-[11px] text-[#86868B] mb-4">
              Real widget implementations organized by clean architecture layers:
            </p>

            <div className="font-mono text-xs text-[#1D1D1F] space-y-3.5 border-l border-[#E5E5EA] pl-3 ml-2.5">
              {/* Core Layer folder */}
              <div>
                <span className="text-[#86868B] font-semibold">📁 core/</span>
                <div className="pl-4 mt-1 space-y-1">
                  <div className="text-[#86868B]">📁 theme/</div>
                  <button 
                    onClick={() => { setActiveCategory('tokens'); setActiveWidgetId('theme_system'); }}
                    className={`block pl-4 text-left transition ${activeWidgetId === 'theme_system' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                  >
                    📄 app_theme.dart
                  </button>
                  <button 
                    onClick={() => { setActiveCategory('tokens'); setActiveWidgetId('typography'); }} 
                    className={`block pl-4 text-left transition ${activeWidgetId === 'typography' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                  >
                    📄 app_text_styles.dart
                  </button>

                  <div className="text-[#86868B] mt-1">📁 constants/</div>
                  <button 
                    onClick={() => { setActiveCategory('tokens'); setActiveWidgetId('colors'); }}
                    className={`block pl-4 text-left transition ${activeWidgetId === 'colors' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                  >
                    📄 app_colors.dart
                  </button>
                  <button 
                    onClick={() => { setActiveCategory('tokens'); setActiveWidgetId('spacing'); }}
                    className={`block pl-4 text-left transition ${activeWidgetId === 'spacing' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                  >
                    📄 app_spacing.dart
                  </button>
                  <button 
                    onClick={() => { setActiveCategory('tokens'); setActiveWidgetId('radius_shadows'); }}
                    className={`block pl-4 text-left transition ${activeWidgetId === 'radius_shadows' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                  >
                    📄 app_radius_shadows.dart
                  </button>
                </div>
              </div>

              {/* Shared widgets folder */}
              <div>
                <span className="text-[#86868B] font-semibold">📁 shared/</span>
                <div className="pl-4 mt-1 space-y-1.5">
                  <div>
                    <span className="text-[#86868B]">📁 buttons/</span>
                    <div className="pl-3 flex flex-col items-start gap-0.5">
                      <button 
                        onClick={() => { setActiveCategory('buttons'); setActiveWidgetId('primary_button'); }}
                        className={`text-left ${activeWidgetId === 'primary_button' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 primary_button.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('buttons'); setActiveWidgetId('secondary_button'); }}
                        className={`text-left ${activeWidgetId === 'secondary_button' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 secondary_button.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('buttons'); setActiveWidgetId('outline_button'); }}
                        className={`text-left ${activeWidgetId === 'outline_button' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 outline_button.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('buttons'); setActiveWidgetId('app_text_button'); }}
                        className={`text-left ${activeWidgetId === 'app_text_button' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 app_text_button.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('buttons'); setActiveWidgetId('text_and_icon_buttons'); }}
                        className={`text-left ${activeWidgetId === 'text_and_icon_buttons' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 icon_and_loading_buttons.dart
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#86868B]">📁 inputs/</span>
                    <div className="pl-3 flex flex-col items-start gap-0.5">
                      <button 
                        onClick={() => { setActiveCategory('inputs'); setActiveWidgetId('app_text_field'); }}
                        className={`text-left ${activeWidgetId === 'app_text_field' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 app_text_field.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('inputs'); setActiveWidgetId('selection_controls'); }}
                        className={`text-left ${activeWidgetId === 'selection_controls' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 selection_controls.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('date_calendar'); setActiveWidgetId('date_pack'); }}
                        className={`text-left ${activeWidgetId === 'date_pack' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 date_pack.dart
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#86868B]">📁 cards/</span>
                    <div className="pl-3 flex flex-col items-start">
                      <button 
                        onClick={() => { setActiveCategory('cards_layout'); setActiveWidgetId('cards_suite'); }}
                        className={`text-left ${activeWidgetId === 'cards_suite' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 cards_suite.dart
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#86868B]">📁 layouts/</span>
                    <div className="pl-3 flex flex-col items-start">
                      <button 
                        onClick={() => { setActiveCategory('cards_layout'); setActiveWidgetId('layouts_pack'); }}
                        className={`text-left ${activeWidgetId === 'layouts_pack' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 layouts_pack.dart
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#86868B]">📁 dialogues/</span>
                    <div className="pl-3 flex flex-col items-start">
                      <button 
                        onClick={() => { setActiveCategory('feedback_dialogs'); setActiveWidgetId('dialogs_system'); }}
                        className={`text-left ${activeWidgetId === 'dialogs_system' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 dialogs_system.dart
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#86868B]">📁 feedback/</span>
                    <div className="pl-3 flex flex-col items-start gap-1">
                      <button 
                        onClick={() => { setActiveCategory('feedback_dialogs'); setActiveWidgetId('toast_and_snackbar'); }}
                        className={`text-left ${activeWidgetId === 'toast_and_snackbar' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 toast_notifs.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('data_display'); setActiveWidgetId('badge_chip_tag'); }}
                        className={`text-left ${activeWidgetId === 'badge_chip_tag' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 data_elements.dart
                      </button>
                      <button 
                        onClick={() => { setActiveCategory('data_display'); setActiveWidgetId('loading_and_empty_states'); }}
                        className={`text-left ${activeWidgetId === 'loading_and_empty_states' ? 'text-black font-bold underline' : 'hover:text-[#007AFF]'}`}
                      >
                        📄 loading_state.dart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Central Layout: Interactive Storybook Workspace */}
        <section className="lg:col-span-9 flex flex-col gap-6">
          
          {/* Active Category Header Card & Widget Select Pills */}
          <div className="bg-white rounded-2xl border border-[#E5E5EA] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-[#F2F2F7] pb-5">
              <div>
                <h2 className="text-[#86868B] text-xs font-bold uppercase tracking-wider mb-1">
                  Active System Segment
                </h2>
                <div className="flex items-center gap-3">
                  <span className="bg-[#F5F5F7] text-black w-8 h-8 rounded-lg flex items-center justify-center border border-[#E5E5EA]">
                    {currentCategory ? getCategoryIcon(currentCategory.icon) : <Sparkles />}
                  </span>
                  <span className="text-xl font-bold text-[#1D1D1F]">{currentCategory?.name}</span>
                </div>
              </div>

              {/* Code Path indicator */}
              <div className="text-right">
                <span className="text-[11px] font-mono text-[#86868B] block mb-1">Target Package Location:</span>
                <span className="font-mono text-xs bg-[#F5F5F7] border border-[#E5E5EA] px-3 py-1.5 rounded-lg text-[#1D1D1F] font-medium">
                  {currentWidget.fileLocation}
                </span>
              </div>
            </div>

            {/* Sub-navigation selector items */}
            <div>
              <span className="text-xs font-bold text-[#86868B] uppercase tracking-wider block mb-3">
                Select Reusable Component/Token
              </span>
              <div className="flex flex-wrap gap-2">
                {currentCategory?.widgets.map((w) => {
                  const isSelected = w.id === activeWidgetId;
                  return (
                    <button
                      key={w.id}
                      id={`widget-pill-${w.id}`}
                      onClick={() => {
                        setActiveWidgetId(w.id);
                        setWidgetState('default');
                      }}
                      className={`text-xs px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#1D1D1F] border-[#1D1D1F] text-white font-medium shadow-[0_4px_8px_rgba(0,0,0,0.08)]'
                          : 'bg-white border-[#E5E5EA] text-[#1D1D1F] hover:bg-[#F5F5F7]'
                      }`}
                    >
                      {w.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Core Playground Framework Card */}
          <div className="bg-white rounded-2xl border border-[#E5E5EA] shadow-[0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden">
            
            {/* Header Tabs Controls */}
            <div className="bg-[#FBFBFD] border-b border-[#E5E5EA] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-[#1D1D1F] flex items-center gap-2">
                  <span>{currentWidget.name}</span>
                </h3>
                <p className="text-xs text-[#86868B] mt-0.5">{currentWidget.description}</p>
              </div>

              {/* Interactive Segment Controller Tabs */}
              <div className="bg-[#EDEDF0] p-1 rounded-xl flex gap-1">
                {(['preview', 'code', 'docs'] as const).map((tab) => (
                  <button
                    key={tab}
                    id={`tab-btn-${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                      activeTab === tab
                        ? 'bg-white text-black shadow-[0_2px_4px_rgba(0,0,0,0.08)]'
                        : 'text-[#86868B] hover:text-black'
                    }`}
                  >
                    {tab === 'preview' ? '🎨 Interactivity' : tab === 'code' ? '📄 Dart Code' : '📖 Architecture'}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB CONTENT 1: INTERACTIVE APP PREVIEW WITH METRIC SELECTION */}
            {activeTab === 'preview' && (
              <div className="p-6 lg:p-8" id="storybook-preview-panel">
                
                {/* State Toggles (Default, Active, Disabled, Loading, Selected, Error if supported) */}
                <div className="mb-6 bg-[#F5F5F7] p-4 rounded-xl border border-[#E5E5EA] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#86868B]">State Simulation:</span>
                    <span className="text-[11px] text-[#86868B] italic">(Evaluates physical responsiveness)</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {currentWidget.statesSupported.map((state) => (
                      <button
                        key={state}
                        onClick={() => setWidgetState(state)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium capitalize border transition-all ${
                          widgetState === state
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-[#1D1D1F] border-[#E5E5EA] hover:bg-[#E5E5EA]'
                        }`}
                      >
                        {state}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Visual Arena: Simulated iOS Frame or Pure Slate Card */}
                <div className="border border-[#E5E5EA] rounded-2xl bg-gradient-to-b from-[#F9F9FB] to-[#F1F1F4] p-8 flex justify-center items-center relative min-h-[380px]">
                  
                  {/* Absolute State Badge indicator inside Preview Grid */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-[#E5E5EA] px-3 py-1 text-[10px] font-mono text-[#86868B] font-bold rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      widgetState === 'default' ? 'bg-[#34C759]' :
                      widgetState === 'disabled' ? 'bg-[#86868B]' :
                      widgetState === 'loading' ? 'bg-[#007AFF]' :
                      widgetState === 'error' ? 'bg-[#FF3B30]' : 'bg-[#FF9500]'
                    }`} />
                    State: {widgetState}
                  </div>

                  {/* Absolute device simulator choice */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur border border-[#E5E5EA] px-2.5 py-1 text-[10px] font-mono text-[#86868B] rounded-lg flex items-center gap-2 shadow-sm">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Haptic Engine Active</span>
                  </div>

                  {/* HIGH-FIDELITY LIVE COMPONENT RENDERER */}
                  <div className="w-full max-w-sm bg-white rounded-[24px] border border-[#E5E5EA] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.06)] flex flex-col gap-4">
                    
                    {/* Simulator inner status header */}
                    <div className="flex items-center justify-between border-b border-[#F2F2F7] pb-3 mb-1 text-[11px] text-[#86868B] font-mono">
                      <span>STORYBOOK FRAME</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </div>

                    {/* LIVE SIMULATOR SWITCH-BY-WIDGET-ID */}
                    <div className="min-h-[140px] flex flex-col justify-center">

                      {/* colors */}
                      {currentWidget.id === 'colors' && (
                        <div className="grid grid-cols-2 gap-3">
                          <div className="border border-[#E5E5EA] rounded-lg p-2.5 bg-white shadow-sm">
                            <div className="w-full h-8 bg-black rounded-md mb-1.5 border border-[#E5E5EA]" />
                            <p className="text-xs font-bold text-[#1D1D1F]">Primary</p>
                            <p className="text-[10px] text-[#86868B] font-mono">#000000</p>
                          </div>
                          <div className="border border-[#E5E5EA] rounded-lg p-2.5 bg-[#FBFBFD] shadow-sm">
                            <div className="w-full h-8 bg-[#007AFF] rounded-md mb-1.5 border border-[#E5E5EA]" />
                            <p className="text-xs font-bold text-[#1D1D1F]">Accent Blue</p>
                            <p className="text-[10px] text-[#86868B] font-mono">#007AFF</p>
                          </div>
                          <div className="border border-[#E5E5EA] rounded-lg p-2.5 bg-white shadow-sm">
                            <div className="w-full h-8 bg-white rounded-md mb-1.5 border border-[#E5E5EA]" />
                            <p className="text-xs font-bold text-[#1D1D1F]">Background</p>
                            <p className="text-[10px] text-[#86868B] font-mono">#FFFFFF</p>
                          </div>
                          <div className="border border-[#E5E5EA] rounded-lg p-2.5 bg-[#F5F5F7] shadow-sm">
                            <div className="w-full h-8 bg-[#F5F5F7] rounded-md mb-1.5 border border-[#E5E5EA]" />
                            <p className="text-xs font-bold text-[#1D1D1F]">Secondary Surface</p>
                            <p className="text-[10px] text-[#86868B] font-mono">#F5F5F7</p>
                          </div>
                        </div>
                      )}

                      {/* typography */}
                      {currentWidget.id === 'typography' && (
                        <div className={`space-y-4 ${widgetState === 'disabled' ? 'opacity-35 select-none' : ''}`}>
                          <div>
                            <span className="text-[10px] font-mono text-[#86868B] block mb-0.5">AppTextStyles.displayLarge</span>
                            <h1 className="text-[26px] font-bold tracking-tight text-[#1D1D1F] leading-tight">SF Display</h1>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#86868B] block mb-0.5">AppTextStyles.headingLarge</span>
                            <h2 className="text-lg font-semibold tracking-tight text-[#1D1D1F]">Milestone Review</h2>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#86868B] block mb-0.5">AppTextStyles.bodyMedium</span>
                            <p className="text-sm text-[#1D1D1F] leading-relaxed">Ensure all reusable packages compile properly under Flutter 3.x guidelines.</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#86868B] block mb-0.5">AppTextStyles.caption</span>
                            <p className="text-xs text-[#86868B]">Engine logs timestamp 2026-05-29</p>
                          </div>
                        </div>
                      )}

                      {/* spacing */}
                      {currentWidget.id === 'spacing' && (
                        <div className="space-y-2">
                          <p className="text-xs font-mono text-[#86868B]">Layout Gaps Rendering Box:</p>
                          <div className="bg-[#F5F5F7] border border-[#E5E5EA] p-3 rounded-lg space-y-1 text-center text-xs">
                            <div className="font-semibold text-black">Component Block A</div>
                            
                            {/* LIVE VISUAL GAP WIDGET REPRESENTATION */}
                            <div className="py-2.5 bg-[#EAF9EE] text-[#34C759] border border-dashed border-[#34C759]/30 rounded-md font-mono text-[9px] font-semibold">
                              ↕ SizedBox(height: AppSpacing.m) - 16px Gap Widget
                            </div>

                            <div className="font-semibold text-black">Component Block B</div>
                          </div>
                        </div>
                      )}

                      {/* radius_shadows */}
                      {currentWidget.id === 'radius_shadows' && (
                        <div className="space-y-4">
                          <div className={`bg-white border border-[#E5E5EA] p-4 text-center text-xs text-[#1D1D1F] transition-all duration-300 ${
                            widgetState === 'selected' 
                              ? 'rounded-[32px] shadow-[0_20px_32px_rgba(0,0,0,0.06)]' 
                              : 'rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)]'
                          }`}>
                            <span className="font-bold block mb-1">
                              {widgetState === 'selected' ? 'AppRadius.xxl (32px)' : 'AppRadius.m (12px)'}
                            </span>
                            <span>Apple Rounded Corner Calibration</span>
                          </div>

                          <div className="bg-white border text-center p-3 rounded-xl border-[#E5E5EA] text-xs text-[#1D1D1F] shadow-[0_12px_24px_rgba(0,0,0,0.05)]">
                            <span className="font-semibold text-xs block">AppShadows.mediumElevation</span>
                            <span className="text-[10px] text-[#86868B]">Generatively soft and organic</span>
                          </div>
                        </div>
                      )}

                      {/* theme_system */}
                      {currentWidget.id === 'theme_system' && (
                        <div className="space-y-2">
                          <span className="text-[11px] font-mono text-[#86868B]">Material 3 Central ThemeData:</span>
                          <div className="bg-[#F5F5F7] p-3 rounded-xl border border-[#E5E5EA] space-y-2 text-xs">
                            <div className="flex justify-between font-mono">
                              <span>brightness:</span>
                              <span className="font-bold">Brightness.light</span>
                            </div>
                            <div className="flex justify-between font-mono">
                              <span>useMaterial3:</span>
                              <span className="font-bold text-green-600">true</span>
                            </div>
                            <div className="flex justify-between font-mono">
                              <span>canvasColor:</span>
                              <span className="font-bold bg-white px-1.5 border border-gray-300 rounded">0xFFFFFFFF</span>
                            </div>
                            <div className="flex justify-between font-mono">
                              <span>primaryColor:</span>
                              <span className="font-bold bg-black text-white px-1 rounded">0xFF000000</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* primary_button */}
                      {currentWidget.id === 'primary_button' && (
                        <div className="w-full space-y-3">
                          <button
                            disabled={widgetState === 'disabled' || widgetState === 'loading'}
                            onClick={() => triggerToast('Primary Haptic Impact Action Pressed')}
                            className={`w-full h-12 rounded-xl text-sm font-semibold tracking-tight transition duration-200 flex items-center justify-center gap-2 ${
                              widgetState === 'disabled'
                                ? 'bg-[#F2F2F7] text-[#B0B0B5] border border-[#E5E5EA] cursor-not-allowed'
                                : 'bg-[#000000] text-[#FFFFFF] hover:bg-[#333333] active:scale-[0.98]'
                            }`}
                          >
                            {widgetState === 'loading' ? (
                              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <>
                                <Download className="w-4 h-4" />
                                <span>Continue Checkout</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {/* secondary_button */}
                      {currentWidget.id === 'secondary_button' && (
                        <div className="w-full">
                          <button
                            disabled={widgetState === 'disabled' || widgetState === 'loading'}
                            onClick={() => triggerToast('Secondary Action Selected')}
                            className={`w-full h-12 rounded-xl text-sm font-semibold tracking-tight transition duration-200 flex items-center justify-center gap-2 ${
                              widgetState === 'disabled'
                                ? 'bg-[#F2F2F7] text-[#B0B0B5] border border-[#E5E5EA] cursor-not-allowed'
                                : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#EDEDF0] active:scale-[0.98]'
                            }`}
                          >
                            {widgetState === 'loading' ? (
                              <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            ) : (
                              <>
                                <Info className="w-4 h-4 text-black" />
                                <span>Learn More</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {/* outline_button */}
                      {currentWidget.id === 'outline_button' && (
                        <div className="w-full">
                          <button
                            disabled={widgetState === 'disabled'}
                            onClick={() => triggerToast('Outline Trigger Pressed')}
                            className={`w-full h-12 rounded-xl text-sm font-semibold tracking-tight transition duration-200 flex items-center justify-center gap-2 border ${
                              widgetState === 'disabled'
                                ? 'border-[#E5E5EA] text-[#B0B0B5] cursor-not-allowed'
                                : 'border-[#1D1D1F] text-[#1D1D1F] hover:bg-[#F5F5F7] active:scale-[0.98]'
                            }`}
                          >
                            <span>Download Invoice</span>
                          </button>
                        </div>
                      )}

                      {/* app_text_button */}
                      {currentWidget.id === 'app_text_button' && (
                        <div className="w-full flex justify-center items-center py-4">
                          <button
                            disabled={widgetState === 'disabled'}
                            onClick={() => triggerToast('AppTextButton Clicked')}
                            className={`text-[#007AFF] text-sm font-semibold hover:underline px-3 py-1.5 rounded transition ${
                              widgetState === 'disabled' ? 'opacity-40 cursor-not-allowed' : 'active:scale-95'
                            }`}
                          >
                            Forgot details?
                          </button>
                        </div>
                      )}

                      {/* text_and_icon_buttons */}
                      {currentWidget.id === 'text_and_icon_buttons' && (
                        <div className="w-full space-y-4">
                          <div className="flex justify-around items-center">
                            <button 
                              onClick={() => triggerToast('Muted Text Button Triggered')}
                              className="text-[#007AFF] text-sm font-semibold hover:underline px-3 py-1.5 rounded"
                            >
                              Forgot Details?
                            </button>
                            
                            <button 
                              onClick={() => triggerToast('Haptic Icon Button Triggered')}
                              className="w-11 h-11 border border-[#E5E5EA] text-[#1D1D1F] rounded-full flex items-center justify-center hover:bg-[#F5F5F7] active:scale-[0.92] transition"
                            >
                              <Bolt className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <button
                            disabled={widgetState === 'loading'}
                            onClick={() => triggerToast('Stateful Action Executing')}
                            className="w-full h-12 bg-black text-white rounded-xl text-sm font-semibold flex items-center justify-center transition"
                          >
                            {widgetState === 'loading' ? (
                              <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                              <span>Confirm Transaction</span>
                            )}
                          </button>
                        </div>
                      )}

                      {/* app_text_field */}
                      {currentWidget.id === 'app_text_field' && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-semibold text-[#1D1D1F] block mb-1.5">Account Email</label>
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#86868B]">
                                <Mail className="w-4 h-4" />
                              </span>
                              <input
                                type="text"
                                disabled={widgetState === 'disabled'}
                                placeholder="jane.smith@apple.com"
                                className={`w-full h-12 rounded-xl pl-10 pr-4 text-sm border bg-[#FBFBFD] focus:outline-none focus:ring-1.5 ${
                                  widgetState === 'error'
                                    ? 'border-[#FF3B30] focus:ring-[#FF3B30]'
                                    : widgetState === 'disabled'
                                    ? 'border-[#E5E5EA] text-[#B0B0B5] bg-gray-50 cursor-not-allowed'
                                    : 'border-[#E5E5EA] focus:border-black focus:ring-black'
                                }`}
                              />
                            </div>
                            {widgetState === 'error' && (
                              <span className="text-[11px] text-[#FF3B30] mt-1 block">Authentication syntax format invalid</span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* selection_controls */}
                      {currentWidget.id === 'selection_controls' && (
                        <div className="space-y-4">
                          {/* CHECKBOX */}
                          <div className="flex items-center gap-3">
                            <button
                              disabled={widgetState === 'disabled'}
                              onClick={() => setDemoCheckbox(!demoCheckbox)}
                              className={`w-5.5 h-5.5 rounded border flex items-center justify-center transition ${
                                widgetState === 'disabled'
                                  ? 'border-[#E5E5EA] bg-[#F5F5F7]'
                                  : demoCheckbox
                                  ? 'bg-black border-black text-white'
                                  : 'border-[#D1D1D6] hover:border-black'
                              }`}
                            >
                              {demoCheckbox && <Check className="w-3.5 h-3.5" />}
                            </button>
                            <span className={`text-[14px] ${widgetState === 'disabled' ? 'text-[#B0B0B5]' : 'text-[#1D1D1F]'}`}>
                              Agree to standard framework
                            </span>
                          </div>

                          {/* RADIO */}
                          <div className="space-y-2">
                            {['option1', 'option2'].map((opt, i) => {
                              const isSelected = demoRadio === opt;
                              return (
                                <div key={opt} className="flex items-center gap-3">
                                  <button
                                    disabled={widgetState === 'disabled'}
                                    onClick={() => setDemoRadio(opt)}
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                                      widgetState === 'disabled'
                                        ? 'border-[#E5E5EA]'
                                        : 'border-[#D1D1D6]'
                                    }`}
                                  >
                                    {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-black" />}
                                  </button>
                                  <span className={`text-[14px] ${widgetState === 'disabled' ? 'text-[#B0B0B5]' : 'text-[#1D1D1F]'}`}>
                                    Metric Choice {i + 1}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* SWITCH */}
                          <div className="flex items-center justify-between border-t border-[#F2F2F7] pt-3">
                            <span className="text-[14px] font-medium text-[#1D1D1F]">Push Communications</span>
                            <button
                              disabled={widgetState === 'disabled'}
                              onClick={() => setDemoSwitch(!demoSwitch)}
                              className={`w-11 h-6 rounded-full p-0.5 transition duration-200 ${
                                widgetState === 'disabled'
                                  ? 'bg-[#E5E5EA] cursor-not-allowed'
                                  : demoSwitch
                                  ? 'bg-[#34C759]'
                                  : 'bg-[#E5E5EA]'
                              }`}
                            >
                              <div className={`w-5 h-5 rounded-full bg-white shadow transition-all duration-200 ${
                                demoSwitch ? 'translate-x-5' : 'translate-x-0'
                              }`} />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* app_navigation_pack */}
                      {currentWidget.id === 'app_navigation_pack' && (
                        <div className="space-y-4">
                          {/* TOP BAR */}
                          <div className="border border-[#E5E5EA] rounded-xl overflow-hidden bg-white">
                            <div className="bg-[#F5F5F7] px-3 py-2 flex items-center justify-between border-b border-[#E5E5EA]">
                              <Menu className="w-4 h-4 text-[#1D1D1F]" />
                              <span className="text-xs font-bold font-mono tracking-tight text-black">SYSTEM UI</span>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#E5E5EA]" />
                                <span className="w-2 h-2 rounded-full bg-[#E5E5EA]" />
                              </div>
                            </div>
                            <div className="p-3 text-center text-[11px] text-[#86868B]">
                              AppTopBar Layout preview bounds
                            </div>
                          </div>

                          {/* BOTTOM NAV BAR */}
                          <div className="border border-[#E5E5EA] rounded-xl overflow-hidden bg-white">
                            <div className="p-3 text-center text-[11px] text-[#86868B] border-b border-[#E5E5EA]">
                              AppBottomNavBar Layout preview bounds
                            </div>
                            <div className="flex justify-around items-center bg-white py-2">
                              <div className="flex flex-col items-center cursor-pointer text-xs font-bold text-black">
                                <span className="p-1 rounded-full"><Sliders className="w-4 h-4 text-[#1D1D1F]" /></span>
                                <span className="text-[9px]">Terminal</span>
                              </div>
                              <div className="flex flex-col items-center cursor-pointer text-xs text-[#86868B]">
                                <span className="p-1 rounded-full"><Compass className="w-4 h-4" /></span>
                                <span className="text-[9px]">Explore</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* cards_suite */}
                      {currentWidget.id === 'cards_suite' && (
                        <div className="space-y-3">
                          {/* StatCard */}
                          <div className="bg-[#FBFBFD] border border-[#E5E5EA] rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                            <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider">Active Subscribers</span>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="text-2xl font-bold tracking-tight">14,290</span>
                              <span className="text-xs font-semibold text-[#34C759]">+12.4%</span>
                            </div>
                          </div>

                          {/* ActionCard */}
                          <div 
                            onClick={() => triggerToast('ActionCard triggered')}
                            className="bg-white border border-[#E5E5EA] rounded-xl p-3.5 flex items-center justify-between cursor-pointer hover:bg-[#F5F5F7] transition"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-9 h-9 rounded-full bg-[#F5F5F7] text-black flex items-center justify-center">
                                <Bolt className="w-4 h-4" />
                              </span>
                              <div>
                                <span className="text-xs font-bold block text-black">Upgrade Pipeline</span>
                                <span className="text-[10px] text-[#86868B] block">Unlocks faster boundaries</span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#86868B]" />
                          </div>
                        </div>
                      )}

                      {/* layouts_pack */}
                      {currentWidget.id === 'layouts_pack' && (
                        <div className="space-y-2 text-center text-xs">
                          <p className="font-mono text-[10px] text-[#86868B] text-left">Layout bounds mapping card:</p>
                          <div className="border border-dashed border-[#E5E5EA] rounded-xl p-4 bg-[#FBFBFD]">
                            <div className="mb-2 uppercase text-[10px] font-bold tracking-wider text-[#86868B]">AppScaffold Header</div>
                            <div className="border border-black bg-white rounded-lg p-3 text-left font-semibold">
                              Responsive Container Box
                              <span className="text-[10px] font-normal block text-[#86868B] mt-1">
                                Constrained to max-width: 600.0 (anchors tidy widescreen balances)
                              </span>
                            </div>
                            <div className="mt-2 text-[9px] text-[#86868B]">Page Padding: 16.0</div>
                          </div>
                        </div>
                      )}

                      {/* toast_and_snackbar */}
                      {currentWidget.id === 'toast_and_snackbar' && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            {/* SUCCESS BANNER */}
                            <div className="bg-[#EAF9EE] border border-[#34C759]/20 p-3.5 rounded-xl flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                              <div className="text-left text-xs">
                                <span className="font-bold text-black block leading-tight">Connection Stabilized</span>
                                <span className="text-[#86868B] text-[11px] block mt-0.5">Real-time telemetry reports accurate packet delivery ratios.</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <button
                              onClick={() => triggerToast('Operation Saved Successfully')}
                              className="bg-black text-white text-xs font-semibold py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition"
                            >
                              Show Custom Toast
                            </button>
                            <button
                              onClick={() => triggerSnackbar('Settings Modified', 'Undo')}
                              className="bg-[#F5F5F7] border border-[#E5E5EA] text-[#1D1D1F] text-xs font-semibold py-2.5 px-3 rounded-lg hover:bg-[#EDEDF0] transition"
                            >
                              Show Snackbar
                            </button>
                          </div>
                        </div>
                      )}

                      {/* dialogs_system */}
                      {currentWidget.id === 'dialogs_system' && (
                        <div className="space-y-3">
                          <p className="text-xs text-[#86868B] font-semibold text-center mb-1">Overlay Modals Controls:</p>
                          <button
                            onClick={() => setIsConfirmOpen(true)}
                            className="w-full bg-[#1D1D1F] text-white font-semibold rounded-xl text-xs h-12 flex items-center justify-center gap-2 hover:bg-neutral-800 transition active:scale-[0.98]"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>ConfirmDialog Prompt</span>
                          </button>
                          <button
                            onClick={() => setIsBottomSheetOpen(true)}
                            className="w-full bg-white border border-[#E5E5EA] text-[#1D1D1F] font-semibold rounded-xl text-xs h-12 flex items-center justify-center gap-2 hover:bg-[#F5F5F7] transition active:scale-[0.98]"
                          >
                            <Sliders className="w-4 h-4" />
                            <span>Apple-Style BottomSheet</span>
                          </button>
                        </div>
                      )}

                      {/* badge_chip_tag */}
                      {currentWidget.id === 'badge_chip_tag' && (
                        <div className="space-y-4">
                          {/* CHIPS SELECTION ROW */}
                          <div className="flex flex-wrap gap-1.5 items-center justify-center">
                            {['Design', 'Dart', 'M3'].map((item) => {
                              const isSelected = demoChipSelected === item;
                              return (
                                <button
                                  key={item}
                                  onClick={() => setDemoChipSelected(item)}
                                  className={`text-xs px-3.5 py-1.5 rounded-full border transition ${
                                    isSelected
                                      ? 'bg-black text-white border-black font-semibold'
                                      : 'bg-white text-black border-[#E5E5EA] hover:bg-[#F5F5F7]'
                                  }`}
                                >
                                  {item}
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex items-center justify-around mt-4 pt-3 border-t border-[#F2F2F7]">
                            {/* AVATAR WITH BADGE */}
                            <div className="relative">
                              <span className="w-12 h-12 rounded-full bg-neutral-200 text-black flex items-center justify-center font-bold font-mono text-sm border border-[#E5E5EA]">
                                EL
                              </span>
                              <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                4
                              </span>
                            </div>

                            {/* STANDARD DIVIDER */}
                            <div className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#86868B]">
                              Divider Layout
                            </div>
                          </div>
                        </div>
                      )}

                      {/* loading_and_empty_states */}
                      {currentWidget.id === 'loading_and_empty_states' && (
                        <div className="space-y-4">
                          {widgetState === 'loading' && (
                            <div className="py-6 flex flex-col items-center justify-center gap-3">
                              <span className="w-8 h-8 border-3 border-black/10 border-t-black rounded-full animate-spin" />
                              <span className="text-xs text-[#86868B] font-mono">Simulating Skeleton loader...</span>
                            </div>
                          )}

                          {widgetState === 'error' && (
                            <div className="text-center p-4">
                              <div className="w-11 h-11 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2.5">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                              </div>
                              <h4 className="text-xs font-bold">Operational Crash</h4>
                              <p className="text-[11px] text-[#86868B] mt-1">Real-time telemetry reports offline data segments.</p>
                            </div>
                          )}

                          {widgetState !== 'loading' && widgetState !== 'error' && (
                            <div className="text-center p-4">
                              <div className="w-11 h-11 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-2.5">
                                <Layers className="w-5 h-5 text-neutral-400" />
                              </div>
                              <h4 className="text-xs font-bold text-neutral-700">Void Canvas</h4>
                              <p className="text-[11px] text-[#86868B] mt-1">Dataset is empty inside viewport limits.</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* date_pack */}
                      {currentWidget.id === 'date_pack' && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-semibold text-[#1D1D1F] block mb-1">Selected Milestone Date</label>
                            <div className="border border-[#E5E5EA] rounded-xl p-3 flex justify-between items-center text-xs bg-[#FBFBFD]">
                              <span>{selectedDemoDate}</span>
                              <Calendar className="w-4 h-4 text-[#86868B]" />
                            </div>
                          </div>

                          {/* CALENDAR WEEKLY Snapshot STRIP */}
                          <div className="bg-[#EDEDF0] p-1.5 rounded-lg">
                            <div className="flex justify-around text-[10px] text-[#86868B] font-bold mb-1">
                              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                            </div>
                            <div className="flex justify-around items-center text-xs">
                              <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#86868B]">25</span>
                              <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#86868B]">26</span>
                              <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#86868B]">27</span>
                              <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#86868B]">28</span>
                              {/* SELECTED DAY INDICATOR */}
                              <span className="w-6 h-6 rounded-full bg-black text-white font-bold flex items-center justify-center">29</span>
                              <span className="w-6 h-6 rounded-full flex items-center justify-center">30</span>
                              <span className="w-6 h-6 rounded-full flex items-center justify-center">31</span>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Simulator micro footer toolbar */}
                    <div className="border-t border-[#F2F2F7] pt-2 mt-1 text-[10px] font-mono text-[#86868B] flex justify-between items-center">
                      <span>M3 System Widget Mockup</span>
                      <span>Haptic: OK</span>
                    </div>

                  </div>

                </div>

                {/* Properties & Customizations at a glance summaries in Workspace */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-[#FBFBFD] border border-[#E5E5EA] rounded-xl p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#007AFF]" />
                      Selected Guidelines
                    </h4>
                    <ul className="text-xs text-[#86868B] space-y-2 list-disc pl-4">
                      {currentWidget.customizations.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#FBFBFD] border border-[#E5E5EA] rounded-xl p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#34C759]" />
                      M3 Architectural Rule
                    </h4>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      All properties of <span className="font-semibold text-black">{currentWidget.name}</span> default strictly to the Light ThemeData configuration. Never hardcode colors directly in the canvas. Utilize <code className="bg-[#EDEDF0] px-1 py-0.5 rounded text-black font-mono">Theme.of(context)</code> scopes to adapt flawlessly to context variations.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* TAB CONTENT 2: COMPLETE SOURCE DART CODE COPIER */}
            {activeTab === 'code' && (
              <div className="p-0">
                <div className="bg-neutral-900 px-6 py-3 flex justify-between items-center text-xs text-[#86868B] border-b border-neutral-800">
                  <span className="font-mono text-xs text-neutral-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#007AFF]" />
                    {currentWidget.fileLocation}
                  </span>
                  <button
                    onClick={() => handleCopyCode(currentWidget.dartCode, currentWidget.id)}
                    className="bg-neutral-800 text-neutral-200 hover:bg-neutral-700 hover:text-white px-3.5 py-1.5 rounded-lg font-mono text-[11px] flex items-center gap-2.5 transition active:scale-[0.98]"
                  >
                    {copiedId === currentWidget.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#34C759]" />
                        <span className="text-[#34C759]">Copied Complete package!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Production Code</span>
                      </>
                    )}
                  </button>
                </div>
                
                {/* Visual beautiful pre-formatted code window */}
                <div className="bg-neutral-950 p-6 overflow-x-auto">
                  <pre className="font-mono text-[12px] text-neutral-200 leading-relaxed max-h-[500px]">
                    <code>{currentWidget.dartCode}</code>
                  </pre>
                </div>

                {/* Usage illustration card */}
                <div className="p-6 border-t border-[#E5E5EA] bg-[#F5F5F7]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black block mb-3">
                    Design System Usage Example:
                  </h4>
                  <div className="bg-white border border-[#E5E5EA] rounded-xl p-4 overflow-x-auto">
                    <pre className="font-mono text-[11px] text-[#1D1D1F] leading-normal">
                      <code>{currentWidget.usageExample}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: SYSTEM SPECIFICATION / PROPERTIES GUIDE */}
            {activeTab === 'docs' && (
              <div className="p-6 lg:p-8">
                <h4 className="text-sm font-bold text-black mb-1">Component Properties API Reference</h4>
                <p className="text-xs text-[#86868B] mb-5">
                  Universal constructors and type declarations. Strictly mapped for seamless IDE schema autocompletion.
                </p>

                {/* Responsive Properties Table */}
                <div className="border border-[#E5E5EA] rounded-xl overflow-hidden mb-6">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#F5F5F7] border-b border-[#E5E5EA] text-[#86868B] font-bold">
                        <th className="p-3">Property Name</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Default Value</th>
                        <th className="p-3">Functional Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentWidget.properties.map((prop, i) => (
                        <tr key={i} className="border-b border-[#F2F2F7] hover:bg-[#FBFBFD] transition text-[#1D1D1F]">
                          <td className="p-3 font-mono font-semibold">{prop.name}</td>
                          <td className="p-3 font-mono text-[#007AFF]">{prop.type}</td>
                          <td className="p-3 font-mono text-[#86868B]">{prop.defaultValue}</td>
                          <td className="p-3 text-[#1D1D1F]">{prop.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Responsive Widget constraints info */}
                <div className="flex flex-col md:flex-row gap-6 mt-8">
                  <div className="flex-1 bg-white border border-[#E5E5EA] rounded-xl p-5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#86868B] block mb-2">
                      State Behaviors & Accessibility:
                    </span>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      Implements <code className="bg-[#F5F5F7] px-1 py-0.5 rounded text-black font-mono">Semantics</code> widget wrappers mapping high-contrast reader access, dynamic scale multipliers supporting iOS Dynamic Type size changes, and physical system haptic impacts.
                    </p>
                  </div>

                  <div className="flex-1 bg-white border border-[#E5E5EA] rounded-xl p-5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#86868B] block mb-2">
                      Architectural Recommendation:
                    </span>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      Deploy this code within <code className="bg-[#F5F5F7] px-1 py-0.5 rounded text-black font-mono">lib/shared/</code> directory. Register colors and typography in the root application wrapper to ensure design consistency.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Integration Summary Guide and installation tips */}
          <div className="bg-white rounded-2xl border border-[#E5E5EA] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-[#007AFF]" />
                1. Central Registration
              </h4>
              <p className="text-xs text-[#86868B] leading-normal">
                Paste the color tokens inside <code className="text-black bg-gray-100 px-1 rounded font-mono">app_colors.dart</code> to unlock Apple minimalist design accents everywhere.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#34C759]" />
                2. Layout Compliance
              </h4>
              <p className="text-xs text-[#86868B] leading-normal">
                Encase your top scaffolds inside <code className="text-black bg-gray-100 px-1 rounded font-mono">ResponsiveContainer</code> to preserve whitespace blocks on large viewports.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9500]" />
                3. Const Constructors
              </h4>
              <p className="text-xs text-[#86868B] leading-normal">
                All widgets support <code className="text-black bg-gray-100 px-1 rounded font-mono">const</code> compilers to avoid unneeded garbage accumulation loops and frame stutter.
              </p>
            </div>
          </div>

        </section>

      </main>
    ) : (
      /* --- MODULE ASSEMBLY PLATFORM (assembler) --- */
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in" id="visual-assembler-container">
        
        {/* Left Column: Screen Selector Sidebar (LG: Grid Span 3) */}
        <section className="lg:col-span-3 flex flex-col gap-5">
          <div className="bg-white rounded-2xl border border-[#E5E5EA] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2 mb-3">
              <Workflow className="w-4 h-4 text-[#007AFF]" />
              <h3 className="text-xs font-bold tracking-wider text-[#86868B] uppercase">
                Active Modules Map
              </h3>
            </div>
            <p className="text-[11px] text-[#86868B] mb-4">
              Tap any screen or file below to load it into the workspace:
            </p>

            {/* Segmented Controller iOS Style */}
            <div className="flex border border-[#E5E5EA] mb-4 p-0.5 bg-[#F2F2F7] rounded-lg">
              <button
                onClick={() => setAssemblerSidebarTab('modules')}
                className={`flex-1 text-center py-1.5 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all focus:outline-none cursor-pointer ${
                  assemblerSidebarTab === 'modules'
                    ? 'bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                App Modules
              </button>
              <button
                onClick={() => setAssemblerSidebarTab('folderTree')}
                className={`flex-1 text-center py-1.5 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all focus:outline-none cursor-pointer ${
                  assemblerSidebarTab === 'folderTree'
                    ? 'bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Project Tree
              </button>
            </div>

            <div className="space-y-4 max-h-[640px] overflow-y-auto pr-1">
              {assemblerSidebarTab === 'modules' ? (
                /* Categorized Screens Group */
                ['MODULE 1: AUTHENTICATION', 'MODULE 2: MAIN APP SHELL', 'MODULE 3: HOME', 'MODULE 4: PROFILE', 'MODULE 5: NOTIFICATIONS', 'MODULE 6: SEARCH', 'MODULE 7: COMMON STATES'].map((mod) => {
                  const groupScreens = CORE_APPLICATION_SCREENS.filter(s => s.module === mod);
                  return (
                    <div key={mod} className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#86868B] tracking-wider block bg-[#F5F5F7] px-2 py-1 rounded">
                        {mod}
                      </span>
                      <div className="flex flex-col gap-1 pl-1">
                        {groupScreens.map((sc) => {
                          const isActive = activeMode === 'assembler' && sc.id === activeScreenId;
                          return (
                            <button
                              key={sc.id}
                              onClick={() => {
                                setActiveMode('assembler');
                                setActiveScreenId(sc.id);
                                triggerToast(`Loaded ${sc.name.split('. ').pop()}`);
                              }}
                              className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all flex items-center justify-between ${
                                isActive
                                  ? 'bg-black text-white font-medium shadow-sm'
                                  : 'text-[#1D1D1F] hover:bg-[#F2F2F7]'
                              }`}
                            >
                              <span className="truncate pr-2">{sc.name}</span>
                              <ChevronRight className={`w-3 h-3 shrink-0 ${isActive ? 'text-white' : 'text-[#86868B]'}`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                /* Interactive Folder Structure Project Explorer */
                <div className="space-y-1 text-xs font-mono select-none" id="flutter-folder-tree">
                  {/* lib/ */}
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleFolder('lib')}
                      className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-800 font-bold cursor-pointer"
                    >
                      {expandedFolders.lib ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                      {expandedFolders.lib ? <FolderOpen className="w-3.5 h-3.5 text-blue-500 fill-blue-50/50 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-blue-500 fill-blue-50/30 shrink-0" />}
                      <span className="truncate">lib</span>
                    </button>
                    
                    {expandedFolders.lib && (
                      <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-1">
                        
                        {/* core/ */}
                        <div className="flex flex-col">
                          <button
                            onClick={() => toggleFolder('core')}
                            className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-700 font-semibold cursor-pointer"
                          >
                            {expandedFolders.core ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                            {expandedFolders.core ? <FolderOpen className="w-3.5 h-3.5 text-[#5856D6]/80 fill-[#5856D6]/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-[#5856D6]/80 shrink-0" />}
                            <span className="truncate">core</span>
                          </button>
                          
                          {expandedFolders.core && (
                            <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-1">
                              
                              {/* constants/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('constants')}
                                  className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.constants ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.constants ? <FolderOpen className="w-3.5 h-3.5 text-[#FF9500] fill-[#FF9500]/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-[#FF9500] shrink-0" />}
                                  <span className="truncate">constants</span>
                                </button>
                                {expandedFolders.constants && (
                                  <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-0.5">
                                    {[
                                      { name: 'app_colors.dart', cat: 'tokens', wid: 'colors' },
                                      { name: 'app_spacing.dart', cat: 'tokens', wid: 'spacing' },
                                      { name: 'app_radius_shadows.dart', cat: 'tokens', wid: 'radius_shadows' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'storybook' && activeCategory === f.cat && activeWidgetId === f.wid;
                                      return (
                                        <button
                                          key={f.name}
                                          onClick={() => {
                                            setActiveMode('storybook');
                                            setActiveCategory(f.cat);
                                            setActiveWidgetId(f.wid);
                                            triggerToast(`Viewing Token: ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1.5 py-1 px-2 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-[#E5F1FF] text-[#007AFF] font-medium border-l-2 border-[#007AFF]' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3.5 h-3.5 shrink-0 ${isViewing ? 'text-[#007AFF]' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[10.5px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* theme/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('theme')}
                                  className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.theme ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.theme ? <FolderOpen className="w-3.5 h-3.5 text-purple-500 fill-purple-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-purple-500 shrink-0" />}
                                  <span className="truncate">theme</span>
                                </button>
                                {expandedFolders.theme && (
                                  <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-0.5">
                                    <button
                                      onClick={() => {
                                        setActiveMode('storybook');
                                        setActiveCategory('tokens');
                                        setActiveWidgetId('typography');
                                        triggerToast(`Viewing Design Token: app_text_styles.dart`);
                                      }}
                                      className={`w-full flex items-center gap-1.5 py-1 px-2 rounded transition-all text-left group cursor-pointer ${
                                        activeMode === 'storybook' && activeCategory === 'tokens' && activeWidgetId === 'typography'
                                          ? 'bg-[#E5F1FF] text-[#007AFF] font-medium border-l-2 border-[#007AFF]'
                                          : 'text-gray-500 hover:bg-[#F2F2F7]'
                                      }`}
                                    >
                                      <FileCode className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#007AFF] shrink-0" />
                                      <span className="truncate text-[10.5px]">app_text_styles.dart</span>
                                    </button>
                                  </div>
                                )}
                              </div>

                            </div>
                          )}
                        </div>

                        {/* shared/ */}
                        <div className="flex flex-col">
                          <button
                            onClick={() => toggleFolder('shared')}
                            className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-700 font-semibold cursor-pointer"
                          >
                            {expandedFolders.shared ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                            {expandedFolders.shared ? <FolderOpen className="w-3.5 h-3.5 text-[#30B0C7] fill-[#30B0C7]/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-[#30B0C7] shrink-0" />}
                            <span className="truncate">shared</span>
                          </button>
                          
                          {expandedFolders.shared && (
                            <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-1">
                              {/* buttons/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('buttons')}
                                  className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.buttons ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.buttons ? <FolderOpen className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                                  <span className="truncate">buttons</span>
                                </button>
                                {expandedFolders.buttons && (
                                  <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-0.5">
                                    {[
                                      { name: 'primary_button.dart', cat: 'buttons', wid: 'primary_button' },
                                      { name: 'secondary_button.dart', cat: 'buttons', wid: 'secondary_button' },
                                      { name: 'outline_button.dart', cat: 'buttons', wid: 'outline_button' },
                                      { name: 'app_text_button.dart', cat: 'buttons', wid: 'app_text_button' },
                                      { name: 'icon_and_loading_buttons.dart', cat: 'buttons', wid: 'text_and_icon_buttons' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'storybook' && activeCategory === f.cat && activeWidgetId === f.wid;
                                      return (
                                        <button
                                          key={f.name}
                                          onClick={() => {
                                            setActiveMode('storybook');
                                            setActiveCategory(f.cat);
                                            setActiveWidgetId(f.wid);
                                            triggerToast(`Viewing Shared Widget: ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1.5 py-1 px-2 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-[#EAF9EE] text-[#34C759] font-medium border-l-2 border-[#34C759]' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3.5 h-3.5 shrink-0 ${isViewing ? 'text-[#34C759]' : 'text-gray-400 group-hover:text-[#34C759]'}`} />
                                          <span className="truncate text-[10px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* inputs/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('inputs')}
                                  className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.inputs ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.inputs ? <FolderOpen className="w-3.5 h-3.5 text-rose-500 fill-rose-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-rose-500 shrink-0" />}
                                  <span className="truncate">inputs</span>
                                </button>
                                {expandedFolders.inputs && (
                                  <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-0.5">
                                    {[
                                      { name: 'app_text_field.dart', cat: 'inputs', wid: 'text_fields' },
                                      { name: 'selection_controls.dart', cat: 'inputs', wid: 'toggles_checkboxes' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'storybook' && activeCategory === f.cat && activeWidgetId === f.wid;
                                      return (
                                        <button
                                          key={f.name}
                                          onClick={() => {
                                            setActiveMode('storybook');
                                            setActiveCategory(f.cat);
                                            setActiveWidgetId(f.wid);
                                            triggerToast(`Viewing Shared Widget: ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1.5 py-1 px-2 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-[#E5F1FF] text-[#007AFF] font-medium border-l-2 border-[#007AFF]' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3.5 h-3.5 shrink-0 ${isViewing ? 'text-[#007AFF]' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[10px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* cards/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('cards')}
                                  className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.cards ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.cards ? <FolderOpen className="w-3.5 h-3.5 text-cyan-500 fill-cyan-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-cyan-500 shrink-0" />}
                                  <span className="truncate">cards</span>
                                </button>
                                {expandedFolders.cards && (
                                  <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-0.5">
                                    <button
                                      onClick={() => {
                                        setActiveMode('storybook');
                                        setActiveCategory('cards');
                                        setActiveWidgetId('cards_suite');
                                        triggerToast(`Viewing Shared Widget: cards_suite.dart`);
                                      }}
                                      className={`w-full flex items-center gap-1.5 py-1 px-2 rounded transition-all text-left group cursor-pointer ${
                                        activeMode === 'storybook' && activeCategory === 'cards' && activeWidgetId === 'cards_suite'
                                          ? 'bg-[#E5F1FF] text-[#007AFF] font-medium border-l-2 border-[#007AFF]'
                                          : 'text-gray-500 hover:bg-[#F2F2F7]'
                                      }`}
                                    >
                                      <FileCode className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#007AFF] shrink-0" />
                                      <span className="truncate text-[10px]">cards_suite.dart</span>
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* feedback/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('feedback')}
                                  className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.feedback ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.feedback ? <FolderOpen className="w-3.5 h-3.5 text-orange-500 fill-orange-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
                                  <span className="truncate">feedback</span>
                                </button>
                                {expandedFolders.feedback && (
                                  <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-0.5">
                                    {[
                                      { name: 'data_elements.dart', cat: 'feedback', wid: 'badges_tags' },
                                      { name: 'dialogs_and_sheets.dart', cat: 'feedback', wid: 'modal_dialogs' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'storybook' && activeCategory === f.cat && activeWidgetId === f.wid;
                                      return (
                                        <button
                                          key={f.name}
                                          onClick={() => {
                                            setActiveMode('storybook');
                                            setActiveCategory(f.cat);
                                            setActiveWidgetId(f.wid);
                                            triggerToast(`Viewing Shared Widget: ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1.5 py-1 px-2 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-[#E5F1FF] text-[#007AFF] font-medium border-l-2 border-[#007AFF]' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3.5 h-3.5 shrink-0 ${isViewing ? 'text-[#007AFF]' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[10px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                            </div>
                          )}
                        </div>

                        {/* presentation/ */}
                        <div className="flex flex-col">
                          <button
                            onClick={() => toggleFolder('presentation')}
                            className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-gray-50 rounded transition text-left text-gray-700 font-semibold cursor-pointer"
                          >
                            {expandedFolders.presentation ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                            {expandedFolders.presentation ? <FolderOpen className="w-3.5 h-3.5 text-[#007AFF] fill-[#007AFF]/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-[#007AFF] shrink-0" />}
                            <span className="truncate">presentation</span>
                          </button>
                          
                          {expandedFolders.presentation && (
                            <div className="border-l border-gray-100 ml-3 pl-1.5 space-y-1.5">
                              
                              {/* auth/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('auth')}
                                  className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.auth ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.auth ? <FolderOpen className="w-3.5 h-3.5 text-[#5856D6] fill-[#5856D6]/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-[#5856D6] shrink-0" />}
                                  <span className="truncate">auth</span>
                                </button>
                                {expandedFolders.auth && (
                                  <div className="border-l border-gray-100 ml-2.5 pl-1 space-y-0.5">
                                    {[
                                      { name: 'splash_screen.dart', id: 'splash' },
                                      { name: 'welcome_screen.dart', id: 'welcome' },
                                      { name: 'login_screen.dart', id: 'login' },
                                      { name: 'signup_screen.dart', id: 'signup' },
                                      { name: 'otp_screen.dart', id: 'otp' },
                                      { name: 'forgot_password_screen.dart', id: 'forgot_password' },
                                      { name: 'account_setup_screen.dart', id: 'account_setup' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'assembler' && activeScreenId === f.id;
                                      return (
                                        <button
                                          key={f.id}
                                          onClick={() => {
                                            setActiveMode('assembler');
                                            setActiveScreenId(f.id);
                                            triggerToast(`Mounted ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1 py-0.5 px-1.5 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-black text-white font-medium shadow-sm' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3 h-3 shrink-0 ${isViewing ? 'text-white' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[9.5px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* shell/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('shell')}
                                  className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.shell ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.shell ? <FolderOpen className="w-3.5 h-3.5 text-sky-500 fill-sky-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-sky-500 shrink-0" />}
                                  <span className="truncate">shell</span>
                                </button>
                                {expandedFolders.shell && (
                                  <div className="border-l border-gray-100 ml-2.5 pl-1 space-y-0.5">
                                    <button
                                      onClick={() => {
                                        setActiveMode('assembler');
                                        setActiveScreenId('app_shell');
                                        triggerToast(`Mounted app_shell.dart`);
                                      }}
                                      className={`w-full flex items-center gap-1 py-0.5 px-1.5 rounded transition-all text-left group cursor-pointer ${
                                        activeMode === 'assembler' && activeScreenId === 'app_shell'
                                          ? 'bg-black text-white font-medium shadow-sm'
                                          : 'text-gray-500 hover:bg-[#F2F2F7]'
                                      }`}
                                    >
                                      <FileCode className="w-3 h-3 text-gray-400 group-hover:text-[#007AFF] shrink-0" />
                                      <span className="truncate text-[9.5px]">app_shell.dart</span>
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* home/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('home')}
                                  className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.home ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.home ? <FolderOpen className="w-3.5 h-3.5 text-[#30B0C7] fill-[#30B0C7]/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-[#30B0C7] shrink-0" />}
                                  <span className="truncate">home</span>
                                </button>
                                {expandedFolders.home && (
                                  <div className="border-l border-gray-100 ml-2.5 pl-1 space-y-0.5">
                                    <button
                                      onClick={() => {
                                        setActiveMode('assembler');
                                        setActiveScreenId('home_dashboard');
                                        triggerToast(`Mounted home_dashboard.dart`);
                                      }}
                                      className={`w-full flex items-center gap-1 py-0.5 px-1.5 rounded transition-all text-left group cursor-pointer ${
                                        activeMode === 'assembler' && activeScreenId === 'home_dashboard'
                                          ? 'bg-black text-white font-medium shadow-sm'
                                          : 'text-gray-500 hover:bg-[#F2F2F7]'
                                      }`}
                                    >
                                      <FileCode className="w-3 h-3 text-gray-400 group-hover:text-[#007AFF] shrink-0" />
                                      <span className="truncate text-[9.5px]">home_dashboard.dart</span>
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* profile/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('profile')}
                                  className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.profile ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.profile ? <FolderOpen className="w-3.5 h-3.5 text-teal-500 fill-teal-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-teal-500 shrink-0" />}
                                  <span className="truncate">profile</span>
                                </button>
                                {expandedFolders.profile && (
                                  <div className="border-l border-gray-100 ml-2.5 pl-1 space-y-0.5">
                                    {[
                                      { name: 'profile_hub.dart', id: 'profile_hub' },
                                      { name: 'edit_profile.dart', id: 'edit_profile' },
                                      { name: 'settings_screen.dart', id: 'settings' },
                                      { name: 'notification_settings.dart', id: 'notification_settings' },
                                      { name: 'language_selection.dart', id: 'language_selection' },
                                      { name: 'help_support.dart', id: 'help_support' },
                                      { name: 'about_us_screen.dart', id: 'about_us' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'assembler' && activeScreenId === f.id;
                                      return (
                                        <button
                                          key={f.id}
                                          onClick={() => {
                                            setActiveMode('assembler');
                                            setActiveScreenId(f.id);
                                            triggerToast(`Mounted ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1 py-0.5 px-1.5 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-black text-white font-medium shadow-sm' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3 h-3 shrink-0 ${isViewing ? 'text-white' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[9.5px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* notifications/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('notifications')}
                                  className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.notifications ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.notifications ? <FolderOpen className="w-3.5 h-3.5 text-amber-500 fill-amber-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                                  <span className="truncate">notifications</span>
                                </button>
                                {expandedFolders.notifications && (
                                  <div className="border-l border-gray-100 ml-2.5 pl-1 space-y-0.5">
                                    {[
                                      { name: 'notifications_hub.dart', id: 'notifications_list' },
                                      { name: 'notification_details.dart', id: 'notification_details' },
                                      { name: 'notifications_empty.dart', id: 'notifications_empty' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'assembler' && activeScreenId === f.id;
                                      return (
                                        <button
                                          key={f.id}
                                          onClick={() => {
                                            setActiveMode('assembler');
                                            setActiveScreenId(f.id);
                                            triggerToast(`Mounted ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1 py-0.5 px-1.5 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-black text-white font-medium shadow-sm' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3 h-3 shrink-0 ${isViewing ? 'text-white' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[9.5px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* search/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('search')}
                                  className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.search ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.search ? <FolderOpen className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-indigo-500 shrink-0" />}
                                  <span className="truncate">search</span>
                                </button>
                                {expandedFolders.search && (
                                  <div className="border-l border-gray-100 ml-2.5 pl-1 space-y-0.5">
                                    {[
                                      { name: 'global_search.dart', id: 'global_search' },
                                      { name: 'search_results.dart', id: 'search_results' },
                                      { name: 'search_empty_state.dart', id: 'search_empty' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'assembler' && activeScreenId === f.id;
                                      return (
                                        <button
                                          key={f.id}
                                          onClick={() => {
                                            setActiveMode('assembler');
                                            setActiveScreenId(f.id);
                                            triggerToast(`Mounted ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap-1 py-0.5 px-1.5 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-black text-white font-medium shadow-sm' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3 h-3 shrink-0 ${isViewing ? 'text-white' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[9.5px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* common_states/ */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => toggleFolder('common_states')}
                                  className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-gray-50 rounded transition text-left text-gray-600 cursor-pointer"
                                >
                                  {expandedFolders.common_states ? <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                                  {expandedFolders.common_states ? <FolderOpen className="w-3.5 h-3.5 text-orange-500 fill-orange-500/5 shrink-0" /> : <Folder className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
                                  <span className="truncate">common_states</span>
                                </button>
                                {expandedFolders.common_states && (
                                  <div className="border-l border-gray-100 ml-2.5 pl-1 space-y-0.5">
                                    {[
                                      { name: 'common_states_grid.dart', id: 'common_states_deck' },
                                      { name: 'success_state.dart', id: 'success_state' }
                                    ].map(f => {
                                      const isViewing = activeMode === 'assembler' && activeScreenId === f.id;
                                      return (
                                        <button
                                          key={f.id}
                                          onClick={() => {
                                            setActiveMode('assembler');
                                            setActiveScreenId(f.id);
                                            triggerToast(`Mounted ${f.name}`);
                                          }}
                                          className={`w-full flex items-center gap- py-0.5 px-1.5 rounded transition-all text-left group cursor-pointer ${
                                            isViewing 
                                              ? 'bg-black text-white font-medium shadow-sm' 
                                              : 'text-gray-500 hover:bg-[#F2F2F7]'
                                          }`}
                                        >
                                          <FileCode className={`w-3 h-3 shrink-0 ${isViewing ? 'text-white' : 'text-gray-400 group-hover:text-[#007AFF]'}`} />
                                          <span className="truncate text-[9.5px]">{f.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                            </div>
                          )}
                        </div>

                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Flow Auto Runner Card */}
          <div className="bg-white rounded-2xl border border-[#E5E5EA] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-1">
              <Sparkle className="w-3.5 h-3.5 text-[#FF9500]" />
              Flow Auto Tickers
            </h4>
            <p className="text-[11px] text-[#86868B] leading-relaxed mb-4">
              Step through the primary application lifecycle chronologically:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setActiveScreenId('splash');
                  triggerToast('Simulating initial cold start sequence...');
                }}
                className="text-[10px] uppercase tracking-wide font-bold py-2 border border-[#E5E5EA] rounded-lg bg-[#FBFBFD] hover:bg-[#F5F5F7]"
              >
                Reset Flow
              </button>
              <button
                onClick={() => {
                  setActiveScreenId('home_dashboard');
                  triggerToast('Bypassed credentials and entered portal');
                }}
                className="text-[10px] uppercase tracking-wide font-bold py-2 bg-black text-white rounded-lg hover:bg-[#333]"
              >
                Go Home
              </button>
            </div>
          </div>
        </section>

        {/* Center Column: Interactive iOS Phone Simulator (LG: Grid Span 4) */}
        <section className="lg:col-span-4 flex flex-col items-center">
          
          <div className="w-full max-w-[340px] bg-[#1D1D1F] rounded-[48px] p-3.5 shadow-2xl relative border-[4px] border-black ring-1 ring-[#D1D1D6]/40">
            {/* Speaker Earpiece Grill */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-12 h-1 bg-[#222] rounded-full mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
            </div>

            {/* Inner High fidelity Canvas Base */}
            <div className="w-full bg-white rounded-[36px] overflow-hidden min-h-[560px] flex flex-col relative select-none">
              
              {/* iPhone Status Bar */}
              <div className="bg-white px-6 pt-3.5 pb-1 flex justify-between items-center text-[10px] font-mono text-black font-semibold z-20 shrink-0 select-none">
                <span>17:24 <span className="text-[8px] text-gray-500 font-bold">UTC</span></span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] bg-[#EAF9EE] text-[#34C759] font-bold px-1 rounded">5G</span>
                  <div className="w-4 h-2.5 bg-black rounded-xs p-0.5 flex items-center pr-1 relative">
                    <span className="bg-white h-full w-4/5 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* SIMULATED DEVICE VIEWPORT - HEIGHT CONTROLLABLE */}
              <div className="flex-1 overflow-y-auto max-h-[470px] flex flex-col bg-white" id="device-scrollport">
                
                {/* 1. splash */}
                {activeScreenId === 'splash' && (
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white min-h-[420px]">
                    <div className="w-16 h-16 rounded-2xl border border-black flex items-center justify-center mb-6 shadow-sm">
                      <Compass className="w-8 h-8 text-black animate-spin-slow" />
                    </div>
                    <h2 className="text-xl font-mono tracking-widest text-black font-extrabold mb-1">MONOLITH</h2>
                    <p className="text-[10px] uppercase tracking-widest text-[#86868B] font-mono font-medium mb-12">Aesthetics Engine</p>
                    
                    <div className="space-y-2 w-full max-w-[180px]">
                      <button
                        onClick={() => {
                          setIsSimulatedLoading(true);
                          setTimeout(() => {
                            setIsSimulatedLoading(false);
                            setActiveScreenId('welcome');
                            triggerToast('Cold start initialization completed!');
                          }, 900);
                        }}
                        className="w-full bg-black text-white text-[11px] py-2.5 rounded-lg uppercase tracking-wider font-bold transition hover:bg-neutral-800"
                      >
                        {isSimulatedLoading ? 'Connecting...' : 'Initialize Flow'}
                      </button>
                      <span className="block text-[8px] text-[#86868B] font-mono font-medium">Binds to Native App Scaffolds</span>
                    </div>
                  </div>
                )}

                {/* 2. welcome */}
                {activeScreenId === 'welcome' && (
                  <div className="flex-1 flex flex-col justify-between p-6 bg-white min-h-[420px]">
                    <div className="pt-8">
                      <div className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center mb-6">
                        <Sparkles className="w-4 h-4 text-black" />
                      </div>
                      <h1 className="text-2xl font-bold tracking-tight text-black leading-tight mb-3">
                        A new standard<br />for planning.
                      </h1>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        Curated event systems, elite vendor grids, and responsive orchestration designed strictly for Material 3 frameworks.
                      </p>
                      
                      <div className="border border-gray-100 p-2.5 rounded-xl bg-[#F5F5F7] space-y-1">
                        <span className="text-[8px] uppercase tracking-wider font-bold text-gray-400 block">System Verification Status</span>
                        <div className="flex items-center gap-1.5 text-[10px] text-black font-mono font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
                          <span>M3 Pure White Compliant</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mt-8">
                      <button
                        onClick={() => {
                          setActiveScreenId('signup');
                          triggerToast('Loaded Signup View');
                        }}
                        className="w-full bg-black text-white text-xs py-3 rounded-xl font-bold transition hover:bg-neutral-800 flex items-center justify-center gap-1.5"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      
                      <button
                        onClick={() => {
                          setActiveScreenId('login');
                          triggerToast('Loaded Login View');
                        }}
                        className="w-full border border-gray-200 text-black text-xs py-3 rounded-xl font-medium hover:bg-gray-50 transition"
                      >
                        I already have an account
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. login */}
                {activeScreenId === 'login' && (
                  <div className="flex-1 flex flex-col p-6 bg-white min-h-[420px]">
                    <button
                      onClick={() => setActiveScreenId('welcome')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1 mb-6 hover:text-black transition"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-xl font-extrabold tracking-tight text-black mb-1">Welcome back</h2>
                    <p className="text-[11px] text-[#86868B] mb-6">Please authenticate with your credentials.</p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-1">Email Address</label>
                        <input
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full text-xs border border-gray-200 p-2.5 rounded-lg focus:outline-none focus:border-black font-semibold text-black"
                          placeholder="jane.smith@monolith.com"
                        />
                      </div>

                      <div className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block">Secure Password</label>
                          <button
                            onClick={() => {
                              setActiveScreenId('forgot_password');
                              triggerToast('Loaded Forgot Password Matrix');
                            }}
                            className="text-[9px] text-blue-600 font-semibold hover:underline"
                          >
                            Forgot key?
                          </button>
                        </div>
                        <input
                          type="password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="w-full text-xs border border-gray-200 p-2.5 rounded-lg focus:outline-none focus:border-black font-mono"
                          placeholder="••••••••"
                        />
                      </div>

                      <button
                        onClick={() => {
                          if (!loginEmail) {
                            triggerToast('Please provide a valid email');
                            return;
                          }
                          setActiveScreenId('otp');
                          triggerToast('Sent OTP Code to email');
                        }}
                        className="w-full bg-black text-white text-xs py-3 rounded-xl font-bold transition hover:bg-neutral-800"
                      >
                        Sign In with Safe Mode
                      </button>

                      <p className="text-[10px] text-center text-gray-400 mt-4">
                        Don't have an account?{' '}
                        <button
                          onClick={() => setActiveScreenId('signup')}
                          className="text-black font-bold hover:underline"
                        >
                          Sign Up
                        </button>
                      </p>
                    </div>
                  </div>
                )}

                {/* 4. signup */}
                {activeScreenId === 'signup' && (
                  <div className="flex-1 flex flex-col p-6 bg-white min-h-[420px]">
                    <button
                      onClick={() => setActiveScreenId('welcome')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1 mb-4"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-xl font-extrabold text-black mb-1">Begin journey</h2>
                    <p className="text-[11px] text-[#86868B] mb-5">Build dynamic M3 layouts cleanly.</p>

                    <div className="space-y-3.5">
                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-1">Full Name</label>
                        <input
                          type="text"
                          defaultValue="Jane Smith"
                          className="w-full text-xs border border-gray-200 p-2 rounded-lg font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-1">Institutional Email</label>
                        <input
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full text-xs border border-gray-200 p-2 rounded-lg font-semibold text-black"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-1">Password</label>
                        <input
                          type="password"
                          className="w-full text-xs border border-gray-200 p-2 rounded-lg font-mono text-black"
                          placeholder="••••••••"
                        />
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <input
                          type="checkbox"
                          checked={licensingAccepted}
                          onChange={(e) => setLicensingAccepted(e.target.checked)}
                          className="mt-0.5"
                        />
                        <span className="text-[10px] text-[#86868B] leading-tight">
                          I accept User Licensing Framework policies.
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          if (!licensingAccepted) {
                            triggerToast('Please accept the licensing terms first');
                            return;
                          }
                          setActiveScreenId('otp');
                          triggerToast('M3 Verification Pin triggered');
                        }}
                        disabled={!licensingAccepted}
                        className={`w-full text-xs py-3 rounded-xl font-bold transition-all ${
                          licensingAccepted ? 'bg-black text-white hover:bg-neutral-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Register Account Security
                      </button>
                    </div>
                  </div>
                )}

                {/* 5. otp */}
                {activeScreenId === 'otp' && (
                  <div className="flex-1 flex flex-col p-6 bg-white min-h-[420px]">
                    <button
                      onClick={() => setActiveScreenId('login')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1 mb-6"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-xl font-bold tracking-tight text-black mb-1">Enter Security Pin</h2>
                    <p className="text-[11px] text-[#86868B] mb-6">
                      A unique security PIN has been dispatched to your primary account identifier.
                    </p>

                    {/* Security Boxes Pin Row */}
                    <div className="grid grid-cols-4 gap-3 mb-8">
                      {['4', '9', '8', '2'].map((digit, i) => (
                        <div
                          key={i}
                          className="h-12 border-2 border-black rounded-lg flex items-center justify-center font-mono font-bold text-lg bg-gray-50/50 shadow-sm"
                        >
                          {digit}
                        </div>
                      ))}
                    </div>

                    <div className="text-center mb-6">
                      <span className="text-[10px] font-mono text-gray-400">Resend Pin Code in 45s</span>
                    </div>

                    <button
                      onClick={() => {
                        setActiveScreenId('account_setup');
                        triggerToast('Pin token verified!');
                      }}
                      className="w-full bg-black text-white text-xs py-3 rounded-xl font-bold transition hover:bg-neutral-800"
                    >
                      Settle Token Verification
                    </button>
                  </div>
                )}

                {/* 6. forgot_password */}
                {activeScreenId === 'forgot_password' && (
                  <div className="flex-1 flex flex-col p-6 bg-white min-h-[420px]">
                    <button
                      onClick={() => setActiveScreenId('login')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1 mb-6"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-xl font-bold tracking-tight text-black mb-1">Recover Key Matrix</h2>
                    <p className="text-[11px] text-[#86868B] mb-6">
                      Request a secure reactivation link mapped to your institutional profile.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-1">Registered Institutional Email</label>
                        <input
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full text-xs border border-gray-200 p-2.5 rounded-lg focus:outline-none focus:border-black font-semibold text-black"
                        />
                      </div>

                      <button
                        onClick={() => {
                          triggerToast('Activation link dispatched!');
                          setActiveScreenId('login');
                        }}
                        className="w-full bg-black text-white text-xs py-3 rounded-xl font-bold transition hover:bg-neutral-800"
                      >
                        Request Recovery Transport
                      </button>
                    </div>
                  </div>
                )}

                {/* 7. account_setup */}
                {activeScreenId === 'account_setup' && (
                  <div className="flex-1 flex flex-col p-6 bg-white min-h-[420px]">
                    <h2 className="text-xl font-extrabold tracking-tight text-black mb-1">Configure Profile</h2>
                    <p className="text-[11px] text-[#86868B] mb-5">Personalize workspace coordinates.</p>

                    <div className="flex flex-col items-center gap-2 mb-6">
                      <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg select-none relative shadow-md">
                        JS
                        <span className="absolute bottom-0 right-0 bg-[#007AFF] text-white p-1 rounded-full border border-white">
                          <Plus className="w-2.5 h-2.5" />
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-[#86868B] uppercase tracking-wider">Upload Profile Frame</span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-0.5">User Handle</label>
                        <input
                          type="text"
                          value={setupUserHandle}
                          onChange={(e) => setSetupUserHandle(e.target.value)}
                          className="w-full text-xs border border-gray-200 p-2 rounded-lg font-mono text-black font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-0.5">Designation Role</label>
                        <input
                          type="text"
                          value={setupUserRole}
                          onChange={(e) => setSetupUserRole(e.target.value)}
                          className="w-full text-xs border border-gray-200 p-2 rounded-lg text-black font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-[#86868B] block mb-0.5">Emergency Contact Cell</label>
                        <input
                          type="text"
                          value={setupUserPhone}
                          onChange={(e) => setSetupUserPhone(e.target.value)}
                          className="w-full text-xs border border-gray-200 p-2 rounded-lg font-mono text-black font-semibold"
                        />
                      </div>

                      <button
                        onClick={() => {
                          setIsSimulatedLoading(true);
                          triggerToast('Spinning up environment...');
                          setTimeout(() => {
                            setIsSimulatedLoading(false);
                            setActiveScreenId('home_dashboard');
                            triggerToast('Entered Monolith Portal successfully!');
                          }, 1000);
                        }}
                        className="w-full bg-black text-white text-xs py-3 rounded-xl font-bold transition hover:bg-neutral-800"
                      >
                        {isSimulatedLoading ? 'Syncing Schema...' : 'Enter Dashboard Core'}
                      </button>
                    </div>
                  </div>
                )}

                {/* 8. app_shell */}
                {activeScreenId === 'app_shell' && (
                  <div className="flex-1 flex flex-col justify-between p-6 bg-[#FBFBFD] min-h-[420px]">
                    <div className="border border-[#E5E5EA] bg-white rounded-2xl p-4 text-center">
                      <LayoutGrid className="w-8 h-8 text-black mx-auto mb-3" />
                      <h3 className="text-sm font-bold text-black mb-1">Persistent Base Shell</h3>
                      <p className="text-[11px] text-[#86868B] leading-relaxed">
                        Evaluates Flutter Nav Page controllers, listening to tap actions to switch view layouts instantly.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 p-3.5 rounded-xl space-y-1.5 font-mono text-[10px]">
                      <span className="text-gray-400 uppercase font-bold text-[8px] block">Reactive Routing Stack:</span>
                      <div>Active View: <span className="text-black font-bold">HomeDashboardScreen</span></div>
                      <div>Haptic Status: <span className="text-green-500 font-bold">Enabled</span></div>
                    </div>
                  </div>
                )}

                {/* 9. home_dashboard */}
                {activeScreenId === 'home_dashboard' && (
                  <div className="flex-1 flex flex-col bg-white min-h-[420px]">
                    {/* Shell Top Header Bar */}
                    <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-black text-white font-bold text-[10px] flex items-center justify-center">JS</div>
                        <span className="text-xs font-bold text-black truncate max-w-[80px]">Jane S.</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setActiveScreenId('global_search');
                            triggerToast('Search Query bar active');
                          }}
                          className="p-1 text-gray-500 hover:text-black"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setActiveScreenId('notifications_list');
                            setHasUnreadNotification(false);
                            triggerToast('Opened notifications central');
                          }}
                          className="p-1 text-gray-500 hover:text-black relative"
                        >
                          <Bell className="w-4 h-4" />
                          {hasUnreadNotification && (
                            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FF3B30] border border-white" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Scroll content */}
                    <div className="p-4 space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#86868B]">Portal Active Status</span>
                        <h2 className="text-lg font-black tracking-tight text-black">Morning, Jane.</h2>
                      </div>

                      {/* Fake search input placeholder */}
                      <button
                        onClick={() => setActiveScreenId('global_search')}
                        className="w-full flex items-center justify-between border border-gray-200 px-3 py-2.5 rounded-xl text-left bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <span className="text-xs text-gray-400">Search events, spaces, coordinates...</span>
                        <Search className="w-3.5 h-3.5 text-gray-400" />
                      </button>

                      {/* Portal Quick Actions */}
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#86868B] block mb-2">Quick Actions Grid</span>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { name: 'Add Event', label: 'E-Code', icon: Plus },
                            { name: 'Scan Code', label: 'Camera', icon: Eye },
                            { name: 'Add Vendor', label: 'Vendor', icon: User }
                          ].map((act, i) => (
                            <button
                              key={i}
                              onClick={() => triggerToast(`Action: ${act.name} compiled`)}
                              className="border border-[#E5E5EA] bg-[#FBFBFD] hover:bg-[#F5F5F7] p-2 rounded-xl text-center flex flex-col items-center gap-1.5 transition"
                            >
                              <act.icon className="w-4 h-4 text-black" />
                              <span className="text-[8px] font-mono font-bold text-gray-400 block truncate">{act.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Hero Spotlight Upcoming Event */}
                      <div className="border border-black bg-black text-white p-3.5 rounded-2xl relative shadow-md">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[8px] font-mono font-bold bg-[#333] px-2 py-0.5 rounded text-white uppercase tracking-wider">UPCOMING SUMMIT</span>
                          <span className="text-[10px] font-bold text-[#FF9500]">VIP</span>
                        </div>
                        <h4 className="text-xs font-bold leading-tight mb-1">Annual Executive Summit 2026</h4>
                        <div className="flex items-center gap-1.5 text-[9px] text-[#86868B] font-mono mt-2">
                          <MapPin className="w-3 h-3 text-[#007AFF]" />
                          <span>Orpheum Center • May 30</span>
                        </div>
                      </div>

                      {/* Stats Table rows */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border border-gray-200 bg-white p-2.5 rounded-xl">
                          <span className="text-[9px] font-mono uppercase text-[#86868B] block whitespace-nowrap">Confirmed Techs</span>
                          <span className="text-sm font-bold text-black font-mono">42 Units</span>
                        </div>
                        <div className="border border-gray-200 bg-white p-2.5 rounded-xl">
                          <span className="text-[9px] font-mono uppercase text-[#86868B] block whitespace-nowrap">Pending Ledger</span>
                          <span className="text-sm font-bold text-[#FF3B30] font-mono">$8,290</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 10. profile_hub */}
                {activeScreenId === 'profile_hub' && (
                  <div className="flex-1 flex flex-col bg-white min-h-[420px] p-4 text-center">
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          setActiveScreenId('settings');
                          triggerToast('Preferences Matrix active');
                        }}
                        className="p-1 bg-gray-50 border border-gray-100 rounded-lg text-gray-500 hover:text-black"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-col items-center gap-1 mx-auto mt-2 mb-4">
                      <div className="w-16 h-16 rounded-full bg-neutral-900 text-white font-extrabold text-xl flex items-center justify-center">JS</div>
                      <h3 className="text-sm font-bold text-black mt-2">Jane Smith</h3>
                      <span className="text-[10px] text-gray-400 font-mono">Senior Event Architect</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 border-y border-gray-100 py-3 mb-4">
                      <div>
                        <span className="text-[9px] font-mono text-gray-400 uppercase block">Total Projects</span>
                        <span className="text-sm font-bold text-black font-mono">148</span>
                      </div>
                      <div className="border-l border-gray-100">
                        <span className="text-[9px] font-mono text-gray-400 uppercase block">System Rating</span>
                        <span className="text-sm font-bold text-[#FF9500] font-mono">4.98</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 text-left mb-6">
                      <button
                        onClick={() => setActiveScreenId('edit_profile')}
                        className="w-full text-xs p-2 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span className="text-black font-semibold">Account Credentials</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                      
                      <button
                        onClick={() => setActiveScreenId('settings')}
                        className="w-full text-xs p-2 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span className="text-black font-semibold">System Preferences</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                      </button>

                      <button
                        onClick={() => setActiveScreenId('help_support')}
                        className="w-full text-xs p-2 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span className="text-black font-semibold">Help Desk / FAQ</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                      </button>

                      <button
                        onClick={() => setActiveScreenId('about_us')}
                        className="w-full text-xs p-2 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span className="text-black font-semibold">About Monolith Software</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setActiveScreenId('welcome');
                        triggerToast('Logged Out session');
                      }}
                      className="w-full text-xs py-2.5 border border-[#FF3B30] text-[#FF3B30] font-bold rounded-xl hover:bg-red-50/30 transition flex items-center justify-center gap-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out Session</span>
                    </button>
                  </div>
                )}

                {/* 11. edit_profile */}
                {activeScreenId === 'edit_profile' && (
                  <div className="flex-1 flex flex-col p-4 bg-white min-h-[420px] space-y-4">
                    <button
                      onClick={() => setActiveScreenId('profile_hub')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-base font-extrabold tracking-tight text-black">Credentials</h2>

                    <div className="space-y-3">
                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block mb-0.5">Display Name</label>
                        <input
                          type="text"
                          defaultValue="Jane Smith"
                          className="w-full border border-gray-200 p-2 text-xs rounded-lg text-black font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block mb-0.5">Contact Email</label>
                        <input
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full border border-gray-200 p-2 text-xs rounded-lg text-black font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block mb-0.5">Contact CellPhone</label>
                        <input
                          type="text"
                          value={setupUserPhone}
                          onChange={(e) => setSetupUserPhone(e.target.value)}
                          className="w-full border border-gray-200 p-2 text-xs rounded-lg text-black font-semibold"
                        />
                      </div>

                      <button
                        onClick={() => {
                          setActiveScreenId('profile_hub');
                          triggerToast('Profile modifications updated successfully!');
                        }}
                        className="w-full bg-black text-white text-xs py-3 rounded-xl font-bold transition hover:bg-neutral-800"
                      >
                        Save Modifications
                      </button>
                    </div>
                  </div>
                )}

                {/* 12. settings */}
                {activeScreenId === 'settings' && (
                  <div className="flex-1 flex flex-col bg-[#FBFBFD] min-h-[420px] p-4 space-y-4">
                    <button
                      onClick={() => setActiveScreenId('profile_hub')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-base font-extrabold text-black">System Preferences</h2>

                    <div className="bg-white border text-xs border-gray-100 rounded-xl divide-y divide-gray-100 divide-y-1">
                      <div className="p-3 flex items-center justify-between">
                        <span className="font-semibold">Push Notifications</span>
                        <input type="checkbox" defaultChecked className="outline-none" />
                      </div>
                      <div className="p-3 flex items-center justify-between">
                        <span className="font-semibold">Email Newsletters</span>
                        <input type="checkbox" className="outline-none" />
                      </div>
                      <button
                        onClick={() => setActiveScreenId('language_selection')}
                        className="p-3 flex items-center justify-between w-full text-left font-semibold"
                      >
                        <span>Active Language</span>
                        <div className="flex items-center gap-1 text-gray-400 font-normal">
                          <span className="text-[10px] font-mono">{languageSelected.split(' ')[0]}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </button>
                      <div className="p-3 flex items-center justify-between">
                        <span className="font-semibold text-gray-400">Biometric FaceID</span>
                        <span className="text-[10px] text-[#34C759] font-bold">ACTIVE</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveScreenId('notification_settings');
                        triggerToast('Advanced notification rules opened');
                      }}
                      className="w-full text-xs py-2.5 border border-dashed border-gray-300 rounded-xl font-bold hover:bg-gray-100 transition"
                    >
                      Detailed Alert Controls
                    </button>
                  </div>
                )}

                {/* 13. notification_settings */}
                {activeScreenId === 'notification_settings' && (
                  <div className="flex-1 flex flex-col bg-[#FBFBFD] p-4 min-h-[420px] space-y-4">
                    <button
                      onClick={() => setActiveScreenId('settings')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-base font-extrabold text-black">Alert Controls</h2>

                    <div className="bg-white border text-xs border-gray-100 rounded-xl p-3 space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold block">New Event Applications</span>
                          <span className="text-[8px] text-gray-400">Receive alert when organizers request code base</span>
                        </div>
                        <input type="checkbox" defaultChecked />
                      </div>
                      
                      <div className="flex justify-between items-center pt-2.5 border-t border-gray-50">
                        <div>
                          <span className="font-semibold block">Invoice Payments Settle</span>
                          <span className="text-[8px] text-gray-400">Push notice when billing escrow settles</span>
                        </div>
                        <input type="checkbox" defaultChecked />
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveScreenId('settings');
                        triggerToast('Alert specifications settled!');
                      }}
                      className="w-full bg-black text-white text-xs py-2.5 rounded-xl font-bold transition hover:bg-neutral-800"
                    >
                      Settle Configuration
                    </button>
                  </div>
                )}

                {/* 14. language_selection */}
                {activeScreenId === 'language_selection' && (
                  <div className="flex-1 flex flex-col bg-white p-4 min-h-[420px] space-y-4">
                    <button
                      onClick={() => setActiveScreenId('settings')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-base font-extrabold text-black">Select Language</h2>

                    <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[220px]">
                      {[
                        'English (United States)',
                        'Español (España)',
                        'Français (France)',
                        'Deutsch (Deutschland)',
                        '日本語 (日本)'
                      ].map((lang) => {
                        const isChosen = lang === languageSelected;
                        return (
                          <button
                            key={lang}
                            onClick={() => {
                              setLanguageSelected(lang);
                              triggerToast(`Locale swapped: ${lang.split(' ')[0]}`);
                              setActiveScreenId('settings');
                            }}
                            className={`w-full text-xs p-2.5 rounded-lg border text-left flex items-center justify-between transition ${
                              isChosen
                                ? 'bg-black text-white border-black font-bold'
                                : 'border-gray-100 hover:bg-gray-50 text-black'
                            }`}
                          >
                            <span>{lang}</span>
                            {isChosen && <Check className="w-3.5 h-3.5 text-white" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 15. help_support */}
                {activeScreenId === 'help_support' && (
                  <div className="flex-1 flex flex-col bg-white p-4 min-h-[420px] space-y-4">
                    <button
                      onClick={() => setActiveScreenId('profile_hub')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h2 className="text-base font-extrabold text-black">Help Desk Center</h2>

                    <div className="border border-gray-100 bg-[#F5F5F7] p-2 rounded-xl text-center">
                      <span className="text-[10px] font-semibold block text-black">Popular Documentation</span>
                    </div>

                    <div className="space-y-1.5 text-xs text-left">
                      {['Standard Onboarding Rules', 'Adding Vendors under Material 3'].map((item, i) => (
                        <div key={i} className="p-2 border border-thin border-gray-100 rounded bg-gray-50/50 hover:bg-gray-50 shrink-0">
                          📄 {item}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setIsConfirmOpen(true);
                      }}
                      className="w-full bg-black text-white text-xs py-2.5 rounded-xl font-bold transition hover:bg-neutral-800"
                    >
                      Submit Operational Ticket
                    </button>
                  </div>
                )}

                {/* 16. about_us */}
                {activeScreenId === 'about_us' && (
                  <div className="flex-1 flex flex-col p-4 bg-white min-h-[420px] text-center justify-between">
                    <div className="space-y-3">
                      <button
                        onClick={() => setActiveScreenId('profile_hub')}
                        className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                      >
                        <ArrowLeft className="w-3 h-3" /> Back
                      </button>

                      <div className="w-12 h-12 rounded-xl border border-black flex items-center justify-center mx-auto mt-4">
                        <Compass className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-sm font-mono font-bold tracking-widest text-black mt-2">MONOLITH CORP</h3>
                      <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest block">System Version 3.4.0</span>
                    </div>

                    <div className="space-y-1.5 text-[9px] text-[#86868B] font-mono border-t border-gray-100 pt-3">
                      <div>Engine: Flutter SDK 3.x</div>
                      <div>Theme: Cupertino-Mono M3</div>
                      <div>License: Apache-2.0 Contract</div>
                    </div>
                  </div>
                )}

                {/* 17. notifications_list */}
                {activeScreenId === 'notifications_list' && (
                  <div className="flex-1 flex flex-col bg-white min-h-[420px]">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between shrink-0">
                      <div>
                        <h2 className="text-sm font-extrabold text-black">Alerts</h2>
                        <span className="text-[9px] text-gray-400 font-mono">Realtime WebSockets logs</span>
                      </div>
                      <button
                        onClick={() => {
                          setDismissedNotifications(['billing_1', 'vendor_1']);
                          setActiveScreenId('notifications_empty');
                          triggerToast('Notifications database cleared');
                        }}
                        className="text-[9px] uppercase font-mono font-bold bg-neutral-900 text-white px-2 py-1 rounded"
                      >
                        Clear All
                      </button>
                    </div>

                    {/* Horizontal Category Chips */}
                    <div className="px-4 py-2 border-b border-gray-50 flex gap-1.5 overflow-x-auto shrink-0 select-none">
                      {['All', 'Billing', 'System'].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setActiveNotificationsFilter(filter)}
                          className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm border transition ${
                            activeNotificationsFilter === filter
                              ? 'bg-black border-black text-white'
                              : 'bg-white border-gray-200 text-gray-500'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>

                    {/* Scrollable list */}
                    <div className="p-3 space-y-2.5 overflow-y-auto max-h-[290px]">
                      {(!dismissedNotifications.includes('billing_1') && (activeNotificationsFilter === 'All' || activeNotificationsFilter === 'Billing')) && (
                        <div
                          onClick={() => {
                            setActiveScreenId('notification_details');
                            triggerToast('Opened invoice metadata');
                          }}
                          className="p-3 border border-[#E5E5EA] bg-[#FBFBFD] hover:bg-[#F5F5F7] rounded-xl text-left cursor-pointer transition relative"
                        >
                          <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span className="text-[8px] bg-blue-50 text-blue-600 font-mono font-bold px-1 rounded uppercase tracking-wider block mb-1.5 max-w-max">Billing</span>
                          <h4 className="text-xs font-bold text-black mb-0.5">Milestone INV-1092 Settle</h4>
                          <p className="text-[10px] text-gray-500 line-clamp-2">Invoice processed for Executive Annual Gala 2026. Funds cleared escrow.</p>
                        </div>
                      )}

                      {(!dismissedNotifications.includes('vendor_1') && (activeNotificationsFilter === 'All' || activeNotificationsFilter === 'System')) && (
                        <div
                          onClick={() => triggerToast('System update logs read-only')}
                          className="p-3 border border-[#E5E5EA] bg-white hover:bg-[#F2F2F7] rounded-xl text-left transition"
                        >
                          <span className="text-[8px] bg-purple-50 text-purple-600 font-mono font-bold px-1 rounded uppercase tracking-wider block mb-1.5 max-w-max">System</span>
                          <h4 className="text-xs font-semibold text-black mb-0.5">Workspace Upgraded v3.4</h4>
                          <p className="text-[10px] text-gray-500 line-clamp-1">The system active directory has been migrated.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 18. notification_details */}
                {activeScreenId === 'notification_details' && (
                  <div className="flex-1 flex flex-col p-4 bg-white min-h-[420px] space-y-4">
                    <button
                      onClick={() => setActiveScreenId('notifications_list')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <div>
                      <span className="text-[8px] bg-[#EAF9EE] text-[#34C759] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Escrow Cleared</span>
                      <h2 className="text-sm font-extrabold text-black mt-2">Escrow #INV-1092 Released</h2>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/50 space-y-2 text-[10px] font-mono">
                      <div className="flex justify-between border-b pb-1.5 border-gray-100">
                        <span className="text-gray-400">Total Cleared</span>
                        <span className="text-black font-bold">$18,250.00 USD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Target Code</span>
                        <span className="text-black font-semibold">GALA-SUMMIT-26</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 leading-normal">
                      The clearing house verified contract parameters on first checkout check. Capital has been distributed to registered catering vendors.
                    </p>

                    <button
                      onClick={() => triggerToast('PDF download dispatched')}
                      className="w-full bg-black text-white text-xs py-2.5 rounded-xl font-bold transition hover:bg-neutral-800"
                    >
                      Download Transact Receipt
                    </button>
                  </div>
                )}

                {/* 19. notifications_empty */}
                {activeScreenId === 'notifications_empty' && (
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white min-h-[420px]">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center mb-4 text-gray-300">
                      <Bell className="w-5 h-5 text-gray-300" />
                    </div>
                    <h3 className="text-xs font-bold text-black mb-1">Queue Synchronized</h3>
                    <p className="text-[10px] text-gray-400 leading-relaxed max-w-[180px] mb-6">
                      No pending transaction notifications are active in your local cluster today.
                    </p>

                    <button
                      onClick={() => {
                        setDismissedNotifications([]);
                        setActiveScreenId('notifications_list');
                        triggerToast('A alerts items recovered!');
                      }}
                      className="border border-black text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-50 transition"
                    >
                      Restore Notifications
                    </button>
                  </div>
                )}

                {/* 20. global_search */}
                {activeScreenId === 'global_search' && (
                  <div className="flex-1 flex flex-col p-4 bg-white min-h-[420px] space-y-4">
                    <button
                      onClick={() => setActiveScreenId('home_dashboard')}
                      className="self-start text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Dashboard
                    </button>

                    <h2 className="text-base font-extrabold text-black">Query Portal</h2>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search coordinate database..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border border-gray-200 p-2 text-xs rounded-lg pl-8 focus:outline-none focus:border-black font-semibold"
                      />
                      <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3" />
                    </div>

                    <div>
                      <span className="text-[8px] uppercase tracking-wider font-extrabold text-[#86868B] block mb-2">Popular Scopes</span>
                      <div className="flex flex-wrap gap-1.5">
                        {['Designers', 'Coordinators', 'Auditoriums'].map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              setSearchQuery(tag);
                              triggerToast(`Filter applied: ${tag}`);
                            }}
                            className="bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] text-[9px] font-bold px-2 py-1 rounded-full transition"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="divide-y divide-gray-100 pt-2 shrink-0">
                      <button
                        onClick={() => {
                          setSearchQuery('Annual Executive Summit 2026');
                          setActiveScreenId('search_results');
                          triggerToast('Found results matching Summit 2026');
                        }}
                        className="w-full py-2.5 text-xs text-left text-gray-500 hover:text-black hover:underline font-medium block"
                      >
                        ⏱ Annual Executive Summit 2026
                      </button>
                      
                      <button
                        onClick={() => {
                          setActiveScreenId('search_empty');
                          triggerToast('Result search matching non-existent directory');
                        }}
                        className="w-full py-2.5 text-xs text-left text-gray-500 hover:text-black hover:underline font-medium block"
                      >
                        ⏱ Escrow non-existent cluster
                      </button>
                    </div>
                  </div>
                )}

                {/* 21. search_results */}
                {activeScreenId === 'search_results' && (
                  <div className="flex-1 flex flex-col bg-white min-h-[420px]">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => setActiveScreenId('global_search')}
                        className="text-[10px] uppercase font-bold text-[#86868B] flex items-center gap-1"
                      >
                        <ArrowLeft className="w-3 h-3" /> Search
                      </button>
                      <span className="text-[9px] font-mono font-bold text-green-600 uppercase bg-[#EAF9EE] px-2 py-0.5 rounded">3 Matches</span>
                    </div>

                    <div className="p-4 space-y-2.5 overflow-y-auto max-h-[340px]">
                      {[
                        { title: 'Annual Executive Summit 2026', type: 'Main Stage Event • Orpheum', Relevance: '98%' },
                        { title: 'Vendor Assembly Summit', type: 'Room 40 • Technical Space', Relevance: '84%' }
                      ].map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setActiveScreenId('home_dashboard');
                            triggerToast('Navigated to selected portal event context');
                          }}
                          className="p-3 border border-gray-100 rounded-xl text-left bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-xs font-bold text-black">{item.title}</h4>
                            <span className="text-[10px] font-mono font-bold text-[#007AFF]">{item.Relevance}</span>
                          </div>
                          <p className="text-[10px] text-gray-400 font-medium">{item.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 22. search_empty */}
                {activeScreenId === 'search_empty' && (
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white min-h-[420px]">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center mb-4 text-gray-300">
                      <Search className="w-5 h-5 text-gray-300" />
                    </div>
                    <h3 className="text-xs font-bold text-black mb-1">No Results Matching</h3>
                    <p className="text-[10px] text-gray-400 leading-relaxed max-w-[180px] mb-6">
                      We searched coordinates and event databases but found nothing matching.
                    </p>

                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveScreenId('global_search');
                      }}
                      className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-neutral-800 transition"
                    >
                      Modify Query Term
                    </button>
                  </div>
                )}

                {/* 23. common_states_deck */}
                {activeScreenId === 'common_states_deck' && (
                  <div className="flex-1 flex flex-col bg-white min-h-[420px]">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between shrink-0">
                      <span className="text-xs font-bold text-black font-mono">Common States Suite</span>
                    </div>

                    {/* horizontal filter tab selection */}
                    <div className="px-4 py-2 border-b border-gray-50 flex gap-1 select-none shrink-0 overflow-x-auto">
                      {(['success', 'loading', 'error', 'offline'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setCommonStateCategory(cat);
                            triggerToast(`Swapped simulation card: ${cat}`);
                          }}
                          className={`text-[8px] font-mono uppercase font-bold py-1 px-1.5 rounded-sm border transition ${
                            commonStateCategory === cat
                              ? 'bg-black text-white border-black'
                              : 'bg-white border-gray-100 text-[#86868B]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Viewport for the chosen state */}
                    <div className="p-4 flex-1 flex flex-col justify-center text-center">
                      
                      {commonStateCategory === 'success' && (
                        <div className="space-y-4 animate-scale-up">
                          <div className="w-12 h-12 rounded-full bg-[#EAF9EE] text-[#34C759] flex items-center justify-center mx-auto shadow-sm">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <h4 className="text-xs font-extrabold text-black">Operation Complete</h4>
                          <p className="text-[10px] text-gray-400 max-w-[160px] mx-auto leading-relaxed">
                            Your database modifications have been committed to escrow nodes.
                          </p>
                          <button
                            onClick={() => {
                              setActiveScreenId('success_state');
                              triggerToast('Mounted SuccessCelebration Scaffold');
                            }}
                            className="bg-[#34C759] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-green-600"
                          >
                            Mount Full Success Mode
                          </button>
                        </div>
                      )}

                      {commonStateCategory === 'loading' && (
                        <div className="space-y-3 shrink-0 text-left animate-fade-in w-full max-w-[200px] mx-auto">
                          <span className="text-[8px] font-mono font-bold text-gray-400 uppercase tracking-widest block text-center mb-2 animate-pulse">SYSTEM PROCESSING SKELETON</span>
                          <div className="h-6 bg-gray-100 rounded-lg animate-pulse w-full border border-gray-200/40" />
                          <div className="h-4 bg-gray-100 rounded-md animate-pulse w-5/6" />
                          <div className="h-4 bg-gray-100 rounded-md animate-pulse w-4/6" />
                        </div>
                      )}

                      {commonStateCategory === 'error' && (
                        <div className="space-y-4 text-center animate-scale-up">
                          <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto border border-red-100 shadow-xs">
                            <AlertTriangle className="w-6 h-6" />
                          </div>
                          <h4 className="text-xs font-bold text-black">Matrix Synchrony Failure</h4>
                          <span className="text-[8px] font-mono text-red-500 bg-red-50 px-2 py-0.5 rounded-full inline-block">Error Code: FS_403</span>
                          <p className="text-[10px] text-gray-400 max-w-[160px] mx-auto">
                            Design directives fail to validate with Material 3 schema rules. Check token.
                          </p>
                        </div>
                      )}

                      {commonStateCategory === 'offline' && (
                        <div className="space-y-4 text-center animate-scale-up">
                          <div className="w-12 h-12 rounded-full bg-gray-50 text-gray-400 border border-gray-100 flex items-center justify-center mx-auto shadow-xs animate-bounce-slow">
                            <AlertCircle className="w-6 h-6" />
                          </div>
                          <h4 className="text-xs font-bold text-black text-center">No Internet Found</h4>
                          <p className="text-[10px] text-gray-400 max-w-[165px] mx-auto leading-relaxed">
                            Bypassing secure transport sockets. System will caching coordinates locally.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 24. success_state */}
                {activeScreenId === 'success_state' && (
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white min-h-[420px]">
                    <div className="w-16 h-16 rounded-full bg-[#EAF9EE] text-[#34C759] flex items-center justify-center mb-6 shadow-md border border-[#34C759]/20 relative">
                      <CheckCircle className="w-8 h-8 text-[#34C759]" />
                    </div>
                    <h2 className="text-base font-extrabold text-black leading-tight mb-2">Sync Settle Complete</h2>
                    <p className="text-[11px] text-[#86868B] leading-relaxed max-w-[180px] mb-8">
                      Your database modifications have been committed successfully to regional escrow nodes.
                    </p>

                    <button
                      onClick={() => {
                        setActiveScreenId('home_dashboard');
                        triggerToast('Returned to portal core');
                      }}
                      className="w-full bg-black text-white text-xs py-2.5 rounded-xl font-bold transition hover:bg-neutral-800"
                    >
                      Return to Hub
                    </button>
                  </div>
                )}

              </div>

              {/* PERSISTENT BOTTOM NAVIGATION - Persists for shell & dashboard layouts (Module 2 objective) */}
              {[
                'app_shell', 'home_dashboard', 'profile_hub', 'notifications_list', 
                'global_search', 'search_results', 'notifications_empty', 'search_empty'
              ].includes(activeScreenId) && (
                <div className="bg-white/95 backdrop-blur border-t border-gray-200/80 px-4 py-2 flex justify-between items-center text-[10px] text-gray-400 shrink-0 select-none z-10 font-sans">
                  <button
                    onClick={() => {
                      setActiveScreenId('home_dashboard');
                    }}
                    className={`flex flex-col items-center gap-0.5 ${activeScreenId === 'home_dashboard' ? 'text-black font-extrabold' : 'text-gray-400 hover:text-black hover:font-semibold'}`}
                  >
                    <Compass className="w-4 h-4" />
                    <span>Home</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveScreenId('common_states_deck');
                      triggerToast('Mounted states layout previews');
                    }}
                    className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-black hover:font-semibold"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span>Events</span>
                  </button>

                  <button
                    onClick={() => {
                      triggerToast('Vendors Directory is fully compliant under Dart design rules');
                    }}
                    className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-black hover:font-semibold"
                  >
                    <User className="w-4 h-4" />
                    <span>Vendors</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveScreenId('notifications_list');
                      setHasUnreadNotification(false);
                    }}
                    className={`flex flex-col items-center gap-0.5 relative ${activeScreenId === 'notifications_list' ? 'text-black font-extrabold' : 'text-gray-400 hover:text-black hover:font-semibold'}`}
                  >
                    <Bell className="w-4 h-4" />
                    {hasUnreadNotification && (
                      <span className="absolute top-0 right-1 w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                    )}
                    <span>Alerts</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveScreenId('profile_hub');
                    }}
                    className={`flex flex-col items-center gap-0.5 ${activeScreenId === 'profile_hub' ? 'text-black font-extrabold' : 'text-gray-400 hover:text-black hover:font-semibold'}`}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                </div>
              )}

              {/* Home Indicator bar */}
              <div className="bg-white pb-1.5 flex justify-center z-10 shrink-0">
                <div className="w-28 h-1 bg-black rounded-full" />
              </div>

            </div>
          </div>
          
          <div className="text-center mt-3 bg-white/95 border border-gray-100 px-4 py-2 rounded-xl text-[10px] font-mono text-gray-500 shadow-sm">
            Interactive Smartphone Emulation Panel
          </div>
        </section>

        {/* Right Column: Complete Technical Specifications Panel (LG: Grid Span 5) */}
        <section className="lg:col-span-5 flex flex-col gap-5">
          {(() => {
            const currentScreenDoc = CORE_APPLICATION_SCREENS.find((sc) => sc.id === activeScreenId) || CORE_APPLICATION_SCREENS[0];
            const isCopied = copiedId === currentScreenDoc.id;
            return (
              <div className="bg-white rounded-2xl border border-[#E5E5EA] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col gap-5">
                
                {/* Header Information strip */}
                <div className="border-b border-gray-100 pb-4 flex justify-between items-start gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#007AFF] bg-[#F1F0FC] px-2 py-0.5 rounded uppercase tracking-wider">
                        {currentScreenDoc.module}
                      </span>
                      <span className="text-[9px] font-mono font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded tracking-tight">
                        {SCREEN_DART_PATHS[currentScreenDoc.id] || 'lib/presentation/screen.dart'}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold tracking-tight text-[#1D1D1F]">
                      {currentScreenDoc.name} Core Blueprint
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      const codeToCopy = activeSpecTab === 'hierarchy' 
                        ? currentScreenDoc.widgetHierarchy 
                        : (FLUTTER_SCREENS_CODE[currentScreenDoc.id] || '');
                      handleCopyCode(codeToCopy, currentScreenDoc.id);
                    }}
                    className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider font-sans border border-gray-200 px-3 py-1.5 rounded-lg bg-[#FBFBFD] hover:bg-[#F5F5F7] text-black transition focus:outline-none"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#34C759]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#86868B]" />
                        <span>{activeSpecTab === 'hierarchy' ? 'Copy Specs' : 'Copy Flutter Code'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Purpose Tab description */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#86868B] mb-1.5 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#86868B]" />
                    Screen Objectives & UX Purpose:
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed bg-[#F5F5F7] p-3 rounded-lg border border-[#E5E5EA]">
                    {currentScreenDoc.purpose}
                  </p>
                </div>

                {/* Tab selector for Hierarchy Anatomy vs. Code */}
                <div className="flex border-b border-gray-100 pb-px mt-1">
                  <button
                    onClick={() => setActiveSpecTab('hierarchy')}
                    className={`flex items-center gap-1.5 pb-2 text-[11px] uppercase font-bold tracking-wider transition-all mr-6 focus:outline-none ${
                      activeSpecTab === 'hierarchy'
                        ? 'border-b-2 border-black text-black'
                        : 'border-b-2 border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Sliders className="w-3 h-3" />
                    Anatomy tree
                  </button>
                  <button
                    onClick={() => setActiveSpecTab('code')}
                    className={`flex items-center gap-1.5 pb-2 text-[11px] uppercase font-bold tracking-wider transition-all focus:outline-none ${
                      activeSpecTab === 'code'
                        ? 'border-b-2 border-[#007AFF] text-[#007AFF]'
                        : 'border-b-2 border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <FileCode className="w-3" h-3="" />
                    Flutter source code
                  </button>
                </div>

                {activeSpecTab === 'hierarchy' ? (
                  /* Nested Flutter Widget Tree Hierarchy */
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#86868B] mb-2 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5" />
                      Flutter Component Hierarchy Structure:
                    </h4>
                    <pre className="text-[11px] font-mono bg-stone-900 text-stone-100 p-4 rounded-xl overflow-x-auto border border-stone-800 leading-normal max-h-[340px]">
                      <code>{currentScreenDoc.widgetHierarchy}</code>
                    </pre>
                  </div>
                ) : (
                  /* Nested Fully Realized Flutter Screen Code (Dart) */
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#86868B] flex items-center gap-1.5">
                        <FileCode className="w-3.5 h-3.5 text-[#007AFF]" />
                        Premium Flutter Dart Screen Implementation:
                      </h4>
                      <span className="text-[9px] font-mono text-gray-400 bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E5E5EA]">
                        {currentScreenDoc.id}_screen.dart
                      </span>
                    </div>
                    <pre className="text-[11px] font-mono bg-stone-900 text-stone-100 p-4 rounded-xl overflow-x-auto border border-stone-800 leading-normal max-h-[380px]">
                      <code>{FLUTTER_SCREENS_CODE[currentScreenDoc.id] || `// Implementation code for ${currentScreenDoc.name} is ready`}</code>
                    </pre>
                  </div>
                )}

                {/* Sizing & Symmetrical Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                  <div>
                    <h5 className="text-[10px] uppercase tracking-wider font-bold text-[#86868B] mb-1">
                      Responsive Sizing Constraints
                    </h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed bg-gray-50/50 p-2.5 rounded border border-gray-100">
                      {currentScreenDoc.responsiveBehavior}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-wider font-bold text-[#86868B] mb-1">
                      WCAG & Accessibility Semantics
                    </h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed bg-gray-50/50 p-2.5 rounded border border-gray-100">
                      {currentScreenDoc.accessibilityNotes}
                    </p>
                  </div>
                </div>

                {/* Core widgets utilized mapping */}
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#86868B] block mb-2">
                    Linked Design System Atoms:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentScreenDoc.componentsUtilized.map((atom) => (
                      <button
                        key={atom}
                        onClick={() => {
                          setActiveMode('storybook');
                          // Map custom atomic names to matching active IDs in storybook view to immediately load them!
                          if (atom === 'AppColors') { setActiveCategory('tokens'); setActiveWidgetId('colors'); }
                          else if (atom === 'AppTextStyles') { setActiveCategory('tokens'); setActiveWidgetId('typography'); }
                          else if (atom === 'AppSpacing') { setActiveCategory('tokens'); setActiveWidgetId('spacing'); }
                          else if (atom === 'AppRadius') { setActiveCategory('tokens'); setActiveWidgetId('radius_shadows'); }
                          else if (atom === 'PrimaryButton') { setActiveCategory('buttons'); setActiveWidgetId('primary_button'); }
                          else if (atom === 'OutlineButton') { setActiveCategory('buttons'); setActiveWidgetId('outline_button'); }
                          else if (atom === 'SecondaryButton') { setActiveCategory('buttons'); setActiveWidgetId('secondary_button'); }
                          else if (atom === 'AppTextField') { setActiveCategory('inputs'); setActiveWidgetId('app_text_field'); }
                          else if (atom === 'AppSwitch') { setActiveCategory('inputs'); setActiveWidgetId('selection_controls'); }
                          else if (atom.includes('Card') || atom.includes('Slate')) { setActiveCategory('cards_layout'); setActiveWidgetId('cards_suite'); }
                          else if (atom === 'AppTopBar') { setActiveCategory('data_display'); setActiveWidgetId('badge_chip_tag'); }
                          else if (atom === 'Loader') { setActiveCategory('data_display'); setActiveWidgetId('loading_and_empty_states'); }
                          else { setActiveCategory('tokens'); setActiveWidgetId('colors'); }
                          triggerToast(`Loading storybook sandbox for: ${atom}`);
                        }}
                        className="bg-white border hover:bg-gray-50 border-gray-200 text-black text-[10px] font-mono px-2.5 py-1 rounded-md transition flex items-center gap-1 shadow-xs"
                      >
                        <Sliders className="w-3 h-3 text-[#007AFF]" />
                        {atom}.dart
                      </button>
                    ))}
                  </div>
                  <span className="text-[9px] text-[#86868B] italic block mt-2">
                    *Tapping any file above redirects you to its interactive code sandbox.
                  </span>
                </div>

              </div>
            );
          })()}
        </section>

      </main>
    )}

      {/* OVERLAY MODAL: CONFIRMation DIALOG SIMULATOR */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl border border-[#E5E5EA] max-w-sm w-full p-6 text-center shadow-xl animate-scale-up">
            <h4 id="confirm-title" className="text-base font-bold text-[#1D1D1F] mb-2">Delete Repository Data?</h4>
            <p className="text-xs text-[#86868B] leading-relaxed mb-6">
              This operation is absolute and cannot be undone. All database metrics will fail synchronization.
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="flex-1 border border-[#E5E5EA] text-[#1D1D1F] font-semibold text-xs py-3 rounded-lg hover:bg-[#F5F5F7] transition"
              >
                Keep Data
              </button>
              <button
                onClick={() => {
                  setIsConfirmOpen(false);
                  triggerToast('Repository Data Deleted Successfully');
                }}
                className="flex-1 bg-[#FF3B30] text-white font-semibold text-xs py-3 rounded-lg hover:bg-red-600 transition"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY SHEET: BOTTOM SHEET SIMULATOR */}
      {isBottomSheetOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-end justify-center animate-fade-in">
          <div className="bg-white rounded-t-3xl max-w-md w-full p-5 shadow-2xl animate-slide-up pb-8">
            
            {/* Handlebar dragging indicator */}
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />
            
            <div className="flex justify-between items-center mb-4">
              <h4 id="bottom-sheet-title" className="text-sm font-bold text-black">Active Configuration Drawer</h4>
              <button onClick={() => setIsBottomSheetOpen(false)} className="text-[#86868B] hover:text-black">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#86868B] leading-relaxed mb-5">
              Select key execution parameters for live telemetry tests:
            </p>

            <div className="space-y-2 mb-6">
              <div className="border border-[#E5E5EA] p-3 rounded-xl flex justify-between items-center text-xs">
                <span className="font-semibold">Bypass local sandbox</span>
                <span className="text-[#007AFF] font-bold">Enabled</span>
              </div>
              <div className="border border-[#E5E5EA] p-3 rounded-xl flex justify-between items-center text-xs">
                <span className="font-semibold">Active telemetry port</span>
                <span className="font-mono text-gray-500">3000</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsBottomSheetOpen(false);
                triggerToast('BottomSheet setting compiled!');
              }}
              className="w-full bg-black text-white text-xs font-semibold py-3.5 rounded-xl hover:bg-neutral-800 transition"
            >
              Continue Execution
            </button>
          </div>
        </div>
      )}

      {/* SIMULATED SYSTEM TOASTS SYSTEM */}
      <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 pointer-events-none z-50 space-y-2 max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-[#1D1D1F] border border-[#333] text-white px-4 py-3 rounded-xl text-xs font-semibold shadow-lg flex items-center justify-between pointer-events-auto animate-slide-up"
          >
            <span>{toast.message}</span>
            <span className="text-[10px] font-mono text-[#86868B] ml-4">Haptic Engine Acted</span>
          </div>
        ))}

        {snackbars.map((s) => (
          <div
            key={s.id}
            className="bg-[#1D1D1F] border border-[#333] text-white px-4 py-3.5 rounded-xl text-xs shadow-lg flex items-center justify-between pointer-events-auto animate-slide-up gap-4"
          >
            <span>{s.message}</span>
            <button
              onClick={() => {
                triggerToast('Action undone!');
                setSnackbars(prev => prev.filter(item => item.id !== s.id));
              }}
              className="text-[#007AFF] font-bold uppercase tracking-wider text-[11px] hover:underline shrink-0"
            >
              {s.action}
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Legal / Author Footnote */}
      <footer className="bg-white border-t border-[#E5E5EA] px-8 py-6 text-center text-xs text-[#86868B] mt-auto">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Flutter UI Kit and Layout Architecture. Production Sandbox Suite.</p>
          <div className="flex items-center gap-6">
            <span>Dart v3.x Supported</span>
            <span>Material 3 Central Standards</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
