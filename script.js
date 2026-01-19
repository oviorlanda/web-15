// Loading Page Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Typing Animation for Hero Text
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = typingElement.getAttribute('data-text');
        typingElement.textContent = text;
    }
});

// Page Navigation System - NO SCROLL with Loading Effect
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-section');
const breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');

// Function to show specific page
function showPage(pageId) {
    // Show mini loader during page transition
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.display = 'flex';
        loader.classList.remove('hidden');
    }
    
    setTimeout(() => {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Remove active from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            
            // Scroll to top when changing page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Add active to clicked nav link
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Hide loader after transition
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 300);
        }
    }, 300);
}

// Navigation click events
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
        
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Breadcrumb "Home" click events
breadcrumbLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Team Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const teamCards = document.querySelectorAll('.team-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        teamCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Set initial transition for team cards
teamCards.forEach(card => {
    card.style.transition = 'all 0.3s ease';
});

// Module Options Button
document.querySelectorAll('.btn-options').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.module-card');
        const moduleName = card.querySelector('h4').textContent;
        alert(`📚 Module Information:\n\n${moduleName}\n\nMore details about this module will be available soon. Stay tuned!`);
    });
});

// View All Modules Button
const viewAllBtn = document.querySelector('.btn-view-all');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        alert('📋 All modules will be displayed in a detailed view. This feature is coming soon!');
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Show success message
        alert(`✅ Message Sent Successfully!\n\nThank you ${name}!\nWe have received your message and will get back to you soon.\n\nBest regards,\nOPTICOM LABORATORY Team`);
        
        // Reset form
        contactForm.reset();
    });
}

// Team Card Click Event - Direct to Instagram
teamCards.forEach(card => {
    card.addEventListener('click', () => {
        const instagramUrl = card.getAttribute('data-instagram');

        if (instagramUrl) {
            window.open(instagramUrl, '_blank'); // buka Instagram
        }
    });
});

// Handle recruitment status
const recruitmentBox = document.querySelector('.recruitment-box');
if (recruitmentBox) {
    recruitmentBox.addEventListener('click', () => {
        alert('⚠️ Open Recruitment\n\nStatus: EXPIRED\n\nThe recruitment period has ended. Please stay tuned for the next recruitment announcement!');
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 255, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 255, 0.1)';
    }
});

// Prevent hash links from changing URL
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Console Welcome Message
console.log('%c🔬 OPTICOM LABORATORY', 'color: #0000FF; font-size: 24px; font-weight: bold;');
console.log('%cExcellent Laboratory - Fiber Optics Transmission', 'color: #4169E1; font-size: 14px;');
console.log('%cWebsite loaded successfully! - Enhanced with animations', 'color: #00AA00; font-size: 12px;');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ OPTICOM LABORATORY website initialized!');
    console.log('📄 Page navigation system: ACTIVE');
    console.log('🚫 Scroll between sections: DISABLED');
    console.log('✨ Animations: ENABLED');
    
    // Show About Us page by default
    // Don't call showPage here to avoid showing loader on first load
});

// 3D Tilt Effect for Cards
document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});