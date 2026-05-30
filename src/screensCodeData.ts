// Premium Production-Ready Flutter (M3) implementations of each screen
// Designed specifically to utilize the corporate design system and tokens.

export const FLUTTER_SCREENS_CODE: Record<string, string> = {
  splash: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/constants/app_radius_shadows.dart';
import '../../core/theme/app_text_styles.dart';
import '../welcome_screen.dart';

/// Monolith Splash Screen. Represents premium minimal aesthetics with.
/// Includes an elegant automatic navigation with fade transitions.
class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  late AnimationController _fadeController;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();
    _fadeController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1200),
    );
    _fadeAnimation = CurvedAnimation(
      parent: _fadeController,
      curve: Curves.easeIn,
    );

    _fadeController.forward();

    // Settle initialization milestones and push next route with soft transition
    Future.delayed(const Duration(milliseconds: 2500), () {
      if (mounted) {
        Navigator.of(context).pushReplacement(
          PageRouteBuilder(
            pageBuilder: (context, anim1, anim2) => const WelcomeScreen(),
            transitionsBuilder: (context, anim, secondaryAnim, child) {
              return FadeTransition(opacity: anim, child: child);
            },
            transitionDuration: const Duration(milliseconds: 800),
          ),
        );
      }
    });
  }

  @override
  void dispose() {
    _fadeController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Center(
        child: FadeTransition(
          opacity: _fadeAnimation,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 80,
                height: 80,
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: AppRadius.borderXL,
                  border: Border.all(color: AppColors.border, width: 1),
                ),
                child: const Center(
                  child: Icon(
                    Icons.blur_on,
                    color: AppColors.primary,
                    size: 40,
                  ),
                ),
              ),
              const SizedBox(height: AppSpacing.l),
              Text(
                'MONOLITH',
                style: AppTextStyles.displayMedium.copyWith(
                  letterSpacing: 4.0,
                  fontWeight: FontWeight.w800,
                ),
              ),
              const SizedBox(height: AppSpacing.xs),
              Text(
                'Aesthetics Engine',
                style: AppTextStyles.caption.copyWith(
                  letterSpacing: 1.5,
                  color: AppColors.textSecondary,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  welcome: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/buttons/outline_button.dart';
import '../auth/signup_screen.dart';
import '../auth/login_screen.dart';

/// Corporate welcome screen highlighting editorial displays and crisp CTAs.
class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: AppSpacing.xxl),
              Text(
                'A new standard\\nfor planning.',
                style: AppTextStyles.displayLarge,
              ),
              const SizedBox(height: AppSpacing.s),
              Text(
                'Curated event systems, elite vendor grids, and responsive orchestration designed for Material 3.',
                style: AppTextStyles.bodyMedium.copyWith(
                  color: AppColors.textSecondary,
                  height: 1.5,
                ),
              ),
              const Spacer(),
              PrimaryButton(
                text: 'Get Started',
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(builder: (context) => const SignupScreen()),
                  );
                },
              ),
              const SizedBox(height: AppSpacing.m),
              OutlineButton(
                text: 'I already have an account',
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(builder: (context) => const LoginScreen()),
                  );
                },
              ),
              const SizedBox(height: AppSpacing.s),
            ],
          ),
        ),
      ),
    );
  }
}`,

  login: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/buttons/icon_and_loading_buttons.dart';
import '../../shared/inputs/app_text_field.dart';
import '../auth/otp_screen.dart';
import '../auth/signup_screen.dart';
import '../auth/forgot_password_screen.dart';

/// Login form setup integrating validation and secure key recover workflows.
class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Access Account', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Welcome back', style: AppTextStyles.headingLarge),
              const SizedBox(height: AppSpacing.xs),
              Text(
                'Please authenticate with your credentials.',
                style: AppTextStyles.bodySmall.copyWith(color: AppColors.textSecondary),
              ),
              const SizedBox(height: AppSpacing.xl),
              AppTextField(
                label: 'Account Email',
                hint: 'jane.smith@monolith.com',
                type: AppFieldType.email,
                controller: _emailController,
              ),
              const SizedBox(height: AppSpacing.m),
              AppTextField(
                label: 'Password',
                hint: '••••••••',
                type: AppFieldType.password,
                controller: _passwordController,
              ),
              Align(
                alignment: Alignment.centerRight,
                child: AppTextButton(
                  text: 'Forgot password?',
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const ForgotPasswordScreen()),
                    );
                  },
                ),
              ),
              const SizedBox(height: AppSpacing.l),
              PrimaryButton(
                text: 'Sign In',
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(builder: (context) => const OtpVerificationScreen()),
                  );
                },
              ),
              const SizedBox(height: AppSpacing.m),
              Center(
                child: AppTextButton(
                  text: "Don't have an account? Sign up",
                  textColor: AppColors.textSecondary,
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const SignupScreen()),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  signup: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/buttons/icon_and_loading_buttons.dart';
import '../../shared/inputs/app_text_field.dart';
import '../../shared/inputs/selection_controls.dart';
import '../auth/otp_screen.dart';
import '../auth/login_screen.dart';

/// Signup screen prompting user credentials with corporate privacy checklists.
class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  bool _acceptTerms = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Create Account', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Begin your journey', style: AppTextStyles.headingLarge),
              const SizedBox(height: AppSpacing.l),
              const AppTextField(
                label: 'Full Name',
                hint: 'Jane Smith',
              ),
              const SizedBox(height: AppSpacing.m),
              const AppTextField(
                label: 'Account Email',
                hint: 'jane.smith@monolith.com',
                type: AppFieldType.email,
              ),
              const SizedBox(height: AppSpacing.m),
              const AppTextField(
                label: 'Password',
                hint: '••••••••',
                type: AppFieldType.password,
              ),
              const SizedBox(height: AppSpacing.m),
              AppCheckbox(
                value: _acceptTerms,
                label: 'I accept User Licensing Framework',
                onChanged: (val) {
                  if (val != null) setState(() => _acceptTerms = val);
                },
              ),
              const SizedBox(height: AppSpacing.xl),
              PrimaryButton(
                text: 'Create Account',
                onPressed: _acceptTerms
                    ? () {
                        Navigator.of(context).push(
                          MaterialPageRoute(builder: (context) => const OtpVerificationScreen()),
                        );
                      }
                    : null,
              ),
              const SizedBox(height: AppSpacing.m),
              Center(
                child: AppTextButton(
                  text: "Already registered? Log in",
                  textColor: AppColors.textSecondary,
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const LoginScreen()),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  otp: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/constants/app_radius_shadows.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/buttons/icon_and_loading_buttons.dart';
import '../auth/account_setup_screen.dart';

/// Secure multi-factor code confirmation interface.
class OtpVerificationScreen extends StatefulWidget {
  const OtpVerificationScreen({super.key});

  @override
  State<OtpVerificationScreen> createState() => _OtpVerificationScreenState();
}

class _OtpVerificationScreenState extends State<OtpVerificationScreen> {
  final List<TextEditingController> _controllers = List.generate(4, (_) => TextEditingController());
  final List<FocusNode> _focusNodes = List.generate(4, (_) => FocusNode());

  @override
  void dispose() {
    for (var controller in _controllers) {
      controller.dispose();
    }
    for (var node in _focusNodes) {
      node.dispose();
    }
    super.dispose();
  }

  Widget _buildPinBox(int index) {
    return SizedBox(
      width: 60,
      height: 60,
      child: TextFormField(
        controller: _controllers[index],
        focusNode: _focusNodes[index],
        textAlign: TextAlign.center,
        keyboardType: TextInputType.number,
        maxLength: 1,
        style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
        decoration: InputDecoration(
          counterText: '',
          filled: true,
          fillColor: AppColors.surface,
          enabledBorder: OutlineInputBorder(
            borderRadius: AppRadius.borderM,
            borderSide: const BorderSide(color: AppColors.border),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: AppRadius.borderM,
            borderSide: const BorderSide(color: AppColors.primary, width: 2),
          ),
        ),
        onChanged: (value) {
          if (value.isNotEmpty && index < 3) {
            _focusNodes[index + 1].requestFocus();
          } else if (value.isEmpty && index > 0) {
            _focusNodes[index - 1].requestFocus();
          }
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Security Sync', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Enter Security Pin', style: AppTextStyles.headingLarge),
              const SizedBox(height: AppSpacing.xs),
              Text(
                'A 4-digit token has been requested for verification.',
                style: AppTextStyles.bodyMedium.copyWith(color: AppColors.textSecondary),
              ),
              const SizedBox(height: AppSpacing.xl),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: List.generate(4, (index) => _buildPinBox(index)),
              ),
              const SizedBox(height: AppSpacing.xl),
              PrimaryButton(
                text: 'Verify Token',
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(builder: (context) => const AccountSetupScreen()),
                  );
                },
              ),
              const SizedBox(height: AppSpacing.m),
              const Center(
                child: AppTextButton(
                  text: 'Resend Code in 45s',
                  textColor: AppColors.textSecondary,
                  onPressed: null,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  forgot_password: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/inputs/app_text_field.dart';

/// Elegant account recovery widget with single key entry mechanisms.
class ForgotPasswordScreen extends StatelessWidget {
  const ForgotPasswordScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Recover Key', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Password Recovery', style: AppTextStyles.headingLarge),
              const SizedBox(height: AppSpacing.xs),
              Text(
                'Provide your institutional email below to request a secured activation link.',
                style: AppTextStyles.bodyMedium.copyWith(color: AppColors.textSecondary),
              ),
              const SizedBox(height: AppSpacing.xl),
              const AppTextField(
                label: 'Registered Email',
                hint: 'jane.smith@monolith.com',
                type: AppFieldType.email,
              ),
              const SizedBox(height: AppSpacing.xl),
              PrimaryButton(
                text: 'Send Verification Link',
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Recovery link sent successfully to secure address.'),
                      behavior: SnackBarBehavior.floating,
                    ),
                  );
                  Navigator.of(context).pop();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  account_setup: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/constants/app_radius_shadows.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/inputs/app_text_field.dart';
import '../../shared/feedback/data_elements.dart';
import '../app_shell.dart';

/// Workspace setup capturing user roles and contact nodes.
class AccountSetupScreen extends StatelessWidget {
  const AccountSetupScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        title: Text('Account Personalization', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const SizedBox(height: AppSpacing.m),
              Stack(
                alignment: Alignment.bottomRight,
                children: [
                  const AppAvatar(
                    fallbackInitials: 'JS',
                    radius: 48,
                  ),
                  Positioned(
                    right: 0,
                    bottom: 0,
                    child: Container(
                      padding: const EdgeInsets.all(6),
                      decoration: const BoxDecoration(
                        color: AppColors.primary,
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.edit, color: Colors.white, size: 14),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: AppSpacing.xl),
              Align(
                alignment: Alignment.centerLeft,
                child: Text('User Details', style: AppTextStyles.headingSmall),
              ),
              const SizedBox(height: AppSpacing.s),
              const AppTextField(
                label: 'User Handle',
                hint: '@janesmith',
              ),
              const SizedBox(height: AppSpacing.m),
              const AppTextField(
                label: 'Designation Role',
                hint: 'Senior Producer',
              ),
              const SizedBox(height: AppSpacing.m),
              const AppTextField(
                label: 'Contact Phone',
                hint: '+1 (555) 0192',
                type: AppFieldType.phone,
              ),
              const SizedBox(height: AppSpacing.xxl),
              PrimaryButton(
                text: 'Enter Dashboard',
                onPressed: () {
                  Navigator.of(context).pushAndRemoveUntil(
                    MaterialPageRoute(builder: (context) => const AppShellBase()),
                    (route) => false,
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  app_shell: `import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../../core/constants/app_colors.dart';
import '../home/home_dashboard.dart';
import '../events/events_grid.dart';
import '../vendors/vendors_list.dart';
import '../notifications/notifications_hub.dart';
import '../profile/profile_hub.dart';

/// Central scaffold routing system wrapping home, profile, and search lists.
class AppShellBase extends StatefulWidget {
  const AppShellBase({super.key});

  @override
  State<AppShellBase> createState() => _AppShellBaseState();
}

class _AppShellBaseState extends State<AppShellBase> {
  int _activeIndex = 0;
  final PageController _pageController = PageController();

  final List<Widget> _subScreens = [
    const HomeDashboardScreen(),
    const EventsGridScreen(),
    const VendorsListScreen(),
    const NotificationsHubScreen(),
    const ProfileHubScreen(),
  ];

  void _onTabChanged(int index) {
    HapticFeedback.lightImpact();
    setState(() {
      _activeIndex = index;
    });
    _pageController.animateToPage(
      index,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOutCubic,
    );
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: PageView(
        controller: _pageController,
        onPageChanged: (idx) => setState(() => _activeIndex = idx),
        children: _subScreens,
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _activeIndex,
        onDestinationSelected: _onTabChanged,
        destinations: const [
          NavigationDestination(icon: Icon(Icons.dashboard_outlined), selectedIcon: Icon(Icons.dashboard), label: 'Home'),
          NavigationDestination(icon: Icon(Icons.event_outlined), selectedIcon: Icon(Icons.event), label: 'Events'),
          NavigationDestination(icon: Icon(Icons.store_outlined), selectedIcon: Icon(Icons.store), label: 'Vendors'),
          NavigationDestination(icon: Icon(Icons.notifications_outlined), selectedIcon: Icon(Icons.notifications), label: 'Alerts'),
          NavigationDestination(icon: Icon(Icons.person_outline), selectedIcon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}`,

  home_dashboard: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/cards/cards_suite.dart';
import '../../shared/feedback/data_elements.dart';
import '../../shared/layouts/layouts_pack.dart';
import '../search/global_search_screen.dart';

/// Primary summary cockpit of the running enterprise portal.
class HomeDashboardScreen extends StatelessWidget {
  const HomeDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: const Padding(
          padding: EdgeInsets.all(8.0),
          child: AppAvatar(fallbackInitials: 'JS', radius: 18),
        ),
        title: Text('Monolith Portal', style: AppTextStyles.headingSmall),
        actions: [
          IconButton(
            icon: const Icon(Icons.search, color: AppColors.textPrimary),
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const GlobalSearchScreen()),
              );
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(AppSpacing.pagePadding),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Good morning, Jane', style: AppTextStyles.displayMedium),
            const SizedBox(height: AppSpacing.s),
            GestureDetector(
              onTap: () {
                Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => const GlobalSearchScreen()),
                );
              },
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: AppColors.border),
                ),
                child: Row(
                  children: [
                    const Icon(Icons.search, color: AppColors.textSecondary, size: 20),
                    const SizedBox(width: 8),
                    Text('Find events, coordinates, spaces...', style: AppTextStyles.bodyMedium.copyWith(color: AppColors.textSecondary)),
                  ],
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.l),
            const AppSection(
              title: 'Portal Quick Actions',
              child: Row(
                children: [
                  Expanded(child: QuickActionItem(title: 'Add Event', icon: Icons.add_circle_outline)),
                  SizedBox(width: AppSpacing.s),
                  Expanded(child: QuickActionItem(title: 'Scan Code', icon: Icons.qr_code_scanner)),
                  SizedBox(width: AppSpacing.s),
                  Expanded(child: QuickActionItem(title: 'Add Vendor', icon: Icons.person_add_alt_1_outlined)),
                ],
              ),
            ),
            const SizedBox(height: AppSpacing.l),
            AppSection(
              title: 'Upcoming Events',
              child: BaseCard(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('Annual Executive Summit 2026', style: AppTextStyles.headingSmall),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(6)),
                            child: const Text('VIP', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold)),
                          ),
                        ],
                      ),
                      const SizedBox(height: AppSpacing.s),
                      Row(
                        children: [
                          const Icon(Icons.calendar_month, size: 14, color: AppColors.textSecondary),
                          const SizedBox(width: 6),
                          Text('May 30, 2026', style: AppTextStyles.bodySmall),
                          const SizedBox(width: 14),
                          const Icon(Icons.location_on, size: 14, color: AppColors.textSecondary),
                          const SizedBox(width: 6),
                          Text('Orpheum Center', style: AppTextStyles.bodySmall),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.l),
            const Row(
              children: [
                Expanded(child: StatCard(label: 'Pending Invoices', value: '\$8,290')),
                SizedBox(width: AppSpacing.s),
                Expanded(child: StatCard(label: 'Confirmed Vendors', value: '42')),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class QuickActionItem extends StatelessWidget {
  final String title;
  final IconData icon;

  const QuickActionItem({super.key, required this.title, required this.icon});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.border),
      ),
      child: Column(
        children: [
          Icon(icon, color: AppColors.primary, size: 24),
          const SizedBox(height: 8),
          Text(title, style: AppTextStyles.caption.copyWith(fontWeight: FontWeight.bold, fontSize: 11)),
        ],
      ),
    );
  }
}`,

  profile_hub: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/feedback/data_elements.dart';
import '../profile/edit_profile_screen.dart';
import '../profile/settings_screen.dart';

/// Central workspace profile metadata dashboard.
class ProfileHubScreen extends StatelessWidget {
  const ProfileHubScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        title: Text('My Profile', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const AppAvatar(fallbackInitials: 'JS', radius: 40),
              const SizedBox(height: AppSpacing.m),
              Text('Jane Smith', style: AppTextStyles.headingLarge),
              Text('Senior Producer • Event Architect', style: AppTextStyles.bodySmall.copyWith(color: AppColors.textSecondary)),
              const SizedBox(height: AppSpacing.l),
              const IntrinsicHeight(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    ProfileDetailCol(label: 'Total Projects', value: '148'),
                    VerticalDivider(color: AppColors.border),
                    ProfileDetailCol(label: 'System Rating', value: '4.98'),
                  ],
                ),
              ),
              const SizedBox(height: AppSpacing.xl),
              Align(
                alignment: Alignment.centerLeft,
                child: Text('Account Suite', style: AppTextStyles.labelMedium),
              ),
              const SizedBox(height: AppSpacing.s),
              ProfileMenuTile(
                title: 'Account Settings',
                subtitle: 'Manage contact, email, roles',
                icon: Icons.person_outline,
                onTap: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(builder: (context) => const EditProfileScreen()),
                  );
                },
              ),
              ProfileMenuTile(
                title: 'System Preferences',
                subtitle: 'Haptics, themes, telemetry',
                icon: Icons.tune,
                onTap: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(builder: (context) => const SettingsScreen()),
                  );
                },
              ),
              const SizedBox(height: AppSpacing.xl),
              PrimaryButton(
                text: 'Log Out Session',
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class ProfileDetailCol extends StatelessWidget {
  final String label;
  final String value;

  const ProfileDetailCol({super.key, required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(value, style: AppTextStyles.headingMedium.copyWith(fontWeight: FontWeight.bold)),
        const SizedBox(height: 4),
        Text(label, style: AppTextStyles.caption),
      ],
    );
  }
}

class ProfileMenuTile extends StatelessWidget {
  final String title;
  final String subtitle;
  final IconData icon;
  final VoidCallback onTap;

  const ProfileMenuTile({
    super.key,
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(icon, color: AppColors.textPrimary),
      title: Text(title, style: AppTextStyles.headingSmall.copyWith(fontSize: 15)),
      subtitle: Text(subtitle, style: AppTextStyles.bodySmall.copyWith(color: AppColors.textSecondary, fontSize: 12)),
      trailing: const Icon(Icons.chevron_right, color: AppColors.textSecondary, size: 20),
      onTap: onTap,
    );
  }
}`,

  edit_profile: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/inputs/app_text_field.dart';

/// Form suite ensuring safe profile modification.
class EditProfileScreen extends StatelessWidget {
  const EditProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Modify Credentials', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const AppTextField(label: 'Display Name', hint: 'Jane Smith'),
              const SizedBox(height: AppSpacing.m),
              const AppTextField(label: 'Primary Email', hint: 'jane.smith@monolith.com', type: AppFieldType.email),
              const SizedBox(height: AppSpacing.m),
              const AppTextField(label: 'Contact Mobile', hint: '+1 (555) 0192', type: AppFieldType.phone),
              const SizedBox(height: AppSpacing.m),
              const AppTextField(label: 'Bio / Profile Statement', hint: 'Designing minimalist physical architectures.', type: AppFieldType.textArea),
              const SizedBox(height: AppSpacing.xl),
              PrimaryButton(
                text: 'Save Modifications',
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Profile modifications synchronized successfully.'),
                      behavior: SnackBarBehavior.floating,
                    ),
                  );
                  Navigator.of(context).pop();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  settings: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/inputs/selection_controls.dart';
import '../profile/language_selection_screen.dart';

/// Central dashboard for managing notifications and security parameters.
class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _pushSelected = true;
  bool _biometricSelected = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('System Preferences', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.symmetric(vertical: 8),
        children: [
          const SettingsHead(title: 'Communication Channels'),
          AppSwitch(
            value: _pushSelected,
            label: 'Push Notifications',
            onChanged: (val) => setState(() => _pushSelected = val),
          ),
          const Divider(color: AppColors.border),
          const SettingsHead(title: 'Regional Settings'),
          ListTile(
            title: const Text('Active Language', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
            subtitle: const Text('English (US)', style: TextStyle(color: AppColors.textSecondary, fontSize: 12)),
            trailing: const Icon(Icons.chevron_right, color: AppColors.borderMedium),
            onTap: () {
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const LanguageSelectionScreen()),
              );
            },
          ),
          const Divider(color: AppColors.border),
          const SettingsHead(title: 'Security Configurations'),
          AppSwitch(
            value: _biometricSelected,
            label: 'Biometric FaceID',
            onChanged: (val) => setState(() => _biometricSelected = val),
          ),
        ],
      ),
    );
  }
}

class SettingsHead extends StatelessWidget {
  final String title;

  const SettingsHead({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16, top: 16, bottom: 8),
      child: Text(
        title.toUpperCase(),
        style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: AppColors.textSecondary, letterSpacing: 1.0),
      ),
    );
  }
}`,

  notification_settings: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/inputs/selection_controls.dart';

/// Granular toggle switch setup dashboard for various transaction feeds.
class NotificationSettingsScreen extends StatefulWidget {
  const NotificationSettingsScreen({super.key});

  @override
  State<NotificationSettingsScreen> createState() => _NotificationSettingsScreenState();
}

class _NotificationSettingsScreenState extends State<NotificationSettingsScreen> {
  bool _eventApp = true;
  bool _invoicePaid = true;
  bool _chatMessage = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Notification Controls'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Dynamic Channel Control', style: AppTextStyles.headingSmall),
              const SizedBox(height: AppSpacing.xs),
              Text('Receive instant alerts when these events occur.', style: AppTextStyles.bodySmall),
              const SizedBox(height: AppSpacing.l),
              AppSwitch(
                value: _eventApp,
                label: 'New Event Applications',
                onChanged: (val) => setState(() => _eventApp = val),
              ),
              const SizedBox(height: AppSpacing.m),
              AppSwitch(
                value: _invoicePaid,
                label: 'Invoice Payments Settled',
                onChanged: (val) => setState(() => _invoicePaid = val),
              ),
              const SizedBox(height: AppSpacing.m),
              AppSwitch(
                value: _chatMessage,
                label: 'Vendor Portal Chat Messages',
                onChanged: (val) => setState(() => _chatMessage = val),
              ),
              const Spacer(),
              PrimaryButton(
                text: 'Settle Configuration',
                onPressed: () => Navigator.of(context).pop(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  language_selection: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/theme/app_text_styles.dart';

/// Interface representing language bundles setup.
class LanguageSelectionScreen extends StatelessWidget {
  const LanguageSelectionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final languages = [
      'English (United States)',
      'Español (España)',
      'Français (France)',
      'Deutsch (Deutschland)',
      '日本語 (日本)',
      '中文 (简体)',
    ];

    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Select Language', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: ListView.builder(
        itemCount: languages.length,
        itemBuilder: (context, index) {
          final isSelected = index == 0;
          return ListTile(
            title: Text(languages[index], style: const TextStyle(fontWeight: FontWeight.w500, fontSize: 14)),
            trailing: isSelected ? const Icon(Icons.check, color: AppColors.accent) : null,
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text('Language modified to \${languages[index]}.'),
                  behavior: SnackBarBehavior.floating,
                ),
              );
              Navigator.of(context).pop();
            },
          );
        },
      ),
    );
  }
}`,

  help_support: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/secondary_button.dart';
import '../../shared/buttons/outline_button.dart';
import '../../shared/inputs/app_text_field.dart';

/// Corporate self-service and direct operational ticket generator.
class HelpSupportScreen extends StatelessWidget {
  const HelpSupportScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppColors.textPrimary),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Help Desk Center', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const AppTextField(
                label: '',
                hint: 'Search documentation library...',
                type: AppFieldType.search,
              ),
              const SizedBox(height: AppSpacing.l),
              Text('Popular Knowledge Base', style: AppTextStyles.labelMedium),
              const SizedBox(height: AppSpacing.s),
              const HelpArticleItem(title: 'Standard Onboarding Rules'),
              const HelpArticleItem(title: 'Adding Vendors under Material 3'),
              const HelpArticleItem(title: 'Troubleshooting Realtime WebSockets'),
              const SizedBox(height: AppSpacing.xl),
              Text('Need Human Assistance?', style: AppTextStyles.headingSmall),
              const SizedBox(height: AppSpacing.s),
              SecondaryButton(
                text: 'Submit Operational Ticket',
                onPressed: () {},
              ),
              const SizedBox(height: AppSpacing.m),
              OutlineButton(
                text: 'E-mail Technical Operations',
                onPressed: () {},
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class HelpArticleItem extends StatelessWidget {
  final String title;

  const HelpArticleItem({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: EdgeInsets.zero,
      leading: const Icon(Icons.article_outlined, color: AppColors.textSecondary),
      title: Text(title, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600)),
      trailing: const Icon(Icons.chevron_right, size: 18, color: AppColors.borderMedium),
    );
  }
}`,

  about_us: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';

/// Overview representing software version details and licensing credits.
class AboutMonolithScreen extends StatelessWidget {
  const AboutMonolithScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('About Software'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const SizedBox(height: AppSpacing.xl),
              const Icon(Icons.blur_on, size: 64, color: AppColors.primary),
              const SizedBox(height: AppSpacing.m),
              Text('MONOLITH ARCHITECTS', style: AppTextStyles.headingSmall.copyWith(letterSpacing: 2)),
              Text('System Version 3.4.0 (Build 509)', style: AppTextStyles.caption),
              const SizedBox(height: AppSpacing.xl),
              const Divider(color: AppColors.border),
              const LicenseKeyRow(label: 'Architects', value: 'Google AI Studio & UX team'),
              const LicenseKeyRow(label: 'Material Engine', value: 'Flutter 3.x System'),
              const LicenseKeyRow(label: 'Licensing Contract', value: 'Apache-2.0 Open Source'),
              const Spacer(),
              Text('© 2026 Monolith Platforms LLC.', style: AppTextStyles.caption),
            ],
          ),
        ),
      ),
    );
  }
}

class LicenseKeyRow extends StatelessWidget {
  final String label;
  final String value;

  const LicenseKeyRow({super.key, required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppColors.textSecondary)),
          Text(value, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
        ],
      ),
    );
  }
}`,

  notifications_list: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/feedback/toast_and_snackbar.dart';

/// Dashboard compiling unread operations alerts, invoice paid markers, etc.
class NotificationsHubScreen extends StatefulWidget {
  const NotificationsHubScreen({super.key});

  @override
  State<NotificationsHubScreen> createState() => _NotificationsHubScreenState();
}

class _NotificationsHubScreenState extends State<NotificationsHubScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        title: Text('System Notifications', style: AppTextStyles.headingSmall),
        centerTitle: true,
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          children: const [
            AlertBanner(
              title: 'Milestone Settled',
              description: 'Invoice #1092 processed for Executive Annual Gala 2026.',
              icon: Icons.check_circle_outline,
              backgroundColor: AppColors.successBg,
              contentColor: AppColors.success,
            ),
            SizedBox(height: AppSpacing.m),
            AlertBanner(
              title: 'Vendor Approved',
              description: 'Spine Catering Group satisfied physical security evaluations check.',
              icon: Icons.star_outline,
              backgroundColor: AppColors.infoBg,
              contentColor: AppColors.info,
            ),
            SizedBox(height: AppSpacing.m),
            AlertBanner(
              title: 'Service Refresh Complete',
              description: 'System workspace upgraded to v3.4 under active schema rules.',
              icon: Icons.update,
              backgroundColor: AppColors.warningBg,
              contentColor: AppColors.warning,
            ),
          ],
        ),
      ),
    );
  }
}`,

  notification_details: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/buttons/secondary_button.dart';
import '../../shared/feedback/data_elements.dart';

/// Screen focusing on specialized transaction details.
class NotificationDetailsScreen extends StatelessWidget {
  const NotificationDetailsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Invoice Settlement'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const AppChip(label: 'Billing Alert', onSelected: null),
              const SizedBox(height: AppSpacing.m),
              Text('Milestone Settle Notification', style: AppTextStyles.headingLarge),
              Text('Posted 2026-05-29 • 17:24 UTC', style: AppTextStyles.caption),
              const SizedBox(height: AppSpacing.l),
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: AppColors.border),
                ),
                child: const Column(
                  children: [
                    DetailLineSpec(field: 'Target Code', value: 'INV-1092'),
                    Divider(color: AppColors.border),
                    DetailLineSpec(field: 'Total Value', value: '\$18,250.00 USD'),
                    Divider(color: AppColors.border),
                    DetailLineSpec(field: 'Sync Origin', value: 'Executive Board'),
                  ],
                ),
              ),
              const SizedBox(height: AppSpacing.l),
              Text(
                'The transaction was approved by security rules on first-check verification. Funds are reserved in Escrow tier clearance.',
                style: AppTextStyles.bodyMedium.copyWith(height: 1.5),
              ),
              const Spacer(),
              PrimaryButton(
                text: 'Download PDF Invoice',
                prefixIcon: Icons.download_outlined,
                onPressed: () {},
              ),
              const SizedBox(height: AppSpacing.m),
              SecondaryButton(
                text: 'Flag for Auditing Review',
                icon: Icons.flag,
                onPressed: () {},
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class DetailLineSpec extends StatelessWidget {
  final String field;
  final String value;

  const DetailLineSpec({super.key, required this.field, required this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(field, style: const TextStyle(fontWeight: FontWeight.w600, color: AppColors.textSecondary)),
          Text(value, style: const TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }
}`,

  notifications_empty: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/secondary_button.dart';

/// Clean informative status displayed when there are no alerts.
class NotificationsEmptyStateScreen extends StatelessWidget {
  const NotificationsEmptyStateScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.xxl),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.notifications_none, color: AppColors.textTertiary, size: 64),
              const SizedBox(height: AppSpacing.m),
              Text('All Clear', style: AppTextStyles.headingMedium),
              const SizedBox(height: AppSpacing.s),
              Text(
                'No pending transaction notifications are active today.',
                style: AppTextStyles.bodyMedium.copyWith(color: AppColors.textSecondary),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: AppSpacing.xl),
              SizedBox(
                width: 200,
                child: SecondaryButton(
                  text: 'Force System Check',
                  onPressed: () {},
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  global_search: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/inputs/app_text_field.dart';

/// Standard quick filter search entry point.
class GlobalSearchScreen extends StatelessWidget {
  const GlobalSearchScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Portal Query Hub'),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const AppTextField(
                label: '',
                hint: 'Query code, vendor names, dates...',
                type: AppFieldType.search,
              ),
              const SizedBox(height: AppSpacing.l),
              Text('Active Search Scopes', style: AppTextStyles.labelMedium),
              const SizedBox(height: AppSpacing.s),
              const Wrap(
                spacing: 8,
                children: [
                  ChoiceChip(label: Text('Designers'), selected: true),
                  ChoiceChip(label: Text('Auditoriums'), selected: false),
                  ChoiceChip(label: Text('Contractors'), selected: false),
                ],
              ),
              const SizedBox(height: AppSpacing.xl),
              Text('Recent Queries', style: AppTextStyles.labelMedium),
              const SizedBox(height: AppSpacing.s),
              const SuggestionListRow(term: 'Annual Executive Summit 2026'),
              const SuggestionListRow(term: 'Catering Licences Type-4'),
              const SuggestionListRow(term: 'Escrow clearing guidelines'),
            ],
          ),
        ),
      ),
    );
  }
}

class SuggestionListRow extends StatelessWidget {
  final String term;

  const SuggestionListRow({super.key, required this.term});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: EdgeInsets.zero,
      leading: const Icon(Icons.history, color: AppColors.textSecondary, size: 18),
      title: Text(term, style: const TextStyle(fontSize: 14)),
      trailing: const Icon(Icons.arrow_outward, size: 16, color: AppColors.borderMedium),
    );
  }
}`,

  search_results: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/cards/cards_suite.dart';

/// Lists all items matching queried portal terms.
class SearchResultsScreen extends StatelessWidget {
  const SearchResultsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Active Results'),
      ),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.pagePadding),
        children: const [
          ResultSummaryCard(
            title: 'Annual Executive Summit 2026',
            category: 'Main Stage Event',
            matchRatio: '98%',
          ),
          SizedBox(height: AppSpacing.m),
          ResultSummaryCard(
            title: 'Vendor Summit Assembly',
            category: 'Auxiliary Class Room',
            matchRatio: '84%',
          ),
          SizedBox(height: AppSpacing.m),
          ResultSummaryCard(
            title: 'Pre-Summit Briefing',
            category: 'System Document PDF',
            matchRatio: '72%',
          ),
        ],
      ),
    );
  }
}

class ResultSummaryCard extends StatelessWidget {
  final String title;
  final String category;
  final String matchRatio;

  const ResultSummaryCard({
    super.key,
    required this.title,
    required this.category,
    required this.matchRatio,
  });

  @override
  Widget build(BuildContext context) {
    return BaseCard(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(category.toUpperCase(), style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: AppColors.accent)),
                Text('Match: \$matchRatio', style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: AppColors.success)),
              ],
            ),
            const SizedBox(height: 8),
            Text(title, style: AppTextStyles.headingSmall),
          ],
        ),
      ),
    );
  }
}`,

  search_empty: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';

/// Informative screen shown when search results are empty.
class SearchEmptyStateScreen extends StatelessWidget {
  const SearchEmptyStateScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.search_off, size: 64, color: AppColors.textTertiary),
              const SizedBox(height: AppSpacing.m),
              Text('No Results Matching', style: AppTextStyles.headingMedium),
              const SizedBox(height: AppSpacing.s),
              Text(
                'We searched coordinates and event databases but found nothing for your prompt.',
                style: AppTextStyles.bodyMedium.copyWith(color: AppColors.textSecondary),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: AppSpacing.xl),
              SizedBox(
                width: 220,
                child: PrimaryButton(
                  text: 'Modify Query Term',
                  onPressed: () => Navigator.of(context).pop(),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  common_states_deck: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/cards/cards_suite.dart';

/// Playground screen for testing state indicators.
class CommonSystemStatesDeckScreen extends StatelessWidget {
  const CommonSystemStatesDeckScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Common States Suite'),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Select a state layout variant:', style: AppTextStyles.bodySmall),
              const SizedBox(height: AppSpacing.m),
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  crossAxisSpacing: 12,
                  mainAxisSpacing: 12,
                  children: [
                    ActionCard(title: 'Success View', subtitle: 'Task complete', icon: Icons.check_circle_outline, onTap: () {}),
                    ActionCard(title: 'Loading Skeleton', subtitle: 'Processing view', icon: Icons.hourglass_empty, onTap: () {}),
                    ActionCard(title: 'System Error', subtitle: 'State fallback', icon: Icons.error_outline, onTap: () {}),
                    ActionCard(title: 'No Connection', subtitle: 'Offline sync', icon: Icons.cloud_off, onTap: () {}),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

  success_state: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';
import '../../shared/buttons/primary_button.dart';
import '../../shared/buttons/icon_and_loading_buttons.dart';

/// Celebrative visual overlay marking correct operations checkpoint.
class SuccessValidationScreen extends StatelessWidget {
  const SuccessValidationScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.pagePadding),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const CircleAvatar(
                backgroundColor: AppColors.successBg,
                radius: 40,
                child: Icon(Icons.check, color: AppColors.success, size: 40),
              ),
              const SizedBox(height: AppSpacing.l),
              Text('Operation Complete', style: AppTextStyles.displayMedium),
              const SizedBox(height: AppSpacing.s),
              Text(
                'Your database modifications have been committed successfully to escrow nodes.',
                style: AppTextStyles.bodyMedium.copyWith(color: AppColors.textSecondary),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: AppSpacing.xl),
              PrimaryButton(
                text: 'Return to Hub',
                onPressed: () => Navigator.of(context).pop(),
              ),
              const SizedBox(height: AppSpacing.m),
              const AppTextButton(
                text: 'Download Receipt Token',
                onPressed: null,
              ),
            ],
          ),
        ),
      ),
    );
  }
}`
};
