 {
    // Elements
    const contentEl = document.getElementById('content');
    const menuBtn = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const sidebarCloseBtn = document.getElementById('sidebar-close-button');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const notificationIcon = document.getElementById('notification-icon');
    let notificationTimeout = null;
    // Accessibility helper: trap focus inside sidebar when open
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        function handleKey(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // shift + tab
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else { // tab
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            } else if (e.key === 'Escape') {
            }
        } if (e.key === 'Escape') {
            closeSidebar();
            menuBtn.focus();
        }
    }
    element.addEventListener('keydown', handleKey);
    return () => element.removeEventListener('keydown', handleKey);
}
    // Sidebar open/close handlers
    function openSidebar() {
      sidebar.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
      sidebarCloseBtn.focus();
      focusTrapCleanup = trapFocus(sidebar);
    }
    function closeSidebar() {
      sidebar.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (focusTrapCleanup) focusTrapCleanup();
    }
    menuBtn.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
    sidebarCloseBtn.addEventListener('click', closeSidebar);
    // Close sidebar on outside click (mobile)
    document.addEventListener('click', e => {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
    sidebarCloseBtn.addEventListener('click', closeSidebar);
    // Close sidebar on outside click (mobile)
    document.addEventListener('click', e => {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });
    // Keyboard access for menu button
    menuBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuBtn.click();
      }
    });
    // Notification helper
    function showNotification(message, {type='success', duration=4000} = {}) {
        clearTimeout(notificationTimeout);
        notificationMessage.textContent = message;
        notification.classList.remove('success', 'error');
        notification.classList.add(type);
        notificationIcon.textContent = type === 'success' ? 'check_circle' : 'error';
        notification.classList.add('show');
        notificationTimeout = setTimeout(() => {
          notification.classList.remove('show');
        }, duration);
      }
    
  // Validate email format with simple regex
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      return re.test(email);
    }
    // Validate phone (basic international formats, optional)
    function validatePhone(phone) {
      if (!phone) return true; // optional
      const re = /^[+]?[\d\s()-]{7,}$/;
      return re.test(phone);
    }
    // Form templates for Enquire and Contact page
    function getEnquireFormHtml() {
    
    }
      return;