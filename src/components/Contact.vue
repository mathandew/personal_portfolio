<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Get In Touch</h2>
      <div class="contact-content">
        <div class="contact-info" data-aos="fade-right">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <div class="info-items">
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <p>john.doe@example.com</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <div>
                <strong>Phone</strong>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <strong>Location</strong>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>
          <div class="social-links">
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <form
          class="contact-form"
          data-aos="fade-left"
          @submit.prevent="submitForm"
        >
          <div class="form-group">
            <input
              type="text"
              v-model="formData.name"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              v-model="formData.email"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="formData.subject"
              placeholder="Subject"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              v-model="formData.message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </button>
          <div v-if="submitSuccess" class="success-message">
            Message sent successfully!
          </div>
          <div v-if="submitError" class="error-message">
            Failed to send message. Please try again.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: false,
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.formData = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
        setTimeout(() => {
          this.submitSuccess = false;
        }, 3000);
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  background: #f8f9fa;

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .contact-info {
    h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #333;
    }

    p {
      color: #666;
      margin-bottom: 30px;
      line-height: 1.6;
    }

    .info-items {
      margin-bottom: 30px;

      .info-item {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;

        i {
          font-size: 1.5rem;
          color: #4caf50;
          width: 40px;
        }

        strong {
          display: block;
          color: #333;
          margin-bottom: 5px;
        }

        p {
          margin: 0;
          color: #666;
        }
      }
    }

    .social-links {
      display: flex;
      gap: 20px;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: white;
        border-radius: 50%;
        color: #4caf50;
        font-size: 1.2rem;
        transition: all 0.3s ease;

        &:hover {
          background: #4caf50;
          color: white;
          transform: translateY(-3px);
        }
      }
    }
  }

  .contact-form {
    .form-group {
      margin-bottom: 20px;

      input,
      textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: #4caf50;
        }
      }
    }

    .success-message {
      margin-top: 15px;
      padding: 10px;
      background: #d4edda;
      color: #155724;
      border-radius: 5px;
      text-align: center;
    }

    .error-message {
      margin-top: 15px;
      padding: 10px;
      background: #f8d7da;
      color: #721c24;
      border-radius: 5px;
      text-align: center;
    }
  }
}
</style>
