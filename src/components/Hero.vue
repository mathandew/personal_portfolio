<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content" data-aos="fade-up">
        <h1 class="greeting">Hello, I'm</h1>
        <h1 class="name">{{ name }}</h1>
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <div class="buttons">
          <a href="#contact" class="btn btn-primary">Hire Me</a>
          <a href="#projects" class="btn btn-outline">View Work</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      name: "Mathan Dewpal",
      title: "Full Stack Developer",
      description:
        "I create beautiful, functional, and user-friendly web applications.",
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  .hero-content {
    text-align: center;

    .greeting {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .name {
      font-size: 4rem;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .title {
      font-size: 2rem;
      margin-bottom: 20px;
      opacity: 0.9;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .description {
      max-width: 600px;
      margin: 0 auto 40px;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .buttons {
      display: flex;
      gap: 20px;
      justify-content: center;

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>
