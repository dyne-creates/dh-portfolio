import GithubIcon from "../assets/icons/github.png";
import FacebookIcon from "../assets/icons/facebook.png";
import GmailIcon from "../assets/icons/email.png";
import LinkedInIcon from "../assets/icons/linkedin.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-secondary py-4 border-top border-secondary">
            <div className="container text-center">

                <div className="d-flex justify-content-center gap-4 mb-3">
                    <a
                        href="https://github.com/dyne-creates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <img src={GithubIcon} alt="GitHub" width="24" className="footer-icon" />
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <img src={FacebookIcon} alt="Facebook" width="24" className="footer-icon" />
                    </a>

                    <a href="mailto:dhbdec22@gmail.com" className="social-link">
                        <img src={GmailIcon} alt="Email" width="24" className="footer-icon" />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <img src={LinkedInIcon} alt="LinkedIn" width="24" className="footer-icon" />
                    </a>
                </div>

                <p className="small mb-0 opacity-75">
                    &copy; {currentYear} <span className="text-white fw-bold">Dwayne Hinnong</span>.
                    All Rights Reserved.
                </p>
            </div>

            <style>{`
        .footer-icon {
          filter: grayscale(100%) brightness(200%);
          transition: all 0.3s ease;
        }
        .social-link:hover .footer-icon {
          filter: grayscale(0%) brightness(100%);
          transform: translateY(-3px);
        }
        .social-link {
          display: inline-block;
          text-decoration: none;
        }
      `}</style>
        </footer>
    );
}