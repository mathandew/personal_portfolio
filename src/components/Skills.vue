<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Technical Skills</h2>
      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
          data-aos="fade-up"
          :data-aos-delay="skill.delay"
        >
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <h3>{{ skill.name }}</h3>
          <div class="skill-bar">
            <div
              class="skill-progress"
              :style="{ width: skill.percentage + '%' }"
            ></div>
          </div>
          <span class="skill-percentage">{{ skill.percentage }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          name: "JavaScript/TypeScript",
          percentage: 90,
          icon: "fab fa-js",
          delay: 100,
        },
        {
          name: "Vue.js / React",
          percentage: 85,
          icon: "fab fa-vuejs",
          delay: 200,
        },
        {
          name: "Node.js / Python",
          percentage: 80,
          icon: "fab fa-node",
          delay: 300,
        },
        {
          name: "HTML5 / CSS3",
          percentage: 95,
          icon: "fab fa-html5",
          delay: 400,
        },
        {
          name: "MongoDB / PostgreSQL",
          percentage: 75,
          icon: "fas fa-database",
          delay: 500,
        },
        {
          name: "Git & GitHub",
          percentage: 85,
          icon: "fab fa-git-alt",
          delay: 600,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skills {
  background: white;

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;

    .skill-card {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      .skill-icon {
        font-size: 3rem;
        color: #4caf50;
        margin-bottom: 15px;
      }

      h3 {
        margin-bottom: 20px;
        color: #333;
      }

      .skill-bar {
        height: 8px;
        background: #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #4caf50, #8bc34a);
          border-radius: 4px;
          transition: width 1s ease;
        }
      }

      .skill-percentage {
        font-size: 0.9rem;
        color: #666;
      }
    }
  }
}
</style>
