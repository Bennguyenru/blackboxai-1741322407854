# Hexagon Consulting - Zalo Mini App

A professional business consulting Mini App built for the Zalo platform. This Mini App provides information about consulting services, team members, and allows potential clients to get in touch.

## Features

- Modern, native-feeling UI designed for Zalo
- Responsive layouts optimized for mobile devices
- Interactive service exploration
- Contact form with validation
- Team member profiles
- Social sharing integration
- Smooth transitions and animations

## Project Structure

```
hexagonconsulting/
├── app.js                 # App entry point and global configuration
├── manifest.json         # Mini App manifest and configuration
├── assets/              # Static assets
│   ├── icons/          # App icons and UI elements
│   └── images/         # Images and illustrations
├── pages/              # Mini App pages
│   ├── index/         # Home page
│   │   ├── index.zml
│   │   ├── index.js
│   │   └── index.zcss
│   ├── services/      # Services page
│   │   ├── services.zml
│   │   ├── services.js
│   │   └── services.zcss
│   └── contact/       # Contact page
│       ├── contact.zml
│       ├── contact.js
│       └── contact.zcss
└── README.md           # Documentation
```

## Pages

1. **Home (index)**
   - Hero section with call-to-action
   - Service preview cards
   - Quick contact section

2. **Services**
   - Detailed service descriptions
   - Feature lists
   - Interactive service cards
   - Contact CTA

3. **Contact**
   - Contact form with validation
   - Service selection
   - Contact information
   - Office location

## Development

### Prerequisites

- Zalo Mini App Development Tools
- Node.js and npm
- Zalo App ID (for deployment)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Bennguyenru/hexagonconsulting.git
```

2. Install dependencies:
```bash
cd hexagonconsulting
npm install
```

3. Configure your Zalo App ID in `manifest.json`

4. Start development server:
```bash
npm run dev
```

### Testing

1. Open the Zalo Mini App Studio
2. Import the project
3. Use the preview feature to test the Mini App

## Deployment

1. Build the project:
```bash
npm run build
```

2. Submit for review in the Zalo Mini App Console

## Features to Add

- [ ] User authentication
- [ ] Appointment scheduling
- [ ] Push notifications
- [ ] Chat integration
- [ ] Payment integration

## Technical Details

- Built using Zalo Mini App Framework
- Uses native Zalo UI components
- Implements Zalo's design guidelines
- Optimized for performance

## Best Practices

- Follows Zalo Mini App development guidelines
- Implements proper error handling
- Uses efficient state management
- Optimized assets for fast loading
- Implements proper validation and security measures

## License

This project is licensed under the MIT License.

## Support

For support or inquiries, please contact:
- Email: contact@hexagonconsulting.com
- Phone: +1 (555) 123-4567
