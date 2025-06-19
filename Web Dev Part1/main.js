 {
    // Elements
    const contentEl = document.getElementById('content');       //main content
    const menuBtn = document.getElementById('menu-button');     //button to open or close the sidebar
    const sidebar = document.getElementById('sidebar');         //sidebar element
    const sidebarCloseBtn = document.getElementById('sidebar-close-button');    //button to close sidebar
    const notification = document.getElementById('notification');       //notification elements for alerts
    const notificationMessage = document.getElementById('notification-message');    //message area within the notification
    const notificationIcon = document.getElementById('notification-icon');      //icon area within the notification
    let notificationTimeout = null;     //timeout for notifications
    // Accessibility helper: trap focus inside sidebar when open
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];    //last focusable element
       
        //keyboard events for focus trapping
        function handleKey(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // shift + tab
                    if (document.activeElement === firstFocusable) {    //if the first element is focused
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else { // for tab or if tab is pressed
                    if (document.activeElement === lastFocusable) {   //if the last element is focused
                        e.preventDefault();             //prevent default tab behavior
                        firstFocusable.focus();       //focus the first element
                    }
                }
            } else if (e.key === 'Escape') {          //if escape key is pressed
            }
        } if (e.key === 'Escape') {
            closeSidebar();                     //closing the sidebar
            menuBtn.focus();                //return focus to the menu button
        }
    }
    element.addEventListener('keydown', handleKey);
    return () => element.removeEventListener('keydown', handleKey);     //cleanup function to remove the listner
}
    // Sidebar open/close handlers
    function openSidebar() {
      sidebar.classList.add('open');                      //add open class to sidebar
      menuBtn.setAttribute('aria-expanded', 'true');      //update attribute for accessibility 
      sidebarCloseBtn.focus();                          //focus the close button
      focusTrapCleanup = trapFocus(sidebar);            //activate focus trapping
    }
    function closeSidebar() {
      sidebar.classList.remove('open');               //remove open class from sidebar
      menuBtn.setAttribute('aria-expanded', 'false');    //update attribute for accessibility 
      if (focusTrapCleanup) focusTrapCleanup();             //celanup focus trapping if it exists
    }
    menuBtn.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    //event listner for sidebar close button click
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
      if (e.key === 'Enter' || e.key === ' ') {     // if enter or space is pressed
        e.preventDefault();             //prevents default action
        menuBtn.click();                //trigger click event
      }
    });

    // Notification helper
    function showNotification(message, {type='success', duration=4000} = {}) {
        clearTimeout(notificationTimeout);        //cleaar any existing timeout
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
      const re = /^[+]?[\d\s()-]{7,}$/;         //regular expressions for phone validation
      return re.test(phone);
    }
    // Form templates for Enquire and Contact page
    function getEnquireFormHtml() {
    //function to return the HTML for the enquiry form
    }
      return;

      <footer id="footer-placeholder"></footer>
      
          fetch('footer.html')
          .then(response => response.text())
          .then(data =>{
              document.getElementById('footer-placeholder').innerHTML=data;
          });
      //END OF SCRIPT
      