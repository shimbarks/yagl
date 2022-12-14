import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../icons/linkedin.svg';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer lang="en" dir="ltr" className="footer">
      Made with 💛 by Shimbarks
      <div className="footer__links">
        <a
          className="footer__link"
          href="https://github.com/shimbarks/yagl"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon title="GitHub" />
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/shimi-berkley"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon title="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};
