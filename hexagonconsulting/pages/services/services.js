Page({
  data: {
    selectedService: '',
    services: {
      strategy: {
        title: 'Strategic Planning',
        details: 'Our strategic planning service helps organizations develop and execute effective business strategies.',
        features: [
          'Market Analysis & Research',
          'Competitive Positioning',
          'Growth Strategy Development'
        ]
      },
      management: {
        title: 'Management Consulting',
        details: 'We help optimize your organizational structure and processes for maximum efficiency.',
        features: [
          'Process Optimization',
          'Change Management',
          'Performance Improvement'
        ]
      },
      innovation: {
        title: 'Innovation Strategy',
        details: 'Drive digital transformation and innovation in your organization.',
        features: [
          'Digital Transformation',
          'Technology Integration',
          'Innovation Management'
        ]
      }
    }
  },

  onLoad(options) {
    if (options.type) {
      this.setData({
        selectedService: options.type
      });
      // Scroll to selected service
      zalo.createSelectorQuery()
        .select(`#${options.type}`)
        .boundingClientRect((rect) => {
          zalo.pageScrollTo({
            scrollTop: rect.top,
            duration: 300
          });
        })
        .exec();
    }
  },

  onLearnMore(event) {
    const serviceType = event.currentTarget.dataset.service;
    const service = this.data.services[serviceType];
    
    zalo.showModal({
      title: service.title,
      content: `${service.details}\n\nKey Features:\n• ${service.features.join('\n• ')}`,
      showCancel: true,
      cancelText: 'Close',
      confirmText: 'Contact Us',
      success: (res) => {
        if (res.confirm) {
          this.navigateToContact();
        }
      }
    });
  },

  navigateToContact() {
    zalo.navigateTo({
      url: '../contact/contact'
    });
  },

  onShareAppMessage() {
    return {
      title: 'Professional Consulting Services - Hexagon Consulting',
      desc: 'Discover our comprehensive range of business consulting services.',
      imageUrl: '../../assets/images/services-share.png'
    };
  }
});
