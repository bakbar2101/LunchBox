class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    background-color: #1e40af;
                    color: white;
                    padding: 1rem 2rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    font-size: 1.25rem;
                    color: white;
                    text-decoration: none;
                }
                
                .logo-icon {
                    margin-right: 0.5rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .nav-link {
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 500;
                    padding: 0.5rem 0;
                    position: relative;
                }
                
                .nav-link:hover {
                    opacity: 0.9;
                }
                
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: white;
                }
                
                @media (max-width: 768px) {
                    .navbar {
                        padding: 1rem;
                    }
                    
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="dashboard.html" class="logo">
                        <i data-feather="package" class="logo-icon"></i>
                        LunchBox 
                    </a>
                    
                    <div class="nav-links">
                        <a href="menu.html" class="nav-link">
                            <i data-feather="book-open"></i> Меню
                        </a>
                        <a href="order.html" class="nav-link">
                            <i data-feather="shopping-cart"></i> Заказы
                        </a>
                        <a href="profile.html" class="nav-link">
                            <i data-feather="user"></i> Профиль
                        </a>
                        <a href="#" class="nav-link" id="logoutBtn">
                            <i data-feather="log-out"></i> Выйти
                        </a>
                    </div>
                </div>
            </nav>
        `;
        
        // Add logout functionality
        const logoutBtn = this.shadowRoot.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Simulate logout
                window.location.href = 'index.html';
            });
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);