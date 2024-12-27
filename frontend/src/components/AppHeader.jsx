import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to="/" class="nav-link" aria-current="page" style={{ textDecoration: 'none', color: 'black' }}>
                                    <i className="bi bi-house-door-fill me-1"></i>
                                    <span style={{ fontSize: '15px' }}>Home</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}