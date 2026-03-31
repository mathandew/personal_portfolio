<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Featured Projects</h2>
      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="project.delay"
        >
          <div class="project-image">
            <div class="image-placeholder">
              <i :class="project.icon"></i>
            </div>
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech">{{
                tech
              }}</span>
            </div>
            <div class="project-links">
              <a
                :href="project.liveLink"
                target="_blank"
                class="btn btn-primary btn-small"
                >Live Demo</a
              >
              <a
                :href="project.githubLink"
                target="_blank"
                class="btn btn-outline btn-small"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "E-Commerce Platform",
          description:
            "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
          technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
          liveLink: "#",
          githubLink: "#",
          icon: "fas fa-shopping-cart",
          delay: 100,
        },
        {
          id: 2,
          title: "Task Management App",
          description:
            "A collaborative task management application with real-time updates and team features.",
          technologies: ["React", "Firebase", "Tailwind CSS"],
          liveLink: "#",
          githubLink: "#",
          icon: "fas fa-tasks",
          delay: 200,
        },
        {
          id: 3,
          title: "Portfolio Website",
          description:
            "A modern, responsive portfolio website built with Vue.js and SCSS.",
          technologies: ["Vue.js", "SCSS", "AOS"],
          liveLink: "#",
          githubLink: "#",
          icon: "fas fa-code",
          delay: 300,
        },
        {
          id: 4,
          title: "Weather Dashboard",
          description:
            "Real-time weather dashboard with interactive maps and forecasts.",
          technologies: ["JavaScript", "API", "Chart.js"],
          liveLink: "#",
          githubLink: "#",
          icon: "fas fa-cloud-sun",
          delay: 400,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  background: #f8f9fa;

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;

    .project-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      .project-image {
        height: 200px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;

        .image-placeholder {
          i {
            font-size: 4rem;
            color: white;
          }
        }
      }

      .project-info {
        padding: 25px;

        h3 {
          margin-bottom: 15px;
          color: #333;
        }

        p {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;

          span {
            background: #f0f0f0;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            color: #666;
          }
        }

        .project-links {
          display: flex;
          gap: 15px;

          .btn-small {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>
