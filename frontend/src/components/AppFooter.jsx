export default function AppFooter() {
    return (
        <footer className="bg-dark text-light text-center py-4" style={{ fontSize: '0.8rem' }}>
            <div className="container">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Francesco Piscaglia. All rights reserved.
                </p>
                <div>
                    <a href="/privacy" className="text-light mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-light mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}