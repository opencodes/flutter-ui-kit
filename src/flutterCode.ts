import { CategoryInfo } from './types';

export const FLUTTER_DESIGN_SYSTEM_CATEGORIES: CategoryInfo[] = [
  {
    id: 'tokens',
    name: 'Design Tokens & Theme',
    icon: 'Compass',
    widgets: [
      {
        id: 'colors',
        name: 'Colors (AppColors)',
        description: 'Semantic and neutral color definitions emphasizing a premium pure white, Apple-inspired minimalistic interface.',
        fileLocation: 'lib/core/constants/app_colors.dart',
        dartCode: `import 'package:flutter/material.dart';

/// [@license Apache-2.0]
/// Premium Minimalist Color Token Library.
/// Designed with #FFFFFF Pure White base, soft tone-on-tone grays,
/// and intense obsidian-black semantic accents.
class AppColors {
  AppColors._();

  // Primary Branding & Accent Colors
  static const Color primary = Color(0xFF000000); // Pure Obsidian
  static const Color accent = Color(0xFF007AFF);  // Apple Blue Accent
  
  // Backgrounds & Surfaces
  static const Color background = Color(0xFFFFFFFF); // Pure White Base
  static const Color surface = Color(0xFFFBFBFD);    // Off-White Apple Surface
  static const Color surfaceSecondary = Color(0xFFF5F5F7); // Subtle Light Gray Surface
  static const Color border = Color(0xFFE5E5EA);     // Fine Hairline Gray Border
  static const Color borderMedium = Color(0xFFD1D1D6); // Interactive Mid-contrast Border

  // Neutral Solid Grays
  static const Color textPrimary = Color(0xFF1D1D1F);   // Dark Slate Gray
  static const Color textSecondary = Color(0xFF86868B); // Cool System Muted Gray
  static const Color textTertiary = Color(0xFFB0B0B5);  // Delicate Placeholder Gray
  static const Color white = Color(0xFFFFFFFF);

  // Semantic Status Colors
  static const Color success = Color(0xFF34C759); // Apple Green
  static const Color successBg = Color(0xFFEAF9EE);
  static const Color warning = Color(0xFFFF9500); // Apple Orange
  static const Color warningBg = Color(0xFFFFF4E5);
  static const Color error = Color(0xFFFF3B30);   // Apple Red
  static const Color errorBg = Color(0xFFFFEBEA);
  static const Color info = Color(0xFF5856D6);    // Apple Violet/Indigo
  static const Color infoBg = Color(0xFFF1F0FC);

  // Alpha Overlays for Dynamic Shadows
  static const Color shadowOpaque = Color(0xFF000000);
  static Color shadowSubtle = const Color(0xFF000000).withAlpha(10); // ~4% opacity
  static Color shadowMedium = const Color(0xFF000000).withAlpha(18); // ~7% opacity
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/core/constants/app_colors.dart';

class SampleWidget extends StatelessWidget {
  const SampleWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.border),
      ),
      child: const Text(
        'Minimalist Typography',
        style: TextStyle(color: AppColors.textPrimary),
      ),
    );
  }
}`,
        properties: [
          { name: 'primary', type: 'Color', defaultValue: 'Color(0xFF000000)', description: 'Primary focal color used for solid buttons, main action points.' },
          { name: 'background', type: 'Color', defaultValue: 'Color(0xFFFFFFFF)', description: 'Sole background canvas choice. Preserves pure white space.' },
          { name: 'surface', type: 'Color', defaultValue: 'Color(0xFFFBFBFD)', description: 'Elegant elevated card/container gray.' },
          { name: 'textPrimary', type: 'Color', defaultValue: 'Color(0xFF1D1D1F)', description: 'Highly legible near-black typography.' }
        ],
        customizations: [
          'Switch to pitch dark obsidian tone-on-tone if user explicitly requests Dark Mode in system toggle.',
          'Introduce subtle cold-gray undertones (e.g. SF pro light grays) for ultra-premium look.'
        ],
        statesSupported: ['default', 'selected']
      },
      {
        id: 'typography',
        name: 'Typography (AppTextStyles)',
        description: 'San Francisco styled premium font scales utilizing Inter/Roboto pairing, precise kerning, and strict hierarchy.',
        fileLocation: 'lib/core/theme/app_text_styles.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../constants/app_colors.dart';

/// [@license Apache-2.0]
/// Premium Typography tokens with iOS-inspired tracking and weight hierarchies.
class AppTextStyles {
  AppTextStyles._();

  // Display Styles
  static const TextStyle displayLarge = TextStyle(
    fontSize: 34,
    fontWeight: FontWeight.w700,
    letterSpacing: -0.8,
    color: AppColors.textPrimary,
    height: 1.2,
  );

  static const TextStyle displayMedium = TextStyle(
    fontSize: 28,
    fontWeight: FontWeight.w700,
    letterSpacing: -0.6,
    color: AppColors.textPrimary,
    height: 1.25,
  );

  // Heading Styles
  static const TextStyle headingLarge = TextStyle(
    fontSize: 22,
    fontWeight: FontWeight.w600,
    letterSpacing: -0.4,
    color: AppColors.textPrimary,
    height: 1.3,
  );

  static const TextStyle headingMedium = TextStyle(
    fontSize: 20,
    fontWeight: FontWeight.w600,
    letterSpacing: -0.3,
    color: AppColors.textPrimary,
    height: 1.3,
  );

  static const TextStyle headingSmall = TextStyle(
    fontSize: 17,
    fontWeight: FontWeight.w600,
    letterSpacing: -0.2,
    color: AppColors.textPrimary,
    height: 1.35,
  );

  // Body Styles
  static const TextStyle bodyLarge = TextStyle(
    fontSize: 17,
    fontWeight: FontWeight.w400,
    letterSpacing: -0.15,
    color: AppColors.textPrimary,
    height: 1.4,
  );

  static const TextStyle bodyMedium = TextStyle(
    fontSize: 15,
    fontWeight: FontWeight.w400,
    letterSpacing: -0.1,
    color: AppColors.textPrimary,
    height: 1.45,
  );

  static const TextStyle bodySmall = TextStyle(
    fontSize: 13,
    fontWeight: FontWeight.w400,
    letterSpacing: 0.0,
    color: AppColors.textSecondary,
    height: 1.5,
  );

  // Special System Styles
  static const TextStyle caption = TextStyle(
    fontSize: 11,
    fontWeight: FontWeight.w500,
    letterSpacing: 0.1,
    color: AppColors.textSecondary,
    height: 1.4,
  );

  static const TextStyle labelMedium = TextStyle(
    fontSize: 13,
    fontWeight: FontWeight.w600,
    letterSpacing: -0.1,
    color: AppColors.textPrimary,
    height: 1.2,
  );

  static const TextStyle labelSmall = TextStyle(
    fontSize: 10,
    fontWeight: FontWeight.w700,
    letterSpacing: 0.2,
    color: AppColors.textPrimary,
    height: 1.1,
  );
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/core/theme/app_text_styles.dart';

Widget buildHeader() {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text('Minimalist Kit', style: AppTextStyles.displayLarge),
      const SizedBox(height: 4),
      Text('Material 3 Architecture Code', style: AppTextStyles.bodyMedium),
    ],
  );
}`,
        properties: [
          { name: 'displayLarge', type: 'TextStyle', defaultValue: '34px, W700, -0.8 tracking', description: 'Hero copy style for headlines, large numbers, highlights.' },
          { name: 'headingLarge', type: 'TextStyle', defaultValue: '22px, W600, -0.4 tracking', description: 'Standard app header title weight and contrast.' },
          { name: 'bodyLarge', type: 'TextStyle', defaultValue: '17px, W400, -0.15 tracking', description: 'iOS-styled default size for dense text passages.' },
          { name: 'bodyMedium', type: 'TextStyle', defaultValue: '15px, W400, -0.1 tracking', description: 'Standard content and utility description weight.' }
        ],
        customizations: [
          'Change font family dynamically using Google Fonts plugin helper, applying Inter or Space Grotesk selectively.',
          'Multiply scale heights to construct extremely airy content blocks.'
        ],
        statesSupported: ['default', 'disabled']
      },
      {
        id: 'spacing',
        name: 'Spacing & Gaps (AppSpacing)',
        description: 'Strict grid spacing constants along with responsive convenience Layout Gap widgets to avoid magic numbers.',
        fileLocation: 'lib/core/constants/app_spacing.dart',
        dartCode: `import 'package:flutter/material.dart';

/// [@license Apache-2.0]
/// Strictly defined sizing variables utilizing a premium Apple 8px logic.
class AppSpacing {
  AppSpacing._();

  static const double xxs = 4.0;
  static const double xs = 8.0;
  static const double s = 12.0;
  static const double m = 16.0;
  static const double l = 24.0;
  static const double xl = 32.0;
  static const double xxl = 48.0;
  static const double xxxl = 64.0;

  // Outer constraints
  static const double pagePadding = 16.0;
  static const double bentoSpacing = 12.0;

  // Reusable Gap widgets for elegant, non-wasteful UI writing.
  static const Widget gapXXS = SizedBox(width: xxs, height: xxs);
  static const Widget gapXS = SizedBox(width: xs, height: xs);
  static const Widget gapS = SizedBox(width: s, height: s);
  static const Widget gapM = SizedBox(width: m, height: m);
  static const Widget gapL = SizedBox(width: l, height: l);
  static const Widget gapXL = SizedBox(width: xl, height: xl);
  static const Widget gapXXL = SizedBox(width: xxl, height: xxl);
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/core/constants/app_spacing.dart';

class SpacingDemo extends StatelessWidget {
  const SpacingDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Text('First Element'),
        AppSpacing.gapM, // Replaces const SizedBox(height: 16)
        const Text('Second Element'),
      ],
    );
  }
}`,
        properties: [
          { name: 'xs', type: 'double', defaultValue: '8.0', description: 'Very small margins for inner details, badge spacing.' },
          { name: 'm', type: 'double', defaultValue: '16.0', description: 'Standard margin block applied universally for layouts.' },
          { name: 'xl', type: 'double', defaultValue: '32.0', description: 'Large sections divider metric.' },
          { name: 'gapM', type: 'Widget', defaultValue: 'SizedBox(width: 16, height: 16)', description: 'Constant gap for performance and code purity.' }
        ],
        customizations: [
          'Modify standard spacing ratios to build tighter or even airier components depending on target layout density.'
        ],
        statesSupported: ['default']
      },
      {
        id: 'radius_shadows',
        name: 'Radius & Shadows Token',
        description: 'Curved boundaries and ultra-soft, organic elevations representing elite hardware and high-precision physical layers.',
        fileLocation: 'lib/core/constants/app_radius_shadows.dart',
        dartCode: `import 'package:flutter/material.dart';
import 'app_colors.dart';

/// [@license Apache-2.0]
/// Radius and organic Shadow constants mimicking premium matte surfaces.
class AppRadius {
  AppRadius._();

  static const double xs = 4.0;
  static const double s = 8.0;
  static const double m = 12.0;
  static const double l = 16.0;
  static const double xl = 24.0;
  static const double xxl = 32.0;

  static const Radius radiusXS = Radius.circular(xs);
  static const Radius radiusS = Radius.circular(s);
  static const Radius radiusM = Radius.circular(m);
  static const Radius radiusL = Radius.circular(l);
  static const Radius radiusXL = Radius.circular(xl);
  static const Radius radiusFixed = Radius.circular(99.0); // Pills & Avatars

  static BorderRadius borderXS = BorderRadius.circular(xs);
  static BorderRadius borderS = BorderRadius.circular(s);
  static BorderRadius borderM = BorderRadius.circular(m);
  static BorderRadius borderL = BorderRadius.circular(l);
  static BorderRadius borderXL = BorderRadius.circular(xl);
  static BorderRadius borderPill = BorderRadius.circular(99.0);
}

class AppShadows {
  AppShadows._();

  /// Soft elevation simulating extremely subtle component layers.
  static final List<BoxShadow> lightElevation = [
    BoxShadow(
      color: AppColors.shadowSubtle,
      blurRadius: 10,
      offset: const Offset(0, 2),
      spreadRadius: 0,
    ),
  ];

  /// Elevated card style modeling light floating segments.
  static final List<BoxShadow> mediumElevation = [
    BoxShadow(
      color: AppColors.shadowMedium,
      blurRadius: 20,
      offset: const Offset(0, 8),
      spreadRadius: -4,
    ),
    BoxShadow(
      color: AppColors.shadowSubtle,
      blurRadius: 4,
      offset: const Offset(0, 1),
      spreadRadius: 0,
    ),
  ];

  /// Premium high floating dropdown layer.
  static final List<BoxShadow> highElevation = [
    BoxShadow(
      color: AppColors.shadowSubtle.withAlpha(25),
      blurRadius: 32,
      offset: const Offset(0, 20),
      spreadRadius: -8,
    ),
  ];
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/core/constants/app_radius_shadows.dart';

Widget buildPremiumCard() {
  return Container(
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: AppRadius.borderM,
      boxShadow: AppShadows.mediumElevation,
    ),
    padding: const EdgeInsets.all(16),
    child: const Text('Floating Minimalist Aspect'),
  );
}`,
        properties: [
          { name: 'xs', type: 'double', defaultValue: '4.0', description: 'Tiny corners, used for badges or micro cards.' },
          { name: 'm', type: 'double', defaultValue: '12.0', description: 'Standard Apple-inspired organic curve.' },
          { name: 'lightElevation', type: 'List<BoxShadow>', defaultValue: 'Shadow offset (0,2), blurred 10px', description: 'Ambient surface shadows.' }
        ],
        customizations: [
          'Add high-gloss glow modifiers to AppShadows for cyberpunk or glassmorphic elements.'
        ],
        statesSupported: ['default', 'selected']
      },
      {
        id: 'theme_system',
        name: 'App Theme System (ThemeData)',
        description: 'Complete centralized ThemeData setup mapping semantic color schemes, text themes, and Material 3 structures.',
        fileLocation: 'lib/core/theme/app_theme.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../constants/app_colors.dart';
import '../constants/app_radius_shadows.dart';
import 'app_text_styles.dart';

/// [@license Apache-2.0]
/// Complete architecture mapping Material 3 widgets to the premium white design language.
class AppTheme {
  AppTheme._();

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      primaryColor: AppColors.primary,
      scaffoldBackgroundColor: AppColors.background,
      
      // Color Scheme Mapping
      colorScheme: const ColorScheme(
        brightness: Brightness.light,
        primary: AppColors.primary,
        onPrimary: AppColors.white,
        secondary: AppColors.surfaceSecondary,
        onSecondary: AppColors.textPrimary,
        error: AppColors.error,
        onError: AppColors.white,
        surface: AppColors.surface,
        onSurface: AppColors.textPrimary,
        outline: AppColors.border,
      ),

      // Typographical Mapping
      textTheme: TextTheme(
        displayLarge: AppTextStyles.displayLarge,
        displayMedium: AppTextStyles.displayMedium,
        titleLarge: AppTextStyles.headingLarge,
        titleMedium: AppTextStyles.headingMedium,
        titleSmall: AppTextStyles.headingSmall,
        bodyLarge: AppTextStyles.bodyLarge,
        bodyMedium: AppTextStyles.bodyMedium,
        bodySmall: AppTextStyles.bodySmall,
        labelMedium: AppTextStyles.labelMedium,
        labelSmall: AppTextStyles.labelSmall,
      ),

      // Input Field (Text Form Fields) Theme
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.surface,
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
        border: OutlineInputBorder(
          borderRadius: AppRadius.borderM,
          borderSide: const BorderSide(color: AppColors.border, width: 1),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: AppRadius.borderM,
          borderSide: const BorderSide(color: AppColors.border, width: 1),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: AppRadius.borderM,
          borderSide: const BorderSide(color: AppColors.primary, width: 1.5),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: AppRadius.borderM,
          borderSide: const BorderSide(color: AppColors.error, width: 1),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderRadius: AppRadius.borderM,
          borderSide: const BorderSide(color: AppColors.error, width: 1.5),
        ),
        labelStyle: AppTextStyles.bodyMedium.copyWith(color: AppColors.textSecondary),
        hintStyle: AppTextStyles.bodyMedium.copyWith(color: AppColors.textTertiary),
      ),

      // Button Decoration Theme
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppColors.primary,
          foregroundColor: AppColors.white,
          elevation: 0,
          textStyle: AppTextStyles.labelMedium,
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
          shape: RoundedRectangleBorder(borderRadius: AppRadius.borderM),
        ),
      ),

      // Card Decoration Theme
      cardTheme: CardTheme(
        color: AppColors.surface,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: AppRadius.borderM,
          side: const BorderSide(color: AppColors.border, width: 1),
        ),
        margin: EdgeInsets.empty,
      ),

      // Navigation Bar Decoration
      navigationBarTheme: NavigationBarThemeData(
        backgroundColor: AppColors.white,
        indicatorColor: AppColors.surfaceSecondary,
        labelTextStyle: WidgetStateProperty.resolveWith((states) {
          if (states.contains(WidgetState.selected)) {
            return AppTextStyles.caption.copyWith(color: AppColors.primary, fontWeight: FontWeight.w600);
          }
          return AppTextStyles.caption.copyWith(color: AppColors.textSecondary);
        }),
        iconTheme: WidgetStateProperty.resolveWith((states) {
          if (states.contains(WidgetState.selected)) {
            return const IconThemeData(color: AppColors.primary, size: 24);
          }
          return const IconThemeData(color: AppColors.textSecondary, size: 24);
        }),
      ),
    );
  }
}

extension on EdgeInsets {
  static const empty = EdgeInsets.all(0);
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/core/theme/app_theme.dart';

void main() {
  runApp(
    MaterialApp(
      theme: AppTheme.lightTheme,
      home: const Scaffold(
        body: Center(child: Text('Built and styled entirely with central theme config.')),
      ),
    ),
  );
}`,
        properties: [
          { name: 'lightTheme', type: 'ThemeData', defaultValue: 'central object', description: 'Root style dictionary configured for all basic Flutter framework widgets.' },
          { name: 'inputDecorationTheme', type: 'InputDecorationTheme', defaultValue: 'Filled surfaces with AppRadius.borderM', description: 'Universal config mapping form elements.' }
        ],
        customizations: [
          'Add a dark mode counterpart (darkTheme) mapped with dark obsidian variables complying with hardware borders.'
        ],
        statesSupported: ['default', 'disabled']
      }
    ]
  },
  {
    id: 'buttons',
    name: 'Premium Buttons',
    icon: 'MousePointer',
    widgets: [
      {
        id: 'primary_button',
        name: 'Primary Button',
        description: 'Elite main action element featuring crisp color depth, clean corner limits, and native haptic support.',
        fileLocation: 'lib/shared/buttons/primary_button.dart',
        dartCode: `import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Solid obsidian primary action button with loading and disabling state managers.
class PrimaryButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final bool isLoading;
  final bool isDisabled;
  final IconData? prefixIcon;
  final IconData? suffixIcon;

  const PrimaryButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.isLoading = false,
    this.isDisabled = false,
    this.prefixIcon,
    this.suffixIcon,
  });

  @override
  Widget build(BuildContext context) {
    final effectiveDisabled = isDisabled || isLoading || onPressed == null;

    return Semantics(
      button: true,
      enabled: !effectiveDisabled,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        height: 52,
        width: double.infinity,
        child: ElevatedButton(
          onPressed: effectiveDisabled
              ? null
              : () {
                  HapticFeedback.lightImpact();
                  onPressed!();
                },
          style: ElevatedButton.styleFrom(
            backgroundColor: AppColors.primary,
            foregroundColor: AppColors.white,
            disabledBackgroundColor: AppColors.surfaceSecondary,
            disabledForegroundColor: AppColors.textTertiary,
            elevation: 0,
            shape: RoundedRectangleBorder(
              borderRadius: AppRadius.borderM,
              side: BorderSide(
                color: effectiveDisabled ? AppColors.border : Colors.transparent,
                width: 1,
              ),
            ),
          ),
          child: isLoading
              ? const SizedBox(
                  width: 20,
                  height: 20,
                  child: CircularProgressIndicator(
                    strokeWidth: 2,
                    valueColor: AlwaysStoppedAnimation<Color>(AppColors.textSecondary),
                  ),
                )
              : Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    if (prefixIcon != null) ...[
                      Icon(prefixIcon, size: 18),
                      const SizedBox(width: 8),
                    ],
                    Text(
                      text,
                      style: const TextStyle(
                        fontFamily: 'Inter',
                        fontWeight: FontWeight.w600,
                        fontSize: 15,
                        letterSpacing: -0.1,
                      ),
                    ),
                    if (suffixIcon != null) ...[
                      const SizedBox(width: 8),
                      Icon(suffixIcon, size: 18),
                    ],
                  ],
                ),
        ),
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/buttons/primary_button.dart';

Widget buildCTA() {
  return PrimaryButton(
    text: 'Continue Checkout',
    prefixIcon: Icons.shopping_bag_outlined,
    onPressed: () {
      print('Checkout triggered');
    },
  );
}`,
        properties: [
          { name: 'text', type: 'String', defaultValue: 'Required', description: 'The display copy representing button command.' },
          { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'Required', description: 'Triggers transaction. Pass null to disable.' },
          { name: 'isLoading', type: 'bool', defaultValue: 'false', description: 'Displays lightweight loading spinner.' },
          { name: 'isDisabled', type: 'bool', defaultValue: 'false', description: 'Freezes interaction and gray-out borders.' }
        ],
        customizations: [
          'Change Border Radius metric from AppRadius.borderM to AppRadius.borderPill for a sportier visual aesthetic.'
        ],
        statesSupported: ['default', 'disabled', 'loading']
      },
      {
        id: 'secondary_button',
        name: 'Secondary Button',
        description: 'Understated action component utilizing Apple gray tones, providing visual alternative for tertiary choices.',
        fileLocation: 'lib/shared/buttons/secondary_button.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Secondary layout button with light-gray background surfaces.
class SecondaryButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final bool isLoading;
  final bool isDisabled;
  final IconData? icon;

  const SecondaryButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.isLoading = false,
    this.isDisabled = false,
    this.icon,
  });

  @override
  Widget build(BuildContext context) {
    final effectiveDisabled = isDisabled || isLoading || onPressed == null;

    return SizedBox(
      height: 52,
      width: double.infinity,
      child: TextButton(
        onPressed: effectiveDisabled ? null : onPressed,
        style: TextButton.styleFrom(
          backgroundColor: AppColors.surfaceSecondary,
          foregroundColor: AppColors.textPrimary,
          disabledBackgroundColor: AppColors.surfaceSecondary.withAlpha(120),
          disabledForegroundColor: AppColors.textTertiary,
          shape: RoundedRectangleBorder(
            borderRadius: AppRadius.borderM,
          ),
        ),
        child: isLoading
            ? const SizedBox(
                width: 20,
                height: 20,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  valueColor: AlwaysStoppedAnimation<Color>(AppColors.textSecondary),
                ),
              )
            : Row(
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (icon != null) ...[
                    Icon(icon, size: 18, color: AppColors.textPrimary),
                    const SizedBox(width: 8),
                  ],
                  Text(
                    text,
                    style: const TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 15,
                    ),
                  ),
                ],
              ),
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/buttons/secondary_button.dart';

Widget buildSecondaryAction() {
  return SecondaryButton(
    text: 'Learn More',
    icon: Icons.info_outline,
    onPressed: () {},
  );
}`,
        properties: [
          { name: 'text', type: 'String', defaultValue: 'Required', description: 'Muted statement string.' },
          { name: 'icon', type: 'IconData?', defaultValue: 'null', description: 'Accompaniment icon rendering.' }
        ],
        customizations: [
          'Add a delicate outer borderline to provide better hierarchy on purely white surfaces.'
        ],
        statesSupported: ['default', 'disabled', 'loading']
      },
      {
        id: 'outline_button',
        name: 'Outline Button',
        description: 'Hairline thin stroke border button blending elegantly into empty white spaces.',
        fileLocation: 'lib/shared/buttons/outline_button.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// High-fidelity bordered button emphasizing delicate negative margins.
class OutlineButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final bool isDisabled;
  final IconData? icon;

  const OutlineButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.isDisabled = false,
    this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 52,
      width: double.infinity,
      child: OutlinedButton(
        onPressed: isDisabled ? null : onPressed,
        style: OutlinedButton.styleFrom(
          side: const BorderSide(color: AppColors.border, width: 1),
          foregroundColor: AppColors.textPrimary,
          disabledForegroundColor: AppColors.textTertiary,
          shape: RoundedRectangleBorder(
            borderRadius: AppRadius.borderM,
          ),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: [
            if (icon != null) ...[
              Icon(icon, size: 18),
              const SizedBox(width: 8),
            ],
            Text(
              text,
              style: const TextStyle(
                fontWeight: FontWeight.w600,
                fontSize: 15,
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/buttons/outline_button.dart';

Widget renderOutline() {
  return OutlineButton(
    text: 'Download Invoice',
    icon: Icons.download_outlined,
    onPressed: () {},
  );
}`,
        properties: [
          { name: 'text', type: 'String', defaultValue: 'Required', description: 'Label text to be wrapped inside bordered frame.' }
        ],
        customizations: [
          'Change hair-line gray stroke offset or colored border on hovered state.'
        ],
        statesSupported: ['default', 'disabled']
      },
      {
        id: 'app_text_button',
        name: 'App Text Button',
        description: 'Clean typographic tap target for links, helper actions, or low-emphasis triggers.',
        fileLocation: 'lib/shared/buttons/icon_and_loading_buttons.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Low-emphasis text-only action button.
class AppTextButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final Color textColor;

  const AppTextButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.textColor = AppColors.accent,
  });

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onPressed,
      style: TextButton.styleFrom(
        foregroundColor: textColor,
        minimumSize: Size.zero,
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        shape: RoundedRectangleBorder(borderRadius: AppRadius.borderS),
      ),
      child: Text(
        text,
        style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13),
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/buttons/icon_and_loading_buttons.dart';

Widget renderTextLink() {
  return AppTextButton(
    text: 'Forgot details?',
    onPressed: () {},
  );
}`,
        properties: [
          { name: 'text', type: 'String', defaultValue: 'Required', description: 'The text label to display.' },
          { name: 'textColor', type: 'Color', defaultValue: 'AppColors.accent', description: 'Color of the text label.' },
          { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'Required', description: 'Callback action when tapped. Set to null to disable.' }
        ],
        customizations: [
          'Adjust padding or typography size according to local spacing standards.'
        ],
        statesSupported: ['default', 'disabled']
      },
      {
        id: 'text_and_icon_buttons',
        name: 'Text & Icon & Loading Buttons',
        description: 'Compact utility tap modules for low-emphasis triggers, icon utilities, or state loaders.',
        fileLocation: 'lib/shared/buttons/icon_and_loading_buttons.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Complete suite of smaller typography triggers and micro buttons.
class AppTextButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final Color textColor;

  const AppTextButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.textColor = AppColors.accent,
  });

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onPressed,
      style: TextButton.styleFrom(
        foregroundColor: textColor,
        minimumSize: Size.zero,
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
        shape: RoundedRectangleBorder(borderRadius: AppRadius.borderS),
      ),
      child: Text(
        text,
        style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14),
      ),
    );
  }
}

class AppIconButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback onPressed;
  final bool isSecondary;

  const AppIconButton({
    super.key,
    required this.icon,
    required this.onPressed,
    this.isSecondary = false,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: isSecondary ? AppColors.surfaceSecondary : Colors.transparent,
        border: Border.all(color: AppColors.border, width: isSecondary ? 0 : 1),
        shape: BoxShape.circle,
      ),
      child: IconButton(
        icon: Icon(icon, size: 20),
        color: AppColors.textPrimary,
        onPressed: onPressed,
        constraints: const BoxConstraints(minWidth: 44, minHeight: 44),
      ),
    );
  }
}

class LoadingButton extends StatelessWidget {
  final String text;
  final bool isLoading;
  final VoidCallback onPressed;

  const LoadingButton({
    super.key,
    required this.text,
    required this.isLoading,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 52,
      width: double.infinity,
      decoration: BoxDecoration(
        color: isLoading ? AppColors.surfaceSecondary : AppColors.primary,
        borderRadius: AppRadius.borderM,
        border: Border.all(color: isLoading ? AppColors.border : Colors.transparent),
      ),
      child: InkWell(
        onTap: isLoading ? null : onPressed,
        borderRadius: AppRadius.borderM,
        child: Center(
          child: isLoading
              ? const SizedBox(
                  width: 20,
                  height: 20,
                  child: CircularProgressIndicator(
                    strokeWidth: 2,
                    valueColor: AlwaysStoppedAnimation<Color>(AppColors.textSecondary),
                  ),
                )
              : Text(
                  text,
                  style: const TextStyle(
                    color: AppColors.white,
                    fontWeight: FontWeight.w600,
                  ),
                ),
        ),
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/buttons/icon_and_loading_buttons.dart';

Widget renderSpecials() {
  return Row(
    children: [
      AppIconButton(icon: Icons.heart_broken, onPressed: () {}),
      const SizedBox(width: 8),
      AppTextButton(text: 'Forgot Details?', onPressed: () {}),
    ],
  );
}`,
        properties: [
          { name: 'text', type: 'String', defaultValue: 'Required', description: 'Tap label' },
          { name: 'icon', type: 'IconData', defaultValue: 'Required', description: 'Central symbolic icon.' },
          { name: 'isSecondary', type: 'bool', defaultValue: 'false', description: 'Renders soft gray background over thin borders.' }
        ],
        customizations: [
          'Add key colors feedback parameters allowing red delete actions or orange configurations.'
        ],
        statesSupported: ['default', 'disabled', 'loading']
      }
    ]
  },
  {
    id: 'inputs',
    name: 'Form & Selection Controls',
    icon: 'Edit3',
    widgets: [
      {
        id: 'app_text_field',
        name: 'Form Inputs (AppTextField)',
        description: 'Architected input elements encompassing normal fields, search inputs, passwords, phone patterns, and text areas.',
        fileLocation: 'lib/shared/inputs/app_text_field.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

enum AppFieldType { text, search, password, phone, email, textArea }

/// [@license Apache-2.0]
/// A high-performance, single component handling all keyboard inputs.
class AppTextField extends StatefulWidget {
  final String label;
  final String hint;
  final AppFieldType type;
  final TextEditingController? controller;
  final String? errorText;
  final bool isDisabled;
  final ValueChanged<String>? onChanged;

  const AppTextField({
    super.key,
    required this.label,
    required this.hint,
    this.type = AppFieldType.text,
    this.controller,
    this.errorText,
    this.isDisabled = false,
    this.onChanged,
  });

  @override
  State<AppTextField> createState() => _AppTextFieldState();
}

class _AppTextFieldState extends State<AppTextField> {
  bool _obscureText = true;

  @override
  Widget build(BuildContext context) {
    TextInputType keyboardType;
    int maxLines = 1;
    Widget? prefix;
    Widget? suffix;

    switch (widget.type) {
      case AppFieldType.search:
        keyboardType = TextInputType.text;
        prefix = const Icon(Icons.search, color: AppColors.textSecondary, size: 20);
        break;
      case AppFieldType.password:
        keyboardType = TextInputType.visiblePassword;
        suffix = IconButton(
          icon: Icon(
            _obscureText ? Icons.visibility_outlined : Icons.visibility_off_outlined,
            color: AppColors.textSecondary,
            size: 20,
          ),
          onPressed: () {
            setState(() {
              _obscureText = !_obscureText;
            });
          },
        );
        break;
      case AppFieldType.phone:
        keyboardType = TextInputType.phone;
        prefix = Padding(
          padding: const EdgeInsets.only(right: 8.0, left: 4),
          child: Text(
            '+1',
            style: TextStyle(
              fontWeight: FontWeight.w600,
              color: AppColors.textPrimary,
              fontSize: 15,
            ),
          ),
        );
        break;
      case AppFieldType.email:
        keyboardType = TextInputType.emailAddress;
        prefix = const Icon(Icons.alternate_email, color: AppColors.textSecondary, size: 18);
        break;
      case AppFieldType.textArea:
        keyboardType = TextInputType.multiline;
        maxLines = 5;
        break;
      default:
        keyboardType = TextInputType.text;
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.label.isNotEmpty) ...[
          Text(
            widget.label,
            style: const TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.w600,
              color: AppColors.textPrimary,
            ),
          ),
          const SizedBox(height: 6),
        ],
        TextFormField(
          controller: widget.controller,
          keyboardType: keyboardType,
          obscureText: widget.type == AppFieldType.password && _obscureText,
          maxLines: maxLines,
          enabled: !widget.isDisabled,
          onChanged: widget.onChanged,
          style: TextStyle(
            fontSize: 15,
            color: widget.isDisabled ? AppColors.textSecondary : AppColors.textPrimary,
          ),
          decoration: InputDecoration(
            hintText: widget.hint,
            errorText: widget.errorText,
            prefixIcon: prefix != null
                ? Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const SizedBox(width: 14),
                      prefix,
                    ],
                  )
                : null,
            prefixIconConstraints: const BoxConstraints(minWidth: 0, minHeight: 0),
            suffixIcon: suffix,
          ),
        ),
      ],
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/inputs/app_text_field.dart';

Widget renderCredentials() {
  return Column(
    children: [
      AppTextField(
        label: 'Account Email',
        hint: 'jane.smith@apple.com',
        type: AppFieldType.email,
      ),
      const SizedBox(height: 12),
      AppTextField(
        label: 'Secret Password',
        hint: '••••••••',
        type: AppFieldType.password,
      ),
    ],
  );
}`,
        properties: [
          { name: 'label', type: 'String', defaultValue: 'Required', description: 'Tiny prompt text rendered above input.' },
          { name: 'hint', type: 'String', defaultValue: 'Required', description: 'Light grey helper template inside field.' },
          { name: 'type', type: 'AppFieldType', defaultValue: 'AppFieldType.text', description: 'Semantic modifier adapting keyboard and prefixes.' },
          { name: 'errorText', type: 'String?', defaultValue: 'null', description: 'Renders red outline boundary when non-empty.' }
        ],
        customizations: [
          'Incorporate reactive autocompletion search layers connected directly on field typing controllers.'
        ],
        statesSupported: ['default', 'disabled', 'error']
      },
      {
        id: 'selection_controls',
        name: 'Selection (Checkbox, Radio, Switch)',
        description: 'Hardware tactile selection triggers carefully adapted from Material 3 to match minimalist styling guidelines.',
        fileLocation: 'lib/shared/inputs/selection_controls.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';

/// [@license Apache-2.0]
/// Curated Checkbox, Switch, and Radio buttons with custom pure white backgrounds.
class AppCheckbox extends StatelessWidget {
  final bool value;
  final String label;
  final ValueChanged<bool?> onChanged;
  final bool isDisabled;

  const AppCheckbox({
    super.key,
    required this.value,
    required this.label,
    required this.onChanged,
    this.isDisabled = false,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: isDisabled ? null : () => onChanged(!value),
      borderRadius: BorderRadius.circular(4),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Checkbox(
            value: value,
            onChanged: isDisabled ? null : onChanged,
            activeColor: AppColors.primary,
            side: const BorderSide(color: AppColors.borderMedium, width: 1.5),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
          ),
          const SizedBox(width: 8),
          Text(
            label,
            style: TextStyle(
              fontSize: 15,
              color: isDisabled ? AppColors.textTertiary : AppColors.textPrimary,
            ),
          ),
        ],
      ),
    );
  }
}

class AppRadio<T> extends StatelessWidget {
  final T value;
  final T groupValue;
  final String label;
  final ValueChanged<T?> onChanged;
  final bool isDisabled;

  const AppRadio({
    super.key,
    required this.value,
    required this.groupValue,
    required this.label,
    required this.onChanged,
    this.isDisabled = false,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: isDisabled ? null : () => onChanged(value),
      borderRadius: BorderRadius.circular(4),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Radio<T>(
            value: value,
            groupValue: groupValue,
            onChanged: isDisabled ? null : onChanged,
            activeColor: AppColors.primary,
          ),
          const SizedBox(width: 8),
          Text(
            label,
            style: TextStyle(
              fontSize: 15,
              color: isDisabled ? AppColors.textTertiary : AppColors.textPrimary,
            ),
          ),
        ],
      ),
    );
  }
}

class AppSwitch extends StatelessWidget {
  final bool value;
  final String label;
  final ValueChanged<bool> onChanged;
  final bool isDisabled;

  const AppSwitch({
    super.key,
    required this.value,
    required this.label,
    required this.onChanged,
    this.isDisabled = false,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          label,
          style: TextStyle(
            fontSize: 15,
            fontWeight: FontWeight.w500,
            color: isDisabled ? AppColors.textTertiary : AppColors.textPrimary,
          ),
        ),
        Switch.adaptive(
          value: value,
          onChanged: isDisabled ? null : onChanged,
          activeColor: AppColors.primary,
          activeTrackColor: AppColors.primary.withAlpha(50),
          inactiveThumbColor: AppColors.white,
          inactiveTrackColor: AppColors.surfaceSecondary,
        ),
      ],
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/inputs/selection_controls.dart';

Widget renderPreferences() {
  return Column(
    children: [
      AppSwitch(
        value: true,
        label: 'Push Communications',
        onChanged: (val) {},
      ),
      AppCheckbox(
        value: false,
        label: 'Agree to standard licensing framework',
        onChanged: (val) {},
      ),
    ],
  );
}`,
        properties: [
          { name: 'value', type: 'bool', defaultValue: 'Required', description: 'State trigger.' },
          { name: 'label', type: 'String', defaultValue: 'Required', description: 'Instruction string next to option indicator.' }
        ],
        customizations: [
          'Replace iOS adaptive switch styling with custom painted rounded slider backgrounds for consistent custom brand designs.'
        ],
        statesSupported: ['default', 'disabled', 'selected']
      }
    ]
  },
  {
    id: 'navigation',
    name: 'Unified Navigation',
    icon: 'Grid',
    widgets: [
      {
        id: 'app_navigation_pack',
        name: 'Navigation Pack (NavBar, TopBar, TabBar, Drawer)',
        description: 'Strict hardware boundary navigation modules, including classic layouts, and modern bottom tabs.',
        fileLocation: 'lib/shared/navigation/navigation_pack.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Complete, highly polished Navigation layout controllers adhering to the pure white system guidelines.
class AppBottomNavBar extends StatelessWidget {
  final int currentIndex;
  final ValueChanged<int> onTap;
  final List<BottomNavigationBarItem> items;

  const AppBottomNavBar({
    super.key,
    required this.currentIndex,
    required this.onTap,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: AppColors.white,
        border: Border(top: BorderSide(color: AppColors.border, width: 1)),
      ),
      child: BottomNavigationBar(
        currentIndex: currentIndex,
        onTap: onTap,
        items: items,
        backgroundColor: AppColors.white,
        elevation: 0,
        type: BottomNavigationBarType.fixed,
        selectedItemColor: AppColors.primary,
        unselectedItemColor: AppColors.textSecondary,
        selectedLabelStyle: const TextStyle(fontWeight: FontWeight.w600, fontSize: 11),
        unselectedLabelStyle: const TextStyle(fontWeight: FontWeight.w500, fontSize: 11),
      ),
    );
  }
}

class AppTopBar extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  final List<Widget>? actions;
  final Widget? leading;

  const AppTopBar({
    super.key,
    required this.title,
    this.actions,
    this.leading,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(
        title,
        style: const TextStyle(
          fontSize: 17,
          fontWeight: FontWeight.w600,
          color: AppColors.textPrimary,
          letterSpacing: -0.3,
        ),
      ),
      centerTitle: true,
      elevation: 0,
      backgroundColor: AppColors.background,
      surfaceTintColor: Colors.transparent,
      leading: leading,
      actions: actions,
      shape: const Border(
        bottom: BorderSide(color: AppColors.border, width: 1),
      ),
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(56.0);
}

class AppTabBar extends StatelessWidget {
  final TabController controller;
  final List<String> tabs;

  const AppTabBar({
    super.key,
    required this.controller,
    required this.tabs,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: AppColors.surface,
        border: Border(bottom: BorderSide(color: AppColors.border, width: 1)),
      ),
      child: TabBar(
        controller: controller,
        indicatorColor: AppColors.primary,
        indicatorSize: TabBarIndicatorSize.tab,
        labelColor: AppColors.primary,
        unselectedLabelColor: AppColors.textSecondary,
        labelStyle: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14),
        unselectedLabelStyle: const TextStyle(fontWeight: FontWeight.w500, fontSize: 14),
        dividerColor: Colors.transparent,
        tabs: tabs.map((tab) => Tab(text: tab)).toList(),
      ),
    );
  }
}

class DrawerMenu extends StatelessWidget {
  final Map<String, IconData> menuItems;
  final String activeItem;
  final ValueChanged<String> onItemSelect;

  const DrawerMenu({
    super.key,
    required this.menuItems,
    required this.activeItem,
    required this.onItemSelect,
  });

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: AppColors.background,
      elevation: 0,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const DrawerHeader(
            decoration: BoxDecoration(
              border: Border(bottom: BorderSide(color: AppColors.border, width: 1)),
            ),
            child: Row(
              children: [
                CircleAvatar(
                  backgroundColor: AppColors.primary,
                  radius: 20,
                  child: Icon(Icons.apps, color: Colors.white, size: 20),
                ),
                SizedBox(width: 12),
                Text(
                  'SYSTEM UI',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, letterSpacing: 0.5),
                )
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 12),
              children: menuItems.entries.map((entry) {
                final isSelected = entry.key == activeItem;
                return ListTile(
                  leading: Icon(entry.value, color: isSelected ? AppColors.primary : AppColors.textSecondary),
                  title: Text(
                    entry.key,
                    style: TextStyle(
                      fontWeight: isSelected ? FontWeight.w600 : FontWeight.w500,
                      color: isSelected ? AppColors.primary : AppColors.textSecondary,
                    ),
                  ),
                  selected: isSelected,
                  selectedTileColor: AppColors.surfaceSecondary,
                  shape: RoundedRectangleBorder(borderRadius: AppRadius.borderS),
                  onTap: () {
                    Navigator.pop(context);
                    onItemSelect(entry.key);
                  },
                );
              }).toList(),
            ),
          )
        ],
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/navigation/navigation_pack.dart';

Widget renderNavBar(int index) {
  return AppBottomNavBar(
    currentIndex: index,
    onTap: (newIdx) {},
    items: const [
      BottomNavigationBarItem(icon: Icon(Icons.home_outlined), label: 'Terminal'),
      BottomNavigationBarItem(icon: Icon(Icons.settings_outlined), label: 'Preferences'),
    ],
  );
}`,
        properties: [
          { name: 'currentIndex', type: 'int', defaultValue: 'Required', description: 'Selected indices index.' },
          { name: 'title', type: 'String', defaultValue: 'Required', description: 'Header static text.' }
        ],
        customizations: [
          'Add dynamic badges overlay markers above BottomNavBar icons to trigger real-time indicators.'
        ],
        statesSupported: ['default', 'selected']
      }
    ]
  },
  {
    id: 'cards_layout',
    name: 'Cards & Layout structures',
    icon: 'Layout',
    widgets: [
      {
        id: 'cards_suite',
        name: 'Cards Module (Base, Info, Stat, Action Cards)',
        description: 'Four highly polished canvas containers matching the pure white concept with soft elevation values.',
        fileLocation: 'lib/shared/cards/cards_suite.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Comprehensive suite of structural card modules emphasizing flat textures and clean outlines.
class BaseCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry padding;
  final VoidCallback? onTap;

  const BaseCard({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.all(16.0),
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: AppRadius.borderM,
        border: Border.all(color: AppColors.border, width: 1),
        boxShadow: AppShadows.lightElevation,
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: AppRadius.borderM,
          child: Padding(
            padding: padding,
            child: child,
          ),
        ),
      ),
    );
  }
}

class InfoCard extends StatelessWidget {
  final String title;
  final String message;
  final IconData icon;
  final Color accentColor;

  const InfoCard({
    super.key,
    required this.title,
    required this.message,
    required this.icon,
    this.accentColor = AppColors.accent,
  });

  @override
  Widget build(BuildContext context) {
    return BaseCard(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: accentColor, size: 24),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 16),
                ),
                const SizedBox(height: 4),
                Text(
                  message,
                  style: const TextStyle(color: AppColors.textSecondary, fontSize: 14),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}

class StatCard extends StatelessWidget {
  final String value;
  final String label;
  final String? changePercentage;
  final bool isPositiveChange;

  const StatCard({
    super.key,
    required this.value,
    required this.label,
    this.changePercentage,
    this.isPositiveChange = true,
  });

  @override
  Widget build(BuildContext context) {
    return BaseCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(color: AppColors.textSecondary, fontSize: 13, fontWeight: FontWeight.w500),
          ),
          const SizedBox(height: 8),
          Row(
            baseline: TextBaseline.alphabetic,
            crossAxisAlignment: CrossAxisAlignment.baseline,
            children: [
              Text(
                value,
                style: const TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w700,
                  letterSpacing: -0.6,
                ),
              ),
              if (changePercentage != null) ...[
                const SizedBox(width: 8),
                Text(
                  (isPositiveChange ? '+' : '-') + changePercentage!,
                  style: TextStyle(
                    color: isPositiveChange ? AppColors.success : AppColors.error,
                    fontSize: 13,
                    fontWeight: FontWeight.w600,
                  ),
                )
              ]
            ],
          )
        ],
      ),
    );
  }
}

class ActionCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final IconData icon;
  final VoidCallback onTap;

  const ActionCard({
    super.key,
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return BaseCard(
      onTap: onTap,
      child: Row(
        children: [
          CircleAvatar(
            backgroundColor: AppColors.surfaceSecondary,
            foregroundColor: AppColors.textPrimary,
            radius: 22,
            child: Icon(icon, size: 20),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 15)),
                const SizedBox(height: 2),
                Text(subtitle, style: const TextStyle(color: AppColors.textSecondary, fontSize: 13)),
              ],
            ),
          ),
          const Icon(Icons.chevron_right, color: AppColors.textSecondary, size: 20),
        ],
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/cards/cards_suite.dart';

Widget renderPerformanceSuite() {
  return Column(
    children: [
      const StatCard(
        label: 'Active Subscribers',
        value: '14,290',
        changePercentage: '12%',
      ),
      const SizedBox(height: 12),
      ActionCard(
        title: 'Upgrade System Configuration',
        subtitle: 'Unlocks faster pipeline execution bounds',
        icon: Icons.bolt,
        onTap: () {},
      ),
    ],
  );
}`,
        properties: [
          { name: 'value', type: 'String', defaultValue: 'Required', description: 'Numeric representation metric inside StatCard.' },
          { name: 'changePercentage', type: 'String?', defaultValue: 'null', description: 'A green/red percentage marker showing direction variance.' }
        ],
        customizations: [
          'Support network background image maps under card container scopes.'
        ],
        statesSupported: ['default', 'selected']
      },
      {
        id: 'layouts_pack',
        name: 'Layout Structures (Scaffold, Responsive, Center)',
        description: 'Layout containers framing device margins, section blocks, padding arrays, and responsive breakpoints.',
        fileLocation: 'lib/shared/layouts/layouts_pack.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_spacing.dart';

/// [@license Apache-2.0]
/// Complete responsive wrappers and margins to enforce screen purity and safe visual bounds.
class AppScaffold extends StatelessWidget {
  final String? title;
  final Widget body;
  final Widget? bottomNavigationBar;
  final Widget? leading;
  final List<Widget>? actions;
  final Widget? drawer;

  const AppScaffold({
    super.key,
    this.title,
    required this.body,
    this.bottomNavigationBar,
    this.leading,
    this.actions,
    this.drawer,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      drawer: drawer,
      appBar: title != null
          ? AppBar(
              title: Text(
                title!,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600, letterSpacing: -0.2),
              ),
              centerTitle: true,
              backgroundColor: AppColors.background,
              elevation: 0,
              shape: const Border(bottom: BorderSide(color: AppColors.border, width: 1)),
              leading: leading,
              actions: actions,
            )
          : null,
      body: SafeArea(child: body),
      bottomNavigationBar: bottomNavigationBar,
    );
  }
}

class AppSection extends StatelessWidget {
  final String title;
  final Widget child;
  final Widget? trailing;

  const AppSection({
    super.key,
    required this.title,
    required this.child,
    this.trailing,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              title,
              style: const TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w700,
                color: AppColors.textSecondary,
                letterSpacing: 0.2,
              ),
            ),
            if (trailing != null) trailing!,
          ],
        ),
        const SizedBox(height: 12),
        child,
      ],
    );
  }
}

class ResponsiveContainer extends StatelessWidget {
  final Widget child;
  final double maxDesktopWidth;

  const ResponsiveContainer({
    super.key,
    required this.child,
    this.maxDesktopWidth = 600.0,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: maxDesktopWidth),
        child: child,
      ),
    );
  }
}

class AppPadding extends StatelessWidget {
  final Widget child;

  const AppPadding({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(AppSpacing.pagePadding),
      child: child,
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/layouts/layouts_pack.dart';

class ShellLayout extends StatelessWidget {
  const ShellLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'DART SYSTEM CORE',
      body: ResponsiveContainer(
        child: AppPadding(
          child: AppSection(
            title: 'METRICS OVERVIEW',
            child: Container(height: 200, color: Colors.grey[200]),
          ),
        ),
      ),
    );
  }
}`,
        properties: [
          { name: 'maxDesktopWidth', type: 'double', defaultValue: '600.0', description: 'Maximum viewport box width to anchor responsive structures.' },
          { name: 'title', type: 'String', defaultValue: 'Required', description: 'Outer topbar subtitle anchor.' }
        ],
        customizations: [
          'Inject animated slide-up transits during layout initialization workflows.'
        ],
        statesSupported: ['default']
      }
    ]
  },
  {
    id: 'feedback_dialogs',
    name: 'Feedback & Dialog Alerts',
    icon: 'AlertTriangle',
    widgets: [
      {
        id: 'toast_and_snackbar',
        name: 'Alert Components & Status Banners',
        description: 'Complete alert assets encompassing quick Toasts, action-equipped Snackbars, and structural red/green/yellow Status Banners.',
        fileLocation: 'lib/shared/feedback/toast_and_snackbar.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Static state visualizers and banner controls.
class AlertBanner extends StatelessWidget {
  final String title;
  final String description;
  final IconData icon;
  final Color backgroundColor;
  final Color contentColor;

  const AlertBanner({
    super.key,
    required this.title,
    required this.description,
    required this.icon,
    this.backgroundColor = AppColors.infoBg,
    this.contentColor = AppColors.info,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: AppRadius.borderM,
        border: Border.all(color: contentColor.withAlpha(50)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: contentColor, size: 20),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 14, color: AppColors.textPrimary),
                ),
                const SizedBox(height: 2),
                Text(
                  description,
                  style: TextStyle(fontSize: 13, color: AppColors.textSecondary),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}

class SuccessBanner extends StatelessWidget {
  final String title;
  final String description;

  const SuccessBanner({
    super.key,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return AlertBanner(
      title: title,
      description: description,
      icon: Icons.check_circle_outline,
      backgroundColor: AppColors.successBg,
      contentColor: AppColors.success,
    );
  }
}

class ErrorBanner extends StatelessWidget {
  final String title;
  final String description;

  const ErrorBanner({
    super.key,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return AlertBanner(
      title: title,
      description: description,
      icon: Icons.error_outline,
      backgroundColor: AppColors.errorBg,
      contentColor: AppColors.error,
    );
  }
}

class AppFeedbackService {
  AppFeedbackService._();

  static void showSimpleToast(BuildContext context, String message) {
    final overlay = Overlay.of(context);
    final entry = OverlayEntry(
      builder: (context) => Positioned(
        bottom: 50,
        left: 20,
        right: 20,
        child: Material(
          color: Colors.transparent,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: AppColors.textPrimary,
              borderRadius: AppRadius.borderS,
              boxShadow: AppShadows.mediumElevation,
            ),
            child: Text(
              message,
              style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w500),
              textAlign: TextAlign.center,
            ),
          ),
        ),
      ),
    );

    overlay.insert(entry);
    Future.delayed(const Duration(seconds: 2), () => entry.remove());
  }

  static void showActionSnackbar({
    required BuildContext context,
    required String message,
    required String actionLabel,
    required VoidCallback onAction,
  }) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message, style: const TextStyle(color: Colors.white, fontSize: 14)),
        backgroundColor: AppColors.textPrimary,
        duration: const Duration(seconds: 4),
        shape: RoundedRectangleBorder(borderRadius: AppRadius.borderS),
        behavior: SnackBarBehavior.floating,
        action: SnackBarAction(
          label: actionLabel,
          textColor: AppColors.accent,
          onPressed: onAction,
        ),
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/feedback/toast_and_snackbar.dart';

Widget renderAlerts(BuildContext context) {
  return Column(
    children: [
      const SuccessBanner(
        title: 'Connection Stabilized',
        description: 'Real-time telemetry reports accurate packet delivery ratios.',
      ),
      const SizedBox(height: 12),
      ElevatedButton(
        onPressed: () => AppFeedbackService.showSimpleToast(context, 'Settings Saved'),
        child: const Text('Save Details'),
      ),
    ],
  );
}`,
        properties: [
          { name: 'title', type: 'String', defaultValue: 'Required', description: 'Bold semantic highlight text.' },
          { name: 'description', type: 'String', defaultValue: 'Required', description: 'Lower contrast body explanations.' }
        ],
        customizations: [
          'Support automatic slide-away animation callbacks triggered using dynamic state timers.'
        ],
        statesSupported: ['default']
      },
      {
        id: 'dialogs_system',
        name: 'Modals Pack (Confirm & BottomSheets)',
        description: 'Highly integrated overlays managing structural confirmations and Apple-style bottom interactive drawers.',
        fileLocation: 'lib/shared/dialogs/dialogs_system.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Modular modal layout systems centering user-focus elegantly.
class ConfirmDialog extends StatelessWidget {
  final String title;
  final String message;
  final String confirmLabel;
  final String cancelLabel;
  final VoidCallback onConfirm;
  final bool isDestructive;

  const ConfirmDialog({
    super.key,
    required this.title,
    required this.message,
    required this.confirmLabel,
    required this.cancelLabel,
    required this.onConfirm,
    this.isDestructive = false,
  });

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      backgroundColor: AppColors.white,
      shadowColor: Colors.transparent,
      surfaceTintColor: Colors.transparent,
      shape: RoundedRectangleBorder(borderRadius: AppRadius.borderM),
      title: Text(
        title,
        style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 18),
        textAlign: TextAlign.center,
      ),
      content: Text(
        message,
        style: const TextStyle(color: AppColors.textSecondary, fontSize: 14),
        textAlign: TextAlign.center,
      ),
      actionsAlignment: MainAxisAlignment.center,
      actionsPadding: const EdgeInsets.only(bottom: 20, left: 16, right: 16),
      actions: [
        Row(
          children: [
            Expanded(
              child: OutlinedButton(
                onPressed: () => Navigator.pop(context),
                style: OutlinedButton.styleFrom(
                  side: const BorderSide(color: AppColors.border),
                  shape: RoundedRectangleBorder(borderRadius: AppRadius.borderS),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
                child: Text(
                  cancelLabel,
                  style: const TextStyle(color: AppColors.textPrimary, fontWeight: FontWeight.w600),
                ),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                  onConfirm();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: isDestructive ? AppColors.error : AppColors.primary,
                  elevation: 0,
                  shape: RoundedRectangleBorder(borderRadius: AppRadius.borderS),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
                child: Text(
                  confirmLabel,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                ),
              ),
            ),
          ],
        )
      ],
    );
  }
}

class AppBottomSheet {
  AppBottomSheet._();

  static void showPremium({
    required BuildContext context,
    required String title,
    required Widget child,
  }) {
    showModalBottomSheet(
      context: context,
      backgroundColor: AppColors.white,
      elevation: 0,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: AppRadius.radiusL),
      ),
      builder: (context) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const SizedBox(height: 8),
            // iOS visual handlebar indicator
            Container(
              height: 4,
              width: 36,
              decoration: BoxDecoration(
                color: AppColors.border,
                borderRadius: BorderRadius.circular(2),
              ),
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Text(
                title,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, letterSpacing: -0.2),
              ),
            ),
            const Divider(color: AppColors.border),
            Flexible(child: child),
            const SizedBox(height: 12),
          ],
        ),
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/dialogs/dialogs_system.dart';

void askToDestroy(BuildContext context) {
  showDialog(
    context: context,
    builder: (context) => ConfirmDialog(
      title: 'Delete Repository Data?',
      message: 'This operation is absolute and cannot be undone.',
      confirmLabel: 'Confirm Delete',
      cancelLabel: 'Keep Data',
      isDestructive: true,
      onConfirm: () {},
    ),
  );
}`,
        properties: [
          { name: 'title', type: 'String', defaultValue: 'Required', description: 'Central prompt inquiry label.' },
          { name: 'onConfirm', type: 'VoidCallback', defaultValue: 'Required', description: 'Triggers action after click confirm.' }
        ],
        customizations: [
          'Add high precision draggable behaviors using DraggableScrollableSheet for complex lists inside sheets.'
        ],
        statesSupported: ['default']
      }
    ]
  },
  {
    id: 'data_display',
    name: 'Data & Loading Elements',
    icon: 'Layers',
    widgets: [
      {
        id: 'badge_chip_tag',
        name: 'Badges, Chips & Avatars',
        description: 'Micro layout components mapping quick numeric updates, filter selections, user heads, and dividing elements.',
        fileLocation: 'lib/shared/feedback/data_elements.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Modular visual identifiers, chips to display tags, avatars, and custom dividers.
class AppBadge extends StatelessWidget {
  final int count;
  final Widget? child;

  const AppBadge({
    super.key,
    required this.count,
    this.child,
  });

  @override
  Widget build(BuildContext context) {
    final badgeWidget = Container(
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
      decoration: const BoxDecoration(
        color: AppColors.primary,
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      constraints: const BoxConstraints(minWidth: 16, minHeight: 16),
      child: Text(
        count > 99 ? '99+' : count.toString(),
        style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w700),
        textAlign: TextAlign.center,
      ),
    );

    if (child != null) {
      return Stack(
        clipBehavior: Clip.none,
        children: [
          child!,
          Positioned(
            top: -4,
            right: -4,
            child: badgeWidget,
          )
        ],
      );
    }
    return badgeWidget;
  }
}

class AppChip extends StatelessWidget {
  final String label;
  final bool isSelected;
  final ValueChanged<bool> onSelected;

  const AppChip({
    super.key,
    required this.label,
    this.isSelected = false,
    required this.onSelected,
  });

  @override
  Widget build(BuildContext context) {
    return ChoiceChip(
      label: Text(label),
      selected: isSelected,
      onSelected: onSelected,
      selectedColor: AppColors.primary,
      backgroundColor: AppColors.surface,
      disabledColor: AppColors.surfaceSecondary,
      labelStyle: TextStyle(
        fontSize: 13,
        fontWeight: FontWeight.w600,
        color: isSelected ? Colors.white : AppColors.textPrimary,
      ),
      side: BorderSide(
        color: isSelected ? Colors.transparent : AppColors.border,
        width: 1,
      ),
      shape: RoundedRectangleBorder(borderRadius: AppRadius.borderPill),
      showCheckmark: false,
    );
  }
}

class AppAvatar extends StatelessWidget {
  final String? imageUrl;
  final String fallbackInitials;
  final double radius;

  const AppAvatar({
    super.key,
    this.imageUrl,
    required this.fallbackInitials,
    this.radius = 24.0,
  });

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: radius,
      backgroundColor: AppColors.surfaceSecondary,
      backgroundImage: imageUrl != null ? NetworkImage(imageUrl!) : null,
      child: imageUrl == null
          ? Text(
              fallbackInitials.toUpperCase(),
              style: TextStyle(
                fontWeight: FontWeight.w700,
                fontSize: radius * 0.7,
                color: AppColors.textPrimary,
                letterSpacing: -0.5,
              ),
            )
          : null,
    );
  }
}

class AppDivider extends StatelessWidget {
  final String? text;

  const AppDivider({
    super.key,
    this.text,
  });

  @override
  Widget build(BuildContext context) {
    if (text == null) {
      return const Divider(color: AppColors.border, height: 1);
    }
    return Row(
      children: [
        const Expanded(child: Divider(color: AppColors.border)),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12),
          child: Text(
            text!.toUpperCase(),
            style: const TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.w600,
              color: AppColors.textSecondary,
              letterSpacing: 1.0,
            ),
          ),
        ),
        const Expanded(child: Divider(color: AppColors.border)),
      ],
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/feedback/data_elements.dart';

Widget renderUserRow() {
  return Column(
    children: [
      const AppAvatar(fallbackInitials: 'EL', radius: 30),
      const SizedBox(height: 8),
      AppChip(label: 'Design System Mode', isSelected: true, onSelected: (sel) {}),
      const SizedBox(height: 12),
      const AppDivider(text: 'System Breakdown'),
    ],
  );
}`,
        properties: [
          { name: 'count', type: 'int', defaultValue: 'Required', description: 'Total numbers badge represents.' },
          { name: 'fallbackInitials', type: 'String', defaultValue: 'Required', description: 'Renders letters when avatar image remains offline.' }
        ],
        customizations: [
          'Enable avatar network validation fallback chains displaying native offline icons on HTTP error.'
        ],
        statesSupported: ['default', 'selected']
      },
      {
        id: 'loading_and_empty_states',
        name: 'Loaders, Skeletons & Empty States',
        description: 'Interactive loaders, card and list Skeletons, along with three beautifully composed Empty, Error, and No Data views.',
        fileLocation: 'lib/shared/feedback/skeleton_loaders.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// Modular loaders, skeletons, and elegant error page visualizers.
class Loader extends StatelessWidget {
  final double size;

  const Loader({
    super.key,
    this.size = 28.0,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: size,
        height: size,
        child: const CircularProgressIndicator.adaptive(
          strokeWidth: 2,
          valueColor: AlwaysStoppedAnimation<Color>(AppColors.primary),
        ),
      ),
    );
  }
}

class SkeletonCard extends StatelessWidget {
  const SkeletonCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: AppRadius.borderM,
        border: Border.all(color: AppColors.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 18,
            width: 140,
            decoration: BoxDecoration(
              color: AppColors.surfaceSecondary,
              borderRadius: AppRadius.borderXS,
            ),
          ),
          const SizedBox(height: 12),
          Container(
            height: 14,
            width: double.infinity,
            decoration: BoxDecoration(
              color: AppColors.surfaceSecondary,
              borderRadius: AppRadius.borderXS,
            ),
          ),
          const SizedBox(height: 6),
          Container(
            height: 14,
            width: 180,
            decoration: BoxDecoration(
              color: AppColors.surfaceSecondary,
              borderRadius: AppRadius.borderXS,
            ),
          ),
        ],
      ),
    );
  }
}

class SkeletonList extends StatelessWidget {
  const SkeletonList({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: List.generate(
        3,
        (index) => Column(
          children: [
            Row(
              children: [
                Container(
                  height: 44,
                  width: 44,
                  decoration: const BoxDecoration(
                    color: AppColors.surfaceSecondary,
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        height: 14,
                        width: 120,
                        color: AppColors.surfaceSecondary,
                      ),
                      const SizedBox(height: 6),
                      Container(
                        height: 12,
                        width: double.infinity,
                        color: AppColors.surfaceSecondary,
                      )
                    ],
                  ),
                )
              ],
            ),
            const SizedBox(height: 16),
          ],
        ),
      ),
    );
  }
}

class EmptyStateView extends StatelessWidget {
  final String title;
  final String description;
  final IconData icon;
  final Widget? actionButton;

  const EmptyStateView({
    super.key,
    required this.title,
    required this.description,
    required this.icon,
    this.actionButton,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircleAvatar(
              backgroundColor: AppColors.surfaceSecondary,
              foregroundColor: AppColors.textSecondary,
              radius: 40,
              child: Icon(icon, size: 36),
            ),
            const SizedBox(height: 20),
            Text(
              title,
              style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 18, letterSpacing: -0.3),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              description,
              style: const TextStyle(color: AppColors.textSecondary, fontSize: 14, height: 1.4),
              textAlign: TextAlign.center,
            ),
            if (actionButton != null) ...[
              const SizedBox(height: 24),
              actionButton!,
            ]
          ],
        ),
      ),
    );
  }
}

class ErrorView extends StatelessWidget {
  final String errorDetails;
  final VoidCallback onRetry;

  const ErrorView({
    super.key,
    required this.errorDetails,
    required this.onRetry,
  });

  @override
  Widget build(BuildContext context) {
    return EmptyStateView(
      title: 'Operational Crash',
      description: errorDetails,
      icon: Icons.sync_problem_outlined,
      actionButton: ElevatedButton(
        onPressed: onRetry,
        child: const Text('Retry Routine'),
      ),
    );
  }
}

class NoDataView extends StatelessWidget {
  const NoDataView({super.key});

  @override
  Widget build(BuildContext context) {
    return const EmptyStateView(
      title: 'Void Canvas',
      description: 'Your dataset is currently empty. Initialize a new item to populate details.',
      icon: Icons.inbox_outlined,
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/feedback/skeleton_loaders.dart';

Widget renderFeedback(bool error, bool loading, bool empty) {
  if (loading) return const SkeletonList();
  if (error) return ErrorView(errorDetails: 'Connection Failed', onRetry: () {});
  if (empty) return const NoDataView();
  return const Text('Primary App Content Ready');
}`,
        properties: [
          { name: 'errorDetails', type: 'String', defaultValue: 'Required', description: 'Body text inside error states.' },
          { name: 'size', type: 'double', defaultValue: '28.0', description: 'Central scale constraint.' }
        ],
        customizations: [
          'Add flashing animate shimmer loops across all Skeleton layers utilizing a central animation controller.'
        ],
        statesSupported: ['default', 'loading', 'error']
      }
    ]
  },
  {
    id: 'date_calendar',
    name: 'Calendars & Date Pickers',
    icon: 'Calendar',
    widgets: [
      {
        id: 'date_pack',
        name: 'Date Component Package',
        description: 'Clean wrappers for standard DatePicker configurations and a custom minimalist calendar widget conforming to visual design.',
        fileLocation: 'lib/shared/inputs/date_pack.dart',
        dartCode: `import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_radius_shadows.dart';

/// [@license Apache-2.0]
/// A premium calendar dashboard card mapping select and days.
class DatePickerWrapper extends StatelessWidget {
  final String label;
  final DateTime? selectedDate;
  final ValueChanged<DateTime> onDateSelected;

  const DatePickerWrapper({
    super.key,
    required this.label,
    required this.selectedDate,
    required this.onDateSelected,
  });

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: selectedDate ?? DateTime.now(),
      firstDate: DateTime(2020),
      lastDate: DateTime(2030),
      builder: (context, child) {
        return Theme(
          data: Theme.of(context).copyWith(
            colorScheme: const ColorScheme.light(
              primary: AppColors.primary,
              onPrimary: AppColors.white,
              surface: AppColors.background,
              onSurface: AppColors.textPrimary,
            ),
          ),
          child: child!,
        );
      },
    );
    if (picked != null && picked != selectedDate) {
      onDateSelected(picked);
    }
  }

  @override
  Widget build(BuildContext context) {
    final displayStr = selectedDate == null
        ? 'Select Date'
        : '\${selectedDate!.year}-\${selectedDate!.month.toString().padLeft(2, '0')}-\${selectedDate!.day.toString().padLeft(2, '0')}';

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppColors.textPrimary),
        ),
        const SizedBox(height: 6),
        InkWell(
          onTap: () => _selectDate(context),
          borderRadius: AppRadius.borderM,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
            decoration: BoxDecoration(
              color: AppColors.surface,
              borderRadius: AppRadius.borderM,
              border: Border.all(color: AppColors.border, width: 1),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  displayStr,
                  style: TextStyle(
                    fontSize: 15,
                    color: selectedDate == null ? AppColors.textTertiary : AppColors.textPrimary,
                  ),
                ),
                const Icon(Icons.calendar_month_outlined, color: AppColors.textSecondary, size: 20),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class AppMiniCalendar extends StatelessWidget {
  final DateTime highlightedDate;
  final ValueChanged<DateTime> onDateSelected;

  const AppMiniCalendar({
    super.key,
    required this.highlightedDate,
    required this.onDateSelected,
  });

  @override
  Widget build(BuildContext context) {
    final daysInWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    final now = highlightedDate;
    final startOfWeek = now.subtract(Duration(days: now.weekday - 1));

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: AppRadius.borderM,
        border: Border.all(color: AppColors.border),
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Weekly Snapshot',
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: AppColors.textPrimary),
              ),
              const Icon(Icons.bolt, color: AppColors.accent, size: 16),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: daysInWeek.map((day) => Text(day, style: TextStyle(color: AppColors.textSecondary, fontSize: 12, fontWeight: FontWeight.bold))).toList(),
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: List.generate(7, (index) {
              final date = startOfWeek.add(Duration(days: index));
              final isToday = date.day == now.day && date.month == now.month && date.year == now.year;

              return InkWell(
                onTap: () => onDateSelected(date),
                borderRadius: BorderRadius.circular(20),
                child: Container(
                  height: 32,
                  width: 32,
                  decoration: BoxDecoration(
                    color: isToday ? AppColors.primary : Colors.transparent,
                    shape: BoxShape.circle,
                  ),
                  child: Center(
                    child: Text(
                      date.day.toString(),
                      style: TextStyle(
                        color: isToday ? Colors.white : AppColors.textPrimary,
                        fontWeight: isToday ? FontWeight.bold : FontWeight.normal,
                        fontSize: 13,
                      ),
                    ),
                  ),
                ),
              );
            }),
          )
        ],
      ),
    );
  }
}`,
        usageExample: `import 'package:flutter/material.dart';
import 'package:uikit/shared/inputs/date_pack.dart';

Widget renderDatePicker() {
  return DatePickerWrapper(
    label: 'Required Implementation Milestone',
    selectedDate: DateTime(2026, 05, 29),
    onDateSelected: (date) {},
  );
}`,
        properties: [
          { name: 'highlightedDate', type: 'DateTime', defaultValue: 'Required', description: 'Central focus day representing current viewport.' },
          { name: 'label', type: 'String', defaultValue: 'Required', description: 'Visual label layout above selecting box.' }
        ],
        customizations: [
          'Adapt to custom multi-range select arrays for booking dates.'
        ],
        statesSupported: ['default', 'selected']
      }
    ]
  }
];
