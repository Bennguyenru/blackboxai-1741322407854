Page({
  data: {
    submitting: false,
    services: [
      'Select a service',
      'Strategic Planning',
      'Management Consulting',
      'Innovation Strategy'
    ],
    serviceIndex: 0,
    formData: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },

  onLoad(options) {
    // If service was pre-selected from another page
    if (options.service) {
      const serviceMap = {
        'strategy': 1,
        'management': 2,
        'innovation': 3
      };
      this.setData({
        serviceIndex: serviceMap[options.service] || 0
      });
    }
  },

  // Input handlers
  handleNameInput(e) {
    this.setData({
      'formData.name': e.detail.value
    });
  },

  handleEmailInput(e) {
    this.setData({
      'formData.email': e.detail.value
    });
  },

  handlePhoneInput(e) {
    this.setData({
      'formData.phone': e.detail.value
    });
  },

  handleMessageInput(e) {
    this.setData({
      'formData.message': e.detail.value
    });
  },

  handleServiceChange(e) {
    this.setData({
      serviceIndex: e.detail.value
    });
  },

  // Form validation
  validateForm() {
    const { name, email, phone, message } = this.data.formData;
    const serviceIndex = this.data.serviceIndex;

    if (!name.trim()) {
      zalo.showToast({
        title: 'Please enter your name',
        icon: 'none'
      });
      return false;
    }

    if (!email.trim() || !email.includes('@')) {
      zalo.showToast({
        title: 'Please enter a valid email',
        icon: 'none'
      });
      return false;
    }

    if (!phone.trim()) {
      zalo.showToast({
        title: 'Please enter your phone number',
        icon: 'none'
      });
      return false;
    }

    if (serviceIndex === 0) {
      zalo.showToast({
        title: 'Please select a service',
        icon: 'none'
      });
      return false;
    }

    if (!message.trim()) {
      zalo.showToast({
        title: 'Please enter your message',
        icon: 'none'
      });
      return false;
    }

    return true;
  },

  // Form submission
  handleSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.setData({ submitting: true });

    // Simulate API call
    setTimeout(() => {
      this.setData({ submitting: false });
      
      zalo.showModal({
        title: 'Thank You!',
        content: 'We have received your message and will contact you soon.',
        showCancel: false,
        confirmText: 'OK',
        success: () => {
          zalo.navigateBack();
        }
      });
    }, 1500);
  },

  // Contact action handlers
  handleEmailTap() {
    zalo.setClipboardData({
      data: 'contact@hexagonconsulting.com',
      success: () => {
        zalo.showToast({
          title: 'Email copied to clipboard',
          icon: 'success'
        });
      }
    });
  },

  handlePhoneTap() {
    zalo.makePhoneCall({
      phoneNumber: '+15551234567'
    });
  },

  onShareAppMessage() {
    return {
      title: 'Contact Hexagon Consulting',
      desc: 'Get in touch with our expert business consultants.',
      imageUrl: '../../assets/images/contact-share.png'
    };
  }
});
