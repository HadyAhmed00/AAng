// Multi-language translations system
const translations = {
    ar: {
        // Login Page
        loginTitle: 'Aang - تسجيل الدخول',
        logoSubtitle: 'رفيقك الذكي لتعلم الذكاء الاصطناعي',
        welcomeText: 'مرحباً بك! 👋',
        welcomeSubtext: 'اختر نوع الحساب للمتابعة',
        parentLabel: 'ولي أمر',
        childLabel: 'طفل',
        emailLabel: 'البريد الإلكتروني أو اسم المستخدم',
        emailPlaceholder: 'أدخل البريد الإلكتروني أو اسم المستخدم',
        passwordLabel: 'كلمة المرور',
        passwordPlaceholder: 'أدخل كلمة المرور',
        loginButton: 'دخول ✨',
        registerText: 'ليس لديك حساب؟',
        registerLink: 'سجل الآن',
        errorSelectType: 'يرجى اختيار نوع الحساب (ولي أمر أو طفل)',

        // Welcome Page
        welcomePageTitle: 'Aang - مرحباً',
        uploadAvatarButton: '📤 رفع أفاتار',
        welcomeTitle: '✨ مرحباً بك في <span class="highlight">Aang</span> ✨',
        welcomeDescription: 'Aang هو صديق ذكاء اصطناعي سحري مصمم لتقديم الأطفال إلى عالم الذكاء الاصطناعي المثير — من خلال القصص والألعاب والمحادثات الممتعة! مع شخصيتها الودودة ودروسها السهلة الفهم، تحول Aang أفكار التكنولوجيا المعقدة إلى مغامرات ممتعة، مساعدة الأطفال من سن 6-12 على تعلم كيفية عمل الذكاء الاصطناعي، ولماذا هو مهم، وكيف يمكنهم تشكيل المستقبل به. لا حاجة للبرمجة — فقط الفضول والخيال!',
        meetCompanionTitle: 'تعرف على رفيقك الذكي',
        continueButton: '▶ متابعة مع Aang',

        // Avatar Selection Page
        avatarSelectionTitle: 'Aang - اختر أفاتارك',
        backButton: '◀',
        uploadYourPhoto: '📤 رفع صورتك',
        chooseAnotherAvatar: 'أو اختر أفاتار آخر',
        languageLabel: 'اللغة:',
        continueWith: '▶ متابعة مع',

        // Chat Page
        chatTitle: 'Aang - محادثة',
        messageInputPlaceholder: 'اسألني أي شيء عن الذكاء الاصطناعي...',
        suggestionAI: 'ما هو الذكاء الاصطناعي؟ 🤖',
        suggestionLearn: 'كيف تتعلم الحواسيب؟ 💡',
        suggestionNeural: 'الشبكات العصبية 🧠',
        suggestionML: 'التعلم الآلي 📊',
        welcomeMessage: 'مرحباً! أنا {name}، رفيقك في الذكاء الاصطناعي! اسألني أي شيء عن الذكاء الاصطناعي وسأساعدك على التعلم بطريقة ممتعة! 🌟'
    },
    en: {
        // Login Page
        loginTitle: 'Aang - Login',
        logoSubtitle: 'Your Smart AI Learning Companion',
        welcomeText: 'Welcome! 👋',
        welcomeSubtext: 'Choose account type to continue',
        parentLabel: 'Parent',
        childLabel: 'Child',
        emailLabel: 'Email or Username',
        emailPlaceholder: 'Enter your email or username',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Enter your password',
        loginButton: 'Login ✨',
        registerText: "Don't have an account?",
        registerLink: 'Sign Up Now',
        errorSelectType: 'Please select an account type (Parent or Child)',

        // Welcome Page
        welcomePageTitle: 'Aang - Welcome',
        uploadAvatarButton: '📤 Upload Avatar',
        welcomeTitle: '✨ Welcome to <span class="highlight">Aang</span> ✨',
        welcomeDescription: 'Aang is a magical AI friend designed to introduce children to the exciting world of artificial intelligence — through stories, games, and playful conversations! With her friendly avatar and easy-to-understand lessons, Aang turns complex tech ideas into fun adventures, helping kids aged 6-12 learn how AI works, why it matters, and how they can shape the future with it. No coding required — just curiosity and imagination!',
        meetCompanionTitle: 'Meet Your AI Companion',
        continueButton: '▶ Continue With Aang',

        // Avatar Selection Page
        avatarSelectionTitle: 'Aang - Choose Your Avatar',
        backButton: '◀',
        uploadYourPhoto: '📤 Upload Your Photo',
        chooseAnotherAvatar: 'Or Choose Another Avatar',
        languageLabel: 'Language:',
        continueWith: '▶ Continue With',

        // Chat Page
        chatTitle: 'Aang - Chat',
        messageInputPlaceholder: 'Ask me anything about AI...',
        suggestionAI: 'What is AI? 🤖',
        suggestionLearn: 'How do computers learn? 💡',
        suggestionNeural: 'Neural Networks 🧠',
        suggestionML: 'Machine Learning 📊',
        welcomeMessage: "Hello! I'm {name}, your AI companion! Ask me anything about artificial intelligence and I'll help you learn in a fun way! 🌟"
    }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
    return localStorage.getItem('appLanguage') || 'en';
}

// Set language and save to localStorage
function setLanguage(lang) {
    localStorage.setItem('appLanguage', lang);
    updatePageLanguage();
}

// Get translation for a key
function t(key) {
    const lang = getCurrentLanguage();
    return translations[lang][key] || translations['en'][key] || key;
}

// Update page text direction and language attribute
function updatePageLanguage() {
    const lang = getCurrentLanguage();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
});
