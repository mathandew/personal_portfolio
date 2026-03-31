<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">About Me</h2>
      <div class="about-content">
        <div class="about-text" data-aos="fade-right">
          <h3>Who Am I?</h3>
          <p>{{ aboutText }}</p>
          <div class="personal-info">
            <div class="info-item">
              <strong>Name:</strong> <span>John Doe</span>
            </div>
            <div class="info-item">
              <strong>Email:</strong> <span>john.doe@example.com</span>
            </div>
            <div class="info-item">
              <strong>Location:</strong> <span>New York, USA</span>
            </div>
            <div class="info-item">
              <strong>Experience:</strong> <span>5+ Years</span>
            </div>
          </div>
        </div>
        <div class="about-stats" data-aos="fade-left">
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat">
            <div class="stat-number">30+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      aboutText:
        "I am a passionate Full Stack Developer with over 5 years of experience in building web applications. I love creating solutions that make a difference in people's lives. My expertise includes modern JavaScript frameworks, backend technologies, and database management.",
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  background: #f8f9fa;

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .about-text {
      h3 {
        font-size: 1.8rem;
        margin-bottom: 20px;
        color: #333;
      }

      p {
        color: #666;
        margin-bottom: 30px;
        line-height: 1.8;
      }

      .personal-info {
        .info-item {
          margin-bottom: 15px;
          padding: 10px;
          background: white;
          border-radius: 8px;

          strong {
            color: #333;
            width: 100px;
            display: inline-block;
          }

          span {
            color: #666;
          }
        }
      }
    }

    .about-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      .stat {
        text-align: center;
        padding: 30px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4caf50;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #666;
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
