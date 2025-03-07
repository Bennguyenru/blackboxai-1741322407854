Page({
  data: {
    loading: false
  },

  onLoad() {
    // Page initialization logic
  },

  onShow() {
    // Called when page is shown
  },

  // Navigation handlers
  onGetStarted() {
    zalo.navigateTo({
      url: '../contact/contact'
    });
  },

  onExploreServices() {
    zalo.navigateTo({
      url: '../services/services'
    });
  },

  navigateToService(event) {
    const service = event.currentTarget.dataset.service;
    zalo.navigateTo({
      url: `../services/services?type=${service}`
    });
  },

  navigateToContact() {
    zalo.navigateTo({
      url: '../contact/contact'
    });
  },

  // Share functionality
  onShareAppMessage() {
    return {
      title: 'Hexagon Consulting - Transform Your Business',
      desc: 'Professional business consulting services to help your organization succeed.',
      imageUrl: '../../assets/images/share-preview.png'
    };
  }
});
