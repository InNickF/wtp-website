import Link from '@/modules/website/components/navigation/Link'
import './index.css'

const FooterSection = () => {
  const number = '+01 000 0000'
  const email = 'example@email.com'
  return (
    <div className="footer-container">
      <section className="contact-section">
        <div>
          <h2 id="contact" className="contact-title">
            Get in touch
          </h2>
          <div className="contact-content">
            <Link anchor href={`tel:${number}`}>
              {number}
            </Link>
            <Link anchor href={`mailto:${email}`}>
              {email}
            </Link>
          </div>
        </div>
        <div>
          <p className="contact-details">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            esse enim reprehenderit quia deserunt ipsum nam tempora quisquam
            ipsa animi nostrum, laboriosam consequuntur veniam praesentium ut
            necessitatibus dolores aspernatur provident.
          </p>
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
