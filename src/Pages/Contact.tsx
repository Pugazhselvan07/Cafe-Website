
function Contact() {
  return (
    <div className=" my-5 ms-5 text-center pt-5">
      <h1 className="mb-4">Let’s Brew a Conversation </h1>
      <p className="mb-5 fs-3">
        Got a question about our coffee, catering services, or daily specials?  
        We’d love to hear from you!  
        Our baristas are just a call or click away — and they make a mean latte while they’re at it.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 fs-5">
          <h5>📍 Visit Us</h5>
          <p>123 Coffee Street ,Chennai,India</p>
        </div>
        <div className="col-md-4 mb-4 fs-5">
          <h5>📞 Talk to Us</h5>
          <p>+91 9239875468</p>
        </div>
        <div className="col-md-4 mb-4 fs-5">
          <h5>📧 Write to Us</h5>
          <p>hello@PugazhCafe.com</p>
        </div>
      </div>

      <div className="mt-4 fs-5">
        <h5>🕒 We’re Open</h5>
        <p>Mon – Fri: 7:30 AM – 9:30 PM</p>
        <p>Saturday: 8:00 AM – 10:00 PM</p>
        <p>Sunday: 8:00 AM – 8:00 PM</p>
      </div>
    </div>
  );
}

export default Contact;
