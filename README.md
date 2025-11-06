# Aang AI - Your Smart Learning Companion

Welcome to Aang AI, a magical AI friend designed to introduce children to the exciting world of artificial intelligence!

## 🌟 New Features

### ✨ Multi-Language Support (Arabic/English)
- Toggle between Arabic and English on any page
- Complete translation for all interface elements
- RTL (Right-to-Left) support for Arabic
- Language preference saved across sessions

### 🎨 Avatar System
- **6 Pre-made Avatars**: Choose from colorful, kid-friendly avatars
- **Upload Your Own Photo**: Users can upload their own photos as avatars
- **Drag & Drop Support**: Easy photo upload with drag-and-drop
- **Real Avatar Images**: Using professional avatar API (DiceBear)

### 🔄 Improved Navigation Flow
1. **Login Page** → Choose Parent/Child account + Login
2. **Welcome Page** → Introduction to Aang AI
3. **Avatar Selection** → Choose or upload your avatar
4. **Chat Page** → Start learning about AI!

### 💅 Professional UI Improvements
- Modern gradient backgrounds
- Smooth animations and transitions
- Responsive design for mobile and desktop
- Enhanced color scheme with pink/orange gradients
- Better typography and spacing
- Glowing effects and hover states

## 📁 File Structure

```
Aang/
├── login.html              # Login page with user type selection
├── welcome.html            # Welcome/introduction page
├── avatar-selection.html   # Avatar selection & upload page
├── avatar-selection-new.html # New avatar selection (backup)
├── chat.html              # Chat interface with AI
├── translations.js        # Translation system (optional)
└── README.md             # This file
```

## 🚀 How to Use

1. **Open `login.html`** in your web browser
2. **Select language** using the EN/AR toggle in top-right corner
3. **Choose account type** (Parent or Child)
4. **Enter any email and password** to login (no validation yet)
5. **Welcome page** will show introduction to Aang
6. **Click "Upload Avatar"** or continue to avatar selection
7. **Choose an avatar** or upload your photo
8. **Start chatting** with Aang about AI topics!

## 🎯 Features by Page

### Login Page
- Language switcher (EN/AR)
- User type selection (Parent/Child)
- Email and password fields
- Full translation support

### Welcome Page
- Introduction to Aang AI
- Feature icons showcase
- Main avatar display
- Upload Avatar button
- Continue to avatar selection

### Avatar Selection Page
- Upload your photo section (drag & drop)
- 6 pre-made avatars to choose from
- Live preview of selected avatar
- Language switcher
- Smooth animations

### Chat Page
- AI conversation interface
- Suggested questions
- Voice input button (UI only)
- Real-time typing indicators
- Message history
- Language switcher

## 🔧 Technical Details

### Avatar Images
Using DiceBear API for avatars:
- `https://api.dicebear.com/7.x/avataaars/svg?seed={name}&backgroundColor={color}`

### Language System
- Stored in `localStorage` as `appLanguage`
- Translations embedded in each page
- Dynamic content updates on language switch
- RTL/LTR direction switching

### Data Storage
- `sessionStorage` for login state
- `sessionStorage` for avatar selection
- `localStorage` for language preference

## 🎨 Color Scheme
- Primary: `#ec4899` (Pink)
- Secondary: `#f97316` (Orange)
- Background: Dark blue gradient
- Text: White and light gray
- Accents: Purple, cyan

## 📱 Responsive Design
- Desktop: Full layout
- Tablet: Adjusted grid and spacing
- Mobile: Stacked layout, smaller elements

## 🌐 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6 support

## 🔜 Future Enhancements
- Real authentication system
- Backend for AI responses
- Voice recognition
- More avatar options
- Additional languages (French, Spanish, German)
- Parent dashboard
- Progress tracking

## 📝 Notes
- Login accepts any credentials (demo mode)
- AI responses are pre-defined (not connected to real AI)
- Voice input is UI-only (not functional yet)
- All data stored locally (no server)

---

Made with ❤️ for young AI learners!
