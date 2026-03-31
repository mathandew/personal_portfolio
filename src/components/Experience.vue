<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Work Experience</h2>
      <div class="timeline">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="timeline-item"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-date">{{ exp.date }}</div>
            <h3>{{ exp.title }}</h3>
            <h4>{{ exp.company }}</h4>
            <p>{{ exp.description }}</p>
            <div class="timeline-skills">
              <span v-for="skill in exp.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      experiences: [
        {
          date: "2022 - Present",
          title: "Senior Full Stack Developer",
          company: "Tech Solutions Inc.",
          description:
            "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices.",
          skills: ["Vue.js", "Node.js", "AWS", "MongoDB"],
        },
        {
          date: "2019 - 2022",
          title: "Frontend Developer",
          company: "Creative Agency",
          description:
            "Developed responsive web applications, collaborated with designers, and optimized performance.",
          skills: ["React", "JavaScript", "SASS", "REST APIs"],
        },
        {
          date: "2017 - 2019",
          title: "Junior Web Developer",
          company: "Startup Hub",
          description:
            "Built and maintained client websites, fixed bugs, and implemented new features.",
          skills: ["HTML/CSS", "jQuery", "PHP", "MySQL"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.experience {
  background: white;

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: #4caf50;

      @media (max-width: 768px) {
        left: 30px;
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 50px;

      .timeline-dot {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 15px;
        height: 15px;
        background: #4caf50;
        border-radius: 50%;

        @media (max-width: 768px) {
          left: 30px;
        }
      }

      .timeline-content {
        width: calc(50% - 50px);
        padding: 20px;
        background: #f8f9fa;
        border-radius: 10px;
        position: relative;

        @media (max-width: 768px) {
          width: calc(100% - 70px);
          margin-left: 70px;
        }

        &::before {
          content: "";
          position: absolute;
          top: 20px;
          width: 20px;
          height: 20px;
          background: #f8f9fa;
          transform: rotate(45deg);
        }
      }

      &:nth-child(odd) .timeline-content {
        left: 0;

        &::before {
          right: -10px;
        }
      }

      &:nth-child(even) .timeline-content {
        left: calc(50% + 30px);

        &::before {
          left: -10px;
        }

        @media (max-width: 768px) {
          left: 0;

          &::before {
            left: -10px;
          }
        }
      }
    }
  }

  .timeline-date {
    color: #4caf50;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
    color: #333;
  }

  h4 {
    color: #666;
    margin-bottom: 15px;
    font-weight: 500;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .timeline-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      background: white;
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 0.8rem;
      color: #4caf50;
    }
  }
}
</style>
