<footer class="footer">
  <div class="footer-item">
    <p>Contact Us</p>
    <p>info@example.com</p>
    <p>555-555-5555</p>
  </div>

  <div class="footer-item">
    <p>Follow Us</p>
    <p>
      <a href="#">Facebook</a>
    </p>
    <p>
      <a href="#">Twitter</a>
    </p>
  </div>

  <div class="footer-item">
    <p>About Us</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</footer>

<style>
  .footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px;
    background-color: #333;
    color: #fff;
  }

  .footer-item {
    text-align: center;
  }

  @media (max-width: 600px) {
    .footer {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
