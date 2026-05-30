export interface AppScreen {
  id: string;
  name: string;
  module: string;
  purpose: string;
  widgetHierarchy: string;
  navigationActions: string[];
  responsiveBehavior: string;
  accessibilityNotes: string;
  componentsUtilized: string[];
}

export const CORE_APPLICATION_SCREENS: AppScreen[] = [
  // --- MODULE 1: AUTHENTICATION ---
  {
    id: 'splash',
    name: '1. Splash Screen',
    module: 'MODULE 1: AUTHENTICATION',
    purpose: 'Initial brand introduction screen depicting premium minimal aesthetic, with a soft delayed fade transition into the Welcome Screen.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
└── Center
    └── Column (mainAxisAlignment: Center)
        ├── Container (width: 80, height: 80, decoration: AppRadius.borderXL)
        │   └── Center
        │       └── Icon(Icons.blur_on, color: AppColors.primary, size: 40) (AppIcon)
        ├── SizedBox(height: AppSpacing.l)
        ├── Text('MONOLITH', style: AppTextStyles.displayMedium.copyWith(letterSpacing: 4.0))
        └── AnimatedOpacity (duration: 800ms)
            └── Text('Aesthetics Engine', style: AppTextStyles.caption)`,
    navigationActions: [
      'On Initialization Complete → Navigate to Welcome Screen (Duration: 2500ms transition offset).'
    ],
    responsiveBehavior: 'Leverages Centered alignments and aspect ratio locks to maintain absolute alignment scale across compact mobile, folding tablets, and widescreen emulation layouts.',
    accessibilityNotes: 'Screen reader speaks "App starting, Monolith Minimalism Engine Logo". Visual contrast satisfies WCAG AAA guidelines (9.4:1 contrast ratio).',
    componentsUtilized: ['AppColors', 'AppTextStyles', 'AppSpacing', 'AppRadius', 'Loader']
  },
  {
    id: 'welcome',
    name: '2. Welcome Screen',
    module: 'MODULE 1: AUTHENTICATION',
    purpose: 'Welcomes the user with striking display typography, ample breathing room, and clear primary & secondary call-to-actions.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Start)
            ├── AppSpacing.gapXXL
            ├── Text('A new standard\\nfor planning.', style: AppTextStyles.displayLarge)
            ├── AppSpacing.gapS
            ├── Text('Curated event systems, elite vendor grids, and responsive orchestration designed for Material 3.', style: AppTextStyles.bodyMedium)
            ├── Spacer() (Push actions to bottom border)
            ├── PrimaryButton(text: 'Get Started', onPressed: () => NavigateTo(Signup))
            ├── AppSpacing.gapM
            └── OutlineButton(text: 'I already have an account', onPressed: () => NavigateTo(Login))`,
    navigationActions: [
      'Tap "Get Started" → Push Screen: Signup Screen',
      'Tap "I already have an account" → Push Screen: Login Screen'
    ],
    responsiveBehavior: 'Uses Spacer widgets in Flex columns to automatically distribute negative layout borders depending on device aspect height. Safeguarded via SingleChildScrollView with BoxConstraints.',
    accessibilityNotes: 'All controls support a minimum target size of 48dp. Target semantic roles are defined explicitly for both action indicators.',
    componentsUtilized: ['AppScaffold', 'PrimaryButton', 'OutlineButton', 'AppTextStyles', 'AppSpacing']
  },
  {
    id: 'login',
    name: '3. Login Screen',
    module: 'MODULE 1: AUTHENTICATION',
    purpose: 'Standard authentication page featuring secure forms, error state indicators, and quick password resets.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Access Account', leading: BackIconButton())
└── SafeArea
    └── SingleChildScrollView
        └── Padding (padding: AppSpacing.pagePadding)
            └── Column (crossAxisAlignment: Start)
                ├── Text('Welcome back', style: AppTextStyles.headingLarge)
                ├── Text('Please authenticate with your credentials.', style: AppTextStyles.bodySmall)
                ├── AppSpacing.gapL
                ├── AppTextField(label: 'Account Email', hint: 'jane.smith@monolith.com', type: AppFieldType.email)
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Password', hint: '••••••••', type: AppFieldType.password)
                ├── Align (alignment: Right)
                │   └── AppTextButton(text: 'Forgot password?', onPressed: () => NavigateTo(ForgotPassword))
                ├── AppSpacing.gapL
                ├── PrimaryButton(text: 'Sign In', onPressed: () => NavigateTo(OTPVerification))
                └── Center
                    └── AppTextButton(text: "Don't have an account? Sign up", onPressed: () => NavigateTo(Signup))`,
    navigationActions: [
      'Tap "Back" arrow → Pop to Welcome Screen',
      'Tap "Forgot password?" → Push Screen: Forgot Password Screen',
      'Tap "Sign In" → Validate form and push to OTP Verification Screen',
      'Tap "Sign up" link → Push Screen: Signup Screen'
    ],
    responsiveBehavior: 'SingleChildScrollView wrapper prevents keyboard overflow exceptions when input focuses are active on low-resolution hardware displays.',
    accessibilityNotes: 'Inputs are tagged with corresponding autofillHints (email and password). Focus sequences scroll to inputs smoothly.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppTextField', 'AppTextButton', 'PrimaryButton', 'AppSpacing']
  },
  {
    id: 'signup',
    name: '4. Signup Screen',
    module: 'MODULE 1: AUTHENTICATION',
    purpose: 'Account creation workspace capturing user telemetry with privacy check terms validation, styled cleanly.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Create Account', leading: BackIconButton())
└── SafeArea
    └── SingleChildScrollView
        └── Padding (padding: AppSpacing.pagePadding)
            └── Column (crossAxisAlignment: Start)
                ├── Text('Begin your journey', style: AppTextStyles.headingLarge)
                ├── AppSpacing.gapL
                ├── AppTextField(label: 'Full Name', hint: 'Jane Smith')
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Account Email', hint: 'jane.smith@monolith.com', type: AppFieldType.email)
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Password', hint: '••••••••', type: AppFieldType.password)
                ├── AppSpacing.gapM
                ├── AppCheckbox(value: true, label: 'I accept User Licensing Framework', onChanged: (val) {})
                ├── AppSpacing.gapL
                ├── PrimaryButton(text: 'Create Account', onPressed: () => NavigateTo(OTPVerification))
                └── Center
                    └── AppTextButton(text: "Already registered? Log in", onPressed: () => NavigateTo(Login))`,
    navigationActions: [
      'Tap "Create Account" → Validate fields and go to OTP Verification Screen',
      'Tap "Log in" → Push Screen: Login Screen'
    ],
    responsiveBehavior: 'Checkbox text uses flexible constraints to prevent text overflowing or wrapping aggressively on thin screens.',
    accessibilityNotes: 'Licensing checkbox holds semantic traits to ensure screen reader reads selected state clearly.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppTextField', 'AppCheckbox', 'PrimaryButton', 'AppTextButton', 'AppSpacing']
  },
  {
    id: 'otp',
    name: '5. OTP Verification Screen',
    module: 'MODULE 1: AUTHENTICATION',
    purpose: 'Secure multi-factor authentication screen prompting for verification code sent to the registered contact address.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Security Sync', leading: BackIconButton())
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Start)
            ├── Text('Enter Security Pin', style: AppTextStyles.headingLarge)
            ├── AppSpacing.gapS
            ├── Text('A 4-digit token has been requested for verification.', style: AppTextStyles.bodyMedium)
            ├── AppSpacing.gapXL
            ├── Row (mainAxisAlignment: SpaceBetween) (OTP Grid)
            │   ├── OTPPinBox(focus: true)
            │   ├── OTPPinBox()
            │   ├── OTPPinBox()
            │   └── OTPPinBox()
            ├── AppSpacing.gapXL
            ├── PrimaryButton(text: 'Verify Token', onPressed: () => NavigateTo(AccountSetup))
            ├── AppSpacing.gapM
            └── Center
                └── AppTextButton(text: "Resend Code in 45s", onPressed: null) (Disabled layout)`,
    navigationActions: [
      'Tap "Verify Token" → Push Screen: Account Setup Screen',
      'Tap "Resend" (after active cooldown ticker) → Triggers Toast feedback'
    ],
    responsiveBehavior: 'The 4-digit input layout expands proportionally with a dynamic flex sizing structure, ensuring touch targeting is comfortable across both handheld layouts and large screen interfaces.',
    accessibilityNotes: 'Focus passes automatically to the first text segment. Supports a custom raw keyboard listener with programmatic screen shifts.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'PrimaryButton', 'AppTextButton', 'AppSpacing']
  },
  {
    id: 'forgot_password',
    name: '6. Forgot Password Screen',
    module: 'MODULE 1: AUTHENTICATION',
    purpose: 'Enables smooth password discovery and reset requests using curated single-input form structures.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Recover Key', leading: BackIconButton())
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Start)
            ├── Text('Password Recovery', style: AppTextStyles.headingLarge)
            ├── AppSpacing.gapS
            ├── Text('Provide your institutional email below to request a secured activation link.', style: AppTextStyles.bodyMedium)
            ├── AppSpacing.gapXL
            ├── AppTextField(label: 'Registered Email', hint: 'jane.smith@monolith.com', type: AppFieldType.email)
            ├── AppSpacing.gapL
            └── PrimaryButton(text: 'Send Verification Link', onPressed: () => NavigateTo(Login))`,
    navigationActions: [
      'Tap "Send Verification Link" → Triggers Success toast notifying transport, then routes back to Login.'
    ],
    responsiveBehavior: 'Text elements are bounded to 100% width grid to support display scaling gracefully on accessibility-enlarged displays.',
    accessibilityNotes: 'Form fields read errors instantly via live vocal notifications (accessibility live regions).',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppTextField', 'PrimaryButton', 'AppSpacing']
  },
  {
    id: 'account_setup',
    name: '7. Account Setup Screen',
    module: 'MODULE 1: AUTHENTICATION',
    purpose: 'Ensures immediate personalization during initial session lifecycle (avatar, initial preference tags).',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Account Personalization')
└── SafeArea
    └── SingleChildScrollView
        └── Padding (padding: AppSpacing.pagePadding)
            └── Column (crossAxisAlignment: Center)
                ├── Stack (Avatar upload with micro edit button)
                │   ├── Avatar(initials: 'JS', size: 96)
                │   └── Positioned(child: PencilIconButton())
                ├── AppSpacing.gapL
                ├── Align(alignment: Left, child: Text('User Details', style: AppTextStyles.headingSmall))
                ├── AppSpacing.gapS
                ├── AppTextField(label: 'User Handle', hint: '@janesmith')
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Designation Role', hint: 'Senior Producer')
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Contact Phone', hint: '+1 (555) 0192', type: AppFieldType.phone)
                ├── AppSpacing.gapXL
                └── PrimaryButton(text: 'Enter Dashboard', onPressed: () => NavigateTo(HomeDashboard))`,
    navigationActions: [
      'Tap "Enter Dashboard" → Completes session setup, locks authentication states, and pushes Main App Shell.'
    ],
    responsiveBehavior: 'Avatar stack and form parameters are scaled organically, using constraints based on local context size rules.',
    accessibilityNotes: 'Each image and upload button offers detailed descriptive labels ("Upload profile picture spacer").',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'Avatar', 'AppTextField', 'PrimaryButton', 'AppSpacing']
  },

  // --- MODULE 2: MAIN APP SHELL ---
  {
    id: 'app_shell',
    name: '8. Main App Shell Base',
    module: 'MODULE 2: MAIN APP SHELL',
    purpose: 'Central shell embedding the persistent Bottom Navigation Bar controller inside a reactive PageView setup.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── body: PageView (controller: _pageController)
│   ├── HomeDashboardScreen()
│   ├── EventsGridScreen()
│   ├── VendorsListScreen()
│   ├── NotificationsListScreen()
│   └── ProfileHubScreen()
└── bottomNavigationBar: AppBottomNavBar(
      currentIndex: _activeIndex,
      onTap: (index) => _onTabChanged(index),
      items: [
        BottomNavigationBarItem(icon: Icon(Icons.dashboard), label: 'Home'),
        BottomNavigationBarItem(icon: Icon(Icons.event), label: 'Events'),
        BottomNavigationBarItem(icon: Icon(Icons.store), label: 'Vendors'),
        BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'Alerts'),
        BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
      ]
    )`,
    navigationActions: [
      'Tap Tab Buttons → Animates to corresponding sub-screen page viewport via PageController.',
      'Active tab buttons trigger lightweight Android/iOS haptic vibration engines.'
    ],
    responsiveBehavior: 'When active on tablet or desktop landscape ratios, Bottom Nav adapts smoothly into a left-aligned Sidebar Navigation Rail layout.',
    accessibilityNotes: 'The Nav Bar features semantic navigation traits, with explicit "Tab 1 of 5 selected" state readouts.',
    componentsUtilized: ['AppBottomNavBar', 'AppScaffold', 'AppColors']
  },

  // --- MODULE 3: HOME ---
  {
    id: 'home_dashboard',
    name: '9. Home Dashboard',
    module: 'MODULE 3: HOME',
    purpose: 'Core layout displaying search inputs, upcoming event stats, recent actions, and summaries of running services in a bento layout.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(
│     title: 'Monolith Portal', 
│     leading: ProfileAvatar(initials: 'JS'),
│     actions: [IconButton(icon: Icons.search, onPressed: () => ShowSearch())]
│   )
└── SafeArea
    └── SingleChildScrollView
        └── Padding (padding: AppSpacing.pagePadding)
            └── Column (crossAxisAlignment: Start)
                ├── Welcome Header Row (Text('Good morning, Jane', style: AppTextStyles.displayMedium))
                ├── AppSpacing.gapS
                ├── SearchField(hint: 'Find events, coordinates, spaces...', onTap: () => NavigateTo(Search))
                ├── AppSpacing.gapL
                ├── SectionHeader(title: 'Portal Quick Actions')
                ├── AppSpacing.gapS
                ├── Row (Quick Action Cards)
                │   ├── Expanded(Tile: ActionCard(title: 'Add Event', icon: Icons.add))
                │   ├── Expanded(Tile: ActionCard(title: 'Scan Code', icon: Icons.qr_code))
                │   └── Expanded(Tile: ActionCard(title: 'Add Vendor', icon: Icons.person_add))
                ├── AppSpacing.gapL
                ├── SectionHeader(title: 'Upcoming Events', trailingAction: AppTextButton('View All'))
                ├── AppSpacing.gapS
                ├── InfoCard (Large spotlight event)
                │   ├── Row(Title: 'Annual Executive Summit 2026', badge: Badge(text: 'VIP'))
                │   └── StatRow(date: 'May 30, 2026', location: 'Orpheum Center')
                ├── AppSpacing.gapL
                ├── Row (Stats Panel - Bento Grid Style)
                │   ├── Expanded(child: StatCard(title: 'Pending Invoices', value: '$8,290'))
                │   └── Expanded(child: StatCard(title: 'Confirmed Vendors', value: '42'))
                └── AppSpacing.gapXL`,
    navigationActions: [
      'Tap Search Bar → Opens active Global Search Screen',
      'Tap action cards → Push corresponding screen flows',
      'Tap "View All" → Shift parent tab index to Events tab (index: 1)'
    ],
    responsiveBehavior: 'Quick Actions and Stats grid dynamically transition into an elegant multi-column bento card grid when screen space extends beyond standard mobile thresholds.',
    accessibilityNotes: 'Includes high accessibility contrast on color graphics. Large typography sizes are adapted and scaled using system-level font multipliers.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'ActionCard', 'StatCard', 'Badge', 'SearchField', 'AppSpacing', 'InfoCard']
  },

  // --- MODULE 4: PROFILE & SETTINGS ---
  {
    id: 'profile_hub',
    name: '10. My Profile',
    module: 'MODULE 4: PROFILE',
    purpose: 'Core workspace dashboard showing institutional account cards, access telemetry, and main navigation entries.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'My Profile', actions: [SettingsIconButton()])
└── SafeArea
    └── SingleChildScrollView
        └── Padding (padding: AppSpacing.pagePadding)
            └── Column (crossAxisAlignment: Center)
                ├── Avatar(initials: 'JS', size: 80, isElevated: true)
                ├── AppSpacing.gapM
                ├── Text('Jane Smith', style: AppTextStyles.headingLarge)
                ├── Text('Senior Producer • Event Architect', style: AppTextStyles.bodySmall)
                ├── AppSpacing.gapL
                ├── Row (Internal user statistics in profile)
                │   ├── Expanded(child: SimpleStatStat(label: 'Total Projects', value: '148'))
                │   ├── VerticalDivider()
                │   └── Expanded(child: SimpleStatStat(label: 'System Rating', value: '4.98'))
                ├── AppSpacing.gapXL
                ├── Align(alignment: Left, child: Text('Account Suite', style: AppTextStyles.labelMedium))
                ├── AppSpacing.gapS
                ├── ProfileListTile(title: 'Account Settings', subtitle: 'Manage contact, email, roles', icon: Icons.person_outline, onTap: () => NavigateTo(EditProfile))
                ├── ProfileListTile(title: 'System Preferences', subtitle: 'Haptics, themes, telemetry', icon: Icons.tune, onTap: () => NavigateTo(Settings))
                ├── ProfileListTile(title: 'Emergency Contact Support', subtitle: '24/7 technical operations link', icon: Icons.help_outline, onTap: () => NavigateTo(HelpSupport))
                ├── AppSpacing.gapL
                └── PrimaryButton(text: 'Log Out Session', onPressed: () => NavigateTo(Login))`,
    navigationActions: [
      'Tap "Account Settings" → Push Screen: Edit Profile Screen',
      'Tap "System Preferences" → Push Screen: Settings Screen',
      'Tap "Help Support" → Push Screen: Help & Support Screen',
      'Tap "Log Out" → Resets session credentials, triggers exit transition, pops to Login Screen'
    ],
    responsiveBehavior: 'The column of List Tiles utilizes standard adaptive spacers. On wide views, profile cards split into a two-column panel representing summary side data and action lists.',
    accessibilityNotes: 'Tapping lists generates tactile feedback. List tiles declare double-tap requirements to assistive technology.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'Avatar', 'PrimaryButton', 'AppSpacing', 'AppTextStyles']
  },
  {
    id: 'edit_profile',
    name: '11. Edit Profile',
    module: 'MODULE 4: PROFILE',
    purpose: 'Interactive form workspace allowing secure credential modification and database updates.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Modify Credentials', leading: BackIconButton())
└── SafeArea
    └── SingleChildScrollView
        └── Padding (padding: AppSpacing.pagePadding)
            └── Column (crossAxisAlignment: Start)
                ├── AppTextField(label: 'Display Name', hint: 'Jane Smith')
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Primary Email', hint: 'jane.smith@monolith.com', type: AppFieldType.email)
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Contact Mobile', hint: '+1 (555) 0192', type: AppFieldType.phone)
                ├── AppSpacing.gapM
                ├── AppTextField(label: 'Bio / Profile Statement', hint: 'Designing minimalist physical architectures.', type: AppFieldType.textArea)
                ├── AppSpacing.gapXL
                ├── PrimaryButton(text: 'Save Modifications', onPressed: () => SaveAndPop())
                └── AppSpacing.gapM`,
    navigationActions: [
      'Tap "Save Modifications" → Simulates async write, displays Toast, pops back to My Profile.'
    ],
    responsiveBehavior: 'Inputs adjust width beautifully to fill columns based on tablet layout grids.',
    accessibilityNotes: 'Every text field is verified with WCAG contrast text colors. Direct error indicators guide keyboard focus inside active lists.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppTextField', 'PrimaryButton', 'AppSpacing']
  },
  {
    id: 'settings',
    name: '12. Settings Hub',
    module: 'MODULE 4: PROFILE',
    purpose: 'System setup page giving access to app settings: security rules, telemetry options, language settings, and active push switches.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'System Preferences', leading: BackIconButton())
└── SafeArea
    └── ListView
        ├── SettingsHeader(title: 'Communication Channels')
        ├── AppSwitch(value: true, label: 'Push Notifications', onChanged: (val) {})
        ├── AppSwitch(value: false, label: 'Email Newsletters', onChanged: (val) {})
        ├── Divider()
        ├── SettingsHeader(title: 'Regional Settings')
        ├── ProfileListTile(title: 'Active Language', subtitle: 'English (US)', trailing: Icon(Icons.chevron_right), onTap: () => NavigateTo(LanguageSelection))
        ├── Divider()
        ├── SettingsHeader(title: 'Security Configurations')
        ├── ProfileListTile(title: 'Biometric FaceID', subtitle: 'Enabled', trailing: ToggleSwitch(true))
        └── AppSpacing.gapXL`,
    navigationActions: [
      'Tap "Active Language" → Push Screen: Language Selection Screen',
      'Toggle AppSwitch → Modifies preference key, issues success confirmation dialog'
    ],
    responsiveBehavior: 'Structured List views map dynamically to viewport sizes. Includes responsive constraints on large screens.',
    accessibilityNotes: 'Switches announce current state value verbally ("Push Notifications Switch, checked"). Double tap alters status.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppSwitch', 'Divider', 'AppSpacing']
  },
  {
    id: 'notification_settings',
    name: '13. Notification Settings',
    module: 'MODULE 4: PROFILE',
    purpose: 'Enables custom preferences config for alarms, vendor syncs, billing milestones, and calendar hooks.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Notification Controls', leading: BackIconButton())
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Start)
            ├── Text('Dynamic Channel Control', style: AppTextStyles.headingSmall)
            ├── AppSpacing.gapS
            ├── Text('Receive instant alerts when these events occur.', style: AppTextStyles.bodySmall)
            ├── AppSpacing.gapL
            ├── AppSwitch(value: true, label: 'New Event Applications')
            ├── AppSpacing.gapM
            ├── AppSwitch(value: true, label: 'Invoice Payments Settled')
            ├── AppSpacing.gapM
            ├── AppSwitch(value: false, label: 'Vendor Portal Chat Messages')
            ├── AppSpacing.gapM
            ├── AppSwitch(value: true, label: 'System Service Updates')
            ├── AppSpacing.gapXL
            └── PrimaryButton(text: 'Settle Configuration', onPressed: () => Pop())`,
    navigationActions: [
      'Tap "Settle Configuration" → Saves local flags state and pops screen.'
    ],
    responsiveBehavior: 'List items wrap content flexibly based on standard padding and edge specifications.',
    accessibilityNotes: 'Form switches support clean keyboard navigation indexing sequence.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppSwitch', 'PrimaryButton', 'AppSpacing']
  },
  {
    id: 'language_selection',
    name: '14. Language Selection',
    module: 'MODULE 4: PROFILE',
    purpose: 'Standard localization viewport showing list of system localized languages.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Select Language', leading: BackIconButton())
└── SafeArea
    └── ListView
        ├── LanguageItem(name: 'English (United States)', selected: true)
        ├── LanguageItem(name: 'Español (España)', selected: false)
        ├── LanguageItem(name: 'Français (France)', selected: false)
        ├── LanguageItem(name: 'Deutsch (Deutschland)', selected: false)
        ├── LanguageItem(name: '日本語 (日本)', selected: false)
        └── LanguageItem(name: '中文 (简体)', selected: false)`,
    navigationActions: [
      'Select Language Row → Updates localized translation bundle, displays success alert, and returns to Settings.'
    ],
    responsiveBehavior: 'List rows size dynamically using built-in system text scaling factors.',
    accessibilityNotes: 'Selected language row gains immediate focus and reads selected state explicitly.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'Divider']
  },
  {
    id: 'help_support',
    name: '15. Help & Support',
    module: 'MODULE 4: PROFILE',
    purpose: 'Help desk page allowing search of localized guidelines, ticketing system triggers, and immediate tech service contact.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Help Desk Center', leading: BackIconButton())
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Start)
            ├── SearchField(hint: 'Search documentation library...')
            ├── AppSpacing.gapL
            ├── Text('Popular Knowledge Base', style: AppTextStyles.labelMedium)
            ├── AppSpacing.gapS
            ├── HelpArticleTile(title: 'Standard Onboarding Rules')
            ├── HelpArticleTile(title: 'Adding Vendors under Material 3')
            ├── HelpArticleTile(title: 'Troubleshooting Realtime WebSockets')
            ├── AppSpacing.gapXL
            ├── SectionHeader(title: 'Need Human Assistance?')
            ├── AppSpacing.gapS
            ├── SecondaryButton(text: 'Submit Operational Ticket', icon: Icons.support_agent)
            ├── AppSpacing.gapM
            └── OutlineButton(text: 'E-mail Technical Operations', icon: Icons.mail_outline)`,
    navigationActions: [
      'Search input → Navigates dynamically inside the Knowledge documentation list',
      'Tap "Submit Ticket" → Launches ConfirmDialog overlay'
    ],
    responsiveBehavior: 'Support layout adapts cleanly between two-column help dashboards on wide tablets and single-column on handheld displays.',
    accessibilityNotes: 'Tapping help items reads full topic description and status of search values correctly.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'SearchField', 'SecondaryButton', 'OutlineButton', 'AppSpacing']
  },
  {
    id: 'about_us',
    name: '16. About Monolith',
    module: 'MODULE 4: PROFILE',
    purpose: 'Informational page displaying institutional software versioning, licensing credits, and copyright notices.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'About Software', leading: BackIconButton())
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Center)
            ├── AppSpacing.gapXL
            ├── MonolithMark(size: 64)
            ├── AppSpacing.gapM
            ├── Text('MONOLITH ARCHITECTS', style: AppTextStyles.headingSmall.copyWith(letterSpacing: 2))
            ├── Text('System Version 3.4.0 (Build 509)', style: AppTextStyles.caption)
            ├── AppSpacing.gapXL
            ├── InfoRow(label: 'Architects', value: 'Google AI Studio & Senior Flutter UX team')
            ├── InfoRow(label: 'Material Engine', value: 'Flutter 3.x System')
            ├── InfoRow(label: 'Licensing Contract', value: 'Apache-2.0 Open Source')
            ├── Spacer()
            └── Text('© 2026 Monolith Platforms LLC. All copyright guarantees apply.', style: AppTextStyles.caption)`,
    navigationActions: [
      'Tap back arrow → Pop screen context.'
    ],
    responsiveBehavior: 'Information blocks use alignment constraints centering content neatly across widescreen browser viewports.',
    accessibilityNotes: 'Allows screen reader to sequential-read license parameters without cluttering focus pools.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppSpacing', 'AppTextStyles']
  },

  // --- MODULE 5: NOTIFICATIONS ---
  {
    id: 'notifications_list',
    name: '17. Notifications Hub',
    module: 'MODULE 5: NOTIFICATIONS',
    purpose: 'Displays categorized transaction notifications, service alarms, and vendor notifications with tab-sync filters.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'System Notifications', actions: [MarkReadButton()])
└── SafeArea
    └── Column
        ├── NotificationCategoryFilters() (Chips: All, Billing, System, Events)
        ├── Expanded
        │   └── ListView
        │       ├── NotificationCard(
        │             title: 'Milestone Settled',
        │             desc: 'Invoice #1092 processed for Executive Annual Gala 2026.',
        │             category: 'Billing',
        │             time: '3m ago',
        │             isUnread: true
        │           )
        │       ├── NotificationCard(
        │             title: 'Vendor Approved',
        │             desc: 'Spine Catering Group satisfied physical security evaluations check.',
        │             category: 'Events',
        │             time: '2h ago',
        │             isUnread: false
        │           )
        │       └── NotificationCard(
        │             title: 'Service Refresh Complete',
        │             desc: 'System workspace upgraded to v3.4 under active schema rules.',
        │             category: 'System',
        │             time: '1d ago',
        │             isUnread: false
        │           )
        └── BottomNavigation()`,
    navigationActions: [
      'Tap Event Card → Push Screen: Notification Details Screen',
      'Swipe Card Left → Removes element and triggers Toast with dynamic undo button'
    ],
    responsiveBehavior: 'Categorization chips scroll horizontally within touch bounds and adapt sizing grids dynamically.',
    accessibilityNotes: 'Unread cards announce unread state clearly ("Unread. Milestone Settled. 3 minutes ago"). Swipe gestures offer programmatic access via Action Menu.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'Chip', 'AppSpacing', 'Badge', 'AlertBanner']
  },
  {
    id: 'notification_details',
    name: '18. Notification Details',
    module: 'MODULE 5: NOTIFICATIONS',
    purpose: 'Focuses on single database message sync details, outlining transaction fields, metadata, and quick action redirects.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Invoice Settlement', leading: BackIconButton())
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Start)
            ├── Badge(text: 'Billing Alert', color: AppColors.info)
            ├── AppSpacing.gapM
            ├── Text('Milestone Settle Notification', style: AppTextStyles.headingLarge)
            ├── Text('Posted 2026-05-29 • 17:24 UTC', style: AppTextStyles.caption)
            ├── AppSpacing.gapL
            ├── Container (Detail Slate Card)
            │   └── Column
            │       ├── MetadataLine(field: 'Target Code', value: 'INV-1092')
            │       ├── MetadataLine(field: 'Total Value', value: '$18,250.00 USD')
            │       └── MetadataLine(field: 'Sync Origin', value: 'Executive Board Portal')
            ├── AppSpacing.gapL
            ├── Text('The transaction was approved by security rules on first-check verification. Funds are reserved in Escrow tier clearance.', style: AppTextStyles.bodyMedium)
            ├── Spacer()
            ├── PrimaryButton(text: 'Download PDF Invoice', icon: Icons.download)
            ├── AppSpacing.gapS
            └── SecondaryButton(text: 'Flag for Auditing Review', icon: Icons.flag_outlined)`,
    navigationActions: [
      'Tap "Download PDF" → Launches native file transport loader, shows success toast'
    ],
    responsiveBehavior: 'The Slate Card resizes beautifully with adaptive paddings based on screen width changes.',
    accessibilityNotes: 'Tables and data labels are properly nested to ensure speech readers read "target code is INV-1092" sequentially instead of column-by-column.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'Badge', 'PrimaryButton', 'SecondaryButton', 'AppSpacing']
  },
  {
    id: 'notifications_empty',
    name: '19. No Alerts (Empty State)',
    module: 'MODULE 5: NOTIFICATIONS',
    purpose: 'Polished default screen when all alerts are archived or marked read, avoiding empty visual containers.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'System Notifications')
└── Center
    └── Column (mainAxisAlignment: Center)
        ├── Icon(Icons.notifications_none, color: AppColors.textTertiary, size: 64)
        ├── AppSpacing.gapM
        ├── Text('All Clear', style: AppTextStyles.headingMedium)
        ├── AppSpacing.gapS
        ├── Text("No pending transaction notifications are active today.", style: AppTextStyles.bodyMedium, textAlign: Center)
        ├── AppSpacing.gapXL
        └── SizedBox(
              width: 200,
              child: SecondaryButton(text: 'Force System Check', onPressed: () => ResetSim())
            )`,
    navigationActions: [
      'Tap "Force System Check" → Simulates service query, displays loading skeleton, and restores notification cards.'
    ],
    responsiveBehavior: 'Compact layouts are centered under a responsive layout box constraint to support display orientation changes.',
    accessibilityNotes: 'Empty illustration reads semantic description "Empty bell logo indication" instead of being ignored.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'SecondaryButton', 'AppSpacing']
  },

  // --- MODULE 6: SEARCH ---
  {
    id: 'global_search',
    name: '20. Global Search Input',
    module: 'MODULE 6: SEARCH',
    purpose: 'Minimalist focal search entry point containing keyword suggestions, search scopes, and list tiles.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Portal Query Hub')
└── SafeArea
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (crossAxisAlignment: Start)
            ├── SearchField(hint: 'Query code, vendor names, dates...', autoFocus: true)
            ├── AppSpacing.gapL
            ├── Text('Active Search Scopes', style: AppTextStyles.labelMedium)
            ├── AppSpacing.gapS
            ├── Wrap(spacing: AppSpacing.xs)
            │   ├── FilterChip(text: 'Designers', selected: true)
            │   ├── FilterChip(text: 'Auditoriums', selected: false)
            │   └── FilterChip(text: 'Contractors', selected: false)
            ├── AppSpacing.gapL
            ├── Text('Recent Queries', style: AppTextStyles.labelMedium)
            ├── AppSpacing.gapS
            ├── SuggestionRow(term: 'Annual Executive Summit 2026', icon: Icons.history)
            ├── SuggestionRow(term: 'Catering Licences Type-4', icon: Icons.history)
            └── SuggestionRow(term: 'Escrow clearing guidelines', icon: Icons.history)`,
    navigationActions: [
      'Type Search Key → Dynamic transition on character inputs, redirecting context to Search Results Screen',
      'Tap Suggestion Row → Populates search box and executes matching query instantly'
    ],
    responsiveBehavior: 'Wrap components prevent layout exceptions on narrow screens by dynamically wrapping chip tags.',
    accessibilityNotes: 'Chips state matches standard toggles to notify screen readers clearly when active.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'SearchField', 'Chip', 'AppSpacing']
  },
  {
    id: 'search_results',
    name: '21. Search Results Screen',
    module: 'MODULE 6: SEARCH',
    purpose: 'Lists active records, system categories, and events that fit the search queries, using bento card components.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Active Results', leading: BackIconButton())
└── SafeArea
    └── Column
        ├── SearchQueryBanner(term: 'Summit 2026', count: 3)
        ├── Expanded
        │   └── ListView
        │       ├── SearchResultCard(
        │             title: 'Annual Executive Summit 2026',
        │             type: 'Main Stage Event',
        │             relevance: '98%',
        │             date: 'May 30, 2026'
        │           )
        │       ├── SearchResultCard(
        │             title: 'Vendor Summit Assembly',
        │             type: 'Auxiliary Class Room',
        │             relevance: '84%',
        │             date: 'June 14, 2026'
        │           )
        │       └── SearchResultCard(
        │             title: 'Pre-Summit Briefing',
        │             type: 'System Document PDF',
        │             relevance: '72%',
        │             date: 'May 28, 2026'
        │           )
        └── BottomNavigation()`,
    navigationActions: [
      'Tap Result Card → Push Screen: Notification Details / Document View Portal'
    ],
    responsiveBehavior: 'Result tables size cleanly leveraging unified layout constraints across mobile layouts and tablet viewports.',
    accessibilityNotes: 'Supports text filtering updates with direct live-announcer updates ("3 items found for Summit 2026").',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'AppSpacing', 'InfoCard', 'Badge']
  },
  {
    id: 'search_empty',
    name: '22. Zero Results Found',
    module: 'MODULE 6: SEARCH',
    purpose: 'Standard feedback screen when database queries return empty results, complete with query-reset actions.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
├── AppTopBar(title: 'Active Results', leading: BackIconButton())
└── Center
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (mainAxisAlignment: Center)
            ├── Icon(Icons.search_off, color: AppColors.textTertiary, size: 64)
            ├── AppSpacing.gapM
            ├── Text('No Results Matching', style: AppTextStyles.headingMedium)
            ├── AppSpacing.gapS
            ├── Text("We searched coordinates and event databases but found nothing for your prompt.", style: AppTextStyles.bodyMedium, textAlign: Center)
            ├── AppSpacing.gapXL
            └── SizedBox(
                  width: 220,
                  child: PrimaryButton(text: 'Modify Query Term', onPressed: () => ClearInput())
                )`,
    navigationActions: [
      'Tap "Modify Query" → Focuses search text field and clears input constraints.'
    ],
    responsiveBehavior: 'Centered containers automatically dynamic scale, presenting an clean visual interface on both vertical or horizontal device rotations.',
    accessibilityNotes: 'Spelling suggestion rows are read out sequentially to help correct typing mistakes.',
    componentsUtilized: ['AppScaffold', 'AppTopBar', 'PrimaryButton', 'AppSpacing']
  },

  // --- MODULE 7: COMMON STATES ---
  {
    id: 'common_states_deck',
    name: '23. Common System States Grid',
    module: 'MODULE 7: COMMON STATES',
    purpose: 'Spotlight system dashboard visualizing common system statuses (Loading feedback, Fatal Error, No Network, Success Validation).',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
└── SafeArea
    └── SingleChildScrollView
        └── Padding (padding: AppSpacing.pagePadding)
            └── Column (crossAxisAlignment: Start)
                ├── Text('Common States Suite', style: AppTextStyles.headingMedium)
                ├── Text('Select a state layout variant to preview:', style: AppTextStyles.bodySmall)
                ├── AppSpacing.gapM
                ├── Row (Selection cards for state viewports)
                │   ├── Expanded(child: ActionCard(title: 'Success View', subtitle: 'Task complete', icon: Icons.check_circle_outline))
                │   └── Expanded(child: ActionCard(title: 'Loading Skeleton', subtitle: 'Processing view', icon: Icons.hourglass_empty))
                ├── AppSpacing.gapM
                ├── Row
                │   ├── Expanded(child: ActionCard(title: 'System Error', subtitle: 'State fallback', icon: Icons.error_outline))
                │   └── Expanded(child: ActionCard(title: 'No Connection', subtitle: 'Offline sync', icon: Icons.cloud_off))
                ├── AppSpacing.gapL
                └── StateViewportContainer(
                      child: ActiveSelectedStateWidget() (Renders chosen variant)
                    )`,
    navigationActions: [
      'Tap Selector Cards → Displays the selected state implementation live.'
    ],
    responsiveBehavior: 'State Cards adjust columns automatically based on screen space guidelines.',
    accessibilityNotes: 'Ensure the selected state announced by custom semantic tags corresponds accurately with active loading elements.',
    componentsUtilized: ['AppScaffold', 'ActionCard', 'Loader', 'AlertBanner', 'AppSpacing']
  },
  {
    id: 'success_state',
    name: '24. Success Validation Screen',
    module: 'MODULE 7: COMMON STATES',
    purpose: 'Full-screen celebration modal confirming successful transaction settlements or data submissions.',
    widgetHierarchy: `AppScaffold (backgroundColor: AppColors.background)
└── Center
    └── Padding (padding: AppSpacing.pagePadding)
        └── Column (mainAxisAlignment: Center)
            ├── SuccessRippleIcon(icon: Icons.check_circle, size: 72, color: AppColors.success)
            ├── AppSpacing.gapL
            ├── Text('Operation Complete', style: AppTextStyles.displayMedium)
            ├── AppSpacing.gapS
            ├── Text("Your database modifications have been committed successfully to escrow nodes.", style: AppTextStyles.bodyMedium, textAlign: Center)
            ├── AppSpacing.gapXL
            ├── PrimaryButton(text: 'Return to Hub', onPressed: () => NavigateTo(HomeDashboard))
            ├── AppSpacing.gapM
            └── AppTextButton(text: 'Download Receipt Token', onPressed: () {})`,
    navigationActions: [
      'Tap "Return to Hub" → Triggers state transition, pops layouts, and returns user to HomeDashboard.'
    ],
    responsiveBehavior: 'Centered container matches width bounds cleanly across desktop emulations and normal displays.',
    accessibilityNotes: 'Vocalizes clear completion indicator "Success operation completed checklist". Sounds a subtle haptic double impact.',
    componentsUtilized: ['AppScaffold', 'PrimaryButton', 'AppTextButton', 'AppSpacing', 'SuccessBanner']
  }
];
