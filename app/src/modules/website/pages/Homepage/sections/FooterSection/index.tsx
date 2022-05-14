import Link from '@/modules/website/components/navigation/Link'
import './index.css'

const FooterSection = () => {
  const direction = {
    title: '3323 NE 163rd st, Miami, FL 33160',
    link: 'https://www.google.com/maps/place/3323+NE+163rd+St,+North+Miami+Beach,+FL+33160,+USA/@25.924236,-80.1425078,15.5z/data=!4m5!3m4!1s0x88d9ad0f56a54de5:0x823091e5b583d373!8m2!3d25.9284417!4d-80.1367959'
  }
  const email = 'info@whitepeaktech.com'
  return (
    <div className="footer-container">
      <section className="contact-section">
        <div>
          <h2 className="contact-title">Get in touch</h2>
          <div className="contact-content">
            <Link anchor href={`mailto:${email}`}>
              {email}
            </Link>
            <Link _blank href={direction.link}>
              {direction.title}
            </Link>
          </div>
        </div>
        <div>
          {/* <p className="contact-details">
            WhitePeak is now part of the{' '}
            <Link _blank href="https://elionpartners.com/">
              Elion Partners Team
            </Link>
            . Read press release.
          </p> */}
        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">
          © White Peak Tech ™ | 2022 All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default FooterSection
